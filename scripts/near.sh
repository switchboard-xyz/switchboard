#!/bin/bash

# This script will build a NEAR queue environment with a set of feeds pushed onto the crank
# Arg1 Authority  (Ex: gallynaut.testnet)
# Arg2 Queue Name (Ex: MyQueue, defaults to 'Near Queue')
# Arg3 Update Interval (Ex: 15, defaults to 10 seconds)

Color_Off='\033[0m'  
Red='\033[0;31m'          # Red
Green='\033[0;32m'        # Green
Blue='\033[0;34m'         # Blue
Purple='\033[0;35m'       # Purple

set -e

stty sane # dont show backspace char during prompts

script_dir=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

declare -a feeds=(
  "$script_dir/feeds/btc"
  "$script_dir/feeds/eth"
  "$script_dir/feeds/sol"
  "$script_dir/feeds/usdc"
  "$script_dir/feeds/usdt"
)

authority=$1
if [[ -z "${authority}" ]]; then
  read -rp "Enter the name of the near account to sign transactions: " authority
fi
echo -e "${Blue}Authority:${Color_Off} $authority"
echo

queue_name=$2
if [[ -z "${queue_name}" ]]; then
  queue_name="Near Queue"
fi

update_interval=$3
if [[ -z "${update_interval}" ]]; then
  update_interval=10
fi

envFilename="near.${queue_name// /_}.env"
if test -f "$envFilename"; then
    echo "$envFilename exists."
    exit 1
fi

# Create Escrow
escrow=$(sbv2 near escrow create \
  --accountName "$authority" \
  --json
)
escrowAddress=$(echo "$escrow" | jq -r '.addressBase58')
escrowBytes=$(echo "$escrow" | jq -r '.address')
echo -e "${Green}✓ Create Escrow:${Color_Off} $escrowAddress"
echo -e "${Blue}Bytes:${Color_Off} $escrowBytes"
echo

# Create Queue
queue=$(sbv2 near queue create \
  --accountName "$authority" \
  --name "$queue_name" \
  --metadata "$queue_name" \
  --slashingEnabled \
  --unpermissionedFeeds \
  --unpermissionedVrf \
  --enableBufferRelayers \
  --json
)
queueAddress=$(echo "$queue" | jq -r '.addressBase58')
queueBytes=$(echo "$queue" | jq -r '.address')
echo -e "${Green}✓ Create Queue:${Color_Off} $queueAddress"
echo -e "${Blue}Bytes:${Color_Off} $queueBytes"
echo

# Create Crank
crank=$(sbv2 near crank create "$queueAddress" \
  --accountName "$authority" \
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

# Create Oracle
oracle=$(sbv2 near oracle create "$queueAddress" \
  --accountName "$authority" \
  --name "Oracle #1" \
  --metadata "$queue_name, Oracle #1" \
  --json
 )
oracleAddress=$(echo "$oracle" | jq -r '.addressBase58')
oracleBytes=$(echo "$oracle" | jq -r '.address')
echo -e "${Green}✓ Create Oracle:${Color_Off} $oracleAddress"
echo -e "${Blue}Bytes:${Color_Off} $oracleBytes"
echo

# Create Oracle Permissions
oraclePermission=$(sbv2 near permission create \
  --accountName "$authority" \
  --granter "$queueAddress" \
  --grantee "$oracleAddress" \
  --enable \
  --json
)
oraclePermissionAddress=$(echo "$oraclePermission" | jq -r '.addressBase58')
oraclePermissionBytes=$(echo "$oraclePermission" | jq -r '.address')
echo -e "${Green}✓ Create Oracle Permission:${Color_Off} $oraclePermissionAddress"
echo -e "${Blue}Bytes:${Color_Off} $oraclePermissionBytes"
echo

touch "$envFilename"
# Write ENV variables
{
  printf "ESCROW_ADDRESS=\"%s\"\n" "$escrowAddress";
  printf "ESCROW_ADDRESS_BYTES=\"%s\"\n\n" "$escrowBytes";
  printf "QUEUE_ADDRESS=\"%s\"\n" "$queueAddress";
  printf "QUEUE_ADDRESS_BYTES=\"%s\"\n\n" "$queueBytes";
  printf "CRANK_ADDRESS=\"%s\"\n" "$crankAddress";
  printf "CRANK_ADDRESS_BYTES=\"%s\"\n\n" "$crankBytes";
  printf "ORACLE_ADDRESS=\"%s\"\n" "$oracleAddress";
  printf "ORACLE_ADDRESS_BYTES=\"%s\"\n\n" "$oracleBytes";
  printf "ORACLE_PERMISSION_ADDRESS=\"%s\"\n" "$oraclePermissionAddress";
  printf "ORACLE_PERMISSION_ADDRESS_BYTES=\"%s\"\n\n" "$oraclePermissionBytes";
  } >> "$envFilename"

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

## CREATE FEEDS
for feed in "${feeds[@]}"
do
  feedFilename=$(basename -- "$feed")
  feedName="${feedFilename%.*}"
  feedNameUpper=$(echo "$feedName" | tr '[:lower:]' '[:upper:]')

  # Create Aggregator
  aggregator=$(sbv2 near aggregator create "$queueAddress" \
    --accountName "$authority" \
    --name "$feedNameUpper / USD" \
    --metadata "$feedNameUpper / USD" \
    --crankAddress "$crankAddress" \
    --batchSize 1 \
    --minJobs 3 \
    --minOracles 1 \
    --updateInterval "${update_interval}" \
    --job scripts/feeds/btc/binanceCom.jsonc \
    --json
  )
  aggregatorAddress=$(echo "$aggregator" | jq -r '.addressBase58')
  aggregatorBytes=$(echo "$aggregator" | jq -r '.address')
  echo -e "${Green}✓ Create Aggregator:${Color_Off} $aggregatorAddress"
  echo -e "${Blue}Bytes:${Color_Off} $aggregatorBytes"
  echo

  # Create Aggregator Permissions
  aggregatorPermission=$(sbv2 near permission create \
    --accountName "$authority" \
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
      --accountName "$authority" \
      --name "$jobName - $feedNameUpper / USD" \
      --metadata "$jobName - $feedNameUpper / USD" \
      --json
    )
    jobAddress=$(echo "$job" | jq -r '.addressBase58')
    jobBytes=$(echo "$job" | jq -r '.address')
    echo -e "${Green}✓ Create Job ${Purple}($jobName)${Green}:${Color_Off} $jobAddress"
    echo -e "${Blue}Bytes:${Color_Off} $jobBytes"

    sbv2 near aggregator add job "$aggregatorAddress" \
      --accountName "$authority" \
      --jobKey "$jobAddress" \
      --jobWeight 1 &> /dev/null && echo -e "${Green}✓ JobAccount ${Purple}($jobName)${Green} added to aggregator successfully${Color_Off}" || echo -e "${Red}✗ Failed to add JobAccount ${Purple}($jobName)${Red} to aggregator${Color_Off}"

    {
      printf "%s_%s_JOB_ADDRESS=\"%s\"\n" "$feedNameUpper" "$jobNameUpper" "$jobAddress";
      printf "%s_%s_JOB_ADDRESS_BYTES=\"%s\"\n\n" "$feedNameUpper" "$jobNameUpper" "$jobBytes";
      } >> "$envFilename"

    echo
  done

  sbv2 near crank push "$crankAddress" \
    --accountName "$authority" \
    -a "$aggregatorAddress" \
    &> /dev/null && echo -e "${Green}✓ $feedNameUpper AggregatorAccount pushed to crank successfully${Color_Off}\n" || echo -e "${Red}✗ Failed to push $feedNameUpper AggregatorAccount to crank${Color_Off}\n"
done

echo -e "${Purple}Printing queue ...${Color_Off}"
sbv2 near print queue "$queueAddress" --json --all
echo

echo -e "${Purple}Printing oracle ...${Color_Off}"
sbv2 near print oracle "$oracleAddress" --json --all
echo
