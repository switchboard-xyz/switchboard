import { Flags } from "@oclif/core";
import { Input } from "@oclif/parser";
import { CliBaseCommand as BaseCommand } from "../BaseCommand";
import {
  AptosAccount,
  AptosClient,
  FaucetClient,
  HexString,
  MaybeHexString,
} from "aptos";
import { AwsProvider, FsProvider, GcpProvider } from "../providers";
import YAML from "yaml";
import fs from "fs";
import { AptosNetwork } from ".";
import {
  AggregatorAccount,
  AptosDecimal,
  CrankAccount,
  DEVNET_PROGRAM_ID,
  JobAccount,
  MAINNET_PROGRAM_ID,
  OracleAccount,
  OracleQueueAccount,
  StateAccount,
  TESTNET_PROGRAM_ID,
} from "@switchboard-xyz/aptos.js";
import { OracleJob, SwitchboardDecimal } from "@switchboard-xyz/common";
import { isBN } from "bn.js";
import Big from "big.js";
import { IBaseChain } from "../types/chain";

export abstract class AptosBaseCommand
  extends BaseCommand
  implements IBaseChain
{
  static flags = {
    ...BaseCommand.flags,
    networkId: Flags.string({
      description: "Aptos network to connect to",
      options: ["devnet", "testnet", "mainnet"],
      default: "devnet",
    }),
    programId: Flags.string({
      description: "Switchboard programId on the selected Aptos network",
    }),
    rpcUrl: Flags.string({
      char: "u",
      description: "alternate RPC url",
    }),
  };

  public hasSigner = false;

  public networkId: AptosNetwork;

  public rpcUrl: string;

  public programId: HexString;

  public aptos: AptosClient;

  public faucet: FaucetClient;

  public stateAddress: HexString;

  async init() {
    await super.init();
    const { flags } = await this.parse((<Input<any>>this.constructor) as any);
    BaseCommand.flags = flags as any;

    this.networkId = this.getNetwork((flags as any).networkId);
    this.rpcUrl = this.getRpcUrl(this.networkId, (flags as any).rpcUrl);
    this.programId = this.getProgramId(
      this.networkId,
      (flags as any).programId
    );
    this.stateAddress = this.programId;

    this.aptos = new AptosClient(this.rpcUrl);
    this.faucet = new FaucetClient(
      this.rpcUrl,
      `https://faucet.${this.networkId}.aptoslabs.com`
    );

    this.logConfig({
      network: this.networkId,
      rpc: this.rpcUrl,
      pid: this.programId.hex(),
      state: this.stateAddress.hex(),
    });
  }

  getNetwork(networkIdFlag: string): AptosNetwork {
    if (
      networkIdFlag !== "devnet" &&
      networkIdFlag !== "testnet" &&
      networkIdFlag !== "mainnet"
    ) {
      throw new Error(`--network must be 'mainnet', 'devnet', or 'testnet'`);
    }

    return networkIdFlag;
  }

  getProgramId(networkId: string, programId?: string): HexString {
    if (programId) {
      return HexString.ensure(programId);
    }
    switch (networkId) {
      case "mainnet":
        return HexString.ensure(MAINNET_PROGRAM_ID);
      case "testnet":
        return HexString.ensure(TESTNET_PROGRAM_ID);
      case "devnet":
        return HexString.ensure(DEVNET_PROGRAM_ID);
      default:
        throw new Error(
          `Failed to find Aptos ProgramID. Try passing in --programID instead`
        );
    }
  }

  getRpcUrl(networkId: AptosNetwork, rpcUrlFlag?: string): string {
    if (rpcUrlFlag) {
      return rpcUrlFlag;
    }

    const rpcUrl = this.ctx.getRpcUrl("aptos", networkId);
    if (!rpcUrl) {
      throw new Error(
        `Failed to get Aptos RPC URL for network ${networkId}. Try providing the --rpcUrl flag`
      );
    }
    return rpcUrl;
  }

  normalizeAccountData(address: MaybeHexString, data: any) {
    return JSON.parse(
      JSON.stringify(
        { address: address.toString(), ...data },
        this.jsonReplacers
      )
    );
  }

  parseAddress(address: string) {
    return HexString.ensure(address);
  }

  getAccount(address: string): AptosAccount {
    return new AptosAccount(this.hexStringToBytes(address));
  }

  async getSigner(
    keypairPath: string,
    profileName = "default"
  ): Promise<AptosAccount> {
    const parseKeypairString = (fileString: string): AptosAccount => {
      // check if bytes
      const parsedFileString = fileString
        .trim()
        .replace(/\n/g, "")
        .replace(/\s/g, "");
      const bytesRegex = /^\[(\s)?[0-9]+((\s)?,(\s)?[0-9]+){31,}\]/g;
      if (bytesRegex.test(parsedFileString)) {
        return new AptosAccount(new Uint8Array(JSON.parse(parsedFileString)));
      }

      // check if hex
      const hexRegex = /^(0x|0X)?[a-fA-F0-9]{64}/g;
      if (hexRegex.test(parsedFileString)) {
        return new AptosAccount(this.hexStringToBytes(parsedFileString));
      }

      // check if base64 encoded
      const base64Regex =
        /^(?:[A-Za-z\d+\/]{4})*(?:[A-Za-z\d+\/]{3}=|[A-Za-z\d+\/]{2}==)?/g;
      if (base64Regex.test(parsedFileString)) {
        return new AptosAccount(
          new Uint8Array(Buffer.from(parsedFileString, "base64"))
        );
      }

      throw new Error(`Failed to derive secret key from input file`);
    };

    let errors: any[] = [];

    // first check if file is a yaml config
    if (keypairPath.endsWith(".yaml")) {
      try {
        const parsedYaml = YAML.parse(fs.readFileSync(keypairPath, "utf8"));
        if (
          "profiles" in parsedYaml &&
          profileName in parsedYaml.profiles &&
          "private_key" in parsedYaml.profiles.default
        ) {
          return new AptosAccount(
            this.hexStringToBytes(parsedYaml.profiles[profileName].private_key)
          );
        }
      } catch (error) {
        throw new Error(
          `AptosAccount provided in yaml format but failed to parse privateKey: ${error}`
        );
      }
    }

    // try loading keypair from filesystem
    try {
      const normalizedKeypairPath = this.normalizePath(keypairPath);
      const keypair = FsProvider.getSecret(
        normalizedKeypairPath,
        parseKeypairString
      );
      return keypair;
    } catch (error) {
      errors.push(error);
    }

    // try loading keypair from gcp secret manager
    try {
      const keypair = await GcpProvider.getSecret(
        keypairPath,
        parseKeypairString
      );
      return keypair;
    } catch (error) {
      errors.push(error);
    }

    // try loading keypair from aws secrets
    try {
      const keypair = await AwsProvider.getSecret(
        keypairPath,
        parseKeypairString
      );
      return keypair;
    } catch (error) {
      errors.push(error);
    }

    throw new Error(
      `Failed to load Aptos keypair ${keypairPath}\n${errors
        .map((e) => (e as any).toString())
        .join("\n")}`
    );
  }

  // TODO: Allow setting custom URL in configs
  toUrl(signature: string) {
    return `https://explorer.aptoslabs.com/txn/${signature}?network=${this.networkId}`;
  }

  hexStringToBuffer(hexString: string): Buffer {
    return Buffer.from(
      hexString.toLowerCase().startsWith("0x") ? hexString.slice(2) : hexString,
      "hex"
    );
  }

  hexStringToBytes(hexString: string): Uint8Array {
    return new Uint8Array(this.hexStringToBuffer(hexString));
  }

  jsonReplacers(key: any, value: any) {
    if (typeof value === "string" && (key === "name" || key === "metadata")) {
      return Buffer.from(
        value.toLowerCase().startsWith("0x") ? value.slice(2) : value,
        "hex"
      ).toString("utf8");
    }

    if (
      !value ||
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      return value;
    } else {
      if (value instanceof Big) {
        return value.toString();
      }
      if (isBN(value)) {
        return value.toString(10);
      }
      if (
        ("value" in value && "dec" in value && "neg" in value) ||
        value instanceof AptosDecimal
      ) {
        const base = new SwitchboardDecimal(value.value, value.scale).toBig();
        const val = value.neg ? base.mul(-1) : base;
        return val.toString();
      }
    }

    return super.jsonReplacers(key, value);
  }

  deserializeJobData(jobData: Uint8Array): OracleJob {
    // const hexString = jobData.startsWith("0x")
    //   ? (jobData as string).slice(2)
    //   : jobData;

    // console.log(`${jobData} => ${trimmedData}`);
    // const bytes = trimmedData.match(/.{2}/g).map(Number);
    // console.log(`Deserialized [${bytes}]`);

    // var numBytes = hexString.length / 2;
    // var byteArray = new Uint8Array(numBytes);
    // for (var i = 0; i < numBytes; i++) {
    //   byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
    // }

    return OracleJob.decodeDelimited(
      Buffer.from(Buffer.from(jobData).toString(), "base64")
    );
  }

  async loadQueue(queueHexString: string): Promise<[OracleQueueAccount, any]> {
    const account = new OracleQueueAccount(
      this.aptos,
      this.parseAddress(queueHexString),
      this.programId
    );
    const data = await account.loadData();

    return [account, data];
  }

  async loadAggregator(
    aggregatorHexString: string
  ): Promise<[AggregatorAccount, any]> {
    const account = new AggregatorAccount(
      this.aptos,
      this.parseAddress(aggregatorHexString),
      this.programId
    );
    const data = await account.loadData();

    return [account, data];
  }

  async loadCrank(crankHexString: string): Promise<[CrankAccount, any]> {
    const account = new CrankAccount(
      this.aptos,
      this.parseAddress(crankHexString),
      this.programId
    );
    const data = await account.loadData();

    return [account, data];
  }

  async loadOracle(oracleHexString: string): Promise<[OracleAccount, any]> {
    const account = new OracleAccount(
      this.aptos,
      this.parseAddress(oracleHexString),
      this.programId
    );
    const data = await account.loadData();

    return [account, data];
  }

  async loadJob(jobHexString: string): Promise<[JobAccount, any, OracleJob]> {
    const account = new JobAccount(
      this.aptos,
      this.parseAddress(jobHexString),
      this.programId
    );
    const data = await account.loadData();

    const oracleJob = this.deserializeJobData(data.data);

    return [account, data, oracleJob];
  }

  async loadState(): Promise<[StateAccount, any]> {
    const account = new StateAccount(
      this.aptos,
      this.stateAddress,
      new AptosAccount(),
      this.programId
    );
    const data = await account.loadData();

    return [account, data];
  }
}
