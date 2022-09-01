// import { Flags } from "@oclif/core";
// import { CliBaseCommand as BaseCommand } from "../../BaseCommand";
// import { SwitchboardSecretManager } from "@switchboard-xyz/secret-manager";

// export default class SecretsList extends BaseCommand {
//   static description = "list the secrets in the switchboard secrets registry";

//   static flags = {
//     ...BaseCommand.flags,
//     registryLocation: Flags.string({
//       description: "",
//       required: false,
//     }),
//   };

//   static args = [];

//   async run() {
//     const { args, flags } = await this.parse(SecretsList);

//     const registry = await SwitchboardSecretManager.loadRegistry(
//       "solana",
//       "devnet",
//       flags.registryLocation
//     );
//     if (!registry) {
//       throw new Error(`Failed to load Switchboard secrets registry`);
//     }

//     this.logger.info(`Registry Size: ${registry._secrets.length}`);
//   }

//   async catch(error) {
//     super.catch(error, "secret init command failed");
//   }
// }
export {};
