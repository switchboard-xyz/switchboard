/* eslint no-negated-condition: 0 */

import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { AggregatorIllegalRoundOpenCall } from "../../../types";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import {
  AggregatorAccount,
  CrankAccount,
  LeaseAccount,
  PermissionAccount,
  QueueAccount,
  TransactionObject,
  types,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class AggregatorTransfer extends BaseCommand {
  static description = "transfer an aggregator to a new queue";

  static examples = [
    "$ sb solana aggregator transfer GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --mainnetBeta --loadAmount 0.1 --newQueue 3HBb2DQqDfuMdzWxNk1Eo9RTMkFYmuEAd32RiLKn9pAn --newCrank GdNVLWzcE6h9SPuSbmu69YzxAj8enim9t6mjzuqTXgLd --keypair ~/.config/solana/id.json",
  ];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description: "alternate keypair that is the authority for the aggregator",
    }),
    newQueue: Flags.string({
      required: true,
      description: "publicKey of the new queue to transfer to",
    }),
    newCrank: Flags.string({
      description: "publicKey of the crank to transfer to",
    }),
    loadAmount: Flags.string({
      description:
        "amount of funds to load into the new lease, in addition to the funds remaining in the old lease account",
      default: "0.0",
    }),
    enable: Flags.boolean({
      description: "enable permissions on the new queue",
    }),
    queueAuthority: Flags.string({
      description:
        "alternate keypair that is the authority for the queue. only used if enabling permissions in one transaction",
    }),
    force: Flags.boolean({
      description: "skip permission checks",
    }),
  };

  static args = {
    aggregatorKey: Args.string({
      description: "public key of the aggregator account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(AggregatorTransfer);

    const loadAmount = Number(flags.loadAmount ?? "0.0");

    const txns: Array<TransactionObject> = [];

    const [aggregatorAccount, aggregator] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );

    const [payerTokenWallet, wrapIxns] =
      await this.program.mint.getOrCreateWrappedUserInstructions(
        this.program.walletPubkey,
        { fundUpTo: loadAmount }
      );
    if (wrapIxns) {
      txns.push(wrapIxns);
    }

    const authority = await this.loadAuthority(
      flags.authority,
      aggregator.authority
    );

    const [oldQueueAccount, oldQueue] = await QueueAccount.load(
      this.program,
      aggregator.queuePubkey
    );

    const [newQueueAccount, newQueue] = await QueueAccount.load(
      this.program,
      flags.newQueue
    );

    if (oldQueueAccount.publicKey.equals(newQueueAccount.publicKey)) {
      throw new Error(
        `Aggregator already belongs to --newQueue ${newQueueAccount.publicKey}`
      );
    }

    const queueAuthority =
      flags.enable && flags.queueAuthority
        ? await this.loadAuthority(flags.queueAuthority, newQueue.authority)
        : undefined;

    // create new lease
    const [oldLeaseAccount] = LeaseAccount.fromSeed(
      this.program,
      aggregator.queuePubkey,
      aggregatorAccount.publicKey
    );
    const oldLease = await oldLeaseAccount.loadData();
    const jobs = await aggregatorAccount.loadJobs(aggregator);
    const jobAuthorities = jobs.map((job) => job.state.authority);
    const [newLeaseAccount] = LeaseAccount.fromSeed(
      this.program,
      newQueueAccount.publicKey,
      aggregatorAccount.publicKey
    );
    const newLeaseAccountInfo = await this.program.connection.getAccountInfo(
      newLeaseAccount.publicKey
    );
    if (newLeaseAccountInfo === null) {
      // create lease for the new queue but dont transfer any balance
      const [_newLeaseAccount, leaseInit] =
        await LeaseAccount.createInstructions(
          this.program,
          this.program.walletPubkey,
          {
            disableWrap: true, // already included
            aggregatorAccount: aggregatorAccount,
            queueAccount: newQueueAccount,
            funderTokenWallet: payerTokenWallet ?? undefined,
            jobAuthorities,
            fundAmount: loadAmount,
            withdrawAuthority: aggregator.authority, // set to current authority
            jobPubkeys: aggregator.jobPubkeysData.slice(
              0,
              aggregator.jobPubkeysSize
            ),
          }
        );

      txns.push(leaseInit);
    } else {
      // lease already created, fund lease if needed
      const newLease = types.LeaseAccountData.decode(newLeaseAccountInfo.data);
      if (loadAmount > 0) {
        const transferIxn = await newLeaseAccount.extendInstruction(
          this.program.walletPubkey,
          {
            fundAmount: loadAmount,
            funderTokenWallet: payerTokenWallet,
            disableWrap: true,
          }
        );
        txns.push(transferIxn);
      }
    }

    // create new permission account
    let skipPermissionCheck = false;
    const [newPermissionAccount] = PermissionAccount.fromSeed(
      this.program,
      newQueue.authority,
      newQueueAccount.publicKey,
      aggregatorAccount.publicKey
    );
    const newPermissionAccountInfo =
      await this.program.connection.getAccountInfo(
        newPermissionAccount.publicKey
      );
    // if existing, check permissions
    if (newPermissionAccountInfo !== null) {
      const newPermission = types.PermissionAccountData.decode(
        newPermissionAccountInfo.data
      );

      // try to set permissions
      if (
        flags.enable &&
        newPermission.permissions !==
          types.SwitchboardPermission.PermitOracleQueueUsage.discriminator
      ) {
        if (
          (queueAuthority &&
            newQueue.authority.equals(queueAuthority.publicKey)) ||
          newQueue.authority.equals(this.program.walletPubkey)
        ) {
          const permissionSet = newPermissionAccount.setInstruction(
            this.program.walletPubkey,
            {
              enable: true,
              queueAuthority: queueAuthority,
              permission:
                new types.SwitchboardPermission.PermitOracleQueueUsage(),
            }
          );
          txns.push(permissionSet);
          skipPermissionCheck = true;
        } else if (!flags.force) {
          throw new Error(
            `Permission account lacks permissions to join this queue. Try providing the --queueAuthority flag or have the queue authority enable your permission account`
          );
        }
      }
    } else {
      const [_newPermissionAccount, permissionInitTxn] =
        PermissionAccount.createInstruction(
          this.program,
          this.program.walletPubkey,
          {
            authority: newQueue.authority,
            granter: newQueueAccount.publicKey,
            grantee: aggregatorAccount.publicKey,
          }
        );
      txns.push(permissionInitTxn);

      if (flags.enable) {
        if (
          (queueAuthority &&
            newQueue.authority.equals(queueAuthority.publicKey)) ||
          newQueue.authority.equals(this.program.walletPubkey)
        ) {
          const permissionSet = _newPermissionAccount.setInstruction(
            this.program.walletPubkey,
            {
              enable: true,
              queueAuthority: queueAuthority,
              permission:
                new types.SwitchboardPermission.PermitOracleQueueUsage(),
            }
          );
          txns.push(permissionSet);
          skipPermissionCheck = true;
        } else if (!flags.force) {
          throw new Error(
            `Permission account lacks permissions to join this queue. Try providing the --queueAuthority flag or have the queue authority enable your permission account`
          );
        }
      }
    }

    if (
      !skipPermissionCheck &&
      !newQueue.unpermissionedFeedsEnabled &&
      !flags.force
    ) {
      throw new Error(
        `Permission account lacks permissions to join this queue. Try providing the --queueAuthority flag or have the queue authority enable your permission account`
      );
    }

    // set the feeds queue
    const setQueueTxn = new TransactionObject(
      this.program.walletPubkey,
      [
        types.aggregatorSetQueue(
          this.program,
          { params: {} },
          {
            aggregator: aggregatorAccount.publicKey,
            authority: aggregator.authority,
            queue: newQueueAccount.publicKey,
          }
        ),
      ],
      authority ? [authority] : []
    );
    txns.push(setQueueTxn);

    // push to crank
    if (flags.newCrank) {
      const [newCrankAccount, newCrank] = await CrankAccount.load(
        this.program,
        flags.newCrank
      );

      if (!newCrank.queuePubkey.equals(newQueueAccount.publicKey)) {
        throw new Error(`Crank is owned by the wrong queue`);
      }

      const crankPush = newCrankAccount.pushInstructionSync(
        this.program.walletPubkey,
        {
          aggregatorAccount: aggregatorAccount,
          queue: newQueue,
          crank: newCrank,
        }
      );
      txns.push(crankPush);
    }

    // remove any funds from the old lease account
    const oldLeaseBalance = await oldLeaseAccount.fetchBalance(oldLease.escrow);
    if (oldLeaseBalance > 0) {
      if (oldLease.withdrawAuthority.equals(this.program.walletPubkey)) {
        const withdrawTxn = await oldLeaseAccount.withdrawInstruction(
          this.program.walletPubkey,
          {
            amount: oldLeaseBalance,
            unwrap: false,
            // withdraw old lease funds into the new lease
            withdrawWallet: this.program.mint.getAssociatedAddress(
              newLeaseAccount.publicKey
            ),
          }
        );
        txns.push(withdrawTxn);
      } else {
        this.log(
          `Skipping withdrawing funds from old lease: Aggregator's withdrawAuthority does not match payer, expected ${this.program.walletPubkey}, received ${oldLease.withdrawAuthority}`
        );
      }
    } else {
      this.log(
        `Skipping withdrawing funds from old lease: Old lease has a current balance of ${oldLeaseBalance}.`
      );
    }

    const transferTxns = TransactionObject.pack(txns, {
      computeUnitPrice: 1,
    });

    const signatures = await this.signAndSendAll(transferTxns);

    if (this.silent) {
      this.logger.info(signatures.join("\n"));
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Aggregator transfer to new queue successfully`
      )}`
    );

    signatures.map((signature) => this.logger.info(this.toUrl(signature)));
  }

  async catch(error: any) {
    if (
      error instanceof AggregatorIllegalRoundOpenCall ||
      error.toString().includes("0x177d")
    ) {
      this.logger.info(error.toString());
      this.exit(0);
    }

    super.catch(error, "failed to transfer aggregator to new queue");
  }
}
