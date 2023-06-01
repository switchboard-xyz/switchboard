<!-- template -->
<div align="center">
  <a href="#">
    <img src="https://github.com/switchboard-xyz/sbv2-core/raw/main/website/static/img/icons/switchboard/avatar.png" />
  </a>

  <h1>@switchboard-xyz/cli</h1>

  <p>A command line tool to interact with Switchboard.</p>

  <p>

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@switchboard-xyz/cli.svg)](https://npmjs.org/package/@switchboard-xyz/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@switchboard-xyz/cli.svg)](https://npmjs.org/package/@switchboard-xyz/cli)
[![License](https://img.shields.io/npm/l/@switchboard-xyz/cli.svg)](https://github.com/switchboard-xyz/sbv2-core/blob/main/cli/LICENSE)

  </p>

  <p>
    <a href="https://discord.gg/switchboardxyz">
      <img alt="Discord" src="https://img.shields.io/discord/841525135311634443?color=blueviolet&logo=discord&logoColor=white" />
    </a>
    <a href="https://twitter.com/switchboardxyz">
      <img alt="Twitter" src="https://img.shields.io/twitter/follow/switchboardxyz?label=Follow+Switchboard" />
    </a>
  </p>

  <h4>
    <strong>Npm: </strong><a href="https://www.npmjs.com/package/@switchboard-xyz/cli">npmjs.com/package/@switchboard-xyz/cli</a>
  </h4>
  <h4>
    <strong>Typedocs: </strong><a href="https://docs.switchboard.xyz/dev/cli">docs.switchboard.xyz/dev/cli</a>
  </h4>
</div>

## Install

Run the following command to install the `sbv2` binary in your $PATH.

```bash npm2yarn
npm install -g @switchboard-xyz/cli
```

You can re-run this command to upgrade your CLI version or run the command:

```bash
sbv2 update stable
```

## Setup

### Solana

```bash
# Devnet
sbv2 config set solana devnet rpc https://api.devnet.solana.com
sbv2 config set solana devnet default-account "~/.config/solana/id.json"

# Mainnet
sbv2 config set solana mainnet-beta rpc https://api.mainnet-beta.solana.com
sbv2 config set solana mainnet-beta default-account "~/.config/solana/id.json"
```

### Aptos

```bash
# Testnet
sbv2 config set aptos testnet rpc https://fullnode.testnet.aptoslabs.com/v1
sbv2 config set aptos testnet default-account ".aptos/config.yaml"

# Devnet
sbv2 config set aptos devnet rpc https://fullnode.devnet.aptoslabs.com/v1
sbv2 config set aptos devnet default-account ".aptos/config.yaml"
```

### NEAR

```bash
# Testnet
sbv2 config set near testnet rpc https://rpc.testnet.near.org
sbv2 config set near testnet default-account my-named-account.testnet

# Mainnet
sbv2 config set near mainnet rpc https://rpc.mainnet.near.org
sbv2 config set near mainnet default-account my-named-account.near
```

<!-- templatestop -->

## Testing

To test commands:

```
node bin/dev print GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR
# node bin/dev [COMMAND ARGS --flags]
```

**Commands**

<!-- commands -->
* [`sbv2 anchor test`](#sbv2-anchor-test)
* [`sbv2 aptos account airdrop`](#sbv2-aptos-account-airdrop)
* [`sbv2 aptos aggregator add job AGGREGATORHEXSTRING`](#sbv2-aptos-aggregator-add-job-aggregatorhexstring)
* [`sbv2 aptos aggregator create QUEUEHEXSTRING`](#sbv2-aptos-aggregator-create-queuehexstring)
* [`sbv2 aptos aggregator job add AGGREGATORHEXSTRING`](#sbv2-aptos-aggregator-job-add-aggregatorhexstring)
* [`sbv2 aptos aggregator update AGGREGATORHEXSTRING`](#sbv2-aptos-aggregator-update-aggregatorhexstring)
* [`sbv2 aptos crank create QUEUEHEXSTRING`](#sbv2-aptos-crank-create-queuehexstring)
* [`sbv2 aptos crank list CRANKHEXSTRING`](#sbv2-aptos-crank-list-crankhexstring)
* [`sbv2 aptos crank pop CRANKHEXSTRING`](#sbv2-aptos-crank-pop-crankhexstring)
* [`sbv2 aptos crank push CRANKHEXSTRING`](#sbv2-aptos-crank-push-crankhexstring)
* [`sbv2 aptos create aggregator QUEUEHEXSTRING`](#sbv2-aptos-create-aggregator-queuehexstring)
* [`sbv2 aptos create crank QUEUEHEXSTRING`](#sbv2-aptos-create-crank-queuehexstring)
* [`sbv2 aptos create job QUEUEHEXSTRING JOBDEFINITION`](#sbv2-aptos-create-job-queuehexstring-jobdefinition)
* [`sbv2 aptos create oracle QUEUEHEXSTRING`](#sbv2-aptos-create-oracle-queuehexstring)
* [`sbv2 aptos create queue`](#sbv2-aptos-create-queue)
* [`sbv2 aptos job create QUEUEHEXSTRING JOBDEFINITION`](#sbv2-aptos-job-create-queuehexstring-jobdefinition)
* [`sbv2 aptos list crank CRANKHEXSTRING`](#sbv2-aptos-list-crank-crankhexstring)
* [`sbv2 aptos oracle create QUEUEHEXSTRING`](#sbv2-aptos-oracle-create-queuehexstring)
* [`sbv2 aptos oracle metrics ORACLEHEXSTRING`](#sbv2-aptos-oracle-metrics-oraclehexstring)
* [`sbv2 aptos oracle up ORACLEHEXSTRING`](#sbv2-aptos-oracle-up-oraclehexstring)
* [`sbv2 aptos permission create GRANTER`](#sbv2-aptos-permission-create-granter)
* [`sbv2 aptos permission set GRANTER`](#sbv2-aptos-permission-set-granter)
* [`sbv2 aptos pop crank CRANKHEXSTRING`](#sbv2-aptos-pop-crank-crankhexstring)
* [`sbv2 aptos print ACCOUNTTYPE ADDRESS`](#sbv2-aptos-print-accounttype-address)
* [`sbv2 aptos push crank CRANKHEXSTRING`](#sbv2-aptos-push-crank-crankhexstring)
* [`sbv2 aptos queue create`](#sbv2-aptos-queue-create)
* [`sbv2 aptos update aggregator AGGREGATORHEXSTRING`](#sbv2-aptos-update-aggregator-aggregatorhexstring)
* [`sbv2 config print`](#sbv2-config-print)
* [`sbv2 config set CHAIN NETWORK PARAMETER [VALUE]`](#sbv2-config-set-chain-network-parameter-value)
* [`sbv2 evm aggregator create QUEUEADDRESS`](#sbv2-evm-aggregator-create-queueaddress)
* [`sbv2 evm aggregator print AGGREGATORADDRESS`](#sbv2-evm-aggregator-print-aggregatoraddress)
* [`sbv2 evm aggregator set AGGREGATORADDRESS`](#sbv2-evm-aggregator-set-aggregatoraddress)
* [`sbv2 evm create aggregator QUEUEADDRESS`](#sbv2-evm-create-aggregator-queueaddress)
* [`sbv2 evm create jobs`](#sbv2-evm-create-jobs)
* [`sbv2 evm create oracle QUEUEADDRESS`](#sbv2-evm-create-oracle-queueaddress)
* [`sbv2 evm create queue`](#sbv2-evm-create-queue)
* [`sbv2 evm job create`](#sbv2-evm-job-create)
* [`sbv2 evm job print JOBHASH`](#sbv2-evm-job-print-jobhash)
* [`sbv2 evm oracle create QUEUEADDRESS`](#sbv2-evm-oracle-create-queueaddress)
* [`sbv2 evm oracle heartbeat ORACLEADDRESS`](#sbv2-evm-oracle-heartbeat-oracleaddress)
* [`sbv2 evm oracle print ORACLEADDRESS`](#sbv2-evm-oracle-print-oracleaddress)
* [`sbv2 evm queue create`](#sbv2-evm-queue-create)
* [`sbv2 evm queue print QUEUEADDRESS`](#sbv2-evm-queue-print-queueaddress)
* [`sbv2 evm set aggregator AGGREGATORADDRESS`](#sbv2-evm-set-aggregator-aggregatoraddress)
* [`sbv2 help [COMMANDS]`](#sbv2-help-commands)
* [`sbv2 job test`](#sbv2-job-test)
* [`sbv2 near aggregator add history AGGREGATORADDRESS`](#sbv2-near-aggregator-add-history-aggregatoraddress)
* [`sbv2 near aggregator add job AGGREGATORADDRESS`](#sbv2-near-aggregator-add-job-aggregatoraddress)
* [`sbv2 near aggregator create QUEUEADDRESS`](#sbv2-near-aggregator-create-queueaddress)
* [`sbv2 near aggregator escrow AGGREGATORADDRESS`](#sbv2-near-aggregator-escrow-aggregatoraddress)
* [`sbv2 near aggregator fetch`](#sbv2-near-aggregator-fetch)
* [`sbv2 near aggregator fund AGGREGATORADDRESS`](#sbv2-near-aggregator-fund-aggregatoraddress)
* [`sbv2 near aggregator history add AGGREGATORADDRESS`](#sbv2-near-aggregator-history-add-aggregatoraddress)
* [`sbv2 near aggregator job add AGGREGATORADDRESS`](#sbv2-near-aggregator-job-add-aggregatoraddress)
* [`sbv2 near aggregator job remove AGGREGATORADDRESS`](#sbv2-near-aggregator-job-remove-aggregatoraddress)
* [`sbv2 near aggregator permission create AGGREGATORADDRESS`](#sbv2-near-aggregator-permission-create-aggregatoraddress)
* [`sbv2 near aggregator remove job AGGREGATORADDRESS`](#sbv2-near-aggregator-remove-job-aggregatoraddress)
* [`sbv2 near aggregator set AGGREGATORADDRESS`](#sbv2-near-aggregator-set-aggregatoraddress)
* [`sbv2 near aggregator update AGGREGATORADDRESS`](#sbv2-near-aggregator-update-aggregatoraddress)
* [`sbv2 near crank create QUEUEADDRESS`](#sbv2-near-crank-create-queueaddress)
* [`sbv2 near crank list CRANKADDRESS`](#sbv2-near-crank-list-crankaddress)
* [`sbv2 near crank pop CRANKADDRESS`](#sbv2-near-crank-pop-crankaddress)
* [`sbv2 near crank push CRANKADDRESS`](#sbv2-near-crank-push-crankaddress)
* [`sbv2 near create aggregator QUEUEADDRESS`](#sbv2-near-create-aggregator-queueaddress)
* [`sbv2 near create aggregator permission AGGREGATORADDRESS`](#sbv2-near-create-aggregator-permission-aggregatoraddress)
* [`sbv2 near create crank QUEUEADDRESS`](#sbv2-near-create-crank-queueaddress)
* [`sbv2 near create escrow`](#sbv2-near-create-escrow)
* [`sbv2 near create job JOBDEFINITION`](#sbv2-near-create-job-jobdefinition)
* [`sbv2 near create oracle QUEUEADDRESS`](#sbv2-near-create-oracle-queueaddress)
* [`sbv2 near create oracle permission`](#sbv2-near-create-oracle-permission)
* [`sbv2 near create queue`](#sbv2-near-create-queue)
* [`sbv2 near escrow create`](#sbv2-near-escrow-create)
* [`sbv2 near escrow print`](#sbv2-near-escrow-print)
* [`sbv2 near fetch aggregators`](#sbv2-near-fetch-aggregators)
* [`sbv2 near fund aggregator AGGREGATORADDRESS`](#sbv2-near-fund-aggregator-aggregatoraddress)
* [`sbv2 near job create JOBDEFINITION`](#sbv2-near-job-create-jobdefinition)
* [`sbv2 near list queue QUEUEADDRESS`](#sbv2-near-list-queue-queueaddress)
* [`sbv2 near oracle create QUEUEADDRESS`](#sbv2-near-oracle-create-queueaddress)
* [`sbv2 near oracle escrow ORACLEADDRESS`](#sbv2-near-oracle-escrow-oracleaddress)
* [`sbv2 near oracle stake ORACLEADDRESS`](#sbv2-near-oracle-stake-oracleaddress)
* [`sbv2 near oracle unstake ORACLEADDRESS`](#sbv2-near-oracle-unstake-oracleaddress)
* [`sbv2 near oracle up ORACLEADDRESS`](#sbv2-near-oracle-up-oracleaddress)
* [`sbv2 near permission create`](#sbv2-near-permission-create)
* [`sbv2 near pop crank CRANKADDRESS`](#sbv2-near-pop-crank-crankaddress)
* [`sbv2 near print ACCOUNTTYPE ADDRESS`](#sbv2-near-print-accounttype-address)
* [`sbv2 near print escrow`](#sbv2-near-print-escrow)
* [`sbv2 near push crank CRANKADDRESS`](#sbv2-near-push-crank-crankaddress)
* [`sbv2 near queue aggregators QUEUEADDRESS`](#sbv2-near-queue-aggregators-queueaddress)
* [`sbv2 near queue create`](#sbv2-near-queue-create)
* [`sbv2 near queue feeds QUEUEADDRESS`](#sbv2-near-queue-feeds-queueaddress)
* [`sbv2 near queue list QUEUEADDRESS`](#sbv2-near-queue-list-queueaddress)
* [`sbv2 near queue set QUEUEADDRESS`](#sbv2-near-queue-set-queueaddress)
* [`sbv2 near set aggregator AGGREGATORADDRESS`](#sbv2-near-set-aggregator-aggregatoraddress)
* [`sbv2 near update aggregator AGGREGATORADDRESS`](#sbv2-near-update-aggregator-aggregatoraddress)
* [`sbv2 oracle logs NETWORK SEARCHSTRING`](#sbv2-oracle-logs-network-searchstring)
* [`sbv2 solana aggregator add history AGGREGATORKEY`](#sbv2-solana-aggregator-add-history-aggregatorkey)
* [`sbv2 solana aggregator add job AGGREGATORKEY`](#sbv2-solana-aggregator-add-job-aggregatorkey)
* [`sbv2 solana aggregator authority AGGREGATORKEY`](#sbv2-solana-aggregator-authority-aggregatorkey)
* [`sbv2 solana aggregator close AGGREGATORKEY`](#sbv2-solana-aggregator-close-aggregatorkey)
* [`sbv2 solana aggregator create QUEUEKEY`](#sbv2-solana-aggregator-create-queuekey)
* [`sbv2 solana aggregator create json DEFINITIONFILE`](#sbv2-solana-aggregator-create-json-definitionfile)
* [`sbv2 solana aggregator deposit AGGREGATORKEY`](#sbv2-solana-aggregator-deposit-aggregatorkey)
* [`sbv2 solana aggregator extend AGGREGATORKEY`](#sbv2-solana-aggregator-extend-aggregatorkey)
* [`sbv2 solana aggregator fund AGGREGATORKEY`](#sbv2-solana-aggregator-fund-aggregatorkey)
* [`sbv2 solana aggregator history AGGREGATORKEY`](#sbv2-solana-aggregator-history-aggregatorkey)
* [`sbv2 solana aggregator lease set AGGREGATORKEY`](#sbv2-solana-aggregator-lease-set-aggregatorkey)
* [`sbv2 solana aggregator list AUTHORITYKEY`](#sbv2-solana-aggregator-list-authoritykey)
* [`sbv2 solana aggregator lock AGGREGATORKEY`](#sbv2-solana-aggregator-lock-aggregatorkey)
* [`sbv2 solana aggregator metrics AGGREGATORKEY`](#sbv2-solana-aggregator-metrics-aggregatorkey)
* [`sbv2 solana aggregator open-round AGGREGATORKEY`](#sbv2-solana-aggregator-open-round-aggregatorkey)
* [`sbv2 solana aggregator permission create AGGREGATORKEY`](#sbv2-solana-aggregator-permission-create-aggregatorkey)
* [`sbv2 solana aggregator print AGGREGATORKEY`](#sbv2-solana-aggregator-print-aggregatorkey)
* [`sbv2 solana aggregator remove job AGGREGATORKEY JOBKEY`](#sbv2-solana-aggregator-remove-job-aggregatorkey-jobkey)
* [`sbv2 solana aggregator set AGGREGATORKEY`](#sbv2-solana-aggregator-set-aggregatorkey)
* [`sbv2 solana aggregator transfer AGGREGATORKEY`](#sbv2-solana-aggregator-transfer-aggregatorkey)
* [`sbv2 solana aggregator update AGGREGATORKEY`](#sbv2-solana-aggregator-update-aggregatorkey)
* [`sbv2 solana aggregator watch AGGREGATORKEY`](#sbv2-solana-aggregator-watch-aggregatorkey)
* [`sbv2 solana aggregator withdraw AGGREGATORKEY`](#sbv2-solana-aggregator-withdraw-aggregatorkey)
* [`sbv2 solana anchor test`](#sbv2-solana-anchor-test)
* [`sbv2 solana buffer create QUEUEKEY`](#sbv2-solana-buffer-create-queuekey)
* [`sbv2 solana buffer open-round BUFFERRELAYERKEY`](#sbv2-solana-buffer-open-round-bufferrelayerkey)
* [`sbv2 solana buffer update BUFFERRELAYERKEY`](#sbv2-solana-buffer-update-bufferrelayerkey)
* [`sbv2 solana crank create QUEUEKEY`](#sbv2-solana-crank-create-queuekey)
* [`sbv2 solana crank events AGGREGATORKEY`](#sbv2-solana-crank-events-aggregatorkey)
* [`sbv2 solana crank pop CRANKKEY`](#sbv2-solana-crank-pop-crankkey)
* [`sbv2 solana crank print CRANKKEY`](#sbv2-solana-crank-print-crankkey)
* [`sbv2 solana crank push AGGREGATORKEY`](#sbv2-solana-crank-push-aggregatorkey)
* [`sbv2 solana crank reset AGGREGATORKEY`](#sbv2-solana-crank-reset-aggregatorkey)
* [`sbv2 solana job create`](#sbv2-solana-job-create)
* [`sbv2 solana job print JOBKEY`](#sbv2-solana-job-print-jobkey)
* [`sbv2 solana json create aggregator DEFINITIONFILE`](#sbv2-solana-json-create-aggregator-definitionfile)
* [`sbv2 solana lease create AGGREGATORKEY`](#sbv2-solana-lease-create-aggregatorkey)
* [`sbv2 solana lease extend AGGREGATORKEY`](#sbv2-solana-lease-extend-aggregatorkey)
* [`sbv2 solana lease print LEASEKEY`](#sbv2-solana-lease-print-leasekey)
* [`sbv2 solana lease set AGGREGATORKEY`](#sbv2-solana-lease-set-aggregatorkey)
* [`sbv2 solana lease withdraw AGGREGATORKEY`](#sbv2-solana-lease-withdraw-aggregatorkey)
* [`sbv2 solana network create`](#sbv2-solana-network-create)
* [`sbv2 solana network save`](#sbv2-solana-network-save)
* [`sbv2 solana network start`](#sbv2-solana-network-start)
* [`sbv2 solana oracle create QUEUEKEY`](#sbv2-solana-oracle-create-queuekey)
* [`sbv2 solana oracle print ORACLEKEY`](#sbv2-solana-oracle-print-oraclekey)
* [`sbv2 solana oracle up`](#sbv2-solana-oracle-up)
* [`sbv2 solana oracle withdraw ORACLEKEY`](#sbv2-solana-oracle-withdraw-oraclekey)
* [`sbv2 solana permission create`](#sbv2-solana-permission-create)
* [`sbv2 solana permission grant PERMISSIONKEY`](#sbv2-solana-permission-grant-permissionkey)
* [`sbv2 solana permission print PERMISSIONKEY`](#sbv2-solana-permission-print-permissionkey)
* [`sbv2 solana permission revoke PERMISSIONKEY`](#sbv2-solana-permission-revoke-permissionkey)
* [`sbv2 solana print PUBKEY`](#sbv2-solana-print-pubkey)
* [`sbv2 solana queue create`](#sbv2-solana-queue-create)
* [`sbv2 solana queue print QUEUEKEY`](#sbv2-solana-queue-print-queuekey)
* [`sbv2 solana queue set QUEUEKEY`](#sbv2-solana-queue-set-queuekey)
* [`sbv2 solana vrf open-round VRFKEY`](#sbv2-solana-vrf-open-round-vrfkey)
* [`sbv2 solana vrf print VRFKEY`](#sbv2-solana-vrf-print-vrfkey)
* [`sbv2 solana vrf request VRFKEY`](#sbv2-solana-vrf-request-vrfkey)
* [`sbv2 solana vrf update VRFKEY`](#sbv2-solana-vrf-update-vrfkey)
* [`sbv2 update [CHANNEL]`](#sbv2-update-channel)
* [`sbv2 version`](#sbv2-version)

## `sbv2 anchor test`

run anchor test and a switchboard oracle in parallel

```
USAGE
  $ sbv2 anchor test [-h] [-v] [-s] [--mainnetBeta | --cluster localnet|devnet] [-u <value>] [--mainnetRpcUrl
    <value>] [--programId <value>] [-d <value>] [--oracleKey <value>] [-k <value>] [--releaseChannel testnet|mainnet |
    --nodeImage <value>] [-t <value>] [--detach] [--testValidatorArgs <value>]

FLAGS
  -d, --switchboardDir=<value>  directory with switchboard.env to load a switchboard environment
  -h, --help                    Show CLI help.
  -k, --keypair=<value>         keypair that will pay for onchain transactions. defaults to new account authority if no
                                alternate authority provided
  -s, --silent                  suppress docker logging
  -t, --timeout=<value>         [default: 120] number of seconds before ending the docker process
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --cluster=<option>            [default: localnet] cluster
                                <options: localnet|devnet>
  --detach                      keep the localnet rpc running
  --mainnetBeta                 WARNING: use mainnet-beta solana cluster
  --mainnetRpcUrl=<value>       [default: https://api.mainnet-beta.solana.com/] Solana mainnet RPC URL to use for the
                                oracle task runner
  --nodeImage=<value>           [default: dev-v2-RC_04_11_23_17_12] public key of the oracle to start-up
  --oracleKey=<value>           public key of the oracle to start-up
  --programId=<value>           alternative Switchboard program ID to interact with
  --releaseChannel=<option>     [default: testnet] the oracle release channel
                                <options: testnet|mainnet>
  --testValidatorArgs=<value>   additional args passed to the local solana validator

DESCRIPTION
  run anchor test and a switchboard oracle in parallel

ALIASES
  $ sbv2 anchor test
```

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
  --networkId=<option>  [default: testnet] Aptos network to connect to
                        <options: devnet|testnet|mainnet>
  --programId=<value>   Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  request an airdrop
```

## `sbv2 aptos aggregator add job AGGREGATORHEXSTRING`

add a job to an aggregator

```
USAGE
  $ sbv2 aptos aggregator add job AGGREGATORHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
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
  --networkId=<option>     [default: testnet] Aptos network to connect to
                           <options: devnet|testnet|mainnet>
  --profileName=<value>    [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                           load. If none provided, default will be used
  --programId=<value>      Switchboard programId on the selected Aptos network

DESCRIPTION
  add a job to an aggregator

ALIASES
  $ sbv2 aptos aggregator job add
```

## `sbv2 aptos aggregator create QUEUEHEXSTRING`

create an aptos aggregator for a given queue

```
USAGE
  $ sbv2 aptos aggregator create QUEUEHEXSTRING --keypair <value> --updateInterval <value> [-h] [-v] [-s] [--networkId
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
  --networkId=<option>         [default: testnet] Aptos network to connect to
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

## `sbv2 aptos aggregator job add AGGREGATORHEXSTRING`

add a job to an aggregator

```
USAGE
  $ sbv2 aptos aggregator job add AGGREGATORHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
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
  --networkId=<option>     [default: testnet] Aptos network to connect to
                           <options: devnet|testnet|mainnet>
  --profileName=<value>    [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                           load. If none provided, default will be used
  --programId=<value>      Switchboard programId on the selected Aptos network

DESCRIPTION
  add a job to an aggregator

ALIASES
  $ sbv2 aptos aggregator job add
```

## `sbv2 aptos aggregator update AGGREGATORHEXSTRING`

request a new value on-chain for an aggregator

```
USAGE
  $ sbv2 aptos aggregator update AGGREGATORHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
    [--programId <value>] [-u <value>] [--profileName <value>]

ARGUMENTS
  AGGREGATORHEXSTRING  HexString address of the aggregator

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --keypair=<value>      (required) Path to AptosAccount keypair or config.yaml file
  --networkId=<option>   [default: testnet] Aptos network to connect to
                         <options: devnet|testnet|mainnet>
  --profileName=<value>  [default: default] If --keypair is pointing to a yaml file, provide an optional profile to
                         load. If none provided, default will be used
  --programId=<value>    Switchboard programId on the selected Aptos network

DESCRIPTION
  request a new value on-chain for an aggregator

ALIASES
  $ sbv2 aptos update aggregator
```

## `sbv2 aptos crank create QUEUEHEXSTRING`

create a new crank

```
USAGE
  $ sbv2 aptos crank create QUEUEHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
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
  --networkId=<option>   [default: testnet] Aptos network to connect to
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

## `sbv2 aptos crank list CRANKHEXSTRING`

sort the crank

```
USAGE
  $ sbv2 aptos crank list CRANKHEXSTRING [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>] [-u
    <value>] [--json]

ARGUMENTS
  CRANKHEXSTRING  HexString address of the crank

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --networkId=<option>  [default: testnet] Aptos network to connect to
                        <options: devnet|testnet|mainnet>
  --programId=<value>   Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  sort the crank

ALIASES
  $ sbv2 aptos list crank
```

## `sbv2 aptos crank pop CRANKHEXSTRING`

pop the crank

```
USAGE
  $ sbv2 aptos crank pop CRANKHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
    [--programId <value>] [-u <value>] [--profileName <value>] [--json]

ARGUMENTS
  CRANKHEXSTRING  HexString address of the crank

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --keypair=<value>      (required) Path to AptosAccount keypair or config.yaml file
  --networkId=<option>   [default: testnet] Aptos network to connect to
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

## `sbv2 aptos crank push CRANKHEXSTRING`

push an aggregator onto the crank

```
USAGE
  $ sbv2 aptos crank push CRANKHEXSTRING --keypair <value> -a <value> [-h] [-v] [-s] [--networkId
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
  --networkId=<option>               [default: testnet] Aptos network to connect to
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

## `sbv2 aptos create aggregator QUEUEHEXSTRING`

create an aptos aggregator for a given queue

```
USAGE
  $ sbv2 aptos create aggregator QUEUEHEXSTRING --keypair <value> --updateInterval <value> [-h] [-v] [-s] [--networkId
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
  --networkId=<option>         [default: testnet] Aptos network to connect to
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

## `sbv2 aptos create crank QUEUEHEXSTRING`

create a new crank

```
USAGE
  $ sbv2 aptos create crank QUEUEHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
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
  --networkId=<option>   [default: testnet] Aptos network to connect to
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
  $ sbv2 aptos create job QUEUEHEXSTRING JOBDEFINITION --keypair <value> [-h] [-v] [-s] [--networkId
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
  --networkId=<option>     [default: testnet] Aptos network to connect to
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

## `sbv2 aptos create oracle QUEUEHEXSTRING`

create a oracle for a given queue

```
USAGE
  $ sbv2 aptos create oracle QUEUEHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
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
  --networkId=<option>     [default: testnet] Aptos network to connect to
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
  --networkId=<option>     [default: testnet] Aptos network to connect to
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
  $ sbv2 aptos job create QUEUEHEXSTRING JOBDEFINITION --keypair <value> [-h] [-v] [-s] [--networkId
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
  --networkId=<option>     [default: testnet] Aptos network to connect to
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

## `sbv2 aptos list crank CRANKHEXSTRING`

sort the crank

```
USAGE
  $ sbv2 aptos list crank CRANKHEXSTRING [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>] [-u
    <value>] [--json]

ARGUMENTS
  CRANKHEXSTRING  HexString address of the crank

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --networkId=<option>  [default: testnet] Aptos network to connect to
                        <options: devnet|testnet|mainnet>
  --programId=<value>   Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  sort the crank

ALIASES
  $ sbv2 aptos list crank
```

## `sbv2 aptos oracle create QUEUEHEXSTRING`

create a oracle for a given queue

```
USAGE
  $ sbv2 aptos oracle create QUEUEHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
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
  --networkId=<option>     [default: testnet] Aptos network to connect to
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

## `sbv2 aptos oracle metrics ORACLEHEXSTRING`

list oracle metrics

```
USAGE
  $ sbv2 aptos oracle metrics ORACLEHEXSTRING [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>]
    [-u <value>] [--json]

ARGUMENTS
  ORACLEHEXSTRING  HexString address of the oracle

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --networkId=<option>  [default: testnet] Aptos network to connect to
                        <options: devnet|testnet|mainnet>
  --programId=<value>   Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  list oracle metrics
```

## `sbv2 aptos oracle up ORACLEHEXSTRING`

start an aptos docker oracle

```
USAGE
  $ sbv2 aptos oracle up ORACLEHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
    [--programId <value>] [-u <value>] [--profileName <value>] [-d <value>] [--releaseChannel testnet|mainnet |
    --nodeImage <value>]

ARGUMENTS
  ORACLEHEXSTRING  HexString address of the oracle

FLAGS
  -d, --switchboardDir=<value>  directory with switchboard.env to load a switchboard environment
  -h, --help                    Show CLI help.
  -s, --silent                  suppress docker logging
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --keypair=<value>             (required) Path to AptosAccount keypair or config.yaml file
  --networkId=<option>          [default: testnet] Aptos network to connect to
                                <options: devnet|testnet|mainnet>
  --nodeImage=<value>           [default: dev-v2-RC_04_11_23_17_12] public key of the oracle to start-up
  --profileName=<value>         [default: default] If --keypair is pointing to a yaml file, provide an optional profile
                                to load. If none provided, default will be used
  --programId=<value>           Switchboard programId on the selected Aptos network
  --releaseChannel=<option>     [default: testnet] the oracle release channel
                                <options: testnet|mainnet>

DESCRIPTION
  start an aptos docker oracle
```

## `sbv2 aptos permission create GRANTER`

create a new permission

```
USAGE
  $ sbv2 aptos permission create GRANTER --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId
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
  --networkId=<option>   [default: testnet] Aptos network to connect to
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

## `sbv2 aptos permission set GRANTER`

create a new permission

```
USAGE
  $ sbv2 aptos permission set GRANTER --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId
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
  --networkId=<option>   [default: testnet] Aptos network to connect to
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

## `sbv2 aptos pop crank CRANKHEXSTRING`

pop the crank

```
USAGE
  $ sbv2 aptos pop crank CRANKHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
    [--programId <value>] [-u <value>] [--profileName <value>] [--json]

ARGUMENTS
  CRANKHEXSTRING  HexString address of the crank

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --keypair=<value>      (required) Path to AptosAccount keypair or config.yaml file
  --networkId=<option>   [default: testnet] Aptos network to connect to
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
  $ sbv2 aptos print ACCOUNTTYPE ADDRESS [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId
    <value>] [-u <value>] [--json]

ARGUMENTS
  ACCOUNTTYPE  (queue|aggregator|crank|oracle|permission|lease|job|state) account type to print
  ADDRESS      HexString address of the account to print

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --networkId=<option>  [default: testnet] Aptos network to connect to
                        <options: devnet|testnet|mainnet>
  --programId=<value>   Switchboard programId on the selected Aptos network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print an aptos account

ALIASES
  $ sbv2 aptos print
```

## `sbv2 aptos push crank CRANKHEXSTRING`

push an aggregator onto the crank

```
USAGE
  $ sbv2 aptos push crank CRANKHEXSTRING --keypair <value> -a <value> [-h] [-v] [-s] [--networkId
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
  --networkId=<option>               [default: testnet] Aptos network to connect to
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
  --networkId=<option>     [default: testnet] Aptos network to connect to
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

## `sbv2 aptos update aggregator AGGREGATORHEXSTRING`

request a new value on-chain for an aggregator

```
USAGE
  $ sbv2 aptos update aggregator AGGREGATORHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
    [--programId <value>] [-u <value>] [--profileName <value>]

ARGUMENTS
  AGGREGATORHEXSTRING  HexString address of the aggregator

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --keypair=<value>      (required) Path to AptosAccount keypair or config.yaml file
  --networkId=<option>   [default: testnet] Aptos network to connect to
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
  $ sbv2 config set CHAIN NETWORK PARAMETER [VALUE] [-h] [-v] [-s] [-r]

ARGUMENTS
  CHAIN      chain to set a config parameter
  NETWORK    network of chain to set parameter
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

## `sbv2 evm aggregator create QUEUEADDRESS`

create an aggregator for a given queue

```
USAGE
  $ sbv2 evm aggregator create QUEUEADDRESS --account <value> --updateInterval <value> [-h] [-v] [-s] [--chain
    coredao|arbitrum | --coredao | --arbitrum] [--network mainnet|testnet | --mainnet | --testnet] [-u <value>]
    [--programId <value>] [--json] [-a <value>] [--name <value>] [--forceReportPeriod <value>] [--batchSize <value>]
    [--minJobs <value>] [--minOracles <value>] [--varianceThreshold <value>] [-j <value>] [--enableHistory]
    [--queueAuthority <value> --enable] [--fundAmount <value>]

ARGUMENTS
  QUEUEADDRESS  address of the oracle queue

FLAGS
  -a, --authority=<value>      alternate account that will be the authority for the aggregator
  -h, --help                   Show CLI help.
  -j, --job=<value>...         filesystem path to job definition file
  -s, --silent                 suppress cli prompts
  -u, --rpcUrl=<value>         alternate RPC url
  -v, --verbose                log everything
  --account=<value>            (required) Path to file containing the private key for the payer account
  --arbitrum                   use the arbitrum chain
  --batchSize=<value>          [default: 1] number of oracles requested for each open round call
  --chain=<option>             the evm chain to interact with
                               <options: coredao|arbitrum>
  --coredao                    use the coredao chain
  --enable                     enable the oracles heartbeat permissions
  --enableHistory              enable history for the feed
  --forceReportPeriod=<value>  Number of seconds for which, even if the variance threshold is not passed, accept new
                               responses from oracles.
  --fundAmount=<value>         [default: 0.0] fund the aggregator escrow with the native token, used to reward oracles
                               for publishing updates
  --mainnet                    use the mainnet network
  --minJobs=<value>            [default: 1] number of jobs that must respond before an oracle responds
  --minOracles=<value>         [default: 1] number of oracles that must respond before a value is accepted on-chain
  --name=<value>               name of the aggregator for easier identification
  --network=<option>           the EVM network to connect to
                               <options: mainnet|testnet>
  --programId=<value>          alternative Switchboard program ID to interact with
  --queueAuthority=<value>     override the default signer when setting oracle permissions
  --testnet                    use the testnet network
  --updateInterval=<value>     (required) set an aggregator's minimum update delay
  --varianceThreshold=<value>  [default: 0] percentage change between a previous accepted result and the next round
                               before an oracle reports a value on-chain. Used to conserve lease cost during low
                               volatility

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create an aggregator for a given queue

ALIASES
  $ sbv2 evm create aggregator

EXAMPLES
  $  sbv2 evm aggregator create --arbitrum --testnet --account ~/.config/arbitrum/testnet.txt 0xB1c6E716ACae35200Dc8278A63a424f58417954c --name 'my feed' --batchSize 1 --updateInterval 90 --fundAmount 0.25 --job my_job.json
```

## `sbv2 evm aggregator print AGGREGATORADDRESS`

print an aggregator

```
USAGE
  $ sbv2 evm aggregator print AGGREGATORADDRESS [-h] [-v] [-s] [--chain coredao|arbitrum | --coredao | --arbitrum]
    [--network mainnet|testnet | --mainnet | --testnet] [-u <value>] [--programId <value>] [--json] [--jobs] [--results]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator account

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --arbitrum            use the arbitrum chain
  --chain=<option>      the evm chain to interact with
                        <options: coredao|arbitrum>
  --coredao             use the coredao chain
  --jobs                print the job definitions for the aggregator
  --mainnet             use the mainnet network
  --network=<option>    the EVM network to connect to
                        <options: mainnet|testnet>
  --programId=<value>   alternative Switchboard program ID to interact with
  --results             print the current results for the aggregator
  --testnet             use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print an aggregator

EXAMPLES
  $ sbv2 evm aggregator print 0x4Aa86c11Ad9493c84fd6C6469F6FA494272AdB4a --arbitrum --mainnet

  $ sbv2 evm aggregator print 0x7892F7326291F3Bc17680956B476701DF76d52Da --coredao --testnet --jobs
```

## `sbv2 evm aggregator set AGGREGATORADDRESS`

set an aggregators config

```
USAGE
  $ sbv2 evm aggregator set AGGREGATORADDRESS --account <value> --updateInterval <value> [-h] [-v] [-s] [--chain
    coredao|arbitrum | --coredao | --arbitrum] [--network mainnet|testnet | --mainnet | --testnet] [-u <value>]
    [--programId <value>] [--json] [-a <value>] [--name <value>] [--forceReportPeriod <value>] [--batchSize <value>]
    [--minJobs <value>] [--minOracles <value>] [--varianceThreshold <value>] [-j <value>] [--removeJob <value>]
    [--enableHistory]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator

FLAGS
  -a, --authority=<value>      alternate account that will be the authority for the aggregator
  -h, --help                   Show CLI help.
  -j, --job=<value>...         filesystem path to job definition file
  -s, --silent                 suppress cli prompts
  -u, --rpcUrl=<value>         alternate RPC url
  -v, --verbose                log everything
  --account=<value>            (required) Path to file containing the private key for the payer account
  --arbitrum                   use the arbitrum chain
  --batchSize=<value>          [default: 1] number of oracles requested for each open round call
  --chain=<option>             the evm chain to interact with
                               <options: coredao|arbitrum>
  --coredao                    use the coredao chain
  --enableHistory              enable history for the feed
  --forceReportPeriod=<value>  Number of seconds for which, even if the variance threshold is not passed, accept new
                               responses from oracles.
  --mainnet                    use the mainnet network
  --minJobs=<value>            [default: 1] number of jobs that must respond before an oracle responds
  --minOracles=<value>         [default: 1] number of oracles that must respond before a value is accepted on-chain
  --name=<value>               name of the aggregator for easier identification
  --network=<option>           the EVM network to connect to
                               <options: mainnet|testnet>
  --programId=<value>          alternative Switchboard program ID to interact with
  --removeJob=<value>...       job definitions to remove from the hash
  --testnet                    use the testnet network
  --updateInterval=<value>     (required) set an aggregator's minimum update delay
  --varianceThreshold=<value>  [default: 0] percentage change between a previous accepted result and the next round
                               before an oracle reports a value on-chain. Used to conserve lease cost during low
                               volatility

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  set an aggregators config

ALIASES
  $ sbv2 evm set aggregator

EXAMPLES
  $  sbv2 evm aggregator set --arbitrum --testnet --account ~/.config/arbitrum/testnet.txt 0xB1c6E716ACae35200Dc8278A63a424f58417954c --name 'my updated feed' --batchSize 2 --job ./my_new_job.json
```

## `sbv2 evm create aggregator QUEUEADDRESS`

create an aggregator for a given queue

```
USAGE
  $ sbv2 evm create aggregator QUEUEADDRESS --account <value> --updateInterval <value> [-h] [-v] [-s] [--chain
    coredao|arbitrum | --coredao | --arbitrum] [--network mainnet|testnet | --mainnet | --testnet] [-u <value>]
    [--programId <value>] [--json] [-a <value>] [--name <value>] [--forceReportPeriod <value>] [--batchSize <value>]
    [--minJobs <value>] [--minOracles <value>] [--varianceThreshold <value>] [-j <value>] [--enableHistory]
    [--queueAuthority <value> --enable] [--fundAmount <value>]

ARGUMENTS
  QUEUEADDRESS  address of the oracle queue

FLAGS
  -a, --authority=<value>      alternate account that will be the authority for the aggregator
  -h, --help                   Show CLI help.
  -j, --job=<value>...         filesystem path to job definition file
  -s, --silent                 suppress cli prompts
  -u, --rpcUrl=<value>         alternate RPC url
  -v, --verbose                log everything
  --account=<value>            (required) Path to file containing the private key for the payer account
  --arbitrum                   use the arbitrum chain
  --batchSize=<value>          [default: 1] number of oracles requested for each open round call
  --chain=<option>             the evm chain to interact with
                               <options: coredao|arbitrum>
  --coredao                    use the coredao chain
  --enable                     enable the oracles heartbeat permissions
  --enableHistory              enable history for the feed
  --forceReportPeriod=<value>  Number of seconds for which, even if the variance threshold is not passed, accept new
                               responses from oracles.
  --fundAmount=<value>         [default: 0.0] fund the aggregator escrow with the native token, used to reward oracles
                               for publishing updates
  --mainnet                    use the mainnet network
  --minJobs=<value>            [default: 1] number of jobs that must respond before an oracle responds
  --minOracles=<value>         [default: 1] number of oracles that must respond before a value is accepted on-chain
  --name=<value>               name of the aggregator for easier identification
  --network=<option>           the EVM network to connect to
                               <options: mainnet|testnet>
  --programId=<value>          alternative Switchboard program ID to interact with
  --queueAuthority=<value>     override the default signer when setting oracle permissions
  --testnet                    use the testnet network
  --updateInterval=<value>     (required) set an aggregator's minimum update delay
  --varianceThreshold=<value>  [default: 0] percentage change between a previous accepted result and the next round
                               before an oracle reports a value on-chain. Used to conserve lease cost during low
                               volatility

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create an aggregator for a given queue

ALIASES
  $ sbv2 evm create aggregator

EXAMPLES
  $  sbv2 evm aggregator create --arbitrum --testnet --account ~/.config/arbitrum/testnet.txt 0xB1c6E716ACae35200Dc8278A63a424f58417954c --name 'my feed' --batchSize 1 --updateInterval 90 --fundAmount 0.25 --job my_job.json
```

## `sbv2 evm create jobs`

create the hash for a set of jobs

```
USAGE
  $ sbv2 evm create jobs [-h] [-v] [-s] [--chain coredao|arbitrum | --coredao | --arbitrum] [--network
    mainnet|testnet | --mainnet | --testnet] [-u <value>] [--programId <value>] [--json] [--hash <value>] [-j <value>]
    [--removeJob <value>]

FLAGS
  -h, --help              Show CLI help.
  -j, --job=<value>...    filesystem path to job definition file
  -s, --silent            suppress cli prompts
  -u, --rpcUrl=<value>    alternate RPC url
  -v, --verbose           log everything
  --arbitrum              use the arbitrum chain
  --chain=<option>        the evm chain to interact with
                          <options: coredao|arbitrum>
  --coredao               use the coredao chain
  --hash=<value>          existing ipfs hash to modify
  --mainnet               use the mainnet network
  --network=<option>      the EVM network to connect to
                          <options: mainnet|testnet>
  --programId=<value>     alternative Switchboard program ID to interact with
  --removeJob=<value>...  job definitions to remove from the hash
  --testnet               use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create the hash for a set of jobs

ALIASES
  $ sbv2 evm create jobs

EXAMPLES
  $ sbv2 evm job create --arbitrum --testnet --job my_job.json

  $ sbv2 evm job create --arbitrum --testnet --hash bafkreihvxeb7rwyrilzmouid2onuwajkkng4ykdwrr6vaxjgg3zv3cghdy --removeJob my_job.json
```

## `sbv2 evm create oracle QUEUEADDRESS`

create a new oracle

```
USAGE
  $ sbv2 evm create oracle QUEUEADDRESS --account <value> [-h] [-v] [-s] [--chain coredao|arbitrum | --coredao |
    --arbitrum] [--network mainnet|testnet | --mainnet | --testnet] [-u <value>] [--programId <value>] [--json] [-a
    <value>] [--name <value>] [--queueAuthority <value> --enable]

ARGUMENTS
  QUEUEADDRESS  address of the oracle queue to create a new oracle for

FLAGS
  -a, --authority=<value>   alternate account that will be the authority for the oracle
  -h, --help                Show CLI help.
  -s, --silent              suppress cli prompts
  -u, --rpcUrl=<value>      alternate RPC url
  -v, --verbose             log everything
  --account=<value>         (required) Path to file containing the private key for the payer account
  --arbitrum                use the arbitrum chain
  --chain=<option>          the evm chain to interact with
                            <options: coredao|arbitrum>
  --coredao                 use the coredao chain
  --enable                  enable the oracles heartbeat permissions
  --mainnet                 use the mainnet network
  --name=<value>            name of the oracle for easier identification
  --network=<option>        the EVM network to connect to
                            <options: mainnet|testnet>
  --programId=<value>       alternative Switchboard program ID to interact with
  --queueAuthority=<value>  override the default signer when setting oracle permissions
  --testnet                 use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new oracle

ALIASES
  $ sbv2 evm create oracle

EXAMPLES
  $ sbv2 evm oracle create 0xB1c6E716ACae35200Dc8278A63a424f58417954c --arbitrum --testnet --account ~/.config/arbitrum/testnet.txt --name 'my oracle' --enable
```

## `sbv2 evm create queue`

create a new oracle queue

```
USAGE
  $ sbv2 evm create queue --account <value> [-h] [-v] [-s] [--chain coredao|arbitrum | --coredao | --arbitrum]
    [--network mainnet|testnet | --mainnet | --testnet] [-u <value>] [--programId <value>] [--json] [-a <value>] [--name
    <value>] [-r <value>] [--oracleTimeout <value>] [--queueSize <value>] [--unpermissionedFeeds]

FLAGS
  -a, --authority=<value>  alternate account that will be the authority for the queue
  -h, --help               Show CLI help.
  -r, --reward=<value>     oracle rewards for successfully responding to an update request
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --account=<value>        (required) Path to file containing the private key for the payer account
  --arbitrum               use the arbitrum chain
  --chain=<option>         the evm chain to interact with
                           <options: coredao|arbitrum>
  --coredao                use the coredao chain
  --mainnet                use the mainnet network
  --name=<value>           name of the queue for easier identification
  --network=<option>       the EVM network to connect to
                           <options: mainnet|testnet>
  --oracleTimeout=<value>  [default: 180] number of oracles to add to the queue
  --programId=<value>      alternative Switchboard program ID to interact with
  --queueSize=<value>      [default: 100] maximum number of oracles the queue can support
  --testnet                use the testnet network
  --unpermissionedFeeds    permit unpermissioned feeds

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new oracle queue

ALIASES
  $ sbv2 evm create queue

EXAMPLES
  $ sbv2 evm queue create --arbitrum --testnet --account ~/.config/arbitrum/testnet.txt --name 'my queue' --oracleTimeout 3600 --queueSize 8
```

## `sbv2 evm job create`

create the hash for a set of jobs

```
USAGE
  $ sbv2 evm job create [-h] [-v] [-s] [--chain coredao|arbitrum | --coredao | --arbitrum] [--network
    mainnet|testnet | --mainnet | --testnet] [-u <value>] [--programId <value>] [--json] [--hash <value>] [-j <value>]
    [--removeJob <value>]

FLAGS
  -h, --help              Show CLI help.
  -j, --job=<value>...    filesystem path to job definition file
  -s, --silent            suppress cli prompts
  -u, --rpcUrl=<value>    alternate RPC url
  -v, --verbose           log everything
  --arbitrum              use the arbitrum chain
  --chain=<option>        the evm chain to interact with
                          <options: coredao|arbitrum>
  --coredao               use the coredao chain
  --hash=<value>          existing ipfs hash to modify
  --mainnet               use the mainnet network
  --network=<option>      the EVM network to connect to
                          <options: mainnet|testnet>
  --programId=<value>     alternative Switchboard program ID to interact with
  --removeJob=<value>...  job definitions to remove from the hash
  --testnet               use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create the hash for a set of jobs

ALIASES
  $ sbv2 evm create jobs

EXAMPLES
  $ sbv2 evm job create --arbitrum --testnet --job my_job.json

  $ sbv2 evm job create --arbitrum --testnet --hash bafkreihvxeb7rwyrilzmouid2onuwajkkng4ykdwrr6vaxjgg3zv3cghdy --removeJob my_job.json
```

## `sbv2 evm job print JOBHASH`

print an IPFS job hash

```
USAGE
  $ sbv2 evm job print JOBHASH [-h] [-v] [-s] [--chain coredao|arbitrum | --coredao | --arbitrum] [--network
    mainnet|testnet | --mainnet | --testnet] [-u <value>] [--programId <value>] [--json]

ARGUMENTS
  JOBHASH  IPFS hash of the job definitions

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --arbitrum            use the arbitrum chain
  --chain=<option>      the evm chain to interact with
                        <options: coredao|arbitrum>
  --coredao             use the coredao chain
  --mainnet             use the mainnet network
  --network=<option>    the EVM network to connect to
                        <options: mainnet|testnet>
  --programId=<value>   alternative Switchboard program ID to interact with
  --testnet             use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print an IPFS job hash

EXAMPLES
  $ sbv2 evm job print bafkreih4ots3go2ytcvp74cvshnmlikw2mtm47pugpnlzuf36vr6emoov4 --arbitrum --testnet
```

## `sbv2 evm oracle create QUEUEADDRESS`

create a new oracle

```
USAGE
  $ sbv2 evm oracle create QUEUEADDRESS --account <value> [-h] [-v] [-s] [--chain coredao|arbitrum | --coredao |
    --arbitrum] [--network mainnet|testnet | --mainnet | --testnet] [-u <value>] [--programId <value>] [--json] [-a
    <value>] [--name <value>] [--queueAuthority <value> --enable]

ARGUMENTS
  QUEUEADDRESS  address of the oracle queue to create a new oracle for

FLAGS
  -a, --authority=<value>   alternate account that will be the authority for the oracle
  -h, --help                Show CLI help.
  -s, --silent              suppress cli prompts
  -u, --rpcUrl=<value>      alternate RPC url
  -v, --verbose             log everything
  --account=<value>         (required) Path to file containing the private key for the payer account
  --arbitrum                use the arbitrum chain
  --chain=<option>          the evm chain to interact with
                            <options: coredao|arbitrum>
  --coredao                 use the coredao chain
  --enable                  enable the oracles heartbeat permissions
  --mainnet                 use the mainnet network
  --name=<value>            name of the oracle for easier identification
  --network=<option>        the EVM network to connect to
                            <options: mainnet|testnet>
  --programId=<value>       alternative Switchboard program ID to interact with
  --queueAuthority=<value>  override the default signer when setting oracle permissions
  --testnet                 use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new oracle

ALIASES
  $ sbv2 evm create oracle

EXAMPLES
  $ sbv2 evm oracle create 0xB1c6E716ACae35200Dc8278A63a424f58417954c --arbitrum --testnet --account ~/.config/arbitrum/testnet.txt --name 'my oracle' --enable
```

## `sbv2 evm oracle heartbeat ORACLEADDRESS`

heartbeat on-chain and signal readiness

```
USAGE
  $ sbv2 evm oracle heartbeat ORACLEADDRESS --account <value> [-h] [-v] [-s] [--chain coredao|arbitrum | --coredao |
    --arbitrum] [--network mainnet|testnet | --mainnet | --testnet] [-u <value>] [--programId <value>] [--json] [-a
    <value>]

ARGUMENTS
  ORACLEADDRESS  address of the oracle

FLAGS
  -a, --authority=<value>  alternate account that is the authority for the oracle
  -h, --help               Show CLI help.
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --account=<value>        (required) Path to file containing the private key for the payer account
  --arbitrum               use the arbitrum chain
  --chain=<option>         the evm chain to interact with
                           <options: coredao|arbitrum>
  --coredao                use the coredao chain
  --mainnet                use the mainnet network
  --network=<option>       the EVM network to connect to
                           <options: mainnet|testnet>
  --programId=<value>      alternative Switchboard program ID to interact with
  --testnet                use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  heartbeat on-chain and signal readiness

EXAMPLES
  $ sbv2 evm oracle heartbeat 0x5eeFE1CA9D1093a59aC9278cC6D296A4eeDd6385 --arbitrum --testnet --account ~/.config/arbitrum/testnet.txt
```

## `sbv2 evm oracle print ORACLEADDRESS`

print an oracle

```
USAGE
  $ sbv2 evm oracle print ORACLEADDRESS [-h] [-v] [-s] [--chain coredao|arbitrum | --coredao | --arbitrum] [--network
    mainnet|testnet | --mainnet | --testnet] [-u <value>] [--programId <value>] [--json]

ARGUMENTS
  ORACLEADDRESS  address of the oracle account

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --arbitrum            use the arbitrum chain
  --chain=<option>      the evm chain to interact with
                        <options: coredao|arbitrum>
  --coredao             use the coredao chain
  --mainnet             use the mainnet network
  --network=<option>    the EVM network to connect to
                        <options: mainnet|testnet>
  --programId=<value>   alternative Switchboard program ID to interact with
  --testnet             use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print an oracle

EXAMPLES
  $ sbv2 evm oracle print 0x5eeFE1CA9D1093a59aC9278cC6D296A4eeDd6385 --arbitrum --testnet
```

## `sbv2 evm queue create`

create a new oracle queue

```
USAGE
  $ sbv2 evm queue create --account <value> [-h] [-v] [-s] [--chain coredao|arbitrum | --coredao | --arbitrum]
    [--network mainnet|testnet | --mainnet | --testnet] [-u <value>] [--programId <value>] [--json] [-a <value>] [--name
    <value>] [-r <value>] [--oracleTimeout <value>] [--queueSize <value>] [--unpermissionedFeeds]

FLAGS
  -a, --authority=<value>  alternate account that will be the authority for the queue
  -h, --help               Show CLI help.
  -r, --reward=<value>     oracle rewards for successfully responding to an update request
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --account=<value>        (required) Path to file containing the private key for the payer account
  --arbitrum               use the arbitrum chain
  --chain=<option>         the evm chain to interact with
                           <options: coredao|arbitrum>
  --coredao                use the coredao chain
  --mainnet                use the mainnet network
  --name=<value>           name of the queue for easier identification
  --network=<option>       the EVM network to connect to
                           <options: mainnet|testnet>
  --oracleTimeout=<value>  [default: 180] number of oracles to add to the queue
  --programId=<value>      alternative Switchboard program ID to interact with
  --queueSize=<value>      [default: 100] maximum number of oracles the queue can support
  --testnet                use the testnet network
  --unpermissionedFeeds    permit unpermissioned feeds

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new oracle queue

ALIASES
  $ sbv2 evm create queue

EXAMPLES
  $ sbv2 evm queue create --arbitrum --testnet --account ~/.config/arbitrum/testnet.txt --name 'my queue' --oracleTimeout 3600 --queueSize 8
```

## `sbv2 evm queue print QUEUEADDRESS`

print a queue

```
USAGE
  $ sbv2 evm queue print QUEUEADDRESS [-h] [-v] [-s] [--chain coredao|arbitrum | --coredao | --arbitrum] [--network
    mainnet|testnet | --mainnet | --testnet] [-u <value>] [--programId <value>] [--json] [--oracles]

ARGUMENTS
  QUEUEADDRESS  address of the queue account

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --arbitrum            use the arbitrum chain
  --chain=<option>      the evm chain to interact with
                        <options: coredao|arbitrum>
  --coredao             use the coredao chain
  --mainnet             use the mainnet network
  --network=<option>    the EVM network to connect to
                        <options: mainnet|testnet>
  --oracles             print the current set of heartbeating oracles
  --programId=<value>   alternative Switchboard program ID to interact with
  --testnet             use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a queue

EXAMPLES
  $ sbv2 evm queue print --arbitrum --mainnet 0x74f44B7e43319931ff9ae8CFCDCba09dc7F89f95

  $ sbv2 evm queue print --arbitrum --testnet 0xB1c6E716ACae35200Dc8278A63a424f58417954c --oracles
```

## `sbv2 evm set aggregator AGGREGATORADDRESS`

set an aggregators config

```
USAGE
  $ sbv2 evm set aggregator AGGREGATORADDRESS --account <value> --updateInterval <value> [-h] [-v] [-s] [--chain
    coredao|arbitrum | --coredao | --arbitrum] [--network mainnet|testnet | --mainnet | --testnet] [-u <value>]
    [--programId <value>] [--json] [-a <value>] [--name <value>] [--forceReportPeriod <value>] [--batchSize <value>]
    [--minJobs <value>] [--minOracles <value>] [--varianceThreshold <value>] [-j <value>] [--removeJob <value>]
    [--enableHistory]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator

FLAGS
  -a, --authority=<value>      alternate account that will be the authority for the aggregator
  -h, --help                   Show CLI help.
  -j, --job=<value>...         filesystem path to job definition file
  -s, --silent                 suppress cli prompts
  -u, --rpcUrl=<value>         alternate RPC url
  -v, --verbose                log everything
  --account=<value>            (required) Path to file containing the private key for the payer account
  --arbitrum                   use the arbitrum chain
  --batchSize=<value>          [default: 1] number of oracles requested for each open round call
  --chain=<option>             the evm chain to interact with
                               <options: coredao|arbitrum>
  --coredao                    use the coredao chain
  --enableHistory              enable history for the feed
  --forceReportPeriod=<value>  Number of seconds for which, even if the variance threshold is not passed, accept new
                               responses from oracles.
  --mainnet                    use the mainnet network
  --minJobs=<value>            [default: 1] number of jobs that must respond before an oracle responds
  --minOracles=<value>         [default: 1] number of oracles that must respond before a value is accepted on-chain
  --name=<value>               name of the aggregator for easier identification
  --network=<option>           the EVM network to connect to
                               <options: mainnet|testnet>
  --programId=<value>          alternative Switchboard program ID to interact with
  --removeJob=<value>...       job definitions to remove from the hash
  --testnet                    use the testnet network
  --updateInterval=<value>     (required) set an aggregator's minimum update delay
  --varianceThreshold=<value>  [default: 0] percentage change between a previous accepted result and the next round
                               before an oracle reports a value on-chain. Used to conserve lease cost during low
                               volatility

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  set an aggregators config

ALIASES
  $ sbv2 evm set aggregator

EXAMPLES
  $  sbv2 evm aggregator set --arbitrum --testnet --account ~/.config/arbitrum/testnet.txt 0xB1c6E716ACae35200Dc8278A63a424f58417954c --name 'my updated feed' --batchSize 2 --job ./my_new_job.json
```

## `sbv2 help [COMMANDS]`

Display help for sbv2.

```
USAGE
  $ sbv2 help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for sbv2.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.4/src/commands/help.ts)_

## `sbv2 job test`

test a job definition against the Switchboard task-runner

```
USAGE
  $ sbv2 job test [-h] [-v] [-s] [--json] [-d] [--job <value>]

FLAGS
  -d, --devnet      test against a devnet task-runner
  -h, --help        Show CLI help.
  -s, --silent      suppress cli prompts
  -v, --verbose     log everything
  --job=<value>...  filesystem path to job definition file

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  test a job definition against the Switchboard task-runner

EXAMPLES
  $ sbv2 job:test
```

## `sbv2 near aggregator add history AGGREGATORADDRESS`

add rows to a history vector

```
USAGE
  $ sbv2 near aggregator add history AGGREGATORADDRESS --accountName <value> [-h] [-v] [-s] [--networkId
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

## `sbv2 near aggregator add job AGGREGATORADDRESS`

add a job to an aggregator

```
USAGE
  $ sbv2 near aggregator add job AGGREGATORADDRESS --accountName <value> [-h] [-v] [-s] [--networkId
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
  $ sbv2 near aggregator create QUEUEADDRESS --accountName <value> --updateInterval <value> [-h] [-v] [-s] [--networkId
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

## `sbv2 near aggregator escrow AGGREGATORADDRESS`

view an aggregators escrow state

```
USAGE
  $ sbv2 near aggregator escrow AGGREGATORADDRESS [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId
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

## `sbv2 near aggregator fund AGGREGATORADDRESS`

```
USAGE
  $ sbv2 near aggregator fund AGGREGATORADDRESS --accountName <value> -a <value> [-h] [-v] [-s] [--networkId
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

## `sbv2 near aggregator history add AGGREGATORADDRESS`

add rows to a history vector

```
USAGE
  $ sbv2 near aggregator history add AGGREGATORADDRESS --accountName <value> [-h] [-v] [-s] [--networkId
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

## `sbv2 near aggregator job add AGGREGATORADDRESS`

add a job to an aggregator

```
USAGE
  $ sbv2 near aggregator job add AGGREGATORADDRESS --accountName <value> [-h] [-v] [-s] [--networkId
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

## `sbv2 near aggregator job remove AGGREGATORADDRESS`

remove a job to an aggregator

```
USAGE
  $ sbv2 near aggregator job remove AGGREGATORADDRESS --accountName <value> [-h] [-v] [-s] [--networkId
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

## `sbv2 near aggregator permission create AGGREGATORADDRESS`

create a permission account for a near aggregator

```
USAGE
  $ sbv2 near aggregator permission create AGGREGATORADDRESS --accountName <value> [-h] [-v] [-s] [--networkId
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

## `sbv2 near aggregator remove job AGGREGATORADDRESS`

remove a job to an aggregator

```
USAGE
  $ sbv2 near aggregator remove job AGGREGATORADDRESS --accountName <value> [-h] [-v] [-s] [--networkId
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
  $ sbv2 near aggregator set AGGREGATORADDRESS --accountName <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>]
    [--crankAddress <value>] [--queueAddress <value>] [--name <value>] [--metadata <value>] [--forceReportPeriod
    <value>] [--batchSize <value>] [--minJobs <value>] [--minOracles <value>] [--updateInterval <value>]
    [--varianceThreshold <value>]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -a, --authority=<value>       alternate named account that will be the authority for the oracle
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --batchSize=<value>           number of oracles requested for each open round call
  --crankAddress=<value>        optional, address of the crank to add the aggregator to
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
  --queueAddress=<value>        optional, address of the new queue to add the aggregator to
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

## `sbv2 near aggregator update AGGREGATORADDRESS`

request a new value on-chain for an aggregator

```
USAGE
  $ sbv2 near aggregator update AGGREGATORADDRESS --accountName <value> [-h] [-v] [-s] [--networkId
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

## `sbv2 near crank create QUEUEADDRESS`

create a new crank

```
USAGE
  $ sbv2 near crank create QUEUEADDRESS --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]
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

## `sbv2 near crank list CRANKADDRESS`

pop the crank

```
USAGE
  $ sbv2 near crank list CRANKADDRESS [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId <value>] [-u
    <value>] [--nearCredentialsDir <value>]

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

## `sbv2 near crank pop CRANKADDRESS`

pop the crank

```
USAGE
  $ sbv2 near crank pop CRANKADDRESS --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]
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

## `sbv2 near crank push CRANKADDRESS`

push an aggregator onto the crank

```
USAGE
  $ sbv2 near crank push CRANKADDRESS --accountName <value> -a <value> [-h] [-v] [-s] [--networkId
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
  $ sbv2 near create aggregator QUEUEADDRESS --accountName <value> --updateInterval <value> [-h] [-v] [-s] [--networkId
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

## `sbv2 near create aggregator permission AGGREGATORADDRESS`

create a permission account for a near aggregator

```
USAGE
  $ sbv2 near create aggregator permission AGGREGATORADDRESS --accountName <value> [-h] [-v] [-s] [--networkId
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

## `sbv2 near create crank QUEUEADDRESS`

create a new crank

```
USAGE
  $ sbv2 near create crank QUEUEADDRESS --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]
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
  $ sbv2 near create job JOBDEFINITION --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]
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

## `sbv2 near create oracle QUEUEADDRESS`

create a near oracle for a given queue

```
USAGE
  $ sbv2 near create oracle QUEUEADDRESS --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]
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

## `sbv2 near fund aggregator AGGREGATORADDRESS`

```
USAGE
  $ sbv2 near fund aggregator AGGREGATORADDRESS --accountName <value> -a <value> [-h] [-v] [-s] [--networkId
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
  $ sbv2 near job create JOBDEFINITION --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]
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
  $ sbv2 near list queue QUEUEADDRESS [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId <value>] [-u
    <value>] [--nearCredentialsDir <value>] [--json]

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

## `sbv2 near oracle create QUEUEADDRESS`

create a near oracle for a given queue

```
USAGE
  $ sbv2 near oracle create QUEUEADDRESS --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]
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

## `sbv2 near oracle escrow ORACLEADDRESS`

view an aggregators escrow state

```
USAGE
  $ sbv2 near oracle escrow ORACLEADDRESS [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId <value>]
    [-u <value>] [--nearCredentialsDir <value>] [--json]

ARGUMENTS
  ORACLEADDRESS  address of the oracle in Uint8 or Base58 encoding

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

## `sbv2 near oracle stake ORACLEADDRESS`

deposit funds to an oracle's staking wallet

```
USAGE
  $ sbv2 near oracle stake ORACLEADDRESS --accountName <value> --amount <value> [-h] [-v] [-s] [--networkId
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

## `sbv2 near oracle unstake ORACLEADDRESS`

deposit funds to an oracle's staking wallet

```
USAGE
  $ sbv2 near oracle unstake ORACLEADDRESS --accountName <value> --amount <value> [-h] [-v] [-s] [--networkId
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

## `sbv2 near oracle up ORACLEADDRESS`

start a near docker oracle

```
USAGE
  $ sbv2 near oracle up ORACLEADDRESS --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]
    [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-d <value>] [--releaseChannel
    testnet|mainnet | --nodeImage <value>]

ARGUMENTS
  ORACLEADDRESS  address of the oracle in Uint8 or Base58 encoding

FLAGS
  -d, --switchboardDir=<value>  directory with switchboard.env to load a switchboard environment
  -h, --help                    Show CLI help.
  -s, --silent                  suppress docker logging
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --nearCredentialsDir=<value>  [default: /Users/gally/.near-credentials] Alternative directory for near credentials.
                                Defaults to ~/.near-credentials
  --networkId=<option>          [default: testnet] Near network ID to connect to
                                <options: testnet|mainnet|localnet>
  --nodeImage=<value>           [default: dev-v2-RC_04_11_23_17_12] public key of the oracle to start-up
  --programId=<value>           Switchboard programId on the selected Near networkId
  --releaseChannel=<option>     [default: testnet] the oracle release channel
                                <options: testnet|mainnet>

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

## `sbv2 near pop crank CRANKADDRESS`

pop the crank

```
USAGE
  $ sbv2 near pop crank CRANKADDRESS [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId <value>] [-u
    <value>] [--nearCredentialsDir <value>]

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
  $ sbv2 near print ACCOUNTTYPE ADDRESS [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId
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

## `sbv2 near push crank CRANKADDRESS`

push an aggregator onto the crank

```
USAGE
  $ sbv2 near push crank CRANKADDRESS --accountName <value> -a <value> [-h] [-v] [-s] [--networkId
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
  $ sbv2 near queue aggregators QUEUEADDRESS [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId <value>] [-u
    <value>] [--nearCredentialsDir <value>] [--json]

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
  $ sbv2 near queue feeds QUEUEADDRESS [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId <value>] [-u
    <value>] [--nearCredentialsDir <value>] [--json]

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
  $ sbv2 near queue list QUEUEADDRESS [-h] [-v] [-s] [--networkId testnet|mainnet|localnet] [--programId <value>] [-u
    <value>] [--nearCredentialsDir <value>] [--json]

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
  $ sbv2 near queue set QUEUEADDRESS --accountName <value> [-h] [-v] [-s] [--networkId testnet|mainnet|localnet]
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
  $ sbv2 near set aggregator AGGREGATORADDRESS --accountName <value> [-h] [-v] [-s] [--networkId
    testnet|mainnet|localnet] [--programId <value>] [-u <value>] [--nearCredentialsDir <value>] [--json] [-a <value>]
    [--crankAddress <value>] [--queueAddress <value>] [--name <value>] [--metadata <value>] [--forceReportPeriod
    <value>] [--batchSize <value>] [--minJobs <value>] [--minOracles <value>] [--updateInterval <value>]
    [--varianceThreshold <value>]

ARGUMENTS
  AGGREGATORADDRESS  address of the aggregator in Uint8 or Base58 encoding

FLAGS
  -a, --authority=<value>       alternate named account that will be the authority for the oracle
  -h, --help                    Show CLI help.
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --accountName=<value>         (required) Named account to load from your nearCredentialsDir
  --batchSize=<value>           number of oracles requested for each open round call
  --crankAddress=<value>        optional, address of the crank to add the aggregator to
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
  --queueAddress=<value>        optional, address of the new queue to add the aggregator to
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

## `sbv2 near update aggregator AGGREGATORADDRESS`

request a new value on-chain for an aggregator

```
USAGE
  $ sbv2 near update aggregator AGGREGATORADDRESS --accountName <value> [-h] [-v] [-s] [--networkId
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
  $ sbv2 oracle logs NETWORK SEARCHSTRING -f <value> [-h] [-v] [-s] [--force] [--json] [--csv]

ARGUMENTS
  NETWORK       (solana-mainnet|solana-devnet|aptos-mainnet|aptos-testnet|near-mainnet|near-testnet) network to parse
                logs for
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

## `sbv2 solana aggregator add history AGGREGATORKEY`

add a history buffer to an aggregator

```
USAGE
  $ sbv2 solana aggregator add history AGGREGATORKEY --historyLimit <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--force] [-a <value>]

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
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --force                  overwrite an existing history buffer if one already exists
  --historyLimit=<value>   (required) the number of samples to store before overwriting old samples
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  add a history buffer to an aggregator

EXAMPLES
  $ sbv2 solana:aggregator:add:history
```

## `sbv2 solana aggregator add job AGGREGATORKEY`

add jobs to an aggregator

```
USAGE
  $ sbv2 solana aggregator add job AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--jobDefinition <value>] [--jobKey
    <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>     alternate keypair that is the authority for the aggregator
  -h, --help                  Show CLI help.
  -k, --keypair=<value>       keypair that will pay for onchain transactions. defaults to new account authority if no
                              alternate authority provided
  -s, --silent                suppress cli prompts
  -u, --rpcUrl=<value>        alternate RPC url
  -v, --verbose               log everything
  --cluster=<option>          the solana cluster to connect to
                              <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>       [default: confirmed] transaction commitment level to use
                              <options: confirmed|finalized|processed>
  --jobDefinition=<value>...  filesystem path of job json definition file
  --jobKey=<value>...         public key of an existing job account to add to an aggregator
  --ledger                    enable ledger support
  --ledgerPath=<value>        HID path to the ledger
  --mainnetBeta               WARNING: use mainnet-beta solana cluster
  --programId=<value>         alternative Switchboard program ID to interact with

DESCRIPTION
  add jobs to an aggregator

EXAMPLES
  $ sbv2 solana aggregator add job
```

## `sbv2 solana aggregator authority AGGREGATORKEY`

```
USAGE
  $ sbv2 solana aggregator authority AGGREGATORKEY --newAuthority <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator and required to make config
                           changes
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --newAuthority=<value>   (required)
  --programId=<value>      alternative Switchboard program ID to interact with
```

## `sbv2 solana aggregator close AGGREGATORKEY`

close an aggregator and associated PDA accounts on devnet

```
USAGE
  $ sbv2 solana aggregator close AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator and required to make config
                           changes
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  close an aggregator and associated PDA accounts on devnet

EXAMPLES
  $ sbv2 solana aggregator close J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa --keypair ../payer-keypair.json
```

## `sbv2 solana aggregator create QUEUEKEY`

create an aggregator account

```
USAGE
  $ sbv2 solana aggregator create QUEUEKEY --updateInterval <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [-a <value>]
    [--aggregatorKeypair <value>] [--name <value>] [--metadata <value>] [--batchSize <value>] [--minJobs <value>]
    [--minOracles <value>] [--forceReportPeriod <value>] [--varianceThreshold <value>] [--historyLimit <value>]
    [--crankKey <value> | --disableCrank] [--queueAuthority <value>] [--enable] [--leaseAmount <value>] [-j <value>]
    [--jobKey <value>] [--slidingWindow] [--basePriorityFee <value>] [--priorityFeeBump <value>]
    [--priorityFeeBumpPeriod <value>] [--maxPriorityFeeMultiplier <value>]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue to create an aggregator on

FLAGS
  -a, --authority=<value>             alternate keypair that is the authority for the aggregator
  -h, --help                          Show CLI help.
  -j, --job=<value>...                filesystem path to job definition file
  -k, --keypair=<value>               keypair that will pay for onchain transactions. defaults to new account authority
                                      if no alternate authority provided
  -s, --silent                        suppress cli prompts
  -u, --rpcUrl=<value>                alternate RPC url
  -v, --verbose                       log everything
  --aggregatorKeypair=<value>         keypair to use for aggregator account. This will be the account's publicKey
  --basePriorityFee=<value>
  --batchSize=<value>                 [default: 1] number of oracles requested for each open round call
  --cluster=<option>                  the solana cluster to connect to
                                      <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>               [default: confirmed] transaction commitment level to use
                                      <options: confirmed|finalized|processed>
  --crankKey=<value>                  public key of the crank to join
  --disableCrank                      whether the newly created feed can be pushed onto a crank. irreversible
  --enable                            set permissions to PERMIT_ORACLE_QUEUE_USAGE
  --forceReportPeriod=<value>         Number of seconds for which, even if the variance threshold is not passed, accept
                                      new responses from oracles.
  --historyLimit=<value>              number of historical samples to store
  --jobKey=<value>...                 public key of existing job account
  --leaseAmount=<value>               [default: 0] amount of funds to deposit into the lease, ex: 1.5 would deposit 1.5
                                      wSOL
  --ledger                            enable ledger support
  --ledgerPath=<value>                HID path to the ledger
  --mainnetBeta                       WARNING: use mainnet-beta solana cluster
  --maxPriorityFeeMultiplier=<value>
  --metadata=<value>                  metadata of the aggregator
  --minJobs=<value>                   [default: 1] number of jobs that must respond before an oracle responds
  --minOracles=<value>                [default: 1] number of oracles that must respond before a value is accepted
                                      on-chain
  --name=<value>                      name of the aggregator
  --priorityFeeBump=<value>
  --priorityFeeBumpPeriod=<value>
  --programId=<value>                 alternative Switchboard program ID to interact with
  --queueAuthority=<value>            alternative keypair to use for queue authority
  --slidingWindow                     enable sliding window resolution mode
  --updateInterval=<value>            (required) set an aggregator's minimum update delay
  --varianceThreshold=<value>         [default: 0] percentage change between a previous accepted result and the next
                                      round before an oracle reports a value on-chain. Used to conserve lease cost
                                      during low volatility

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create an aggregator account
```

## `sbv2 solana aggregator create json DEFINITIONFILE`

create an aggregator from a json file

```
USAGE
  $ sbv2 solana aggregator create json DEFINITIONFILE [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [-q <value>] [-a <value>]
    [--leaseAmount <value>]

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
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --leaseAmount=<value>    [default: 0] amount of funds to deposit into the lease, ex: 1.5 would deposit 1.5 wSOL
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create an aggregator from a json file

ALIASES
  $ sbv2 solana json create aggregator

EXAMPLES
  $ sbv2 solana aggregator create json examples/aggregator.json --keypair ../payer-keypair.json --queueKey GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --outputFile aggregator.schema.json
```

## `sbv2 solana aggregator deposit AGGREGATORKEY`

fund and re-enable an aggregator lease

```
USAGE
  $ sbv2 solana aggregator deposit AGGREGATORKEY --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --amount=<value>       (required) amount to deposit into the lease escrow
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --ledger               enable ledger support
  --ledgerPath=<value>   HID path to the ledger
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  fund and re-enable an aggregator lease

ALIASES
  $ sbv2 solana aggregator fund
  $ sbv2 solana aggregator deposit
  $ sbv2 solana aggregator extend

EXAMPLES
  $ sbv2 solana:aggregator:fund GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json
```

## `sbv2 solana aggregator extend AGGREGATORKEY`

fund and re-enable an aggregator lease

```
USAGE
  $ sbv2 solana aggregator extend AGGREGATORKEY --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --amount=<value>       (required) amount to deposit into the lease escrow
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --ledger               enable ledger support
  --ledgerPath=<value>   HID path to the ledger
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  fund and re-enable an aggregator lease

ALIASES
  $ sbv2 solana aggregator fund
  $ sbv2 solana aggregator deposit
  $ sbv2 solana aggregator extend

EXAMPLES
  $ sbv2 solana:aggregator:fund GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json
```

## `sbv2 solana aggregator fund AGGREGATORKEY`

fund and re-enable an aggregator lease

```
USAGE
  $ sbv2 solana aggregator fund AGGREGATORKEY --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --amount=<value>       (required) amount to deposit into the lease escrow
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --ledger               enable ledger support
  --ledgerPath=<value>   HID path to the ledger
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  fund and re-enable an aggregator lease

ALIASES
  $ sbv2 solana aggregator fund
  $ sbv2 solana aggregator deposit
  $ sbv2 solana aggregator extend

EXAMPLES
  $ sbv2 solana:aggregator:fund GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json
```

## `sbv2 solana aggregator history AGGREGATORKEY`

print an aggregator's history'

```
USAGE
  $ sbv2 solana aggregator history AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [--json] [--metrics]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --metrics              print metrics on an aggregators history like average update interval
  --programId=<value>    alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print an aggregator's history'
```

## `sbv2 solana aggregator lease set AGGREGATORKEY`

set a lease's withdraw authority

```
USAGE
  $ sbv2 solana aggregator lease set AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>] [--queuePubkey <value>]
    [--newAuthority <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>  alternate keypair delegated as the authority for managing the lease account
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --newAuthority=<value>   new lease withdraw authority. if not set, defaults to the aggregator authority
  --programId=<value>      alternative Switchboard program ID to interact with
  --queuePubkey=<value>    override the aggregators current queue. useful for withdrawing from a lease after moving to a
                           new queue

DESCRIPTION
  set a lease's withdraw authority

ALIASES
  $ sbv2 solana aggregator lease set

EXAMPLES
  $ sbv2 solana:lease:set GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --keypair ../payer-keypair.json
```

## `sbv2 solana aggregator list AUTHORITYKEY`

get a list of aggregators from a provided authority pubkey

```
USAGE
  $ sbv2 solana aggregator list AUTHORITYKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [--json]

ARGUMENTS
  AUTHORITYKEY  public key of the aggregator authority

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  get a list of aggregators from a provided authority pubkey
```

## `sbv2 solana aggregator lock AGGREGATORKEY`

lock an aggregator's configuration and prevent further changes

```
USAGE
  $ sbv2 solana aggregator lock AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>]

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
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  lock an aggregator's configuration and prevent further changes
```

## `sbv2 solana aggregator metrics AGGREGATORKEY`

print an aggregator's metrics'

```
USAGE
  $ sbv2 solana aggregator metrics AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [--json] [--period <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --period=<value>...    the period to collect metrics for. Ex. 3600 will collect update metrics for the last 1hr
  --programId=<value>    alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print an aggregator's metrics'
```

## `sbv2 solana aggregator open-round AGGREGATORKEY`

request a new aggregator result from a set of oracles

```
USAGE
  $ sbv2 solana aggregator open-round AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --ledger               enable ledger support
  --ledgerPath=<value>   HID path to the ledger
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  request a new aggregator result from a set of oracles

ALIASES
  $ sbv2 solana aggregator open-round

EXAMPLES
  $ sbv2 solana aggregator update J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa --keypair ../payer-keypair.json
```

## `sbv2 solana aggregator permission create AGGREGATORKEY`

create a permission account for an aggregator

```
USAGE
  $ sbv2 solana aggregator permission create AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --ledger               enable ledger support
  --ledgerPath=<value>   HID path to the ledger
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  create a permission account for an aggregator
```

## `sbv2 solana aggregator print AGGREGATORKEY`

print an aggregator and it's associated accounts

```
USAGE
  $ sbv2 solana aggregator print AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [--json] [--queuePubkey <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with
  --queuePubkey=<value>  override the aggregators current queue. useful for viewing permission lease accounts if an
                         aggregator has moved queues

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print an aggregator and it's associated accounts
```

## `sbv2 solana aggregator remove job AGGREGATORKEY JOBKEY`

remove a switchboard job account from an aggregator

```
USAGE
  $ sbv2 solana aggregator remove job AGGREGATORKEY JOBKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>]

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
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  remove a switchboard job account from an aggregator
```

## `sbv2 solana aggregator set AGGREGATORKEY`

set an aggregators config

```
USAGE
  $ sbv2 solana aggregator set AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [-a <value>] [--name <value>]
    [--metadata <value>] [--batchSize <value>] [--minJobs <value>] [--minOracles <value>] [--updateInterval <value>]
    [--varianceThreshold <value>] [--forceReportPeriod <value>] [--basePriorityFee <value>] [--priorityFeeBump <value>]
    [--priorityFeeBumpPeriod <value>] [--maxPriorityFeeMultiplier <value>] [--enableSlidingWindow]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>             alternate keypair that is the authority for the aggregator and required to make
                                      config changes
  -h, --help                          Show CLI help.
  -k, --keypair=<value>               keypair that will pay for onchain transactions. defaults to new account authority
                                      if no alternate authority provided
  -s, --silent                        suppress cli prompts
  -u, --rpcUrl=<value>                alternate RPC url
  -v, --verbose                       log everything
  --basePriorityFee=<value>
  --batchSize=<value>                 number of oracles requested for each open round call
  --cluster=<option>                  the solana cluster to connect to
                                      <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>               [default: confirmed] transaction commitment level to use
                                      <options: confirmed|finalized|processed>
  --enableSlidingWindow               set the aggregator resolution mode
  --forceReportPeriod=<value>         Number of seconds for which, even if the variance threshold is not passed, accept
                                      new responses from oracles.
  --ledger                            enable ledger support
  --ledgerPath=<value>                HID path to the ledger
  --mainnetBeta                       WARNING: use mainnet-beta solana cluster
  --maxPriorityFeeMultiplier=<value>
  --metadata=<value>                  metadata of the aggregator
  --minJobs=<value>                   number of jobs that must respond before an oracle responds
  --minOracles=<value>                number of oracles that must respond before a value is accepted on-chain
  --name=<value>                      name of the aggregator
  --priorityFeeBump=<value>
  --priorityFeeBumpPeriod=<value>
  --programId=<value>                 alternative Switchboard program ID to interact with
  --updateInterval=<value>            set an aggregator's minimum update delay
  --varianceThreshold=<value>         percentage change between a previous accepted result and the next round before an
                                      oracle reports a value on-chain. Used to conserve lease cost during low volatility

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  set an aggregators config
```

## `sbv2 solana aggregator transfer AGGREGATORKEY`

transfer an aggregator to a new queue

```
USAGE
  $ sbv2 solana aggregator transfer AGGREGATORKEY --newQueue <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>] [--newCrank <value>]
    [--loadAmount <value>] [--enable] [--queueAuthority <value>] [--force]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>   alternate keypair that is the authority for the aggregator
  -h, --help                Show CLI help.
  -k, --keypair=<value>     keypair that will pay for onchain transactions. defaults to new account authority if no
                            alternate authority provided
  -s, --silent              suppress cli prompts
  -u, --rpcUrl=<value>      alternate RPC url
  -v, --verbose             log everything
  --cluster=<option>        the solana cluster to connect to
                            <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>     [default: confirmed] transaction commitment level to use
                            <options: confirmed|finalized|processed>
  --enable                  enable permissions on the new queue
  --force                   skip permission checks
  --ledger                  enable ledger support
  --ledgerPath=<value>      HID path to the ledger
  --loadAmount=<value>      [default: 0.0] amount of funds to load into the new lease, in addition to the funds
                            remaining in the old lease account
  --mainnetBeta             WARNING: use mainnet-beta solana cluster
  --newCrank=<value>        publicKey of the crank to transfer to
  --newQueue=<value>        (required) publicKey of the new queue to transfer to
  --programId=<value>       alternative Switchboard program ID to interact with
  --queueAuthority=<value>  alternate keypair that is the authority for the queue. only used if enabling permissions in
                            one transaction

DESCRIPTION
  transfer an aggregator to a new queue

EXAMPLES
  $ sbv2 solana aggregator transfer GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --mainnetBeta --loadAmount 0.1 --newQueue 3HBb2DQqDfuMdzWxNk1Eo9RTMkFYmuEAd32RiLKn9pAn --newCrank GdNVLWzcE6h9SPuSbmu69YzxAj8enim9t6mjzuqTXgLd --keypair ~/.config/solana/id.json
```

## `sbv2 solana aggregator update AGGREGATORKEY`

request a new aggregator result from a set of oracles

```
USAGE
  $ sbv2 solana aggregator update AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --ledger               enable ledger support
  --ledgerPath=<value>   HID path to the ledger
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  request a new aggregator result from a set of oracles

ALIASES
  $ sbv2 solana aggregator open-round

EXAMPLES
  $ sbv2 solana aggregator update J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa --keypair ../payer-keypair.json
```

## `sbv2 solana aggregator watch AGGREGATORKEY`

watch an aggregator account and stream the results

```
USAGE
  $ sbv2 solana aggregator watch AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-t <value>] [-f <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -f, --outfile=<value>  save results to a file
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -t, --timeout=<value>  time to watch feed for updates
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  watch an aggregator account and stream the results
```

## `sbv2 solana aggregator withdraw AGGREGATORKEY`

withdraw funds from an aggregator lease

```
USAGE
  $ sbv2 solana aggregator withdraw AGGREGATORKEY --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>] [--queuePubkey <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>  keypair delegated as the authority for managing the lease account
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --amount=<value>         (required) token amount to withdraw from lease account
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with
  --queuePubkey=<value>    override the aggregators current queue. useful for withdrawing from a lease after moving to a
                           new queue

DESCRIPTION
  withdraw funds from an aggregator lease

ALIASES
  $ sbv2 solana aggregator withdraw

EXAMPLES
  $ sbv2 solana:aggregator:withdraw GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json
```

## `sbv2 solana anchor test`

run anchor test and a switchboard oracle in parallel

```
USAGE
  $ sbv2 solana anchor test [-h] [-v] [-s] [--mainnetBeta | --cluster localnet|devnet] [-u <value>] [--mainnetRpcUrl
    <value>] [--programId <value>] [-d <value>] [--oracleKey <value>] [-k <value>] [--releaseChannel testnet|mainnet |
    --nodeImage <value>] [-t <value>] [--detach] [--testValidatorArgs <value>]

FLAGS
  -d, --switchboardDir=<value>  directory with switchboard.env to load a switchboard environment
  -h, --help                    Show CLI help.
  -k, --keypair=<value>         keypair that will pay for onchain transactions. defaults to new account authority if no
                                alternate authority provided
  -s, --silent                  suppress docker logging
  -t, --timeout=<value>         [default: 120] number of seconds before ending the docker process
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --cluster=<option>            [default: localnet] cluster
                                <options: localnet|devnet>
  --detach                      keep the localnet rpc running
  --mainnetBeta                 WARNING: use mainnet-beta solana cluster
  --mainnetRpcUrl=<value>       [default: https://api.mainnet-beta.solana.com/] Solana mainnet RPC URL to use for the
                                oracle task runner
  --nodeImage=<value>           [default: dev-v2-RC_04_11_23_17_12] public key of the oracle to start-up
  --oracleKey=<value>           public key of the oracle to start-up
  --programId=<value>           alternative Switchboard program ID to interact with
  --releaseChannel=<option>     [default: testnet] the oracle release channel
                                <options: testnet|mainnet>
  --testValidatorArgs=<value>   additional args passed to the local solana validator

DESCRIPTION
  run anchor test and a switchboard oracle in parallel

ALIASES
  $ sbv2 anchor test
```

## `sbv2 solana buffer create QUEUEKEY`

create a buffer relayer account

```
USAGE
  $ sbv2 solana buffer create QUEUEKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value>
    --ledger] [--json] [--bufferKeypair <value>] [-a <value>] [-n <value>] [--minUpdateDelaySeconds <value>]
    [--jobDefinition <value> | --jobKey <value>]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue account

FLAGS
  -a, --authority=<value>          alternate keypair that will be the buffer relayer authority
  -h, --help                       Show CLI help.
  -k, --keypair=<value>            keypair that will pay for onchain transactions. defaults to new account authority if
                                   no alternate authority provided
  -n, --name=<value>               name of the buffer account
  -s, --silent                     suppress cli prompts
  -u, --rpcUrl=<value>             alternate RPC url
  -v, --verbose                    log everything
  --bufferKeypair=<value>          keypair to use for the buffer relayer account. This will be the account's publicKey
  --cluster=<option>               the solana cluster to connect to
                                   <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>            [default: confirmed] transaction commitment level to use
                                   <options: confirmed|finalized|processed>
  --jobDefinition=<value>          filesystem path to job definition
  --jobKey=<value>                 public key of existing job account
  --ledger                         enable ledger support
  --ledgerPath=<value>             HID path to the ledger
  --mainnetBeta                    WARNING: use mainnet-beta solana cluster
  --minUpdateDelaySeconds=<value>  [default: 30] minimum number of seconds between update calls
  --programId=<value>              alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a buffer relayer account
```

## `sbv2 solana buffer open-round BUFFERRELAYERKEY`

request a new buffer relayer result

```
USAGE
  $ sbv2 solana buffer open-round BUFFERRELAYERKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  BUFFERRELAYERKEY  public key of the buffer relayer account

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --ledger               enable ledger support
  --ledgerPath=<value>   HID path to the ledger
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  request a new buffer relayer result

ALIASES
  $ sbv2 solana buffer open-round

EXAMPLES
  $ sbv2 solana buffer update J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa --keypair ../payer-keypair.json
```

## `sbv2 solana buffer update BUFFERRELAYERKEY`

request a new buffer relayer result

```
USAGE
  $ sbv2 solana buffer update BUFFERRELAYERKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  BUFFERRELAYERKEY  public key of the buffer relayer account

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --ledger               enable ledger support
  --ledgerPath=<value>   HID path to the ledger
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  request a new buffer relayer result

ALIASES
  $ sbv2 solana buffer open-round

EXAMPLES
  $ sbv2 solana buffer update J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa --keypair ../payer-keypair.json
```

## `sbv2 solana crank create QUEUEKEY`

create a new crank account

```
USAGE
  $ sbv2 solana crank create QUEUEKEY -s <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [-n <value>] [--metadata
    <value>] [--crankKeypair <value>] [--dataBufferKeypair <value>]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue to create a crank on

FLAGS
  -h, --help                   Show CLI help.
  -k, --keypair=<value>        keypair that will pay for onchain transactions. defaults to new account authority if no
                               alternate authority provided
  -n, --name=<value>           name of the crank for easier identification
  -s, --silent                 suppress cli prompts
  -s, --size=<value>           (required) maximum number of rows a crank can support
  -u, --rpcUrl=<value>         alternate RPC url
  -v, --verbose                log everything
  --cluster=<option>           the solana cluster to connect to
                               <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>        [default: confirmed] transaction commitment level to use
                               <options: confirmed|finalized|processed>
  --crankKeypair=<value>       keypair to use for the crank account. This will be the account's publicKey
  --dataBufferKeypair=<value>  keypair to use for the crank data buffer account.
  --ledger                     enable ledger support
  --ledgerPath=<value>         HID path to the ledger
  --mainnetBeta                WARNING: use mainnet-beta solana cluster
  --metadata=<value>           metadata of the crank for easier identification
  --programId=<value>          alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new crank account
```

## `sbv2 solana crank events AGGREGATORKEY`

watch an aggregator account and stream the on-chain events

```
USAGE
  $ sbv2 solana crank events AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-t <value>] [-f <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -f, --outfile=<value>  save results to a file
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -t, --timeout=<value>  time to watch feed for updates
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  watch an aggregator account and stream the on-chain events
```

## `sbv2 solana crank pop CRANKKEY`

pop the crank

```
USAGE
  $ sbv2 solana crank pop CRANKKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value>
    --ledger]

ARGUMENTS
  CRANKKEY  public key of the crank account

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --ledger               enable ledger support
  --ledgerPath=<value>   HID path to the ledger
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  pop the crank
```

## `sbv2 solana crank print CRANKKEY`

print a crank

```
USAGE
  $ sbv2 solana crank print CRANKKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [--json] [--rows]

ARGUMENTS
  CRANKKEY  public key of the crank account

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with
  --rows                 print the crank rows in order

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a crank
```

## `sbv2 solana crank push AGGREGATORKEY`

push the crank

```
USAGE
  $ sbv2 solana crank push AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--crankKey <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --crankKey=<value>     push onto a new crank, if provided
  --ledger               enable ledger support
  --ledgerPath=<value>   HID path to the ledger
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  push the crank
```

## `sbv2 solana crank reset AGGREGATORKEY`

reset an aggregators crank

```
USAGE
  $ sbv2 solana crank reset AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the aggregator and required to make config
                           changes
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  reset an aggregators crank
```

## `sbv2 solana job create`

create a job account

```
USAGE
  $ sbv2 solana job create --jobDefinition <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [--jobKeypair <value>] [-a
    <value>] [-n <value>]

FLAGS
  -a, --authority=<value>  alternate keypair that will be the buffer relayer authority
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -n, --name=<value>       name of the buffer account
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --jobDefinition=<value>  (required) filesystem path to job definition
  --jobKeypair=<value>     keypair to use for the job account. This will be the account's publicKey
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a job account
```

## `sbv2 solana job print JOBKEY`

print an job and it's associated accounts

```
USAGE
  $ sbv2 solana job print JOBKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [--json]

ARGUMENTS
  JOBKEY  public key of the job account

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print an job and it's associated accounts
```

## `sbv2 solana json create aggregator DEFINITIONFILE`

create an aggregator from a json file

```
USAGE
  $ sbv2 solana json create aggregator DEFINITIONFILE [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [-q <value>] [-a <value>]
    [--leaseAmount <value>]

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
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --leaseAmount=<value>    [default: 0] amount of funds to deposit into the lease, ex: 1.5 would deposit 1.5 wSOL
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create an aggregator from a json file

ALIASES
  $ sbv2 solana json create aggregator

EXAMPLES
  $ sbv2 solana aggregator create json examples/aggregator.json --keypair ../payer-keypair.json --queueKey GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --outputFile aggregator.schema.json
```

## `sbv2 solana lease create AGGREGATORKEY`

fund and re-enable an aggregator lease

```
USAGE
  $ sbv2 solana lease create AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--amount <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --amount=<value>       token amount to load into the lease escrow. If decimals provided, amount will be normalized to
                         raw tokenAmount
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --ledger               enable ledger support
  --ledgerPath=<value>   HID path to the ledger
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  fund and re-enable an aggregator lease

EXAMPLES
  $ sbv2 solana lease create GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.5 --keypair ../payer-keypair.json
```

## `sbv2 solana lease extend AGGREGATORKEY`

fund and re-enable an aggregator lease

```
USAGE
  $ sbv2 solana lease extend AGGREGATORKEY --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --amount=<value>       (required) amount to deposit into the lease escrow
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --ledger               enable ledger support
  --ledgerPath=<value>   HID path to the ledger
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  fund and re-enable an aggregator lease

ALIASES
  $ sbv2 solana aggregator fund
  $ sbv2 solana aggregator deposit
  $ sbv2 solana aggregator extend

EXAMPLES
  $ sbv2 solana:aggregator:fund GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json
```

## `sbv2 solana lease print LEASEKEY`

print a lease account

```
USAGE
  $ sbv2 solana lease print LEASEKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [--json]

ARGUMENTS
  LEASEKEY  public key of the lease account

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a lease account
```

## `sbv2 solana lease set AGGREGATORKEY`

set a lease's withdraw authority

```
USAGE
  $ sbv2 solana lease set AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>] [--queuePubkey <value>]
    [--newAuthority <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>  alternate keypair delegated as the authority for managing the lease account
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --newAuthority=<value>   new lease withdraw authority. if not set, defaults to the aggregator authority
  --programId=<value>      alternative Switchboard program ID to interact with
  --queuePubkey=<value>    override the aggregators current queue. useful for withdrawing from a lease after moving to a
                           new queue

DESCRIPTION
  set a lease's withdraw authority

ALIASES
  $ sbv2 solana aggregator lease set

EXAMPLES
  $ sbv2 solana:lease:set GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --keypair ../payer-keypair.json
```

## `sbv2 solana lease withdraw AGGREGATORKEY`

withdraw funds from an aggregator lease

```
USAGE
  $ sbv2 solana lease withdraw AGGREGATORKEY --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>] [--queuePubkey <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>  keypair delegated as the authority for managing the lease account
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --amount=<value>         (required) token amount to withdraw from lease account
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with
  --queuePubkey=<value>    override the aggregators current queue. useful for withdrawing from a lease after moving to a
                           new queue

DESCRIPTION
  withdraw funds from an aggregator lease

ALIASES
  $ sbv2 solana aggregator withdraw

EXAMPLES
  $ sbv2 solana:aggregator:withdraw GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json
```

## `sbv2 solana network create`

create an oracle queue

```
USAGE
  $ sbv2 solana network create --configFile <value> --schemaFile <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [--force]

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --configFile=<value>   (required)
  --force
  --ledger               enable ledger support
  --ledgerPath=<value>   HID path to the ledger
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with
  --schemaFile=<value>   (required)

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create an oracle queue
```

## `sbv2 solana network save`

save an existing switchboard network

```
USAGE
  $ sbv2 solana network save --queueKey <value> --outputFile <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [--json] [--force]

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --force
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --outputFile=<value>   (required) outputFile to save accounts in JSON format
  --programId=<value>    alternative Switchboard program ID to interact with
  --queueKey=<value>     (required) queue account to load

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  save an existing switchboard network
```

## `sbv2 solana network start`

start a switchboard network from a JSON file

```
USAGE
  $ sbv2 solana network start [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u <value>]
    [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]
    [--json] [--configFile <value>] [--schemaFile <value>] [--nodeImage <value>] [--arm] [-t <value>] [--mainnetRpcUrl
    <value>]

FLAGS
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress docker logging
  -t, --timeout=<value>    [default: 300] number of seconds before ending the docker process
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --arm                    apple silicon needs to use a docker image for linux/arm64
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --configFile=<value>
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --mainnetRpcUrl=<value>  [default: https://api.mainnet-beta.solana.com/] Solana mainnet RPC URL to use for the oracle
                           task runner
  --nodeImage=<value>      [default: dev-v2-RC_02_24_23_18_43] public key of the oracle to start-up
  --programId=<value>      alternative Switchboard program ID to interact with
  --schemaFile=<value>

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  start a switchboard network from a JSON file
```

## `sbv2 solana oracle create QUEUEKEY`

create a new oracle account for a given queue

```
USAGE
  $ sbv2 solana oracle create QUEUEKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value>
    --ledger] [--json] [-n <value>] [--metadata <value>] [-a <value>] [--enable] [--queueAuthority <value>]
    [--stakeAmount <value>]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue account

FLAGS
  -a, --authority=<value>   keypair to delegate authority to for managing the oracle account
  -h, --help                Show CLI help.
  -k, --keypair=<value>     keypair that will pay for onchain transactions. defaults to new account authority if no
                            alternate authority provided
  -n, --name=<value>        name of the oracle for easier identification
  -s, --silent              suppress cli prompts
  -u, --rpcUrl=<value>      alternate RPC url
  -v, --verbose             log everything
  --cluster=<option>        the solana cluster to connect to
                            <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>     [default: confirmed] transaction commitment level to use
                            <options: confirmed|finalized|processed>
  --enable                  enable oracle heartbeat permissions
  --ledger                  enable ledger support
  --ledgerPath=<value>      HID path to the ledger
  --mainnetBeta             WARNING: use mainnet-beta solana cluster
  --metadata=<value>        metadata of the oracle for easier identification
  --programId=<value>       alternative Switchboard program ID to interact with
  --queueAuthority=<value>  alternative keypair to use for queue authority
  --stakeAmount=<value>     token amount to load into the oracle's staking wallet.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new oracle account for a given queue

EXAMPLES
  $ sbv2 solana:oracle:create F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy --name oracle-1 --stakeAmount 1
```

## `sbv2 solana oracle print ORACLEKEY`

print an oracle account

```
USAGE
  $ sbv2 solana oracle print ORACLEKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [--json]

ARGUMENTS
  ORACLEKEY  public key of the oracle account

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print an oracle account
```

## `sbv2 solana oracle up`

start a solana docker oracle

```
USAGE
  $ sbv2 solana oracle up --oracleKey <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--releaseChannel testnet|mainnet |
    --nodeImage <value>] [-t <value>]

FLAGS
  -h, --help                 Show CLI help.
  -k, --keypair=<value>      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided
  -s, --silent               suppress docker logging
  -t, --timeout=<value>      [default: 120] number of seconds before ending the docker process
  -u, --rpcUrl=<value>       alternate RPC url
  -v, --verbose              log everything
  --cluster=<option>         the solana cluster to connect to
                             <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>      [default: confirmed] transaction commitment level to use
                             <options: confirmed|finalized|processed>
  --ledger                   enable ledger support
  --ledgerPath=<value>       HID path to the ledger
  --mainnetBeta              WARNING: use mainnet-beta solana cluster
  --nodeImage=<value>        [default: dev-v2-RC_04_11_23_17_12] public key of the oracle to start-up
  --oracleKey=<value>        (required) public key of the oracle to start-up
  --programId=<value>        alternative Switchboard program ID to interact with
  --releaseChannel=<option>  [default: testnet] the oracle release channel
                             <options: testnet|mainnet>

DESCRIPTION
  start a solana docker oracle
```

## `sbv2 solana oracle withdraw ORACLEKEY`

withdraw from an oracle's staking wallet

```
USAGE
  $ sbv2 solana oracle withdraw ORACLEKEY --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>]

ARGUMENTS
  ORACLEKEY  public key of the oracle account

FLAGS
  -a, --authority=<value>  alternate keypair for the oracle authority
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --amount=<value>         (required) amount to withdraw
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  withdraw from an oracle's staking wallet
```

## `sbv2 solana permission create`

create a permission account

```
USAGE
  $ sbv2 solana permission create --granter <value> --grantee <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [--enable] [-a <value>]

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the granter
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --enable                 whether to enable permissions on the resource. --keypair or --authority must be provided
  --grantee=<value>        (required) publicKey of the resource that is being granted permissions. This is typically an
                           AggregatorAccount, BufferRelayerAccount, OracleAccount, or VrfAccount.
  --granter=<value>        (required) publicKey of the resource that is granting permissions. This is typically the
                           QueueAccount.
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a permission account
```

## `sbv2 solana permission grant PERMISSIONKEY`

enable a resources permissions

```
USAGE
  $ sbv2 solana permission grant PERMISSIONKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>]

ARGUMENTS
  PERMISSIONKEY  public key of the permission account

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the permission account
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  enable a resources permissions
```

## `sbv2 solana permission print PERMISSIONKEY`

print a permission account

```
USAGE
  $ sbv2 solana permission print PERMISSIONKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [--json]

ARGUMENTS
  PERMISSIONKEY  public key of the permission account

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a permission account
```

## `sbv2 solana permission revoke PERMISSIONKEY`

disable a resources permissions

```
USAGE
  $ sbv2 solana permission revoke PERMISSIONKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>]

ARGUMENTS
  PERMISSIONKEY  public key of the permission account

FLAGS
  -a, --authority=<value>  alternate keypair that is the authority for the permission account
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  disable a resources permissions
```

## `sbv2 solana print PUBKEY`

print a Switchboard account

```
USAGE
  $ sbv2 solana print PUBKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [--json]

ARGUMENTS
  PUBKEY  publicKey of the Switchboard account to search for

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a Switchboard account
```

## `sbv2 solana queue create`

create an oracle queue

```
USAGE
  $ sbv2 solana queue create [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u <value>]
    [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]
    [--json] [-a <value>] [--queueKeypair <value>] [--dataBufferKeypair <value>] [--size <value>] [--name <value>]
    [--metadata <value>] [--reward <value>] [--minStake <value>] [--oracleTimeout <value>] [--slashingEnabled]
    [--permissionedFeeds] [--unpermissionedVrf] [--enableBufferRelayers] [--feedProbationPeriod <value>]
    [--consecutiveFeedFailureLimit <value>] [--consecutiveOracleFailureLimit <value>]

FLAGS
  -a, --authority=<value>                  alternate keypair that is the authority for the queue and is required to
                                           approve permissions
  -h, --help                               Show CLI help.
  -k, --keypair=<value>                    keypair that will pay for onchain transactions. defaults to new account
                                           authority if no alternate authority provided
  -s, --silent                             suppress cli prompts
  -u, --rpcUrl=<value>                     alternate RPC url
  -v, --verbose                            log everything
  --cluster=<option>                       the solana cluster to connect to
                                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>                    [default: confirmed] transaction commitment level to use
                                           <options: confirmed|finalized|processed>
  --consecutiveFeedFailureLimit=<value>    [default: 1000] consecutive failure limit for a feed before feed permission
                                           is revoked.
  --consecutiveOracleFailureLimit=<value>  [default: 1000] consecutive failure limit for an oracle before oracle
                                           permission is revoked.
  --dataBufferKeypair=<value>              keypair to use for the oracle queue data buffer account.
  --enableBufferRelayers                   enabling this setting will allow buffer relayer accounts to call openRound.
  --feedProbationPeriod=<value>            [default: 1000] After a feed lease is funded or re-funded, it must
                                           consecutively succeed N amount of times or its authorization to use the queue
                                           is auto-revoked.
  --ledger                                 enable ledger support
  --ledgerPath=<value>                     HID path to the ledger
  --mainnetBeta                            WARNING: use mainnet-beta solana cluster
  --metadata=<value>                       metadata of the aggregator
  --minStake=<value>                       [default: 0] the reward payed out to oracles for responding to an update
                                           request on-chain, Ex: 2 requires oracles to have 2 wSOL in their staking
                                           wallet before heartbeating
  --name=<value>                           name of the aggregator
  --oracleTimeout=<value>                  [default: 180] time period (in seconds) we should remove an oracle after if
                                           no response
  --permissionedFeeds                      enabling this setting means data feeds need explicit permission to join the
                                           queue.
  --programId=<value>                      alternative Switchboard program ID to interact with
  --queueKeypair=<value>                   keypair to use for the oracle queue account. This will be the account's
                                           publicKey
  --reward=<value>                         [default: 0] the reward payed out to oracles for responding to an update
                                           request on-chain, Ex: A reward of 0.0000075 with a feed with a batchSize of 4
                                           would deduct (4 * 0.0000075) wSOL from an aggregators lease each round.
  --size=<value>                           [default: 100] set the size of the queue
  --slashingEnabled                        whether slashing is enabled on this queue.
  --unpermissionedVrf                      enabling this setting means data feeds do not need explicit permission to
                                           request VRF proofs and verifications from this queue.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create an oracle queue
```

## `sbv2 solana queue print QUEUEKEY`

print a queue account

```
USAGE
  $ sbv2 solana queue print QUEUEKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [--json] [--oracles]

ARGUMENTS
  QUEUEKEY  public key of the queue account

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --oracles              print the queue oracles
  --programId=<value>    alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a queue account
```

## `sbv2 solana queue set QUEUEKEY`

set an oracle queue's config

```
USAGE
  $ sbv2 solana queue set QUEUEKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value>
    --ledger] [--json] [-a <value>] [--name <value>] [--metadata <value>] [--reward <value>] [--minStake <value>]
    [--oracleTimeout <value>] [--slashingEnabled] [--unpermissionedFeeds | --permissionedFeeds] [--unpermissionedVrf]
    [--enableBufferRelayers] [--consecutiveFeedFailureLimit <value>] [--consecutiveOracleFailureLimit <value>]

ARGUMENTS
  QUEUEKEY  public key of the queue account

FLAGS
  -a, --authority=<value>                  alternate keypair that is the authority for the queue and is required to
                                           approve permissions
  -h, --help                               Show CLI help.
  -k, --keypair=<value>                    keypair that will pay for onchain transactions. defaults to new account
                                           authority if no alternate authority provided
  -s, --silent                             suppress cli prompts
  -u, --rpcUrl=<value>                     alternate RPC url
  -v, --verbose                            log everything
  --cluster=<option>                       the solana cluster to connect to
                                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>                    [default: confirmed] transaction commitment level to use
                                           <options: confirmed|finalized|processed>
  --consecutiveFeedFailureLimit=<value>    consecutive failure limit for a feed before feed permission is revoked.
  --consecutiveOracleFailureLimit=<value>  consecutive failure limit for an oracle before oracle permission is revoked.
  --enableBufferRelayers                   enabling this setting will allow buffer relayer accounts to call openRound.
  --ledger                                 enable ledger support
  --ledgerPath=<value>                     HID path to the ledger
  --mainnetBeta                            WARNING: use mainnet-beta solana cluster
  --metadata=<value>                       metadata of the aggregator
  --minStake=<value>                       the reward payed out to oracles for responding to an update request on-chain,
                                           Ex: 2 requires oracles to have 2 wSOL in their staking wallet before
                                           heartbeating
  --name=<value>                           name of the aggregator
  --oracleTimeout=<value>                  time period (in seconds) we should remove an oracle after if no response
  --permissionedFeeds                      enabling this setting means data feeds need explicit permission to join the
                                           queue.
  --programId=<value>                      alternative Switchboard program ID to interact with
  --reward=<value>                         the reward payed out to oracles for responding to an update request on-chain,
                                           Ex: A reward of 0.0000075 with a feed with a batchSize of 4 would deduct (4 *
                                           0.0000075) wSOL from an aggregators lease each round.
  --slashingEnabled                        whether slashing is enabled on this queue.
  --unpermissionedFeeds                    enabling this setting means data feeds do not need explicit permission to
                                           join the queue.
  --unpermissionedVrf                      enabling this setting means data feeds do not need explicit permission to
                                           request VRF proofs and verifications from this queue.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  set an oracle queue's config
```

## `sbv2 solana vrf open-round VRFKEY`

request a new vrf result from a set of oracles

```
USAGE
  $ sbv2 solana vrf open-round VRFKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value>
    --ledger] [--authority <value>]

ARGUMENTS
  VRFKEY  public key of the VRF account

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --authority=<value>    alternative keypair that is the VRF authority
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --ledger               enable ledger support
  --ledgerPath=<value>   HID path to the ledger
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  request a new vrf result from a set of oracles

ALIASES
  $ sbv2 solana vrf update
  $ sbv2 solana vrf open-round

EXAMPLES
  $ sbv2 solana vrf request
```

## `sbv2 solana vrf print VRFKEY`

print a VRF and it's associated accounts

```
USAGE
  $ sbv2 solana vrf print VRFKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [--json]

ARGUMENTS
  VRFKEY  public key of the VRF account

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a VRF and it's associated accounts
```

## `sbv2 solana vrf request VRFKEY`

request a new vrf result from a set of oracles

```
USAGE
  $ sbv2 solana vrf request VRFKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value>
    --ledger] [--authority <value>]

ARGUMENTS
  VRFKEY  public key of the VRF account

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --authority=<value>    alternative keypair that is the VRF authority
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --ledger               enable ledger support
  --ledgerPath=<value>   HID path to the ledger
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  request a new vrf result from a set of oracles

ALIASES
  $ sbv2 solana vrf update
  $ sbv2 solana vrf open-round

EXAMPLES
  $ sbv2 solana vrf request
```

## `sbv2 solana vrf update VRFKEY`

request a new vrf result from a set of oracles

```
USAGE
  $ sbv2 solana vrf update VRFKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value>
    --ledger] [--authority <value>]

ARGUMENTS
  VRFKEY  public key of the VRF account

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --authority=<value>    alternative keypair that is the VRF authority
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --ledger               enable ledger support
  --ledgerPath=<value>   HID path to the ledger
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  request a new vrf result from a set of oracles

ALIASES
  $ sbv2 solana vrf update
  $ sbv2 solana vrf open-round

EXAMPLES
  $ sbv2 solana vrf request
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

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v3.1.3/src/commands/update.ts)_

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

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v1.2.1/src/commands/version.ts)_
<!-- commandsstop -->
