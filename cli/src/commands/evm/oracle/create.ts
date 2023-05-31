import { EvmWithSignerBaseCommand as BaseCommand } from "../../../evm";
import { chalkString } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { EnablePermissions, OracleAccount } from "@switchboard-xyz/evm.js";

export default class OracleCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new oracle";

  static aliases = ["evm:create:oracle"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate account that will be the authority for the oracle",
    }),
    name: Flags.string({
      description: "name of the oracle for easier identification",
    }),
    enable: Flags.boolean({
      description: "enable the oracles heartbeat permissions",
    }),
    queueAuthority: Flags.string({
      description:
        "override the default signer when setting oracle permissions",
      dependsOn: ["enable"],
    }),
  };

  static args = {
    queueAddress: Args.string({
      description: "address of the oracle queue to create a new oracle for",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(OracleCreate);

    const authority = await this.getAuthority(flags.authority);

    const [queueAccount, queueData] = await this.loadQueue(args.queueAddress);

    let enableParams: EnablePermissions = false;
    if (flags.enable) {
      enableParams = true;

      if (flags.queueAuthority) {
        const queueAuthoritySigner = await this.getAuthority(
          flags.queueAuthority
        );
        enableParams = { queueAuthority: queueAuthoritySigner };
      }
    }

    const oracleAccount = await queueAccount.createOracle(
      {
        name: flags.name ?? "",
        authority: await authority.getAddress(),
      },
      enableParams
    );

    const oracleData = await oracleAccount.loadData();

    if (flags.json) {
      return this.normalizeAccountData(oracleAccount.address, oracleData);
    }

    this.prettyPrintOracle(oracleData, oracleAccount.address);

    let permissions: string = "N/A";
    try {
      const permissionBignum = await this.program.sb.permissions(
        queueAccount.address,
        oracleAccount.address
      );
      permissions = permissionBignum.toNumber().toString();
    } catch {}

    this.log(chalkString("permissions", permissions));
  }

  async catch(error: any) {
    super.catch(error, "Failed to create oracle");
  }
}
