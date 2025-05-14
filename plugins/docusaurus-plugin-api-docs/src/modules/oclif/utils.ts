import fs from "fs";
import path from "path";
import { TOPICS, type Commands, type ParsedCommand } from "./types";
import { normalizeUrl } from "@docusaurus/utils";

export function convertToCommands(
  parsedCommands: Array<ParsedCommand>
): Commands {
  const commands: Commands = {
    config: {
      print: {} as any,
      set: {} as any,
    },
    aptos: {},
    evm: {},
    near: {},
    solana: {},
  };

  for (const parsedCommand of parsedCommands) {
    if (!parsedCommand.topics || parsedCommand.topics.length === 0) {
      continue;
    }
    const [commandType, commandTopic] = parsedCommand.topics;

    switch (commandType) {
      case "config":
        if (commandTopic === "print" || commandTopic === "set") {
          commands.config[commandTopic] = parsedCommand;
        }

        break;
      case "aptos":
      case "evm":
      case "near":
      case "solana":
        if (!commands[commandType][commandTopic]) {
          commands[commandType][commandTopic] = [];
        }
        commands[commandType][commandTopic].push(parsedCommand);
        break;
      default:
      // throw new Error(`Unknown command type: ${commandType}`);
    }
  }

  return commands;
}

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

function parseCommandBlock(rawText: string): ParsedCommand | undefined {
  const regex =
    /USAGE\s*([\s\S]*?)(?:(?:\n\nARGUMENTS\s*([\s\S]*?))?\n\n(?:FLAGS\s*([\s\S]*?))?\n\n(?:DESCRIPTION\s*([\s\S]*?))?(?:\n\nALIASES\s*([\s\S]*?))?(?:\n\nEXAMPLES\s*([\s\S]*?))?)?$/;
  const match = rawText.match(regex);

  if (!match) {
    throw new Error("Invalid command block format.");
  }

  const [, _usage, args, flags, description, aliases, examples] = match;

  let usage = _usage.trim();
  if (usage.startsWith("$ ")) {
    usage = usage.slice(2);
  }
  const command = extractCommand(usage);
  const topics = command.split(" ").slice(1);

  if (topics.length < 2) {
    return undefined;
  }

  const topic = topics[0];
  if (!TOPICS.includes(topic)) {
    return undefined;
  }

  const subTopic = topics[1];

  const rest = (topics.slice(2) ?? []).join(" ").replaceAll(" ", "_");

  const id = [topic, subTopic, rest].filter(Boolean).join("-");

  const permalink = normalizeUrl(["/cli", id.replaceAll("-", "/")]);

  const parsedCommand: ParsedCommand = {
    id,
    permalink,
    topic,
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

  return commandBlocks
    .map(parseCommandBlock)
    .filter(Boolean) as ParsedCommand[];
}
