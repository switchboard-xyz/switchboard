#!/bin/bash

sbv2 evm queue create --arbitrum --testnet --account ~/.config/arbitrum/testnet.txt \
  --name "gally test queue" \
  --oracleTimeout 3600 \
  --queueSize 8
queue_address="0xB1c6E716ACae35200Dc8278A63a424f58417954c"
sbv2 evm queue print --arbitrum --testnet 0xB1c6E716ACae35200Dc8278A63a424f58417954c --oracles


sbv2 evm oracle create 0xB1c6E716ACae35200Dc8278A63a424f58417954c --arbitrum --testnet --account ~/.config/arbitrum/testnet.txt \
  --name "gally test oracle" \
  --enable
oracle_address="0x5eeFE1CA9D1093a59aC9278cC6D296A4eeDd6385"
sbv2 evm oracle print 0x5eeFE1CA9D1093a59aC9278cC6D296A4eeDd6385 --arbitrum --testnet


sbv2 evm queue print --arbitrum --testnet 0xB1c6E716ACae35200Dc8278A63a424f58417954c --oracles
sbv2 evm oracle heartbeat 0x5eeFE1CA9D1093a59aC9278cC6D296A4eeDd6385 --arbitrum --testnet --account ~/.config/arbitrum/testnet.txt
sbv2 evm queue print --arbitrum --testnet 0xB1c6E716ACae35200Dc8278A63a424f58417954c --oracles


sbv2 evm aggregator create --arbitrum --testnet --account ~/.config/arbitrum/testnet.txt 0xB1c6E716ACae35200Dc8278A63a424f58417954c \
  --name "gally test BTC feed" \
  --batchSize 1 \
  --updateInterval 90 \
  --fundAmount 0.25 \
  --enable \
  --job ../directory/jobs/btc/binanceCom.jsonc \
  --job ../directory/jobs/btc/coinbase.jsonc \
  --job ../directory/jobs/btc/kraken.jsonc \
  --job ../directory/jobs/btc/okex.jsonc \
  --job ../directory/jobs/btc/bitfinex.jsonc \
  --job ../directory/jobs/btc/bitstamp.jsonc
aggregator_address="0x7892F7326291F3Bc17680956B476701DF76d52Da"
sbv2 evm aggregator print --arbitrum --testnet 0x7892F7326291F3Bc17680956B476701DF76d52Da --jobs


sbv2 evm job create --arbitrum --testnet \
  --job ../directory/jobs/btc/binanceCom.jsonc \
  --job ../directory/jobs/btc/coinbase.jsonc \
  --job ../directory/jobs/btc/kraken.jsonc \
  --job ../directory/jobs/btc/okex.jsonc \
  --job ../directory/jobs/btc/bitfinex.jsonc \
  --job ../directory/jobs/btc/bitstamp.jsonc \
  --json > my_jobs.json


sbv2 evm job create --arbitrum --testnet \
  --hash bafkreihvxeb7rwyrilzmouid2onuwajkkng4ykdwrr6vaxjgg3zv3cghdy \
  --removeJob ../directory/jobs/btc/okex.jsonc \
  --json > my_updated_jobs.json

