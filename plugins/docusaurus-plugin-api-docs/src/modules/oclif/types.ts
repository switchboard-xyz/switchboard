import type { VersionMetadata } from "../../types";

export const TOPICS = ["config", "aptos", "near", "solana"];

type CommandTopic = (typeof TOPICS)[number];

export type ParsedCommand = {
  id: string;
  command: string; // sbv2 solana aggregator create
  markdown: string;
  topic: CommandTopic;
  permalink: string;
  topics: Array<string>;
  usage?: string;
  args?: Array<{ arg: string; description: string }>;
  flags?: Array<{ flag: string; description: string }>;
  description?: string;
  aliases?: Array<string>;
  examples?: Array<string>;
};

export interface CommandSubTopic {
  [k: string]: Array<ParsedCommand>;
}

export interface Commands {
  config: {
    print: ParsedCommand;
    set: ParsedCommand;
  };
  aptos: CommandSubTopic;
  near: CommandSubTopic;
  solana: CommandSubTopic;
}

export type OclifCommandMap = Record<string, ParsedCommand>;

export type CliVersionMetadata = VersionMetadata & {
  commands: ParsedCommand[];
  readme?: string;
};
