
interact with switchboard on Solana

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
* [`sbv2 solana crank create [QUEUEKEY]`](#sbv2-solana-crank-create-queuekey)
* [`sbv2 solana crank list [CRANKKEY]`](#sbv2-solana-crank-list-crankkey)
* [`sbv2 solana crank pop [CRANKKEY]`](#sbv2-solana-crank-pop-crankkey)
* [`sbv2 solana crank print [CRANKKEY]`](#sbv2-solana-crank-print-crankkey)
* [`sbv2 solana crank push [CRANKKEY] [AGGREGATORKEY]`](#sbv2-solana-crank-push-crankkey-aggregatorkey)
* [`sbv2 solana crank sort [CRANKKEY]`](#sbv2-solana-crank-sort-crankkey)
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
  $ sbv2 solana aggregator save history [AGGREGATORKEY] -f <value> [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [--force] [--json] [--csv]

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to deserialize

FLAGS
  -f, --outputFile=<value>  (required) output file to save aggregator pubkeys to
  -h, --help                Show CLI help.
  -s, --silent              suppress cli prompts
  -u, --rpcUrl=<value>      alternate RPC url
  -v, --verbose             log everything
  --commitment=<option>     [default: confirmed] transaction commitment level to use
                            <options: confirmed|finalized|processed>
  --csv                     output aggregator accounts in csv format
  --force                   overwrite output file if exists
  --json                    output aggregator accounts in json format
  --mainnetBeta             WARNING: use mainnet-beta solana cluster
  --programId=<value>       alternative Switchboard program ID to interact with

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
  --nodeImage=<value>           [default: dev-v2-08-14-22a-mc-beta] public key of the oracle to start-up
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

## `sbv2 solana crank sort [CRANKKEY]`

list the pubkeys currently on the crank

```
USAGE
  $ sbv2 solana crank sort [CRANKKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>] [--commitment
    confirmed|finalized|processed] [--force]

ARGUMENTS
  CRANKKEY  public key of the crank

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --force                overwrite output file if exists
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  list the pubkeys currently on the crank
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
