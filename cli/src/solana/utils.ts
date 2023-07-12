/* eslint unicorn/no-array-push-push: 0 */
/* eslint new-cap: 0 */

import { NoPayerKeypairProvided } from "../types";
import { chalkString } from "../utils";

import type { AccountMeta } from "@solana/web3.js";
import { Keypair, PublicKey } from "@solana/web3.js";
import type { OracleJob } from "@switchboard-xyz/common";
import { BNtoDateTimeString, buf2String } from "@switchboard-xyz/common";
import { BN } from "@switchboard-xyz/common";
import type {
  AggregatorAccounts,
  attestationTypes,
  SwitchboardProgram,
  VrfAccounts,
} from "@switchboard-xyz/solana.js";
import { types } from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export const programHasPayer = (program: SwitchboardProgram): boolean => {
  const payer = program.wallet.payer;
  return !payer.publicKey.equals(
    Keypair.fromSeed(new Uint8Array(32).fill(1)).publicKey
  );
};

export const getProgramPayer = (program: SwitchboardProgram): Keypair => {
  if (programHasPayer(program)) return program.wallet.payer;
  throw new NoPayerKeypairProvided();
};

export const verifyProgramHasPayer = (program: SwitchboardProgram): void => {
  if (programHasPayer(program)) return;
  throw new NoPayerKeypairProvided();
};

export class InvalidSwitchboardAccount extends Error {
  constructor(message = "failed to match account type by discriminator") {
    super(message);
    Object.setPrototypeOf(this, InvalidSwitchboardAccount.prototype);
  }
}

export function prettyPrintAggregator(
  aggregator: types.AggregatorAccountData,
  publicKey: PublicKey,
  SPACING = 24
): string {
  const output: string[] = [];
  output.push(
    chalk.underline(chalkString("## Aggregator", publicKey, SPACING))
  );

  output.push(
    chalkString(
      "latestResult",
      aggregator.latestConfirmedRound.result.toBig(),
      SPACING
    )
  );
  output.push(
    chalkString(
      "lastUpdated",
      BNtoDateTimeString(aggregator.latestConfirmedRound.roundOpenTimestamp),
      SPACING
    )
  );
  output.push(chalkString("name", buf2String(aggregator.name), SPACING));
  output.push(chalkString("metadata", buf2String(aggregator.name), SPACING));
  output.push(chalkString("authority", aggregator.authority, SPACING));
  output.push(chalkString("queuePubkey", aggregator.queuePubkey, SPACING));
  output.push(chalkString("crankPubkey", aggregator.crankPubkey, SPACING));
  output.push(chalkString("historyBuffer", aggregator.historyBuffer, SPACING));
  output.push(
    chalkString(
      "minUpdateDelaySeconds",
      aggregator.minUpdateDelaySeconds,
      SPACING
    )
  );
  output.push(
    chalkString("jobPubkeysSize", aggregator.jobPubkeysSize, SPACING)
  );
  output.push(chalkString("minJobResults", aggregator.minJobResults, SPACING));
  output.push(
    chalkString(
      "oracleRequestBatchSize",
      aggregator.oracleRequestBatchSize,
      SPACING
    )
  );
  output.push(
    chalkString("minOracleResults", aggregator.minOracleResults, SPACING)
  );
  output.push(
    chalkString(
      "varianceThreshold",
      aggregator.varianceThreshold.toBig(),
      SPACING
    )
  );
  output.push(
    chalkString("forceReportPeriod", aggregator.forceReportPeriod, SPACING)
  );
  output.push(chalkString("isLocked", aggregator.isLocked, SPACING));
  output.push(
    chalkString(
      "resolutionMode",
      `${aggregator.resolutionMode.kind} (${aggregator.resolutionMode.discriminator})`,
      SPACING
    )
  );
  output.push(
    chalkString("basePriorityFee", aggregator.basePriorityFee, SPACING)
  );
  output.push(
    chalkString("priorityFeeBump", aggregator.priorityFeeBump, SPACING)
  );
  output.push(
    chalkString(
      "priorityFeeBumpPeriod",
      aggregator.priorityFeeBumpPeriod,
      SPACING
    )
  );
  output.push(
    chalkString(
      "maxPriorityFeeMultiplier",
      aggregator.maxPriorityFeeMultiplier,
      SPACING
    )
  );

  return output.join("\n");
}

export function prettyPrintPermissions(
  permission: types.PermissionAccountData,
  publicKey: PublicKey,
  SPACING = 24
): string {
  const output: string[] = [];

  output.push(
    chalk.underline(chalkString("## Permission", publicKey, SPACING))
  );

  let permissions = "NONE";
  switch (permission.permissions) {
    case 1: {
      permissions = types.SwitchboardPermission.PermitOracleHeartbeat.kind;
      break;
    }

    case 2: {
      permissions = types.SwitchboardPermission.PermitOracleQueueUsage.kind;
      break;
    }

    case 3: {
      permissions = types.SwitchboardPermission.PermitVrfRequests.kind;
      break;
    }

    default: {
      permissions = "NONE";
      break;
    }
  }

  output.push(
    chalkString(
      "permissions",
      `${permissions} (${permission.permissions})`,
      SPACING
    )
  );
  output.push(chalkString("authority", permission.authority, SPACING));
  output.push(chalkString("granter", permission.granter, SPACING));
  output.push(chalkString("grantee", permission.grantee, SPACING));

  return output.join("\n");
}

export function prettyPrintLease(
  lease: types.LeaseAccountData,
  publicKey: PublicKey,
  balance?: number,
  SPACING = 24
): string {
  const output: string[] = [];

  output.push(chalk.underline(chalkString("## Lease", publicKey, SPACING)));

  if (balance && balance > 0) {
    output.push(chalkString("balance", balance, SPACING));
  }

  output.push(chalkString("escrow", lease.escrow, SPACING));
  output.push(
    chalkString("withdrawAuthority", lease.withdrawAuthority, SPACING)
  );
  output.push(chalkString("queue", lease.queue, SPACING));
  output.push(chalkString("aggregator", lease.aggregator, SPACING));
  output.push(
    chalkString(
      "createdAt",
      BNtoDateTimeString(new BN(lease.createdAt)),
      SPACING
    )
  );

  return output.join("\n");
}

export function prettyPrintJob(
  job: types.JobAccountData,
  publicKey: PublicKey,
  tasks: Array<OracleJob.ITask>,
  label?: string,
  SPACING = 24
): string {
  const output: string[] = [];

  output.push(
    chalk.underline(
      chalkString(`## Job${label ? " " + label : ""}`, publicKey, SPACING)
    )
  );

  output.push(chalkString("name", buf2String(job.name), SPACING));
  output.push(chalkString("metadata", buf2String(job.name), SPACING));
  output.push(chalkString("authority", job.authority, SPACING));
  output.push(
    chalkString("createdAt", BNtoDateTimeString(job.createdAt), SPACING)
  );
  output.push(
    chalkString(
      "expiration",
      job.expiration.toNumber() > 0
        ? BNtoDateTimeString(job.expiration)
        : "N/A",
      SPACING
    )
  );
  output.push(chalkString("isInitializing", job.isInitializing !== 0, SPACING));
  output.push(
    chalkString("tasks", JSON.stringify(tasks, undefined, 2), SPACING)
  );

  return output.join("\n");
}

export function prettyPrintJobs(
  jobs: Array<{
    publicKey: PublicKey;
    data: types.JobAccountData;
    tasks: Array<OracleJob.ITask>;
  }>,
  SPACING = 24
): string {
  const output: string[] = [];

  for (const [index, job] of jobs.entries()) {
    output.push(
      prettyPrintJob(
        job.data,
        job.publicKey,
        job.tasks,
        `#${index + 1}`,
        SPACING
      )
    );
  }

  return output.join("\n");
}

export function prettyPrintAggregatorAccounts(
  accounts: AggregatorAccounts,
  SPACING = 24
): string {
  return [
    prettyPrintAggregator(
      accounts.aggregator.data,
      accounts.aggregator.publicKey,
      SPACING
    ),
    prettyPrintPermissions(
      accounts.permission.data,
      accounts.permission.publicKey,
      SPACING
    ),
    prettyPrintLease(
      accounts.lease.data,
      accounts.lease.publicKey,
      accounts.lease.balance,
      SPACING
    ),
    prettyPrintJobs(accounts.jobs, SPACING),
  ].join("\n\n");
}

export function prettyPrintOracle(
  oracle: types.OracleAccountData,
  publicKey: PublicKey,
  balance?: number,
  SPACING = 24
): string {
  const output: string[] = [];

  output.push(chalk.underline(chalkString("## Oracle", publicKey, SPACING)));

  output.push(chalkString("name", buf2String(oracle.name), SPACING));
  output.push(chalkString("metadata", buf2String(oracle.metadata), SPACING));
  output.push(chalkString("authority", oracle.oracleAuthority, SPACING));
  output.push(chalkString("queue", oracle.queuePubkey, SPACING));
  output.push(chalkString("tokenWallet", oracle.tokenAccount, SPACING));
  if (balance && balance > 0) {
    output.push(chalkString("escrowBalance", balance, SPACING));
  }

  output.push(
    chalkString(
      "lastHeartbeat",
      BNtoDateTimeString(oracle.lastHeartbeat),
      SPACING
    )
  );

  output.push(chalk.underline(chalkString("## Metrics", "", SPACING)));
  output.push(
    chalkString("consecSuccess", oracle.metrics.consecutiveSuccess, SPACING)
  );
  output.push(
    chalkString("consecError", oracle.metrics.consecutiveError, SPACING)
  );
  output.push(
    chalkString(
      "consecDisagreement",
      oracle.metrics.consecutiveDisagreement,
      SPACING
    )
  );
  output.push(
    chalkString(
      "consecLateResponse",
      oracle.metrics.consecutiveLateResponse,
      SPACING
    )
  );
  output.push(
    chalkString("consecFailure", oracle.metrics.consecutiveFailure, SPACING)
  );
  output.push(
    chalkString("totalSuccess", oracle.metrics.totalSuccess, SPACING)
  );
  output.push(chalkString("totalError", oracle.metrics.totalError, SPACING));
  output.push(
    chalkString("totalDisagreement", oracle.metrics.totalDisagreement, SPACING)
  );
  output.push(
    chalkString("totalLateResponse", oracle.metrics.totalLateResponse, SPACING)
  );

  return output.join("\n");
}

export function prettyPrintQueue(
  queue: types.OracleQueueAccountData,
  publicKey: PublicKey,
  SPACING = 24
): string {
  const output: string[] = [];

  output.push(chalk.underline(chalkString("## Queue", publicKey, SPACING)));

  output.push(chalkString("name", buf2String(queue.name), SPACING));
  output.push(chalkString("metadata", buf2String(queue.name), SPACING));
  output.push(chalkString("authority", queue.authority, SPACING));
  output.push(chalkString("dataBuffer", queue.dataBuffer, SPACING));
  output.push(
    chalkString(
      "size",
      `${queue.size.toString(10)} / ${queue.maxSize
        .toString(10)
        .padEnd(4, " ")}`,
      SPACING
    )
  );
  output.push(chalkString("oracleTimeout", queue.oracleTimeout, SPACING));
  output.push(chalkString("mint", queue.mint, SPACING));
  output.push(chalkString("reward", queue.reward, SPACING));
  output.push(chalkString("minStake", queue.minStake, SPACING));
  output.push(chalkString("slashingEnabled", queue.slashingEnabled, SPACING));
  output.push(
    chalkString(
      "varianceToleranceMultpl",
      queue.varianceToleranceMultiplier.toBig(),
      SPACING
    )
  );
  output.push(
    chalkString("unpermFeedsEnabled", queue.unpermissionedFeedsEnabled, SPACING)
  );
  output.push(
    chalkString("unpermVrfEnabled", queue.unpermissionedVrfEnabled, SPACING)
  );
  output.push(
    chalkString("enableBufferRelayers", queue.enableBufferRelayers, SPACING)
  );
  output.push(
    chalkString(
      "consecFeedFailureLimit",
      queue.consecutiveFeedFailureLimit,
      SPACING
    )
  );
  output.push(
    chalkString(
      "consecOracleFailureLimit",
      queue.consecutiveOracleFailureLimit,
      SPACING
    )
  );

  return output.join("\n");
}

export function prettyPrintVrf(
  vrf: types.VrfAccountData,
  publicKey: PublicKey,
  balance?: number,
  SPACING = 24
): string {
  const output: string[] = [];

  output.push(chalk.underline(chalkString("## VRF", publicKey, SPACING)));

  output.push(chalkString("counter", vrf.counter, SPACING));
  output.push(
    chalkString(
      "status",
      `${vrf.status.kind} (${vrf.status.discriminator})`,
      SPACING
    )
  );
  output.push(chalkString("authority", vrf.authority, SPACING));
  output.push(chalkString("queue", vrf.oracleQueue, SPACING));
  output.push(chalkString("escrow", vrf.escrow, SPACING));
  if (balance && balance > 0) {
    output.push(chalkString("escrowBalance", balance, SPACING));
  }

  output.push(
    chalkString(
      "callback",
      JSON.stringify(
        {
          ...vrf.callback,
          accounts: vrf.callback.accounts.filter(
            (a: AccountMeta) => !a.pubkey.equals(PublicKey.default)
          ),
          ixData: `[${vrf.callback.ixData
            .slice(0, vrf.callback.ixDataLen)
            .map((n) => n.toString())
            .join(",")}]`,
        },
        undefined,
        2
      ),
      SPACING
    )
  );

  output.push(chalk.underline(chalkString("## Current Round", "", SPACING)));
  output.push(chalkString("oracle", vrf.builders[0].producer, SPACING));
  output.push(
    chalkString(
      "status",
      `${vrf.builders[0].status.kind} (${vrf.builders[0].status.discriminator})`,
      SPACING
    )
  );
  output.push(chalkString("verified", vrf.builders[0].verified, SPACING));
  output.push(
    chalkString(
      "txRemaining",
      `${vrf.builders[0].txRemaining.toString(10).padStart(3, " ")} / 277`,
      SPACING
    )
  );
  output.push(
    chalkString("requestSlot", vrf.currentRound.requestSlot, SPACING)
  );
  output.push(
    chalkString("requestTimestamp", vrf.currentRound.requestTimestamp, SPACING)
  );
  output.push(
    chalkString(
      "alpha",
      vrf.currentRound.alpha
        ? `[${vrf.currentRound.alpha.map((value) => value.toString())}]`
        : "",
      SPACING
    )
  );
  output.push(
    chalkString(
      "alphaHex",
      Buffer.from(vrf.currentRound.alpha).toString("hex"),
      SPACING
    )
  );
  output.push(
    chalkString(
      "reprProof",
      vrf.builders[0].reprProof
        ? `[${vrf.builders[0].reprProof.map((value) => value.toString())}]`
        : "",
      SPACING
    )
  );
  output.push(
    chalkString(
      "reprProofHex",
      vrf.builders[0].reprProof
        ? Buffer.from(vrf.builders[0].reprProof).toString("hex")
        : "",
      SPACING
    )
  );

  return output.join("\n");
}

export function prettyPrintVrfAccounts(
  accounts: VrfAccounts,
  SPACING = 24
): string {
  return [
    prettyPrintVrf(
      accounts.vrf.data,
      accounts.vrf.publicKey,
      accounts.escrow.balance,
      SPACING
    ),
    prettyPrintPermissions(
      accounts.permission.data,
      accounts.permission.publicKey,
      SPACING
    ),
  ].join("\n\n");
}

export function prettyPrintCrank(
  crank: types.CrankAccountData,
  publicKey: PublicKey,
  SPACING = 24
): string {
  const output: string[] = [];

  output.push(chalk.underline(chalkString("## Crank", publicKey, SPACING)));

  output.push(chalkString("name", buf2String(crank.name), SPACING));
  output.push(chalkString("metadata", buf2String(crank.name), SPACING));
  output.push(chalkString("queue", crank.queuePubkey, SPACING));
  output.push(chalkString("dataBuffer", crank.dataBuffer, SPACING));
  output.push(
    chalkString(
      "size",
      `${crank.pqSize.toString(10).padStart(4, " ")} / ${crank.maxRows
        .toString(10)
        .padEnd(4, " ")}`,
      SPACING
    )
  );

  return output.join("\n");
}

export function prettyPrintSbstate(
  programState: types.SbState,
  publicKey: PublicKey,
  SPACING = 24
) {
  const output: string[] = [];

  output.push(chalk.underline(chalkString("## SbState", publicKey, SPACING)));

  output.push(chalkString("authority", programState.authority, SPACING));
  output.push(chalkString("tokenMint", programState.tokenMint, SPACING));
  output.push(chalkString("tokenVault", programState.tokenVault, SPACING));
  output.push(chalkString("daoMint", programState.daoMint, SPACING));

  return output.join("\n");
}

const emptyEnclave = Array.from({ length: 32 }).fill(0);

export function prettyPrintFunction(
  functionState: attestationTypes.FunctionAccountData,
  publicKey: PublicKey,
  SPACING = 24
): string {
  const output: string[] = [];

  const mrEnclaves = functionState.mrEnclaves.filter(
    (mrEnclave) => mrEnclave !== emptyEnclave
  );

  output.push(chalk.underline(chalkString("## Function", publicKey, SPACING)));

  output.push(chalkString("name", buf2String(functionState.name), SPACING));
  output.push(
    chalkString("metadata", buf2String(functionState.metadata), SPACING)
  );
  output.push(
    chalkString(
      "createdAt",
      BNtoDateTimeString(functionState.createdAt),
      SPACING
    )
  );
  output.push(
    chalkString(
      "updatedAt",
      BNtoDateTimeString(functionState.updatedAt),
      SPACING
    )
  );
  output.push(
    chalkString("mrEnclave", `[${functionState.enclave.mrEnclave}]`, SPACING)
  );
  output.push(
    chalkString("mrEnclaveLen", mrEnclaves.length + " / 32", SPACING)
  );
  output.push(chalkString("authority", functionState.authority, SPACING));
  output.push(
    chalkString("attestationQueue", functionState.attestationQueue, SPACING)
  );
  output.push(chalkString("escrowWallet", functionState.escrowWallet, SPACING));
  output.push(
    chalkString("container", buf2String(functionState.container), SPACING)
  );
  output.push(
    chalkString(
      "containerRegistry",
      buf2String(functionState.containerRegistry),
      SPACING
    )
  );
  output.push(
    chalkString("version", buf2String(functionState.version), SPACING)
  );
  output.push(chalkString("triggerCount", functionState.triggerCount, SPACING));
  output.push(
    chalkString(
      "lastExecution",
      BNtoDateTimeString(functionState.lastExecutionTimestamp),
      SPACING
    )
  );
  output.push(
    chalkString(
      "nextAllowed",
      BNtoDateTimeString(functionState.nextAllowedTimestamp),
      SPACING
    )
  );

  return output.join("\n");
}
