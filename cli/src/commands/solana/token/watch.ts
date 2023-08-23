import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";

import { Args, Flags } from "@oclif/core";
import { unpackAccount } from "@solana/spl-token";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram } from "@solana/web3.js";
import { sleep } from "@switchboard-xyz/common";
import chalk from "chalk";
import { clearIntervalAsync, setIntervalAsync } from "set-interval-async";

export default class TokenWatch extends BaseCommand {
  static enableJsonFlag = false;

  static hidden = true;

  static description = "watch a token account for changes in the balance";

  static flags = {
    ...BaseCommand.flags,
    timeout: Flags.integer({
      char: "t",
      description: "time to watch for updates",
      default: 180,
    }),
    tokenAddress: Flags.string({
      description: "token account to watch",
      required: true,
    }),
    address: Flags.string({
      description: "system account to watch",
      required: true,
    }),
  };

  static args = {
    // tokenKey: Args.string({
    //   description: "public key of the token account",
    //   required: true,
    // }),
  };

  systemAddress: PublicKey;
  startingSystemBalanceLamports: number;
  startingSystemBalanceDecimal: number;
  currentSystemBalanceLamports: number;
  currentSystemBalanceDecimal: number;
  systemEvents: string[] = [];

  tokenAddress: PublicKey;
  startingTokenBalanceLamports: bigint;
  startingTokenBalanceDecimal: number;
  currentTokenBalanceLamports: bigint;
  currentTokenBalanceDecimal: number;
  tokenEvents: string[] = [];

  public writeConsole(offset = 0) {
    console.clear();
    console.log(
      chalk.bgGreen(chalk.underline(`SYSTEM`.padEnd(64, " "))),
      chalk.bgGreen(chalk.underline(`TOKEN`.padEnd(64, " ")))
    );
    console.log("");
    console.log(
      chalk.blue(`Watching account ${this.systemAddress}`.padEnd(64, " ")),
      chalk.blue(`Watching account ${this.tokenAddress}`.padEnd(64, " "))
    );

    console.log("");
    console.log(
      chalk.bgYellow(chalk.underline(`Starting Balance`.padEnd(24, " "))),
      chalk.bgBlack(
        chalk.blue(`${this.startingSystemBalanceDecimal} SOL`.padEnd(40, " "))
      ),
      chalk.bgYellow(chalk.underline(`Starting Balance`.padEnd(24, " "))),
      chalk.bgBlack(
        chalk.blue(`${this.startingTokenBalanceDecimal} wSOL`.padEnd(40, " "))
      )
    );
    console.log(
      chalk.bgYellow(chalk.underline(`Current Balance`.padEnd(24, " "))),
      chalk.bgBlack(
        chalk.blue(`${this.currentSystemBalanceDecimal} SOL`.padEnd(40, " "))
      ),
      chalk.bgYellow(chalk.underline(`Current Balance`.padEnd(24, " "))),
      chalk.bgBlack(
        chalk.blue(`${this.currentTokenBalanceDecimal} wSOL`.padEnd(40, " "))
      )
    );
    const systemBalanceLamportDelta =
      this.currentSystemBalanceLamports - this.startingSystemBalanceLamports;
    const tokenBalanceLamportDelta =
      this.currentTokenBalanceLamports - this.startingTokenBalanceLamports;
    console.log(
      chalk.bgYellow(chalk.underline(`Delta`.padEnd(24, " "))),
      systemBalanceLamportDelta >= 0
        ? chalk.bgGreen(
            chalk.white(`${systemBalanceLamportDelta} Lamports`.padEnd(40))
          )
        : chalk.bgRed(
            chalk.white(`${systemBalanceLamportDelta} Lamports`.padEnd(40))
          ),
      chalk.bgYellow(chalk.underline(`Delta`.padEnd(24, " "))),
      tokenBalanceLamportDelta >= 0
        ? chalk.bgGreen(
            chalk.white(`${tokenBalanceLamportDelta} wLamports`.padEnd(40))
          )
        : chalk.bgRed(
            chalk.white(`${tokenBalanceLamportDelta} wLamports`.padEnd(40))
          )
    );
    console.log("");

    console.log(
      chalk.bgYellow(chalk.underline(`Events`.padEnd(64, " "))),
      chalk.bgYellow(chalk.underline(`Events`.padEnd(64, " ")))
    );

    const systemEvents = [...this.systemEvents].reverse().slice(0, 10);
    const tokenEvents = [...this.tokenEvents].reverse().slice(0, 10);
    for (const n of Array.from(
      { length: Math.max(systemEvents.length, tokenEvents.length) },
      (x, i) => i
    )) {
      let systemEvent = "";
      let tokenEvent = "";
      if (n < systemEvents.length) {
        systemEvent = `  - ${systemEvents[n]}`;
      }
      if (n < tokenEvents.length) {
        tokenEvent = `  - ${tokenEvents[n]}`;
      }
      console.log(systemEvent.padEnd(64, " "), tokenEvent.padEnd(64, " "));
    }

    console.log("");
    const overalLamportsDelta =
      systemBalanceLamportDelta +
      Number.parseInt(tokenBalanceLamportDelta.toString(), 10);
    const overLamportsSol = overalLamportsDelta / LAMPORTS_PER_SOL;
    console.log(
      chalk.bgYellow(chalk.underline(`SOL Delta`.padEnd(24, " "))),
      overLamportsSol >= 0
        ? chalk.bgGreen(chalk.white(`${overLamportsSol} SOL`.padEnd(40)))
        : chalk.bgRed(chalk.white(`${overLamportsSol} SOL`.padEnd(40)))
    );
    console.log(
      chalk.bgYellow(chalk.underline(`Lamports Delta`.padEnd(24, " "))),
      overalLamportsDelta >= 0
        ? chalk.bgGreen(
            chalk.white(`${overalLamportsDelta} Lamports`.padEnd(40))
          )
        : chalk.bgRed(chalk.white(`${overalLamportsDelta} Lamports`.padEnd(40)))
    );
  }

  async run() {
    const { args, flags } = await this.parse(TokenWatch);

    this.systemAddress = new PublicKey(flags.address);
    const accountInfo = await this.program.connection.getAccountInfo(
      this.systemAddress
    );
    if (!accountInfo) {
      throw new Error(`Account does not exist ${this.systemAddress}`);
    }
    if (!accountInfo.owner.equals(SystemProgram.programId)) {
      throw new Error(`Account is not owned by the System Program`);
    }
    this.startingSystemBalanceLamports = accountInfo.lamports;
    this.startingSystemBalanceDecimal =
      this.startingSystemBalanceLamports / LAMPORTS_PER_SOL;
    this.currentSystemBalanceLamports = this.startingSystemBalanceLamports;
    this.currentSystemBalanceDecimal = this.startingSystemBalanceDecimal;

    this.tokenAddress = new PublicKey(flags.tokenAddress);
    const tokenAccount = await this.program.mint.getAccount(this.tokenAddress);
    if (!tokenAccount) {
      throw new Error(`TokenAccount does not exist`);
    }

    this.startingTokenBalanceLamports = tokenAccount.amount;
    this.startingTokenBalanceDecimal = this.program.mint.fromTokenAmount(
      this.startingTokenBalanceLamports
    );
    this.currentTokenBalanceLamports = this.startingTokenBalanceLamports;
    this.currentTokenBalanceDecimal = this.startingTokenBalanceDecimal;

    const systemAccountWatcher = setIntervalAsync(async () => {
      const accountInfo = await this.program.connection.getAccountInfo(
        this.systemAddress
      );
      if (!accountInfo) {
        return;
      }

      const diff = accountInfo.lamports - this.currentSystemBalanceLamports;
      if (diff !== 0) {
        this.systemEvents.push(`SOL balance updated by ${diff} lamports`);
      }

      this.currentSystemBalanceLamports = accountInfo.lamports;
      this.currentSystemBalanceDecimal =
        this.currentSystemBalanceLamports / LAMPORTS_PER_SOL;

      this.writeConsole();
    }, 1000);

    // const systemAccountWs = this.program.connection.onAccountChange(
    //   this.systemAddress,
    //   (accountInfo) => {
    //     const balance = BigInt(accountInfo.lamports);
    //     const diff = balance - this.currentSystemBalance;
    //     if (diff > 0) {
    //       this.systemEvents.push(`BalanceLamports updated by ${diff} lamports`);
    //       this.currentTokenBalanceLamports = balance;
    //       this.currentTokenBalanceDecimal =
    //         this.program.mint.fromTokenAmount(balance);

    //       this.writeConsole();
    //     }
    //   }
    // );

    const tokenAccountWs = this.program.connection.onAccountChange(
      this.tokenAddress,
      (accountInfo) => {
        const updatedTokenAccount = unpackAccount(
          this.tokenAddress,
          accountInfo
        );
        const diff =
          updatedTokenAccount.amount - this.currentTokenBalanceLamports;
        if (diff !== BigInt(0)) {
          this.tokenEvents.push(`wSOL balance updated by ${diff} lamports`);
          this.currentTokenBalanceLamports = updatedTokenAccount.amount;
          this.currentTokenBalanceDecimal = this.program.mint.fromTokenAmount(
            this.currentTokenBalanceLamports
          );

          this.writeConsole();
        }
      }
    );

    await (flags.timeout && flags.timeout > 0
      ? sleep(flags.timeout * 1000)
      : sleep(180 * 1000));

    await Promise.all([
      this.program.connection.removeAccountChangeListener(tokenAccountWs),
      Promise.resolve(clearIntervalAsync(systemAccountWatcher)),
    ]);
  }

  async catch(error: any) {
    super.catch(error, "failed to watch account");
  }
}
