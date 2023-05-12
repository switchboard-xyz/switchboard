const { normalizeUrl } = require("@docusaurus/utils");

const packageSortPriority = new Map([
  ["@switchboard-xyz/common", 1],
  ["@switchboard-xyz/oracle", 2],
]);

const sortPackages = (a, b) => {
  const aName = a.entryPoints[0].reflection.name;
  const bName = b.entryPoints[0].reflection.name;
  const aPri = packageSortPriority.get(aName) ?? 99;
  const bPri = packageSortPriority.get(bName) ?? 99;
  if (aPri === bPri) {
    return aName.localeCompare(bName);
  }
  return aPri - bPri;
};

const config = {
  projectRoot: require("path").join(__dirname, ".."),
  includeCurrentVersion: true,
  gitRefName: "main",
  readmes: true,
  changelogs: true,
  sortPackages: sortPackages,
  packages: [
    {
      path: "javascript/common",
      entry: {
        index: "src/index.ts",
        protos: {
          label: "/protos",
          path: "src/protos.ts",
        },
        networks: {
          label: "/networks",
          path: "src/networks/index.ts",
        },
      },
    },
    // "javascript/common",
    "javascript/oracle",
    "sdks/aptos/javascript/aptos.js",
    "sdks/evm/javascript/evm.js",
    "sdks/near/javascript/near.js",
    "sdks/solana/javascript/solana.js",
    // "sdks/starknet/javascript/starknet.js",
    "sdks/sui/javascript/sui.js",
    // "sdks/sgx/javascript/sgx-sdk",
  ],
  apiIndexMarkdown: "api/index.mdx",
};

module.exports = config;
