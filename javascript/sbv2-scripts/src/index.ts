#!/usr/bin/env ts-node

import * as actions from './actions';

import { Command } from 'commander';
const program = new Command();

program
  .name('sbv2-scripts')
  .description('CLI to some JavaScript string utilities')
  .version('1.0.0');

// sbv2-scripts cli ./cli/README.md ./website/docs/dev/cli
program
  .command('cli <cliReadmePath> <outputDirectory>')
  .description('Generate markdown files from the CLI README.md')
  .action(actions.cli);

// sbv2-scripts near-types ../near/contract/src ../sbv2-near/javascript/near.js/src/generated
program
  .command('near-types <nearSourceDir> <outputDirectory>')
  .description('Generate javascript type definitions from rust code')
  .action(actions.nearTypes);

// sbv2-scripts aptos-types ../switchboard-aptos/switchboard/sources ../sbv2-aptos/javascript/aptos.js/src/generated
program
  .command('aptos-types <aptosSourceDir> <outputDirectory>')
  .description('Generate javascript type definitions from move code')
  .action(actions.aptosTypes);

// sbv2-scripts aptos-idl ../switchboard-aptos/switchboard/sources
program
  .command('aptos-idl <aptosSourceDir>')
  .description('Generate IDL from move code')
  .action(actions.aptosIdl);

program.parse();
