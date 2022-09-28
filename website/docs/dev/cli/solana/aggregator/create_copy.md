---

title: Create Copy
---
copy an aggregator account to a new oracle queue

```asciidoc
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
