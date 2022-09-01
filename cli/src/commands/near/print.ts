import { Flags } from "@oclif/core";
import { NearWithoutSignerBaseCommand as BaseCommand } from "../../near";
import {
  AggregatorAccount,
  CrankAccount,
  JobAccount,
  OracleAccount,
  PermissionAccount,
  QueueAccount,
} from "@switchboard-xyz/near.js";
import { OracleJob } from "@switchboard-xyz/common";

export default class NearPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print a near switchboard account";

  static aliases = ["near:print"];

  static flags = {
    ...BaseCommand.flags,
    all: Flags.boolean({
      description:
        "print all account attributes including jobs, permissions, and leases",
    }),
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
      ],
      description: "account type to print",
      required: true,
    },
    {
      name: "address",
      description:
        "address of the account to print in Uint8 or Base58 encoding",
      required: true,
    },
  ];

  async run() {
    const { flags, args } = await this.parse(NearPrint);

    const address = this.parseAddress(args.address);
    const params = {
      connection: this.near.connection,
      address,
    };
    let data: any;

    switch (args.accountType) {
      case "queue": {
        const queue = new QueueAccount(params);
        data = await queue.loadData();
        break;
      }
      case "crank": {
        const crank = new CrankAccount(params);
        data = await crank.loadData();
        break;
      }
      case "oracle": {
        const oracle = new OracleAccount(params);
        data = await oracle.loadData();
        if (flags.all) {
          const queue = new QueueAccount({
            connection: this.near.connection,
            address: data.queue,
          });
          const queueData = await queue.loadData();

          try {
            const permissionKey = PermissionAccount.keyFromSeed(
              queueData.authority,
              queue.address,
              address
            );
            const permission = new PermissionAccount({
              connection: this.near.connection,
              address: permissionKey,
            });
            const permissionData = await permission.loadData();
            data = {
              ...data,
              permission: {
                address: permission.address,
                addressBase58: this.encodeAddress(permission.address),
                ...permissionData,
              },
            };
          } catch {}
        }

        break;
      }
      case "aggregator": {
        const aggregator = new AggregatorAccount(params);
        data = await aggregator.loadData();
        if (flags.all) {
          const queue = new QueueAccount({
            connection: this.near.connection,
            address: data.queue,
          });
          const queueData = await queue.loadData();

          try {
            const permissionKey = PermissionAccount.keyFromSeed(
              queueData.authority,
              queue.address,
              address
            );
            const permission = new PermissionAccount({
              connection: this.near.connection,
              address: permissionKey,
            });
            const permissionData = await permission.loadData();
            data = {
              ...data,
              permission: {
                address: permission.address,
                addressBase58: this.encodeAddress(permission.address),
                ...permissionData,
              },
            };
          } catch {}

          try {
            const aggregatorJobData: any[] = await Promise.all(
              (data.jobs as Array<Array<number>>).map(async (jobAddress) => {
                const jobAccount = new JobAccount({
                  connection: this.near.connection,
                  address: new Uint8Array(jobAddress),
                });
                const jobData = await jobAccount.loadData();
                const oracleJob = OracleJob.decodeDelimited(jobData.data);
                return {
                  address: jobAccount.address,
                  addressBase58: this.encodeAddress(jobAccount.address),
                  ...jobData,
                  data: oracleJob.toJSON(),
                };
              })
            );
            data = { ...data, jobs: aggregatorJobData };
          } catch {}
        }
        break;
      }
      case "permission": {
        const permission = new PermissionAccount(params);
        data = await permission.loadData();
        break;
      }
      case "job": {
        const job = new JobAccount(params);
        data = await job.loadData();
        data = {
          ...data,
          // data: oracleJob.toJSON(),
        };
        break;
      }
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
      return this.normalizeAccountData(address, data);
    }
    console.log(JSON.stringify(data, this.jsonReplacers, 2));
  }

  async catch(error) {
    super.catch(error, "Failed to print near account");
  }
}
