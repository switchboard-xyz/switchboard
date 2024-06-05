<!-- template -->
<div align="center">
  <a href="#">
    <img src="https://github.com/switchboard-xyz/sb-core/raw/main/website/static/img/icons/switchboard/avatar.png" />
  </a>

  <h1>@switchboard-xyz/cli</h1>

  <p>A command line tool to interact with Switchboard.</p>

  <p>

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@switchboard-xyz/cli.svg)](https://npmjs.org/package/@switchboard-xyz/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@switchboard-xyz/cli.svg)](https://npmjs.org/package/@switchboard-xyz/cli)
[![License](https://img.shields.io/npm/l/@switchboard-xyz/cli.svg)](https://github.com/switchboard-xyz/sb-core/blob/main/cli/LICENSE)

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

Run the following command to install the `sb` binary in your $PATH.

```bash npm2yarn
npm install -g @switchboard-xyz/cli
```

You can re-run this command to upgrade your CLI version or run the command:

```bash
sb update stable
```

## Setup

### Solana

```bash
# Devnet
sb config set solana devnet rpc https://api.devnet.solana.com
sb config set solana devnet default-account "~/.config/solana/id.json"

# Mainnet
sb config set solana mainnet-beta rpc https://api.mainnet-beta.solana.com
sb config set solana mainnet-beta default-account "~/.config/solana/id.json"
```

### Aptos

```bash
# Testnet
sb config set aptos testnet rpc https://fullnode.testnet.aptoslabs.com/v1
sb config set aptos testnet default-account ".aptos/config.yaml"

# Devnet
sb config set aptos devnet rpc https://fullnode.devnet.aptoslabs.com/v1
sb config set aptos devnet default-account ".aptos/config.yaml"
```

### NEAR

```bash
# Testnet
sb config set near testnet rpc https://rpc.testnet.near.org
sb config set near testnet default-account my-named-account.testnet

# Mainnet
sb config set near mainnet rpc https://rpc.mainnet.near.org
sb config set near mainnet default-account my-named-account.near
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

- [`sb anchor test`](#sb-anchor-test)
- [`sb aptos account airdrop`](#sb-aptos-account-airdrop)
- [`sb aptos aggregator add job AGGREGATORHEXSTRING`](#sb-aptos-aggregator-add-job-aggregatorhexstring)
- [`sb aptos aggregator create QUEUEHEXSTRING`](#sb-aptos-aggregator-create-queuehexstring)
- [`sb aptos aggregator job add AGGREGATORHEXSTRING`](#sb-aptos-aggregator-job-add-aggregatorhexstring)
- [`sb aptos aggregator update AGGREGATORHEXSTRING`](#sb-aptos-aggregator-update-aggregatorhexstring)
- [`sb aptos crank create QUEUEHEXSTRING`](#sb-aptos-crank-create-queuehexstring)
- [`sb aptos crank list CRANKHEXSTRING`](#sb-aptos-crank-list-crankhexstring)
- [`sb aptos crank pop CRANKHEXSTRING`](#sb-aptos-crank-pop-crankhexstring)
- [`sb aptos crank push CRANKHEXSTRING`](#sb-aptos-crank-push-crankhexstring)
- [`sb aptos create aggregator QUEUEHEXSTRING`](#sb-aptos-create-aggregator-queuehexstring)
- [`sb aptos create crank QUEUEHEXSTRING`](#sb-aptos-create-crank-queuehexstring)
- [`sb aptos create job QUEUEHEXSTRING JOBDEFINITION`](#sb-aptos-create-job-queuehexstring-jobdefinition)
- [`sb aptos create oracle QUEUEHEXSTRING`](#sb-aptos-create-oracle-queuehexstring)
- [`sb aptos create queue`](#sb-aptos-create-queue)
- [`sb aptos job create QUEUEHEXSTRING JOBDEFINITION`](#sb-aptos-job-create-queuehexstring-jobdefinition)
- [`sb aptos list crank CRANKHEXSTRING`](#sb-aptos-list-crank-crankhexstring)
- [`sb aptos oracle create QUEUEHEXSTRING`](#sb-aptos-oracle-create-queuehexstring)
- [`sb aptos oracle metrics ORACLEHEXSTRING`](#sb-aptos-oracle-metrics-oraclehexstring)
- [`sb aptos oracle up ORACLEHEXSTRING`](#sb-aptos-oracle-up-oraclehexstring)
- [`sb aptos permission create GRANTER`](#sb-aptos-permission-create-granter)
- [`sb aptos permission set GRANTER`](#sb-aptos-permission-set-granter)
- [`sb aptos pop crank CRANKHEXSTRING`](#sb-aptos-pop-crank-crankhexstring)
- [`sb aptos print ACCOUNTTYPE ADDRESS`](#sb-aptos-print-accounttype-address)
- [`sb aptos push crank CRANKHEXSTRING`](#sb-aptos-push-crank-crankhexstring)
- [`sb aptos queue create`](#sb-aptos-queue-create)
- [`sb aptos update aggregator AGGREGATORHEXSTRING`](#sb-aptos-update-aggregator-aggregatorhexstring)
- [`sb config print`](#sb-config-print)
- [`sb config set CHAIN NETWORK PARAMETER [VALUE]`](#sb-config-set-chain-network-parameter-value)
- [`sb enclave`](#sb-enclave)
- [`sb evm enclave print ENCLAVEKEY`](#sb-evm-enclave-print-enclavekey)
- [`sb evm function add-enclave FUNCTIONKEY`](#sb-evm-function-add-enclave-functionkey)
- [`sb evm function configure FUNCTIONKEY`](#sb-evm-function-configure-functionkey)
- [`sb evm function create QUEUEKEY`](#sb-evm-function-create-queuekey)
- [`sb evm function fund FUNCTIONKEY`](#sb-evm-function-fund-functionkey)
- [`sb evm function print FUNCTIONKEY`](#sb-evm-function-print-functionkey)
- [`sb evm function remove-enclave FUNCTIONKEY`](#sb-evm-function-remove-enclave-functionkey)
- [`sb evm function test`](#sb-evm-function-test)
- [`sb evm queue print QUEUEKEY`](#sb-evm-queue-print-queuekey)
- [`sb evm request print REQUESTKEY`](#sb-evm-request-print-requestkey)
- [`sb evm request send FUNCTIONKEY`](#sb-evm-request-send-functionkey)
- [`sb evm routine create FUNCTIONKEY`](#sb-evm-routine-create-functionkey)
- [`sb evm routine fund ROUTINEKEY`](#sb-evm-routine-fund-routinekey)
- [`sb evm routine print ROUTINEKEY`](#sb-evm-routine-print-routinekey)
- [`sb function-init TEMPLATE`](#sb-function-init-template)
- [`sb help [COMMANDS]`](#sb-help-commands)
- [`sb job test`](#sb-job-test)
- [`sb mrenclave`](#sb-mrenclave)
- [`sb oracle logs NETWORK SEARCHSTRING`](#sb-oracle-logs-network-searchstring)
- [`sb solana aggregator add history AGGREGATORKEY`](#sb-solana-aggregator-add-history-aggregatorkey)
- [`sb solana aggregator add job AGGREGATORKEY`](#sb-solana-aggregator-add-job-aggregatorkey)
- [`sb solana aggregator authority AGGREGATORKEY`](#sb-solana-aggregator-authority-aggregatorkey)
- [`sb solana aggregator close AGGREGATORKEY`](#sb-solana-aggregator-close-aggregatorkey)
- [`sb solana aggregator create QUEUEKEY`](#sb-solana-aggregator-create-queuekey)
- [`sb solana aggregator create json DEFINITIONFILE`](#sb-solana-aggregator-create-json-definitionfile)
- [`sb solana aggregator deposit AGGREGATORKEY`](#sb-solana-aggregator-deposit-aggregatorkey)
- [`sb solana aggregator extend AGGREGATORKEY`](#sb-solana-aggregator-extend-aggregatorkey)
- [`sb solana aggregator fund AGGREGATORKEY`](#sb-solana-aggregator-fund-aggregatorkey)
- [`sb solana aggregator history AGGREGATORKEY`](#sb-solana-aggregator-history-aggregatorkey)
- [`sb solana aggregator lease set AGGREGATORKEY`](#sb-solana-aggregator-lease-set-aggregatorkey)
- [`sb solana aggregator list AUTHORITYKEY`](#sb-solana-aggregator-list-authoritykey)
- [`sb solana aggregator lock AGGREGATORKEY`](#sb-solana-aggregator-lock-aggregatorkey)
- [`sb solana aggregator metrics AGGREGATORKEY`](#sb-solana-aggregator-metrics-aggregatorkey)
- [`sb solana aggregator mode AGGREGATORKEY`](#sb-solana-aggregator-mode-aggregatorkey)
- [`sb solana aggregator open-round AGGREGATORKEY`](#sb-solana-aggregator-open-round-aggregatorkey)
- [`sb solana aggregator permission create AGGREGATORKEY`](#sb-solana-aggregator-permission-create-aggregatorkey)
- [`sb solana aggregator print AGGREGATORKEY`](#sb-solana-aggregator-print-aggregatorkey)
- [`sb solana aggregator remove job AGGREGATORKEY JOBKEY`](#sb-solana-aggregator-remove-job-aggregatorkey-jobkey)
- [`sb solana aggregator set AGGREGATORKEY`](#sb-solana-aggregator-set-aggregatorkey)
- [`sb solana aggregator transfer AGGREGATORKEY`](#sb-solana-aggregator-transfer-aggregatorkey)
- [`sb solana aggregator update AGGREGATORKEY`](#sb-solana-aggregator-update-aggregatorkey)
- [`sb solana aggregator watch AGGREGATORKEY`](#sb-solana-aggregator-watch-aggregatorkey)
- [`sb solana aggregator withdraw AGGREGATORKEY`](#sb-solana-aggregator-withdraw-aggregatorkey)
- [`sb solana anchor test`](#sb-solana-anchor-test)
- [`sb solana attestation-queue add-enclave QUEUEKEY`](#sb-solana-attestation-queue-add-enclave-queuekey)
- [`sb solana attestation-queue create`](#sb-solana-attestation-queue-create)
- [`sb solana attestation-queue print QUEUEKEY`](#sb-solana-attestation-queue-print-queuekey)
- [`sb solana attestation-queue remove-enclave QUEUEKEY`](#sb-solana-attestation-queue-remove-enclave-queuekey)
- [`sb solana buffer create QUEUEKEY`](#sb-solana-buffer-create-queuekey)
- [`sb solana buffer open-round BUFFERRELAYERKEY`](#sb-solana-buffer-open-round-bufferrelayerkey)
- [`sb solana buffer update BUFFERRELAYERKEY`](#sb-solana-buffer-update-bufferrelayerkey)
- [`sb solana crank create QUEUEKEY`](#sb-solana-crank-create-queuekey)
- [`sb solana crank events AGGREGATORKEY`](#sb-solana-crank-events-aggregatorkey)
- [`sb solana crank pop CRANKKEY`](#sb-solana-crank-pop-crankkey)
- [`sb solana crank print CRANKKEY`](#sb-solana-crank-print-crankkey)
- [`sb solana crank push AGGREGATORKEY`](#sb-solana-crank-push-aggregatorkey)
- [`sb solana crank reset AGGREGATORKEY`](#sb-solana-crank-reset-aggregatorkey)
- [`sb solana function add-enclave FUNCTIONKEY`](#sb-solana-function-add-enclave-functionkey)
- [`sb solana function addMrEnclave FUNCTIONKEY`](#sb-solana-function-addmrenclave-functionkey)
- [`sb solana function close FUNCTIONKEY`](#sb-solana-function-close-functionkey)
- [`sb solana function configure FUNCTIONKEY`](#sb-solana-function-configure-functionkey)
- [`sb solana function create QUEUEKEY`](#sb-solana-function-create-queuekey)
- [`sb solana function fund FUNCTIONKEY`](#sb-solana-function-fund-functionkey)
- [`sb solana function get`](#sb-solana-function-get)
- [`sb solana function print FUNCTIONKEY`](#sb-solana-function-print-functionkey)
- [`sb solana function remove-enclave FUNCTIONKEY`](#sb-solana-function-remove-enclave-functionkey)
- [`sb solana function rmMrEnclave FUNCTIONKEY`](#sb-solana-function-rmmrenclave-functionkey)
- [`sb solana function send-request FUNCTIONKEY`](#sb-solana-function-send-request-functionkey)
- [`sb solana function sync-enclave FUNCTIONKEY`](#sb-solana-function-sync-enclave-functionkey)
- [`sb solana function test`](#sb-solana-function-test)
- [`sb solana function withdraw FUNCTIONKEY`](#sb-solana-function-withdraw-functionkey)
- [`sb solana job create`](#sb-solana-job-create)
- [`sb solana job print JOBKEY`](#sb-solana-job-print-jobkey)
- [`sb solana json create aggregator DEFINITIONFILE`](#sb-solana-json-create-aggregator-definitionfile)
- [`sb solana lease create AGGREGATORKEY`](#sb-solana-lease-create-aggregatorkey)
- [`sb solana lease extend AGGREGATORKEY`](#sb-solana-lease-extend-aggregatorkey)
- [`sb solana lease print LEASEKEY`](#sb-solana-lease-print-leasekey)
- [`sb solana lease set AGGREGATORKEY`](#sb-solana-lease-set-aggregatorkey)
- [`sb solana lease withdraw AGGREGATORKEY`](#sb-solana-lease-withdraw-aggregatorkey)
- [`sb solana network create`](#sb-solana-network-create)
- [`sb solana network save`](#sb-solana-network-save)
- [`sb solana network start`](#sb-solana-network-start)
- [`sb solana oracle create QUEUEKEY`](#sb-solana-oracle-create-queuekey)
- [`sb solana oracle print ORACLEKEY`](#sb-solana-oracle-print-oraclekey)
- [`sb solana oracle up`](#sb-solana-oracle-up)
- [`sb solana oracle withdraw ORACLEKEY`](#sb-solana-oracle-withdraw-oraclekey)
- [`sb solana permission create`](#sb-solana-permission-create)
- [`sb solana permission grant PERMISSIONKEY`](#sb-solana-permission-grant-permissionkey)
- [`sb solana permission print PERMISSIONKEY`](#sb-solana-permission-print-permissionkey)
- [`sb solana permission revoke PERMISSIONKEY`](#sb-solana-permission-revoke-permissionkey)
- [`sb solana print PUBKEY`](#sb-solana-print-pubkey)
- [`sb solana queue create`](#sb-solana-queue-create)
- [`sb solana queue print QUEUEKEY`](#sb-solana-queue-print-queuekey)
- [`sb solana queue set QUEUEKEY`](#sb-solana-queue-set-queuekey)
- [`sb solana request print REQUESTKEY`](#sb-solana-request-print-requestkey)
- [`sb solana request send FUNCTIONKEY`](#sb-solana-request-send-functionkey)
- [`sb solana routine configure ROUTINEKEY`](#sb-solana-routine-configure-routinekey)
- [`sb solana routine create FUNCTIONKEY`](#sb-solana-routine-create-functionkey)
- [`sb solana routine fund ROUTINEKEY`](#sb-solana-routine-fund-routinekey)
- [`sb solana routine print ROUTINEKEY`](#sb-solana-routine-print-routinekey)
- [`sb solana verifier-oracle create QUEUEKEY`](#sb-solana-verifier-oracle-create-queuekey)
- [`sb solana verifier-oracle print VERIFIERKEY`](#sb-solana-verifier-oracle-print-verifierkey)
- [`sb solana version`](#sb-solana-version)
- [`sb solana vrf open-round VRFKEY`](#sb-solana-vrf-open-round-vrfkey)
- [`sb solana vrf print VRFKEY`](#sb-solana-vrf-print-vrfkey)
- [`sb solana vrf request VRFKEY`](#sb-solana-vrf-request-vrfkey)
- [`sb solana vrf update VRFKEY`](#sb-solana-vrf-update-vrfkey)
- [`sb update [CHANNEL]`](#sb-update-channel)
- [`sb version`](#sb-version)

## `sb anchor test`

run anchor test and a switchboard oracle in parallel

```
USAGE
  $ sb anchor test [-h] [-v] [-s] [--mainnetBeta | --cluster localnet|devnet] [-u <value>] [--mainnetRpcUrl
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
  $ sb anchor test
```

## `sb aptos account airdrop`

request an airdrop

```
USAGE
  $ sb aptos account airdrop --address <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>]
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

_See code: [dist/commands/aptos/account/airdrop.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/aptos/account/airdrop.js)_

## `sb aptos aggregator add job AGGREGATORHEXSTRING`

add a job to an aggregator

```
USAGE
  $ sb aptos aggregator add job AGGREGATORHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
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
  $ sb aptos aggregator job add
```

_See code: [dist/commands/aptos/aggregator/add/job.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/aptos/aggregator/add/job.js)_

## `sb aptos aggregator create QUEUEHEXSTRING`

create an aptos aggregator for a given queue

```
USAGE
  $ sb aptos aggregator create QUEUEHEXSTRING --keypair <value> --updateInterval <value> [-h] [-v] [-s] [--networkId
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
  $ sb aptos create aggregator
```

_See code: [dist/commands/aptos/aggregator/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/aptos/aggregator/create.js)_

## `sb aptos aggregator job add AGGREGATORHEXSTRING`

add a job to an aggregator

```
USAGE
  $ sb aptos aggregator job add AGGREGATORHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
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
  $ sb aptos aggregator job add
```

## `sb aptos aggregator update AGGREGATORHEXSTRING`

request a new value on-chain for an aggregator

```
USAGE
  $ sb aptos aggregator update AGGREGATORHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
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
  $ sb aptos update aggregator
```

_See code: [dist/commands/aptos/aggregator/update.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/aptos/aggregator/update.js)_

## `sb aptos crank create QUEUEHEXSTRING`

create a new crank

```
USAGE
  $ sb aptos crank create QUEUEHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
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
  $ sb aptos create crank
```

_See code: [dist/commands/aptos/crank/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/aptos/crank/create.js)_

## `sb aptos crank list CRANKHEXSTRING`

sort the crank

```
USAGE
  $ sb aptos crank list CRANKHEXSTRING [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>] [-u
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
  $ sb aptos list crank
```

_See code: [dist/commands/aptos/crank/list.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/aptos/crank/list.js)_

## `sb aptos crank pop CRANKHEXSTRING`

pop the crank

```
USAGE
  $ sb aptos crank pop CRANKHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
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
  $ sb aptos pop crank
```

_See code: [dist/commands/aptos/crank/pop.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/aptos/crank/pop.js)_

## `sb aptos crank push CRANKHEXSTRING`

push an aggregator onto the crank

```
USAGE
  $ sb aptos crank push CRANKHEXSTRING --keypair <value> -a <value> [-h] [-v] [-s] [--networkId
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
  $ sb aptos push crank
```

_See code: [dist/commands/aptos/crank/push.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/aptos/crank/push.js)_

## `sb aptos create aggregator QUEUEHEXSTRING`

create an aptos aggregator for a given queue

```
USAGE
  $ sb aptos create aggregator QUEUEHEXSTRING --keypair <value> --updateInterval <value> [-h] [-v] [-s] [--networkId
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
  $ sb aptos create aggregator
```

## `sb aptos create crank QUEUEHEXSTRING`

create a new crank

```
USAGE
  $ sb aptos create crank QUEUEHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
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
  $ sb aptos create crank
```

## `sb aptos create job QUEUEHEXSTRING JOBDEFINITION`

create a new job

```
USAGE
  $ sb aptos create job QUEUEHEXSTRING JOBDEFINITION --keypair <value> [-h] [-v] [-s] [--networkId
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
  $ sb aptos create job
```

## `sb aptos create oracle QUEUEHEXSTRING`

create a oracle for a given queue

```
USAGE
  $ sb aptos create oracle QUEUEHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
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
  $ sb aptos create oracle
```

## `sb aptos create queue`

create a new oracle queue

```
USAGE
  $ sb aptos create queue --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>]
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
  $ sb aptos create queue
```

## `sb aptos job create QUEUEHEXSTRING JOBDEFINITION`

create a new job

```
USAGE
  $ sb aptos job create QUEUEHEXSTRING JOBDEFINITION --keypair <value> [-h] [-v] [-s] [--networkId
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
  $ sb aptos create job
```

_See code: [dist/commands/aptos/job/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/aptos/job/create.js)_

## `sb aptos list crank CRANKHEXSTRING`

sort the crank

```
USAGE
  $ sb aptos list crank CRANKHEXSTRING [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>] [-u
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
  $ sb aptos list crank
```

## `sb aptos oracle create QUEUEHEXSTRING`

create a oracle for a given queue

```
USAGE
  $ sb aptos oracle create QUEUEHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
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
  $ sb aptos create oracle
```

_See code: [dist/commands/aptos/oracle/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/aptos/oracle/create.js)_

## `sb aptos oracle metrics ORACLEHEXSTRING`

list oracle metrics

```
USAGE
  $ sb aptos oracle metrics ORACLEHEXSTRING [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>] [-u
    <value>] [--json]

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

_See code: [dist/commands/aptos/oracle/metrics.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/aptos/oracle/metrics.js)_

## `sb aptos oracle up ORACLEHEXSTRING`

start an aptos docker oracle

```
USAGE
  $ sb aptos oracle up ORACLEHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
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

_See code: [dist/commands/aptos/oracle/up.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/aptos/oracle/up.js)_

## `sb aptos permission create GRANTER`

create a new permission

```
USAGE
  $ sb aptos permission create GRANTER --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId
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

_See code: [dist/commands/aptos/permission/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/aptos/permission/create.js)_

## `sb aptos permission set GRANTER`

create a new permission

```
USAGE
  $ sb aptos permission set GRANTER --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId
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

_See code: [dist/commands/aptos/permission/set.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/aptos/permission/set.js)_

## `sb aptos pop crank CRANKHEXSTRING`

pop the crank

```
USAGE
  $ sb aptos pop crank CRANKHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
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
  $ sb aptos pop crank
```

## `sb aptos print ACCOUNTTYPE ADDRESS`

print an aptos account

```
USAGE
  $ sb aptos print ACCOUNTTYPE ADDRESS [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>]
    [-u <value>] [--json]

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
  $ sb aptos print
```

_See code: [dist/commands/aptos/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/aptos/print.js)_

## `sb aptos push crank CRANKHEXSTRING`

push an aggregator onto the crank

```
USAGE
  $ sb aptos push crank CRANKHEXSTRING --keypair <value> -a <value> [-h] [-v] [-s] [--networkId
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
  $ sb aptos push crank
```

## `sb aptos queue create`

create a new oracle queue

```
USAGE
  $ sb aptos queue create --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>]
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
  $ sb aptos create queue
```

_See code: [dist/commands/aptos/queue/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/aptos/queue/create.js)_

## `sb aptos update aggregator AGGREGATORHEXSTRING`

request a new value on-chain for an aggregator

```
USAGE
  $ sb aptos update aggregator AGGREGATORHEXSTRING --keypair <value> [-h] [-v] [-s] [--networkId devnet|testnet|mainnet]
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
  $ sb aptos update aggregator
```

## `sb config print`

print cli config

```
USAGE
  $ sb config print [-h] [-v] [-s] [--json]

FLAGS
  -h, --help     Show CLI help.
  -s, --silent   suppress cli prompts
  -v, --verbose  log everything

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print cli config

EXAMPLES
  $ sb config:print
```

_See code: [dist/commands/config/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/config/print.js)_

## `sb config set CHAIN NETWORK PARAMETER [VALUE]`

set a configuration option

```
USAGE
  $ sb config set CHAIN NETWORK PARAMETER [VALUE] [-h] [-v] [-s] [-r]

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

_See code: [dist/commands/config/set.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/config/set.js)_

## `sb enclave`

Fetch the MrEnclave value for a given container

```
USAGE
  $ sb enclave -c <value> [-h] [-v] [-s] [--json] [--containerRegistry <value>] [--version <value>]

FLAGS
  -c, --container=<value>      (required) the name of the container
  -h, --help                   Show CLI help.
  -s, --silent                 suppress cli prompts
  -v, --verbose                log everything
  --containerRegistry=<value>  the container registry to fetch from. Currently only dockerhub is supported
  --version=<value>            the version of the container, defaults to 'latest'

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Fetch the MrEnclave value for a given container

ALIASES
  $ sb enclave
```

## `sb evm enclave print ENCLAVEKEY`

Print an enclave's state

```
USAGE
  $ sb evm enclave print ENCLAVEKEY [-h] [-v] [-s] [--chain coredao|arbitrum|optimism|base|aurora | --coredao |
    --arbitrum | --optimism | --base | --aurora] [--network mainnet|testnet | --mainnet | --testnet] [-u <value>]
    [--programId <value>] [--json]

ARGUMENTS
  ENCLAVEKEY  address of the enclave

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --arbitrum            use the arbitrum chain
  --aurora              use the aurora chain
  --base                use the base chain
  --chain=<option>      the evm chain to interact with
                        <options: coredao|arbitrum|optimism|base|aurora>
  --coredao             use the coredao chain
  --mainnet             use the mainnet network
  --network=<option>    the EVM network to connect to
                        <options: mainnet|testnet>
  --optimism            use the optimism chain
  --programId=<value>   alternative Switchboard program ID to interact with
  --testnet             use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Print an enclave's state

EXAMPLES
  $ sb evm enclave print 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --chain arbitrum --network testnet --programId 0x4F706C62535d171883A6cc9384f3f3d926A6BA49
```

_See code: [dist/commands/evm/enclave/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/evm/enclave/print.js)_

## `sb evm function add-enclave FUNCTIONKEY`

Add MrEnclave to a function account

```
USAGE
  $ sb evm function add-enclave FUNCTIONKEY --account <value> --mrEnclave <value> [-h] [-v] [-s] [--chain
    coredao|arbitrum|optimism|base|aurora | --coredao | --arbitrum | --optimism | --base | --aurora] [--network
    mainnet|testnet | --mainnet | --testnet] [-u <value>] [--programId <value>] [--json]

ARGUMENTS
  FUNCTIONKEY  address of the function account

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --account=<value>     (required) Path to file containing the private key for the payer account
  --arbitrum            use the arbitrum chain
  --aurora              use the aurora chain
  --base                use the base chain
  --chain=<option>      the evm chain to interact with
                        <options: coredao|arbitrum|optimism|base|aurora>
  --coredao             use the coredao chain
  --mainnet             use the mainnet network
  --mrEnclave=<value>   (required) The MrEnclave to add
  --network=<option>    the EVM network to connect to
                        <options: mainnet|testnet>
  --optimism            use the optimism chain
  --programId=<value>   alternative Switchboard program ID to interact with
  --testnet             use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Add MrEnclave to a function account

EXAMPLES
  $ sb evm function add-enclave $FUNCTION_ID --chain arbitrum --network testnet --mrEnclave $MEASUREMENT --account ../.kp.txt --programId $SWITCHBOARD_ADDRESS
```

_See code: [dist/commands/evm/function/add-enclave.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/evm/function/add-enclave.js)_

## `sb evm function configure FUNCTIONKEY`

Configure a function account

```
USAGE
  $ sb evm function configure FUNCTIONKEY --account <value> [-h] [-v] [-s] [--chain coredao|arbitrum|optimism|base|aurora |
    --coredao | --arbitrum | --optimism | --base | --aurora] [--network mainnet|testnet | --mainnet | --testnet] [-u
    <value>] [--programId <value>] [--json] [--name <value>] [--authority <value>] [--containerRegistry <value>]
    [--container <value>] [--version <value>]

ARGUMENTS
  FUNCTIONKEY  address of the function account

FLAGS
  -h, --help                   Show CLI help.
  -s, --silent                 suppress cli prompts
  -u, --rpcUrl=<value>         alternate RPC url
  -v, --verbose                log everything
  --account=<value>            (required) Path to file containing the private key for the payer account
  --arbitrum                   use the arbitrum chain
  --aurora                     use the aurora chain
  --authority=<value>          update the authority for the function
  --base                       use the base chain
  --chain=<option>             the evm chain to interact with
                               <options: coredao|arbitrum|optimism|base|aurora>
  --container=<value>          update the container for the function
  --containerRegistry=<value>  update the container registry for the function
  --coredao                    use the coredao chain
  --mainnet                    use the mainnet network
  --name=<value>               update the name for the function
  --network=<option>           the EVM network to connect to
                               <options: mainnet|testnet>
  --optimism                   use the optimism chain
  --programId=<value>          alternative Switchboard program ID to interact with
  --testnet                    use the testnet network
  --version=<value>            update the container version for the function

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Configure a function account

EXAMPLES
  $ sb evm function fund 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --chain arbitrum --network testnet --fundAmount 0.02 --account ~/.arbitrum-kp.txt --programId 0x4F706C62535d171883A6cc9384f3f3d926A6BA49
```

_See code: [dist/commands/evm/function/configure.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/evm/function/configure.js)_

## `sb evm function create QUEUEKEY`

create a new function account for a given queue

```
USAGE
  $ sb evm function create QUEUEKEY --account <value> --container <value> [-h] [-v] [-s] [--chain
    coredao|arbitrum|optimism|base|aurora | --coredao | --arbitrum | --optimism | --base | --aurora] [--network
    mainnet|testnet | --mainnet | --testnet] [-u <value>] [--programId <value>] [--json] [-n <value>] [-a <value>]
    [--fundAmount <value>] [--containerRegistry dockerhub|ipfs] [--version <value>] [--mrEnclave <value>]

ARGUMENTS
  QUEUEKEY  address of the attestation queue account

FLAGS
  -a, --authority=<value>       keypair or address to delegate authority to for managing the function account
  -h, --help                    Show CLI help.
  -n, --name=<value>            name of the function for easier identification
  -s, --silent                  suppress cli prompts
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --account=<value>             (required) Path to file containing the private key for the payer account
  --arbitrum                    use the arbitrum chain
  --aurora                      use the aurora chain
  --base                        use the base chain
  --chain=<option>              the evm chain to interact with
                                <options: coredao|arbitrum|optimism|base|aurora>
  --container=<value>           (required) the location of the container (Ex. switchboardlabs/basic-oracle-function)
  --containerRegistry=<option>  [default: dockerhub] the registry to pull the container from (Ex. Docker or IPFS)
                                <options: dockerhub|ipfs>
  --coredao                     use the coredao chain
  --fundAmount=<value>          [default: 0.0] token amount to load into the function's escrow wallet.
  --mainnet                     use the mainnet network
  --mrEnclave=<value>           the MrEnclave value to set for the function - if not provided, will be set automatically
                                after its first run
  --network=<option>            the EVM network to connect to
                                <options: mainnet|testnet>
  --optimism                    use the optimism chain
  --programId=<value>           alternative Switchboard program ID to interact with
  --testnet                     use the testnet network
  --version=<value>             [default: latest] the version of the container to pull from the registry (Ex. 'latest'
                                or 'mainnet')

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new function account for a given queue

EXAMPLES
  $ sb evm function create F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy --name function-1 --fundAmount 0.25 --container switchboardlabs/basic-oracle-function --version latest
```

_See code: [dist/commands/evm/function/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/evm/function/create.js)_

## `sb evm function fund FUNCTIONKEY`

Fund a function account

```
USAGE
  $ sb evm function fund FUNCTIONKEY --account <value> [-h] [-v] [-s] [--chain coredao|arbitrum|optimism|base|aurora |
    --coredao | --arbitrum | --optimism | --base | --aurora] [--network mainnet|testnet | --mainnet | --testnet] [-u
    <value>] [--programId <value>] [--json] [--fundAmount <value>]

ARGUMENTS
  FUNCTIONKEY  address of the function account

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --account=<value>     (required) Path to file containing the private key for the payer account
  --arbitrum            use the arbitrum chain
  --aurora              use the aurora chain
  --base                use the base chain
  --chain=<option>      the evm chain to interact with
                        <options: coredao|arbitrum|optimism|base|aurora>
  --coredao             use the coredao chain
  --fundAmount=<value>  [default: 0.0] token amount to load into the function's escrow wallet.
  --mainnet             use the mainnet network
  --network=<option>    the EVM network to connect to
                        <options: mainnet|testnet>
  --optimism            use the optimism chain
  --programId=<value>   alternative Switchboard program ID to interact with
  --testnet             use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Fund a function account

EXAMPLES
  $ sb evm function fund 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --chain arbitrum --network testnet --fundAmount 0.02 --account ~/.arbitrum-kp.txt --programId 0x4F706C62535d171883A6cc9384f3f3d926A6BA49
```

_See code: [dist/commands/evm/function/fund.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/evm/function/fund.js)_

## `sb evm function print FUNCTIONKEY`

Print a function account

```
USAGE
  $ sb evm function print FUNCTIONKEY [-h] [-v] [-s] [--chain coredao|arbitrum|optimism|base|aurora | --coredao |
    --arbitrum | --optimism | --base | --aurora] [--network mainnet|testnet | --mainnet | --testnet] [-u <value>]
    [--programId <value>] [--json]

ARGUMENTS
  FUNCTIONKEY  address of the function account

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --arbitrum            use the arbitrum chain
  --aurora              use the aurora chain
  --base                use the base chain
  --chain=<option>      the evm chain to interact with
                        <options: coredao|arbitrum|optimism|base|aurora>
  --coredao             use the coredao chain
  --mainnet             use the mainnet network
  --network=<option>    the EVM network to connect to
                        <options: mainnet|testnet>
  --optimism            use the optimism chain
  --programId=<value>   alternative Switchboard program ID to interact with
  --testnet             use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Print a function account

EXAMPLES
  $ sb evm function print 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --chain arbitrum --network testnet --programId 0x4F706C62535d171883A6cc9384f3f3d926A6BA49
```

_See code: [dist/commands/evm/function/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/evm/function/print.js)_

## `sb evm function remove-enclave FUNCTIONKEY`

Remove MrEnclave to a function account

```
USAGE
  $ sb evm function remove-enclave FUNCTIONKEY --account <value> --mrEnclave <value> [-h] [-v] [-s] [--chain
    coredao|arbitrum|optimism|base|aurora | --coredao | --arbitrum | --optimism | --base | --aurora] [--network
    mainnet|testnet | --mainnet | --testnet] [-u <value>] [--programId <value>] [--json]

ARGUMENTS
  FUNCTIONKEY  address of the function account

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --account=<value>     (required) Path to file containing the private key for the payer account
  --arbitrum            use the arbitrum chain
  --aurora              use the aurora chain
  --base                use the base chain
  --chain=<option>      the evm chain to interact with
                        <options: coredao|arbitrum|optimism|base|aurora>
  --coredao             use the coredao chain
  --mainnet             use the mainnet network
  --mrEnclave=<value>   (required) The MrEnclave to remove
  --network=<option>    the EVM network to connect to
                        <options: mainnet|testnet>
  --optimism            use the optimism chain
  --programId=<value>   alternative Switchboard program ID to interact with
  --testnet             use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Remove MrEnclave to a function account

EXAMPLES
  $ sb evm function removeMrEnclave 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --chain arbitrum --network testnet --removeMrEnclace 0xDEADBEEF --account ~/.arbitrum-kp.txt --programId 0x4F706C62535d171883A6cc9384f3f3d926A6BA49
```

_See code: [dist/commands/evm/function/remove-enclave.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/evm/function/remove-enclave.js)_

## `sb evm function test`

Test a local function before publishing

```
USAGE
  $ sb evm function test [-h] [-v] [-s] [--chain coredao|arbitrum|optimism|base|aurora | --coredao | --arbitrum |
    --optimism | --base | --aurora] [--network mainnet|testnet | --mainnet | --testnet] [-u <value>] [--programId
    <value>] [--json] [--parameters <value>]

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --arbitrum            use the arbitrum chain
  --aurora              use the aurora chain
  --base                use the base chain
  --chain=<option>      the evm chain to interact with
                        <options: coredao|arbitrum|optimism|base|aurora>
  --coredao             use the coredao chain
  --mainnet             use the mainnet network
  --network=<option>    the EVM network to connect to
                        <options: mainnet|testnet>
  --optimism            use the optimism chain
  --parameters=<value>  Parameters to pass to the run
  --programId=<value>   alternative Switchboard program ID to interact with
  --testnet             use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Test a local function before publishing

EXAMPLES
  $ sb evm function test --parameters 'uint256:1,string:hello
```

_See code: [dist/commands/evm/function/test.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/evm/function/test.js)_

## `sb evm queue print QUEUEKEY`

Print an attestation queue account

```
USAGE
  $ sb evm queue print QUEUEKEY [-h] [-v] [-s] [--chain coredao|arbitrum|optimism|base|aurora | --coredao |
    --arbitrum | --optimism | --base | --aurora] [--network mainnet|testnet | --mainnet | --testnet] [-u <value>]
    [--programId <value>] [--json]

ARGUMENTS
  QUEUEKEY  address of the attestation queue

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --arbitrum            use the arbitrum chain
  --aurora              use the aurora chain
  --base                use the base chain
  --chain=<option>      the evm chain to interact with
                        <options: coredao|arbitrum|optimism|base|aurora>
  --coredao             use the coredao chain
  --mainnet             use the mainnet network
  --network=<option>    the EVM network to connect to
                        <options: mainnet|testnet>
  --optimism            use the optimism chain
  --programId=<value>   alternative Switchboard program ID to interact with
  --testnet             use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Print an attestation queue account

EXAMPLES
  $ sb evm queue print 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --chain arbitrum --network testnet --programId 0x4F706C62535d171883A6cc9384f3f3d926A6BA49
```

_See code: [dist/commands/evm/queue/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/evm/queue/print.js)_

## `sb evm request print REQUESTKEY`

Print a function request

```
USAGE
  $ sb evm request print REQUESTKEY [-h] [-v] [-s] [--chain coredao|arbitrum|optimism|base|aurora | --coredao |
    --arbitrum | --optimism | --base | --aurora] [--network mainnet|testnet | --mainnet | --testnet] [-u <value>]
    [--programId <value>] [--json]

ARGUMENTS
  REQUESTKEY  address of the request account

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --arbitrum            use the arbitrum chain
  --aurora              use the aurora chain
  --base                use the base chain
  --chain=<option>      the evm chain to interact with
                        <options: coredao|arbitrum|optimism|base|aurora>
  --coredao             use the coredao chain
  --mainnet             use the mainnet network
  --network=<option>    the EVM network to connect to
                        <options: mainnet|testnet>
  --optimism            use the optimism chain
  --programId=<value>   alternative Switchboard program ID to interact with
  --testnet             use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Print a function request

EXAMPLES
  $ sb evm request print 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --chain arbitrum --network testnet --programId 0x4F706C62535d171883A6cc9384f3f3d926A6BA49
```

_See code: [dist/commands/evm/request/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/evm/request/print.js)_

## `sb evm request send FUNCTIONKEY`

create a new function account for a given queue

```
USAGE
  $ sb evm request send FUNCTIONKEY --account <value> [-h] [-v] [-s] [--chain coredao|arbitrum|optimism|base|aurora |
    --coredao | --arbitrum | --optimism | --base | --aurora] [--network mainnet|testnet | --mainnet | --testnet] [-u
    <value>] [--programId <value>] [--json] [-a <value>] [--fundAmount <value>] [--params <value>]

ARGUMENTS
  FUNCTIONKEY  address of the function account

FLAGS
  -a, --authority=<value>  keypair or address to delegate authority to for managing the function account
  -h, --help               Show CLI help.
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --account=<value>        (required) Path to file containing the private key for the payer account
  --arbitrum               use the arbitrum chain
  --aurora                 use the aurora chain
  --base                   use the base chain
  --chain=<option>         the evm chain to interact with
                           <options: coredao|arbitrum|optimism|base|aurora>
  --coredao                use the coredao chain
  --fundAmount=<value>     [default: 0.0] token amount to load into the function's escrow wallet.
  --mainnet                use the mainnet network
  --network=<option>       the EVM network to connect to
                           <options: mainnet|testnet>
  --optimism               use the optimism chain
  --params=<value>         The parameters to send in this request
  --programId=<value>      alternative Switchboard program ID to interact with
  --testnet                use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new function account for a given queue

EXAMPLES
  $ sb evm function send F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy --fundAmount 0.01 --params abc123
```

_See code: [dist/commands/evm/request/send.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/evm/request/send.js)_

## `sb evm routine create FUNCTIONKEY`

create a new routine account for a given function

```
USAGE
  $ sb evm routine create FUNCTIONKEY --account <value> [-h] [-v] [-s] [--chain coredao|arbitrum|optimism|base|aurora |
    --coredao | --arbitrum | --optimism | --base | --aurora] [--network mainnet|testnet | --mainnet | --testnet] [-u
    <value>] [--programId <value>] [--json] [--authority <value>] [--fundAmount <value>] [--schedule <value>] [--params
    <value>]

ARGUMENTS
  FUNCTIONKEY  address of the function account

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --account=<value>     (required) Path to file containing the private key for the payer account
  --arbitrum            use the arbitrum chain
  --aurora              use the aurora chain
  --authority=<value>   keypair or address to delegate authority to for managing the function account
  --base                use the base chain
  --chain=<option>      the evm chain to interact with
                        <options: coredao|arbitrum|optimism|base|aurora>
  --coredao             use the coredao chain
  --fundAmount=<value>  [default: 0.0] token amount to load into the function's escrow wallet.
  --mainnet             use the mainnet network
  --network=<option>    the EVM network to connect to
                        <options: mainnet|testnet>
  --optimism            use the optimism chain
  --params=<value>      the parameters this routine should pass to the function
  --programId=<value>   alternative Switchboard program ID to interact with
  --schedule=<value>    the cron schedule to execute the function periodically (Ex. '15 * * * * *' will execute the
                        function every 15 seconds)
  --testnet             use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new routine account for a given function

EXAMPLES
  $ sb evm routine create F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy --fundAmount 0.25 --container "mgild/randomness" --version latest
```

_See code: [dist/commands/evm/routine/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/evm/routine/create.js)_

## `sb evm routine fund ROUTINEKEY`

create a new routine account for a given function

```
USAGE
  $ sb evm routine fund ROUTINEKEY --account <value> [-h] [-v] [-s] [--chain coredao|arbitrum|optimism|base|aurora |
    --coredao | --arbitrum | --optimism | --base | --aurora] [--network mainnet|testnet | --mainnet | --testnet] [-u
    <value>] [--programId <value>] [--json] [--fundAmount <value>]

ARGUMENTS
  ROUTINEKEY  address of the routine account

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --account=<value>     (required) Path to file containing the private key for the payer account
  --arbitrum            use the arbitrum chain
  --aurora              use the aurora chain
  --base                use the base chain
  --chain=<option>      the evm chain to interact with
                        <options: coredao|arbitrum|optimism|base|aurora>
  --coredao             use the coredao chain
  --fundAmount=<value>  [default: 0.0] token amount to load into the function's escrow wallet.
  --mainnet             use the mainnet network
  --network=<option>    the EVM network to connect to
                        <options: mainnet|testnet>
  --optimism            use the optimism chain
  --programId=<value>   alternative Switchboard program ID to interact with
  --testnet             use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new routine account for a given function

EXAMPLES
  $ sb evm routine fund F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy --fundAmount 0.25
```

_See code: [dist/commands/evm/routine/fund.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/evm/routine/fund.js)_

## `sb evm routine print ROUTINEKEY`

Print a function routine

```
USAGE
  $ sb evm routine print ROUTINEKEY [-h] [-v] [-s] [--chain coredao|arbitrum|optimism|base|aurora | --coredao |
    --arbitrum | --optimism | --base | --aurora] [--network mainnet|testnet | --mainnet | --testnet] [-u <value>]
    [--programId <value>] [--json]

ARGUMENTS
  ROUTINEKEY  address of the routine account

FLAGS
  -h, --help            Show CLI help.
  -s, --silent          suppress cli prompts
  -u, --rpcUrl=<value>  alternate RPC url
  -v, --verbose         log everything
  --arbitrum            use the arbitrum chain
  --aurora              use the aurora chain
  --base                use the base chain
  --chain=<option>      the evm chain to interact with
                        <options: coredao|arbitrum|optimism|base|aurora>
  --coredao             use the coredao chain
  --mainnet             use the mainnet network
  --network=<option>    the EVM network to connect to
                        <options: mainnet|testnet>
  --optimism            use the optimism chain
  --programId=<value>   alternative Switchboard program ID to interact with
  --testnet             use the testnet network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Print a function routine

EXAMPLES
  $ sb evm routine print 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --chain arbitrum --network testnet --programId 0x4F706C62535d171883A6cc9384f3f3d926A6BA49
```

_See code: [dist/commands/evm/routine/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/evm/routine/print.js)_

## `sb function-init TEMPLATE`

initialize a new function template

```
USAGE
  $ sb function-init TEMPLATE [-h] [-v] [-s] [-d <value>]

ARGUMENTS
  TEMPLATE  (solana|solana-anchor|evm-rust|evm-typescript) type of template to initialize

FLAGS
  -d, --dir=<value>  name of the directory to initialize the new function template
  -h, --help         Show CLI help.
  -s, --silent       suppress cli prompts
  -v, --verbose      log everything

DESCRIPTION
  initialize a new function template
```

_See code: [dist/commands/function-init.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/function-init.js)_

## `sb help [COMMANDS]`

Display help for sb.

```
USAGE
  $ sb help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for sb.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.17/src/commands/help.ts)_

## `sb job test`

test a job definition against the Switchboard task-runner

```
USAGE
  $ sb job test [-h] [-v] [-s] [--json] [-d] [--job <value>]

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
  $ sb job:test
```

_See code: [dist/commands/job/test.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/job/test.js)_

## `sb mrenclave`

Fetch the MrEnclave value for a given container

```
USAGE
  $ sb mrenclave -c <value> [-h] [-v] [-s] [--json] [--containerRegistry <value>] [--version <value>]

FLAGS
  -c, --container=<value>      (required) the name of the container
  -h, --help                   Show CLI help.
  -s, --silent                 suppress cli prompts
  -v, --verbose                log everything
  --containerRegistry=<value>  the container registry to fetch from. Currently only dockerhub is supported
  --version=<value>            the version of the container, defaults to 'latest'

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Fetch the MrEnclave value for a given container

ALIASES
  $ sb enclave
```

_See code: [dist/commands/mrenclave.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/mrenclave.js)_

## `sb oracle logs NETWORK SEARCHSTRING`

fetch logs for a switchboard oracle

```
USAGE
  $ sb oracle logs NETWORK SEARCHSTRING -f <value> [-h] [-v] [-s] [--force] [--json] [--csv]

ARGUMENTS
  NETWORK       (solana-mainnet|solana-devnet|aptos-mainnet|aptos-testnet) network to parse logs for
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

_See code: [dist/commands/oracle/logs.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/oracle/logs.js)_

## `sb solana aggregator add history AGGREGATORKEY`

add a history buffer to an aggregator

```
USAGE
  $ sb solana aggregator add history AGGREGATORKEY --historyLimit <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--force] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>         alternate keypair that is the authority for the aggregator
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --force                         overwrite an existing history buffer if one already exists
  --historyLimit=<value>          (required) the number of samples to store before overwriting old samples
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  add a history buffer to an aggregator

EXAMPLES
  $ sb solana:aggregator:add:history
```

_See code: [dist/commands/solana/aggregator/add/history.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/aggregator/add/history.js)_

## `sb solana aggregator add job AGGREGATORKEY`

add jobs to an aggregator

```
USAGE
  $ sb solana aggregator add job AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--jobDefinition <value>] [--jobKey <value>] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>         alternate keypair that is the authority for the aggregator
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --jobDefinition=<value>...      filesystem path of job json definition file
  --jobKey=<value>...             public key of an existing job account to add to an aggregator
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  add jobs to an aggregator

EXAMPLES
  $ sb solana aggregator add job
```

_See code: [dist/commands/solana/aggregator/add/job.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/aggregator/add/job.js)_

## `sb solana aggregator authority AGGREGATORKEY`

```
USAGE
  $ sb solana aggregator authority AGGREGATORKEY --newAuthority <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator

FLAGS
  -a, --authority=<value>         alternate keypair that is the authority for the aggregator and required to make config
                                  changes
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --newAuthority=<value>          (required)
  --programId=<value>             alternative Switchboard program ID to interact with
```

_See code: [dist/commands/solana/aggregator/authority.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/aggregator/authority.js)_

## `sb solana aggregator close AGGREGATORKEY`

close an aggregator and associated PDA accounts on devnet

```
USAGE
  $ sb solana aggregator close AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>         alternate keypair that is the authority for the aggregator and required to make config
                                  changes
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  close an aggregator and associated PDA accounts on devnet

EXAMPLES
  $ sb solana aggregator close J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa --keypair ../payer-keypair.json
```

_See code: [dist/commands/solana/aggregator/close.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/aggregator/close.js)_

## `sb solana aggregator create QUEUEKEY`

create an aggregator account

```
USAGE
  $ sb solana aggregator create QUEUEKEY --updateInterval <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [-a <value>]
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
  --attestationProgramId=<value>      alternative Switchboard Attestation program ID to interact with
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

_See code: [dist/commands/solana/aggregator/create/index.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/aggregator/create/index.js)_

## `sb solana aggregator create json DEFINITIONFILE`

create an aggregator from a json file

```
USAGE
  $ sb solana aggregator create json DEFINITIONFILE [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--json] [-q <value>] [-a <value>] [--leaseAmount <value>]

ARGUMENTS
  DEFINITIONFILE  filesystem path of queue definition json file

FLAGS
  -a, --authority=<value>         alternate keypair that will be the authority for the aggregator
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -q, --queueKey=<value>          public key of the oracle queue to create aggregator for
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --leaseAmount=<value>           [default: 0] amount of funds to deposit into the lease, ex: 1.5 would deposit 1.5 wSOL
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create an aggregator from a json file

ALIASES
  $ sb solana json create aggregator

EXAMPLES
  $ sb solana aggregator create json examples/aggregator.json --keypair ../payer-keypair.json --queueKey GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --outputFile aggregator.schema.json
```

_See code: [dist/commands/solana/aggregator/create/json.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/aggregator/create/json.js)_

## `sb solana aggregator deposit AGGREGATORKEY`

fund and re-enable an aggregator lease

```
USAGE
  $ sb solana aggregator deposit AGGREGATORKEY --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --amount=<value>                (required) amount to deposit into the lease escrow
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  fund and re-enable an aggregator lease

ALIASES
  $ sb solana aggregator fund
  $ sb solana aggregator deposit
  $ sb solana aggregator extend

EXAMPLES
  $ sb solana:aggregator:fund GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json
```

## `sb solana aggregator extend AGGREGATORKEY`

fund and re-enable an aggregator lease

```
USAGE
  $ sb solana aggregator extend AGGREGATORKEY --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --amount=<value>                (required) amount to deposit into the lease escrow
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  fund and re-enable an aggregator lease

ALIASES
  $ sb solana aggregator fund
  $ sb solana aggregator deposit
  $ sb solana aggregator extend

EXAMPLES
  $ sb solana:aggregator:fund GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json
```

## `sb solana aggregator fund AGGREGATORKEY`

fund and re-enable an aggregator lease

```
USAGE
  $ sb solana aggregator fund AGGREGATORKEY --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --amount=<value>                (required) amount to deposit into the lease escrow
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  fund and re-enable an aggregator lease

ALIASES
  $ sb solana aggregator fund
  $ sb solana aggregator deposit
  $ sb solana aggregator extend

EXAMPLES
  $ sb solana:aggregator:fund GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json
```

## `sb solana aggregator history AGGREGATORKEY`

print an aggregator's history'

```
USAGE
  $ sb solana aggregator history AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed]
    [--json] [--metrics]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --metrics                       print metrics on an aggregators history like average update interval
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print an aggregator's history'
```

_See code: [dist/commands/solana/aggregator/history.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/aggregator/history.js)_

## `sb solana aggregator lease set AGGREGATORKEY`

set a lease's withdraw authority

```
USAGE
  $ sb solana aggregator lease set AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [-a <value>] [--queuePubkey <value>] [--newAuthority <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>         alternate keypair delegated as the authority for managing the lease account
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --newAuthority=<value>          new lease withdraw authority. if not set, defaults to the aggregator authority
  --programId=<value>             alternative Switchboard program ID to interact with
  --queuePubkey=<value>           override the aggregators current queue. useful for withdrawing from a lease after
                                  moving to a new queue

DESCRIPTION
  set a lease's withdraw authority

ALIASES
  $ sb solana aggregator lease set

EXAMPLES
  $ sb solana:lease:set GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --keypair ../payer-keypair.json
```

## `sb solana aggregator list AUTHORITYKEY`

get a list of aggregators from a provided authority pubkey

```
USAGE
  $ sb solana aggregator list AUTHORITYKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed]
    [--json]

ARGUMENTS
  AUTHORITYKEY  public key of the aggregator authority

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  get a list of aggregators from a provided authority pubkey
```

_See code: [dist/commands/solana/aggregator/list.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/aggregator/list.js)_

## `sb solana aggregator lock AGGREGATORKEY`

lock an aggregator's configuration and prevent further changes

```
USAGE
  $ sb solana aggregator lock AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>         alternate keypair that is the authority for the aggregator
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  lock an aggregator's configuration and prevent further changes
```

_See code: [dist/commands/solana/aggregator/lock.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/aggregator/lock.js)_

## `sb solana aggregator metrics AGGREGATORKEY`

print an aggregator's metrics'

```
USAGE
  $ sb solana aggregator metrics AGGREGATORKEY --period <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [--json]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --period=<value>...             (required) the period to collect metrics for. Ex. 3600 will collect update metrics for
                                  the last 1hr
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print an aggregator's metrics'
```

_See code: [dist/commands/solana/aggregator/metrics.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/aggregator/metrics.js)_

## `sb solana aggregator mode AGGREGATORKEY`

set an aggregators resolution mode config

```
USAGE
  $ sb solana aggregator mode AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--json] [-a <value>] [--slidingWindow | --roundResolution]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>         alternate keypair that is the authority for the aggregator and required to make config
                                  changes
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with
  --roundResolution               enable sliding window mode
  --slidingWindow                 enable sliding window mode

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  set an aggregators resolution mode config
```

_See code: [dist/commands/solana/aggregator/mode.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/aggregator/mode.js)_

## `sb solana aggregator open-round AGGREGATORKEY`

request a new aggregator result from a set of oracles

```
USAGE
  $ sb solana aggregator open-round AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  request a new aggregator result from a set of oracles

ALIASES
  $ sb solana aggregator open-round

EXAMPLES
  $ sb solana aggregator update J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa --keypair ../payer-keypair.json
```

## `sb solana aggregator permission create AGGREGATORKEY`

create a permission account for an aggregator

```
USAGE
  $ sb solana aggregator permission create AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  create a permission account for an aggregator
```

_See code: [dist/commands/solana/aggregator/permission/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/aggregator/permission/create.js)_

## `sb solana aggregator print AGGREGATORKEY`

print an aggregator and it's associated accounts

```
USAGE
  $ sb solana aggregator print AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed]
    [--json] [--queuePubkey <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with
  --queuePubkey=<value>           override the aggregators current queue. useful for viewing permission lease accounts
                                  if an aggregator has moved queues

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print an aggregator and it's associated accounts
```

_See code: [dist/commands/solana/aggregator/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/aggregator/print.js)_

## `sb solana aggregator remove job AGGREGATORKEY JOBKEY`

remove a switchboard job account from an aggregator

```
USAGE
  $ sb solana aggregator remove job AGGREGATORKEY JOBKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account
  JOBKEY         public key of an existing job account to remove from an aggregator

FLAGS
  -a, --authority=<value>         alternate keypair that is the authority for the aggregator
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  remove a switchboard job account from an aggregator
```

_See code: [dist/commands/solana/aggregator/remove/job.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/aggregator/remove/job.js)_

## `sb solana aggregator set AGGREGATORKEY`

set an aggregators config

```
USAGE
  $ sb solana aggregator set AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--json] [-a <value>] [--name <value>] [--metadata <value>] [--batchSize
    <value>] [--minJobs <value>] [--minOracles <value>] [--updateInterval <value>] [--varianceThreshold <value>]
    [--forceReportPeriod <value>] [--basePriorityFee <value>] [--priorityFeeBump <value>] [--priorityFeeBumpPeriod
    <value>] [--maxPriorityFeeMultiplier <value>] [--enableSlidingWindow]

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
  --attestationProgramId=<value>      alternative Switchboard Attestation program ID to interact with
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

_See code: [dist/commands/solana/aggregator/set.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/aggregator/set.js)_

## `sb solana aggregator transfer AGGREGATORKEY`

transfer an aggregator to a new queue

```
USAGE
  $ sb solana aggregator transfer AGGREGATORKEY --newQueue <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>] [--newCrank
    <value>] [--loadAmount <value>] [--enable] [--queueAuthority <value>] [--force]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>         alternate keypair that is the authority for the aggregator
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --enable                        enable permissions on the new queue
  --force                         skip permission checks
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --loadAmount=<value>            [default: 0.0] amount of funds to load into the new lease, in addition to the funds
                                  remaining in the old lease account
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --newCrank=<value>              publicKey of the crank to transfer to
  --newQueue=<value>              (required) publicKey of the new queue to transfer to
  --programId=<value>             alternative Switchboard program ID to interact with
  --queueAuthority=<value>        alternate keypair that is the authority for the queue. only used if enabling
                                  permissions in one transaction

DESCRIPTION
  transfer an aggregator to a new queue

EXAMPLES
  $ sb solana aggregator transfer GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --mainnetBeta --loadAmount 0.1 --newQueue 3HBb2DQqDfuMdzWxNk1Eo9RTMkFYmuEAd32RiLKn9pAn --newCrank GdNVLWzcE6h9SPuSbmu69YzxAj8enim9t6mjzuqTXgLd --keypair ~/.config/solana/id.json
```

_See code: [dist/commands/solana/aggregator/transfer.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/aggregator/transfer.js)_

## `sb solana aggregator update AGGREGATORKEY`

request a new aggregator result from a set of oracles

```
USAGE
  $ sb solana aggregator update AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  request a new aggregator result from a set of oracles

ALIASES
  $ sb solana aggregator open-round

EXAMPLES
  $ sb solana aggregator update J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa --keypair ../payer-keypair.json
```

_See code: [dist/commands/solana/aggregator/update.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/aggregator/update.js)_

## `sb solana aggregator watch AGGREGATORKEY`

watch an aggregator account and stream the results

```
USAGE
  $ sb solana aggregator watch AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-t
    <value>] [-f <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -f, --outfile=<value>           save results to a file
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -t, --timeout=<value>           time to watch feed for updates
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  watch an aggregator account and stream the results
```

_See code: [dist/commands/solana/aggregator/watch.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/aggregator/watch.js)_

## `sb solana aggregator withdraw AGGREGATORKEY`

withdraw funds from an aggregator lease

```
USAGE
  $ sb solana aggregator withdraw AGGREGATORKEY --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>]
    [--queuePubkey <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>         keypair delegated as the authority for managing the lease account
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --amount=<value>                (required) token amount to withdraw from lease account
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with
  --queuePubkey=<value>           override the aggregators current queue. useful for withdrawing from a lease after
                                  moving to a new queue

DESCRIPTION
  withdraw funds from an aggregator lease

ALIASES
  $ sb solana aggregator withdraw

EXAMPLES
  $ sb solana:aggregator:withdraw GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json
```

## `sb solana anchor test`

run anchor test and a switchboard oracle in parallel

```
USAGE
  $ sb solana anchor test [-h] [-v] [-s] [--mainnetBeta | --cluster localnet|devnet] [-u <value>] [--mainnetRpcUrl
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
  $ sb anchor test
```

_See code: [dist/commands/solana/anchor/test.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/anchor/test.js)_

## `sb solana attestation-queue add-enclave QUEUEKEY`

add enclave(s) to an attestation queue's config

```
USAGE
  $ sb solana attestation-queue add-enclave QUEUEKEY --mrEnclave <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [-a <value>]
    [--force]

ARGUMENTS
  QUEUEKEY  public key of the attestation queue account

FLAGS
  -a, --authority=<value>         alternate keypair that is the authority for the attestation queue and is required to
                                  approve config changes
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --force                         remove old enclaves if the addition will exceed the maximum allowable enclaves (32)
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --mrEnclave=<value>...          (required) Hex encoded MRENCLAVE's to add to the attestation queue's config
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  add enclave(s) to an attestation queue's config
```

_See code: [dist/commands/solana/attestation-queue/add-enclave.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/attestation-queue/add-enclave.js)_

## `sb solana attestation-queue create`

create an attestation queue

```
USAGE
  $ sb solana attestation-queue create [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u <value>]
    [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k <value>]
    [--ledgerPath <value> --ledger] [--json] [-a <value>] [--queueKeypair <value>] [--reward <value>]
    [--allowAuthorityOverrideAfter <value>] [--maxQuoteVerificationAge <value>] [--nodeTimeout <value>]
    [--requireAuthorityHeartbeatPermissions] [--requireUsagePermissions]

FLAGS
  -a, --authority=<value>                 alternate keypair that is the authority for the queue and is required to
                                          approve permissions
  -h, --help                              Show CLI help.
  -k, --keypair=<value>                   keypair that will pay for onchain transactions. defaults to new account
                                          authority if no alternate authority provided
  -s, --silent                            suppress cli prompts
  -u, --rpcUrl=<value>                    alternate RPC url
  -v, --verbose                           log everything
  --allowAuthorityOverrideAfter=<value>   [default: 86400] Allow authority to force add a node after X seconds with no
                                          heartbeat.
  --attestationProgramId=<value>          alternative Switchboard Attestation program ID to interact with
  --cluster=<option>                      the solana cluster to connect to
                                          <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>                   [default: confirmed] transaction commitment level to use
                                          <options: confirmed|finalized|processed>
  --ledger                                enable ledger support
  --ledgerPath=<value>                    HID path to the ledger
  --mainnetBeta                           WARNING: use mainnet-beta solana cluster
  --maxQuoteVerificationAge=<value>       [default: 604800] The maximum allowable time until a EnclaveAccount needs to
                                          be re-verified on-chain.
  --nodeTimeout=<value>                   [default: 86400] The maximum allowable time until a node needs to send a
                                          heartbeat.
  --programId=<value>                     alternative Switchboard program ID to interact with
  --queueKeypair=<value>                  keypair to use for the attestation queue account. This will be the account's
                                          publicKey
  --requireAuthorityHeartbeatPermissions  Even if a heartbeating machine quote verifies with proper measurement, require
                                          authority signoff.
  --requireUsagePermissions               Require FunctionAccounts to have PermitQueueUsage before they are executed.
  --reward=<value>                        [default: 0] the reward payed out to oracles for responding to an update
                                          request on-chain, Ex: A reward of 0.0000075 with a feed with a batchSize of 4
                                          would deduct (4 * 0.0000075) wSOL from an aggregators lease each round.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create an attestation queue
```

_See code: [dist/commands/solana/attestation-queue/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/attestation-queue/create.js)_

## `sb solana attestation-queue print QUEUEKEY`

print an attestation queue account

```
USAGE
  $ sb solana attestation-queue print QUEUEKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed]
    [--json]

ARGUMENTS
  QUEUEKEY  public key of the attestation queue account

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print an attestation queue account
```

_See code: [dist/commands/solana/attestation-queue/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/attestation-queue/print.js)_

## `sb solana attestation-queue remove-enclave QUEUEKEY`

remove enclave(s) from an attestation queue's config

```
USAGE
  $ sb solana attestation-queue remove-enclave QUEUEKEY --mrEnclave <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [-a <value>]

ARGUMENTS
  QUEUEKEY  public key of the attestation queue account

FLAGS
  -a, --authority=<value>         alternate keypair that is the authority for the attestation queue and is required to
                                  approve config changes
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --mrEnclave=<value>...          (required) Hex encoded MRENCLAVE's to remove from the attestation queue's config
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  remove enclave(s) from an attestation queue's config
```

_See code: [dist/commands/solana/attestation-queue/remove-enclave.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/attestation-queue/remove-enclave.js)_

## `sb solana buffer create QUEUEKEY`

create a buffer relayer account

```
USAGE
  $ sb solana buffer create QUEUEKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--json] [--bufferKeypair <value>] [-a <value>] [-n <value>]
    [--minUpdateDelaySeconds <value>] [--jobDefinition <value> | --jobKey <value>]

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
  --attestationProgramId=<value>   alternative Switchboard Attestation program ID to interact with
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

_See code: [dist/commands/solana/buffer/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/buffer/create.js)_

## `sb solana buffer open-round BUFFERRELAYERKEY`

request a new buffer relayer result

```
USAGE
  $ sb solana buffer open-round BUFFERRELAYERKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  BUFFERRELAYERKEY  public key of the buffer relayer account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  request a new buffer relayer result

ALIASES
  $ sb solana buffer open-round

EXAMPLES
  $ sb solana buffer update J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa --keypair ../payer-keypair.json
```

## `sb solana buffer update BUFFERRELAYERKEY`

request a new buffer relayer result

```
USAGE
  $ sb solana buffer update BUFFERRELAYERKEY [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  BUFFERRELAYERKEY  public key of the buffer relayer account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  request a new buffer relayer result

ALIASES
  $ sb solana buffer open-round

EXAMPLES
  $ sb solana buffer update J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa --keypair ../payer-keypair.json
```

_See code: [dist/commands/solana/buffer/update.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/buffer/update.js)_

## `sb solana crank create QUEUEKEY`

create a new crank account

```
USAGE
  $ sb solana crank create QUEUEKEY -s <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [-n <value>]
    [--metadata <value>] [--crankKeypair <value>] [--dataBufferKeypair <value>]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue to create a crank on

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -n, --name=<value>              name of the crank for easier identification
  -s, --silent                    suppress cli prompts
  -s, --size=<value>              (required) maximum number of rows a crank can support
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --crankKeypair=<value>          keypair to use for the crank account. This will be the account's publicKey
  --dataBufferKeypair=<value>     keypair to use for the crank data buffer account.
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --metadata=<value>              metadata of the crank for easier identification
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new crank account
```

_See code: [dist/commands/solana/crank/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/crank/create.js)_

## `sb solana crank events AGGREGATORKEY`

watch an aggregator account and stream the on-chain events

```
USAGE
  $ sb solana crank events AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-t
    <value>] [-f <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -f, --outfile=<value>           save results to a file
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -t, --timeout=<value>           time to watch feed for updates
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  watch an aggregator account and stream the on-chain events
```

_See code: [dist/commands/solana/crank/events.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/crank/events.js)_

## `sb solana crank pop CRANKKEY`

pop the crank

```
USAGE
  $ sb solana crank pop CRANKKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  CRANKKEY  public key of the crank account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  pop the crank
```

_See code: [dist/commands/solana/crank/pop.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/crank/pop.js)_

## `sb solana crank print CRANKKEY`

print a crank

```
USAGE
  $ sb solana crank print CRANKKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed]
    [--json] [--rows]

ARGUMENTS
  CRANKKEY  public key of the crank account

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with
  --rows                          print the crank rows in order

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a crank
```

_See code: [dist/commands/solana/crank/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/crank/print.js)_

## `sb solana crank push AGGREGATORKEY`

push the crank

```
USAGE
  $ sb solana crank push AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--crankKey <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --crankKey=<value>              push onto a new crank, if provided
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  push the crank
```

_See code: [dist/commands/solana/crank/push.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/crank/push.js)_

## `sb solana crank reset AGGREGATORKEY`

reset an aggregators crank

```
USAGE
  $ sb solana crank reset AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [-a <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>         alternate keypair that is the authority for the aggregator and required to make config
                                  changes
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  reset an aggregators crank
```

_See code: [dist/commands/solana/crank/reset.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/crank/reset.js)_

## `sb solana function add-enclave FUNCTIONKEY`

Configure a solana funciton's mrEnclave settings

```
USAGE
  $ sb solana function add-enclave FUNCTIONKEY -e <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [-a <value>]
    [--force]

ARGUMENTS
  FUNCTIONKEY  public key of the function account

FLAGS
  -a, --authority=<value>         keypair or public key to delegate authority to for managing the function account
  -e, --mrEnclave=<value>...      (required) set the mr enclave to add
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --force                         remove an enclave if the function's config has the maximum number of enclaves (32)
                                  already present
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Configure a solana funciton's mrEnclave settings

ALIASES
  $ sb solana function addMrEnclave
```

_See code: [dist/commands/solana/function/add-enclave.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/function/add-enclave.js)_

## `sb solana function addMrEnclave FUNCTIONKEY`

Configure a solana funciton's mrEnclave settings

```
USAGE
  $ sb solana function addMrEnclave FUNCTIONKEY -e <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [-a <value>]
    [--force]

ARGUMENTS
  FUNCTIONKEY  public key of the function account

FLAGS
  -a, --authority=<value>         keypair or public key to delegate authority to for managing the function account
  -e, --mrEnclave=<value>...      (required) set the mr enclave to add
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --force                         remove an enclave if the function's config has the maximum number of enclaves (32)
                                  already present
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Configure a solana funciton's mrEnclave settings

ALIASES
  $ sb solana function addMrEnclave
```

## `sb solana function close FUNCTIONKEY`

close a function account

```
USAGE
  $ sb solana function close FUNCTIONKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--json] [--authority <value>]

ARGUMENTS
  FUNCTIONKEY  public key of the function account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --authority=<value>
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  close a function account
```

_See code: [dist/commands/solana/function/close.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/function/close.js)_

## `sb solana function configure FUNCTIONKEY`

Configure a solana funciton's settings

```
USAGE
  $ sb solana function configure FUNCTIONKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--json] [--name <value>] [--metadata <value>] [--container <value>]
    [--containerRegistry <value>] [--version <value>] [--schedule <value>]

ARGUMENTS
  FUNCTIONKEY  public key of the function account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --container=<value>             set the function container
  --containerRegistry=<value>     set the function containerRegistry
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --metadata=<value>              set the function metadata
  --name=<value>                  set the function name
  --programId=<value>             alternative Switchboard program ID to interact with
  --schedule=<value>              set the function schedule
  --version=<value>               set the function version

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Configure a solana funciton's settings
```

_See code: [dist/commands/solana/function/configure.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/function/configure.js)_

## `sb solana function create QUEUEKEY`

create a new function account for a given queue

```
USAGE
  $ sb solana function create QUEUEKEY --container <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [-n <value>]
    [--metadata <value>] [-a <value>] [--fundAmount <value>] [--containerRegistry dockerhub|ipfs] [--version <value>]
    [--mrEnclave <value>] [--requestsDisabled] [--requestsFee <value>] [--requestsRequireAuthorization]
    [--routinesDisabled] [--routinesFee <value>] [--routinesRequireAuthorization]

ARGUMENTS
  QUEUEKEY  public key of the attestation queue account

FLAGS
  -a, --authority=<value>         keypair or public key to delegate authority to for managing the function account
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -n, --name=<value>              name of the function for easier identification
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --container=<value>             (required) the location of the container (Ex. switchboardlabs/basic-oracle-function)
  --containerRegistry=<option>    [default: dockerhub] the registry to pull the container from (Ex. Docker or IPFS)
                                  <options: dockerhub|ipfs>
  --fundAmount=<value>            [default: 0.0] token amount to load into the function's escrow wallet.
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --metadata=<value>              metadata of the function for easier identification
  --mrEnclave=<value>             the MrEnclave value to set for the function - if not provided, will be set
                                  automatically after its first run
  --programId=<value>             alternative Switchboard program ID to interact with
  --requestsDisabled              whether custom requests can be created for this function
  --requestsFee=<value>           [default: 0.0] the costs each request must pay the function authority for each
                                  sub-request (Ex. 0.00002)
  --requestsRequireAuthorization  whether custom requests require the function authority to authorize
  --routinesDisabled              whether custom routines can be created for this function
  --routinesFee=<value>           [default: 0.0] the costs each routine must pay the function authority for each
                                  sub-request (Ex. 0.00002)
  --routinesRequireAuthorization  whether custom routines require the function authority to authorize
  --version=<value>               [default: latest] the version of the container to pull from the registry (Ex. 'latest'
                                  or 'mainnet')

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new function account for a given queue

EXAMPLES
  $ sb solana function create CkvizjVnm2zA5Wuwan34NhVT3zFc7vqUyGnA6tuEF5aE --name function-1 --fundAmount 1.25 --container switchboardlabs/basic-oracle-function --version solana
```

_See code: [dist/commands/solana/function/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/function/create.js)_

## `sb solana function fund FUNCTIONKEY`

wrap SOL into a function accounts escrow wallet

```
USAGE
  $ sb solana function fund FUNCTIONKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--json] [--amount <value>]

ARGUMENTS
  FUNCTIONKEY  public key of the function account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --amount=<value>                [default: 0.0]
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  wrap SOL into a function accounts escrow wallet
```

_See code: [dist/commands/solana/function/fund.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/function/fund.js)_

## `sb solana function get`

print a function account

```
USAGE
  $ sb solana function get [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u <value>]
    [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [--json]
    [--authority <value>]

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --authority=<value>             filter functions by authority pubkey
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a function account
```

_See code: [dist/commands/solana/function/get.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/function/get.js)_

## `sb solana function print FUNCTIONKEY`

print a function account

```
USAGE
  $ sb solana function print FUNCTIONKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed]
    [--json]

ARGUMENTS
  FUNCTIONKEY  public key of the function account

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a function account
```

_See code: [dist/commands/solana/function/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/function/print.js)_

## `sb solana function remove-enclave FUNCTIONKEY`

Configure a solana funciton's mrEnclave settings

```
USAGE
  $ sb solana function remove-enclave FUNCTIONKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--json] [-a <value>] (--all | -e <value>)

ARGUMENTS
  FUNCTIONKEY  public key of the function account

FLAGS
  -a, --authority=<value>         keypair or public key to delegate authority to for managing the function account
  -e, --mrEnclave=<value>...      (required) set the mr enclave to remove
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --all
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Configure a solana funciton's mrEnclave settings
```

_See code: [dist/commands/solana/function/remove-enclave.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/function/remove-enclave.js)_

## `sb solana function rmMrEnclave FUNCTIONKEY`

Configure a solana funciton's mrEnclave settings

```
USAGE
  $ sb solana function rmMrEnclave FUNCTIONKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--json] [-a <value>] (--all | -e <value>)

ARGUMENTS
  FUNCTIONKEY  public key of the function account

FLAGS
  -a, --authority=<value>         keypair or public key to delegate authority to for managing the function account
  -e, --mrEnclave=<value>...      (required) set the mr enclave to remove
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --all
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Configure a solana funciton's mrEnclave settings
```

_See code: [dist/commands/solana/function/rmMrEnclave.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/function/rmMrEnclave.js)_

## `sb solana function send-request FUNCTIONKEY`

Init and trigger a request to a function.

```
USAGE
  $ sb solana function send-request FUNCTIONKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--json] [--parameters <value>]

ARGUMENTS
  FUNCTIONKEY  public key of the function account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --parameters=<value>            Parameters to pass to your function
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Init and trigger a request to a function.
```

_See code: [dist/commands/solana/function/send-request.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/function/send-request.js)_

## `sb solana function sync-enclave FUNCTIONKEY`

Fetch the MrEnclave value for your function and add if neccessary, add it to the function config

```
USAGE
  $ sb solana function sync-enclave FUNCTIONKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--json] [-a <value>] [--force]

ARGUMENTS
  FUNCTIONKEY  public key of the function account

FLAGS
  -a, --authority=<value>         keypair or public key to delegate authority to for managing the function account
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --force                         remove an enclave if the function's config has the maximum number of enclaves (32)
                                  already present
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Fetch the MrEnclave value for your function and add if neccessary, add it to the function config
```

_See code: [dist/commands/solana/function/sync-enclave.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/function/sync-enclave.js)_

## `sb solana function test`

Simulate the switchboard function runtime to test your functions locally

```
USAGE
  $ sb solana function test [-h] [-v] [-s] [--mainnetBeta | --cluster <value>] [-u <value>] [--programId <value>]
    [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [--parameters <value>]
    [--devnetSimulate]

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<value>               The cluster to load if your function dynamically loads it
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --devnetSimulate                If the cluster is set to devnet, attempt to simulate
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --parameters=<value>            Parameters to pass to your function
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  Simulate the switchboard function runtime to test your functions locally
```

_See code: [dist/commands/solana/function/test.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/function/test.js)_

## `sb solana function withdraw FUNCTIONKEY`

Withdraw funds from a function's escrow

```
USAGE
  $ sb solana function withdraw FUNCTIONKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--json] [--withdrawAmount <value>] [--authority <value>]
    [--destinationWallet <value>]

ARGUMENTS
  FUNCTIONKEY  public key of the function account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --authority=<value>             path to authority keypair if different from payer keypair
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --destinationWallet=<value>     pubkey of tokenWallet to receive withdrawed funds. Defaults to payer associated token
                                  wallet
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with
  --withdrawAmount=<value>        Amount of wrapped SOL to withdraw from the function's escrow

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Withdraw funds from a function's escrow
```

_See code: [dist/commands/solana/function/withdraw.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/function/withdraw.js)_

## `sb solana job create`

create a job account

```
USAGE
  $ sb solana job create --jobDefinition <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [--jobKeypair
    <value>] [-a <value>] [-n <value>]

FLAGS
  -a, --authority=<value>         alternate keypair that will be the buffer relayer authority
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -n, --name=<value>              name of the buffer account
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --jobDefinition=<value>         (required) filesystem path to job definition
  --jobKeypair=<value>            keypair to use for the job account. This will be the account's publicKey
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a job account
```

_See code: [dist/commands/solana/job/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/job/create.js)_

## `sb solana job print JOBKEY`

print an job and it's associated accounts

```
USAGE
  $ sb solana job print JOBKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed]
    [--json]

ARGUMENTS
  JOBKEY  public key of the job account

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print an job and it's associated accounts
```

_See code: [dist/commands/solana/job/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/job/print.js)_

## `sb solana json create aggregator DEFINITIONFILE`

create an aggregator from a json file

```
USAGE
  $ sb solana json create aggregator DEFINITIONFILE [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--json] [-q <value>] [-a <value>] [--leaseAmount <value>]

ARGUMENTS
  DEFINITIONFILE  filesystem path of queue definition json file

FLAGS
  -a, --authority=<value>         alternate keypair that will be the authority for the aggregator
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -q, --queueKey=<value>          public key of the oracle queue to create aggregator for
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --leaseAmount=<value>           [default: 0] amount of funds to deposit into the lease, ex: 1.5 would deposit 1.5 wSOL
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create an aggregator from a json file

ALIASES
  $ sb solana json create aggregator

EXAMPLES
  $ sb solana aggregator create json examples/aggregator.json --keypair ../payer-keypair.json --queueKey GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --outputFile aggregator.schema.json
```

## `sb solana lease create AGGREGATORKEY`

fund and re-enable an aggregator lease

```
USAGE
  $ sb solana lease create AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--amount <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --amount=<value>                token amount to load into the lease escrow. If decimals provided, amount will be
                                  normalized to raw tokenAmount
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  fund and re-enable an aggregator lease

EXAMPLES
  $ sb solana lease create GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.5 --keypair ../payer-keypair.json
```

_See code: [dist/commands/solana/lease/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/lease/create.js)_

## `sb solana lease extend AGGREGATORKEY`

fund and re-enable an aggregator lease

```
USAGE
  $ sb solana lease extend AGGREGATORKEY --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --amount=<value>                (required) amount to deposit into the lease escrow
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  fund and re-enable an aggregator lease

ALIASES
  $ sb solana aggregator fund
  $ sb solana aggregator deposit
  $ sb solana aggregator extend

EXAMPLES
  $ sb solana:aggregator:fund GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json
```

_See code: [dist/commands/solana/lease/extend.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/lease/extend.js)_

## `sb solana lease print LEASEKEY`

print a lease account

```
USAGE
  $ sb solana lease print LEASEKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed]
    [--json]

ARGUMENTS
  LEASEKEY  public key of the lease account

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a lease account
```

_See code: [dist/commands/solana/lease/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/lease/print.js)_

## `sb solana lease set AGGREGATORKEY`

set a lease's withdraw authority

```
USAGE
  $ sb solana lease set AGGREGATORKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [-a <value>] [--queuePubkey <value>] [--newAuthority <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>         alternate keypair delegated as the authority for managing the lease account
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --newAuthority=<value>          new lease withdraw authority. if not set, defaults to the aggregator authority
  --programId=<value>             alternative Switchboard program ID to interact with
  --queuePubkey=<value>           override the aggregators current queue. useful for withdrawing from a lease after
                                  moving to a new queue

DESCRIPTION
  set a lease's withdraw authority

ALIASES
  $ sb solana aggregator lease set

EXAMPLES
  $ sb solana:lease:set GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --keypair ../payer-keypair.json
```

_See code: [dist/commands/solana/lease/set.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/lease/set.js)_

## `sb solana lease withdraw AGGREGATORKEY`

withdraw funds from an aggregator lease

```
USAGE
  $ sb solana lease withdraw AGGREGATORKEY --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>]
    [--queuePubkey <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

FLAGS
  -a, --authority=<value>         keypair delegated as the authority for managing the lease account
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --amount=<value>                (required) token amount to withdraw from lease account
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with
  --queuePubkey=<value>           override the aggregators current queue. useful for withdrawing from a lease after
                                  moving to a new queue

DESCRIPTION
  withdraw funds from an aggregator lease

ALIASES
  $ sb solana aggregator withdraw

EXAMPLES
  $ sb solana:aggregator:withdraw GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json
```

_See code: [dist/commands/solana/lease/withdraw.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/lease/withdraw.js)_

## `sb solana network create`

create an oracle queue

```
USAGE
  $ sb solana network create --configFile <value> --schemaFile <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [--force]

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --configFile=<value>            (required)
  --force
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with
  --schemaFile=<value>            (required)

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create an oracle queue
```

_See code: [dist/commands/solana/network/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/network/create.js)_

## `sb solana network save`

save an existing switchboard network

```
USAGE
  $ sb solana network save --queueKey <value> --outputFile <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [--json] [--force]

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --force
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --outputFile=<value>            (required) outputFile to save accounts in JSON format
  --programId=<value>             alternative Switchboard program ID to interact with
  --queueKey=<value>              (required) queue account to load

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  save an existing switchboard network
```

_See code: [dist/commands/solana/network/save.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/network/save.js)_

## `sb solana network start`

start a switchboard network from a JSON file

```
USAGE
  $ sb solana network start [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u <value>]
    [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k <value>]
    [--ledgerPath <value> --ledger] [--json] [--configFile <value>] [--schemaFile <value>] [--nodeImage <value>] [--arm]
    [-t <value>] [--mainnetRpcUrl <value>]

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress docker logging
  -t, --timeout=<value>           [default: 300] number of seconds before ending the docker process
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --arm                           apple silicon needs to use a docker image for linux/arm64
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --configFile=<value>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --mainnetRpcUrl=<value>         [default: https://api.mainnet-beta.solana.com/] Solana mainnet RPC URL to use for the
                                  oracle task runner
  --nodeImage=<value>             [default: dev-v2-RC_02_24_23_18_43] public key of the oracle to start-up
  --programId=<value>             alternative Switchboard program ID to interact with
  --schemaFile=<value>

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  start a switchboard network from a JSON file
```

_See code: [dist/commands/solana/network/start.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/network/start.js)_

## `sb solana oracle create QUEUEKEY`

create a new oracle account for a given queue

```
USAGE
  $ sb solana oracle create QUEUEKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--json] [-n <value>] [--metadata <value>] [-a <value>] [--enable]
    [--queueAuthority <value>] [--stakeAmount <value>]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue account

FLAGS
  -a, --authority=<value>         keypair to delegate authority to for managing the oracle account
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -n, --name=<value>              name of the oracle for easier identification
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --enable                        enable oracle heartbeat permissions
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --metadata=<value>              metadata of the oracle for easier identification
  --programId=<value>             alternative Switchboard program ID to interact with
  --queueAuthority=<value>        alternative keypair to use for queue authority
  --stakeAmount=<value>           token amount to load into the oracle's staking wallet.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new oracle account for a given queue

EXAMPLES
  $ sb solana:oracle:create F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy --name oracle-1 --stakeAmount 1
```

_See code: [dist/commands/solana/oracle/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/oracle/create.js)_

## `sb solana oracle print ORACLEKEY`

print an oracle account

```
USAGE
  $ sb solana oracle print ORACLEKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed]
    [--json]

ARGUMENTS
  ORACLEKEY  public key of the oracle account

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print an oracle account
```

_See code: [dist/commands/solana/oracle/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/oracle/print.js)_

## `sb solana oracle up`

start a solana docker oracle

```
USAGE
  $ sb solana oracle up --oracleKey <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--releaseChannel
    testnet|mainnet | --nodeImage <value>] [-t <value>]

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress docker logging
  -t, --timeout=<value>           [default: 120] number of seconds before ending the docker process
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --nodeImage=<value>             [default: dev-v2-RC_04_11_23_17_12] public key of the oracle to start-up
  --oracleKey=<value>             (required) public key of the oracle to start-up
  --programId=<value>             alternative Switchboard program ID to interact with
  --releaseChannel=<option>       [default: testnet] the oracle release channel
                                  <options: testnet|mainnet>

DESCRIPTION
  start a solana docker oracle
```

_See code: [dist/commands/solana/oracle/up.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/oracle/up.js)_

## `sb solana oracle withdraw ORACLEKEY`

withdraw from an oracle's staking wallet

```
USAGE
  $ sb solana oracle withdraw ORACLEKEY --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>] [-f]
    [--unwrap] [--withdrawDestination <value>]

ARGUMENTS
  ORACLEKEY  public key of the oracle account

FLAGS
  -a, --authority=<value>         alternate keypair for the oracle authority
  -f, --force                     allow withdrawing more than the queues minStake requirement
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --amount=<value>                (required) amount to withdraw
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with
  --unwrap                        whether to unwrap the withdrawed funds
  --withdrawDestination=<value>   the account to withdraw funds to. if unwrap is set, this should be a SystemProgram
                                  owned account. if unwrap is not set, this should be a TokenAccount.

DESCRIPTION
  withdraw from an oracle's staking wallet
```

_See code: [dist/commands/solana/oracle/withdraw.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/oracle/withdraw.js)_

## `sb solana permission create`

create a permission account

```
USAGE
  $ sb solana permission create --granter <value> --grantee <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [--enable] [-a
    <value>]

FLAGS
  -a, --authority=<value>         alternate keypair that is the authority for the granter
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --enable                        whether to enable permissions on the resource. --keypair or --authority must be
                                  provided
  --grantee=<value>               (required) publicKey of the resource that is being granted permissions. This is
                                  typically an AggregatorAccount, BufferRelayerAccount, OracleAccount, or VrfAccount.
  --granter=<value>               (required) publicKey of the resource that is granting permissions. This is typically
                                  the QueueAccount.
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a permission account
```

_See code: [dist/commands/solana/permission/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/permission/create.js)_

## `sb solana permission grant PERMISSIONKEY`

enable a resources permissions

```
USAGE
  $ sb solana permission grant PERMISSIONKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [-a <value>]

ARGUMENTS
  PERMISSIONKEY  public key of the permission account

FLAGS
  -a, --authority=<value>         alternate keypair that is the authority for the permission account
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  enable a resources permissions
```

_See code: [dist/commands/solana/permission/grant.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/permission/grant.js)_

## `sb solana permission print PERMISSIONKEY`

print a permission account

```
USAGE
  $ sb solana permission print PERMISSIONKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed]
    [--json]

ARGUMENTS
  PERMISSIONKEY  public key of the permission account

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a permission account
```

_See code: [dist/commands/solana/permission/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/permission/print.js)_

## `sb solana permission revoke PERMISSIONKEY`

disable a resources permissions

```
USAGE
  $ sb solana permission revoke PERMISSIONKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [-a <value>]

ARGUMENTS
  PERMISSIONKEY  public key of the permission account

FLAGS
  -a, --authority=<value>         alternate keypair that is the authority for the permission account
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  disable a resources permissions
```

_See code: [dist/commands/solana/permission/revoke.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/permission/revoke.js)_

## `sb solana print PUBKEY`

print a Switchboard account

```
USAGE
  $ sb solana print PUBKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed]
    [--json]

ARGUMENTS
  PUBKEY  publicKey of the Switchboard account to search for

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a Switchboard account
```

_See code: [dist/commands/solana/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/print.js)_

## `sb solana queue create`

create an oracle queue

```
USAGE
  $ sb solana queue create [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u <value>]
    [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k <value>]
    [--ledgerPath <value> --ledger] [--json] [-a <value>] [--queueKeypair <value>] [--dataBufferKeypair <value>] [--size
    <value>] [--name <value>] [--metadata <value>] [--reward <value>] [--minStake <value>] [--oracleTimeout <value>]
    [--slashingEnabled] [--permissionedFeeds] [--unpermissionedVrf] [--enableBufferRelayers] [--feedProbationPeriod
    <value>] [--consecutiveFeedFailureLimit <value>] [--consecutiveOracleFailureLimit <value>]

FLAGS
  -a, --authority=<value>                  alternate keypair that is the authority for the queue and is required to
                                           approve permissions
  -h, --help                               Show CLI help.
  -k, --keypair=<value>                    keypair that will pay for onchain transactions. defaults to new account
                                           authority if no alternate authority provided
  -s, --silent                             suppress cli prompts
  -u, --rpcUrl=<value>                     alternate RPC url
  -v, --verbose                            log everything
  --attestationProgramId=<value>           alternative Switchboard Attestation program ID to interact with
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

_See code: [dist/commands/solana/queue/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/queue/create.js)_

## `sb solana queue print QUEUEKEY`

print a queue account

```
USAGE
  $ sb solana queue print QUEUEKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed]
    [--json] [--oracles]

ARGUMENTS
  QUEUEKEY  public key of the queue account

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --oracles                       print the queue oracles
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a queue account
```

_See code: [dist/commands/solana/queue/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/queue/print.js)_

## `sb solana queue set QUEUEKEY`

set an oracle queue's config

```
USAGE
  $ sb solana queue set QUEUEKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--json] [-a <value>] [--name <value>] [--metadata <value>] [--reward
    <value>] [--minStake <value>] [--oracleTimeout <value>] [--slashingEnabled] [--unpermissionedFeeds |
    --permissionedFeeds] [--unpermissionedVrf] [--enableBufferRelayers] [--consecutiveFeedFailureLimit <value>]
    [--consecutiveOracleFailureLimit <value>]

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
  --attestationProgramId=<value>           alternative Switchboard Attestation program ID to interact with
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

_See code: [dist/commands/solana/queue/set.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/queue/set.js)_

## `sb solana request print REQUESTKEY`

print a function request account

```
USAGE
  $ sb solana request print REQUESTKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed]
    [--json]

ARGUMENTS
  REQUESTKEY  public key of the request account

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a function request account
```

_See code: [dist/commands/solana/request/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/request/print.js)_

## `sb solana request send FUNCTIONKEY`

Init and trigger a request to a function.

```
USAGE
  $ sb solana request send FUNCTIONKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--json] [--parameters <value>]

ARGUMENTS
  FUNCTIONKEY  public key of the function account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --parameters=<value>            Parameters to pass to your function
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Init and trigger a request to a function.
```

_See code: [dist/commands/solana/request/send.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/request/send.js)_

## `sb solana routine configure ROUTINEKEY`

create a new routine account for a given function

```
USAGE
  $ sb solana routine configure ROUTINEKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--json] [-n <value>] [--metadata <value>] [-a <value>] [--schedule
    <value>] [--parameters <value>] [--appendParams]

ARGUMENTS
  ROUTINEKEY  public key of the routine account

FLAGS
  -a, --authority=<value>         keypair or public key to delegate authority to for managing the function account
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -n, --name=<value>              name of the function for easier identification
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --appendParams                  append to current container parameters
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --metadata=<value>              metadata of the function for easier identification
  --parameters=<value>            parameters to pass to the function
  --programId=<value>             alternative Switchboard program ID to interact with
  --schedule=<value>              cron schedule

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new routine account for a given function

EXAMPLES
  $ sb solana routine create CkvizjVnm2zA5Wuwan34NhVT3zFc7vqUyGnA6tuEF5aE --name function-1 --fundAmount 1.25 --container switchboardlabs/basic-oracle-function --version solana --schedule "*/10 * * * * *" --params=xyz
```

_See code: [dist/commands/solana/routine/configure.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/routine/configure.js)_

## `sb solana routine create FUNCTIONKEY`

create a new routine account for a given function

```
USAGE
  $ sb solana routine create FUNCTIONKEY --schedule <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--attestationProgramId <value>]
    [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [-n <value>]
    [--metadata <value>] [-a <value>] [--parameters <value>]

ARGUMENTS
  FUNCTIONKEY  public key of the function account

FLAGS
  -a, --authority=<value>         keypair or public key to delegate authority to for managing the function account
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -n, --name=<value>              name of the function for easier identification
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --metadata=<value>              metadata of the function for easier identification
  --parameters=<value>            parameters to pass to the function
  --programId=<value>             alternative Switchboard program ID to interact with
  --schedule=<value>              (required) cron schedule

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new routine account for a given function

EXAMPLES
  $ sb solana routine create CkvizjVnm2zA5Wuwan34NhVT3zFc7vqUyGnA6tuEF5aE --name function-1 --fundAmount 1.25 --container switchboardlabs/basic-oracle-function --version solana --schedule "*/10 * * * * *" --params=xyz
```

_See code: [dist/commands/solana/routine/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/routine/create.js)_

## `sb solana routine fund ROUTINEKEY`

Fund a new routine account

```
USAGE
  $ sb solana routine fund ROUTINEKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--json] [--fundAmount <value>]

ARGUMENTS
  ROUTINEKEY  public key of the routine account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --fundAmount=<value>            [default: 0.0] token amount to load into the routines's escrow wallet.
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Fund a new routine account

EXAMPLES
  $ sb solana routine fund CkvizjVnm2zA5Wuwan34NhVT3zFc7vqUyGnA6tuEF5aE --fundAmount 1.25
```

_See code: [dist/commands/solana/routine/fund.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/routine/fund.js)_

## `sb solana routine print ROUTINEKEY`

print a function routine account

```
USAGE
  $ sb solana routine print ROUTINEKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed]
    [--json]

ARGUMENTS
  ROUTINEKEY  public key of the routine account

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a function routine account
```

_See code: [dist/commands/solana/routine/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/routine/print.js)_

## `sb solana verifier-oracle create QUEUEKEY`

create a verifier oracle for a given attestation queue

```
USAGE
  $ sb solana verifier-oracle create QUEUEKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--json] [-a <value>] [--verifierKeypair <value>] [--registryKey <value>]
    [--queueAuthority <value> --enable]

ARGUMENTS
  QUEUEKEY  public key of the attestation queue account

FLAGS
  -a, --authority=<value>         alternate keypair that is the authority for the verifier and is required to approve
                                  config changes and withdraw rewards
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --enable                        enable verifier heartbeat permissions
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with
  --queueAuthority=<value>        alternative keypair to use for attestation queue authority
  --registryKey=<value>           [default: Key to lookup the buffer data on IPFS or an alternative decentralized
                                  storage solution.]
  --verifierKeypair=<value>       keypair to use for the verifier account. This will be the account's publicKey

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a verifier oracle for a given attestation queue
```

_See code: [dist/commands/solana/verifier-oracle/create.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/verifier-oracle/create.js)_

## `sb solana verifier-oracle print VERIFIERKEY`

print a verifier oracle account

```
USAGE
  $ sb solana verifier-oracle print VERIFIERKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed]
    [--json]

ARGUMENTS
  VERIFIERKEY  public key of the verifier account

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a verifier oracle account
```

_See code: [dist/commands/solana/verifier-oracle/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/verifier-oracle/print.js)_

## `sb solana version`

print a Switchboard account

```
USAGE
  $ sb solana version [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u <value>]
    [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k <value>]
    [--ledgerPath <value> --ledger] [--json]

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a Switchboard account
```

_See code: [dist/commands/solana/version.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/version.js)_

## `sb solana vrf open-round VRFKEY`

request a new vrf result from a set of oracles

```
USAGE
  $ sb solana vrf open-round VRFKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--authority <value>]

ARGUMENTS
  VRFKEY  public key of the VRF account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --authority=<value>             alternative keypair that is the VRF authority
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  request a new vrf result from a set of oracles

ALIASES
  $ sb solana vrf update
  $ sb solana vrf open-round

EXAMPLES
  $ sb solana vrf request
```

## `sb solana vrf print VRFKEY`

print a VRF and it's associated accounts

```
USAGE
  $ sb solana vrf print VRFKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed]
    [--json]

ARGUMENTS
  VRFKEY  public key of the VRF account

FLAGS
  -h, --help                      Show CLI help.
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  print a VRF and it's associated accounts
```

_See code: [dist/commands/solana/vrf/print.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/vrf/print.js)_

## `sb solana vrf request VRFKEY`

request a new vrf result from a set of oracles

```
USAGE
  $ sb solana vrf request VRFKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--authority <value>]

ARGUMENTS
  VRFKEY  public key of the VRF account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --authority=<value>             alternative keypair that is the VRF authority
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  request a new vrf result from a set of oracles

ALIASES
  $ sb solana vrf update
  $ sb solana vrf open-round

EXAMPLES
  $ sb solana vrf request
```

_See code: [dist/commands/solana/vrf/request.js](https://github.com/switchboard-xyz/core-sdk/blob/v3.3.12/dist/commands/solana/vrf/request.js)_

## `sb solana vrf update VRFKEY`

request a new vrf result from a set of oracles

```
USAGE
  $ sb solana vrf update VRFKEY [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--attestationProgramId <value>] [--commitment confirmed|finalized|processed] [-k
    <value>] [--ledgerPath <value> --ledger] [--authority <value>]

ARGUMENTS
  VRFKEY  public key of the VRF account

FLAGS
  -h, --help                      Show CLI help.
  -k, --keypair=<value>           keypair that will pay for onchain transactions. defaults to new account authority if
                                  no alternate authority provided
  -s, --silent                    suppress cli prompts
  -u, --rpcUrl=<value>            alternate RPC url
  -v, --verbose                   log everything
  --attestationProgramId=<value>  alternative Switchboard Attestation program ID to interact with
  --authority=<value>             alternative keypair that is the VRF authority
  --cluster=<option>              the solana cluster to connect to
                                  <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>           [default: confirmed] transaction commitment level to use
                                  <options: confirmed|finalized|processed>
  --ledger                        enable ledger support
  --ledgerPath=<value>            HID path to the ledger
  --mainnetBeta                   WARNING: use mainnet-beta solana cluster
  --programId=<value>             alternative Switchboard program ID to interact with

DESCRIPTION
  request a new vrf result from a set of oracles

ALIASES
  $ sb solana vrf update
  $ sb solana vrf open-round

EXAMPLES
  $ sb solana vrf request
```

## `sb update [CHANNEL]`

update the sb CLI

```
USAGE
  $ sb update [CHANNEL] [-a] [-v <value> | -i] [--force]

FLAGS
  -a, --available        Install a specific version.
  -i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
  -v, --version=<value>  Install a specific version.
  --force                Force a re-download of the requested version.

DESCRIPTION
  update the sb CLI

EXAMPLES
  Update to the stable channel:

    $ sb update stable

  Update to a specific version:

    $ sb update --version 1.0.0

  Interactively select version:

    $ sb update --interactive

  See available versions:

    $ sb update --available
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v3.1.32/src/commands/update.ts)_

## `sb version`

```
USAGE
  $ sb version [--json] [--verbose]

FLAGS
  --verbose  Show additional information about the CLI.

GLOBAL FLAGS
  --json  Format output as json.

FLAG DESCRIPTIONS
  --verbose  Show additional information about the CLI.

    Additionally shows the architecture, node version, operating system, and versions of plugins that the CLI is using.
```

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v1.3.8/src/commands/version.ts)_

<!-- commandsstop -->
