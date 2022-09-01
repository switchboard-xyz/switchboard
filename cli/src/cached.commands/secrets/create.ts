// import { Flags } from "@oclif/core";
// import { CliBaseCommand as BaseCommand } from "../../BaseCommand";
// import { SwitchboardSecretManager } from "@switchboard-xyz/secret-manager";
// import { Keypair } from "@solana/web3.js";

// export default class SecretsCreate extends BaseCommand {
//   static description = "create a new secret and add it to the registry";

//   static aliases = ["create:secret"];

//   static flags = {
//     ...BaseCommand.flags,
//     registryLocation: Flags.string({
//       description: "name of the job account for easier identification",
//       required: false,
//     }),
//     gcpProject: Flags.string({
//       description: "",
//       exclusive: ["fsPath", "awsSecretPath"],
//     }),
//   };

//   static args = [
//     {
//       name: "chain",
//       required: true,
//       options: ["solana", "aptos", "near"],
//       description: "chain to create a new secret for",
//     },
//     {
//       name: "network",
//       required: true,
//       options: ["mainnet", "devnet", "localnet", "betanet", "testnet"],
//       description: "network to create secret for",
//     },
//     {
//       name: "name",
//       required: true,
//       description: "name of the secret",
//     },
//   ];

//   async run() {
//     const { args, flags } = await this.parse(SecretsCreate);

//     const registry = await SwitchboardSecretManager.init();

//     const keypair = Keypair.generate();
//     const secretData = `[${new Uint8Array(
//       Buffer.from(keypair.secretKey)
//     ).toString()}]`;

//     if (flags.gcpProject) {
//       const gcpSecretPath = await registry.add(
//         secretData,
//         args.chain,
//         args.network,
//         args.name,
//         keypair.publicKey.toString(),
//         undefined,
//         flags.gcpProject
//       );
//     }

//     const newSecret = registry.findSecret(args.name);
//     if (!newSecret) {
//       throw new Error(`Failed to find new secret`);
//     }

//     this.logger.info(JSON.stringify(newSecret, undefined, 2));
//   }

//   async catch(error) {
//     super.catch(error, "secret init command failed");
//   }
// }
export {};
