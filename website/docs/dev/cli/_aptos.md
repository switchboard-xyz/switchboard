
interact with switchboard on Aptos

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
  $ sbv2 aptos crank list [CRANKHEXSTRING] [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>]
    [-u <value>] [--json]

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
  $ sbv2 aptos list crank [CRANKHEXSTRING] [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>]
    [-u <value>] [--json]

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
  $ sbv2 aptos oracle metrics [ORACLEHEXSTRING] [-h] [-v] [-s] [--networkId devnet|testnet|mainnet] [--programId <value>]
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
  --networkId=<option>          [default: testnet] Aptos network to connect to
                                <options: devnet|testnet|mainnet>
  --nodeImage=<value>           [default: dev-v2-RC_02_24_23_18_43] public key of the oracle to start-up
  --profileName=<value>         [default: default] If --keypair is pointing to a yaml file, provide an optional profile
                                to load. If none provided, default will be used
  --programId=<value>           Switchboard programId on the selected Aptos network

DESCRIPTION
  start an aptos docker oracle
```

## `sbv2 aptos permission create GRANTER`

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
