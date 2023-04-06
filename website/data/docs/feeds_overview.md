---
source: "https://docs.switchboard.xyz/feeds"
embedding-id: "feeds-overview"
---
An aggregator or data feed is what on-chain developers use when building smart
contracts. A data feed is a collection of jobs that get aggregated to produce a
single, deterministic result. Typically the first task in a job will fetch
external data with subsequent tasks responsible for parsing the response and
transforming the value into a single data type, like an integer or decimal.

When an oracle is assigned to process a data feed update, the oracle executes
the defined jobs, computes the weighted median of the job responses, and
publishes the result on-chain. If sufficient oracles respond, the on-chain
program computes the final result as the median of the assigned oracle
responses.
