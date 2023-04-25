The following parameters can be used to initialize the SwitchboardProgram class:

| field          | Required | Description                                                                                                        |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `cluster`      | **true** | The version of the Switchboard program to connect to. Must be `mainnet-beta`, `devnet`, or `localnet`.             |
| `connection`   | false    | The Solana connection object to connect to an RPC server.                                                          |
| `payerKeypair` | false    | Keypair of account that will pay for any transactions. If not provided then Switchboard will be in READ-ONLY mode. |
