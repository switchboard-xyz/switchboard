import { EvmWithSignerBaseCommand as BaseCommand } from "../../../evm";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import chalk from "chalk";

export default class OracleHeartbeat extends BaseCommand {
  static enableJsonFlag = true;

  static description = "heartbeat on-chain and signal readiness";

  static examples = [
    "$ sbv2 evm oracle heartbeat 0x5eeFE1CA9D1093a59aC9278cC6D296A4eeDd6385 --arbitrum --testnet --account ~/.config/arbitrum/testnet.txt",
  ];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description: "alternate account that is the authority for the oracle",
    }),
  };

  static args = {
    oracleAddress: Args.string({
      description: "address of the oracle",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(OracleHeartbeat);

    const authority = await this.getAuthority(flags.authority);

    const [oracleAccount] = await this.loadOracle(args.oracleAddress);

    const heartbeatTx = await oracleAccount.heartbeat({ signer: authority });
    const receipt = await heartbeatTx.wait();

    if (flags.json) {
      return {
        tx: heartbeatTx.hash,
        ...receipt,
      } as any;
    }

    this.logger.info(this.toUrl(heartbeatTx.hash));
    this.logger.info("\n");
    this.success(`Oracle heartbeated successfully: `, heartbeatTx.hash);
  }

  async catch(error: any) {
    super.catch(error, "Failed to heartbeat");
  }
}
