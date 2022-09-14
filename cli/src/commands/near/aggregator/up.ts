import { Flags } from "@oclif/core";
import Big from "big.js";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
import fs from "fs";

const parseString = (
  object: Record<string, any>,
  key: string,
  optional = true
): string | undefined => {
  return key in object
    ? JSON.stringify(object[key])
    : optional
    ? undefined
    : "";
};

const parseInt = (
  object: Record<string, any>,
  key: string,
  optional = true
): number | undefined => {
  return key in object
    ? Number.parseInt(object[key])
    : optional
    ? undefined
    : 0;
};

const parseFloat = (
  object: Record<string, any>,
  key: string,
  optional = true
): number | undefined => {
  return key in object
    ? Number.parseFloat(object[key])
    : optional
    ? undefined
    : 0.0;
};

const parseBoolean = (
  object: Record<string, any>,
  key: string,
  optional = true
): boolean | undefined => {
  return key in object ? Boolean(object[key]) : optional ? undefined : false;
};

const parseBig = (
  object: Record<string, any>,
  key: string,
  optional = true
): Big | undefined => {
  return key in object
    ? new Big(Number.parseFloat(object[key]))
    : optional
    ? undefined
    : new Big(0);
};

const aggregatorJsonFields = [
  ["authority", "string"],
  ["queue", "Address"],
  ["crank", "Address"],
  ["name", "string"],
  ["metadata", "string"],
  ["batchSize", "number"],
  ["minOracleResults", "number"],
  ["minJobResults", "number"],
  ["minUpdateDelaySeconds", "number"],
  ["startAfter", "number"],
  ["varianceThreshold", "SwitchboardDecimal"],
  ["forceReportPeriod", "number"],
];

function validateFeedJson(json: Record<string, any>) {
  const obj = {};
  for (const field of aggregatorJsonFields) {
    switch (field[1]) {
      case "string": {
        obj[field[0]] = parseString(json, field[0]);
      }
    }
  }
}

export default class AggregatorUp extends BaseCommand {
  // static enableJsonFlag = true;

  static description =
    "anneal an aggregator and sync settings and target lease amount";

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate named account that is the authority for the oracle",
    }),
  };

  static args = [
    {
      name: "aggregatorDefinitionPath",
      description: "file path to aggregator containing the desired settings",
      required: true,
    },
  ];

  async run() {
    const { flags, args } = await this.parse(AggregatorUp);

    const filePath = this.normalizePath(args.aggregatorDefinitionPath);
    const json = JSON.parse(
      fs
        .readFileSync(filePath, "utf-8")
        .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/g, "")
    );

    if (!("address" in json)) {
      throw new Error(`JSON file must contain an 'address'`);
    }
  }

  async catch(error) {
    super.catch(error, "Failed to anneal near aggregator");
  }
}
