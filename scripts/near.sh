#!/bin/bash

# This script will build a NEAR queue environment with a set of feeds pushed onto the crank
function display_help {
  printf "\nDescription:\nCommand line script to create a Near Switchboard environment\n\nUsage:\n%s [-a accountId] [-c testnet|mainnet] [-n name] [-m minStake] [-r reward] [-s queueSize] [-u updateInterval]\n\nOptions:\n" "./scripts/near.sh "
  echo "-a accountId, named account used as the payer and authority"
  printf "\n\nExample:\n\t./scripts/near.sh -a sbv2-authority.testnet -c testnet -n 'Near Queue' -m 0 -r 0.000075 -s 250 -u 10 \n"
}

Color_Off='\033[0m'  
Red='\033[0;31m'          # Red
Green='\033[0;32m'        # Green
Blue='\033[0;34m'         # Blue
Purple='\033[0;35m'       # Purple

set -e

stty sane # dont show backspace char during prompts

script_dir=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
project_dir="$(dirname "$script_dir")"

declare -a feeds=(
  "$project_dir/directory/jobs/btc"
  "$project_dir/directory/jobs/eth"
  "$project_dir/directory/jobs/near"
  "$project_dir/directory/jobs/usdc"
  # "$project_dir/directory/jobs/sol"
  # "$project_dir/directory/jobs/usdt"
)

network_id="testnet"
account_id="sbv2-authority.testnet"

queue_name="Near Queue"
min_stake="0"
reward="0"
queue_size="100"
update_interval="10"
num_oracles=1

while getopts 'a:c:n:m:r:s:u:o:' OPTION; do
  case "$OPTION" in
    a)
      account_id="$OPTARG"
      ;;
    c)
      network_id="$OPTARG"
      if [[ "$network_id" != "testnet" && "$network_id" != "mainnet" ]]; then
        echo "invalid Network ID ($CLUSTER) - [testnet or mainnet]"
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
    o)
      num_oracles="$OPTARG"
      ;;
    ?)
      display_help
      exit 1
      ;;
  esac
done
shift "$(($OPTIND -1))"

echo -e "${Blue}Account ID:${Color_Off} $account_id"
echo -e "${Blue}Network:${Color_Off} $network_id"
echo -e "${Blue}Queue Name:${Color_Off} $queue_name"
echo -e "${Blue}Min Stake:${Color_Off} $min_stake"
echo -e "${Blue}Reward:${Color_Off} $reward"
echo -e "${Blue}Size:${Color_Off} $queue_size"
echo -e "${Blue}Update Interval:${Color_Off} $update_interval"
echo -e "${Blue}Num Oracles:${Color_Off} $num_oracles"
echo

envFilename="near.${network_id// /_}.${queue_name// /_}.env"
if test -f "$envFilename"; then
    echo "$envFilename exists."
    exit 1
fi

# Create Escrow
escrow=$(sbv2 near escrow create \
  --networkId "$network_id" \
  --accountName "$account_id" \
  --json
)
escrowAddress=$(echo "$escrow" | jq -r '.addressBase58')
escrowBytes=$(echo "$escrow" | jq -r '.address')
echo -e "${Green}✓ Create Escrow:${Color_Off} $escrowAddress"
echo -e "${Blue}Bytes:${Color_Off} $escrowBytes"
echo

# Create Queue
queue=$(sbv2 near queue create \
  --networkId "$network_id" \
  --accountName "$account_id" \
  --name "$queue_name" \
  --metadata "$queue_name" \
  --unpermissionedFeeds \
  --unpermissionedVrf \
  --enableBufferRelayers \
  --reward "$reward" \
  --minStake "$min_stake" \
  --queueSize "$queue_size" \
  --json
)
queueAddress=$(echo "$queue" | jq -r '.addressBase58')
queueBytes=$(echo "$queue" | jq -r '.address')
echo -e "${Green}✓ Create Queue:${Color_Off} $queueAddress"
echo -e "${Blue}Bytes:${Color_Off} $queueBytes"
echo

# Create Crank
crank=$(sbv2 near crank create "$queueAddress" \
  --networkId "$network_id" \
  --accountName "$account_id" \
  --name "Crank #1" \
  --metadata "$queue_name, Crank #1" \
  --maxRows 250 \
  --json
 )
crankAddress=$(echo "$crank" | jq -r '.addressBase58')
crankBytes=$(echo "$crank" | jq -r '.address')
echo -e "${Green}✓ Create Crank:${Color_Off} $crankAddress"
echo -e "${Blue}Bytes:${Color_Off} $crankBytes"
echo

# Save initial queue and crank values
touch "$envFilename"
{
  printf "NETWORK_ID=\"%s\"\n" "$network_id";
  printf "AUTHORITY=\"%s\"\n\n" "$account_id";
  printf "QUEUE_ADDRESS=\"%s\"\n" "$queueAddress";
  printf "QUEUE_ADDRESS_BYTES=\"%s\"\n\n" "$queueBytes";
  printf "CRANK_ADDRESS=\"%s\"\n" "$crankAddress";
  printf "CRANK_ADDRESS_BYTES=\"%s\"\n\n" "$crankBytes";
  } >> "$envFilename"

# Create oracles
for (( i=1;i<=$num_oracles;i++ ))
do
  # Create Oracle
  oracle=$(sbv2 near oracle create "$queueAddress" \
    --networkId "$network_id" \
    --accountName "$account_id" \
    --name "Oracle #$i" \
    --metadata "$queue_name, Oracle #$i" \
    --json
  )
  oracleAddress=$(echo "$oracle" | jq -r '.addressBase58')
  oracleBytes=$(echo "$oracle" | jq -r '.address')
  echo -e "${Green}✓ Create Oracle #$i:${Color_Off} $oracleAddress"
  echo -e "${Blue}Bytes #$i:${Color_Off} $oracleBytes"
  echo

  # Create Oracle Permissions
  oraclePermission=$(sbv2 near permission create \
    --networkId "$network_id" \
    --accountName "$account_id" \
    --granter "$queueAddress" \
    --grantee "$oracleAddress" \
    --enable \
    --json
  )
  oraclePermissionAddress=$(echo "$oraclePermission" | jq -r '.addressBase58')
  oraclePermissionBytes=$(echo "$oraclePermission" | jq -r '.address')
  echo -e "${Green}✓ Create Oracle #$i Permission:${Color_Off} $oraclePermissionAddress"
  echo -e "${Blue}Bytes #$i:${Color_Off} $oraclePermissionBytes"
  echo
  {
    printf "ORACLE_%s_ADDRESS=\"%s\"\n" "$i" "$oracleAddress";
    printf "ORACLE_%s_ADDRESS_BYTES=\"%s\"\n\n" "$i" "$oracleBytes";
    printf "ORACLE_%s_PERMISSION_ADDRESS=\"%s\"\n" "$i" "$oraclePermissionAddress";
    printf "ORACLE_%s_PERMISSION_ADDRESS_BYTES=\"%s\"\n\n" "$i" "$oraclePermissionBytes";
    } >> "$envFilename"
done

#   # Create Aggregator
# btc=$(sbv2 near aggregator create "$queueAddress" \
#   --accountName "$authority" \
#   --name "BTC/ USD" \
#   --metadata "BTC / USD" \
#   --crankAddress "$crankAddress" \
#   --batchSize 1 \
#   --minJobs 3 \
#   --minOracles 1 \
#   --updateInterval "${update_interval}" \
#   --job scripts/feeds/btc/binanceCom.jsonc \
#   --job scripts/feeds/btc/binanceUs.jsonc \
#   --job scripts/feeds/btc/bitfinex.jsonc \
#   `#--job scripts/feeds/btc/bitstamp.jsonc` \
#   `#--job scripts/feeds/btc/bittrex.jsonc` \
#   --job scripts/feeds/btc/coinbase.jsonc \
#   --job scripts/feeds/btc/ftxCom.jsonc \
#   --job scripts/feeds/btc/ftxUs.jsonc \
#   --job scripts/feeds/btc/huobi.jsonc \
#   --job scripts/feeds/btc/kraken.jsonc \
#   --job scripts/feeds/btc/mexc.jsonc \
#   --job scripts/feeds/btc/okex.jsonc \
#   --json
# )
# btcAddress=$(echo "$btc" | jq -r '.addressBase58')
# btcBytes=$(echo "$btcAddress" | jq -r '.address')
# echo -e "${Green}✓ Create BTC Aggregator:${Color_Off} $btcAddress"
# echo -e "${Blue}Bytes:${Color_Off} $btcBytes"

# Create Feeds
for feed in "${feeds[@]}"
do
  feedFilename=$(basename -- "$feed")
  feedName="${feedFilename%.*}"
  feedNameUpper=$(echo "$feedName" | tr '[:lower:]' '[:upper:]')

  # Create Aggregator
  aggregator=$(sbv2 near aggregator create "$queueAddress" \
    --networkId "$network_id" \
    --accountName "$account_id" \
    --name "$feedNameUpper / USD" \
    --metadata "$feedNameUpper / USD" \
    --crankAddress "$crankAddress" \
    --batchSize "$num_oracles" \
    --minOracles "$num_oracles" \
    --updateInterval "$update_interval" \
    --varianceThreshold "1.0" \
    --forceReportPeriod "300" \
    --json
  )
  aggregatorAddress=$(echo "$aggregator" | jq -r '.addressBase58')
  aggregatorBytes=$(echo "$aggregator" | jq -r '.address')
  echo -e "${Green}✓ Create Aggregator:${Color_Off} $aggregatorAddress"
  echo -e "${Blue}Bytes:${Color_Off} $aggregatorBytes"
  echo

  # Create Aggregator Permissions
  aggregatorPermission=$(sbv2 near permission create \
    --networkId "$network_id" \
    --accountName "$account_id" \
    --granter "$queueAddress" \
    --grantee "$aggregatorAddress" \
    --enable \
    --json
  )
  aggregatorPermissionAddress=$(echo "$aggregatorPermission" | jq -r '.addressBase58')
  aggregatorPermissionBytes=$(echo "$aggregatorPermission" | jq -r '.address')
  echo -e "${Green}✓ Create Aggregator Permission:${Color_Off} $aggregatorPermissionAddress"
  echo -e "${Blue}Bytes:${Color_Off} $aggregatorPermissionBytes"
  echo
  
{
  printf "%s_AGGREGATOR_ADDRESS=\"%s\"\n" "$feedNameUpper" "$aggregatorAddress";
  printf "%s_AGGREGATOR_ADDRESS_BYTES=\"%s\"\n\n" "$feedNameUpper" "$aggregatorBytes";
  printf "%s_AGGREGATOR_PERMISSION_ADDRESS=\"%s\"\n" "$feedNameUpper" "$aggregatorPermissionAddress";
  printf "%s_AGGREGATOR_PERMISSION_ADDRESS_BYTES=\"%s\"\n\n" "$feedNameUpper" "$aggregatorPermissionBytes";
  } >> "$envFilename"

  jobs=$(find "$feed" -type f -name "*.jsonc")
  for job_definition in $jobs
  do
    fullJobFilename=$(basename -- "$job_definition")
    jobName="${fullJobFilename%.*}"
    jobNameUpper=$(echo "$jobName" | tr '[:lower:]' '[:upper:]')
    echo -e "${Blue}Creating Job:${Color_Off} $jobName"
    job=$(sbv2 near job create "$job_definition" \
      --networkId "$network_id" \
      --accountName "$account_id" \
      --name "$jobName - $feedNameUpper / USD" \
      --metadata "$jobName - $feedNameUpper / USD" \
      --json
    )
    jobAddress=$(echo "$job" | jq -r '.addressBase58')
    jobBytes=$(echo "$job" | jq -r '.address')
    echo -e "${Green}✓ Create Job ${Purple}($jobName)${Green}:${Color_Off} $jobAddress"
    echo -e "${Blue}Bytes:${Color_Off} $jobBytes"

    sbv2 near aggregator add job "$aggregatorAddress" \
      --networkId "$network_id" \
      --accountName "$account_id" \
      --jobKey "$jobAddress" \
      --jobWeight 1 &> /dev/null && echo -e "${Green}✓ JobAccount ${Purple}($jobName)${Green} added to aggregator successfully${Color_Off}" || echo -e "${Red}✗ Failed to add JobAccount ${Purple}($jobName)${Red} to aggregator${Color_Off}"

    {
      printf "%s_%s_JOB_ADDRESS=\"%s\"\n" "$feedNameUpper" "$jobNameUpper" "$jobAddress";
      printf "%s_%s_JOB_ADDRESS_BYTES=\"%s\"\n\n" "$feedNameUpper" "$jobNameUpper" "$jobBytes";
      } >> "$envFilename"

    echo
  done

  sbv2 near crank push "$crankAddress" \
    --networkId "$network_id" \
    --accountName "$account_id" \
    -a "$aggregatorAddress" \
    &> /dev/null && echo -e "${Green}✓ $feedNameUpper AggregatorAccount pushed to crank successfully${Color_Off}\n" || echo -e "${Red}✗ Failed to push $feedNameUpper AggregatorAccount to crank${Color_Off}\n"
done

echo -e "${Purple}Printing queue ...${Color_Off}"
sbv2 near print queue "$queueAddress" --networkId "$network_id" --json --all
echo

echo -e "${Purple}Printing oracle ...${Color_Off}"
sbv2 near print oracle "$oracleAddress" --networkId "$network_id" --json --all
echo
