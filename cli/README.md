# Switchboard CLI

command line tool to interact with switchboard

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@switchboard-xyz/cli.svg)](https://npmjs.org/package/@switchboard-xyz/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@switchboard-xyz/cli.svg)](https://npmjs.org/package/@switchboard-xyz/cli)
[![License](https://img.shields.io/npm/l/@switchboard-xyz/cli.svg)](https://github.com/switchboard-xyz/sbv2-core/blob/main/cli/LICENSE)

```bash
npm install -g @switchboard-xyz/cli^2
```

To test commands:

```
node bin/dev print GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR
# node bin/dev [COMMAND ARGS --flags]
```

**Commands**

<!-- commands -->
* [`sbv2 aptos account airdrop`](#sbv2-aptos-account-airdrop)
* [`sbv2 aptos aggregator add job [AGGREGATORHEXSTRING]`](#sbv2-aptos-aggregator-add-job-aggregatorhexstring)
* [`sbv2 aptos aggregator create [QUEUEHEXSTRING]`](#sbv2-aptos-aggregator-create-queuehexstring)
* [`sbv2 aptos aggregator job add [AGGREGATORHEXSTRING]`](#sbv2-aptos-aggregator-job-add-aggregatorhexstring)
* [`sbv2 aptos aggregator update [AGGREGATORHEXSTRING]`](#sbv2-aptos-aggregator-update-aggregatorhexstring)
* [`sbv2 aptos crank create [QUEUEHEXSTRING]`](#sbv2-aptos-crank-create-queuehexstring)
* [`sbv2 aptos crank list [CRANKHEXSTRING]`](#sbv2-aptos-crank-list-crankhexstring)
* [`sbv2 aptos crank pop [CRANKHEXSTRING]`](#sbv2-aptos-crank-pop-crankhexstring)
* [`sbv2 aptos crank push [CRANKHEXSTRING]`](#sbv2-aptos-crank-push-crankhexstring)
* [`sbv2 aptos create aggregator [QUEUEHEXSTRING]`](#sbv2-aptos-create-aggregator-queuehexstring)
* [`sbv2 aptos create crank [QUEUEHEXSTRING]`](#sbv2-aptos-create-crank-queuehexstring)
* [`sbv2 aptos create job QUEUEHEXSTRING JOBDEFINITION`](#sbv2-aptos-create-job-queuehexstring-jobdefinition)
* [`sbv2 aptos create oracle [QUEUEHEXSTRING]`](#sbv2-aptos-create-oracle-queuehexstring)
* [`sbv2 aptos create queue`](#sbv2-aptos-create-queue)
* [`sbv2 aptos job create QUEUEHEXSTRING JOBDEFINITION`](#sbv2-aptos-job-create-queuehexstring-jobdefinition)
* [`sbv2 aptos list crank [CRANKHEXSTRING]`](#sbv2-aptos-list-crank-crankhexstring)
* [`sbv2 aptos oracle create [QUEUEHEXSTRING]`](#sbv2-aptos-oracle-create-queuehexstring)
* [`sbv2 aptos oracle metrics [ORACLEHEXSTRING]`](#sbv2-aptos-oracle-metrics-oraclehexstring)
* [`sbv2 aptos oracle up [ORACLEHEXSTRING]`](#sbv2-aptos-oracle-up-oraclehexstring)
* [`sbv2 aptos permission create [GRANTER]`](#sbv2-aptos-permission-create-granter)
* [`sbv2 aptos permission set [GRANTER]`](#sbv2-aptos-permission-set-granter)
* [`sbv2 aptos pop crank [CRANKHEXSTRING]`](#sbv2-aptos-pop-crank-crankhexstring)
* [`sbv2 aptos print ACCOUNTTYPE ADDRESS`](#sbv2-aptos-print-accounttype-address)
* [`sbv2 aptos push crank [CRANKHEXSTRING]`](#sbv2-aptos-push-crank-crankhexstring)
* [`sbv2 aptos queue create`](#sbv2-aptos-queue-create)
* [`sbv2 aptos update aggregator [AGGREGATORHEXSTRING]`](#sbv2-aptos-update-aggregator-aggregatorhexstring)
* [`sbv2 config print`](#sbv2-config-print)
* [`sbv2 config set CHAIN NETWORK PARAMETER [VALUE]`](#sbv2-config-set-chain-network-parameter-value)
* [`sbv2 help [COMMAND]`](#sbv2-help-command)
* [`sbv2 near aggregator add history [AGGREGATORADDRESS]`](#sbv2-near-aggregator-add-history-aggregatoraddress)
* [`sbv2 near aggregator add job [AGGREGATORADDRESS]`](#sbv2-near-aggregator-add-job-aggregatoraddress)
* [`sbv2 near aggregator create QUEUEADDRESS`](#sbv2-near-aggregator-create-queueaddress)
* [`sbv2 near aggregator escrow [AGGREGATORADDRESS]`](#sbv2-near-aggregator-escrow-aggregatoraddress)
* [`sbv2 near aggregator fetch`](#sbv2-near-aggregator-fetch)
* [`sbv2 near aggregator fund [AGGREGATORADDRESS]`](#sbv2-near-aggregator-fund-aggregatoraddress)
* [`sbv2 near aggregator history add [AGGREGATORADDRESS]`](#sbv2-near-aggregator-history-add-aggregatoraddress)
* [`sbv2 near aggregator job add [AGGREGATORADDRESS]`](#sbv2-near-aggregator-job-add-aggregatoraddress)
* [`sbv2 near aggregator job remove [AGGREGATORADDRESS]`](#sbv2-near-aggregator-job-remove-aggregatoraddress)
* [`sbv2 near aggregator permission create [AGGREGATORADDRESS]`](#sbv2-near-aggregator-permission-create-aggregatoraddress)
* [`sbv2 near aggregator remove job [AGGREGATORADDRESS]`](#sbv2-near-aggregator-remove-job-aggregatoraddress)
* [`sbv2 near aggregator set AGGREGATORADDRESS`](#sbv2-near-aggregator-set-aggregatoraddress)
* [`sbv2 near aggregator update [AGGREGATORADDRESS]`](#sbv2-near-aggregator-update-aggregatoraddress)
* [`sbv2 near crank create [QUEUEADDRESS]`](#sbv2-near-crank-create-queueaddress)
* [`sbv2 near crank list [CRANKADDRESS]`](#sbv2-near-crank-list-crankaddress)
* [`sbv2 near crank pop [CRANKADDRESS]`](#sbv2-near-crank-pop-crankaddress)
* [`sbv2 near crank push [CRANKADDRESS]`](#sbv2-near-crank-push-crankaddress)
* [`sbv2 near create aggregator QUEUEADDRESS`](#sbv2-near-create-aggregator-queueaddress)
* [`sbv2 near create aggregator permission [AGGREGATORADDRESS]`](#sbv2-near-create-aggregator-permission-aggregatoraddress)
* [`sbv2 near create crank [QUEUEADDRESS]`](#sbv2-near-create-crank-queueaddress)
* [`sbv2 near create escrow`](#sbv2-near-create-escrow)
* [`sbv2 near create job JOBDEFINITION`](#sbv2-near-create-job-jobdefinition)
* [`sbv2 near create oracle [QUEUEADDRESS]`](#sbv2-near-create-oracle-queueaddress)
* [`sbv2 near create oracle permission`](#sbv2-near-create-oracle-permission)
* [`sbv2 near create queue`](#sbv2-near-create-queue)
* [`sbv2 near escrow create`](#sbv2-near-escrow-create)
* [`sbv2 near escrow print`](#sbv2-near-escrow-print)
* [`sbv2 near fetch aggregators`](#sbv2-near-fetch-aggregators)
* [`sbv2 near fund aggregator [AGGREGATORADDRESS]`](#sbv2-near-fund-aggregator-aggregatoraddress)
* [`sbv2 near job create JOBDEFINITION`](#sbv2-near-job-create-jobdefinition)
* [`sbv2 near list queue QUEUEADDRESS`](#sbv2-near-list-queue-queueaddress)
* [`sbv2 near oracle create [QUEUEADDRESS]`](#sbv2-near-oracle-create-queueaddress)
* [`sbv2 near oracle escrow [ORACLEADDRESS]`](#sbv2-near-oracle-escrow-oracleaddress)
* [`sbv2 near oracle stake [ORACLEADDRESS]`](#sbv2-near-oracle-stake-oracleaddress)
* [`sbv2 near oracle unstake [ORACLEADDRESS]`](#sbv2-near-oracle-unstake-oracleaddress)
* [`sbv2 near oracle up [ORACLEADDRESS]`](#sbv2-near-oracle-up-oracleaddress)
* [`sbv2 near permission create`](#sbv2-near-permission-create)
* [`sbv2 near pop crank [CRANKADDRESS]`](#sbv2-near-pop-crank-crankaddress)
* [`sbv2 near print ACCOUNTTYPE ADDRESS`](#sbv2-near-print-accounttype-address)
* [`sbv2 near print escrow`](#sbv2-near-print-escrow)
* [`sbv2 near push crank [CRANKADDRESS]`](#sbv2-near-push-crank-crankaddress)
* [`sbv2 near queue aggregators QUEUEADDRESS`](#sbv2-near-queue-aggregators-queueaddress)
* [`sbv2 near queue create`](#sbv2-near-queue-create)
* [`sbv2 near queue feeds QUEUEADDRESS`](#sbv2-near-queue-feeds-queueaddress)
* [`sbv2 near queue list QUEUEADDRESS`](#sbv2-near-queue-list-queueaddress)
* [`sbv2 near queue set QUEUEADDRESS`](#sbv2-near-queue-set-queueaddress)
* [`sbv2 near set aggregator AGGREGATORADDRESS`](#sbv2-near-set-aggregator-aggregatoraddress)
* [`sbv2 near update aggregator [AGGREGATORADDRESS]`](#sbv2-near-update-aggregator-aggregatoraddress)
* [`sbv2 oracle logs NETWORK SEARCHSTRING`](#sbv2-oracle-logs-network-searchstring)
* [`sbv2 solana aggregator add crank [CRANKKEY] [AGGREGATORKEY]`](#sbv2-solana-aggregator-add-crank-crankkey-aggregatorkey)
* [`sbv2 solana aggregator add history [AGGREGATORKEY] [SIZE]`](#sbv2-solana-aggregator-add-history-aggregatorkey-size)
* [`sbv2 solana aggregator add job [AGGREGATORKEY]`](#sbv2-solana-aggregator-add-job-aggregatorkey)
* [`sbv2 solana aggregator create [QUEUEKEY]`](#sbv2-solana-aggregator-create-queuekey)
* [`sbv2 solana aggregator create copy [AGGREGATORSOURCE]`](#sbv2-solana-aggregator-create-copy-aggregatorsource)
* [`sbv2 solana aggregator create json [DEFINITIONFILE]`](#sbv2-solana-aggregator-create-json-definitionfile)
* [`sbv2 solana aggregator history print [AGGREGATORKEY]`](#sbv2-solana-aggregator-history-print-aggregatorkey)
* [`sbv2 solana aggregator lease create [AGGREGATORKEY]`](#sbv2-solana-aggregator-lease-create-aggregatorkey)
* [`sbv2 solana aggregator lease extend [AGGREGATORKEY]`](#sbv2-solana-aggregator-lease-extend-aggregatorkey)
* [`sbv2 solana aggregator lease print [AGGREGATORKEY]`](#sbv2-solana-aggregator-lease-print-aggregatorkey)
* [`sbv2 solana aggregator lease withdraw [AGGREGATORKEY]`](#sbv2-solana-aggregator-lease-withdraw-aggregatorkey)
* [`sbv2 solana aggregator lock [AGGREGATORKEY]`](#sbv2-solana-aggregator-lock-aggregatorkey)
* [`sbv2 solana aggregator permission create [AGGREGATORKEY]`](#sbv2-solana-aggregator-permission-create-aggregatorkey)
* [`sbv2 solana aggregator permission print [AGGREGATORKEY]`](#sbv2-solana-aggregator-permission-print-aggregatorkey)
* [`sbv2 solana aggregator print [AGGREGATORKEY]`](#sbv2-solana-aggregator-print-aggregatorkey)
* [`sbv2 solana aggregator print history [AGGREGATORKEY]`](#sbv2-solana-aggregator-print-history-aggregatorkey)
* [`sbv2 solana aggregator print lease [AGGREGATORKEY]`](#sbv2-solana-aggregator-print-lease-aggregatorkey)
* [`sbv2 solana aggregator print permission [AGGREGATORKEY]`](#sbv2-solana-aggregator-print-permission-aggregatorkey)
* [`sbv2 solana aggregator remove job [AGGREGATORKEY] [JOBKEY]`](#sbv2-solana-aggregator-remove-job-aggregatorkey-jobkey)
* [`sbv2 solana aggregator save history [AGGREGATORKEY]`](#sbv2-solana-aggregator-save-history-aggregatorkey)
* [`sbv2 solana aggregator set [AGGREGATORKEY]`](#sbv2-solana-aggregator-set-aggregatorkey)
* [`sbv2 solana aggregator set authority [AGGREGATORKEY] [NEWAUTHORITY]`](#sbv2-solana-aggregator-set-authority-aggregatorkey-newauthority)
* [`sbv2 solana aggregator set batchSize [AGGREGATORKEY] BATCHSIZE`](#sbv2-solana-aggregator-set-batchsize-aggregatorkey-batchsize)
* [`sbv2 solana aggregator set forceReport [AGGREGATORKEY] [FORCEREPORTPERIOD]`](#sbv2-solana-aggregator-set-forcereport-aggregatorkey-forcereportperiod)
* [`sbv2 solana aggregator set forceReportPeriod [AGGREGATORKEY] [FORCEREPORTPERIOD]`](#sbv2-solana-aggregator-set-forcereportperiod-aggregatorkey-forcereportperiod)
* [`sbv2 solana aggregator set history [AGGREGATORKEY] [SIZE]`](#sbv2-solana-aggregator-set-history-aggregatorkey-size)
* [`sbv2 solana aggregator set minJobs [AGGREGATORKEY] [MINJOBRESULTS]`](#sbv2-solana-aggregator-set-minjobs-aggregatorkey-minjobresults)
* [`sbv2 solana aggregator set minOracles [AGGREGATORKEY] [MINORACLERESULTS]`](#sbv2-solana-aggregator-set-minoracles-aggregatorkey-minoracleresults)
* [`sbv2 solana aggregator set queue [AGGREGATORKEY] [QUEUEKEY]`](#sbv2-solana-aggregator-set-queue-aggregatorkey-queuekey)
* [`sbv2 solana aggregator set updateInterval [AGGREGATORKEY] [UPDATEINTERVAL]`](#sbv2-solana-aggregator-set-updateinterval-aggregatorkey-updateinterval)
* [`sbv2 solana aggregator set variance [AGGREGATORKEY] [VARIANCETHRESHOLD]`](#sbv2-solana-aggregator-set-variance-aggregatorkey-variancethreshold)
* [`sbv2 solana aggregator set varianceThreshold [AGGREGATORKEY] [VARIANCETHRESHOLD]`](#sbv2-solana-aggregator-set-variancethreshold-aggregatorkey-variancethreshold)
* [`sbv2 solana aggregator update [AGGREGATORKEY]`](#sbv2-solana-aggregator-update-aggregatorkey)
* [`sbv2 solana aggregator watch [AGGREGATORKEY]`](#sbv2-solana-aggregator-watch-aggregatorkey)
* [`sbv2 solana anchor test`](#sbv2-solana-anchor-test)
* [`sbv2 solana buffer create [QUEUEKEY]`](#sbv2-solana-buffer-create-queuekey)
* [`sbv2 solana buffer print [BUFFERRELAYERKEY]`](#sbv2-solana-buffer-print-bufferrelayerkey)
* [`sbv2 solana crank add aggregator [CRANKKEY] [AGGREGATORKEY]`](#sbv2-solana-crank-add-aggregator-crankkey-aggregatorkey)
* [`sbv2 solana crank cmp [CRANKKEY1] [CRANKKEY2]`](#sbv2-solana-crank-cmp-crankkey1-crankkey2)
* [`sbv2 solana crank create [QUEUEKEY]`](#sbv2-solana-crank-create-queuekey)
* [`sbv2 solana crank list [CRANKKEY]`](#sbv2-solana-crank-list-crankkey)
* [`sbv2 solana crank pop [CRANKKEY]`](#sbv2-solana-crank-pop-crankkey)
* [`sbv2 solana crank print [CRANKKEY]`](#sbv2-solana-crank-print-crankkey)
* [`sbv2 solana crank push [CRANKKEY] [AGGREGATORKEY]`](#sbv2-solana-crank-push-crankkey-aggregatorkey)
* [`sbv2 solana crank turn [CRANKKEY]`](#sbv2-solana-crank-turn-crankkey)
* [`sbv2 solana job create JOBDEFINITION`](#sbv2-solana-job-create-jobdefinition)
* [`sbv2 solana job print [JOBKEY]`](#sbv2-solana-job-print-jobkey)
* [`sbv2 solana json create aggregator [DEFINITIONFILE]`](#sbv2-solana-json-create-aggregator-definitionfile)
* [`sbv2 solana lease create [AGGREGATORKEY]`](#sbv2-solana-lease-create-aggregatorkey)
* [`sbv2 solana lease extend [AGGREGATORKEY]`](#sbv2-solana-lease-extend-aggregatorkey)
* [`sbv2 solana lease withdraw [AGGREGATORKEY]`](#sbv2-solana-lease-withdraw-aggregatorkey)
* [`sbv2 solana localnet env`](#sbv2-solana-localnet-env)
* [`sbv2 solana oracle balance [ORACLEKEY]`](#sbv2-solana-oracle-balance-oraclekey)
* [`sbv2 solana oracle create [QUEUEKEY]`](#sbv2-solana-oracle-create-queuekey)
* [`sbv2 solana oracle deposit [ORACLEKEY]`](#sbv2-solana-oracle-deposit-oraclekey)
* [`sbv2 solana oracle nonce [ORACLEKEY]`](#sbv2-solana-oracle-nonce-oraclekey)
* [`sbv2 solana oracle permission create [ORACLEKEY]`](#sbv2-solana-oracle-permission-create-oraclekey)
* [`sbv2 solana oracle permission print [ORACLEKEY]`](#sbv2-solana-oracle-permission-print-oraclekey)
* [`sbv2 solana oracle print [ORACLEKEY]`](#sbv2-solana-oracle-print-oraclekey)
* [`sbv2 solana oracle print permission [ORACLEKEY]`](#sbv2-solana-oracle-print-permission-oraclekey)
* [`sbv2 solana oracle up [ORACLEADDRESS]`](#sbv2-solana-oracle-up-oracleaddress)
* [`sbv2 solana oracle withdraw [ORACLEKEY]`](#sbv2-solana-oracle-withdraw-oraclekey)
* [`sbv2 solana permission create [GRANTER] [GRANTEE]`](#sbv2-solana-permission-create-granter-grantee)
* [`sbv2 solana permission print [PERMISSIONKEY]`](#sbv2-solana-permission-print-permissionkey)
* [`sbv2 solana permission set [PERMISSIONKEY]`](#sbv2-solana-permission-set-permissionkey)
* [`sbv2 solana print [PUBLICKEY]`](#sbv2-solana-print-publickey)
* [`sbv2 solana print aggregator [AGGREGATORKEY]`](#sbv2-solana-print-aggregator-aggregatorkey)
* [`sbv2 solana print aggregator history [AGGREGATORKEY]`](#sbv2-solana-print-aggregator-history-aggregatorkey)
* [`sbv2 solana print aggregator lease [AGGREGATORKEY]`](#sbv2-solana-print-aggregator-lease-aggregatorkey)
* [`sbv2 solana print aggregator permission [AGGREGATORKEY]`](#sbv2-solana-print-aggregator-permission-aggregatorkey)
* [`sbv2 solana print buffer [BUFFERRELAYERKEY]`](#sbv2-solana-print-buffer-bufferrelayerkey)
* [`sbv2 solana print crank [CRANKKEY]`](#sbv2-solana-print-crank-crankkey)
* [`sbv2 solana print job [JOBKEY]`](#sbv2-solana-print-job-jobkey)
* [`sbv2 solana print oracle [ORACLEKEY]`](#sbv2-solana-print-oracle-oraclekey)
* [`sbv2 solana print oracle permission [ORACLEKEY]`](#sbv2-solana-print-oracle-permission-oraclekey)
* [`sbv2 solana print permission [PERMISSIONKEY]`](#sbv2-solana-print-permission-permissionkey)
* [`sbv2 solana print program`](#sbv2-solana-print-program)
* [`sbv2 solana print queue [QUEUEKEY]`](#sbv2-solana-print-queue-queuekey)
* [`sbv2 solana print vrf [VRFKEY]`](#sbv2-solana-print-vrf-vrfkey)
* [`sbv2 solana program print`](#sbv2-solana-program-print)
* [`sbv2 solana queue create`](#sbv2-solana-queue-create)
* [`sbv2 solana queue print [QUEUEKEY]`](#sbv2-solana-queue-print-queuekey)
* [`sbv2 solana queue set rewards [QUEUEKEY] [REWARDS]`](#sbv2-solana-queue-set-rewards-queuekey-rewards)
* [`sbv2 solana queue set vrf [QUEUEKEY]`](#sbv2-solana-queue-set-vrf-queuekey)
* [`sbv2 solana set aggregator [AGGREGATORKEY]`](#sbv2-solana-set-aggregator-aggregatorkey)
* [`sbv2 solana vrf create [QUEUEKEY]`](#sbv2-solana-vrf-create-queuekey)
* [`sbv2 solana vrf create example [QUEUEKEY]`](#sbv2-solana-vrf-create-example-queuekey)
* [`sbv2 solana vrf print [VRFKEY]`](#sbv2-solana-vrf-print-vrfkey)
* [`sbv2 solana vrf request [VRFKEY]`](#sbv2-solana-vrf-request-vrfkey)
* [`sbv2 solana vrf verify [VRFKEY]`](#sbv2-solana-vrf-verify-vrfkey)
* [`sbv2 solana vrf watch [VRFKEY]`](#sbv2-solana-vrf-watch-vrfkey)
* [`sbv2 solana watch aggregator [AGGREGATORKEY]`](#sbv2-solana-watch-aggregator-aggregatorkey)
* [`sbv2 solana watch vrf [VRFKEY]`](#sbv2-solana-watch-vrf-vrfkey)
* [`sbv2 update [CHANNEL]`](#sbv2-update-channel)
* [`sbv2 version`](#sbv2-version)

## `sbv2 aptos account airdrop`

request an airdrop

```
USAGE
  $ sbv2 aptos account airdrop --address <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>]
    [-u <value>] [--json] [-n <value>]

FLAGS
  -h, --help            Show CLI help.
  -n, --amount=<value>  [default: 1000000] number of airdrops to request, 10_000 coins each
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --address=<value>     (required) HexString address of account to fund
  --networkId=<option>  [default: devnet] Aptos network to connect to
                        <options: devnet|testnet|mainnet>
  --programId=<value>   Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  request an airdrop
```

## `sbv2 aptos aggregator add job [AGGREGATORHEXSTRING]`

add a job to an aggregator

```
USAGE
  $ sbv2 aptos aggregator add job [AGGREGATORHEXSTRING] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
    [--programId <value>] [-u <value>] [--profileName <value>] [-a <value>] [--name <value> | --jobKey <value>]
    [--metadata <value> | ] [--jobDefinition <value> | ] [--jobWeight <value>]

ARGUMENTS
  AGGREGATORHEXSTRING  HexString address of the aggregator

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator
  -h, --help               Show CLI help.
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --jobDefinition=<value>  filesystem path of job json definition file
  --jobKey=<value>         public key of an existing job account to add to an aggregator
  --jobWeight=<value>      [default: 1] job weight
  --keypair=<value>        (required) Path to AptosAccount keypair or config.yaml file
  --metadata=<value>       metadata of the job account
  --name=<value>           name of the job account
  --networkId=<option>     [default: devnet] Aptos network to connect to
                           <options: devnet|testnet|mainnet>
  --profileName=<value>    [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                           load. If none provided, default will be used
  --programId=<value>      Switchboard programId on the selected Aptos network

DESCRIPTION
  add a job to an aggregator

ALIASES
  $ sbv2 aptos aggregator job add
```

## `sbv2 aptos aggregator create [QUEUEHEXSTRING]`

create an aptos aggregator for a given queue

```
USAGE
  $ sbv2 aptos aggregator create [QUEUEHEXSTRING] --keypair <value> --updateInterval <value> [-h] [-v] [-s] [--networkId
    devnet|testnet|mainnet] [--programId <value>] [-u <value>] [--profileName <value>] [--json] [-a <value>]
    [--crankAddress <value>] [--name <value>] [--metadata <value>] [--forceReportPeriod <value>] [--batchSize <value>]
    [--minJobs <value>] [--minOracles <value>] [--varianceThreshold <value>] [-j <value>] [--new]

ARGUMENTS
  QUEUEHEXSTRING  HexString address of the queue

FLAGS
  -a, --authority=<value>      alternate named account that will be the authority for the oracle
  -h, --help                   Show CLI help.
  -j, --job=<value>...         filesystem path to job definition file
  -s, --silent                 suppress cli prompts
  -u, --rpcUrl=<value>         alternate RPC url
  -v, --verbose                log everything
  --batchSize=<value>          number of oracles requested for each open round call
  --crankAddress=<value>       optional, address of the crank to add the aggregator to
  --forceReportPeriod=<value>  Number of seconds for which, even if the variance threshold is not passed, accept new
                               responses from oracles.
  --keypair=<value>            (required) Path to AptosAccount keypair or config.yaml file
  --metadata=<value>           metadata of the aggregator for easier identification
  --minJobs=<value>            number of jobs that must respond before an oracle responds
  --minOracles=<value>         number of oracles that must respond before a value is accepted on-chain
  --name=<value>               name of the aggregator for easier identification
  --networkId=<option>         [default: devnet] Aptos network to connect to
                               <options: devnet|testnet|mainnet>
  --new                        create account at new AptosAccount with authority set to --account
  --profileName=<value>        [default: default] If --keypair is pointing to a yaml file, provide an optional profile
                               to load. If none provided, default will be used
  --programId=<value>          Switchboard programId on the selected Aptos network
  --updateInterval=<value>     (required) set an aggregator's minimum update delay
  --varianceThreshold=<value>  [default: 0] percentage change between a previous accepted result and the next round
                               before an oracle reports a value on-chain. Used to conserve lease cost during low
                               volatility

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create an aptos aggregator for a given queue

ALIASES
  $ sbv2 aptos create aggregator
```

## `sbv2 aptos aggregator job add [AGGREGATORHEXSTRING]`

add a job to an aggregator

```
USAGE
  $ sbv2 aptos aggregator job add [AGGREGATORHEXSTRING] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
    [--programId <value>] [-u <value>] [--profileName <value>] [-a <value>] [--name <value> | --jobKey <value>]
    [--metadata <value> | ] [--jobDefinition <value> | ] [--jobWeight <value>]

ARGUMENTS
  AGGREGATORHEXSTRING  HexString address of the aggregator

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator
  -h, --help               Show CLI help.
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --jobDefinition=<value>  filesystem path of job json definition file
  --jobKey=<value>         public key of an existing job account to add to an aggregator
  --jobWeight=<value>      [default: 1] job weight
  --keypair=<value>        (required) Path to AptosAccount keypair or config.yaml file
  --metadata=<value>       metadata of the job account
  --name=<value>           name of the job account
  --networkId=<option>     [default: devnet] Aptos network to connect to
                           <options: devnet|testnet|mainnet>
  --profileName=<value>    [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                           load. If none provided, default will be used
  --programId=<value>      Switchboard programId on the selected Aptos network

DESCRIPTION
  add a job to an aggregator

ALIASES
  $ sbv2 aptos aggregator job add
```

## `sbv2 aptos aggregator update [AGGREGATORHEXSTRING]`

request a new value on-chain for an aggregator

```
USAGE
  $ sbv2 aptos aggregator update [AGGREGATORHEXSTRING] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
    [--programId <value>] [-u <value>] [--profileName <value>]

ARGUMENTS
  AGGREGATORHEXSTRING  HexString address of the aggregator

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --keypair=<value>      (required) Path to AptosAccount keypair or config.yaml file
  --networkId=<option>   [default: devnet] Aptos network to connect to
                         <options: devnet|testnet|mainnet>
  --profileName=<value>  [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                         load. If none provided, default will be used
  --programId=<value>    Switchboard programId on the selected Aptos network

DESCRIPTION
  request a new value on-chain for an aggregator

ALIASES
  $ sbv2 aptos update aggregator
```

## `sbv2 aptos crank create [QUEUEHEXSTRING]`

create a new crank

```
USAGE
  $ sbv2 aptos crank create [QUEUEHEXSTRING] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
    [--programId <value>] [-u <value>] [--profileName <value>] [--json] [--name <value>] [--metadata <value>] [--maxRows
    <value>] [--new]

ARGUMENTS
  QUEUEHEXSTRING  HexString of the oracle queue to create a crank for

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --keypair=<value>      (required) Path to AptosAccount keypair or config.yaml file
  --maxRows=<value>      [default: 100] maximum number of rows on the crank
  --metadata=<value>     metadata of the queue for easier identification
  --name=<value>         name of the queue for easier identification
  --networkId=<option>   [default: devnet] Aptos network to connect to
                         <options: devnet|testnet|mainnet>
  --new                  create account at new AptosAccount with authority set to --account
  --profileName=<value>  [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                         load. If none provided, default will be used
  --programId=<value>    Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new crank

ALIASES
  $ sbv2 aptos create crank
```

## `sbv2 aptos crank list [CRANKHEXSTRING]`

sort the crank

```
USAGE
  $ sbv2 aptos crank list [CRANKHEXSTRING] [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>]
    [-u <value>] [--json]

ARGUMENTS
  CRANKHEXSTRING  HexString address of the crank

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --networkId=<option>  [default: devnet] Aptos network to connect to
                        <options: devnet|testnet|mainnet>
  --programId=<value>   Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  sort the crank

ALIASES
  $ sbv2 aptos list crank
```

## `sbv2 aptos crank pop [CRANKHEXSTRING]`

pop the crank

```
USAGE
  $ sbv2 aptos crank pop [CRANKHEXSTRING] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
    [--programId <value>] [-u <value>] [--profileName <value>] [--json]

ARGUMENTS
  CRANKHEXSTRING  HexString address of the crank

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --keypair=<value>      (required) Path to AptosAccount keypair or config.yaml file
  --networkId=<option>   [default: devnet] Aptos network to connect to
                         <options: devnet|testnet|mainnet>
  --profileName=<value>  [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                         load. If none provided, default will be used
  --programId=<value>    Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  pop the crank

ALIASES
  $ sbv2 aptos pop crank
```

## `sbv2 aptos crank push [CRANKHEXSTRING]`

push an aggregator onto the crank

```
USAGE
  $ sbv2 aptos crank push [CRANKHEXSTRING] --keypair <value> -a <value> [-h] [-v] [-s] [--networkId
    devnet|testnet|mainnet] [--programId <value>] [-u <value>] [--profileName <value>] [--json]

ARGUMENTS
  CRANKHEXSTRING  HexString address of the crank

FLAGS
  -a, --aggregatorHexString=<value>  (required) HexString address of the aggregator
  -h, --help                         Show CLI help.
  -s, --silent                       suppress cli prompts
  -u, --rpcUrl=<value>               alternate RPC url
  -v, --verbose                      log everything
  --keypair=<value>                  (required) Path to AptosAccount keypair or config.yaml file
  --networkId=<option>               [default: devnet] Aptos network to connect to
                                     <options: devnet|testnet|mainnet>
  --profileName=<value>              [default: default] If --keypair is pointing to a yaml file, provide an optional
                                     profile to load. If none provided, default will be used
  --programId=<value>                Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  push an aggregator onto the crank

ALIASES
  $ sbv2 aptos push crank
```

## `sbv2 aptos create aggregator [QUEUEHEXSTRING]`

create an aptos aggregator for a given queue

```
USAGE
  $ sbv2 aptos create aggregator [QUEUEHEXSTRING] --keypair <value> --updateInterval <value> [-h] [-v] [-s] [--networkId
    devnet|testnet|mainnet] [--programId <value>] [-u <value>] [--profileName <value>] [--json] [-a <value>]
    [--crankAddress <value>] [--name <value>] [--metadata <value>] [--forceReportPeriod <value>] [--batchSize <value>]
    [--minJobs <value>] [--minOracles <value>] [--varianceThreshold <value>] [-j <value>] [--new]

ARGUMENTS
  QUEUEHEXSTRING  HexString address of the queue

FLAGS
  -a, --authority=<value>      alternate named account that will be the authority for the oracle
  -h, --help                   Show CLI help.
  -j, --job=<value>...         filesystem path to job definition file
  -s, --silent                 suppress cli prompts
  -u, --rpcUrl=<value>         alternate RPC url
  -v, --verbose                log everything
  --batchSize=<value>          number of oracles requested for each open round call
  --crankAddress=<value>       optional, address of the crank to add the aggregator to
  --forceReportPeriod=<value>  Number of seconds for which, even if the variance threshold is not passed, accept new
                               responses from oracles.
  --keypair=<value>            (required) Path to AptosAccount keypair or config.yaml file
  --metadata=<value>           metadata of the aggregator for easier identification
  --minJobs=<value>            number of jobs that must respond before an oracle responds
  --minOracles=<value>         number of oracles that must respond before a value is accepted on-chain
  --name=<value>               name of the aggregator for easier identification
  --networkId=<option>         [default: devnet] Aptos network to connect to
                               <options: devnet|testnet|mainnet>
  --new                        create account at new AptosAccount with authority set to --account
  --profileName=<value>        [default: default] If --keypair is pointing to a yaml file, provide an optional profile
                               to load. If none provided, default will be used
  --programId=<value>          Switchboard programId on the selected Aptos network
  --updateInterval=<value>     (required) set an aggregator's minimum update delay
  --varianceThreshold=<value>  [default: 0] percentage change between a previous accepted result and the next round
                               before an oracle reports a value on-chain. Used to conserve lease cost during low
                               volatility

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create an aptos aggregator for a given queue

ALIASES
  $ sbv2 aptos create aggregator
```

## `sbv2 aptos create crank [QUEUEHEXSTRING]`

create a new crank

```
USAGE
  $ sbv2 aptos create crank [QUEUEHEXSTRING] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
    [--programId <value>] [-u <value>] [--profileName <value>] [--json] [--name <value>] [--metadata <value>] [--maxRows
    <value>] [--new]

ARGUMENTS
  QUEUEHEXSTRING  HexString of the oracle queue to create a crank for

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --keypair=<value>      (required) Path to AptosAccount keypair or config.yaml file
  --maxRows=<value>      [default: 100] maximum number of rows on the crank
  --metadata=<value>     metadata of the queue for easier identification
  --name=<value>         name of the queue for easier identification
  --networkId=<option>   [default: devnet] Aptos network to connect to
                         <options: devnet|testnet|mainnet>
  --new                  create account at new AptosAccount with authority set to --account
  --profileName=<value>  [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                         load. If none provided, default will be used
  --programId=<value>    Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new crank

ALIASES
  $ sbv2 aptos create crank
```

## `sbv2 aptos create job QUEUEHEXSTRING JOBDEFINITION`

create a new job

```
USAGE
  $ sbv2 aptos create job [QUEUEHEXSTRING] [JOBDEFINITION] --keypair <value> [-h] [-v] [-s] [--networkId
    devnet|testnet|mainnet] [--programId <value>] [-u <value>] [--profileName <value>] [--json] [-a <value>] [--name
    <value>] [--metadata <value>] [--new] [--weight <value>]

ARGUMENTS
  QUEUEHEXSTRING  HexString address of the queue
  JOBDEFINITION   filesystem path to job definition

FLAGS
  -a, --authority=<value>  alternate named account that will be the authority for the job account
  -h, --help               Show CLI help.
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --keypair=<value>        (required) Path to AptosAccount keypair or config.yaml file
  --metadata=<value>       metadata of the job for easier identification
  --name=<value>           name of the job for easier identification
  --networkId=<option>     [default: devnet] Aptos network to connect to
                           <options: devnet|testnet|mainnet>
  --new                    create account at new AptosAccount with authority set to --account
  --profileName=<value>    [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                           load. If none provided, default will be used
  --programId=<value>      Switchboard programId on the selected Aptos network
  --weight=<value>         [default: 1] job weight to assign

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new job

ALIASES
  $ sbv2 aptos create job
```

## `sbv2 aptos create oracle [QUEUEHEXSTRING]`

create a oracle for a given queue

```
USAGE
  $ sbv2 aptos create oracle [QUEUEHEXSTRING] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
    [--programId <value>] [-u <value>] [--profileName <value>] [--json] [-a <value>] [--name <value>] [--metadata
    <value>] [--new]

ARGUMENTS
  QUEUEHEXSTRING  HexString address of the queue

FLAGS
  -a, --authority=<value>  alternate named account that will be the authority for the oracle
  -h, --help               Show CLI help.
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --keypair=<value>        (required) Path to AptosAccount keypair or config.yaml file
  --metadata=<value>       metadata of the oracle for easier identification
  --name=<value>           name of the oracle for easier identification
  --networkId=<option>     [default: devnet] Aptos network to connect to
                           <options: devnet|testnet|mainnet>
  --new                    create account at new AptosAccount with authority set to --account
  --profileName=<value>    [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                           load. If none provided, default will be used
  --programId=<value>      Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a oracle for a given queue

ALIASES
  $ sbv2 aptos create oracle
```

## `sbv2 aptos create queue`

create a new oracle queue

```
USAGE
  $ sbv2 aptos create queue --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>]
    [-u <value>] [--profileName <value>] [--json] [-a <value>] [--name <value>] [--metadata <value>] [--minStake
    <value>] [-r <value>] [--oracleTimeout <value>] [--queueSize <value>] [--slashingEnabled] [--unpermissionedFeeds]
    [--unpermissionedVrf] [--enableBufferRelayers] [--lockLeaseFunding] [--new]

FLAGS
  -a, --authority=<value>  alternate account HexString that will be the authority for the queue
  -h, --help               Show CLI help.
  -r, --reward=<value>     oracle rewards for successfully responding to an update request
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --enableBufferRelayers   enable oracles to fulfill buffer relayer requests
  --keypair=<value>        (required) Path to AptosAccount keypair or config.yaml file
  --lockLeaseFunding       lock lease funding
  --metadata=<value>       metadata of the queue for easier identification
  --minStake=<value>       minimum stake required by an oracle to join the queue
  --name=<value>           name of the queue for easier identification
  --networkId=<option>     [default: devnet] Aptos network to connect to
                           <options: devnet|testnet|mainnet>
  --new                    create account at new AptosAccount with authority set to --account
  --oracleTimeout=<value>  [default: 180] number of oracles to add to the queue
  --profileName=<value>    [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                           load. If none provided, default will be used
  --programId=<value>      Switchboard programId on the selected Aptos network
  --queueSize=<value>      [default: 100] maximum number of oracles the queue can support
  --slashingEnabled        permit slashing malicous oracles
  --unpermissionedFeeds    permit unpermissioned feeds
  --unpermissionedVrf      permit unpermissioned VRF accounts

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new oracle queue

ALIASES
  $ sbv2 aptos create queue
```

## `sbv2 aptos job create QUEUEHEXSTRING JOBDEFINITION`

create a new job

```
USAGE
  $ sbv2 aptos job create [QUEUEHEXSTRING] [JOBDEFINITION] --keypair <value> [-h] [-v] [-s] [--networkId
    devnet|testnet|mainnet] [--programId <value>] [-u <value>] [--profileName <value>] [--json] [-a <value>] [--name
    <value>] [--metadata <value>] [--new] [--weight <value>]

ARGUMENTS
  QUEUEHEXSTRING  HexString address of the queue
  JOBDEFINITION   filesystem path to job definition

FLAGS
  -a, --authority=<value>  alternate named account that will be the authority for the job account
  -h, --help               Show CLI help.
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --keypair=<value>        (required) Path to AptosAccount keypair or config.yaml file
  --metadata=<value>       metadata of the job for easier identification
  --name=<value>           name of the job for easier identification
  --networkId=<option>     [default: devnet] Aptos network to connect to
                           <options: devnet|testnet|mainnet>
  --new                    create account at new AptosAccount with authority set to --account
  --profileName=<value>    [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                           load. If none provided, default will be used
  --programId=<value>      Switchboard programId on the selected Aptos network
  --weight=<value>         [default: 1] job weight to assign

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new job

ALIASES
  $ sbv2 aptos create job
```

## `sbv2 aptos list crank [CRANKHEXSTRING]`

sort the crank

```
USAGE
  $ sbv2 aptos list crank [CRANKHEXSTRING] [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>]
    [-u <value>] [--json]

ARGUMENTS
  CRANKHEXSTRING  HexString address of the crank

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --networkId=<option>  [default: devnet] Aptos network to connect to
                        <options: devnet|testnet|mainnet>
  --programId=<value>   Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  sort the crank

ALIASES
  $ sbv2 aptos list crank
```

## `sbv2 aptos oracle create [QUEUEHEXSTRING]`

create a oracle for a given queue

```
USAGE
  $ sbv2 aptos oracle create [QUEUEHEXSTRING] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
    [--programId <value>] [-u <value>] [--profileName <value>] [--json] [-a <value>] [--name <value>] [--metadata
    <value>] [--new]

ARGUMENTS
  QUEUEHEXSTRING  HexString address of the queue

FLAGS
  -a, --authority=<value>  alternate named account that will be the authority for the oracle
  -h, --help               Show CLI help.
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --keypair=<value>        (required) Path to AptosAccount keypair or config.yaml file
  --metadata=<value>       metadata of the oracle for easier identification
  --name=<value>           name of the oracle for easier identification
  --networkId=<option>     [default: devnet] Aptos network to connect to
                           <options: devnet|testnet|mainnet>
  --new                    create account at new AptosAccount with authority set to --account
  --profileName=<value>    [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                           load. If none provided, default will be used
  --programId=<value>      Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a oracle for a given queue

ALIASES
  $ sbv2 aptos create oracle
```

## `sbv2 aptos oracle metrics [ORACLEHEXSTRING]`

list oracle metrics

```
USAGE
  $ sbv2 aptos oracle metrics [ORACLEHEXSTRING] [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>]
    [-u <value>] [--json]

ARGUMENTS
  ORACLEHEXSTRING  HexString address of the crank

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --networkId=<option>  [default: devnet] Aptos network to connect to
                        <options: devnet|testnet|mainnet>
  --programId=<value>   Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  list oracle metrics
```

## `sbv2 aptos oracle up [ORACLEHEXSTRING]`

start an aptos docker oracle

```
USAGE
  $ sbv2 aptos oracle up [ORACLEHEXSTRING] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
    [--programId <value>] [-u <value>] [--profileName <value>] [-d <value>] [--nodeImage <value>] [--arm]

ARGUMENTS
  ORACLEHEXSTRING  HexString address of the oracle

FLAGS
  -d, --switchboardDir=<value>  directory with switchboard.env to load a switchboard environment
  -h, --help                    Show CLI help.
  -s, --silent                  suppress docker logging
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --arm                         apple silicon needs to use a docker image for linux/arm64
  --keypair=<value>             (required) Path to AptosAccount keypair or config.yaml file
  --networkId=<option>          [default: devnet] Aptos network to connect to
                                <options: devnet|testnet|mainnet>
  --nodeImage=<value>           [default: dev-v2-10-18-22] public key of the oracle to start-up
  --profileName=<value>         [default: default] If --keypair is pointing to a yaml file, provide an optional profile
                                to load. If none provided, default will be used
  --programId=<value>           Switchboard programId on the selected Aptos network

DESCRIPTION
  start an aptos docker oracle
```

## `sbv2 aptos permission create [GRANTER]`

create a new permission

```
USAGE
  $ sbv2 aptos permission create [GRANTER] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId
    <value>] [-u <value>] [--profileName <value>] [--json] [--aggregator <value> | --oracle <value>] [--enable]

ARGUMENTS
  GRANTER  HexString of the oracle queue to create a permission for

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --aggregator=<value>   HexString of  the aggregator address to create a permission for
  --enable               whether to enable the permissions after creation
  --keypair=<value>      (required) Path to AptosAccount keypair or config.yaml file
  --networkId=<option>   [default: devnet] Aptos network to connect to
                         <options: devnet|testnet|mainnet>
  --oracle=<value>       HexString of  the aggregator address to create a permission for
  --profileName=<value>  [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                         load. If none provided, default will be used
  --programId=<value>    Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new permission
```

## `sbv2 aptos permission set [GRANTER]`

create a new permission

```
USAGE
  $ sbv2 aptos permission set [GRANTER] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId
    <value>] [-u <value>] [--profileName <value>] [--json] [--aggregator <value> | --oracle <value>] [--enable]

ARGUMENTS
  GRANTER  HexString of the oracle queue to create a permission for

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --aggregator=<value>   HexString of  the aggregator address to create a permission for
  --enable               whether to enable the permissions after creation
  --keypair=<value>      (required) Path to AptosAccount keypair or config.yaml file
  --networkId=<option>   [default: devnet] Aptos network to connect to
                         <options: devnet|testnet|mainnet>
  --oracle=<value>       HexString of  the aggregator address to create a permission for
  --profileName=<value>  [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                         load. If none provided, default will be used
  --programId=<value>    Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new permission
```

## `sbv2 aptos pop crank [CRANKHEXSTRING]`

pop the crank

```
USAGE
  $ sbv2 aptos pop crank [CRANKHEXSTRING] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
    [--programId <value>] [-u <value>] [--profileName <value>] [--json]

ARGUMENTS
  CRANKHEXSTRING  HexString address of the crank

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --keypair=<value>      (required) Path to AptosAccount keypair or config.yaml file
  --networkId=<option>   [default: devnet] Aptos network to connect to
                         <options: devnet|testnet|mainnet>
  --profileName=<value>  [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                         load. If none provided, default will be used
  --programId=<value>    Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  pop the crank

ALIASES
  $ sbv2 aptos pop crank
```

## `sbv2 aptos print ACCOUNTTYPE ADDRESS`

print an aptos account

```
USAGE
  $ sbv2 aptos print [ACCOUNTTYPE] [ADDRESS] [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId
    <value>] [-u <value>] [--json]

ARGUMENTS
  ACCOUNTTYPE  (queue|aggregator|crank|oracle|permission|lease|job|state) account type to print
  ADDRESS      HexString address of the account to print

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --networkId=<option>  [default: devnet] Aptos network to connect to
                        <options: devnet|testnet|mainnet>
  --programId=<value>   Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print an aptos account

ALIASES
  $ sbv2 aptos print
```

## `sbv2 aptos push crank [CRANKHEXSTRING]`

push an aggregator onto the crank

```
USAGE
  $ sbv2 aptos push crank [CRANKHEXSTRING] --keypair <value> -a <value> [-h] [-v] [-s] [--networkId
    devnet|testnet|mainnet] [--programId <value>] [-u <value>] [--profileName <value>] [--json]

ARGUMENTS
  CRANKHEXSTRING  HexString address of the crank

FLAGS
  -a, --aggregatorHexString=<value>  (required) HexString address of the aggregator
  -h, --help                         Show CLI help.
  -s, --silent                       suppress cli prompts
  -u, --rpcUrl=<value>               alternate RPC url
  -v, --verbose                      log everything
  --keypair=<value>                  (required) Path to AptosAccount keypair or config.yaml file
  --networkId=<option>               [default: devnet] Aptos network to connect to
                                     <options: devnet|testnet|mainnet>
  --profileName=<value>              [default: default] If --keypair is pointing to a yaml file, provide an optional
                                     profile to load. If none provided, default will be used
  --programId=<value>                Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  push an aggregator onto the crank

ALIASES
  $ sbv2 aptos push crank
```

## `sbv2 aptos queue create`

create a new oracle queue

```
USAGE
  $ sbv2 aptos queue create --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>]
    [-u <value>] [--profileName <value>] [--json] [-a <value>] [--name <value>] [--metadata <value>] [--minStake
    <value>] [-r <value>] [--oracleTimeout <value>] [--queueSize <value>] [--slashingEnabled] [--unpermissionedFeeds]
    [--unpermissionedVrf] [--enableBufferRelayers] [--lockLeaseFunding] [--new]

FLAGS
  -a, --authority=<value>  alternate account HexString that will be the authority for the queue
  -h, --help               Show CLI help.
  -r, --reward=<value>     oracle rewards for successfully responding to an update request
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --enableBufferRelayers   enable oracles to fulfill buffer relayer requests
  --keypair=<value>        (required) Path to AptosAccount keypair or config.yaml file
  --lockLeaseFunding       lock lease funding
  --metadata=<value>       metadata of the queue for easier identification
  --minStake=<value>       minimum stake required by an oracle to join the queue
  --name=<value>           name of the queue for easier identification
  --networkId=<option>     [default: devnet] Aptos network to connect to
                           <options: devnet|testnet|mainnet>
  --new                    create account at new AptosAccount with authority set to --account
  --oracleTimeout=<value>  [default: 180] number of oracles to add to the queue
  --profileName=<value>    [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                           load. If none provided, default will be used
  --programId=<value>      Switchboard programId on the selected Aptos network
  --queueSize=<value>      [default: 100] maximum number of oracles the queue can support
  --slashingEnabled        permit slashing malicous oracles
  --unpermissionedFeeds    permit unpermissioned feeds
  --unpermissionedVrf      permit unpermissioned VRF accounts

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new oracle queue

ALIASES
  $ sbv2 aptos create queue
```

## `sbv2 aptos update aggregator [AGGREGATORHEXSTRING]`

request a new value on-chain for an aggregator

```
USAGE
  $ sbv2 aptos update aggregator [AGGREGATORHEXSTRING] --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
    [--programId <value>] [-u <value>] [--profileName <value>]

ARGUMENTS
  AGGREGATORHEXSTRING  HexString address of the aggregator

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --keypair=<value>      (required) Path to AptosAccount keypair or config.yaml file
  --networkId=<option>   [default: devnet] Aptos network to connect to
                         <options: devnet|testnet|mainnet>
  --profileName=<value>  [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                         load. If none provided, default will be used
  --programId=<value>    Switchboard programId on the selected Aptos network

DESCRIPTION
  request a new value on-chain for an aggregator

ALIASES
  $ sbv2 aptos update aggregator
```

## `sbv2 config print`

print cli config

```
USAGE
  $ sbv2 config print [-h] [-v] [-s] [--json]

FLAGS
  -h, --help     Show CLI help.
  -s, --silent   suppress cli prompts
  -v, --verbose  log everything

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print cli config

EXAMPLES
  $ sbv2 config:print
```

## `sbv2 config set CHAIN NETWORK PARAMETER [VALUE]`

set a configuration option

```
USAGE
  $ sbv2 config set [CHAIN] [NETWORK] [PARAMETER] [VALUE] [-h] [-v] [-s] [-r]

ARGUMENTS
  CHAIN      (solana|near|aptos) chain to set a config parameter
  NETWORK    (localnet|testnet|betanet|devnet|mainnet) network of chain to set parameter
  PARAMETER  (rpc|default-account|account) parameter to set
  VALUE      value of the param to set

FLAGS
  -h, --help     Show CLI help.
  -r, --reset    remove value or set to default rpc
  -s, --silent   suppress cli prompts
  -v, --verbose  log everything

DESCRIPTION
  set a configuration option
```

## `sbv2 help [COMMAND]`

Display help for sbv2.

```
USAGE
  $ sbv2 help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for sbv2.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.15/src/commands/help.ts)_

## `sbv2 near aggregator add history [AGGREGATORADDRESS]`

add rows to a history vector

```
USAGE
  $ sbv2 near aggregator add history [AGGREGATORADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [--numRows
    <value>]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --numRows=<value>             [default: 1000] number of rows to add to the aggregator
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  add rows to a history vector

ALIASES
  $ sbv2 near aggregator history add
```

## `sbv2 near aggregator add job [AGGREGATORADDRESS]`

add a job to an aggregator

```
USAGE
  $ sbv2 near aggregator add job [AGGREGATORADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>]
    [--name <value> | --jobKey <value>] [--metadata <value> | ] [--jobDefinition <value> | ] [--jobWeight <value>]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -a, --authority=<value>       alternate keypair that is the authority for the aggregator
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --jobDefinition=<value>       filesystem path of job json definition file
  --jobKey=<value>              public key of an existing job account to add to an aggregator
  --jobWeight=<value>           [default: 1] job weight
  --metadata=<value>            metadata of the job account
  --name=<value>                name of the job account
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  add a job to an aggregator

ALIASES
  $ sbv2 near aggregator job add
```

## `sbv2 near aggregator create QUEUEADDRESS`

create a near aggregator for a given queue

```
USAGE
  $ sbv2 near aggregator create [QUEUEADDRESS] --accountName <value> --updateInterval <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>]
    [--crankAddress <value>] [--name <value>] [--metadata <value>] [--forceReportPeriod <value>] [--batchSize <value>]
    [--minJobs <value>] [--minOracles <value>] [--varianceThreshold <value>] [--rewardEscrow <value>] [--enable]

ARGUMENTS
  QUEUEADDRESS  address of the queue in Uint8 or Base58 encoding

FLAGS
  -a, --authority=<value>       alternate named account that will be the authority for the oracle
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --batchSize=<value>           number of oracles requested for each open round call
  --crankAddress=<value>        optional, address of the crank to add the aggregator to
  --enable                      if required and queue authority is provided, enable permissions
  --forceReportPeriod=<value>   Number of seconds for which, even if the variance threshold is not passed, accept new
                                responses from oracles.
  --metadata=<value>            metadata of the crank for easier identification
  --minJobs=<value>             number of jobs that must respond before an oracle responds
  --minOracles=<value>          number of oracles that must respond before a value is accepted on-chain
  --name=<value>                name of the crank for easier identification
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId
  --rewardEscrow=<value>        where to send rewards. defaults to user's escrow account
  --updateInterval=<value>      (required) set an aggregator's minimum update delay
  --varianceThreshold=<value>   [default: 0] percentage change between a previous accepted result and the next round
                                before an oracle reports a value on-chain. Used to conserve lease cost during low
                                volatility

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a near aggregator for a given queue

ALIASES
  $ sbv2 near create aggregator
```

## `sbv2 near aggregator escrow [AGGREGATORADDRESS]`

view an aggregators escrow state

```
USAGE
  $ sbv2 near aggregator escrow [AGGREGATORADDRESS] [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId
    <value>] [-u <value>] [--nearCredentialsDir <value>]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

DESCRIPTION
  view an aggregators escrow state
```

## `sbv2 near aggregator fetch`

fetch all aggregators for a given near account

```
USAGE
  $ sbv2 near aggregator fetch --accountId <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId
    <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountId=<value>           (required) optional, authority to fetch aggregators for
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  fetch all aggregators for a given near account

ALIASES
  $ sbv2 near fetch aggregators
```

## `sbv2 near aggregator fund [AGGREGATORADDRESS]`

```
USAGE
  $ sbv2 near aggregator fund [AGGREGATORADDRESS] --accountName <value> -a <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -a, --amount=<value>          (required) amount to deposit into the aggregator's lease
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

ALIASES
  $ sbv2 near fund aggregator
```

## `sbv2 near aggregator history add [AGGREGATORADDRESS]`

add rows to a history vector

```
USAGE
  $ sbv2 near aggregator history add [AGGREGATORADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [--numRows
    <value>]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --numRows=<value>             [default: 1000] number of rows to add to the aggregator
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  add rows to a history vector

ALIASES
  $ sbv2 near aggregator history add
```

## `sbv2 near aggregator job add [AGGREGATORADDRESS]`

add a job to an aggregator

```
USAGE
  $ sbv2 near aggregator job add [AGGREGATORADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>]
    [--name <value> | --jobKey <value>] [--metadata <value> | ] [--jobDefinition <value> | ] [--jobWeight <value>]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -a, --authority=<value>       alternate keypair that is the authority for the aggregator
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --jobDefinition=<value>       filesystem path of job json definition file
  --jobKey=<value>              public key of an existing job account to add to an aggregator
  --jobWeight=<value>           [default: 1] job weight
  --metadata=<value>            metadata of the job account
  --name=<value>                name of the job account
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  add a job to an aggregator

ALIASES
  $ sbv2 near aggregator job add
```

## `sbv2 near aggregator job remove [AGGREGATORADDRESS]`

remove a job to an aggregator

```
USAGE
  $ sbv2 near aggregator job remove [AGGREGATORADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>]
    [-j <value>]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -a, --authority=<value>       alternate keypair that is the authority for the aggregator
  -h, --help                    Show CLI help.
  -j, --jobAddress=<value>...   public key of an existing job account to remove from an aggregator
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  remove a job to an aggregator

ALIASES
  $ sbv2 near aggregator job remove
```

## `sbv2 near aggregator permission create [AGGREGATORADDRESS]`

create a permission account for a near aggregator

```
USAGE
  $ sbv2 near aggregator permission create [AGGREGATORADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a permission account for a near aggregator

ALIASES
  $ sbv2 near create aggregator permission
```

## `sbv2 near aggregator remove job [AGGREGATORADDRESS]`

remove a job to an aggregator

```
USAGE
  $ sbv2 near aggregator remove job [AGGREGATORADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>]
    [-j <value>]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -a, --authority=<value>       alternate keypair that is the authority for the aggregator
  -h, --help                    Show CLI help.
  -j, --jobAddress=<value>...   public key of an existing job account to remove from an aggregator
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  remove a job to an aggregator

ALIASES
  $ sbv2 near aggregator job remove
```

## `sbv2 near aggregator set AGGREGATORADDRESS`

set a near aggregator's config

```
USAGE
  $ sbv2 near aggregator set [AGGREGATORADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]
    [--forceReportPeriod <value>] [--updateInterval <value>] [--varianceThreshold <value>]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --forceReportPeriod=<value>   Number of seconds for which, even if the variance threshold is not passed, accept new
                                responses from oracles.
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId
  --updateInterval=<value>      set an aggregator's minimum update delay
  --varianceThreshold=<value>   percentage change between a previous accepted result and the next round before an oracle
                                reports a value on-chain. Used to conserve lease cost during low volatility

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  set a near aggregator's config

ALIASES
  $ sbv2 near set aggregator
```

## `sbv2 near aggregator update [AGGREGATORADDRESS]`

request a new value on-chain for an aggregator

```
USAGE
  $ sbv2 near aggregator update [AGGREGATORADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  request a new value on-chain for an aggregator

ALIASES
  $ sbv2 near update aggregator
```

## `sbv2 near crank create [QUEUEADDRESS]`

create a new crank

```
USAGE
  $ sbv2 near crank create [QUEUEADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]
    [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [--name <value>] [--metadata <value>]
    [--maxRows <value>]

ARGUMENTS
  QUEUEADDRESS  address of the queue in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --maxRows=<value>             [default: 100] maximum number of rows on the crank
  --metadata=<value>            metadata of the crank for easier identification
  --name=<value>                name of the crank for easier identification
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new crank

ALIASES
  $ sbv2 near create crank
```

## `sbv2 near crank list [CRANKADDRESS]`

pop the crank

```
USAGE
  $ sbv2 near crank list [CRANKADDRESS] [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId <value>]
    [-u <value>] [--nearCredentialsDir <value>]

ARGUMENTS
  CRANKADDRESS  address of the crank in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

DESCRIPTION
  pop the crank

ALIASES
  $ sbv2 near pop crank
```

## `sbv2 near crank pop [CRANKADDRESS]`

pop the crank

```
USAGE
  $ sbv2 near crank pop [CRANKADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]
    [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]

ARGUMENTS
  CRANKADDRESS  address of the crank in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  pop the crank

ALIASES
  $ sbv2 near pop crank
```

## `sbv2 near crank push [CRANKADDRESS]`

push an aggregator onto the crank

```
USAGE
  $ sbv2 near crank push [CRANKADDRESS] --accountName <value> -a <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]

ARGUMENTS
  CRANKADDRESS  address of the crank in Uint8 or Base58 encoding

FLAGS
  -a, --aggregatorAddress=<value>  (required) address of the aggregator in Uint8 or Base58 encoding
  -h, --help                       Show CLI help.
  -s, --silent                     suppress cli prompts
  -u, --rpcUrl=<value>             alternate RPC url
  -v, --verbose                    log everything
  --accountName=<value>            (required) Named account to load from your nearCredentialsDir
  --nearCredentialsDir=<value>     [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                   Defaults to ~/.near-credentials
  --networkId=<option>             [default: testnet] Near network ID to connect to
                                   <options: testnet|mainnet|localnet>
  --programId=<value>              Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  push an aggregator onto the crank

ALIASES
  $ sbv2 near push crank
```

## `sbv2 near create aggregator QUEUEADDRESS`

create a near aggregator for a given queue

```
USAGE
  $ sbv2 near create aggregator [QUEUEADDRESS] --accountName <value> --updateInterval <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>]
    [--crankAddress <value>] [--name <value>] [--metadata <value>] [--forceReportPeriod <value>] [--batchSize <value>]
    [--minJobs <value>] [--minOracles <value>] [--varianceThreshold <value>] [--rewardEscrow <value>] [--enable]

ARGUMENTS
  QUEUEADDRESS  address of the queue in Uint8 or Base58 encoding

FLAGS
  -a, --authority=<value>       alternate named account that will be the authority for the oracle
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --batchSize=<value>           number of oracles requested for each open round call
  --crankAddress=<value>        optional, address of the crank to add the aggregator to
  --enable                      if required and queue authority is provided, enable permissions
  --forceReportPeriod=<value>   Number of seconds for which, even if the variance threshold is not passed, accept new
                                responses from oracles.
  --metadata=<value>            metadata of the crank for easier identification
  --minJobs=<value>             number of jobs that must respond before an oracle responds
  --minOracles=<value>          number of oracles that must respond before a value is accepted on-chain
  --name=<value>                name of the crank for easier identification
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId
  --rewardEscrow=<value>        where to send rewards. defaults to user's escrow account
  --updateInterval=<value>      (required) set an aggregator's minimum update delay
  --varianceThreshold=<value>   [default: 0] percentage change between a previous accepted result and the next round
                                before an oracle reports a value on-chain. Used to conserve lease cost during low
                                volatility

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a near aggregator for a given queue

ALIASES
  $ sbv2 near create aggregator
```

## `sbv2 near create aggregator permission [AGGREGATORADDRESS]`

create a permission account for a near aggregator

```
USAGE
  $ sbv2 near create aggregator permission [AGGREGATORADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a permission account for a near aggregator

ALIASES
  $ sbv2 near create aggregator permission
```

## `sbv2 near create crank [QUEUEADDRESS]`

create a new crank

```
USAGE
  $ sbv2 near create crank [QUEUEADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]
    [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [--name <value>] [--metadata <value>]
    [--maxRows <value>]

ARGUMENTS
  QUEUEADDRESS  address of the queue in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --maxRows=<value>             [default: 100] maximum number of rows on the crank
  --metadata=<value>            metadata of the crank for easier identification
  --name=<value>                name of the crank for easier identification
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new crank

ALIASES
  $ sbv2 near create crank
```

## `sbv2 near create escrow`

create an escrow token account

```
USAGE
  $ sbv2 near create escrow --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId
    <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>] [--mint <value>]

FLAGS
  -a, --authority=<value>       alternate named account that will be the authority for the oracle
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --mint=<value>                [default: wrap.test] token mint to create escrow account for
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create an escrow token account

ALIASES
  $ sbv2 near create escrow
```

## `sbv2 near create job JOBDEFINITION`

create a job on near

```
USAGE
  $ sbv2 near create job [JOBDEFINITION] --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]
    [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>] [--name <value>] [--metadata
    <value>]

ARGUMENTS
  JOBDEFINITION  filesystem path to job definition

FLAGS
  -a, --authority=<value>       alternate named account that will be the authority for the job account
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --metadata=<value>            metadata of the job for easier identification
  --name=<value>                name of the job for easier identification
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a job on near

ALIASES
  $ sbv2 near create job
```

## `sbv2 near create oracle [QUEUEADDRESS]`

create a near oracle for a given queue

```
USAGE
  $ sbv2 near create oracle [QUEUEADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]
    [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>] [--name <value>] [--metadata
    <value>]

ARGUMENTS
  QUEUEADDRESS  address of the queue in Uint8 or Base58 encoding

FLAGS
  -a, --authority=<value>       alternate named account that will be the authority for the oracle
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --metadata=<value>            metadata of the oracle for easier identification
  --name=<value>                name of the oracle for easier identification
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a near oracle for a given queue

ALIASES
  $ sbv2 near create oracle
```

## `sbv2 near create oracle permission`

create a permission account

```
USAGE
  $ sbv2 near create oracle permission --accountName <value> --granter <value> --grantee <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>]
    [--enable]

FLAGS
  -a, --authority=<value>       alternate account that is the granters authority
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --enable                      enable permissions
  --grantee=<value>             (required) account that will be granted permissions, typically an Oracle or Aggregator
  --granter=<value>             (required) account that will grant permissions, typically the OracleQueue
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a permission account

ALIASES
  $ sbv2 near create oracle permission
```

## `sbv2 near create queue`

create a new oracle queue

```
USAGE
  $ sbv2 near create queue --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId
    <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>] [--name <value>] [--metadata <value>]
    [--minStake <value>] [-r <value>] [--oracleTimeout <value>] [--queueSize <value>] [--slashingEnabled]
    [--unpermissionedFeeds] [--unpermissionedVrf] [--enableBufferRelayers]

FLAGS
  -a, --authority=<value>       alternate named account that will be the authority for the queue
  -h, --help                    Show CLI help.
  -r, --reward=<value>          [default: 0] oracle rewards for successfully responding to an update request
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --enableBufferRelayers        enable oracles to fulfill buffer relayer requests
  --metadata=<value>            metadata of the queue for easier identification
  --minStake=<value>            [default: 0] minimum stake required by an oracle to join the queue
  --name=<value>                name of the queue for easier identification
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --oracleTimeout=<value>       [default: 180] number of oracles to add to the queue
  --programId=<value>           Switchboard programId on the selected Near networkId
  --queueSize=<value>           [default: 100] maximum number of oracles the queue can support
  --slashingEnabled             permit slashing malicous oracles
  --unpermissionedFeeds         permit unpermissioned feeds
  --unpermissionedVrf           permit unpermissioned VRF accounts

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new oracle queue

ALIASES
  $ sbv2 near create queue
```

## `sbv2 near escrow create`

create an escrow token account

```
USAGE
  $ sbv2 near escrow create --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId
    <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>] [--mint <value>]

FLAGS
  -a, --authority=<value>       alternate named account that will be the authority for the oracle
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --mint=<value>                [default: wrap.test] token mint to create escrow account for
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create an escrow token account

ALIASES
  $ sbv2 near create escrow
```

## `sbv2 near escrow print`

print an escrow token account

```
USAGE
  $ sbv2 near escrow print --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId
    <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print an escrow token account

ALIASES
  $ sbv2 near print escrow
```

## `sbv2 near fetch aggregators`

fetch all aggregators for a given near account

```
USAGE
  $ sbv2 near fetch aggregators --accountId <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId
    <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountId=<value>           (required) optional, authority to fetch aggregators for
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  fetch all aggregators for a given near account

ALIASES
  $ sbv2 near fetch aggregators
```

## `sbv2 near fund aggregator [AGGREGATORADDRESS]`

```
USAGE
  $ sbv2 near fund aggregator [AGGREGATORADDRESS] --accountName <value> -a <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -a, --amount=<value>          (required) amount to deposit into the aggregator's lease
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

ALIASES
  $ sbv2 near fund aggregator
```

## `sbv2 near job create JOBDEFINITION`

create a job on near

```
USAGE
  $ sbv2 near job create [JOBDEFINITION] --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]
    [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>] [--name <value>] [--metadata
    <value>]

ARGUMENTS
  JOBDEFINITION  filesystem path to job definition

FLAGS
  -a, --authority=<value>       alternate named account that will be the authority for the job account
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --metadata=<value>            metadata of the job for easier identification
  --name=<value>                name of the job for easier identification
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a job on near

ALIASES
  $ sbv2 near create job
```

## `sbv2 near list queue QUEUEADDRESS`

list aggregators for a given queue

```
USAGE
  $ sbv2 near list queue [QUEUEADDRESS] [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId <value>]
    [-u <value>] [--nearCredentialsDir <value>] [--json]

ARGUMENTS
  QUEUEADDRESS  address of the queue in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  list aggregators for a given queue

ALIASES
  $ sbv2 near list queue
```

## `sbv2 near oracle create [QUEUEADDRESS]`

create a near oracle for a given queue

```
USAGE
  $ sbv2 near oracle create [QUEUEADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]
    [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>] [--name <value>] [--metadata
    <value>]

ARGUMENTS
  QUEUEADDRESS  address of the queue in Uint8 or Base58 encoding

FLAGS
  -a, --authority=<value>       alternate named account that will be the authority for the oracle
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --metadata=<value>            metadata of the oracle for easier identification
  --name=<value>                name of the oracle for easier identification
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a near oracle for a given queue

ALIASES
  $ sbv2 near create oracle
```

## `sbv2 near oracle escrow [ORACLEADDRESS]`

view an aggregators escrow state

```
USAGE
  $ sbv2 near oracle escrow [ORACLEADDRESS] [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId <value>]
    [-u <value>] [--nearCredentialsDir <value>] [--json]

ARGUMENTS
  ORACLEADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  view an aggregators escrow state
```

## `sbv2 near oracle stake [ORACLEADDRESS]`

deposit funds to an oracle's staking wallet

```
USAGE
  $ sbv2 near oracle stake [ORACLEADDRESS] --accountName <value> --amount <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]

ARGUMENTS
  ORACLEADDRESS  address of the oracle in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --amount=<value>              (required) amount of Near to deposit into oracle staking wallet
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  deposit funds to an oracle's staking wallet
```

## `sbv2 near oracle unstake [ORACLEADDRESS]`

deposit funds to an oracle's staking wallet

```
USAGE
  $ sbv2 near oracle unstake [ORACLEADDRESS] --accountName <value> --amount <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]

ARGUMENTS
  ORACLEADDRESS  address of the oracle in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --amount=<value>              (required) amount of Near to unstake from oracle staking wallet
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  deposit funds to an oracle's staking wallet
```

## `sbv2 near oracle up [ORACLEADDRESS]`

start a near docker oracle

```
USAGE
  $ sbv2 near oracle up [ORACLEADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]
    [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-d <value>] [--nodeImage <value>]
    [--arm]

ARGUMENTS
  ORACLEADDRESS  address of the oracle in Uint8 or Base58 encoding

FLAGS
  -d, --switchboardDir=<value>  directory with switchboard.env to load a switchboard environment
  -h, --help                    Show CLI help.
  -s, --silent                  suppress docker logging
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --arm                         apple silicon needs to use a docker image for linux/arm64
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --nodeImage=<value>           [default: dev-v2-10-18-22] public key of the oracle to start-up
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  start a near docker oracle
```

## `sbv2 near permission create`

create a permission account

```
USAGE
  $ sbv2 near permission create --accountName <value> --granter <value> --grantee <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>]
    [--enable]

FLAGS
  -a, --authority=<value>       alternate account that is the granters authority
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --enable                      enable permissions
  --grantee=<value>             (required) account that will be granted permissions, typically an Oracle or Aggregator
  --granter=<value>             (required) account that will grant permissions, typically the OracleQueue
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a permission account

ALIASES
  $ sbv2 near create oracle permission
```

## `sbv2 near pop crank [CRANKADDRESS]`

pop the crank

```
USAGE
  $ sbv2 near pop crank [CRANKADDRESS] [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId <value>]
    [-u <value>] [--nearCredentialsDir <value>]

ARGUMENTS
  CRANKADDRESS  address of the crank in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

DESCRIPTION
  pop the crank

ALIASES
  $ sbv2 near pop crank
```

## `sbv2 near print ACCOUNTTYPE ADDRESS`

print a near switchboard account

```
USAGE
  $ sbv2 near print [ACCOUNTTYPE] [ADDRESS] [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId
    <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [--all]

ARGUMENTS
  ACCOUNTTYPE  (queue|aggregator|crank|oracle|permission|lease|job) account type to print
  ADDRESS      address of the account to print in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --all                         print all account attributes including jobs, permissions, and leases
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a near switchboard account

ALIASES
  $ sbv2 near print
```

## `sbv2 near print escrow`

print an escrow token account

```
USAGE
  $ sbv2 near print escrow --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId
    <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print an escrow token account

ALIASES
  $ sbv2 near print escrow
```

## `sbv2 near push crank [CRANKADDRESS]`

push an aggregator onto the crank

```
USAGE
  $ sbv2 near push crank [CRANKADDRESS] --accountName <value> -a <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]

ARGUMENTS
  CRANKADDRESS  address of the crank in Uint8 or Base58 encoding

FLAGS
  -a, --aggregatorAddress=<value>  (required) address of the aggregator in Uint8 or Base58 encoding
  -h, --help                       Show CLI help.
  -s, --silent                     suppress cli prompts
  -u, --rpcUrl=<value>             alternate RPC url
  -v, --verbose                    log everything
  --accountName=<value>            (required) Named account to load from your nearCredentialsDir
  --nearCredentialsDir=<value>     [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                   Defaults to ~/.near-credentials
  --networkId=<option>             [default: testnet] Near network ID to connect to
                                   <options: testnet|mainnet|localnet>
  --programId=<value>              Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  push an aggregator onto the crank

ALIASES
  $ sbv2 near push crank
```

## `sbv2 near queue aggregators QUEUEADDRESS`

fetch all aggregators for a given queue account

```
USAGE
  $ sbv2 near queue aggregators [QUEUEADDRESS] [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId <value>]
    [-u <value>] [--nearCredentialsDir <value>] [--json]

ARGUMENTS
  QUEUEADDRESS  address of the queue in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  fetch all aggregators for a given queue account

ALIASES
  $ sbv2 near queue feeds
```

## `sbv2 near queue create`

create a new oracle queue

```
USAGE
  $ sbv2 near queue create --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId
    <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>] [--name <value>] [--metadata <value>]
    [--minStake <value>] [-r <value>] [--oracleTimeout <value>] [--queueSize <value>] [--slashingEnabled]
    [--unpermissionedFeeds] [--unpermissionedVrf] [--enableBufferRelayers]

FLAGS
  -a, --authority=<value>       alternate named account that will be the authority for the queue
  -h, --help                    Show CLI help.
  -r, --reward=<value>          [default: 0] oracle rewards for successfully responding to an update request
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --enableBufferRelayers        enable oracles to fulfill buffer relayer requests
  --metadata=<value>            metadata of the queue for easier identification
  --minStake=<value>            [default: 0] minimum stake required by an oracle to join the queue
  --name=<value>                name of the queue for easier identification
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --oracleTimeout=<value>       [default: 180] number of oracles to add to the queue
  --programId=<value>           Switchboard programId on the selected Near networkId
  --queueSize=<value>           [default: 100] maximum number of oracles the queue can support
  --slashingEnabled             permit slashing malicous oracles
  --unpermissionedFeeds         permit unpermissioned feeds
  --unpermissionedVrf           permit unpermissioned VRF accounts

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new oracle queue

ALIASES
  $ sbv2 near create queue
```

## `sbv2 near queue feeds QUEUEADDRESS`

fetch all aggregators for a given queue account

```
USAGE
  $ sbv2 near queue feeds [QUEUEADDRESS] [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId <value>]
    [-u <value>] [--nearCredentialsDir <value>] [--json]

ARGUMENTS
  QUEUEADDRESS  address of the queue in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  fetch all aggregators for a given queue account

ALIASES
  $ sbv2 near queue feeds
```

## `sbv2 near queue list QUEUEADDRESS`

list aggregators for a given queue

```
USAGE
  $ sbv2 near queue list [QUEUEADDRESS] [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId <value>]
    [-u <value>] [--nearCredentialsDir <value>] [--json]

ARGUMENTS
  QUEUEADDRESS  address of the queue in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  list aggregators for a given queue

ALIASES
  $ sbv2 near list queue
```

## `sbv2 near queue set QUEUEADDRESS`

create a new oracle queue

```
USAGE
  $ sbv2 near queue set [QUEUEADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]
    [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>] [--name <value>] [--metadata
    <value>] [--minStake <value>] [-r <value>] [--oracleTimeout <value>] [--slashingEnabled] [--unpermissionedFeeds]
    [--unpermissionedVrf] [--enableBufferRelayers]

ARGUMENTS
  QUEUEADDRESS  address of the queue in Uint8 or Base58 encoding

FLAGS
  -a, --authority=<value>       alternate named account that will be the authority for the queue
  -h, --help                    Show CLI help.
  -r, --reward=<value>          oracle rewards for successfully responding to an update request
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --enableBufferRelayers        enable oracles to fulfill buffer relayer requests
  --metadata=<value>            metadata of the queue for easier identification
  --minStake=<value>            minimum stake required by an oracle to join the queue
  --name=<value>                name of the queue for easier identification
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --oracleTimeout=<value>       number of oracles to add to the queue
  --programId=<value>           Switchboard programId on the selected Near networkId
  --slashingEnabled             permit slashing malicous oracles
  --unpermissionedFeeds         permit unpermissioned feeds
  --unpermissionedVrf           permit unpermissioned VRF accounts

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new oracle queue

ALIASES
  $ sbv2 near create queue
```

## `sbv2 near set aggregator AGGREGATORADDRESS`

set a near aggregator's config

```
USAGE
  $ sbv2 near set aggregator [AGGREGATORADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]
    [--forceReportPeriod <value>] [--updateInterval <value>] [--varianceThreshold <value>]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --forceReportPeriod=<value>   Number of seconds for which, even if the variance threshold is not passed, accept new
                                responses from oracles.
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId
  --updateInterval=<value>      set an aggregator's minimum update delay
  --varianceThreshold=<value>   percentage change between a previous accepted result and the next round before an oracle
                                reports a value on-chain. Used to conserve lease cost during low volatility

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  set a near aggregator's config

ALIASES
  $ sbv2 near set aggregator
```

## `sbv2 near update aggregator [AGGREGATORADDRESS]`

request a new value on-chain for an aggregator

```
USAGE
  $ sbv2 near update aggregator [AGGREGATORADDRESS] --accountName <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --programId=<value>           Switchboard programId on the selected Near networkId

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  request a new value on-chain for an aggregator

ALIASES
  $ sbv2 near update aggregator
```

## `sbv2 oracle logs NETWORK SEARCHSTRING`

fetch logs for a switchboard oracle

```
USAGE
  $ sbv2 oracle logs [NETWORK] [SEARCHSTRING] -f <value> [-h] [-v] [-s] [--force] [--json] [--csv]

ARGUMENTS
  NETWORK       (solana-devnet|solana-mainnet) network to parse logs for
  SEARCHSTRING  string to search for in the oracle logs

FLAGS
  -f, --outputFile=<value>  (required) output file to save aggregator pubkeys to
  -h, --help                Show CLI help.
  -s, --silent              suppress cli prompts
  -v, --verbose             log everything
  --csv                     output aggregator accounts in csv format
  --force                   overwrite output file if exists
  --json                    output aggregator accounts in json format

DESCRIPTION
  fetch logs for a switchboard oracle
```

## `sbv2 solana aggregator add crank [CRANKKEY] [AGGREGATORKEY]`

push an aggregator onto a crank

```
USAGE
  $ sbv2 solana aggregator add crank [CRANKKEY] [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>]

ARGUMENTS
  CRANKKEY       public key of the crank
  AGGREGATORKEY  public key of the aggregator

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  push an aggregator onto a crank

ALIASES
  $ sbv2 solana aggregator add crank
  $ sbv2 solana crank add aggregator
```

## `sbv2 solana aggregator add history [AGGREGATORKEY] [SIZE]`

set an aggregator's history buffer account to record the last N accepted results

```
USAGE
  $ sbv2 solana aggregator add history [AGGREGATORKEY] [SIZE] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator to add to a crank
  SIZE           size of history buffer

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  set an aggregator's history buffer account to record the last N accepted results

ALIASES
  $ sbv2 solana aggregator add history

EXAMPLES
  $ sbv2 aggregator:set:history GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR 10000 --keypair ../payer-keypair.json
```

## `sbv2 solana aggregator add job [AGGREGATORKEY]`

add a job to an aggregator

```
USAGE
  $ sbv2 solana aggregator add job [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--jobDefinition <value> | --jobKey <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --jobDefinition=<value>  filesystem path of job json definition file
  --jobKey=<value>         public key of an existing job account to add to an aggregator
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  add a job to an aggregator

EXAMPLES
  $ sbv2 aggregator:add:job
```

## `sbv2 solana aggregator create [QUEUEKEY]`

create an aggregator account

```
USAGE
  $ sbv2 solana aggregator create [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [-a <value>] [--crankKey <value>] [--enable] [--queueAuthority <value>]
    [-n <value>] [--forceReportPeriod <value>] [--batchSize <value>] [--minJobs <value>] [--minOracles <value>]
    [--updateInterval <value>] [--varianceThreshold <value>] [-j <value>]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue account to create aggregator for

FLAGS
  -a, --authority=<value>      alternate keypair that is the authority for the aggregator
  -h, --help                   Show CLI help.
  -j, --job=<value>...         filesystem path to job definition file
  -k, --keypair=<value>        keypair that will pay for onchain transactions. defaults to new account authority if no
                               alternate authority provided
  -n, --name=<value>           name of the aggregator
  -s, --silent                 suppress cli prompts
  -u, --rpcUrl=<value>         alternate RPC url
  -v, --verbose                log everything
  --batchSize=<value>          number of oracles requested for each open round call
  --commitment=<option>        [default: confirmed] transaction commitment level to use
                               <options: confirmed|finalized|processed>
  --crankKey=<value>           public key of the crank to join
  --enable                     set permissions to PERMIT_ORACLE_QUEUE_USAGE
  --forceReportPeriod=<value>  Number of seconds for which, even if the variance threshold is not passed, accept new
                               responses from oracles.
  --mainnetBeta                WARNING: use mainnet-beta solana cluster
  --minJobs=<value>            number of jobs that must respond before an oracle responds
  --minOracles=<value>         number of oracles that must respond before a value is accepted on-chain
  --programId=<value>          alternative Switchboard program ID to interact with
  --queueAuthority=<value>     alternative keypair to use for queue authority
  --updateInterval=<value>     set an aggregator's minimum update delay
  --varianceThreshold=<value>  percentage change between a previous accepted result and the next round before an oracle
                               reports a value on-chain. Used to conserve lease cost during low volatility

DESCRIPTION
  create an aggregator account
```

## `sbv2 solana aggregator create copy [AGGREGATORSOURCE]`

copy an aggregator account to a new oracle queue

```
USAGE
  $ sbv2 solana aggregator create copy [AGGREGATORSOURCE] --queueKey <value> [-h] [-v] [-s] [--mainnetBeta] [-u <value>]
    [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>] [--minOracles <value>]
    [--batchSize <value>] [--minJobs <value>] [--minUpdateDelay <value>] [--forceReportPeriod <value>]
    [--varianceThreshold <value>] [--crankKey <value>] [--enable] [--queueAuthority <value>] [--copyJobs]

ARGUMENTS
  AGGREGATORSOURCE  public key of the aggregator account to copy

FLAGS
  -a, --authority=<value>      alternate keypair that will be the aggregator authority
  -h, --help                   Show CLI help.
  -k, --keypair=<value>        keypair that will pay for onchain transactions. defaults to new account authority if no
                               alternate authority provided
  -s, --silent                 suppress cli prompts
  -u, --rpcUrl=<value>         alternate RPC url
  -v, --verbose                log everything
  --batchSize=<value>          override source aggregator's oracleRequestBatchSize
  --commitment=<option>        [default: confirmed] transaction commitment level to use
                               <options: confirmed|finalized|processed>
  --copyJobs                   create copy of job accounts instead of referincing existing job account
  --crankKey=<value>           public key of the crank to push aggregator to
  --enable                     set permissions to PERMIT_ORACLE_QUEUE_USAGE
  --forceReportPeriod=<value>  override source aggregator's forceReportPeriod
  --mainnetBeta                WARNING: use mainnet-beta solana cluster
  --minJobs=<value>            override source aggregator's minJobResults
  --minOracles=<value>         override source aggregator's minOracleResults
  --minUpdateDelay=<value>     override source aggregator's minUpdateDelaySeconds
  --programId=<value>          alternative Switchboard program ID to interact with
  --queueAuthority=<value>     alternative keypair to use for queue authority
  --queueKey=<value>           (required) public key of the queue to create aggregator for
  --varianceThreshold=<value>  override source aggregator's varianceThreshold

DESCRIPTION
  copy an aggregator account to a new oracle queue

EXAMPLES
  $ sbv2 aggregator:create:copy GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --queueKey 9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --keypair ../payer-keypair.json

  $ sbv2 aggregator:create:copy GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --queueKey 9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --keypair ../payer-keypair.json --sourceCluster mainnet-beta

  $ sbv2 aggregator:create:copy FcSmdsdWks75YdyCGegRqXdt5BiNGQKxZywyzb8ckD7D --queueKey 9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --keypair ../payer-keypair.json --sourceCluster mainnet-beta
```

## `sbv2 solana aggregator create json [DEFINITIONFILE]`

create an aggregator from a json file

```
USAGE
  $ sbv2 solana aggregator create json [DEFINITIONFILE] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [-q <value>] [-a <value>]

ARGUMENTS
  DEFINITIONFILE  filesystem path of queue definition json file

FLAGS
  -a, --authority=<value>  alternate keypair that will be the authority for the aggregator
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -q, --queueKey=<value>   public key of the oracle queue to create aggregator for
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  create an aggregator from a json file

ALIASES
  $ sbv2 solana json create aggregator

EXAMPLES
  $ sbv2 aggregator:create:json examples/aggregator.json --keypair ../payer-keypair.json --queueKey GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --outputFile aggregator.schema.json
```

## `sbv2 solana aggregator history print [AGGREGATORKEY]`

Print the history buffer associated with an aggregator account

```
USAGE
  $ sbv2 solana aggregator history print [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to fetch permission account and deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the history buffer associated with an aggregator account

ALIASES
  $ sbv2 solana aggregator history print
  $ sbv2 solana aggregator print history

EXAMPLES
  $ sbv2 aggregator:print:history 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4
```

## `sbv2 solana aggregator lease create [AGGREGATORKEY]`

fund and re-enable an aggregator lease

```
USAGE
  $ sbv2 solana aggregator lease create [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--amount <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator to extend a lease for

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --amount=<value>       token amount to load into the lease escrow. If decimals provided, amount will be normalized to
                         raw tokenAmount
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  fund and re-enable an aggregator lease

ALIASES
  $ sbv2 solana aggregator lease create

EXAMPLES
  $ sbv2 lease:create GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.5 --keypair ../payer-keypair.json
```

## `sbv2 solana aggregator lease extend [AGGREGATORKEY]`

fund and re-enable an aggregator lease

```
USAGE
  $ sbv2 solana aggregator lease extend [AGGREGATORKEY] --amount <value> [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId
    <value>] [--commitment confirmed|finalized|processed] [-k <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator to extend a lease for

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --amount=<value>       (required) token amount to load into the lease escrow. If decimals provided, amount will be
                         normalized to raw tokenAmount
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  fund and re-enable an aggregator lease

ALIASES
  $ sbv2 solana aggregator lease extend

EXAMPLES
  $ sbv2 aggregator:lease:extend GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json
```

## `sbv2 solana aggregator lease print [AGGREGATORKEY]`

Print the lease account associated with a Switchboard aggregator account

```
USAGE
  $ sbv2 solana aggregator lease print [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to fetch permission account and deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the lease account associated with a Switchboard aggregator account

ALIASES
  $ sbv2 solana aggregator lease print
  $ sbv2 solana aggregator print lease

EXAMPLES
  $ sbv2 aggregator:lease:print 8SXvChNYFhRq4EZuZvnhjrB3jJRQCv4k3P4W6hesH3Ee
```

## `sbv2 solana aggregator lease withdraw [AGGREGATORKEY]`

withdraw funds from an aggregator lease

```
USAGE
  $ sbv2 solana aggregator lease withdraw [AGGREGATORKEY] --amount <value> [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId
    <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--withdrawAddress <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator to extend a lease for

FLAGS
  -a, --authority=<value>    keypair delegated as the authority for managing the oracle account
  -h, --help                 Show CLI help.
  -k, --keypair=<value>      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided
  -s, --silent               suppress cli prompts
  -u, --rpcUrl=<value>       alternate RPC url
  -v, --verbose              log everything
  --amount=<value>           (required) token amount to withdraw from lease account. If decimals provided, amount will
                             be normalized to raw tokenAmount
  --commitment=<option>      [default: confirmed] transaction commitment level to use
                             <options: confirmed|finalized|processed>
  --mainnetBeta              WARNING: use mainnet-beta solana cluster
  --programId=<value>        alternative Switchboard program ID to interact with
  --withdrawAddress=<value>  tokenAccount to withdraw to. If not provided, payer associated token account will be used

DESCRIPTION
  withdraw funds from an aggregator lease

ALIASES
  $ sbv2 solana aggregator lease withdraw

EXAMPLES
  $ sbv2 aggregator:lease:withdraw GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json
```

## `sbv2 solana aggregator lock [AGGREGATORKEY]`

lock an aggregator's configuration and prevent further changes

```
USAGE
  $ sbv2 solana aggregator lock [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  lock an aggregator's configuration and prevent further changes
```

## `sbv2 solana aggregator permission create [AGGREGATORKEY]`

create a permission account for an aggregator

```
USAGE
  $ sbv2 solana aggregator permission create [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  create a permission account for an aggregator
```

## `sbv2 solana aggregator permission print [AGGREGATORKEY]`

Print the permission account associated with a Switchboard aggregator account

```
USAGE
  $ sbv2 solana aggregator permission print [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to fetch permission account and deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the permission account associated with a Switchboard aggregator account

ALIASES
  $ sbv2 solana aggregator permission print
  $ sbv2 solana aggregator print permission

EXAMPLES
  $ sbv2 aggregator:permission:print 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4
```

## `sbv2 solana aggregator print [AGGREGATORKEY]`

Print the deserialized Switchboard aggregator account

```
USAGE
  $ sbv2 solana aggregator print [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [--json] [--jobs] [-o]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to deserialize

FLAGS
  -h, --help               Show CLI help.
  -o, --oraclePubkeysData  print the assigned oracles for the current round
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --jobs                   output job definitions
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Print the deserialized Switchboard aggregator account

ALIASES
  $ sbv2 solana aggregator print

EXAMPLES
  $ sbv2 aggregator:print GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR
```

## `sbv2 solana aggregator print history [AGGREGATORKEY]`

Print the history buffer associated with an aggregator account

```
USAGE
  $ sbv2 solana aggregator print history [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to fetch permission account and deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the history buffer associated with an aggregator account

ALIASES
  $ sbv2 solana aggregator history print
  $ sbv2 solana aggregator print history

EXAMPLES
  $ sbv2 aggregator:print:history 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4
```

## `sbv2 solana aggregator print lease [AGGREGATORKEY]`

Print the lease account associated with a Switchboard aggregator account

```
USAGE
  $ sbv2 solana aggregator print lease [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to fetch permission account and deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the lease account associated with a Switchboard aggregator account

ALIASES
  $ sbv2 solana aggregator lease print
  $ sbv2 solana aggregator print lease

EXAMPLES
  $ sbv2 aggregator:lease:print 8SXvChNYFhRq4EZuZvnhjrB3jJRQCv4k3P4W6hesH3Ee
```

## `sbv2 solana aggregator print permission [AGGREGATORKEY]`

Print the permission account associated with a Switchboard aggregator account

```
USAGE
  $ sbv2 solana aggregator print permission [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to fetch permission account and deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the permission account associated with a Switchboard aggregator account

ALIASES
  $ sbv2 solana aggregator permission print
  $ sbv2 solana aggregator print permission

EXAMPLES
  $ sbv2 aggregator:permission:print 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4
```

## `sbv2 solana aggregator remove job [AGGREGATORKEY] [JOBKEY]`

remove a switchboard job account from an aggregator

```
USAGE
  $ sbv2 solana aggregator remove job [AGGREGATORKEY] [JOBKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account
  JOBKEY         public key of an existing job account to remove from an aggregator

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  remove a switchboard job account from an aggregator

EXAMPLES
  $ sbv2 aggregator:remove:job
```

## `sbv2 solana aggregator save history [AGGREGATORKEY]`

request a new aggregator result from a set of oracles

```
USAGE
  $ sbv2 solana aggregator save history [AGGREGATORKEY] -f <value> [-h] [-v] [-s] [--force] [--json] [--csv]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to deserialize

FLAGS
  -f, --outputFile=<value>  (required) output file to save aggregator pubkeys to
  -h, --help                Show CLI help.
  -s, --silent              suppress cli prompts
  -v, --verbose             log everything
  --csv                     output aggregator accounts in csv format
  --force                   overwrite output file if exists
  --json                    output aggregator accounts in json format

DESCRIPTION
  request a new aggregator result from a set of oracles

EXAMPLES
  $ sbv2 aggregator:save:history --outputFile ../aggregator-history.json --csv
```

## `sbv2 solana aggregator set [AGGREGATORKEY]`

set an aggregator's config

```
USAGE
  $ sbv2 solana aggregator set [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>] [--forceReportPeriod <value>] [--minJobs
    <value>] [--minOracles <value>] [--newQueue <value>] [--updateInterval <value>] [--varianceThreshold <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator

FLAGS
  -a, --authority=<value>      alternate keypair that is the authority for the aggregator
  -h, --help                   Show CLI help.
  -k, --keypair=<value>        keypair that will pay for onchain transactions. defaults to new account authority if no
                               alternate authority provided
  -s, --silent                 suppress cli prompts
  -u, --rpcUrl=<value>         alternate RPC url
  -v, --verbose                log everything
  --commitment=<option>        [default: confirmed] transaction commitment level to use
                               <options: confirmed|finalized|processed>
  --forceReportPeriod=<value>  Number of seconds for which, even if the variance threshold is not passed, accept new
                               responses from oracles.
  --mainnetBeta                WARNING: use mainnet-beta solana cluster
  --minJobs=<value>            number of jobs that must respond before an oracle responds
  --minOracles=<value>         number of oracles that must respond before a value is accepted on-chain
  --newQueue=<value>           public key of the new oracle queue
  --programId=<value>          alternative Switchboard program ID to interact with
  --updateInterval=<value>     set an aggregator's minimum update delay
  --varianceThreshold=<value>  percentage change between a previous accepted result and the next round before an oracle
                               reports a value on-chain. Used to conserve lease cost during low volatility

DESCRIPTION
  set an aggregator's config

ALIASES
  $ sbv2 solana set aggregator

EXAMPLES
  $ sbv2 aggregator:set GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --updateInterval 300 --minOracles 3 --keypair ../payer-keypair.json
```

## `sbv2 solana aggregator set authority [AGGREGATORKEY] [NEWAUTHORITY]`

set an aggregator's authority

```
USAGE
  $ sbv2 solana aggregator set authority [AGGREGATORKEY] [NEWAUTHORITY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId
    <value>] [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account
  NEWAUTHORITY   keypair path of new authority

FLAGS
  -a, --currentAuthority=<value>  alternate keypair that is the authority for the aggregator
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  set an aggregator's authority
```

## `sbv2 solana aggregator set batchSize [AGGREGATORKEY] BATCHSIZE`

set an aggregator's batch size

```
USAGE
  $ sbv2 solana aggregator set batchSize [AGGREGATORKEY] [BATCHSIZE] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId
    <value>] [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account
  BATCHSIZE      number of oracles requested for each open round call

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  set an aggregator's batch size
```

## `sbv2 solana aggregator set forceReport [AGGREGATORKEY] [FORCEREPORTPERIOD]`

set an aggregator's force report period

```
USAGE
  $ sbv2 solana aggregator set forceReport [AGGREGATORKEY] [FORCEREPORTPERIOD] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId
    <value>] [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY      public key of the aggregator
  FORCEREPORTPERIOD  Number of seconds for which, even if the variance threshold is not passed, accept new responses
                     from oracles.

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  set an aggregator's force report period

ALIASES
  $ sbv2 solana aggregator set forceReport

EXAMPLES
  $ sbv2 aggregator:set:forceReportPeriod GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR 300 --keypair ../payer-keypair.json
```

## `sbv2 solana aggregator set forceReportPeriod [AGGREGATORKEY] [FORCEREPORTPERIOD]`

set an aggregator's force report period

```
USAGE
  $ sbv2 solana aggregator set forceReportPeriod [AGGREGATORKEY] [FORCEREPORTPERIOD] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId
    <value>] [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY      public key of the aggregator
  FORCEREPORTPERIOD  Number of seconds for which, even if the variance threshold is not passed, accept new responses
                     from oracles.

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  set an aggregator's force report period

ALIASES
  $ sbv2 solana aggregator set forceReport

EXAMPLES
  $ sbv2 aggregator:set:forceReportPeriod GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR 300 --keypair ../payer-keypair.json
```

## `sbv2 solana aggregator set history [AGGREGATORKEY] [SIZE]`

set an aggregator's history buffer account to record the last N accepted results

```
USAGE
  $ sbv2 solana aggregator set history [AGGREGATORKEY] [SIZE] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator to add to a crank
  SIZE           size of history buffer

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  set an aggregator's history buffer account to record the last N accepted results

ALIASES
  $ sbv2 solana aggregator add history

EXAMPLES
  $ sbv2 aggregator:set:history GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR 10000 --keypair ../payer-keypair.json
```

## `sbv2 solana aggregator set minJobs [AGGREGATORKEY] [MINJOBRESULTS]`

set an aggregator's minimum number of jobs before an oracle responds

```
USAGE
  $ sbv2 solana aggregator set minJobs [AGGREGATORKEY] [MINJOBRESULTS] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId
    <value>] [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account
  MINJOBRESULTS  number of jobs that must respond before an oracle responds

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  set an aggregator's minimum number of jobs before an oracle responds
```

## `sbv2 solana aggregator set minOracles [AGGREGATORKEY] [MINORACLERESULTS]`

set an aggregator's minimum number of oracles that must respond before a result is accepted on-chain

```
USAGE
  $ sbv2 solana aggregator set minOracles [AGGREGATORKEY] [MINORACLERESULTS] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId
    <value>] [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY     public key of the aggregator account
  MINORACLERESULTS  number of oracles that must respond before a value is accepted on-chain

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  set an aggregator's minimum number of oracles that must respond before a result is accepted on-chain
```

## `sbv2 solana aggregator set queue [AGGREGATORKEY] [QUEUEKEY]`

set an aggregator's oracle queue

```
USAGE
  $ sbv2 solana aggregator set queue [AGGREGATORKEY] [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator
  QUEUEKEY       public key of the oracle queue

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  set an aggregator's oracle queue
```

## `sbv2 solana aggregator set updateInterval [AGGREGATORKEY] [UPDATEINTERVAL]`

set an aggregator's minimum update delay

```
USAGE
  $ sbv2 solana aggregator set updateInterval [AGGREGATORKEY] [UPDATEINTERVAL] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId
    <value>] [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY   public key of the aggregator account
  UPDATEINTERVAL  set an aggregator's minimum update delay

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  set an aggregator's minimum update delay

EXAMPLES
  $ sbv2 aggregator:set:updateInterval GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR 60 --keypair ../payer-keypair.json
```

## `sbv2 solana aggregator set variance [AGGREGATORKEY] [VARIANCETHRESHOLD]`

set an aggregator's variance threshold

```
USAGE
  $ sbv2 solana aggregator set variance [AGGREGATORKEY] [VARIANCETHRESHOLD] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId
    <value>] [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY      public key of the aggregator
  VARIANCETHRESHOLD  percentage change between a previous accepted result and the next round before an oracle reports a
                     value on-chain. Used to conserve lease cost during low volatility

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  set an aggregator's variance threshold

ALIASES
  $ sbv2 solana aggregator set variance

EXAMPLES
  $ sbv2 aggregator:set:varianceThreshold GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR 0.1 --keypair ../payer-keypair.json
```

## `sbv2 solana aggregator set varianceThreshold [AGGREGATORKEY] [VARIANCETHRESHOLD]`

set an aggregator's variance threshold

```
USAGE
  $ sbv2 solana aggregator set varianceThreshold [AGGREGATORKEY] [VARIANCETHRESHOLD] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId
    <value>] [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY      public key of the aggregator
  VARIANCETHRESHOLD  percentage change between a previous accepted result and the next round before an oracle reports a
                     value on-chain. Used to conserve lease cost during low volatility

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  set an aggregator's variance threshold

ALIASES
  $ sbv2 solana aggregator set variance

EXAMPLES
  $ sbv2 aggregator:set:varianceThreshold GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR 0.1 --keypair ../payer-keypair.json
```

## `sbv2 solana aggregator update [AGGREGATORKEY]`

request a new aggregator result from a set of oracles

```
USAGE
  $ sbv2 solana aggregator update [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  request a new aggregator result from a set of oracles

EXAMPLES
  $ sbv2 aggregator:update J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa --keypair ../payer-keypair.json
```

## `sbv2 solana aggregator watch [AGGREGATORKEY]`

watch an aggregator for a new value

```
USAGE
  $ sbv2 solana aggregator watch [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  watch an aggregator for a new value

ALIASES
  $ sbv2 solana aggregator watch

EXAMPLES
  $ sbv2 watch:aggregator J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa
```

## `sbv2 solana anchor test`

run anchor test and a switchboard oracle in parallel

```
USAGE
  $ sbv2 solana anchor test [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [-d <value>] [--oracleKey <value>] [--nodeImage <value>] [--arm] [-t
    <value>]

FLAGS
  -d, --switchboardDir=<value>  directory with switchboard.env to load a switchboard environment
  -h, --help                    Show CLI help.
  -k, --keypair=<value>         keypair that will pay for onchain transactions. defaults to new account authority if no
                                alternate authority provided
  -s, --silent                  suppress docker logging
  -t, --timeout=<value>         [default: 120] number of seconds before timing out
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --arm                         apple silicon needs to use a docker image for linux/arm64
  --commitment=<option>         [default: confirmed] transaction commitment level to use
                                <options: confirmed|finalized|processed>
  --mainnetBeta                 WARNING: use mainnet-beta solana cluster
  --nodeImage=<value>           [default: dev-v2-10-18-22] public key of the oracle to start-up
  --oracleKey=<value>           public key of the oracle to start-up
  --programId=<value>           alternative Switchboard program ID to interact with

DESCRIPTION
  run anchor test and a switchboard oracle in parallel
```

## `sbv2 solana buffer create [QUEUEKEY]`

create a buffer relayer account

```
USAGE
  $ sbv2 solana buffer create [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [-a <value>] [-n <value>] [--minUpdateDelaySeconds <value>]
    [--jobDefinition <value> | --jobKey <value>]

ARGUMENTS
  QUEUEKEY  oracle queue to create BufferRelayer account on

FLAGS
  -a, --authority=<value>          alternate keypair that will be the aggregator authority
  -h, --help                       Show CLI help.
  -k, --keypair=<value>            keypair that will pay for onchain transactions. defaults to new account authority if
                                   no alternate authority provided
  -n, --name=<value>               name of the buffer account
  -s, --silent                     suppress cli prompts
  -u, --rpcUrl=<value>             alternate RPC url
  -v, --verbose                    log everything
  --commitment=<option>            [default: confirmed] transaction commitment level to use
                                   <options: confirmed|finalized|processed>
  --jobDefinition=<value>          filesystem path to job definition
  --jobKey=<value>                 public key of existing job account
  --mainnetBeta                    WARNING: use mainnet-beta solana cluster
  --minUpdateDelaySeconds=<value>  [default: 30] minimum number of seconds between update calls
  --programId=<value>              alternative Switchboard program ID to interact with

DESCRIPTION
  create a buffer relayer account
```

## `sbv2 solana buffer print [BUFFERRELAYERKEY]`

Print the deserialized Switchboard buffer relayer account

```
USAGE
  $ sbv2 solana buffer print [BUFFERRELAYERKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [--job]

ARGUMENTS
  BUFFERRELAYERKEY  public key of the buffer relayer account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --job                  output job definitions
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the deserialized Switchboard buffer relayer account

ALIASES
  $ sbv2 solana buffer print

EXAMPLES
  $ sbv2 buffer:print 23GvzENjwgqqaLejsAtAWgTkSzWjSMo2LUYTAETT8URp
```

## `sbv2 solana crank add aggregator [CRANKKEY] [AGGREGATORKEY]`

push an aggregator onto a crank

```
USAGE
  $ sbv2 solana crank add aggregator [CRANKKEY] [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>]

ARGUMENTS
  CRANKKEY       public key of the crank
  AGGREGATORKEY  public key of the aggregator

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  push an aggregator onto a crank

ALIASES
  $ sbv2 solana aggregator add crank
  $ sbv2 solana crank add aggregator
```

## `sbv2 solana crank cmp [CRANKKEY1] [CRANKKEY2]`

write the crank account definitions to a JSON file

```
USAGE
  $ sbv2 solana crank cmp [CRANKKEY1] [CRANKKEY2] -f <value> [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId
    <value>] [--commitment confirmed|finalized|processed] [--force]

ARGUMENTS
  CRANKKEY1  public key of the crank
  CRANKKEY2  public key of the crank

FLAGS
  -f, --outputFile=<value>  (required) output file to save aggregator pubkeys to
  -h, --help                Show CLI help.
  -s, --silent              suppress cli prompts
  -u, --rpcUrl=<value>      alternate RPC url
  -v, --verbose             log everything
  --commitment=<option>     [default: confirmed] transaction commitment level to use
                            <options: confirmed|finalized|processed>
  --force                   overwrite output file if exists
  --mainnetBeta             WARNING: use mainnet-beta solana cluster
  --programId=<value>       alternative Switchboard program ID to interact with

DESCRIPTION
  write the crank account definitions to a JSON file
```

## `sbv2 solana crank create [QUEUEKEY]`

add a crank to an existing oracle queue

```
USAGE
  $ sbv2 solana crank create [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [-n <value>] [-r <value>] [--queueAuthority <value>]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue to create a crank on

FLAGS
  -h, --help                Show CLI help.
  -k, --keypair=<value>     keypair that will pay for onchain transactions. defaults to new account authority if no
                            alternate authority provided
  -n, --name=<value>        name of the crank for easier identification
  -r, --maxRows=<value>     [default: 100] maximum number of rows a crank can support
  -s, --silent              suppress cli prompts
  -u, --rpcUrl=<value>      alternate RPC url
  -v, --verbose             log everything
  --commitment=<option>     [default: confirmed] transaction commitment level to use
                            <options: confirmed|finalized|processed>
  --mainnetBeta             WARNING: use mainnet-beta solana cluster
  --programId=<value>       alternative Switchboard program ID to interact with
  --queueAuthority=<value>  alternative keypair to use for queue authority

DESCRIPTION
  add a crank to an existing oracle queue

EXAMPLES
  $ sbv2 queue:add:crank 5aYuxRdcB9GpWrEXVMBQp2R5uf94uoBiFdMEBwcmHuU4 -k ../authority-keypair.json -n crank-1
```

## `sbv2 solana crank list [CRANKKEY]`

list the pubkeys currently on the crank

```
USAGE
  $ sbv2 solana crank list [CRANKKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--force] [-f <value>]

ARGUMENTS
  CRANKKEY  public key of the crank

FLAGS
  -f, --outputFile=<value>  output file to save aggregator pubkeys to
  -h, --help                Show CLI help.
  -k, --keypair=<value>     keypair that will pay for onchain transactions. defaults to new account authority if no
                            alternate authority provided
  -s, --silent              suppress cli prompts
  -u, --rpcUrl=<value>      alternate RPC url
  -v, --verbose             log everything
  --commitment=<option>     [default: confirmed] transaction commitment level to use
                            <options: confirmed|finalized|processed>
  --force                   overwrite output file if exists
  --mainnetBeta             WARNING: use mainnet-beta solana cluster
  --programId=<value>       alternative Switchboard program ID to interact with

DESCRIPTION
  list the pubkeys currently on the crank
```

## `sbv2 solana crank pop [CRANKKEY]`

pop the crank

```
USAGE
  $ sbv2 solana crank pop [CRANKKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>]

ARGUMENTS
  CRANKKEY  public key of the crank

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  pop the crank
```

## `sbv2 solana crank print [CRANKKEY]`

print deserialized switchboard crank account

```
USAGE
  $ sbv2 solana crank print [CRANKKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed]

ARGUMENTS
  CRANKKEY  public key of the crank account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  print deserialized switchboard crank account

ALIASES
  $ sbv2 solana crank print

EXAMPLES
  $ sbv2 crank:print 85L2cFUvXaeGQ4HrzP8RJEVCL7WvRrXM2msvEmQ82AVr
```

## `sbv2 solana crank push [CRANKKEY] [AGGREGATORKEY]`

push an aggregator onto a crank

```
USAGE
  $ sbv2 solana crank push [CRANKKEY] [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>]

ARGUMENTS
  CRANKKEY       public key of the crank
  AGGREGATORKEY  public key of the aggregator

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  push an aggregator onto a crank

ALIASES
  $ sbv2 solana aggregator add crank
  $ sbv2 solana crank add aggregator
```

## `sbv2 solana crank turn [CRANKKEY]`

turn the crank and get rewarded if aggregator updates available

```
USAGE
  $ sbv2 solana crank turn [CRANKKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>]

ARGUMENTS
  CRANKKEY  public key of the crank to turn

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  turn the crank and get rewarded if aggregator updates available

EXAMPLES
  $ sbv2 crank:turn 85L2cFUvXaeGQ4HrzP8RJEVCL7WvRrXM2msvEmQ82AVr --keypair ../payer-keypair.json
```

## `sbv2 solana job create JOBDEFINITION`

create a job account

```
USAGE
  $ sbv2 solana job create [JOBDEFINITION] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>] [-n <value>]

ARGUMENTS
  JOBDEFINITION  filesystem path to job definition

FLAGS
  -a, --authority=<value>  alternate keypair that will be the account authority
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -n, --name=<value>       name of the buffer account
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  create a job account
```

## `sbv2 solana job print [JOBKEY]`

Print the deserialized Switchboard job account

```
USAGE
  $ sbv2 solana job print [JOBKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed]

ARGUMENTS
  JOBKEY  public key of the job account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the deserialized Switchboard job account

ALIASES
  $ sbv2 solana job print

EXAMPLES
  $ sbv2 job:print SzTvFZLz3hwjZFMwVWzuEnr1oUF6qyvXwXCvsqf7qeA
```

## `sbv2 solana json create aggregator [DEFINITIONFILE]`

create an aggregator from a json file

```
USAGE
  $ sbv2 solana json create aggregator [DEFINITIONFILE] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [-q <value>] [-a <value>]

ARGUMENTS
  DEFINITIONFILE  filesystem path of queue definition json file

FLAGS
  -a, --authority=<value>  alternate keypair that will be the authority for the aggregator
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -q, --queueKey=<value>   public key of the oracle queue to create aggregator for
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  create an aggregator from a json file

ALIASES
  $ sbv2 solana json create aggregator

EXAMPLES
  $ sbv2 aggregator:create:json examples/aggregator.json --keypair ../payer-keypair.json --queueKey GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --outputFile aggregator.schema.json
```

## `sbv2 solana lease create [AGGREGATORKEY]`

fund and re-enable an aggregator lease

```
USAGE
  $ sbv2 solana lease create [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--amount <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator to extend a lease for

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --amount=<value>       token amount to load into the lease escrow. If decimals provided, amount will be normalized to
                         raw tokenAmount
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  fund and re-enable an aggregator lease

ALIASES
  $ sbv2 solana aggregator lease create

EXAMPLES
  $ sbv2 lease:create GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.5 --keypair ../payer-keypair.json
```

## `sbv2 solana lease extend [AGGREGATORKEY]`

fund and re-enable an aggregator lease

```
USAGE
  $ sbv2 solana lease extend [AGGREGATORKEY] --amount <value> [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId
    <value>] [--commitment confirmed|finalized|processed] [-k <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator to extend a lease for

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --amount=<value>       (required) token amount to load into the lease escrow. If decimals provided, amount will be
                         normalized to raw tokenAmount
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  fund and re-enable an aggregator lease

ALIASES
  $ sbv2 solana aggregator lease extend

EXAMPLES
  $ sbv2 aggregator:lease:extend GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json
```

## `sbv2 solana lease withdraw [AGGREGATORKEY]`

withdraw funds from an aggregator lease

```
USAGE
  $ sbv2 solana lease withdraw [AGGREGATORKEY] --amount <value> [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId
    <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--withdrawAddress <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator to extend a lease for

FLAGS
  -a, --authority=<value>    keypair delegated as the authority for managing the oracle account
  -h, --help                 Show CLI help.
  -k, --keypair=<value>      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided
  -s, --silent               suppress cli prompts
  -u, --rpcUrl=<value>       alternate RPC url
  -v, --verbose              log everything
  --amount=<value>           (required) token amount to withdraw from lease account. If decimals provided, amount will
                             be normalized to raw tokenAmount
  --commitment=<option>      [default: confirmed] transaction commitment level to use
                             <options: confirmed|finalized|processed>
  --mainnetBeta              WARNING: use mainnet-beta solana cluster
  --programId=<value>        alternative Switchboard program ID to interact with
  --withdrawAddress=<value>  tokenAccount to withdraw to. If not provided, payer associated token account will be used

DESCRIPTION
  withdraw funds from an aggregator lease

ALIASES
  $ sbv2 solana aggregator lease withdraw

EXAMPLES
  $ sbv2 aggregator:lease:withdraw GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json
```

## `sbv2 solana localnet env`

create a localnet switchboard environment

```
USAGE
  $ sbv2 solana localnet env [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--force] [-o <value>]

FLAGS
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -o, --outputDir=<value>  output directory for scripts
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --force                  overwrite output file if existing
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  create a localnet switchboard environment
```

## `sbv2 solana oracle balance [ORACLEKEY]`

check an oracles token balance

```
USAGE
  $ sbv2 solana oracle balance [ORACLEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed]

ARGUMENTS
  ORACLEKEY  public key of the oracle to check token balance

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  check an oracles token balance

EXAMPLES
  $ sbv2 oracle:balance 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4
```

## `sbv2 solana oracle create [QUEUEKEY]`

create a new oracle account for a given queue

```
USAGE
  $ sbv2 solana oracle create [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [-n <value>] [-a <value>] [--enable] [--queueAuthority <value>]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue to join

FLAGS
  -a, --authority=<value>   keypair to delegate authority to for managing the oracle account
  -h, --help                Show CLI help.
  -k, --keypair=<value>     keypair that will pay for onchain transactions. defaults to new account authority if no
                            alternate authority provided
  -n, --name=<value>        name of the oracle for easier identification
  -s, --silent              suppress cli prompts
  -u, --rpcUrl=<value>      alternate RPC url
  -v, --verbose             log everything
  --commitment=<option>     [default: confirmed] transaction commitment level to use
                            <options: confirmed|finalized|processed>
  --enable                  enable oracle heartbeat permissions
  --mainnetBeta             WARNING: use mainnet-beta solana cluster
  --programId=<value>       alternative Switchboard program ID to interact with
  --queueAuthority=<value>  alternative keypair to use for queue authority

DESCRIPTION
  create a new oracle account for a given queue

EXAMPLES
  $ sbv2 oracle:create GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --keypair ../payer-and-authority-keypair.json

  $ sbv2 oracle:create GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --name=oracle-1  --keypair ../payer-and-authority-keypair.json

  $ sbv2 oracle:create GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --keypair ../payer-keypair.json --authority ../oracle-keypair.json
```

## `sbv2 solana oracle deposit [ORACLEKEY]`

deposit tokens into an oracle's token wallet

```
USAGE
  $ sbv2 solana oracle deposit [ORACLEKEY] --amount <value> [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId
    <value>] [--commitment confirmed|finalized|processed] [-k <value>]

ARGUMENTS
  ORACLEKEY  public key of the oracle to deposit funds into

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --amount=<value>       (required) token amount to load into the oracle escrow. If decimals provided, amount will be
                         normalized to raw tokenAmount
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  deposit tokens into an oracle's token wallet

EXAMPLES
  $ sbv2 oracle:deposit 6kPsQoufdugtHLjM4fH7Z2fNv7jLt5pgvwKHt5JvRhQ6 2500 --keypair ../payer-keypair.json
```

## `sbv2 solana oracle nonce [ORACLEKEY]`

view an oracles nonce accounts

```
USAGE
  $ sbv2 solana oracle nonce [ORACLEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed]

ARGUMENTS
  ORACLEKEY  public key of the oracle to check token balance

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  view an oracles nonce accounts
```

## `sbv2 solana oracle permission create [ORACLEKEY]`

create a permission account for an oracle

```
USAGE
  $ sbv2 solana oracle permission create [ORACLEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>]

ARGUMENTS
  ORACLEKEY  public key of the oracle account

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  create a permission account for an oracle
```

## `sbv2 solana oracle permission print [ORACLEKEY]`

Print the permission account associated with a Switchboard oracle account

```
USAGE
  $ sbv2 solana oracle permission print [ORACLEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed]

ARGUMENTS
  ORACLEKEY  public key of the oracle account to fetch permission account and deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the permission account associated with a Switchboard oracle account

ALIASES
  $ sbv2 solana oracle permission print
  $ sbv2 solana oracle print permission

EXAMPLES
  $ sbv2 oracle:permission:print 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4
```

## `sbv2 solana oracle print [ORACLEKEY]`

Print the deserialized Switchboard oracle account

```
USAGE
  $ sbv2 solana oracle print [ORACLEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed]

ARGUMENTS
  ORACLEKEY  public key of the oracle account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the deserialized Switchboard oracle account

ALIASES
  $ sbv2 solana oracle print

EXAMPLES
  $ sbv2 oracle:print 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4
```

## `sbv2 solana oracle print permission [ORACLEKEY]`

Print the permission account associated with a Switchboard oracle account

```
USAGE
  $ sbv2 solana oracle print permission [ORACLEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed]

ARGUMENTS
  ORACLEKEY  public key of the oracle account to fetch permission account and deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the permission account associated with a Switchboard oracle account

ALIASES
  $ sbv2 solana oracle permission print
  $ sbv2 solana oracle print permission

EXAMPLES
  $ sbv2 oracle:permission:print 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4
```

## `sbv2 solana oracle up [ORACLEADDRESS]`

start a solana docker oracle

```
USAGE
  $ sbv2 solana oracle up [ORACLEADDRESS] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [-d <value>] [--nodeImage <value>] [--arm]

ARGUMENTS
  ORACLEADDRESS  address of the oracle in Uint8 or Base58 encoding

FLAGS
  -d, --switchboardDir=<value>  directory with switchboard.env to load a switchboard environment
  -h, --help                    Show CLI help.
  -k, --keypair=<value>         keypair that will pay for onchain transactions. defaults to new account authority if no
                                alternate authority provided
  -s, --silent                  suppress docker logging
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --arm                         apple silicon needs to use a docker image for linux/arm64
  --commitment=<option>         [default: confirmed] transaction commitment level to use
                                <options: confirmed|finalized|processed>
  --mainnetBeta                 WARNING: use mainnet-beta solana cluster
  --nodeImage=<value>           [default: dev-v2-10-18-22] public key of the oracle to start-up
  --programId=<value>           alternative Switchboard program ID to interact with

DESCRIPTION
  start a solana docker oracle
```

## `sbv2 solana oracle withdraw [ORACLEKEY]`

withdraw tokens from an oracle's token wallet

```
USAGE
  $ sbv2 solana oracle withdraw [ORACLEKEY] --amount <value> [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId
    <value>] [--commitment confirmed|finalized|processed] [-k <value>] [-f] [-w <value>] [-a <value>]

ARGUMENTS
  ORACLEKEY  public key of the oracle to withdraw from

FLAGS
  -a, --authority=<value>        keypair delegated as the authority for managing the oracle account
  -f, --force                    skip minStake balance check. your oracle may be removed from the queue
  -h, --help                     Show CLI help.
  -k, --keypair=<value>          keypair that will pay for onchain transactions. defaults to new account authority if no
                                 alternate authority provided
  -s, --silent                   suppress cli prompts
  -u, --rpcUrl=<value>           alternate RPC url
  -v, --verbose                  log everything
  -w, --withdrawAccount=<value>  optional solana pubkey or keypair filesystem path to withdraw funds to. default
                                 destination is oracle authority's token wallet
  --amount=<value>               (required) token amount to withdraw from oracle escrow. If decimals provided, amount
                                 will be normalized to raw tokenAmount
  --commitment=<option>          [default: confirmed] transaction commitment level to use
                                 <options: confirmed|finalized|processed>
  --mainnetBeta                  WARNING: use mainnet-beta solana cluster
  --programId=<value>            alternative Switchboard program ID to interact with

DESCRIPTION
  withdraw tokens from an oracle's token wallet

EXAMPLES
  $ sbv2 oracle:withdraw 6kPsQoufdugtHLjM4fH7Z2fNv7jLt5pgvwKHt5JvRhQ6 2500 --keypair ../oracle-keypair.json

  $ sbv2 oracle:withdraw 6kPsQoufdugtHLjM4fH7Z2fNv7jLt5pgvwKHt5JvRhQ6 2500 --keypair ../payer-keypair.json --authority ../oracle-keypair.json -w ByJs8E29jxvqf2KFLwfyiE2gUh5fivaS7aShcRMAsnzg
```

## `sbv2 solana permission create [GRANTER] [GRANTEE]`

create a permission account

```
USAGE
  $ sbv2 solana permission create [GRANTER] [GRANTEE] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>]

ARGUMENTS
  GRANTER  public key of the account granting permission
  GRANTEE  public key of the account getting permissions

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  create a permission account
```

## `sbv2 solana permission print [PERMISSIONKEY]`

Print the deserialized Switchboard permission account

```
USAGE
  $ sbv2 solana permission print [PERMISSIONKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed]

ARGUMENTS
  PERMISSIONKEY  public key of the permission account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the deserialized Switchboard permission account

ALIASES
  $ sbv2 solana permission print

EXAMPLES
  $ sbv2 permission:print 94XXM72K2aKu2wcuJaawV8njuGaFZvhy8iKgPxoa1tJk
```

## `sbv2 solana permission set [PERMISSIONKEY]`

permit a grantee to use a granters resources

```
USAGE
  $ sbv2 solana permission set [PERMISSIONKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>] [--disable]

ARGUMENTS
  PERMISSIONKEY  public key of the permission account

FLAGS
  -a, --authority=<value>  alternate keypair that is the granters authority
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --disable                disable permissions
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  permit a grantee to use a granters resources
```

## `sbv2 solana print [PUBLICKEY]`

find a switchboard account by public key for a given cluster

```
USAGE
  $ sbv2 solana print [PUBLICKEY] [-h] [-v]

ARGUMENTS
  PUBLICKEY  public key of a switchboard account to lookup

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose  log everything

DESCRIPTION
  find a switchboard account by public key for a given cluster

EXAMPLES
  $ sbv2 print GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U
```

## `sbv2 solana print aggregator [AGGREGATORKEY]`

Print the deserialized Switchboard aggregator account

```
USAGE
  $ sbv2 solana print aggregator [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [--json] [--jobs] [-o]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to deserialize

FLAGS
  -h, --help               Show CLI help.
  -o, --oraclePubkeysData  print the assigned oracles for the current round
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --jobs                   output job definitions
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Print the deserialized Switchboard aggregator account

ALIASES
  $ sbv2 solana aggregator print

EXAMPLES
  $ sbv2 aggregator:print GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR
```

## `sbv2 solana print aggregator history [AGGREGATORKEY]`

Print the history buffer associated with an aggregator account

```
USAGE
  $ sbv2 solana print aggregator history [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to fetch permission account and deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the history buffer associated with an aggregator account

ALIASES
  $ sbv2 solana aggregator history print
  $ sbv2 solana aggregator print history

EXAMPLES
  $ sbv2 aggregator:print:history 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4
```

## `sbv2 solana print aggregator lease [AGGREGATORKEY]`

Print the lease account associated with a Switchboard aggregator account

```
USAGE
  $ sbv2 solana print aggregator lease [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to fetch permission account and deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the lease account associated with a Switchboard aggregator account

ALIASES
  $ sbv2 solana aggregator lease print
  $ sbv2 solana aggregator print lease

EXAMPLES
  $ sbv2 aggregator:lease:print 8SXvChNYFhRq4EZuZvnhjrB3jJRQCv4k3P4W6hesH3Ee
```

## `sbv2 solana print aggregator permission [AGGREGATORKEY]`

Print the permission account associated with a Switchboard aggregator account

```
USAGE
  $ sbv2 solana print aggregator permission [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to fetch permission account and deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the permission account associated with a Switchboard aggregator account

ALIASES
  $ sbv2 solana aggregator permission print
  $ sbv2 solana aggregator print permission

EXAMPLES
  $ sbv2 aggregator:permission:print 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4
```

## `sbv2 solana print buffer [BUFFERRELAYERKEY]`

Print the deserialized Switchboard buffer relayer account

```
USAGE
  $ sbv2 solana print buffer [BUFFERRELAYERKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [--job]

ARGUMENTS
  BUFFERRELAYERKEY  public key of the buffer relayer account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --job                  output job definitions
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the deserialized Switchboard buffer relayer account

ALIASES
  $ sbv2 solana buffer print

EXAMPLES
  $ sbv2 buffer:print 23GvzENjwgqqaLejsAtAWgTkSzWjSMo2LUYTAETT8URp
```

## `sbv2 solana print crank [CRANKKEY]`

print deserialized switchboard crank account

```
USAGE
  $ sbv2 solana print crank [CRANKKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed]

ARGUMENTS
  CRANKKEY  public key of the crank account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  print deserialized switchboard crank account

ALIASES
  $ sbv2 solana crank print

EXAMPLES
  $ sbv2 crank:print 85L2cFUvXaeGQ4HrzP8RJEVCL7WvRrXM2msvEmQ82AVr
```

## `sbv2 solana print job [JOBKEY]`

Print the deserialized Switchboard job account

```
USAGE
  $ sbv2 solana print job [JOBKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed]

ARGUMENTS
  JOBKEY  public key of the job account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the deserialized Switchboard job account

ALIASES
  $ sbv2 solana job print

EXAMPLES
  $ sbv2 job:print SzTvFZLz3hwjZFMwVWzuEnr1oUF6qyvXwXCvsqf7qeA
```

## `sbv2 solana print oracle [ORACLEKEY]`

Print the deserialized Switchboard oracle account

```
USAGE
  $ sbv2 solana print oracle [ORACLEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed]

ARGUMENTS
  ORACLEKEY  public key of the oracle account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the deserialized Switchboard oracle account

ALIASES
  $ sbv2 solana oracle print

EXAMPLES
  $ sbv2 oracle:print 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4
```

## `sbv2 solana print oracle permission [ORACLEKEY]`

Print the permission account associated with a Switchboard oracle account

```
USAGE
  $ sbv2 solana print oracle permission [ORACLEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed]

ARGUMENTS
  ORACLEKEY  public key of the oracle account to fetch permission account and deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the permission account associated with a Switchboard oracle account

ALIASES
  $ sbv2 solana oracle permission print
  $ sbv2 solana oracle print permission

EXAMPLES
  $ sbv2 oracle:permission:print 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4
```

## `sbv2 solana print permission [PERMISSIONKEY]`

Print the deserialized Switchboard permission account

```
USAGE
  $ sbv2 solana print permission [PERMISSIONKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed]

ARGUMENTS
  PERMISSIONKEY  public key of the permission account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the deserialized Switchboard permission account

ALIASES
  $ sbv2 solana permission print

EXAMPLES
  $ sbv2 permission:print 94XXM72K2aKu2wcuJaawV8njuGaFZvhy8iKgPxoa1tJk
```

## `sbv2 solana print program`

print the deserialized switchboard program state account

```
USAGE
  $ sbv2 solana print program [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed]

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  print the deserialized switchboard program state account

ALIASES
  $ sbv2 solana program print

EXAMPLES
  $ sbv2 program:print
```

## `sbv2 solana print queue [QUEUEKEY]`

Print the deserialized Switchboard oraclequeue account

```
USAGE
  $ sbv2 solana print queue [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [--oracles]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --oracles              output oracles that are heartbeating on the queue
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the deserialized Switchboard oraclequeue account

ALIASES
  $ sbv2 solana queue print

EXAMPLES
  $ sbv2 solana queue print GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U
```

## `sbv2 solana print vrf [VRFKEY]`

Print the deserialized Switchboard VRF account

```
USAGE
  $ sbv2 solana print vrf [VRFKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [--json]

ARGUMENTS
  VRFKEY  public key of the vrf account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Print the deserialized Switchboard VRF account

ALIASES
  $ sbv2 solana vrf print

EXAMPLES
  $ sbv2 solana vrf print [VRF_PUBKEY]
```

## `sbv2 solana program print`

print the deserialized switchboard program state account

```
USAGE
  $ sbv2 solana program print [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed]

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  print the deserialized switchboard program state account

ALIASES
  $ sbv2 solana program print

EXAMPLES
  $ sbv2 program:print
```

## `sbv2 solana queue create`

create a personal oracle queue

```
USAGE
  $ sbv2 solana queue create [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--force] [-a <value>] [-n <value>] [--minStake <value>] [-r <value>]
    [-c <value>] [--oracleTimeout <value>] [-o <value>] [--queueSize <value>] [--unpermissionedFeeds]
    [--unpermissionedVrf] [--enableBufferRelayers] [-f <value>]

FLAGS
  -a, --authority=<value>   keypair to delegate authority to for creating permissions targeted at the queue
  -c, --crankSize=<value>   [default: 100] size of the crank
  -f, --outputFile=<value>  output queue schema to a json file
  -h, --help                Show CLI help.
  -k, --keypair=<value>     keypair that will pay for onchain transactions. defaults to new account authority if no
                            alternate authority provided
  -n, --name=<value>        [default: Custom Queue] name of the queue for easier identification
  -o, --numOracles=<value>  number of oracles to add to the queue
  -r, --reward=<value>      [default: 0] oracle rewards for successfully responding to an update request
  -s, --silent              suppress cli prompts
  -u, --rpcUrl=<value>      alternate RPC url
  -v, --verbose             log everything
  --commitment=<option>     [default: confirmed] transaction commitment level to use
                            <options: confirmed|finalized|processed>
  --enableBufferRelayers    enable oracles to fulfill buffer relayer requests
  --force                   overwrite output file if existing
  --mainnetBeta             WARNING: use mainnet-beta solana cluster
  --minStake=<value>        [default: 0] minimum stake required by an oracle to join the queue
  --oracleTimeout=<value>   [default: 180] number of oracles to add to the queue
  --programId=<value>       alternative Switchboard program ID to interact with
  --queueSize=<value>       [default: 100] maximum number of oracles the queue can support
  --unpermissionedFeeds     permit unpermissioned feeds
  --unpermissionedVrf       permit unpermissioned VRF accounts

DESCRIPTION
  create a personal oracle queue
```

## `sbv2 solana queue print [QUEUEKEY]`

Print the deserialized Switchboard oraclequeue account

```
USAGE
  $ sbv2 solana queue print [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [--oracles]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --oracles              output oracles that are heartbeating on the queue
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the deserialized Switchboard oraclequeue account

ALIASES
  $ sbv2 solana queue print

EXAMPLES
  $ sbv2 solana queue print GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U
```

## `sbv2 solana queue set rewards [QUEUEKEY] [REWARDS]`

set an oracle queue's rewards

```
USAGE
  $ sbv2 solana queue set rewards [QUEUEKEY] [REWARDS] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue
  REWARDS   token rewards for each assigned oracle per open round call

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for oracle queue
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  set an oracle queue's rewards
```

## `sbv2 solana queue set vrf [QUEUEKEY]`

set unpermissionedVrfEnabled

```
USAGE
  $ sbv2 solana queue set vrf [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [-a <value>] [--disable]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue to create a crank on

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for oracle queue
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --disable                disable unpermissionedVrfEnabled
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  set unpermissionedVrfEnabled
```

## `sbv2 solana set aggregator [AGGREGATORKEY]`

set an aggregator's config

```
USAGE
  $ sbv2 solana set aggregator [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [-a <value>] [--forceReportPeriod <value>] [--minJobs
    <value>] [--minOracles <value>] [--newQueue <value>] [--updateInterval <value>] [--varianceThreshold <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator

FLAGS
  -a, --authority=<value>      alternate keypair that is the authority for the aggregator
  -h, --help                   Show CLI help.
  -k, --keypair=<value>        keypair that will pay for onchain transactions. defaults to new account authority if no
                               alternate authority provided
  -s, --silent                 suppress cli prompts
  -u, --rpcUrl=<value>         alternate RPC url
  -v, --verbose                log everything
  --commitment=<option>        [default: confirmed] transaction commitment level to use
                               <options: confirmed|finalized|processed>
  --forceReportPeriod=<value>  Number of seconds for which, even if the variance threshold is not passed, accept new
                               responses from oracles.
  --mainnetBeta                WARNING: use mainnet-beta solana cluster
  --minJobs=<value>            number of jobs that must respond before an oracle responds
  --minOracles=<value>         number of oracles that must respond before a value is accepted on-chain
  --newQueue=<value>           public key of the new oracle queue
  --programId=<value>          alternative Switchboard program ID to interact with
  --updateInterval=<value>     set an aggregator's minimum update delay
  --varianceThreshold=<value>  percentage change between a previous accepted result and the next round before an oracle
                               reports a value on-chain. Used to conserve lease cost during low volatility

DESCRIPTION
  set an aggregator's config

ALIASES
  $ sbv2 solana set aggregator

EXAMPLES
  $ sbv2 aggregator:set GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --updateInterval 300 --minOracles 3 --keypair ../payer-keypair.json
```

## `sbv2 solana vrf create [QUEUEKEY]`

create a Switchboard VRF Account

```
USAGE
  $ sbv2 solana vrf create [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--vrfKeypair <value>] [--enable] [--authority <value>]
    [--queueAuthority <value>] [--callback <value> | --accountMeta <value> | --callbackPid <value> | --ixData <value>]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue to create VRF account for

FLAGS
  -h, --help                Show CLI help.
  -k, --keypair=<value>     keypair that will pay for onchain transactions. defaults to new account authority if no
                            alternate authority provided
  -s, --silent              suppress cli prompts
  -u, --rpcUrl=<value>      alternate RPC url
  -v, --verbose             log everything
  --accountMeta=<value>...  account metas for VRF callback
  --authority=<value>       alternative keypair to use for VRF authority
  --callback=<value>        filesystem path to callback json
  --callbackPid=<value>     callback program ID
  --commitment=<option>     [default: confirmed] transaction commitment level to use
                            <options: confirmed|finalized|processed>
  --enable                  enable vrf permissions
  --ixData=<value>          serialized instruction data in bytes
  --mainnetBeta             WARNING: use mainnet-beta solana cluster
  --programId=<value>       alternative Switchboard program ID to interact with
  --queueAuthority=<value>  alternative keypair to use for queue authority
  --vrfKeypair=<value>      filesystem path of existing keypair to use for VRF Account

DESCRIPTION
  create a Switchboard VRF Account

EXAMPLES
  $ sbv2 vrf:create 9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --keypair ../payer-keypair.json -v --enable --queueAuthority queue-authority-keypair.json --callbackPid 6MLk7G54uHZ7JuzNxpBAVENANrgM9BZ51pKkzGwPYBCE --ixData "[145,72,9,94,61,97,126,106]" -a "{"pubkey": "HpQoFL5kxPp2JCFvjsVTvBd7navx4THLefUU68SXAyd6","isSigner": false,"isWritable": true}" -a "{"pubkey": "8VdBtS8ufkXMCa6Yr9E4KVCfX2inVZVwU4KGg2CL1q7P","isSigner": false,"isWritable": false}"

  $ sbv2 vrf:create 9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --keypair ../payer-keypair.json -v --enable --queueAuthority oracle-keypair.json --callbackPid 6MLk7G54uHZ7JuzNxpBAVENANrgM9BZ51pKkzGwPYBCE --ixData "[145,72,9,94,61,97,126,106]" -a "{"pubkey": "HYKi1grticLXPe5vqapUHhm976brwqRob8vqRnWMKWL5","isSigner": false,"isWritable": true}" -a "{"pubkey": "6vG9QLMgSvsfjvSpDxWfZ2MGPYGzEYoBxviLG7cr4go","isSigner": false,"isWritable": false}"

  $ sbv2 vrf:create 9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --keypair ../payer-keypair.json -v --enable --queueAuthority queue-authority-keypair.json --callback callback-example.json
```

## `sbv2 solana vrf create example [QUEUEKEY]`

create a VRF account for the client example program

```
USAGE
  $ sbv2 solana vrf create example [QUEUEKEY] --vrfPid <value> [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId
    <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--vrfKeypair <value>] [--enable]
    [--queueAuthority <value>] [--maxResult <value>]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue to create VRF account for

FLAGS
  -h, --help                Show CLI help.
  -k, --keypair=<value>     keypair that will pay for onchain transactions. defaults to new account authority if no
                            alternate authority provided
  -s, --silent              suppress cli prompts
  -u, --rpcUrl=<value>      alternate RPC url
  -v, --verbose             log everything
  --commitment=<option>     [default: confirmed] transaction commitment level to use
                            <options: confirmed|finalized|processed>
  --enable                  enable vrf permissions
  --mainnetBeta             WARNING: use mainnet-beta solana cluster
  --maxResult=<value>       [default: 256000] the maximum VRF result
  --programId=<value>       alternative Switchboard program ID to interact with
  --queueAuthority=<value>  alternative keypair to use for queue authority
  --vrfKeypair=<value>      filesystem path of existing keypair to use for VRF Account
  --vrfPid=<value>          (required) program ID for the VRF example program

DESCRIPTION
  create a VRF account for the client example program

EXAMPLES
  $ sbv2 solana vrf create example 9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --vrfPid 6MLk7G54uHZ7JuzNxpBAVENANrgM9BZ51pKkzGwPYBCE --keypair ../payer-keypair.json -v --enable --queueAuthority queue-authority-keypair.json
```

## `sbv2 solana vrf print [VRFKEY]`

Print the deserialized Switchboard VRF account

```
USAGE
  $ sbv2 solana vrf print [VRFKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [--json]

ARGUMENTS
  VRFKEY  public key of the vrf account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Print the deserialized Switchboard VRF account

ALIASES
  $ sbv2 solana vrf print

EXAMPLES
  $ sbv2 solana vrf print [VRF_PUBKEY]
```

## `sbv2 solana vrf request [VRFKEY]`

request a new value for a VRF

```
USAGE
  $ sbv2 solana vrf request [VRFKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--funderAuthority <value>] [--authority <value>]

ARGUMENTS
  VRFKEY  public key of the VRF account to request randomness for

FLAGS
  -h, --help                 Show CLI help.
  -k, --keypair=<value>      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided
  -s, --silent               suppress cli prompts
  -u, --rpcUrl=<value>       alternate RPC url
  -v, --verbose              log everything
  --authority=<value>        alternative keypair that is the VRF authority
  --commitment=<option>      [default: confirmed] transaction commitment level to use
                             <options: confirmed|finalized|processed>
  --funderAuthority=<value>  alternative keypair to pay for VRF request
  --mainnetBeta              WARNING: use mainnet-beta solana cluster
  --programId=<value>        alternative Switchboard program ID to interact with

DESCRIPTION
  request a new value for a VRF

EXAMPLES
  $ sbv2 vrf:create 9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --keypair ../payer-keypair.json -v --enable --queueAuthority queue-authority-keypair.json --callbackPid 6MLk7G54uHZ7JuzNxpBAVENANrgM9BZ51pKkzGwPYBCE --ixData "[145,72,9,94,61,97,126,106]" -a "{"pubkey": "HpQoFL5kxPp2JCFvjsVTvBd7navx4THLefUU68SXAyd6","isSigner": false,"isWritable": true}" -a "{"pubkey": "8VdBtS8ufkXMCa6Yr9E4KVCfX2inVZVwU4KGg2CL1q7P","isSigner": false,"isWritable": false}"
```

## `sbv2 solana vrf verify [VRFKEY]`

if ready, verify a VRF proof

```
USAGE
  $ sbv2 solana vrf verify [VRFKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>]

ARGUMENTS
  VRFKEY  public key of the VRF account to request randomness for

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  if ready, verify a VRF proof
```

## `sbv2 solana vrf watch [VRFKEY]`

watch a vrf for a new value

```
USAGE
  $ sbv2 solana vrf watch [VRFKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed]

ARGUMENTS
  VRFKEY  public key of the vrf account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  watch a vrf for a new value

ALIASES
  $ sbv2 solana vrf watch

EXAMPLES
  $ sbv2 vrf:aggregator J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa
```

## `sbv2 solana watch aggregator [AGGREGATORKEY]`

watch an aggregator for a new value

```
USAGE
  $ sbv2 solana watch aggregator [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  watch an aggregator for a new value

ALIASES
  $ sbv2 solana aggregator watch

EXAMPLES
  $ sbv2 watch:aggregator J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa
```

## `sbv2 solana watch vrf [VRFKEY]`

watch a vrf for a new value

```
USAGE
  $ sbv2 solana watch vrf [VRFKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed]

ARGUMENTS
  VRFKEY  public key of the vrf account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  watch a vrf for a new value

ALIASES
  $ sbv2 solana vrf watch

EXAMPLES
  $ sbv2 vrf:aggregator J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa
```

## `sbv2 update [CHANNEL]`

update the sbv2 CLI

```
USAGE
  $ sbv2 update [CHANNEL] [-a] [-v <value> | -i] [--force]

FLAGS
  -a, --available        Install a specific version.
  -i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
  -v, --version=<value>  Install a specific version.
  --force                Force a re-download of the requested version.

DESCRIPTION
  update the sbv2 CLI

EXAMPLES
  Update to the stable channel:

    $ sbv2 update stable

  Update to a specific version:

    $ sbv2 update --version 1.0.0

  Interactively select version:

    $ sbv2 update --interactive

  See available versions:

    $ sbv2 update --available
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v3.0.4/src/commands/update.ts)_

## `sbv2 version`

```
USAGE
  $ sbv2 version [--json] [--verbose]

FLAGS
  --verbose  Show additional information about the CLI.

GLOBAL FLAGS
  --json  Format output as json.

FLAG DESCRIPTIONS
  --verbose  Show additional information about the CLI.

    Additionally shows the architecture, node version, operating system, and versions of plugins that the CLI is using.
```

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v1.1.3/src/commands/version.ts)_
<!-- commandsstop -->
