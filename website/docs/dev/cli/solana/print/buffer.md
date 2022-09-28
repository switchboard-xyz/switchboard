---

title: Buffer
---
Print the deserialized Switchboard buffer relayer account

```asciidoc
USAGE
  $ sbv2 solana print buffer [BUFFERRELAYERKEY] [-h] [-v] [-s] [--mainnetBeta] [-u <value>] [--programId <value>]
    [--commitment confirmed|finalized|processed] [--job]

ARGUMENTS
  BUFFERRELAYERKEY  public key of the buffer relayer account to deserialize

FLAGS
  -h, --help             Show CLI help.
  -s, --silent           suppress cli prompts
  -u, --rpcUrl=<value>   alternate RPC url
  -v, --verbose          log everything
  --commitment=<option>  [default: confirmed] transaction commitment level to use
                         <options: confirmed|finalized|processed>
  --job                  output job definitions
  --mainnetBeta          WARNING: use mainnet-beta solana cluster
  --programId=<value>    alternative Switchboard program ID to interact with

DESCRIPTION
  Print the deserialized Switchboard buffer relayer account

ALIASES
  $ sbv2 solana buffer print

EXAMPLES
  $ sbv2 buffer:print 23GvzENjwgqqaLejsAtAWgTkSzWjSMo2LUYTAETT8URp
```
