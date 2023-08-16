import { CliBaseCommand as BaseCommand } from "../BaseCommand";

import { Args, Flags } from "@oclif/core";
import { downloadRelease } from "@terascope/fetch-github-release";
import chalk from "chalk";
import { execSync } from "child_process";
import { async as glob } from "fast-glob";
import fs from "fs";
import os from "os";
import path from "path";

export default class TemplateCommand extends BaseCommand {
  static description = "initialize a new function template";

  static enableJsonFlag = false;

  static flags = {
    ...BaseCommand.flags,
    dir: Flags.string({
      char: "d",
      description:
        "name of the directory to initialize the new function template",
      required: false,
    }),
  };

  static args = {
    template: Args.string({
      name: "template",
      required: true,
      description: "type of template to initialize",
      options: ["solana", "solana-anchor", "evm-rust", "evm-typescript"],
    }),
  };

  async run() {
    const { args, flags } = await this.parse(TemplateCommand);

    const outputDir = this.normalizeDirPath(
      flags.dir ? flags.dir : `${args.template}-function`
    );

    if (!(await isWriteable(path.dirname(outputDir)))) {
      this.log(
        "The application path is not writable, please check folder permissions and try again."
      );
      this.error(
        "It is likely you do not have write permissions for this folder."
      );
    }

    const appName = path.basename(outputDir);

    await makeDir(outputDir);
    if (!isFolderEmpty(outputDir, appName)) {
      process.exit(1);
    }

    this.log(
      `Creating a new Switchboard function in ${chalk.green(outputDir)}.`
    );

    await downloadTemplate(args.template, outputDir);

    const isWindows = os.platform() === "win32";

    if (isWindows) {
      this.log(`Windows setup script is not supported`);
    } else {
      const setupScript = path.join(outputDir, "setup.sh");
      if (fs.existsSync(setupScript)) {
        execSync("./setup.sh", {
          encoding: "utf-8",
          cwd: outputDir,
          stdio: "inherit",
        });
        fs.rmSync(setupScript, { force: true });
      }
    }
  }

  async catch(error: any) {
    super.catch(error, "template command failed");
  }
}

export async function isWriteable(directory: string): Promise<boolean> {
  try {
    await fs.promises.access(directory, (fs.constants || fs).W_OK);
    return true;
  } catch {
    return false;
  }
}

const DEFAULT_MAKE_DIR_OPTIONS: fs.MakeDirectoryOptions | fs.Mode = {
  recursive: true,
};

export function makeDir(
  root: string,
  options: fs.MakeDirectoryOptions | fs.Mode = DEFAULT_MAKE_DIR_OPTIONS
): Promise<string | undefined> {
  return fs.promises.mkdir(root, options);
}

export function isFolderEmpty(root: string, name: string): boolean {
  const validFiles = new Set([
    ".DS_Store",
    ".git",
    ".gitattributes",
    ".gitignore",
    ".gitlab-ci.yml",
    ".hg",
    ".hgcheck",
    ".hgignore",
    ".idea",
    ".npmignore",
    ".travis.yml",
    "LICENSE",
    "Thumbs.db",
    "docs",
    "mkdocs.yml",
    "npm-debug.log",
    "yarn-debug.log",
    "yarn-error.log",
    "yarnrc.yml",
    ".yarn",
  ]);

  const conflicts = fs
    .readdirSync(root)
    .filter((file) => !validFiles.has(file))
    // Support IntelliJ IDEA-based editors
    .filter((file) => !/\.iml$/.test(file));

  if (conflicts.length > 0) {
    console.log(
      `The directory ${chalk.green(name)} contains files that could conflict:`
    );
    console.log();
    for (const file of conflicts) {
      try {
        const stats = fs.lstatSync(path.join(root, file));
        if (stats.isDirectory()) {
          console.log(`  ${chalk.blue(file)}/`);
        } else {
          console.log(`  ${file}`);
        }
      } catch {
        console.log(`  ${file}`);
      }
    }
    console.log();
    console.log(
      "Either try using a new directory name, or remove the files listed above."
    );
    console.log();
    return false;
  }

  return true;
}

interface CopyOption {
  cwd?: string;
  rename?: (basename: string) => string;
  parents?: boolean;
}

const identity = (x: string) => x;

export const copy = async (
  src: string | string[],
  dest: string,
  { cwd, rename = identity, parents = true }: CopyOption = {}
) => {
  const source = typeof src === "string" ? [src] : src;

  if (source.length === 0 || !dest) {
    throw new TypeError("`src` and `dest` are required");
  }

  const sourceFiles = await glob(source, {
    cwd,
    dot: true,
    absolute: false,
    stats: false,
  });

  const destRelativeToCwd = cwd ? path.resolve(cwd, dest) : dest;

  return Promise.all(
    sourceFiles.map(async (p) => {
      const dirname = path.dirname(p);
      const basename = rename(path.basename(p));

      const from = cwd ? path.resolve(cwd, p) : p;
      const to = parents
        ? path.join(destRelativeToCwd, dirname, basename)
        : path.join(destRelativeToCwd, basename);

      // Ensure the destination directory exists
      await fs.promises.mkdir(path.dirname(to), { recursive: true });

      return fs.promises.copyFile(from, to);
    })
  );
};

export type RawRelease = {
  url: string;
  id: number;
  tag_name: string;
  name: string;
  html_url: string;
  published_at: string;
  created_at: string;
  draft?: boolean;
  prerelease?: boolean;
};

async function downloadTemplate(template: string, outputLocation: string) {
  const response = await fetch(
    `https://api.github.com/repos/switchboard-xyz/function-templates/releases`,
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    }
  );
  const releases: Array<RawRelease> = await response.json();

  const sortedReleases = releases.sort(
    (a, b) => Date.parse(b.published_at) - Date.parse(b.published_at)
  );

  if (sortedReleases.length === 0) {
    throw new Error(
      `Found no Github releases for switchboard-xyz/function-templates`
    );
  }

  console.log(`Latest Release: ${sortedReleases[0].name}`);

  await downloadRelease(
    "switchboard-xyz",
    "function-templates",
    outputLocation,
    (release) => release.name === sortedReleases[0].name,
    (asset) => asset.name === `${template}.zip`,
    false,
    false
  );
}

function findGitRoot(startingPath: string, maxLevels = 4): string | undefined {
  let currentPath = startingPath;

  for (let i = 0; i < maxLevels; i++) {
    const potentialGitDir = path.join(currentPath, ".git");

    if (
      fs.existsSync(potentialGitDir) &&
      fs.statSync(potentialGitDir).isDirectory()
    ) {
      return currentPath;
    }

    // Move one level up
    currentPath = path.dirname(currentPath);
  }
}
