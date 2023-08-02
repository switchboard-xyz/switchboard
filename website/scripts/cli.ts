/**
 * This script will
 *  - Generate OCLIF CLI documentation
 *  - Add underscores to filenames so they are hidden in docusaurus sidebar
 *  - Remove first two lines so they are partial MDX files and can be imported
 */

import shell from "shelljs";
import fs from "fs";
import path from "path";

type ParsedCommand = {
  command: string; // sbv2 solana aggregator create
  markdown: string;
  topics: Array<string>;
  usage?: string;
  args?: Array<{ arg: string; description: string }>;
  flags?: Array<{ flag: string; description: string }>;
  description?: string;
  aliases?: Array<string>;
  examples?: Array<string>;
};

function extractCommand(input: string): string {
  const match = input.match(/^(.*?)(\[|\-|[A-Z])/);
  return match ? match[1].trim() : input;
}

function parseFlags(
  flagString: string
): Array<{ flag: string; description: string }> {
  const flagLines = flagString.split("\n");
  const flags: Array<{ flag: string; description: string }> = [];
  let currentDescription = "";

  for (const line of flagLines) {
    if (line.startsWith("  -")) {
      if (currentDescription) {
        const [flag, ...descriptionParts] = currentDescription.split(/\s{2,}/);
        const description = descriptionParts.join(" ");
        flags.push({ flag, description });
      }
      currentDescription = line.trim();
    } else {
      currentDescription += " " + line.trim();
    }
  }

  if (currentDescription) {
    const [flag, ...descriptionParts] = currentDescription.split(/\s{2,}/);
    const description = descriptionParts.join(" ");
    flags.push({ flag, description });
  }

  return flags;
}

function parseCommandBlock(rawText: string): ParsedCommand {
  const regex =
    /USAGE\s*([\s\S]*?)(?:(?:\n\nARGUMENTS\s*([\s\S]*?))?\n\n(?:FLAGS\s*([\s\S]*?))?\n\n(?:DESCRIPTION\s*([\s\S]*?))?(?:\n\nALIASES\s*([\s\S]*?))?(?:\n\nEXAMPLES\s*([\s\S]*?))?)?$/;
  const match = rawText.match(regex);

  if (!match) {
    console.log(rawText);
    throw new Error("Invalid command block format.");
  }

  const [, _usage, args, flags, description, aliases, examples] = match;

  let usage = _usage.trim();
  if (usage.startsWith("$ ")) {
    usage = usage.slice(2);
  }
  const command = extractCommand(usage);
  const topics = command.split(" ").slice(1);

  const parsedCommand: ParsedCommand = {
    command,
    topics,
    markdown: rawText,
    usage: usage,
  };

  if (args) {
    parsedCommand.args = args
      .trim()
      .split("\n")
      .map((myArg) => {
        const [key, description] = myArg.split(/\s{2,}/, 2);
        return { arg: key.trim(), description: description.trim() };
      });
  }

  if (flags) {
    parsedCommand.flags = parseFlags(flags.trim());
  }

  if (description) {
    parsedCommand.description = description.trim();
  }

  if (aliases) {
    parsedCommand.aliases = aliases
      .trim()
      .split("\n")
      .map((alias) => {
        const a = alias.trim();
        return a.startsWith("$ ") ? a.slice(2) : a;
      });
  }

  if (examples) {
    parsedCommand.examples = examples
      .trim()
      .split("\n")
      .map((example) => {
        const e = example.trim();
        return e.startsWith("$ ") ? e.slice(2) : e;
      });
  }

  return parsedCommand;
}

function parseCommandBlockOld(rawText: string): ParsedCommand {
  const usageMatch = rawText.match(/USAGE\s*([\s\S]*?)\n\n/);
  const argsMatch = rawText.match(/ARGUMENTS\s*([\s\S]*?)\n\nFLAGS/);
  const flagsMatch = rawText.match(/FLAGS\s*([\s\S]*?)\n\nDESCRIPTION/);
  const descriptionMatch = rawText.match(
    /DESCRIPTION\s*([\s\S]*?)(\n\nALIASES|\n\nEXAMPLES|$)/
  );
  const aliasesMatch = rawText.match(/ALIASES\s*([\s\S]*?)\n\nEXAMPLES/);

  if (!usageMatch) {
    throw new Error(`Failed to parse command block`);
  }

  const usage = usageMatch[1].trim().slice(2);
  const command = extractCommand(usage);

  const topics = command.split(" ").slice(1);

  const parsedCommand: ParsedCommand = {
    command,
    topics,
    markdown: rawText,
    usage,
  };

  if (flagsMatch) {
    parsedCommand.flags = parseFlags(flagsMatch[1].trim());
  }
  if (descriptionMatch) {
    parsedCommand.description = descriptionMatch[1].trim();
  }
  if (aliasesMatch) {
    parsedCommand.aliases = aliasesMatch[1]
      .trim()
      .split("\n")
      .map((alias) => alias.trim());
  }
  if (argsMatch) {
    parsedCommand.args = argsMatch[1]
      .trim()
      .split("\n")
      .map((myArg) => {
        const [key, description] = myArg.split(/\s{2,}/, 2);
        return { arg: key.trim(), description: description.trim() };
      });
  }

  return parsedCommand;
}

export function extractCommands(readmePath: string): Array<ParsedCommand> {
  const readme = fs.readFileSync(readmePath, "utf-8");

  const startDelimiter = "<!-- commands -->";
  const endDelimiter = "<!-- commandsstop -->";

  const startIndex = readme.indexOf(startDelimiter);
  const endIndex = readme.indexOf(endDelimiter);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error("Commands section not found in the README.md file");
  }

  const commandsSection = readme.slice(
    startIndex + startDelimiter.length,
    endIndex
  );
  const commandBlockRegex = /```[a-z]*\n([\s\S]*?)```/g;
  const commandBlocks = Array.from(
    commandsSection.matchAll(commandBlockRegex)
  ).map((m) => m[1]);

  return commandBlocks.map(parseCommandBlock);
}

function updateReadme(cliPath: string) {
  const pwd = shell.exec("pwd");
  shell.cd(cliPath);
  if (shell.exec(`npx oclif readme`).code !== 0) {
    throw new Error(`Error: Oclif failed to generate documentation`);
  }
  shell.cd(pwd);
}

export function generateCliDocs(projectRoot: string) {
  const cliPath = path.join(projectRoot, "cli");
  const readmePath = path.join(cliPath, "README.md");

  updateReadme(cliPath);

  shell.sed(
    "-i",
    `https://github.com/switchboard-xyz/core-sdk/blob/.*/src`,
    "https://github.com/switchboard-xyz/core-sdk/tree/main/cli/src",
    readmePath
  );

  const commands = extractCommands(readmePath);

  console.log(`Found ${commands.length} commands`);

  fs.writeFileSync("cli.json", JSON.stringify(commands, undefined, 2));
}

generateCliDocs(path.join(__dirname, "..", ".."));
