<table>
  <thead>
    <tr>
      <th>Env Variable</th>
      <th>Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FS_PAYER_SECRET_PATH</td>
      <td>
        <b>Type</b> - Filesystem Path
        <br />
        <b>Description</b> - Local filesystem path to keypair file that will pay
        for on-chain transactions and is the authority for the oracle
      </td>
    </tr>
    <tr>
      <td>PAYER_SECRETS or DOCKER_PAYER_SECRET</td>
      <td>
        <b>Type</b> - Docker Secret
        <br />
        <b>Description</b> - Docker Secret path to keypair file that will pay
        for on-chain transactions and is the authority for the oracle
      </td>
    </tr>
    <tr>
      <td>GOOGLE_PAYER_SECRET_PATH</td>
      <td>
        <b>Type</b> - GCP Resource Path
        <br />
        <b>Description</b> - Google cloud resource to manage your keypair
        securely.
      </td>
    </tr>
    <tr>
      <td>AMAZON_PAYER_SECRET_PATH</td>
      <td>
        <b>Type</b> - AWS ARN path
        <br />
        <b>Description</b> - Amazon web services ARN path of secret.
      </td>
    </tr>
  </tbody>
</table>
