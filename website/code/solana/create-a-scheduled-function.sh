sb solana function create 2ie3JZfKcvsRLsJaP5fSo43gUo1vsurnUAtAgUdUAiDG \
  --name "My Function" \
  --metadata "Randomness Callback" \
  --schedule "30 * * * * *" \
  --containerRegistry dockerhub \
  --container "switchboardlabs/basic-binance-oracle" \
  --keypair ~/.config/solana/id.json \
  --mainnetBeta