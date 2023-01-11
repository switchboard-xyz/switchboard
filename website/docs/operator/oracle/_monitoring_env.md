<table>
  <thead>
    <tr>
      <th>Env Variable</th>
      <th>Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>METRICS_EXPORTER</td>
      <td>
        <b>
          <u>Optional</u>
        </b>
        <br />
        <b>Type</b> - prometheus / gcp / opentelemetry-collector*
        <br />
        <b>Default</b> - prometheus
        <br />
        <b>Description</b> - Dictates which metric suite to aggregate resource
        metrics, as defined in:
        <br />
        <a href="./monitoring">Oracle - Monitoring</a>
        <br />
        *opentelemetry-collector only supports the default endpoint
        localhost:55681/v1/metric
      </td>
    </tr>
    <tr>
      <td>PAGERDUTY_EVENT_KEY</td>
      <td>
        <b>
          <u>Optional</u>
        </b>
        <br />
        <b>Type</b> - String
        <br />
        <b>Default</b> - Paging disabled
        <br />
        <b>Description</b> - Token provided by pagerduty for sending pages about
        various alerts.
        <br />
        <a href="./monitoring#alerts">Oracle - Alerts</a>
      </td>
    </tr>
    <tr>
      <td>VERBOSE</td>
      <td>
        <b>
          <u>Optional</u>
        </b>
        <br />
        <b>Type</b> - Flag (0 or 1)
        <br />
        <b>Default</b> - 0, normal logging
        <br />
        <b>Description</b> - Set to 1 to increase the level of logging
      </td>
    </tr>
  </tbody>
</table>
