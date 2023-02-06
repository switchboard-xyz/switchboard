
test a switchboard job definition

* [`sbv2 job test`](#sbv2-job-test)

## `sbv2 job test`

test a job definition against the Switchboard task-runner

```
USAGE
  $ sbv2 job test [-h] [-v] [-s] [--json] [-d] [--job <value>]

FLAGS
  -d, --devnet      test against a devnet task-runner
  -h, --help        Show CLI help.
  -s, --silent      suppress cli prompts
  -v, --verbose     log everything
  --job=<value>...  filesystem path to job definition file

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  test a job definition against the Switchboard task-runner

EXAMPLES
  $ sbv2 job:test
```
