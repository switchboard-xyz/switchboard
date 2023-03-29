A private queue is any Oracle Queue not controlled by the Switchboard DAO.

Switchboard is architected to route off-chain data to an on-chain account. A
publisher is responsible for building the job definition, which defines the
task(s) the oracles must perform to fetch and transform external data. Sometimes
a publisher may wish to bring private data on-chain using an API key which poses
a set of challenges. In order for the oracle to retrieve the data, they need
access to the publisher's API key. Blockchains are public so there is no easy
way to conceal the API key on-chain.

Switchboard provides the ability to create your own queue with your own set of
oracles, allowing the oracles access to your API key so they can resolve the
private endpoints.

## Variable Expansion

Oracles can be provided a `configs.json` file to store various configurations
needed to execute job definitions. If an oracle encounters a job definition with
a variable, it will parse the `configs.json` and embed the value in the job
definition. API keys should be specified in the config under the Job Account
public key to prevent a malicous feed from leaking an API key.

```json title="configs.json"
{
  "jobVariables": {
    // Pubkey of the Job account for which this variable expansion applies
    "HtB62K71H49RJbATYpmB6UCMBXLK6G3Q5JtGveTMR8Mt": {
      "VARIABLE_NAME": "abc123"
    },
    // Global variable expansion that applies to any Job account. SEE CAUTION BELOW
    "*": {
      "GLOBAL_VARIABLE_NAME": "abc123"
    }
  }
}
```