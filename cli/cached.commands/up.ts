// import { Flags } from "@oclif/core";
// import Big from "big.js";
// import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
// import fs from "fs";
// import { toUtf8 } from "../../../utils";
// import {
//   AggregatorAccount,
//   EscrowAccount,
//   SwitchboardDecimal,
// } from "@switchboard-xyz/near.js";

// const parseString = (
//   object: Record<string, any>,
//   key: string,
//   optional = true
// ): string | undefined => {
//   return key in object
//     ? JSON.stringify(object[key])
//     : optional
//     ? undefined
//     : "";
// };

// const parseInt = (
//   object: Record<string, any>,
//   key: string,
//   optional = true
// ): number | undefined => {
//   return key in object
//     ? Number.parseInt(object[key])
//     : optional
//     ? undefined
//     : 0;
// };

// const parseFloat = (
//   object: Record<string, any>,
//   key: string,
//   optional = true
// ): number | undefined => {
//   return key in object
//     ? Number.parseFloat(object[key])
//     : optional
//     ? undefined
//     : 0.0;
// };

// const parseBoolean = (
//   object: Record<string, any>,
//   key: string,
//   optional = true
// ): boolean | undefined => {
//   return key in object ? Boolean(object[key]) : optional ? undefined : false;
// };

// const parseBig = (
//   object: Record<string, any>,
//   key: string,
//   optional = true
// ): Big | undefined => {
//   return key in object
//     ? new Big(Number.parseFloat(object[key]))
//     : optional
//     ? undefined
//     : new Big(0);
// };

// const aggregatorJsonFields = [
//   ["authority", "string"],
//   ["queue", "Address"],
//   ["crank", "Address"],
//   ["name", "string"],
//   ["metadata", "string"],
//   ["batchSize", "number"],
//   ["minOracleResults", "number"],
//   ["minJobResults", "number"],
//   ["minUpdateDelaySeconds", "number"],
//   ["startAfter", "number"],
//   ["varianceThreshold", "SwitchboardDecimal"],
//   ["forceReportPeriod", "number"],
// ];

// function validateFeedJson(json: Record<string, any>) {
//   const obj = {};
//   for (const field of aggregatorJsonFields) {
//     switch (field[1]) {
//       case "string": {
//         obj[field[0]] = parseString(json, field[0]);
//       }
//     }
//   }
// }

// function validateProperty<U, T extends string | number | number[] | Uint8Array>(
//   currentValue: T,
//   jsonValue: T | undefined,
//   transform: (val: T) => U = (val: T): U => val as unknown as U
// ): U | undefined {
//   if (jsonValue === undefined) {
//     return undefined;
//   }

//   if (
//     (typeof currentValue === "string" && typeof jsonValue === "string") ||
//     (typeof currentValue == "number" && typeof jsonValue == "number")
//   ) {
//     if (currentValue !== jsonValue) {
//       return transform(jsonValue);
//     }
//   } else if (Array.isArray(currentValue) && Array.isArray(jsonValue)) {
//     if (
//       currentValue.length === jsonValue.length &&
//       currentValue.every((v, i) => v === jsonValue[i])
//     ) {
//       return transform(jsonValue);
//     }
//   }

//   return undefined;
// }

// export interface IAggregator {
//   address: Array<number> | string;
//   authority: string;
//   queue: Array<number> | string;
//   name: string;
//   metadata: string;
//   batchSize: number;
//   minOracleResults: number;
//   minJobResults: number;
//   minUpdateDelaySeconds: number;
//   startAfter: string;
//   varianceThreshold: number;
//   forceReportPeriod: string;
//   crank: Array<number> | string;
//   rewardEscrow: Array<number> | string;
// }

// export interface IAggregatorSetConfigs {
//   authority: string;
//   queue: Uint8Array;
//   name: Buffer;
//   metadata: Buffer;
//   batchSize: number;
//   minOracleResults: number;
//   minJobResults: number;
//   minUpdateDelaySeconds: number;
//   startAfter: number;
//   varianceThreshold: SwitchboardDecimal;
//   forceReportPeriod: number;
//   crank: Uint8Array;
//   rewardEscrow: Uint8Array;
// }

// export default class AggregatorUp extends BaseCommand {
//   // static enableJsonFlag = true;
//   static hidden = true;

//   static description =
//     "anneal an aggregator and sync settings and target lease amount";

//   static flags = {
//     ...BaseCommand.flags,
//     authority: Flags.string({
//       char: "a",
//       description:
//         "alternate named account that is the authority for the oracle",
//     }),
//   };

//   static args = [
//     {
//       name: "aggregatorDefinitionPath",
//       description: "file path to aggregator containing the desired settings",
//       required: true,
//     },
//   ];

//   async run() {
//     const { flags, args } = await this.parse(AggregatorUp);

//     const filePath = this.normalizePath(args.aggregatorDefinitionPath);
//     const json: Partial<IAggregator> = JSON.parse(
//       fs
//         .readFileSync(filePath, "utf-8")
//         .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/g, "")
//     );

//     if ("address" in json) {
//       // load existing feed
//       const [aggregatorAccount, aggregatorState] = await this.loadAggregator(
//         json.address
//       );
//       let changedFields: Partial<IAggregatorSetConfigs> = {
//         authority: validateProperty(aggregatorState.authority, json.authority),
//         queue: validateProperty(
//           aggregatorState.queue,
//           this.parseAddress(json.queue)
//         ),
//         name: validateProperty(toUtf8(aggregatorState.name), json.name, (val) =>
//           Buffer.from(val, "utf-8")
//         ),
//         metadata: validateProperty(
//           toUtf8(aggregatorState.metadata),
//           json.metadata,
//           (val) => Buffer.from(val, "utf-8")
//         ),
//         batchSize: validateProperty(
//           aggregatorState.oracleRequestBatchSize,
//           json.batchSize
//         ),
//         minOracleResults: validateProperty(
//           aggregatorState.minOracleResults,
//           json.minOracleResults
//         ),
//         minJobResults: validateProperty(
//           aggregatorState.minJobResults,
//           json.minJobResults
//         ),
//         minUpdateDelaySeconds: validateProperty(
//           aggregatorState.minUpdateDelaySeconds,
//           json.minUpdateDelaySeconds
//         ),
//         startAfter: validateProperty(
//           aggregatorState.startAfter.toString(),
//           json.startAfter
//         ),
//         varianceThreshold: validateProperty(
//           SwitchboardDecimal.from(aggregatorState.varianceThreshold)
//             .toBig()
//             .toNumber(),
//           json.varianceThreshold
//         ),
//         forceReportPeriod: validateProperty(
//           aggregatorState.forceReportPeriod.toString(),
//           json.forceReportPeriod
//         ),
//         crank: validateProperty(
//           aggregatorState.crank,
//           this.parseAddress(json.crank)
//         ),
//         rewardEscrow: validateProperty(
//           aggregatorState.rewardEscrow,
//           this.parseAddress(json.rewardEscrow)
//         ),
//       };
//       Object.keys(changedFields).forEach((key) => {
//         if (changedFields[key] === undefined) {
//           delete changedFields[key];
//         }
//       });
//       const changedKeys = Object.keys(changedFields);
//       if (changedKeys.length > 0) {
//         this.logger.info(
//           `Found ${changedKeys.length} changed properties [${changedKeys.join(
//             ", "
//           )}]`
//         );
//         const setConfig = await aggregatorAccount.setConfigs(changedFields);
//       } else {
//         this.logger.info(`No changed properties`);
//       }
//     } else {
//       // treat as a new feed
//       const requiredProperties = ["queue"];
//       requiredProperties.forEach((prop) => {
//         const keys = Object.keys(json);
//         if (!keys.includes(prop)) {
//           throw new Error(`Missing property in JSON file, '${prop}'`);
//         }
//       });
//       const aggregator = await AggregatorAccount.create(this.program, {
//         authority: json.authority ?? this.program.account.accountId,
//         queue: this.parseAddress(json.queue),
//         name: Buffer.from(json.name ?? ""),
//         metadata: Buffer.from(json.metadata ?? ""),
//         batchSize: json.batchSize ?? 1,
//         minOracleResults: json.minOracleResults ?? 1,
//         minJobResults: json.minJobResults ?? 1,
//         minUpdateDelaySeconds: json.minUpdateDelaySeconds ?? 10,
//         startAfter: Number(json.startAfter ?? "0"),
//         varianceThreshold: SwitchboardDecimal.fromBig(
//           new Big(json.varianceThreshold ?? 0)
//         ),
//         forceReportPeriod: Number(json.forceReportPeriod ?? 0),
//         crank: json.crank ? this.parseAddress(json.crank) : undefined,
//         rewardEscrow: (
//           await EscrowAccount.getOrCreateStaticAccount(this.program)
//         ).address,
//       });
//     }
//   }

//   async catch(error) {
//     super.catch(error, "Failed to anneal near aggregator");
//   }
// }
