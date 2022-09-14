import { OracleJob } from "@switchboard-xyz/common";
import Big from "big.js";
import fs from "fs";
import path from "path";

export interface IJobJson {
  authority?: string;
  name?: string;
  metadata?: string;
  expiration?: number;
  tasks: Record<string, any>[]; // required
}

export interface IAggregatorJson {
  queueAddress?: string;
  authority?: string;
  name?: string;
  metadata?: string;
  // defaults to 1
  batchSize?: number;
  // defaults to 1
  minOracleResults: number;
  minJobResults?: number;
  minUpdateDelaySeconds: number;
  startAfter?: number;
  varianceThreshold?: Big;
  forceReportPeriod?: number;
  expiration?: number;
  disableCrank?: boolean;
  historySize?: number;
  // aptos only
  coinType?: string;
  readCharge?: number;
  rewardEscrow?: string;
  // no solana
  maxGasCost?: number;
  // amount to pre-fund the lease with
  fundUpTo?: number;
  // if queue requires it, whether to enable permissions
  enable?: boolean;
  jobs?: IJobJson[];
}

export class AggregatorJson implements IAggregatorJson {
  queueAddress?: string;
  authority?: string;
  name?: string;
  metadata?: string;
  // defaults to 1
  batchSize?: number;
  // defaults to 1
  minOracleResults: number;
  minJobResults?: number;
  minUpdateDelaySeconds: number;
  startAfter?: number;
  varianceThreshold?: Big;
  forceReportPeriod?: number;
  expiration?: number;
  disableCrank?: boolean;
  historySize?: number;
  // aptos only
  coinType?: string;
  readCharge?: number;
  rewardEscrow?: string;
  // no solana
  maxGasCost?: number;
  // amount to pre-fund the lease with
  fundUpTo?: number;
  // if queue requires it, whether to enable permissions
  enable?: boolean;
  jobs?: IJobJson[];

  static DEFAULTS: IAggregatorJson = {
    queueAddress: "",
    authority: "",
    name: "",
    metadata: "",
    batchSize: 1,
    minOracleResults: 1,
    minJobResults: 1,
    minUpdateDelaySeconds: 30,
    startAfter: 0,
    varianceThreshold: new Big(0),
    forceReportPeriod: 0,
    expiration: 0,
    disableCrank: false,
    historySize: 1000,
    readCharge: 0,
    rewardEscrow: "",
    maxGasCost: 0,
    coinType: "",
    fundUpTo: 0,
    enable: true,
    jobs: [],
  };

  constructor(readonly filePath: string, fields: IAggregatorJson) {
    this.queueAddress = fields.queueAddress;
    this.authority = fields.authority;
    this.name = fields.name;
    this.metadata = fields.metadata;
    this.batchSize = fields.batchSize;
    this.minOracleResults = fields.minOracleResults;
    this.minJobResults = fields.minJobResults;
    this.minUpdateDelaySeconds = fields.minUpdateDelaySeconds;
    this.startAfter = fields.startAfter;
    this.varianceThreshold = fields.varianceThreshold;
    this.forceReportPeriod = fields.forceReportPeriod;
    this.expiration = fields.expiration;
    this.disableCrank = fields.disableCrank;
    this.historySize = fields.historySize;
    this.coinType = fields.coinType;
    this.readCharge = fields.readCharge;
    this.rewardEscrow = fields.rewardEscrow;
    this.maxGasCost = fields.maxGasCost;
    this.fundUpTo = fields.fundUpTo;
    this.enable = fields.enable;
    this.jobs = fields.jobs;
  }

  static readNew(filePath: string) {
    const normalizedPath =
      filePath.startsWith("/") || filePath.startsWith("C:")
        ? filePath
        : path.join(process.cwd(), filePath);
    if (!fs.existsSync(normalizedPath)) {
      throw new Error(`Failed to find file at ${normalizedPath}`);
    }
    const json = JSON.parse(fs.readFileSync(normalizedPath, "utf-8"));
    // required fields
    // if (!("queueAddress" in json)) {
    //   throw new Error(`'queueAddress' missing from json definition file`);
    // }

    // optional fields
    const queueAddress = parseString(json, "queueAddress");
    const name = parseString(json, "name");
    const metadata = parseString(json, "metadata");
    const authority = parseString(json, "authority");
    const batchSize = parseInt(json, "batchSize");
    const minOracleResults = parseInt(json, "minOracleResults");
    const minJobResults = parseInt(json, "minJobResults");
    const minUpdateDelaySeconds = parseInt(json, "minUpdateDelaySeconds");
    const startAfter = parseInt(json, "startAfter");
    const varianceThreshold = parseBig(json, "varianceThreshold");
    const forceReportPeriod = parseInt(json, "forceReportPeriod");
    const expiration = parseInt(json, "expiration");
    const disableCrank = parseBoolean(json, "disableCrank");
    const historySize = parseInt(json, "historySize");
    const readCharge = parseInt(json, "readCharge");
    const rewardEscrow = parseString(json, "rewardEscrow");
    const maxGasCost = parseInt(json, "maxGasCost");
    const coinType = parseString(json, "coinType");
    const fundUpTo = parseFloat(json, "fundUpTo");
    const enable = parseBoolean(json, "enable");

    if (
      !("jobs" in json) ||
      !Array.isArray(json.jobs) ||
      json.jobs.length === 0
    ) {
      throw new Error(`Aggregator JSON should have at least one job`);
    }

    const jobs: IJobJson[] = json.jobs.map((job) => {
      if (
        !("tasks" in job) ||
        !Array.isArray(job.tasks) ||
        job.tasks.length === 0
      ) {
        throw new Error(`Job JSON should have at least one task defined`);
      }
      const jobAuthority = parseString(job, "authority");
      const jobName = parseString(job, "name");
      const jobMetadata = parseString(job, "metadata");
      const jobExpiration = parseInt(job, "expiration");
      const tasks: OracleJob.ITask[] = JSON.parse(job.tasks);
      return {
        authority: jobAuthority,
        name: jobName,
        metadata: jobMetadata,
        expiration: jobExpiration,
        tasks,
      };
    });

    return new AggregatorJson(normalizedPath, {
      queueAddress,
      authority,
      name,
      metadata,
      batchSize,
      minOracleResults,
      minJobResults,
      minUpdateDelaySeconds,
      startAfter,
      varianceThreshold,
      forceReportPeriod,
      expiration,
      disableCrank,
      historySize,
      coinType,
      readCharge,
      rewardEscrow,
      maxGasCost,
      fundUpTo,
      enable,
      jobs,
    });
  }

  static readNewWithDefaults(filePath: string): AggregatorJson {
    const aggregator = AggregatorJson.readNew(filePath);
    return new AggregatorJson(aggregator.filePath, {
      ...AggregatorJson.DEFAULTS,
      ...aggregator.toJSON(),
    });
  }

  toJSON(): IAggregatorJson {
    return {
      queueAddress: this.queueAddress,
      authority: this.authority,
      name: this.name,
      metadata: this.metadata,
      batchSize: this.batchSize,
      minOracleResults: this.minOracleResults,
      minJobResults: this.minJobResults,
      minUpdateDelaySeconds: this.minUpdateDelaySeconds,
      startAfter: this.startAfter,
      varianceThreshold: this.varianceThreshold,
      forceReportPeriod: this.forceReportPeriod,
      expiration: this.expiration,
      disableCrank: this.disableCrank,
      historySize: this.historySize,
      coinType: this.coinType,
      readCharge: this.readCharge,
      rewardEscrow: this.rewardEscrow,
      maxGasCost: this.maxGasCost,
      fundUpTo: this.fundUpTo,
      enable: this.enable,
      jobs: this.jobs,
    };
  }

  save() {
    fs.writeFileSync(
      this.filePath,
      JSON.stringify(this.toJSON(), undefined, 2)
    );
  }
}

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
