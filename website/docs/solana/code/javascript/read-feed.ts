import { AggregatorAccount } from "@switchboard-xyz/solana.js";

const aggregatorAccount = new AggregatorAccount(program, aggregatorPubkey);
const aggregator = await aggregatorAccount.loadData();
const result = AggregatorAccount.decodeLatestValue(aggregator);
console.log(result);
