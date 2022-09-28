# Sbv2-Scripts

scripts used within the sbv2-core repo

## Setup

```bash
yarn install
```

## Commands

### CLI

Generate markdown files from the CLI README.md

```bash
sbv2-scripts cli ./cli/README.md ./website/docs/dev/cli
```

### Near

Generate typescript definitions from the near source code

```bash
sbv2-scripts near ../near/contract/src ../sbv2-near/javascript/src/generated
```
