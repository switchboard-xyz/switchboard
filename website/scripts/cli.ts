/**
 * This script will
 *  - Generate OCLIF CLI documentation
 *  - Add underscores to filenames so they are hidden in docusaurus sidebar
 *  - Remove first two lines so they are partial MDX files and can be imported
 */

import shell from "shelljs";
import fs from "fs";
import path from "path";

export function generateCliDocs(projectRoot: string) {
  const cliPath = path.join(projectRoot, "cli");
  const cliOutPath = path.join(projectRoot, "website", "api", "cli");
  const cliOutRelPath = path.relative(cliPath, cliOutPath);

  // Generate Oclif documentation
  shell.cd(cliPath);
  if (shell.exec(`npx oclif readme`).code !== 0) {
    shell.echo(`Error: Oclif failed to generate documentation`);
    shell.exit(1);
  }
  if (
    shell.exec(`npx oclif readme --multi --dir ${cliOutRelPath}`).code !== 0
  ) {
    shell.echo(`Error: Oclif failed to generate documentation`);
    shell.exit(1);
  }

  shell.cd(cliOutPath);

  // Remove old underscored files
  shell.ls(`_*.md`).forEach((file) => {
    shell.rm(file);
  });

  // Add underscores, remove first two lines, and update documentation path
  shell.ls(`*.md`).forEach((file) => {
    // add underscore to filename
    const fileName = path.basename(file);
    const underscoredFileName = "_" + fileName;
    shell.mv("-f", fileName, underscoredFileName);

    // TODO: Update URL to release tag
    // update github documentation links
    shell.sed(
      "-i",
      `https://github.com/switchboard-xyz/sbv2-core/blob/.*/src`,
      "https://github.com/switchboard-xyz/sbv2-core/tree/main/cli/src",
      underscoredFileName
    );

    // remove first two lines
    fs.writeFileSync(
      underscoredFileName,
      fs
        .readFileSync(underscoredFileName, "utf8")
        .split("\n")
        .slice(2)
        .join("\n")
    );
  });
}
