#!/bin/bash

# This script will build a Aptos queue environment with a set of feeds pushed onto the crank
# Example: ./scripts/aptos.sh -k ./.aptos/config.yaml -c devnet -n "Aptos Queue" -m 1337 -r 1337 -s 110 -u 11

Color_Off='\033[0m'  
Red='\033[0;31m'          # Red
Green='\033[0;32m'        # Green
Blue='\033[0;34m'         # Blue
Purple='\033[0;35m'       # Purple

set -e

stty sane # dont show backspace char during prompts

script_dir=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
project_dir="$(dirname "$script_dir")"

### DEFAULTS
profile_name="default"
network_id="devnet"

queue_name="Aptos Queue"
min_stake="0"
reward="0"
queue_size="100"
update_interval="10"

while getopts 'k:p:c:n:m:r:s:u:' OPTION; do
  case "$OPTION" in
    k)
      keypair="$OPTARG"
      ;;
    p)
      profile_name="$OPTARG"
      echo -e "${Blue}Profile:${Color_Off} $profile_name"
      ;;
    c)
      network_id="$OPTARG"
      if [[ "$network_id" != "devnet" && "$network_id" != "testnet" ]]; then
        echo "invalid Network ID ($CLUSTER) - [devnet or testnet]"
        exit 1
      fi
      ;;
    n)
      queue_name="$OPTARG"
      ;;
    m)
      min_stake="$OPTARG"
      ;;
    r)
      reward="$OPTARG"
      ;;
    s)
      queue_size="$OPTARG"
      ;;
    u)
      update_interval="$OPTARG"
      ;;
    ?)
      printf "\nDescription:\nCommand line script to create an Aptos Switchboard environment\n\nUsage:\n$(basename \$0) [-k keypairPath] [-p profileName] [-c devent|testnet] [-n name] [-m minStake] [-r reward] [-s queueSize] [-u updateInterval]\n\nOptions:\n"
      echo "-k keypairPath, filesystem path to Aptos config.yaml"
      echo "-p profileName, Aptos profile defaults to 'default'"
      printf "\n\nExample:\n\t./scripts/aptos.sh -k ./.aptos/config.yaml -c devnet -n \"Aptos Queue\" -m 1337 -r 1337 -s 110 -u 11\n"
      exit 1
      ;;
  esac
done
shift "$(($OPTIND -1))"



declare -a feeds=(
  "$project_dir/directory/jobs/btc"
  "$project_dir/directory/jobs/eth"
  "$project_dir/directory/jobs/near"
  "$project_dir/directory/jobs/sol"
  "$project_dir/directory/jobs/usdc"
  "$project_dir/directory/jobs/usdt"
)

if [[ -z "${keypair}" ]]; then
  read -rp "Enter the path of the aptos secretKey to sign transactions: " keypair
fi

echo -e "${Blue}Keypair:${Color_Off} $keypair"
echo -e "${Blue}Profile:${Color_Off} $profile_name"
echo -e "${Blue}Network:${Color_Off} $network_id"
echo -e "${Blue}Queue Name:${Color_Off} $queue_name"
echo -e "${Blue}Min Stake:${Color_Off} $min_stake"
echo -e "${Blue}Reward:${Color_Off} $reward"
echo -e "${Blue}Size:${Color_Off} $queue_size"
echo -e "${Blue}Update Interval:${Color_Off} $update_interval"
echo

envFilename="aptos.${queue_name// /_}.env"
if test -f "$envFilename"; then
    echo "$envFilename exists."
    exit 1
fi

# Create Queue
queue=$(sbv2 aptos queue create \
  --keypair "$keypair" \
  --name "$queue_name" \
  --metadata "$queue_name" \
  --minStake "$min_stake" \
  --reward "$reward" \
  --queueSize "$queue_size" \
  --slashingEnabled \
  --unpermissionedFeeds \
  --unpermissionedVrf \
  --enableBufferRelayers \
  --networkId "$network_id" \
  --json
)
if [[ -z $? ]]; then
  queueAddress=$(echo "$queue" | jq -r '.address')
  echo -e "${Green}✓ Create Queue:${Color_Off} $queueAddress"
else
  echo "Command Failed"
  exit 1
fi
# queueAddress=$(echo "$queue" | jq -r '.address')
# echo -e "${Green}✓ Create Queue:${Color_Off} $queueAddress"
echo

# Create Crank
crank=$(sbv2 aptos crank create "$queueAddress" \
  --keypair "$keypair" \
  --name "Crank #1" \
  --metadata "$queue_name, Crank #1" \
  --maxRows 250 \
  --networkId "$network_id" \
  --json
)
crankAddress=$(echo "$crank" | jq -r '.address')
echo -e "${Green}✓ Create Crank:${Color_Off} $crankAddress"
echo

# Create Oracle
oracle=$(sbv2 aptos oracle create "$queueAddress" \
  --keypair "$keypair" \
  --name "Oracle #1" \
  --metadata "$queue_name, Oracle #1" \
  --networkId "$network_id" \
  --json
 )
oracleAddress=$(echo "$oracle" | jq -r '.address')
echo -e "${Green}✓ Create Oracle:${Color_Off} $oracleAddress"
echo

# # Create Oracle Permissions
# oraclePermission=$(sbv2 near permission create \
#   --accountName "$keypair" \
#   --granter "$queueAddress" \
#   --grantee "$oracleAddress" \
#   --enable \
#   --json
# )
# oraclePermissionAddress=$(echo "$oraclePermission" | jq -r '.addressBase58')
# oraclePermissionBytes=$(echo "$oraclePermission" | jq -r '.address')
# echo -e "${Green}✓ Create Oracle Permission:${Color_Off} $oraclePermissionAddress"
# echo -e "${Blue}Bytes:${Color_Off} $oraclePermissionBytes"
# echo

# touch "$envFilename"
# # Write ENV variables
# {
#   # printf "ESCROW_ADDRESS=\"%s\"\n" "$escrowAddress";
#   # printf "ESCROW_ADDRESS_BYTES=\"%s\"\n\n" "$escrowBytes";
#   printf "QUEUE_ADDRESS=\"%s\"\n" "$queueAddress";
#   printf "QUEUE_ADDRESS_BYTES=\"%s\"\n\n" "$queueBytes";
#   printf "CRANK_ADDRESS=\"%s\"\n" "$crankAddress";
#   printf "CRANK_ADDRESS_BYTES=\"%s\"\n\n" "$crankBytes";
#   printf "ORACLE_ADDRESS=\"%s\"\n" "$oracleAddress";
#   printf "ORACLE_ADDRESS_BYTES=\"%s\"\n\n" "$oracleBytes";
#   printf "ORACLE_PERMISSION_ADDRESS=\"%s\"\n" "$oraclePermissionAddress";
#   printf "ORACLE_PERMISSION_ADDRESS_BYTES=\"%s\"\n\n" "$oraclePermissionBytes";
#   } >> "$envFilename"

# #   # Create Aggregator
# # btc=$(sbv2 near aggregator create "$queueAddress" \
# #   --accountName "$keypair" \
# #   --name "BTC/ USD" \
# #   --metadata "BTC / USD" \
# #   --crankAddress "$crankAddress" \
# #   --batchSize 1 \
# #   --minJobs 3 \
# #   --minOracles 1 \
# #   --updateInterval "${update_interval}" \
# #   --job scripts/feeds/btc/binanceCom.jsonc \
# #   --job scripts/feeds/btc/binanceUs.jsonc \
# #   --job scripts/feeds/btc/bitfinex.jsonc \
# #   `#--job scripts/feeds/btc/bitstamp.jsonc` \
# #   `#--job scripts/feeds/btc/bittrex.jsonc` \
# #   --job scripts/feeds/btc/coinbase.jsonc \
# #   --job scripts/feeds/btc/ftxCom.jsonc \
# #   --job scripts/feeds/btc/ftxUs.jsonc \
# #   --job scripts/feeds/btc/huobi.jsonc \
# #   --job scripts/feeds/btc/kraken.jsonc \
# #   --job scripts/feeds/btc/mexc.jsonc \
# #   --job scripts/feeds/btc/okex.jsonc \
# #   --json
# # )
# # btcAddress=$(echo "$btc" | jq -r '.addressBase58')
# # btcBytes=$(echo "$btcAddress" | jq -r '.address')
# # echo -e "${Green}✓ Create BTC Aggregator:${Color_Off} $btcAddress"
# # echo -e "${Blue}Bytes:${Color_Off} $btcBytes"

# ## CREATE FEEDS
# for feed in "${feeds[@]}"
# do
#   feedFilename=$(basename -- "$feed")
#   feedName="${feedFilename%.*}"
#   feedNameUpper=$(echo "$feedName" | tr '[:lower:]' '[:upper:]')

#   # Create Aggregator
#   aggregator=$(sbv2 near aggregator create "$queueAddress" \
#     --accountName "$keypair" \
#     --name "$feedNameUpper / USD" \
#     --metadata "$feedNameUpper / USD" \
#     --crankAddress "$crankAddress" \
#     --batchSize 1 \
#     --minJobs 3 \
#     --minOracles 1 \
#     --updateInterval "${update_interval}" \
#     --json
#   )
#   aggregatorAddress=$(echo "$aggregator" | jq -r '.addressBase58')
#   aggregatorBytes=$(echo "$aggregator" | jq -r '.address')
#   echo -e "${Green}✓ Create Aggregator:${Color_Off} $aggregatorAddress"
#   echo -e "${Blue}Bytes:${Color_Off} $aggregatorBytes"
#   echo

#   # Create Aggregator Permissions
#   aggregatorPermission=$(sbv2 near permission create \
#     --accountName "$keypair" \
#     --granter "$queueAddress" \
#     --grantee "$aggregatorAddress" \
#     --enable \
#     --json
#   )
#   aggregatorPermissionAddress=$(echo "$aggregatorPermission" | jq -r '.addressBase58')
#   aggregatorPermissionBytes=$(echo "$aggregatorPermission" | jq -r '.address')
#   echo -e "${Green}✓ Create Aggregator Permission:${Color_Off} $aggregatorPermissionAddress"
#   echo -e "${Blue}Bytes:${Color_Off} $aggregatorPermissionBytes"
#   echo
  
# {
#   printf "%s_AGGREGATOR_ADDRESS=\"%s\"\n" "$feedNameUpper" "$aggregatorAddress";
#   printf "%s_AGGREGATOR_ADDRESS_BYTES=\"%s\"\n\n" "$feedNameUpper" "$aggregatorBytes";
#   printf "%s_AGGREGATOR_PERMISSION_ADDRESS=\"%s\"\n" "$feedNameUpper" "$aggregatorPermissionAddress";
#   printf "%s_AGGREGATOR_PERMISSION_ADDRESS_BYTES=\"%s\"\n\n" "$feedNameUpper" "$aggregatorPermissionBytes";
#   } >> "$envFilename"

#   jobs=$(find "$feed" -type f -name "*.jsonc")
#   for job_definition in $jobs
#   do
#     fullJobFilename=$(basename -- "$job_definition")
#     jobName="${fullJobFilename%.*}"
#     jobNameUpper=$(echo "$jobName" | tr '[:lower:]' '[:upper:]')
#     echo -e "${Blue}Creating Job:${Color_Off} $jobName"
#     job=$(sbv2 near job create "$job_definition" \
#       --accountName "$keypair" \
#       --name "$jobName - $feedNameUpper / USD" \
#       --metadata "$jobName - $feedNameUpper / USD" \
#       --json
#     )
#     jobAddress=$(echo "$job" | jq -r '.addressBase58')
#     jobBytes=$(echo "$job" | jq -r '.address')
#     echo -e "${Green}✓ Create Job ${Purple}($jobName)${Green}:${Color_Off} $jobAddress"
#     echo -e "${Blue}Bytes:${Color_Off} $jobBytes"

#     sbv2 near aggregator add job "$aggregatorAddress" \
#       --accountName "$keypair" \
#       --jobKey "$jobAddress" \
#       --jobWeight 1 &> /dev/null && echo -e "${Green}✓ JobAccount ${Purple}($jobName)${Green} added to aggregator successfully${Color_Off}" || echo -e "${Red}✗ Failed to add JobAccount ${Purple}($jobName)${Red} to aggregator${Color_Off}"

#     {
#       printf "%s_%s_JOB_ADDRESS=\"%s\"\n" "$feedNameUpper" "$jobNameUpper" "$jobAddress";
#       printf "%s_%s_JOB_ADDRESS_BYTES=\"%s\"\n\n" "$feedNameUpper" "$jobNameUpper" "$jobBytes";
#       } >> "$envFilename"

#     echo
#   done

#   sbv2 near crank push "$crankAddress" \
#     --accountName "$keypair" \
#     -a "$aggregatorAddress" \
#     &> /dev/null && echo -e "${Green}✓ $feedNameUpper AggregatorAccount pushed to crank successfully${Color_Off}\n" || echo -e "${Red}✗ Failed to push $feedNameUpper AggregatorAccount to crank${Color_Off}\n"
# done

# echo -e "${Purple}Printing queue ...${Color_Off}"
# sbv2 near print queue "$queueAddress" --json --all
# echo

# echo -e "${Purple}Printing oracle ...${Color_Off}"
# sbv2 near print oracle "$oracleAddress" --json --all
# echo
