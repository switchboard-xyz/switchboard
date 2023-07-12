import { CliBaseCommand as BaseCommand } from "../BaseCommand";
import { AwsProvider, FsProvider, GcpProvider } from "../providers";
import type { IBaseChain } from "../types/chain";
import { chalkString, stripTrailingZeros } from "../utils";

import type { BaseJob, JobDefinition, RawJobDefinition } from "./types";

import { Flags } from "@oclif/core";
import type { Input } from "@oclif/parser";
import type { Big, IChainNetworkConfig } from "@switchboard-xyz/common";
import {
  BN,
  BNtoDateTimeString,
  getSupportedNetwork,
  isBase64,
  isHex,
  OracleJob,
  parseSecretString,
} from "@switchboard-xyz/common";
import type {
  AggregatorData,
  AggregatorReadConfig,
  AggregatorResponseConfig,
  Job,
  OracleData,
  OracleQueueData,
  SwitchboardProgram,
} from "@switchboard-xyz/evm.js";
import {
  AggregatorAccount,
  fetchJobsFromIPFS,
  fromBigNumber,
  OracleAccount,
  OracleQueueAccount,
  publishJobsToIPFS,
} from "@switchboard-xyz/evm.js";
import chalk from "chalk";
import { createHash } from "crypto";
import type { BigNumber } from "ethers";
import { providers, Wallet } from "ethers";
import fs from "fs";
import path from "path";

type EvmChain = "coredao" | "arbitrum";

type EvmNetwork = "mainnet" | "testnet";

export abstract class EvmBaseCommand extends BaseCommand implements IBaseChain {
  static flags = {
    ...BaseCommand.flags,
    chain: Flags.string({
      description: "the evm chain to interact with",
      options: ["coredao", "arbitrum"],
      exclusive: ["coredao", "arbitrum"],
      // exclusive: ["chainId"],
    }),
    // chainId: Flags.string({
    //   description: "the evm chain to interact with",
    //   options: ["coredao", "arbitrum"],
    //   required: true,
    //   exclusive: ["chain", "network"],
    // }),
    coredao: Flags.boolean({
      description: "use the coredao chain",
      exclusive: ["chain"],
    }),
    arbitrum: Flags.boolean({
      description: "use the arbitrum chain",
      exclusive: ["chain"],
    }),
    network: Flags.string({
      description: "the EVM network to connect to",
      options: ["mainnet", "testnet"],
      exclusive: ["mainnet", "testnet"],
    }),
    mainnet: Flags.boolean({
      description: "use the mainnet network",
      default: false,
      exclusive: ["network"],
    }),
    testnet: Flags.boolean({
      description: "use the testnet network",
      default: false,
      exclusive: ["network"],
    }),
    rpcUrl: Flags.string({
      char: "u",
      description: "alternate RPC url",
    }),
    programId: Flags.string({
      description: "alternative Switchboard program ID to interact with",
    }),
  };

  public hasSigner = false;

  public chain: EvmChain;

  public network: EvmNetwork;

  public networkConfig: IChainNetworkConfig;

  public rpcUrl: string;

  public programId: string;

  public program: SwitchboardProgram;

  async init() {
    await super.init();
    const { flags } = await this.parse((<Input<any>>this.constructor) as any);
    BaseCommand.flags = flags as any;

    this.chain = this.getChain(
      (flags as any).chain,
      (flags as any).coredao,
      (flags as any).arbitrum
    );

    this.network = this.getNetwork(
      (flags as any).network,
      (flags as any).mainnet,
      (flags as any).testnet
    );

    this.rpcUrl = this.getRpcUrl(
      this.chain,
      this.network,
      (flags as any).rpcUrl
    );

    this.networkConfig = getSupportedNetwork(this.chain, this.network);

    this.programId = this.getProgramId(
      this.chain,
      this.network,
      (flags as any).programId
    );

    this.logConfig({
      chain: this.chain,
      network: this.network,
      rpc: this.rpcUrl,
      programId: this.programId,
    });
  }

  getChain(chain?: string, coredao?: boolean, arbitrum?: boolean): EvmChain {
    if (coredao) {
      return "coredao";
    }

    if (arbitrum) {
      return "arbitrum";
    }

    if (!chain) {
      throw new Error(`Need to provide --chain`);
    }

    if (chain !== "coredao" && chain !== "arbitrum") {
      throw new Error(`--chain must be 'coredao' or 'arbitrum'`);
    }

    return chain;
  }

  getRpcUrl(chain: EvmChain, network: EvmNetwork, rpcUrlFlag?: string): string {
    if (rpcUrlFlag) {
      return rpcUrlFlag;
    }

    const rpcUrl = this.ctx.getRpcUrl(chain, network);
    if (!rpcUrl) {
      throw new Error(
        `Failed to get EVM RPC_URL for ${chain} ${network}. Try providing the --rpcUrl flag`
      );
    }

    return rpcUrl;
  }

  getNetwork(
    networkOption?: string,
    mainnet?: boolean,
    testnet?: boolean
  ): EvmNetwork {
    if (mainnet) {
      return "mainnet";
    }

    if (testnet) {
      return "testnet";
    }

    if (!networkOption) {
      throw new Error(`Need to provide --network`);
    }

    if (networkOption !== "mainnet" && networkOption !== "testnet") {
      throw new Error(`--network must be 'mainnet' or 'testnet'`);
    }

    return networkOption;
  }

  getProgramId(
    chain: EvmChain,
    network: EvmNetwork,
    programIdFlag?: string
  ): string {
    if (programIdFlag) {
      return programIdFlag;
    }

    return this.ctx.getProgramId(chain, network);
  }

  toUrl(signature: string) {
    const explorer: string | undefined =
      (this.networkConfig.metadata?.defaultExplorer as string) ?? "";
    if (explorer) {
      return path.join(explorer, "tx", signature);
    }

    return "NOT_SUPPORTED";
  }

  toAccountUrl(address: string) {
    const explorer: string | undefined =
      (this.networkConfig.metadata?.defaultExplorer as string) ?? "";
    if (explorer) {
      return path.join(explorer, "address", address);
    }

    return "NOT_SUPPORTED";
  }

  async getSigner(keypairPath: string): Promise<Wallet> {
    const parseKeypairString = (fileString: string): Wallet => {
      const parsedSecret = parseSecretString(fileString);
      if (parsedSecret) {
        const provider = new providers.JsonRpcProvider(this.rpcUrl);
        return new Wallet(parsedSecret.toString("hex"), provider);
      }

      throw new Error(`Failed to derive secret key from input file`);
    };

    const errors: any[] = [];

    // try loading keypair from filesystem
    try {
      const normalizedKeypairPath = this.normalizePath(keypairPath);
      const wallet = FsProvider.getSecret(
        normalizedKeypairPath,
        parseKeypairString
      );
      return wallet;
    } catch (error) {
      errors.push(error);
    }

    // try loading keypair from gcp secret manager
    try {
      const wallet = await GcpProvider.getSecret(
        keypairPath,
        parseKeypairString
      );
      return wallet;
    } catch (error) {
      errors.push(error);
    }

    // try loading keypair from aws secrets
    try {
      const wallet = await AwsProvider.getSecret(
        keypairPath,
        parseKeypairString
      );
      return wallet;
    } catch (error) {
      errors.push(error);
    }

    throw new Error(
      `Failed to load EVM keypair ${keypairPath}\n${errors
        .map((e) => (e as any).toString())
        .join("\n")}`
    );
  }

  convertRawNumber(num: BigNumber): Big {
    return fromBigNumber(num);
  }

  loadJobDefinitionWithMeta(definitionPath: string): JobDefinition {
    const normalizedPath = this.normalizePath(definitionPath);
    const jobDef = JSON.parse(
      fs
        .readFileSync(normalizedPath, "utf-8")
        .replace(/\/\*[\S\s]*?\*\/|([^:\\]|^)\/\/.*$/g, "")
    );

    let name = "";
    if ("name" in jobDef && typeof jobDef.name === "string") {
      name = jobDef.name;
    }

    let weight = 1;
    if ("weight" in jobDef && typeof jobDef.weight === "number") {
      weight = jobDef.weight;
    }

    if ("data" in jobDef && typeof jobDef.data === "string") {
      const dataString: string = jobDef.data;
      const oracleJob = OracleJob.decodeDelimited(
        Buffer.from(
          jobDef.data,
          isBase64(dataString)
            ? "base64"
            : isHex(dataString)
            ? "hex"
            : undefined
        )
      );
      return { name, weight, job: oracleJob, path: definitionPath };
    }

    if ("tasks" in jobDef && Array.isArray(jobDef.tasks)) {
      const oracleJob = this.loadJobDefinition(definitionPath);
      return { name, weight, job: oracleJob, path: definitionPath };
    }

    throw new Error(`Failed to parse job definition`);
  }

  deserializeJobData(jobData: Uint8Array): OracleJob {
    return OracleJob.decodeDelimited(jobData);
  }

  async loadQueue(
    address: string
  ): Promise<[OracleQueueAccount, OracleQueueData]> {
    return await OracleQueueAccount.load(this.program, address);
  }

  async loadAggregator(
    address: string
  ): Promise<[AggregatorAccount, AggregatorData]> {
    return await AggregatorAccount.load(this.program, address);
  }

  async loadCrank(address: string): Promise<[any, any]> {
    throw new Error(`EVM chains do not have a crank`);
  }

  async loadOracle(address: string): Promise<[OracleAccount, OracleData]> {
    return await OracleAccount.load(this.program, address);
  }

  async loadPermission(
    granter: string,
    grantee: string,
    authority: string
  ): Promise<[any, any, number]> {
    throw new Error(`Not implemented yet`);
  }

  async loadLease(
    queue: string,
    aggregator: string
  ): Promise<[any, any, number]> {
    throw new Error(`EVM chains do not have a crank`);
  }

  async loadJob(address: string): Promise<[any, any, OracleJob]> {
    throw new Error(`Not implemented yet`);
  }

  normalizeAccountData(
    address: string,
    data: Record<string, any>
  ): Record<string, any> {
    const object = {
      address: address,
      ...data,
    };
    return JSON.parse(JSON.stringify(object, this.jsonReplacers, 2));
  }

  prettyPrintAggregator(
    address: string,
    aggregator: AggregatorData & { permissions?: string },
    readConfig?: AggregatorReadConfig,
    responseSettings?: AggregatorResponseConfig,
    SPACING = 24
  ) {
    // throw new Error(`Not implemented yet`);
    const output: string[] = [];
    output.push(
      chalk.underline(chalkString("## Aggregator", address, SPACING))
    );

    output.push(chalkString("name", aggregator.name, SPACING));

    let result: Big | undefined;
    let timestamp: number | undefined;
    try {
      result = fromBigNumber(aggregator.latestResult.value);
      timestamp = aggregator.latestResult.timestamp.toNumber();
    } catch {}

    output.push(
      chalkString(
        "latestResult",
        result ? `${stripTrailingZeros(result.toString())}` : "N/A",
        SPACING
      )
    );
    output.push(
      chalkString(
        "lastUpdated",
        timestamp ? BNtoDateTimeString(new BN(timestamp)) : "N/A",
        SPACING
      )
    );

    output.push(
      chalkString(
        "balance",
        `${stripTrailingZeros(fromBigNumber(aggregator.balance).toString())} `,
        SPACING
      )
    );

    output.push(chalkString("authority", aggregator.authority, SPACING));
    output.push(chalkString("queueAddress", aggregator.queueAddress, SPACING));
    if (aggregator.permissions) {
      output.push(chalkString("permissions", aggregator.permissions, SPACING));
    }

    output.push(
      chalkString(
        "minUpdateDelaySeconds",
        aggregator.minUpdateDelaySeconds.toString(),
        SPACING
      )
    );
    output.push(
      chalkString("batchSize", aggregator.batchSize.toString(), SPACING)
    );
    output.push(
      chalkString(
        "minOracleResults",
        aggregator.minOracleResults.toString(),
        SPACING
      )
    );

    if (responseSettings) {
      output.push(
        chalkString(
          "minJobResults",
          responseSettings.minJobResults.toNumber(),
          SPACING
        )
      );
      const varianceThreshold = fromBigNumber(
        responseSettings.varianceThreshold
      ).toNumber();

      output.push(
        chalkString(
          "varianceThreshold",
          varianceThreshold > 0
            ? varianceThreshold + " %"
            : "0 %, always report",
          SPACING
        )
      );
      const forceReportPeriod = responseSettings.forceReportPeriod.toNumber();
      let forceReportString = forceReportPeriod + " seconds";
      if (varianceThreshold === 0) {
        forceReportString += ", disabled due to varianceThreshold of 0%";
      } else if (forceReportPeriod === 0) {
        forceReportString += ", disabled";
      }

      output.push(chalkString("forceReportPeriod", forceReportString, SPACING));
    }

    if (readConfig) {
      output.push(
        chalkString("historyEnabled", readConfig.historyEnabled, SPACING)
      );
      output.push(
        chalkString("readCharge", fromBigNumber(readConfig.readCharge), SPACING)
      );
      output.push(
        chalkString("rewardEscrow", readConfig.rewardEscrow, SPACING)
      );
      output.push(
        chalkString(
          "limitReadsToWhitelist",
          readConfig.limitReadsToWhitelist,
          SPACING
        )
      );
    }

    const logString = output.join("\n");

    this.log(logString);
  }

  prettyPrintJobs(jobs: Array<Job>, SPACING = 24) {
    const output: string[] = [];

    output.push(
      chalk.underline(
        chalkString("\n## Jobs", Array.from({ length: 44 }).join(" "), SPACING)
      )
    );

    for (const [n, job] of jobs.entries()) {
      const oracleJob = OracleJob.decodeDelimited(
        new Uint8Array(Buffer.from(job.data, "base64"))
      );
      output.push(
        chalkString(
          `${job.name}, weight = ${job.weight ?? 1}`,
          "\n" + JSON.stringify(oracleJob.toJSON(), undefined, 2),
          SPACING
        )
      );
    }

    const logString = output.join("\n");

    this.log(logString);
  }

  jobsToJson(jobs: Job[]): Array<{
    name: string;
    weight: number;
    data: string;
    tasks: OracleJob.ITask[];
  }> {
    return jobs.map((job) => {
      const oracleJob = OracleJob.decodeDelimited(
        new Uint8Array(Buffer.from(job.data, "base64"))
      );
      return {
        name: job.name,
        weight: job.weight,
        data: job.data,
        tasks: oracleJob.tasks,
      };
    });
  }

  prettyPrintOracle(
    address: string,
    oracle: OracleData & { permissions?: string },
    SPACING = 24
  ) {
    const output: string[] = [];

    output.push(chalk.underline(chalkString("## Oracle", address, SPACING)));

    output.push(chalkString("name", oracle.name, SPACING));
    output.push(chalkString("authority", oracle.authority, SPACING));
    output.push(chalkString("queueAddress", oracle.queueAddress, SPACING));
    if (oracle.permissions) {
      output.push(chalkString("permissions", oracle.permissions, SPACING));
    }

    const lastHeartbeat: number | undefined = oracle.lastHeartbeat.gt(0)
      ? oracle.lastHeartbeat.toNumber()
      : undefined;
    output.push(
      chalkString(
        "lastHeartbeat",
        lastHeartbeat ? BNtoDateTimeString(new BN(lastHeartbeat)) : "N/A",
        SPACING
      )
    );

    const logString = output.join("\n");

    this.log(logString);
  }

  prettyPrintQueue(
    address: string,
    queue: OracleQueueData & { oracles?: string[] },
    SPACING = 24
  ) {
    const output: string[] = [];

    output.push(chalk.underline(chalkString("## Queue", address, SPACING)));

    output.push(chalkString("name", queue.name, SPACING));
    output.push(chalkString("authority", queue.authority, SPACING));
    output.push(
      chalkString(
        "unpermissionedFeeds",
        queue.unpermissionedFeedsEnabled,
        SPACING
      )
    );
    if (queue.oracles) {
      output.push(
        chalkString(
          "size",
          `${queue.oracles.length} / ${queue.maxSize.toNumber()}`,
          SPACING
        )
      );
    } else {
      output.push(chalkString("maxSize", queue.maxSize.toNumber(), SPACING));
    }

    output.push(
      chalkString("oracleTimeout", queue.oracleTimeout.toNumber(), SPACING)
    );
    output.push(
      chalkString(
        "reward",
        this.convertRawNumber(queue.reward).toNumber(),
        SPACING
      )
    );

    const logString = output.join("\n");

    this.log(logString);
  }

  convertJob(job: JobDefinition): BaseJob {
    const serializedJob = Buffer.from(
      OracleJob.encodeDelimited(job.job).finish()
    ).toString("base64");

    return {
      name: job.name ?? base64ToPseudoUniqueID(serializedJob),
      weight: job.weight ?? 1,
      data: serializedJob,
      path: job.path,
    };
  }

  // TODO: Dedupe
  async getUpdatedJobsHash(
    hash?: string,
    addJobs?: BaseJob[],
    removeJobs?: BaseJob[]
  ): Promise<[string, Omit<Required<RawJobDefinition>, "path">[]]> {
    let jobs: Job[] = [];
    if (hash) {
      const existingJobs = await fetchJobsFromIPFS(hash);
      jobs.push(...existingJobs);
    }

    for (const rmJob of removeJobs ?? []) {
      const idx = jobs.findIndex((j) => j.data === rmJob.data);
      if (idx === -1) {
        // TODO: Store file path for easier identification
        throw new Error(`Failed to remove job from job list, ${rmJob.path}`);
      }

      jobs = [...jobs.slice(0, idx), ...jobs.slice(idx + 1)];
    }

    jobs.push(...(addJobs ?? []));

    if (jobs.length === 0) {
      throw new Error(`No jobs to publish to IPFS`);
    }

    const jobsHash = await publishJobsToIPFS(
      jobs,
      "https://api.switchboard.xyz/api/ipfs"
    );

    const finalJobs = jobs.map((job) => {
      const oracleJob = OracleJob.decodeDelimited(
        new Uint8Array(Buffer.from(job.data, "base64"))
      );
      return {
        ...job,
        ...oracleJob,
      };
    });

    return [jobsHash, finalJobs];
  }
}

export function base64ToPseudoUniqueID(base64String: string): string {
  const binaryData = Buffer.from(base64String, "base64");
  const hash = createHash("sha256").update(binaryData).digest("hex");
  return hash.slice(0, 16);
}
