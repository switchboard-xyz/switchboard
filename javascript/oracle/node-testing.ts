import { NodeOracle } from "./src";
import { sleep } from "./src/utils";

async function main() {
  // TODO: Create queue + oracle so we dont need to hard-cdoe oracle pubkeys
  const oracle = new NodeOracle("dev-v2-RC_02_23_23_22_23", {
    chain: "solana",
    network: "localnet",
    rpcUrl: "http://0.0.0.0:8899",
    oracleKey: "FKFPBD5WUUL5bSNwBH3AKY58KuY8nz2zkMCYR271CcVA",
    secretPath: "~/.config/solana/id.json",
  });

  try {
    await oracle.startAndAwait();
    console.log("oracle ready");
    await sleep(10000);
  } catch (error) {
    console.error(error);
  }

  oracle.stop();
}

main()
  .then(() => {
    console.log("NodeJS exited");
  })
  .catch((error) => {
    console.error(error);
  });
