import { CliBaseCommand as BaseCommand } from "../BaseCommand";
import { AwsProvider, FsProvider, GcpProvider } from "../providers";
import type { IBaseChain } from "../types/chain";
import { chalkString } from "../utils";

import { Flags } from "@oclif/core";
import type { Input } from "@oclif/parser";
import type { IChainNetworkConfig, OracleJob } from "@switchboard-xyz/common";
import {
  BN,
  BNtoDateTimeString,
  getSupportedNetwork,
  parseSecretString,
} from "@switchboard-xyz/common";
import type {
  AttestationQueueAccountData,
  FunctionAccountData,
  RequestAccountData,
  RoutineAccountData,
  types,
  VerifierAccountData,
} from "@switchboard-xyz/starknet.js";
import { SwitchboardProgram } from "@switchboard-xyz/starknet.js";
import chalk from "chalk";
import path from "path";
import { Account, RpcProvider } from "starknet";

export abstract class StarknetBaseCommand
  extends BaseCommand
  implements IBaseChain
{
  deserializeJobData(jobData: Uint8Array): OracleJob {
    throw new Error("Method not implemented.");
  }

  static flags = {
    ...BaseCommand.flags,
    network: Flags.string({
      description: "the network to connect with",
      options: new Array<types.StarknetNetworkId>(
        "goerli",
        "sepolia",
        "mainnet"
      ),
      default: "goerli",
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

  public readonly chain = "starknet";

  public network: types.StarknetNetworkId;

  public networkConfig: IChainNetworkConfig;

  public rpcUrl: string;

  public programId: string;

  public program: SwitchboardProgram;

  async init() {
    await super.init();
    const { flags } = await this.parse((<Input<any>>this.constructor) as any);
    BaseCommand.flags = flags as any;

    this.network = this.getNetwork((flags as any).network);

    this.rpcUrl = this.getRpcUrl(this.network, (flags as any).rpcUrl);

    this.networkConfig = getSupportedNetwork(this.chain, this.network);

    this.programId = this.getProgramId(this.network, (flags as any).programId);

    this.logConfig({
      chain: this.chain,
      network: this.network,
      rpc: this.rpcUrl,
      programId: this.programId,
    });
  }

  getRpcUrl(network: types.StarknetNetworkId, rpcUrlFlag?: string): string {
    if (rpcUrlFlag) return rpcUrlFlag;

    const rpcUrl = this.ctx.getRpcUrl(this.chain, network);
    if (rpcUrl) return rpcUrl;

    throw new Error(
      `Failed to get Starknet RPC URL for network ${network}. Try providing the --rpcUrl flag`
    );
  }

  getNetwork(networkOption?: string): types.StarknetNetworkId {
    switch (networkOption) {
      case "goerli":
      case "sepolia":
      case "mainnet":
        return networkOption;
      default:
        throw new Error(`Unknown --network specified: ${networkOption}`);
    }
  }

  getProgramId(
    network: types.StarknetNetworkId,
    programIdFlag?: string
  ): string {
    if (programIdFlag) return programIdFlag;
    return this.ctx.getProgramId(this.chain, network);
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
      return path.join(explorer, "contract", address);
    }

    return "NOT_SUPPORTED";
  }

  async getAccount(
    accountAddress: string,
    accountPrivateKeyPath: string
  ): Promise<Account> {
    const parseKeypairString = (fileString: string): Account => {
      const parsedSecret = parseSecretString(fileString);
      if (parsedSecret) {
        return new Account(
          /* providerOrOptions= */ { rpc: { nodeUrl: this.rpcUrl } },
          /* address= */ accountAddress,
          /* pkOrSigner= */ parsedSecret,
          /* cairoVersion= */ "1"
        );
      }

      throw new Error(`Failed to derive secret key from input file`);
    };

    const errors: any[] = [];

    // try loading keypair from filesystem
    try {
      const normalizedKeypairPath = this.normalizePath(accountPrivateKeyPath);
      // TODO: Load private key from keystore.
      return FsProvider.getSecret(normalizedKeypairPath, parseKeypairString);
    } catch (error) {
      errors.push(error);
    }

    // try loading keypair from gcp secret manager
    try {
      return await GcpProvider.getSecret(
        accountPrivateKeyPath,
        parseKeypairString
      );
    } catch (error) {
      errors.push(error);
    }

    // try loading keypair from aws secrets
    try {
      return await AwsProvider.getSecret(
        accountPrivateKeyPath,
        parseKeypairString
      );
    } catch (error) {
      errors.push(error);
    }

    throw new Error(
      `Failed to load payer account (accountAddress=${accountAddress}, privateKeyPath=${accountPrivateKeyPath})\n${errors
        .map((e) => (e as any).toString())
        .join("\n")}`
    );
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

  async loadProgram(): Promise<SwitchboardProgram> {
    return new SwitchboardProgram(
      /* network= */ this.network,
      /* provider= */ new RpcProvider({ nodeUrl: this.rpcUrl }),
      /* options= */ { isVerbose: this.verbose }
    );
  }

  prettyPrintFunction(
    address: string,
    functionData: FunctionAccountData,
    SPACING = 24
  ) {
    const output: string[] = [];

    output.push(chalk.underline(chalkString("## Function", address, SPACING)));
    output.push(chalkString("id", functionData.id, SPACING));
    output.push(chalkString("name", functionData.name, SPACING));
    output.push(chalkString("authorityId", functionData.authorityId, SPACING));
    output.push(
      chalkString("functionAccountId", functionData.functionAccountId, SPACING)
    );
    output.push(
      chalkString(
        "functionAccountClassHash",
        functionData.functionAccountClassHash,
        SPACING
      )
    );
    output.push(chalkString("verifierId", functionData.verifierId, SPACING));
    output.push(
      chalkString(
        "attestationQueueId",
        functionData.attestationQueueId,
        SPACING
      )
    );
    output.push(
      chalkString(
        "createdAt",
        BNtoDateTimeString(new BN(functionData.createdAt)),
        SPACING
      )
    );
    output.push(
      chalkString(
        "updatedAt",
        BNtoDateTimeString(new BN(functionData.updatedAt)),
        SPACING
      )
    );
    output.push(
      chalkString("containerRegistry", functionData.containerRegistry, SPACING)
    );
    output.push(chalkString("container", functionData.container, SPACING));
    output.push(chalkString("version", functionData.version, SPACING));
    output.push(
      chalkString(
        "mrEnclaves",
        JSON.stringify(functionData.mrEnclaves),
        SPACING
      )
    );
    output.push(
      chalkString(
        "consecutiveFailures",
        functionData.consecutiveFailures,
        SPACING
      )
    );
    output.push(
      chalkString("lastExecutedAt", functionData.lastExecutedAt, SPACING)
    );
    output.push(chalkString("queueIdx", functionData.queueIdx, SPACING));
    output.push(chalkString("status", functionData.status, SPACING));
    output.push(chalkString("errorCode", functionData.errorCode, SPACING));

    this.log(output.join("\n"));
  }

  prettyPrintAttestationQueue(
    address: string,
    accountData: AttestationQueueAccountData,
    SPACING = 24
  ) {
    const output: string[] = [];

    output.push(
      chalk.underline(chalkString("## Attestation Queue", address, SPACING))
    );
    output.push(chalkString("id", accountData.id, SPACING));
    output.push(chalkString("authorityId", accountData.authorityId, SPACING));
    output.push(
      chalkString("mrEnclaves", JSON.stringify(accountData.mrEnclaves), SPACING)
    );
    output.push(
      chalkString(
        "verifierIds",
        JSON.stringify(accountData.verifierIds),
        SPACING
      )
    );
    output.push(
      chalkString(
        "createdAt",
        BNtoDateTimeString(new BN(accountData.createdAt)),
        SPACING
      )
    );
    output.push(
      chalkString(
        "updatedAt",
        BNtoDateTimeString(new BN(accountData.updatedAt)),
        SPACING
      )
    );
    output.push(
      chalkString(
        "allowAuthorityOverrideAfter",
        accountData.allowAuthorityOverrideAfter,
        SPACING
      )
    );
    output.push(
      chalkString(
        "requireHeartbeatPermission",
        accountData.requireHeartbeatPermission,
        SPACING
      )
    );
    output.push(
      chalkString(
        "requireUsagePermission",
        accountData.requireUsagePermission,
        SPACING
      )
    );
    output.push(chalkString("maxSize", accountData.maxSize, SPACING));
    output.push(
      chalkString(
        "maxConsecutiveFunctionFailures",
        accountData.maxConsecutiveFunctionFailures,
        SPACING
      )
    );
    output.push(chalkString("reward", accountData.reward, SPACING));
    output.push(
      chalkString("verifierTimeout", accountData.verifierTimeout, SPACING)
    );
    output.push(
      chalkString(
        "lastHeartbeatAt",
        BNtoDateTimeString(new BN(accountData.lastHeartbeatAt)),
        SPACING
      )
    );
    output.push(chalkString("gcIdx", accountData.gcIdx, SPACING));
    output.push(chalkString("currIdx", accountData.curIdx, SPACING));

    this.log(output.join("\n"));
  }

  prettyPrintVerifier(
    address: string,
    accountData: VerifierAccountData,
    SPACING = 24
  ) {
    const output: string[] = [];

    output.push(
      chalk.underline(chalkString("## Enclave (Verifier)", address, SPACING))
    );
    output.push(chalkString("id", accountData.id, SPACING));
    output.push(chalkString("authorityId", accountData.authorityId, SPACING));
    output.push(chalkString("cid", accountData.cid, SPACING));
    output.push(
      chalkString("attestationQueueId", accountData.attestationQueueId, SPACING)
    );
    output.push(
      chalkString(
        "createdAt",
        BNtoDateTimeString(new BN(accountData.createdAt)),
        SPACING
      )
    );
    output.push(
      chalkString(
        "updatedAt",
        BNtoDateTimeString(new BN(accountData.updatedAt)),
        SPACING
      )
    );
    output.push(
      chalkString(
        "lastHeartbeatAt",
        BNtoDateTimeString(new BN(accountData.lastHeartbeatAt)),
        SPACING
      )
    );
    output.push(chalkString("isOnQueue", accountData.isOnQueue, SPACING));
    output.push(
      chalkString(
        "verificationValidUntil",
        BNtoDateTimeString(new BN(accountData.verificationValidUntil)),
        SPACING
      )
    );
    output.push(
      chalkString(
        "verificationTimestamp",
        accountData.verificationTimestamp,
        SPACING
      )
    );
    output.push(
      chalkString("verificationStatus", accountData.verificationStatus, SPACING)
    );

    output.push(chalkString("signerId", accountData.signerId, SPACING));
    output.push(chalkString("signerKey", accountData.signerKey, SPACING));
    output.push(chalkString("mrEnclave", accountData.mrEnclave, SPACING));

    this.log(output.join("\n"));
  }

  prettyPrintRoutine(
    address: string,
    routineData: RoutineAccountData,
    SPACING = 24
  ) {
    const output: string[] = [];

    output.push(chalk.underline(chalkString("## Routine", address, SPACING)));
    output.push(chalkString("id", routineData.id, SPACING));
    output.push(chalkString("authorityId", routineData.authorityId, SPACING));
    output.push(
      chalkString(
        "createdAt",
        BNtoDateTimeString(new BN(routineData.createdAt)),
        SPACING
      )
    );
    output.push(
      chalkString(
        "updatedAt",
        BNtoDateTimeString(new BN(routineData.updatedAt)),
        SPACING
      )
    );
    output.push(chalkString("schedule", routineData.schedule, SPACING));
    output.push(chalkString("functionId", routineData.functionId, SPACING));
    output.push(chalkString("params", routineData.params, SPACING));
    output.push(
      chalkString("paramsChecksum", routineData.paramsChecksum, SPACING)
    );
    output.push(chalkString("escrowId", routineData.escrowId, SPACING));
    output.push(
      chalkString(
        "consecutiveFailures",
        routineData.consecutiveFailures,
        SPACING
      )
    );
    output.push(chalkString("status", routineData.status, SPACING));
    output.push(chalkString("errorCode", routineData.errorCode, SPACING));
    output.push(
      chalkString(
        "lastExecutedAt",
        BNtoDateTimeString(new BN(routineData.lastExecutedAt)),
        SPACING
      )
    );
    output.push(
      chalkString("balance", routineData.balance.toString(), SPACING)
    );

    this.log(output.join("\n"));
  }

  prettyPrintRequest(
    address: string,
    requestData: RequestAccountData,
    SPACING = 24
  ) {
    const output: string[] = [];

    output.push(chalk.underline(chalkString("## Request", address, SPACING)));
    output.push(chalkString("id", requestData.id, SPACING));
    output.push(chalkString("authorityId", requestData.authorityId, SPACING));
    output.push(
      chalkString(
        "createdAt",
        BNtoDateTimeString(new BN(requestData.createdAt)),
        SPACING
      )
    );
    output.push(
      chalkString(
        "updatedAt",
        BNtoDateTimeString(new BN(requestData.updatedAt)),
        SPACING
      )
    );

    // TODO: finish printing the rest of function fields.

    this.log(output.join("\n"));
  }
}
