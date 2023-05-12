import path from "path";
import { dirExists } from "./utils";
import { Sdk } from "./sdk";
import { SupportedChain } from "@site/src/components/Networks/types";

const IS_DEVELOPMENT: boolean = true;

function sdkPath(chain: string): string {
  return IS_DEVELOPMENT
    ? path.join(__dirname, "..", "..", "..", "..", `sbv2-${chain}`)
    : path.join(__dirname, "..", "..", "..", "sdks", chain);
}

const evmChains: Array<SupportedChain> = ["coredao"];
const chains: Array<SupportedChain> = [
  "solana",
  "aptos",
  "sui",
  "near",
  "coredao",
];

async function main() {
  const networks = await import("@switchboard-xyz/common/networks");

  for (const chain of chains) {
    if (
      chain !== "solana" &&
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
