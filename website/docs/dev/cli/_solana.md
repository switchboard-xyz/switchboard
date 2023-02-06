
interact with switchboard on Solana

* [`sbv2 solana aggregator add history AGGREGATORKEY`](#sbv2-solana-aggregator-add-history-aggregatorkey)
* [`sbv2 solana aggregator add job AGGREGATORKEY`](#sbv2-solana-aggregator-add-job-aggregatorkey)
* [`sbv2 solana aggregator create QUEUEKEY`](#sbv2-solana-aggregator-create-queuekey)
* [`sbv2 solana aggregator create json [DEFINITIONFILE]`](#sbv2-solana-aggregator-create-json-definitionfile)
* [`sbv2 solana aggregator deposit AGGREGATORKEY`](#sbv2-solana-aggregator-deposit-aggregatorkey)
* [`sbv2 solana aggregator extend AGGREGATORKEY`](#sbv2-solana-aggregator-extend-aggregatorkey)
* [`sbv2 solana aggregator fund AGGREGATORKEY`](#sbv2-solana-aggregator-fund-aggregatorkey)
* [`sbv2 solana aggregator history AGGREGATORKEY`](#sbv2-solana-aggregator-history-aggregatorkey)
* [`sbv2 solana aggregator lease set AGGREGATORKEY`](#sbv2-solana-aggregator-lease-set-aggregatorkey)
* [`sbv2 solana aggregator list AUTHORITYKEY`](#sbv2-solana-aggregator-list-authoritykey)
* [`sbv2 solana aggregator lock AGGREGATORKEY`](#sbv2-solana-aggregator-lock-aggregatorkey)
* [`sbv2 solana aggregator metrics AGGREGATORKEY`](#sbv2-solana-aggregator-metrics-aggregatorkey)
* [`sbv2 solana aggregator open-round [AGGREGATORKEY]`](#sbv2-solana-aggregator-open-round-aggregatorkey)
* [`sbv2 solana aggregator permission create AGGREGATORKEY`](#sbv2-solana-aggregator-permission-create-aggregatorkey)
* [`sbv2 solana aggregator print AGGREGATORKEY`](#sbv2-solana-aggregator-print-aggregatorkey)
* [`sbv2 solana aggregator remove job AGGREGATORKEY JOBKEY`](#sbv2-solana-aggregator-remove-job-aggregatorkey-jobkey)
* [`sbv2 solana aggregator set AGGREGATORKEY`](#sbv2-solana-aggregator-set-aggregatorkey)
* [`sbv2 solana aggregator transfer [AGGREGATORKEY]`](#sbv2-solana-aggregator-transfer-aggregatorkey)
* [`sbv2 solana aggregator update [AGGREGATORKEY]`](#sbv2-solana-aggregator-update-aggregatorkey)
* [`sbv2 solana aggregator watch AGGREGATORKEY`](#sbv2-solana-aggregator-watch-aggregatorkey)
* [`sbv2 solana aggregator withdraw AGGREGATORKEY`](#sbv2-solana-aggregator-withdraw-aggregatorkey)
* [`sbv2 solana anchor test`](#sbv2-solana-anchor-test)
* [`sbv2 solana buffer create [QUEUEKEY]`](#sbv2-solana-buffer-create-queuekey)
* [`sbv2 solana buffer open-round [BUFFERRELAYERKEY]`](#sbv2-solana-buffer-open-round-bufferrelayerkey)
* [`sbv2 solana buffer update [BUFFERRELAYERKEY]`](#sbv2-solana-buffer-update-bufferrelayerkey)
* [`sbv2 solana crank create QUEUEKEY`](#sbv2-solana-crank-create-queuekey)
* [`sbv2 solana crank events AGGREGATORKEY`](#sbv2-solana-crank-events-aggregatorkey)
* [`sbv2 solana crank pop CRANKKEY`](#sbv2-solana-crank-pop-crankkey)
* [`sbv2 solana crank print CRANKKEY`](#sbv2-solana-crank-print-crankkey)
* [`sbv2 solana crank push AGGREGATORKEY`](#sbv2-solana-crank-push-aggregatorkey)
* [`sbv2 solana job create`](#sbv2-solana-job-create)
* [`sbv2 solana job print JOBKEY`](#sbv2-solana-job-print-jobkey)
* [`sbv2 solana json create aggregator [DEFINITIONFILE]`](#sbv2-solana-json-create-aggregator-definitionfile)
* [`sbv2 solana lease create [AGGREGATORKEY]`](#sbv2-solana-lease-create-aggregatorkey)
* [`sbv2 solana lease extend AGGREGATORKEY`](#sbv2-solana-lease-extend-aggregatorkey)
* [`sbv2 solana lease print LEASEKEY`](#sbv2-solana-lease-print-leasekey)
* [`sbv2 solana lease set AGGREGATORKEY`](#sbv2-solana-lease-set-aggregatorkey)
* [`sbv2 solana lease withdraw AGGREGATORKEY`](#sbv2-solana-lease-withdraw-aggregatorkey)
* [`sbv2 solana localnet env`](#sbv2-solana-localnet-env)
* [`sbv2 solana localnet up`](#sbv2-solana-localnet-up)
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
* [`sbv2 solana vrf open-round [VRFKEY]`](#sbv2-solana-vrf-open-round-vrfkey)
* [`sbv2 solana vrf print VRFKEY`](#sbv2-solana-vrf-print-vrfkey)
* [`sbv2 solana vrf request [VRFKEY]`](#sbv2-solana-vrf-request-vrfkey)
* [`sbv2 solana vrf update [VRFKEY]`](#sbv2-solana-vrf-update-vrfkey)

## `sbv2 solana aggregator add history AGGREGATORKEY`

add a history buffer to an aggregator

```
USAGE
  $ sbv2 solana aggregator add history [AGGREGATORKEY] --historyLimit <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
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
  $ sbv2 solana aggregator add job [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
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

## `sbv2 solana aggregator create QUEUEKEY`

create an aggregator account

```
USAGE
  $ sbv2 solana aggregator create [QUEUEKEY] --updateInterval <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
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

## `sbv2 solana aggregator create json [DEFINITIONFILE]`

create an aggregator from a json file

```
USAGE
  $ sbv2 solana aggregator create json [DEFINITIONFILE] [-h] [-v] [-s] [--mainnetBeta | --cluster
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
  $ sbv2 solana aggregator deposit [AGGREGATORKEY] --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator to extend a lease for

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
  $ sbv2 solana aggregator extend [AGGREGATORKEY] --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator to extend a lease for

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
  $ sbv2 solana aggregator fund [AGGREGATORKEY] --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator to extend a lease for

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
  $ sbv2 solana aggregator history [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
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
  $ sbv2 solana aggregator lease set [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>] [--queuePubkey <value>]
    [--newAuthority <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator to extend a lease for

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
  $ sbv2 solana aggregator list [AUTHORITYKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [--json]

ARGUMENTS
  AUTHORITYKEY  public key of an aggregator's authority

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
  $ sbv2 solana aggregator lock [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
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
  $ sbv2 solana aggregator metrics [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
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

## `sbv2 solana aggregator open-round [AGGREGATORKEY]`

request a new aggregator result from a set of oracles

```
USAGE
  $ sbv2 solana aggregator open-round [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to request an update for

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
  $ sbv2 solana aggregator permission create [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
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
  $ sbv2 solana aggregator print [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
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
  $ sbv2 solana aggregator remove job [AGGREGATORKEY] [JOBKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
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
  $ sbv2 solana aggregator set [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
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

## `sbv2 solana aggregator transfer [AGGREGATORKEY]`

transfer an aggregator to a new queue

```
USAGE
  $ sbv2 solana aggregator transfer [AGGREGATORKEY] --newQueue <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>] [--newCrank <value>]
    [--loadAmount <value>] [--enable] [--queueAuthority <value>] [--force]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to transfer

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

## `sbv2 solana aggregator update [AGGREGATORKEY]`

request a new aggregator result from a set of oracles

```
USAGE
  $ sbv2 solana aggregator update [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to request an update for

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
  $ sbv2 solana aggregator watch [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
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
  $ sbv2 solana aggregator withdraw [AGGREGATORKEY] --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>] [--queuePubkey <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator to extend a lease for

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
    <value>] [--programId <value>] [-d <value>] [--oracleKey <value>] [-k <value>] [--nodeImage <value>] [--arm] [-t
    <value>] [--detach] [--testValidatorArgs <value>]

FLAGS
  -d, --switchboardDir=<value>  directory with switchboard.env to load a switchboard environment
  -h, --help                    Show CLI help.
  -k, --keypair=<value>         keypair that will pay for onchain transactions. defaults to new account authority if no
                                alternate authority provided
  -s, --silent                  suppress docker logging
  -t, --timeout=<value>         [default: 120] number of seconds before ending the docker process
  -u, --rpcUrl=<value>          alternate RPC url
  -v, --verbose                 log everything
  --arm                         apple silicon needs to use a docker image for linux/arm64
  --cluster=<option>            [default: localnet] cluster
                                <options: localnet|devnet>
  --detach                      keep the localnet rpc running
  --mainnetBeta                 WARNING: use mainnet-beta solana cluster
  --mainnetRpcUrl=<value>       [default: https://api.mainnet-beta.solana.com/] Solana mainnet RPC URL to use for the
                                oracle task runner
  --nodeImage=<value>           [default: dev-v2-RC_01_17_23_16_22] public key of the oracle to start-up
  --oracleKey=<value>           public key of the oracle to start-up
  --programId=<value>           alternative Switchboard program ID to interact with
  --testValidatorArgs=<value>   additional args passed to the local solana validator

DESCRIPTION
  run anchor test and a switchboard oracle in parallel

ALIASES
  $ sbv2 anchor test
```

## `sbv2 solana buffer create [QUEUEKEY]`

create a buffer relayer account

```
USAGE
  $ sbv2 solana buffer create [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value>
    --ledger] [--json] [--bufferKeypair <value>] [-a <value>] [-n <value>] [--minUpdateDelaySeconds <value>]
    [--jobDefinition <value> | --jobKey <value>]

ARGUMENTS
  QUEUEKEY  oracle queue to create BufferRelayer account on

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

## `sbv2 solana buffer open-round [BUFFERRELAYERKEY]`

request a new buffer relayer result

```
USAGE
  $ sbv2 solana buffer open-round [BUFFERRELAYERKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  BUFFERRELAYERKEY  public key of the aggregator account to request an update for

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

## `sbv2 solana buffer update [BUFFERRELAYERKEY]`

request a new buffer relayer result

```
USAGE
  $ sbv2 solana buffer update [BUFFERRELAYERKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  BUFFERRELAYERKEY  public key of the aggregator account to request an update for

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
  $ sbv2 solana crank create [QUEUEKEY] -s <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--json] [-n <value>] [--metadata
    <value>]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue to create a crank for

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -n, --name=<value>     name of the crank for easier identification
  -s, --silent           suppress cli prompts
  -s, --size=<value>     (required) maximum number of rows a crank can support
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --ledger               enable ledger support
  --ledgerPath=<value>   HID path to the ledger
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --metadata=<value>     metadata of the crank for easier identification
  --programId=<value>    alternative Switchboard program ID to interact with

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  create a new crank account
```

## `sbv2 solana crank events AGGREGATORKEY`

watch an aggregator account and stream the on-chain events

```
USAGE
  $ sbv2 solana crank events [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
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
  $ sbv2 solana crank pop [CRANKKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value>
    --ledger]

ARGUMENTS
  CRANKKEY  public key of the crank

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
  $ sbv2 solana crank print [CRANKKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [--json] [--rows]

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
  $ sbv2 solana crank push [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--crankKey <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator to push onto a crank

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
  $ sbv2 solana job print [JOBKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
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

## `sbv2 solana json create aggregator [DEFINITIONFILE]`

create an aggregator from a json file

```
USAGE
  $ sbv2 solana json create aggregator [DEFINITIONFILE] [-h] [-v] [-s] [--mainnetBeta | --cluster
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

## `sbv2 solana lease create [AGGREGATORKEY]`

fund and re-enable an aggregator lease

```
USAGE
  $ sbv2 solana lease create [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--amount <value>]

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
  $ sbv2 solana lease extend [AGGREGATORKEY] --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator to extend a lease for

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
  $ sbv2 solana lease print [LEASEKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [--json]

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
  $ sbv2 solana lease set [AGGREGATORKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>] [--queuePubkey <value>]
    [--newAuthority <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator to extend a lease for

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
  $ sbv2 solana lease withdraw [AGGREGATORKEY] --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>] [--queuePubkey <value>]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator to extend a lease for

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

## `sbv2 solana localnet env`

create a localnet switchboard environment

```
USAGE
  $ sbv2 solana localnet env [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u <value>]
    [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]
    [--force] [-o <value>]

FLAGS
  -h, --help               Show CLI help.
  -k, --keypair=<value>    keypair that will pay for onchain transactions. defaults to new account authority if no
                           alternate authority provided
  -o, --outputDir=<value>  [default: ./.switchboard] output directory for scripts
  -s, --silent             suppress cli prompts
  -u, --rpcUrl=<value>     alternate RPC url
  -v, --verbose            log everything
  --cluster=<option>       the solana cluster to connect to
                           <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>    [default: confirmed] transaction commitment level to use
                           <options: confirmed|finalized|processed>
  --force                  overwrite output file if existing
  --ledger                 enable ledger support
  --ledgerPath=<value>     HID path to the ledger
  --mainnetBeta            WARNING: use mainnet-beta solana cluster
  --programId=<value>      alternative Switchboard program ID to interact with

DESCRIPTION
  create a localnet switchboard environment
```

## `sbv2 solana localnet up`

start a local solana validator with a switchboard environment and oracle running alongside it

```
USAGE
  $ sbv2 solana localnet up [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u <value>]
    [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger]
    [--oracleStakingWalletKeypair <value> --queueKeypair <value>] [--nodeImage <value>] [--arm] [-t <value>] [--reward
    <value>] [--minStake <value>] [--oracleTimeout <value>] [--slashingEnabled] [--permissionedFeeds]
    [--unpermissionedVrf] [--enableBufferRelayers]

FLAGS
  -h, --help                            Show CLI help.
  -k, --keypair=<value>                 keypair that will pay for onchain transactions. defaults to new account
                                        authority if no alternate authority provided
  -s, --silent                          suppress docker logging
  -t, --timeout=<value>                 [default: 120] number of seconds before ending the docker process
  -u, --rpcUrl=<value>                  alternate RPC url
  -v, --verbose                         log everything
  --arm                                 apple silicon needs to use a docker image for linux/arm64
  --cluster=<option>                    the solana cluster to connect to
                                        <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>                 [default: confirmed] transaction commitment level to use
                                        <options: confirmed|finalized|processed>
  --enableBufferRelayers                enabling this setting will allow buffer relayer accounts to call openRound.
  --ledger                              enable ledger support
  --ledgerPath=<value>                  HID path to the ledger
  --mainnetBeta                         WARNING: use mainnet-beta solana cluster
  --minStake=<value>                    [default: 0] the reward payed out to oracles for responding to an update request
                                        on-chain, Ex: 2 requires oracles to have 2 wSOL in their staking wallet before
                                        heartbeating
  --nodeImage=<value>                   [default: dev-v2-RC_01_17_23_16_22] public key of the oracle to start-up
  --oracleStakingWalletKeypair=<value>  keypair to use for the oracle staking wallet. Using a static staking wallet with
                                        the same queue will produce the same oracle pubkey each time.
  --oracleTimeout=<value>               [default: 180] time period (in seconds) we should remove an oracle after if no
                                        response
  --permissionedFeeds                   enabling this setting means data feeds need explicit permission to join the
                                        queue.
  --programId=<value>                   alternative Switchboard program ID to interact with
  --queueKeypair=<value>                keypair to use for the oracle queue account. This will be the account's
                                        publicKey
  --reward=<value>                      [default: 0] the reward payed out to oracles for responding to an update request
                                        on-chain, Ex: A reward of 0.0000075 with a feed with a batchSize of 4 would
                                        deduct (4 * 0.0000075) wSOL from an aggregators lease each round.
  --slashingEnabled                     whether slashing is enabled on this queue.
  --unpermissionedVrf                   enabling this setting means data feeds do not need explicit permission to
                                        request VRF proofs and verifications from this queue.

DESCRIPTION
  start a local solana validator with a switchboard environment and oracle running alongside it
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
  --nodeImage=<value>      [default: dev-v2-RC_01_17_23_16_22] public key of the oracle to start-up
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
  $ sbv2 solana oracle create [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value>
    --ledger] [--json] [-n <value>] [-a <value>] [--enable] [--queueAuthority <value>] [--stakeAmount <value>]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue to create an oracle for

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
  $ sbv2 solana oracle print [ORACLEKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
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
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [--nodeImage <value>] [--arm] [-t
    <value>]

FLAGS
  -h, --help             Show CLI help.
  -k, --keypair=<value>  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided
  -s, --silent           suppress docker logging
  -t, --timeout=<value>  [default: 120] number of seconds before ending the docker process
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --arm                  apple silicon needs to use a docker image for linux/arm64
  --cluster=<option>     the solana cluster to connect to
                         <options: devnet|mainnet-beta|mainnet|localnet>
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --ledger               enable ledger support
  --ledgerPath=<value>   HID path to the ledger
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --nodeImage=<value>    [default: dev-v2-RC_01_17_23_16_22] public key of the oracle to start-up
  --oracleKey=<value>    (required) public key of the oracle to start-up
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  start a solana docker oracle
```

## `sbv2 solana oracle withdraw ORACLEKEY`

withdraw from an oracle's staking wallet

```
USAGE
  $ sbv2 solana oracle withdraw [ORACLEKEY] --amount <value> [-h] [-v] [-s] [--mainnetBeta | --cluster
    devnet|mainnet-beta|mainnet|localnet] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [-k <value>] [--ledgerPath <value> --ledger] [-a <value>]

ARGUMENTS
  ORACLEKEY  public key of the oracle

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
  $ sbv2 solana permission grant [PERMISSIONKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
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
  $ sbv2 solana permission print [PERMISSIONKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
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
  $ sbv2 solana permission revoke [PERMISSIONKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster
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
  $ sbv2 solana print [PUBKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
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
  $ sbv2 solana queue print [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [--json]

ARGUMENTS
  QUEUEKEY  public key of the oracle queue account

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
  print a queue account
```

## `sbv2 solana queue set QUEUEKEY`

set an oracle queue's config

```
USAGE
  $ sbv2 solana queue set [QUEUEKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet]
    [-u <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value>
    --ledger] [--json] [-a <value>] [--name <value>] [--metadata <value>] [--reward <value>] [--minStake <value>]
    [--oracleTimeout <value>] [--slashingEnabled] [--permissionedFeeds] [--unpermissionedVrf] [--enableBufferRelayers]
    [--consecutiveFeedFailureLimit <value>] [--consecutiveOracleFailureLimit <value>]

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
  --unpermissionedVrf                      enabling this setting means data feeds do not need explicit permission to
                                           request VRF proofs and verifications from this queue.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  set an oracle queue's config
```

## `sbv2 solana vrf open-round [VRFKEY]`

request a new vrf result from a set of oracles

```
USAGE
  $ sbv2 solana vrf open-round [VRFKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value>
    --ledger] [--authority <value>]

ARGUMENTS
  VRFKEY  public key of the vrf account to request randomness for

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
  $ sbv2 solana vrf print [VRFKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [--json]

ARGUMENTS
  VRFKEY  public key of the vrf account

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

## `sbv2 solana vrf request [VRFKEY]`

request a new vrf result from a set of oracles

```
USAGE
  $ sbv2 solana vrf request [VRFKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value>
    --ledger] [--authority <value>]

ARGUMENTS
  VRFKEY  public key of the vrf account to request randomness for

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

## `sbv2 solana vrf update [VRFKEY]`

request a new vrf result from a set of oracles

```
USAGE
  $ sbv2 solana vrf update [VRFKEY] [-h] [-v] [-s] [--mainnetBeta | --cluster devnet|mainnet-beta|mainnet|localnet] [-u
    <value>] [--programId <value>] [--commitment confirmed|finalized|processed] [-k <value>] [--ledgerPath <value>
    --ledger] [--authority <value>]

ARGUMENTS
  VRFKEY  public key of the vrf account to request randomness for

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
