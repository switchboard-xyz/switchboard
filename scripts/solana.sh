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

queue_name="Solana Queue"
min_stake="0"
reward="0"
queue_size="100"
update_interval="10"

while getopts 'k:p:c:n:m:r:s:u:' OPTION; do
  case "$OPTION" in
    k)
      payer="$OPTARG"
      ;;
    p)
      profile_name="$OPTARG"
      echo -e "${Blue}Profile:${Color_Off} $profile_name"
      ;;
    c)
      network_id="$OPTARG"
      if [[ "$network_id" != "devnet" && "$network_id" != "mainnet-beta" ]]; then
        echo "invalid Network ID ($CLUSTER) - [devnet or mainnet-beta]"
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
      printf "\nDescription:\nCommand line script to create a Solana Switchboard environment\n\nUsage:\n$(basename \$0) [-k keypairPath] [-c devent|mainnet-beta] [-n name] [-m minStake] [-r reward] [-s queueSize] [-u updateInterval]\n\nOptions:\n"
      echo "-k keypairPath, filesystem path to Solana keypair file"
      printf "\n\nExample:\n\t./scripts/solana.sh -k ~/.config/solana/id.json -c devnet -n \"Solana Test Queue\" -m 1337 -r 1337 -s 110 -u 11\n"
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

if [[ -z "${payer}" ]]; then
  read -rp "Enter the path of the solana keypair to sign transactions: " payer
fi

echo -e "${Blue}Payer:${Color_Off} $payer"
echo -e "${Blue}Network:${Color_Off} $network_id"
echo -e "${Blue}Queue Name:${Color_Off} $queue_name"
echo -e "${Blue}Min Stake:${Color_Off} $min_stake"
echo -e "${Blue}Reward:${Color_Off} $reward"
echo -e "${Blue}Size:${Color_Off} $queue_size"
echo -e "${Blue}Update Interval:${Color_Off} $update_interval"
echo

envFilename="solana.${queue_name// /_}.env"
if test -f "$envFilename"; then
    echo "$envFilename exists."
    exit 1
fi

## Create Queue
MY_QUEUE=$(sbv2 solana queue create \
    --keypair "$payer" \
    --size "$queue_size" \
    --name "$queue_name" \
    --reward "$reward" \
    --minStake "$min_stake" \
    --oracleTimeout 300 \
    --slashingEnabled \
    --permissionedFeeds \
    --unpermissionedVrf \
    --enableBufferRelayers \
    --feedProbationPeriod 100 \
    --consecutiveFeedFailureLimit 500 \
    --consecutiveOracleFailureLimit 500 \
    --json)
MY_QUEUE_PUBKEY=$(echo "$MY_QUEUE" | jq -r '.publicKey')
echo "Queue: $MY_QUEUE_PUBKEY"
sbv2 solana queue print "$MY_QUEUE_PUBKEY" 

## Create Crank
MY_CRANK=$(sbv2 solana crank create "$MY_QUEUE_PUBKEY" \
    --keypair "$payer" \
    --size 100 \
    --name "My_Test_Crank" \
    --json)
MY_CRANK_PUBKEY=$(echo "$MY_CRANK" | jq -r '.publicKey')
echo "Crank: $MY_CRANK_PUBKEY"
sbv2 solana crank print "$MY_CRANK_PUBKEY" 

## Create Oracle
MY_ORACLE=$(sbv2 solana oracle create "$MY_QUEUE_PUBKEY" \
    --keypair "$payer" \
    --name "My_Test_Oracle" \
    --enable \
    --stakeAmount 1.1 \
    --json)
MY_ORACLE_PUBKEY=$(echo "$MY_ORACLE" | jq -r '.publicKey')
echo "Oracle: $MY_ORACLE_PUBKEY"
sbv2 solana oracle print "$MY_ORACLE_PUBKEY" 

## Create Aggregator
MY_AGGREGATOR=$(sbv2 solana aggregator create "$MY_QUEUE_PUBKEY"  \
    --keypair "$payer" \
    --name "My_Test_Feed" \
    --updateInterval 10 \
    --minOracles 1 \
    --batchSize 1 \
    --leaseAmount 1.337 \
    --job ./directory/jobs/btc/binanceCom.jsonc \
    --job ./directory/jobs/btc/kraken.jsonc \
    --job ./directory/jobs/btc/bitfinex.jsonc \
    --crankKey "$MY_CRANK_PUBKEY" \
    --enable \
    --json )
MY_AGGREGATOR_PUBKEY=$(echo "$MY_AGGREGATOR" | jq -r '.publicKey')
echo "Aggregator: $MY_AGGREGATOR_PUBKEY"
sbv2 solana aggregator print "$MY_AGGREGATOR_PUBKEY" 
