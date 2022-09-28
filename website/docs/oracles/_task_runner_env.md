<table>
  <thead>
    <tr>
      <th>Env Variable</th>
      <th>Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>TASK_RUNNER_SOLANA_RPC</td>
      <td>
        <b>
          <u>Required</u>
        </b>
        <br />
        <b>Type</b> - URL
        <br />
        <b>Description</b> - Solana mainnet RPC URL to support fulfilling update requests for Switchboard tasks that are reliant on Solana on-chain data.
        <br />
        <br />
        <b>NOTE:</b> This is not required if CHAIN is set to solana and CLUSTER is mainnet-beta.
      </td>
    </tr>
    <tr>
      <td>GCP_CONFIG_BUCKET</td>
      <td>
        <b>
          <u>Optional</u>
        </b>
        <br />
        <b>Type</b> - GCP Resource Path
        <br />
        <b>Default</b> - Looks for configs.json in the current working
        directory. If not found, no config is loaded.
        <br />
        <b>Description</b> - Contains API keys for private API endpoints
      </td>
    </tr>
  </tbody>
</table>
