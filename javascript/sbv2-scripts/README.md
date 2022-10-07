# Sbv2-Scripts

scripts used within the sbv2-core repo

## Setup

```bash
yarn install
yarn link
```

## Commands

### CLI

Generate markdown files from the CLI README.md

```bash
sbv2-scripts cli ./cli/README.md ./website/docs/dev/cli
```

### Near

Generate typescript definitions from the Near source code

```bash
sbv2-scripts near-types ../near/contract/src ../sbv2-near/javascript/near.js/src/generated
```

### Aptos

Generate typescript definitions from the Aptos source code

```bash
sbv2-scripts aptos-types ../switchboard-aptos/switchboard/sources ../sbv2-aptos/javascript/aptos.js/src/generated
```
