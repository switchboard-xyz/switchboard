import { Flags } from "@oclif/core";
import { AptosWithoutSignerBaseCommand as BaseCommand } from "../../aptos";
import { AptosAccount, HexString } from "aptos";
import {
  AggregatorAccount,
  AptosDecimal,
  CrankAccount,
  OracleAccount,
  OracleQueueAccount,
  Permission,
  StateAccount,
} from "@switchboard-xyz/aptos.js";
import { OracleJob } from "@switchboard-xyz/common";

export default class AptosPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print an aptos account";

  static aliases = ["aptos:print"];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "accountType",
      options: [
        "queue",
        "aggregator",
        "crank",
        "oracle",
        "permission",
        "lease",
        "job",
        "state",
      ],
      description: "account type to print",
      required: true,
    },
    {
      name: "address",
      description: "HexString address of the account to print",
      required: true,
    },
  ];

  normalizeAccountData(address: HexString, data: any): Record<string, any> {
    return JSON.parse(
      JSON.stringify(
        {
          address: address.hex(),
          ...data,
        },
        this.jsonReplacers,
        2
      )
    );
  }

  async run() {
    const { flags, args } = await this.parse(AptosPrint);

    const address = HexString.ensure(args.address);
    let data: any;

    switch (args.accountType) {
      case "queue": {
        const [queue, queueData] = await this.loadQueue(address.toString());
        data = this.normalizeAccountData(address, queueData);
        break;
      }
      case "crank": {
        const [crank, crankData] = await this.loadCrank(address.toString());
        data = this.normalizeAccountData(address, crankData);
        break;
      }
      case "oracle": {
        const [oracle, oracleData] = await this.loadOracle(address.toString());
        data = this.normalizeAccountData(address, oracleData);
        break;
      }
      case "aggregator": {
        const [aggregator, aggregatorData] = await this.loadAggregator(
          address.toString()
        );
        const jobs: Array<OracleJob> = [];
        for (const jobKey of aggregatorData.jobKeys) {
          const [job, jobData, oracleJob] = await this.loadJob(
            jobKey.toString()
          );
          jobs.push(oracleJob);
        }

        data = this.normalizeAccountData(address, {
          ...aggregatorData,
          jobs: jobs.map((j) => j.toJSON()),
        });
        break;
      }
      case "job": {
        const [job, jobData, oracleJob] = await this.loadJob(
          address.toString()
        );
        data = this.normalizeAccountData(address, {
          ...jobData,
          data: oracleJob.toJSON(),
        });
        break;
      }
      case "state": {
        const [state, stateData] = await this.loadState();
        data = this.normalizeAccountData(address, await state.loadData());
        break;
      }
      // case "permission": {
      //   const permission = new Permission(this.aptos, this.programId);
      //   data = this.normalizeAccountData(address, await permission.loadData());
      //   break;
      // }
      default: {
        throw new Error(
          `printing for accountType ${args.accountType} not implemented yet`
        );
      }
    }

    if (!data) {
      throw new Error(
        `Failed to fetch account data for accountType ${args.accountTyp}`
      );
    }

    if (flags.json) {
      return data;
    }
    console.log(JSON.stringify(data, this.jsonReplacers, 2));
  }

  async catch(error) {
    super.catch(error, "Failed to print aptos account");
  }
}
