#!/usr/bin/env ts-node

import fs from "fs";
import path from "path";
import chalk from "chalk";
import * as actions from "./actions";

import { Command } from "commander";
const program = new Command();

program
  .name("sbv2-scripts")
  .description("CLI to some JavaScript string utilities")
  .version("1.0.0");

// sbv2-scripts cli ./cli/REAMD.md ./website/docs/dev/cli
program
  .command("cli <cliReadmePath> <outputDirectory>")
  .description("Generate markdown files from the CLI README.md")
  .action(actions.cli);

// sbv2-scripts near ../near/contract/src ../sbv2-near/javascript/src/generated
program
  .command("near <nearSourceDir> <outputDirectory>")
  .description("Generate javascript type definitions from rust code")
  .action(actions.near);

// sbv2-scripts aptos ../switchboard-aptos/switchboard/sources ../sbv2-aptos/src/generated
program
  .command("aptos <aptosSourceDir> <outputDirectory>")
  .description("Generate javascript type definitions from move code")
  .action(actions.aptos);

program.parse();
