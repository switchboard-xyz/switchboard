import { Flags } from "@oclif/core";
import * as anchor from "@project-serum/anchor";
import * as spl from "@solana/spl-token-v2";
import {
  Keypair,
  PublicKey,
  SystemProgram,
  TransactionInstruction,
} from "@solana/web3.js";
import { OracleJob } from "@switchboard-xyz/common";
import { prettyPrintAggregator, sleep } from "@switchboard-xyz/sbv2-utils";
import {
  AggregatorAccount,
  CrankAccount,
  JobAccount,
  LeaseAccount,
  OracleQueueAccount,
  packInstructions,
  packTransactions,
  PermissionAccount,
  ProgramStateAccount,
  programWallet,
  SwitchboardDecimal,
} from "@switchboard-xyz/switchboard-v2";
import Big from "big.js";
import fs from "fs";
import path from "path";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import _ from "lodash";

// TODO: Finish
export default class AggregatorCreate extends BaseCommand {
  static description = "create an aggregator account";

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description: "alternate keypair that is the authority for the aggregator",
    }),
    crankKey: Flags.string({
      description: "public key of the crank to join",
    }),
    enable: Flags.boolean({
      description: "set permissions to PERMIT_ORACLE_QUEUE_USAGE",
    }),
    queueAuthority: Flags.string({
      description: "alternative keypair to use for queue authority",
    }),
    name: Flags.string({
      char: "n",
      description: "name of the aggregator",
    }),
    forceReportPeriod: Flags.integer({
      description:
        "Number of seconds for which, even if the variance threshold is not passed, accept new responses from oracles.",
    }),
    batchSize: Flags.integer({
      description: "number of oracles requested for each open round call",
    }),
    minJobs: Flags.integer({
      description: "number of jobs that must respond before an oracle responds",
    }),
    minOracles: Flags.integer({
      description:
        "number of oracles that must respond before a value is accepted on-chain",
    }),
    updateInterval: Flags.integer({
      description: "set an aggregator's minimum update delay",
    }),
    varianceThreshold: Flags.string({
      description:
        "percentage change between a previous accepted result and the next round before an oracle reports a value on-chain. Used to conserve lease cost during low volatility",
    }),
    job: Flags.string({
      char: "j",
      description: "filesystem path to job definition file",
      multiple: true,
    }),
  };

  static args = [
    {
      name: "queueKey",
      description:
        "public key of the oracle queue account to create aggregator for",
    },
  ];

  async run() {
    const { args, flags } = await this.parse(AggregatorCreate);

    const payerKeypair = programWallet(this.program);
    const feedAuthority = await this.loadAuthority(flags.authority);
    const queueAuthority = await this.loadAuthority(flags.queueAuthority);

    const [programStateAccount, stateBump] = ProgramStateAccount.fromSeed(
      this.program
    );
    const queueAccount = new OracleQueueAccount({
      program: this.program,
      publicKey: new PublicKey(args.queueKey),
    });
    const queue = await queueAccount.loadData();
    const mint = await queueAccount.loadMint();
    const tokenWallet = await spl.getOrCreateAssociatedTokenAccount(
      this.program.provider.connection,
      payerKeypair,
      mint.address,
      payerKeypair.publicKey
    );

    const createAccountInstructions: (
      | TransactionInstruction
      | TransactionInstruction[]
    )[] = [];
    const createAccountSigners: Keypair[] = [
      payerKeypair,
      feedAuthority,
      queueAuthority,
    ];

    // Create Job Accounts
    const createJobs = flags.job
      ? await Promise.all(
          flags.job.map(
            async (
              jobDefinition
            ): Promise<[TransactionInstruction[], Keypair]> => {
              const jobJson = JSON.parse(
                fs.readFileSync(
                  jobDefinition.startsWith("/")
                    ? jobDefinition
                    : path.join(process.cwd(), jobDefinition),
                  "utf8"
                )
              );
              if (!jobJson || !("tasks" in jobJson)) {
                throw new Error("job definition missing tasks");
              }

              const jobKeypair = anchor.web3.Keypair.generate();

              const data = Buffer.from(
                OracleJob.encodeDelimited(
                  OracleJob.create({
                    tasks: jobJson.tasks,
                  })
                ).finish()
              );

              console.log("len", data.byteLength);

              const size = 280 + data.length;

              const createJobIxn = await this.program.methods
                .jobInit({
                  name: Buffer.from("").slice(0, 32),
                  expiration: new anchor.BN(0),
                  stateBump,
                  data: data,
                  size: data.byteLength,
                })
                .accounts({
                  job: jobKeypair.publicKey,
                  authority: feedAuthority.publicKey,
                  programState: programStateAccount.publicKey,
                  payer: this.signer.publicKey,
                  systemProgram: SystemProgram.programId,
                })
                .signers([feedAuthority, jobKeypair])
                .instruction();

              return [[createJobIxn], jobKeypair];
            }
          )
        )
      : [];

    const createJobIxn = createJobs.map((index) => index[0]);
    const createJobSigners = createJobs.map((index) => index[1]);

    const jobAccounts = createJobs
      .map((index) => index[1])
      .map((jobKeypair) => {
        return new JobAccount({
          program: this.program,
          publicKey: jobKeypair.publicKey,
          keypair: jobKeypair,
        });
      });

    // Create Aggregator Account
    const aggregatorKeypair = anchor.web3.Keypair.generate();
    const aggregatorSize = this.program.account.aggregatorAccountData.size;
    const aggregatorAccount = new AggregatorAccount({
      program: this.program,
      publicKey: aggregatorKeypair.publicKey,
    });
    const [permissionAccount, permissionBump] = PermissionAccount.fromSeed(
      this.program,
      queue.authority,
      queueAccount.publicKey,
      aggregatorKeypair.publicKey
    );
    createAccountInstructions.push(
      [
        SystemProgram.createAccount({
          fromPubkey: payerKeypair.publicKey,
          newAccountPubkey: aggregatorKeypair.publicKey,
          space: aggregatorSize,
          lamports:
            await this.program.provider.connection.getMinimumBalanceForRentExemption(
              aggregatorSize
            ),
          programId: this.program.programId,
        }),
        // create aggregator
        await this.program.methods
          .aggregatorInit({
            name: Buffer.from(flags.name ?? "").slice(0, 32),
            metadata: Buffer.from("").slice(0, 64),
            batchSize: flags.batchSize ?? 1,
            minOracleResults: flags.minOracles ?? 1,
            minJobResults: flags.minJobs ?? 1,
            minUpdateDelaySeconds: flags.updateInterval ?? 30,
            varianceThreshold: flags.varianceThreshold
              ? SwitchboardDecimal.fromBig(new Big(flags.varianceThreshold))
              : SwitchboardDecimal.fromBig(new Big(0)),
            forceReportPeriod: new anchor.BN(flags.forceReportPeriod ?? 0),
            expiration: new anchor.BN(0),
            startAfter: new anchor.BN(0),
            disableCrank: false,
            stateBump,
          })
          .accounts({
            aggregator: aggregatorKeypair.publicKey,
            authority: feedAuthority.publicKey,
            queue: queueAccount.publicKey,
            authorWallet: tokenWallet.address,
            programState: programStateAccount.publicKey,
          })
          .instruction(),
        await this.program.methods
          .permissionInit({})
          .accounts({
            permission: permissionAccount.publicKey,
            authority: queue.authority,
            granter: queueAccount.publicKey,
            grantee: aggregatorKeypair.publicKey,
            payer: payerKeypair.publicKey,
            systemProgram: SystemProgram.programId,
          })
          .instruction(),
        flags.enable && queueAuthority.publicKey.equals(queue.authority)
          ? await this.program.methods
              .permissionSet({
                permission: { permitOracleQueueUsage: undefined },
                enable: true,
              })
              .accounts({
                permission: permissionAccount.publicKey,
                authority: queueAuthority.publicKey,
              })
              .instruction()
          : undefined,
      ].filter((item) => item)
    );
    createAccountSigners.push(aggregatorKeypair);

    // Create Lease Account
    // Add to crank if applicable
    const [leaseAccount, leaseBump] = LeaseAccount.fromSeed(
      this.program,
      queueAccount,
      aggregatorAccount
    );
    const leaseEscrow = await spl.getAssociatedTokenAddress(
      mint.address,
      leaseAccount.publicKey,
      true,
      spl.TOKEN_PROGRAM_ID,
      spl.ASSOCIATED_TOKEN_PROGRAM_ID
    );
    createAccountInstructions.push(
      [
        spl.createAssociatedTokenAccountInstruction(
          payerKeypair.publicKey,
          leaseEscrow,
          leaseAccount.publicKey,
          mint.address,
          spl.TOKEN_PROGRAM_ID,
          spl.ASSOCIATED_TOKEN_PROGRAM_ID
        ),
        await this.program.methods
          .leaseInit({
            loadAmount: new anchor.BN(0),
            stateBump,
            leaseBump,
            withdrawAuthority: feedAuthority.publicKey,
            walletBumps: Buffer.from([]),
          })
          .accounts({
            programState: programStateAccount.publicKey,
            lease: leaseAccount.publicKey,
            queue: queueAccount.publicKey,
            aggregator: aggregatorAccount.publicKey,
            systemProgram: SystemProgram.programId,
            funder: tokenWallet.address,
            payer: payerKeypair.publicKey,
            tokenProgram: spl.TOKEN_PROGRAM_ID,
            escrow: leaseEscrow,
            owner: payerKeypair.publicKey,
            mint: mint.address,
          })
          // .remainingAccounts(
          //   jobPubkeys.concat(jobWallets).map((pubkey: PublicKey) => {
          //     return { isSigner: false, isWritable: true, pubkey };
          //   })
          // )
          .instruction(),
        flags.crankKey
          ? await this.program.methods
              .crankPush({
                stateBump,
                permissionBump,
                nofitiRef: null,
                notifiRef: null,
              })
              .accounts({
                crank: new PublicKey(flags.crankKey),
                aggregator: aggregatorKeypair.publicKey,
                oracleQueue: queueAccount.publicKey,
                queueAuthority: queue.authority,
                permission: permissionAccount.publicKey,
                lease: leaseAccount.publicKey,
                escrow: leaseEscrow,
                programState: programStateAccount.publicKey,
                dataBuffer: (
                  await new CrankAccount({
                    program: this.program,
                    publicKey: new PublicKey(flags.crankKey),
                  }).loadData()
                ).dataBuffer,
              })
              .instruction()
          : undefined,
      ].filter((item) => item)
    );

    // Add Job Accounts
    const addJobIxns = await Promise.all(
      jobAccounts.map(async (job) => {
        return this.program.methods
          .aggregatorAddJob({
            weight: 1,
          })
          .accounts({
            aggregator: aggregatorKeypair.publicKey,
            authority: feedAuthority.publicKey,
            job: job.publicKey,
          })
          .instruction();
      })
    );

    const ixns = _.flattenDeep([
      createJobIxn,
      createAccountInstructions,
      addJobIxns,
    ]).filter(Boolean);

    // console.log(JSON.stringify(ixns, undefined, 2));
    console.log(ixns.length);

    const packedTxns = packInstructions(ixns)
      .filter(Boolean)
      .filter((t) => t.instructions.length);

    const signedTransactions = await packTransactions(
      this.program.provider.connection,
      packedTxns,
      _.flatMapDeep([...createJobSigners, ...createAccountSigners]),
      payerKeypair.publicKey
    ).catch((error) => {
      throw error;
    });

    const sigs: string[] = [];
    for await (const txn of signedTransactions) {
      const sig = await this.program.provider.connection.sendRawTransaction(
        txn.serialize()
      );
      sigs.push(sig);
      this.logger.info(this.toUrl(sig));
      await sleep(1000);
    }

    // let aggInitWs: number;
    // const aggInitPromise = new Promise((resolve: (result: any) => void) => {
    //   aggInitWs = this.program.provider.connection.onAccountChange(
    //     aggregatorKeypair.publicKey,
    //     (accountInfo: AccountInfo<Buffer>, slot) => {
    //       const aggData = new anchor.BorshAccountsCoder(
    //         this.program.idl
    //       ).decode("AggregatorAccountData", accountInfo.data);
    //       resolve(aggData);
    //     }
    //   );
    // });

    // const result = await promiseWithTimeout(45_000, aggInitPromise).finally(
    //   () => {
    //     try {
    //       this.program.provider.connection.removeAccountChangeListener(
    //         aggInitWs
    //       );
    //     } catch {}
    //   }
    // );

    if (this.silent) {
      console.log(aggregatorAccount.publicKey.toString());
    }

    await sleep(2500);

    const aggregator = await aggregatorAccount.loadData();

    this.logger.info(
      await prettyPrintAggregator(
        aggregatorAccount,
        aggregator,
        true,
        true,
        true
      )
    );
  }

  async catch(error) {
    super.catch(error, "Failed to create aggregator account");
  }
}
