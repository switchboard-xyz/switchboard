---

title: Create
---
create an aggregator account

```asciidoc
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
