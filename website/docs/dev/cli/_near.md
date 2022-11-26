
interact with switchboard on Near

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
