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
import {
  generateAptosDocs,
  generateCommonDocs,
  generateNearDocs,
  generateSolanaDocs,
} from "./typedoc";

const projectRoot = path.join(__dirname, "..", "..");

(() => {
  console.log(chalk.green(`Generating typedocs for @switchboard-xyz/aptos.js`));
  generateAptosDocs(projectRoot);

  console.log(chalk.green(`Generating typedocs for @switchboard-xyz/near.js`));
  generateNearDocs(projectRoot);

  console.log(
    chalk.green(`Generating typedocs for @switchboard-xyz/solana.js`)
  );
  generateSolanaDocs(projectRoot);

  console.log(chalk.green(`Generating typedocs for @switchboard-xyz/common`));
  generateCommonDocs(projectRoot);

  console.log(chalk.green(`Generating documentation for @switchboard-xyz/cli`));
  generateCliDocs(projectRoot);
})();
