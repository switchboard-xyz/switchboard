---
source: "https://docs.switchboard.xyz/feeds/best-practices#data-source-diversity"
embedding-id: "jobs-diversity"
---
The first step when building a feed is determining where you are sourcing your
data from. Each data source should correspond to a job account, which is just a
collection of Switchboard tasks, used to instruct the oracles on how to fetch
and transform data. Checkout the job directory for some example definitions. You
can also view a catalog of curated job definitions in the Switchboard publisher.

- **Job Diversity** — Ensure you’re sourcing data from multiple, reliable
  sources.
- **Job Weights** — Add job weights for sources with a higher degree of truth,
  such as exchanges where price discovery is likely to happen. Oracles submit
  the weighted median as their final result so jobs with a higher weight have
  more influence on the result.
- **minJobResults** — Ensure the oracles have a reliable set of data before
  responding on-chain. If only 1 out of 12 sources respond, you will not have a
  reliable result. But if you set this to 12 out of 12 and one of your sources
  is failing, you will encounter a stale feed, so ensure you have some margin
  for single source failures.