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
    ["sdks", "solana", "javascript", "switchboard-v2"],
    ["@switchboard-xyz", "solana.js"]
  );

  console.log(
    chalk.green(`Generating typedocs for @switchboard-xyz/sbv2-lite`)
  );
  generateGenericApiTypedocs(
    projectRoot,
    ["sdks", "solana", "javascript", "sbv2-lite"],
    ["@switchboard-xyz", "sbv2-lite"]
  );

  console.log(
    chalk.green(`Generating typedocs for @switchboard-xyz/sbv2-utils`)
  );
  generateGenericApiTypedocs(
    projectRoot,
    ["sdks", "solana", "javascript", "sbv2-utils"],
    ["@switchboard-xyz", "sbv2-utils"]
  );

  console.log(chalk.green(`Generating documentation for @switchboard-xyz/cli`));
  generateCliDocs(projectRoot);
})();
