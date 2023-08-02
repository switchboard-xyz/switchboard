export QUEUE_KEY=uPeRMdfPmrPqgRWSrjAnAkH78RqAhe5kXoW6vBYRqFX
export CRANK_KEY=GN9jjCy2THzZxhYqZETmPM3my8vg4R5JyNkgULddUMa5

sb solana aggregator create "$QUEUE_KEY" \
    --keypair ~/.config/solana/id.json \
    --crankKey "$CRANK_KEY" \
    --name "My_Test_Feed" \
    --updateInterval 10 \
    --minOracles 1 \
    --batchSize 1 \
    --leaseAmount 0.1 \
    --job ./src/oracle-job.json \
    --verbose