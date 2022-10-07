import shell from "shelljs";
import fs from "fs";
import fse from "fs-extra";
import path from "path";

class CliCommand {
  cmd: string;

  constructor(
    readonly docs: string,
    readonly chain: string,
    readonly topic: string,
    readonly command: string,
    readonly description: string
  ) {
    this.cmd = command.replace(this.chain, "").replace(this.topic, "").trim();
    if (this.cmd === "") {
      this.cmd = "index";
    }
  }

  get commandName() {
    return `sbv2 ${this.chain} ${this.topic} ${this.command}`;
  }

  toString() {
    return (
      this.description + "\n\n" + "```asciidoc\n" + this.docs + "\n```" + "\n"
    );
  }

  write(outputPath: string) {
    const outputDir = path.join(outputPath, this.chain, this.topic);
    fs.mkdirSync(outputDir, { recursive: true });

    const outputFile = path.join(
      outputDir,
      `${this.cmd.replaceAll(" ", "_")}.md`
    );

    fs.writeFileSync(outputFile, this.toString());
  }

  static writeByChain(
    chain: string,
    index: number,
    commands: Record<string, CliCommand[]>,
    outputPath: string
  ) {
    const chainDir = path.join(outputPath, chain);
    fs.mkdirSync(chainDir, { recursive: true });

    fs.writeFileSync(
      path.join(chainDir, "_category_.json"),
      `{"label": "${
        chain[0].toUpperCase() + chain.slice(1)
      }","position": ${index}}`
    );

    const toc: string[] = [];

    // toc.push(` - [sbv2 ${chain}](/dev/cli/${chain})`);

    Object.entries(commands)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .forEach((a, i) => {
        // for each topic, write the commands, __category__.json, and overview table of contents
        const topic = a[0];
        const topicDir = path.join(chainDir, topic);
        fse.emptyDirSync(topicDir);
        fs.mkdirSync(topicDir, { recursive: true });

        fs.writeFileSync(
          path.join(topicDir, "_category_.json"),
          `{"label": "${topic[0].toUpperCase() + topic.slice(1)}","position": ${
            i + 1
          }0}`
        );

        //         fs.writeFileSync(
        //           path.join(topicDir, "Overview.md"),
        //           `---\nsidebar_position: 1\n\ntitle: Overview\nslug: .\n---
        // Coming Soon
        // `
        //         );

        toc.push(`## sbv2 ${chain} ${topic}`);

        a[1].forEach((c, i) => {
          toc.push(
            ` - [sbv2 ${chain} ${topic} ${
              c.cmd
            }](/dev/cli/${chain}/${topic}/${c.cmd
              .replace(" ", "_")
              .replace("index", "")})`
          );
          const commandName = c.cmd
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

          const fileName = path.join(
            topicDir,
            `${(c.cmd + ".md").replaceAll(" ", "_")}`
          );
          fs.writeFileSync(
            fileName,
            `---\n\ntitle: ${commandName}\n---\n${c.toString()}`
          );
        });
      });

    fs.writeFileSync(
      path.join(chainDir, "_Table_of_Contents.md"),
      `${toc.join("\n")}`
    );
  }
}

export function cli(cliReadmePath: string, outputDirectory: string) {
  console.log("Generating partial markdown files for the CLI ...");

  const outputDir =
    outputDirectory.startsWith("/") ||
    outputDirectory.startsWith("C:") ||
    outputDirectory.startsWith("D:")
      ? outputDirectory
      : path.join(process.cwd(), outputDirectory);

  if (!fs.existsSync(cliReadmePath)) {
    throw new Error(`Failed to find CLI README.md at ${cliReadmePath}`);
  }
  const readmeFilestring = fs.readFileSync(cliReadmePath, "utf8");
  const cliPath = path.dirname(cliReadmePath);

  const currentPath = shell.pwd().toString();
  shell.cd(cliPath);
  if (shell.exec(`npx oclif readme`).code !== 0) {
    shell.echo(`Error: Oclif failed to generate documentation`);
    shell.exit(1);
  }
  shell.cd(currentPath);

  const matches = Array.from(
    readmeFilestring.matchAll(
      /`sbv2 (?<command>[A-z\s]*?)`\n{0,2}(?<description>[A-z\s]*?)?\n{0,2}```\n(?<docs>[\S\s]*?)\n```\n{0,2}(?<source>[A-z].*)?/gm
    )
  );

  if (!matches || matches.length === 0) {
    throw new Error(`Failed to find any commands`);
  }

  const commands = matches
    .map((m) => {
      if (!("groups" in m)) {
        return undefined;
      }

      const description = m.groups["description"] ?? "";
      const docs = m.groups["docs"] ?? "";

      let command = m.groups["command"] ?? "";

      // get index of first upper case letter or open bracket to trim command string
      for (let i = 0; i < command.length; i++) {
        const char = command.charAt(i);
        if (char !== " " && (char === "[" || char == char.toUpperCase())) {
          command = command.slice(0, i - 1);
          break;
        }
      }

      const words = command.split(" ");
      const chain = words.shift() ?? "";
      const topic = words.shift() ?? "";

      return new CliCommand(
        docs.trim(),
        chain.trim(),
        topic.trim(),
        command.trim(),
        description.trim()
      );
    })
    .filter(Boolean);

  const commandsByChain: {
    config: CliCommand[];
    aptos: CliCommand[];
    near: CliCommand[];
    solana: CliCommand[];
  } = commands.reduce((all, c) => {
    all[c.chain] = all[c.chain] || [];
    all[c.chain].push(c);
    return all;
  }, Object.create(null));

  console.log(
    `Config: ${commandsByChain.config.length}\nAptos: ${commandsByChain.aptos.length}\nNear: ${commandsByChain.near.length}\nSolana: ${commandsByChain.solana.length}`
  );

  CliCommand.writeByChain(
    "config",
    10,
    commandsByChain["config"].reduce((all, c) => {
      all[c.topic] = all[c.topic] || [];
      all[c.topic].push(c);
      return all;
    }, Object.create(null)),
    outputDir
  );

  CliCommand.writeByChain(
    "aptos",
    20,
    commandsByChain["aptos"].reduce((all, c) => {
      all[c.topic] = all[c.topic] || [];
      all[c.topic].push(c);
      return all;
    }, Object.create(null)),
    outputDir
  );

  CliCommand.writeByChain(
    "near",
    30,
    commandsByChain["near"].reduce((all, c) => {
      all[c.topic] = all[c.topic] || [];
      all[c.topic].push(c);
      return all;
    }, Object.create(null)),
    outputDir
  );

  CliCommand.writeByChain(
    "solana",
    40,
    commandsByChain["solana"].reduce((all, c) => {
      all[c.topic] = all[c.topic] || [];
      all[c.topic].push(c);
      return all;
    }, Object.create(null)),
    outputDir
  );

  // commands.forEach((c) => {
  //   if (skipTopics.includes(c.chain)) {
  //     return;
  //   }
  //   c.write(outputPath);
  // });
}
