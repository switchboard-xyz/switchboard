#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

/**
 * TODO:
 * - Grab README from SDK client and add to partial markdown file
 */

import path from "path";
import chalk from "chalk";
import { generateCliDocs } from "./cli";
import { generateGenericApiTypedocs } from "./typedoc";

const projectRoot = path.join(__dirname, "..", "..");

(() => {
  console.log(chalk.green(`Generating typedocs for @switchboard-xyz/common`));
  generateGenericApiTypedocs(
    projectRoot,
    ["javascript", "common"],
    ["@switchboard-xyz", "common"]
  );

  console.log(chalk.green(`Generating typedocs for @switchboard-xyz/oracle`));
  generateGenericApiTypedocs(
    projectRoot,
    ["javascript", "oracle"],
    ["@switchboard-xyz", "oracle"]
  );

  console.log(chalk.green(`Generating typedocs for @switchboard-xyz/aptos.js`));
  generateGenericApiTypedocs(
    projectRoot,
    ["sdks", "aptos", "javascript", "aptos.js"],
    ["@switchboard-xyz", "aptos.js"]
  );

  console.log(chalk.green(`Generating typedocs for @switchboard-xyz/near.js`));
  generateGenericApiTypedocs(
    projectRoot,
    ["sdks", "near", "javascript", "near.js"],
    ["@switchboard-xyz", "near.js"]
  );

  console.log(
    chalk.green(`Generating typedocs for @switchboard-xyz/switchboard-v2`)
  );
  generateGenericApiTypedocs(
    projectRoot,
    ["sdks", "solana", "javascript", "__deprecated__", "switchboard-v2"],
    ["@switchboard-xyz", "switchboard-v2"],
    "npm"
  );

  console.log(
    chalk.green(`Generating typedocs for @switchboard-xyz/solana.js`)
  );
  generateGenericApiTypedocs(
    projectRoot,
    ["sdks", "solana", "javascript", "solana.js"],
    ["@switchboard-xyz", "solana.js"]
  );

  console.log(
    chalk.green(`Generating typedocs for @switchboard-xyz/sbv2-lite`)
  );
  generateGenericApiTypedocs(
    projectRoot,
    ["sdks", "solana", "javascript", "__deprecated__", "sbv2-lite"],
    ["@switchboard-xyz", "sbv2-lite"],
    "npm"
  );

  console.log(
    chalk.green(`Generating typedocs for @switchboard-xyz/sbv2-utils`)
  );
  generateGenericApiTypedocs(
    projectRoot,
    ["sdks", "solana", "javascript", "__deprecated__", "sbv2-utils"],
    ["@switchboard-xyz", "sbv2-utils"],
    "npm"
  );

  console.log(chalk.green(`Generating typedocs for @switchboard-xyz/evm.js`));
  generateGenericApiTypedocs(
    projectRoot,
    ["sdks", "evm", "javascript", "evm.js"],
    ["@switchboard-xyz", "evm.js"]
  );

  console.log(
    chalk.green(`Generating typedocs for @switchboard-xyz/starknet.js`)
  );
  generateGenericApiTypedocs(
    projectRoot,
    ["sdks", "starknet", "javascript", "starknet.js"],
    ["@switchboard-xyz", "starknet.js"]
  );

  console.log(chalk.green(`Generating typedocs for @switchboard-xyz/sui.js`));
  generateGenericApiTypedocs(
    projectRoot,
    ["sdks", "sui", "javascript", "sui.js"],
    ["@switchboard-xyz", "sui.js"]
  );

  console.log(chalk.green(`Generating documentation for @switchboard-xyz/cli`));
  generateCliDocs(projectRoot);
})();
