import { Sdk } from "./sdk";
import { dirExists } from "./utils";

import type { SupportedChain } from "@site/src/components/Networks/types";
import path from "path";

const IS_DEVELOPMENT: boolean = true;

function sdkPath(chain: string): string {
  return IS_DEVELOPMENT
    ? path.join(__dirname, "..", "..", "..", "..", `sbv2-${chain}`)
    : path.join(__dirname, "..", "..", "..", "sdks", chain);
}

const evmChains: Array<SupportedChain> = ["coredao", "arbitrum"];
const chains: Array<SupportedChain> = [];

async function main() {
  const networks = (await import("@switchboard-xyz/common/networks"))
    .SWITCHBOARD_NETWORKS;
  console.log(networks);

  for (const chain of chains) {
    if (
      chain !== "solana" &&
      chain !== "arbitrum" &&
      chain !== "aptos" &&
      chain !== "sui" &&
      chain !== "near" &&
      chain !== "coredao"
    ) {
      continue;
    }
    const chainSdkPath = sdkPath(evmChains.includes(chain) ? "evm" : chain);
    dirExists(chainSdkPath);

    const config = networks[chain];

    const chainSdk = await Sdk.load(chainSdkPath, chain, config);

    console.log(`${chain} has ${chainSdk.examples.length} examples`);

    chainSdk.write();
    chainSdk.writeDocs();
  }
}

main()
  .then()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
