# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [OracleJob.proto](#OracleJob-proto)
    - [AddTask](#OracleJob-AddTask)
    - [AnchorFetchTask](#OracleJob-AnchorFetchTask)
    - [BoundTask](#OracleJob-BoundTask)
    - [CacheTask](#OracleJob-CacheTask)
    - [CacheTask.CacheItem](#OracleJob-CacheTask-CacheItem)
    - [ComparisonTask](#OracleJob-ComparisonTask)
    - [ConditionalTask](#OracleJob-ConditionalTask)
    - [CronParseTask](#OracleJob-CronParseTask)
    - [DefiKingdomsTask](#OracleJob-DefiKingdomsTask)
    - [DefiKingdomsTask.Token](#OracleJob-DefiKingdomsTask-Token)
    - [DivideTask](#OracleJob-DivideTask)
    - [HistoryFunctionTask](#OracleJob-HistoryFunctionTask)
    - [LendingRateTask](#OracleJob-LendingRateTask)
    - [LpExchangeRateTask](#OracleJob-LpExchangeRateTask)
    - [LpTokenPriceTask](#OracleJob-LpTokenPriceTask)
    - [MangoPerpMarketTask](#OracleJob-MangoPerpMarketTask)
    - [MarinadeStateTask](#OracleJob-MarinadeStateTask)
    - [MaxTask](#OracleJob-MaxTask)
    - [MeanTask](#OracleJob-MeanTask)
    - [MedianTask](#OracleJob-MedianTask)
    - [MinTask](#OracleJob-MinTask)
    - [MultiplyTask](#OracleJob-MultiplyTask)
    - [OracleJob](#OracleJob-OracleJob)
    - [OracleTask](#OracleJob-OracleTask)
    - [PancakeswapExchangeRateTask](#OracleJob-PancakeswapExchangeRateTask)
    - [PerpMarketTask](#OracleJob-PerpMarketTask)
    - [PowTask](#OracleJob-PowTask)
    - [SerumSwapTask](#OracleJob-SerumSwapTask)
    - [SolanaAccountDataFetchTask](#OracleJob-SolanaAccountDataFetchTask)
    - [SplStakePoolTask](#OracleJob-SplStakePoolTask)
    - [SplTokenParseTask](#OracleJob-SplTokenParseTask)
    - [SubtractTask](#OracleJob-SubtractTask)
    - [SushiswapExchangeRateTask](#OracleJob-SushiswapExchangeRateTask)
    - [Task](#OracleJob-Task)
    - [TpsTask](#OracleJob-TpsTask)
    - [UniswapExchangeRateTask](#OracleJob-UniswapExchangeRateTask)
    - [VwapTask](#OracleJob-VwapTask)
    - [XStepPriceTask](#OracleJob-XStepPriceTask)
  
    - [ComparisonTask.Operation](#OracleJob-ComparisonTask-Operation)
    - [CronParseTask.ClockType](#OracleJob-CronParseTask-ClockType)
    - [HistoryFunctionTask.Method](#OracleJob-HistoryFunctionTask-Method)
    - [LendingRateTask.Field](#OracleJob-LendingRateTask-Field)
  
- [WebsocketTask.proto](#WebsocketTask-proto)
    - [WebsocketTask](#WebsocketTask-WebsocketTask)
  
- [buffer_layout_parse_task.proto](#buffer_layout_parse_task-proto)
    - [BufferLayoutParseTask](#buffer_layout_parse_task-BufferLayoutParseTask)
  
    - [BufferLayoutParseTask.BufferParseType](#buffer_layout_parse_task-BufferLayoutParseTask-BufferParseType)
    - [BufferLayoutParseTask.Endian](#buffer_layout_parse_task-BufferLayoutParseTask-Endian)
  
- [cron_parse_task.proto](#cron_parse_task-proto)
    - [CronParseTask](#cron_parse_task-CronParseTask)
  
    - [CronParseTask.ClockType](#cron_parse_task-CronParseTask-ClockType)
  
- [ewma_task.proto](#ewma_task-proto)
    - [EwmaTask](#ewma_task-EwmaTask)
  
- [http_task.proto](#http_task-proto)
    - [HttpTask](#http_task-HttpTask)
    - [HttpTask.Header](#http_task-HttpTask-Header)
  
    - [HttpTask.Method](#http_task-HttpTask-Method)
  
- [json_parse_task.proto](#json_parse_task-proto)
    - [JsonParseTask](#json_parse_task-JsonParseTask)
  
    - [JsonParseTask.AggregationMethod](#json_parse_task-JsonParseTask-AggregationMethod)
  
- [jupiter_swap_task.proto](#jupiter_swap_task-proto)
    - [JupiterSwapTask](#jupiter_swap_task-JupiterSwapTask)
    - [JupiterSwapTask.FilterList](#jupiter_swap_task-JupiterSwapTask-FilterList)
  
- [regex_extract_task.proto](#regex_extract_task-proto)
    - [RegexExtractTask](#regex_extract_task-RegexExtractTask)
  
- [round_task.proto](#round_task-proto)
    - [RoundTask](#round_task-RoundTask)
  
    - [RoundTask.Method](#round_task-RoundTask-Method)
  
- [sysclock_offset_task.proto](#sysclock_offset_task-proto)
    - [SysclockOffsetTask](#sysclock_offset_task-SysclockOffsetTask)
  
- [template.proto](#template-proto)
- [twap_task.proto](#twap_task-proto)
    - [TwapTask](#twap_task-TwapTask)
  
- [value_task.proto](#value_task-proto)
    - [ValueTask](#value_task-ValueTask)
  
- [Scalar Value Types](#scalar-value-types)



<a name="OracleJob-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## OracleJob.proto



<a name="OracleJob-AddTask"></a>

### AddTask
This task will add a numerical input by a scalar value or by another
aggregate.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| scalar | [double](#double) | optional | Specifies a scalar to add by. |
| aggregator_pubkey | [string](#string) | optional | Specifies an aggregator to add by. |
| job | [OracleJob](#OracleJob-OracleJob) | optional | A job whose result is computed before adding our numerical input by that result. |
| big | [string](#string) | optional | A stringified big.js. `Accepts variable expansion syntax.` |






<a name="OracleJob-AnchorFetchTask"></a>

### AnchorFetchTask
Load a parse an Anchor based solana account.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| program_id | [string](#string) | optional | Owning program of the account to parse. |
| account_address | [string](#string) | optional | The account to parse. |






<a name="OracleJob-BoundTask"></a>

### BoundTask



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| lower_bound | [OracleJob](#OracleJob-OracleJob) | optional |  |
| lower_bound_value | [string](#string) | optional |  |
| upper_bound | [OracleJob](#OracleJob-OracleJob) | optional |  |
| upper_bound_value | [string](#string) | optional |  |
| on_exceeds_upper_bound | [OracleJob](#OracleJob-OracleJob) | optional |  |
| on_exceeds_upper_bound_value | [string](#string) | optional |  |
| on_exceeds_lower_bound | [OracleJob](#OracleJob-OracleJob) | optional |  |
| on_exceeds_lower_bound_value | [string](#string) | optional |  |






<a name="OracleJob-CacheTask"></a>

### CacheTask
Execute a job and store the result in a variable to reference later.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| cache_items | [CacheTask.CacheItem](#OracleJob-CacheTask-CacheItem) | repeated | A list of cached variables to reference in the job with `${VARIABLE_NAME}`. |






<a name="OracleJob-CacheTask-CacheItem"></a>

### CacheTask.CacheItem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| variable_name | [string](#string) | optional | The name of the variable to store in cache to reference later with `${VARIABLE_NAME}`. |
| job | [OracleJob](#OracleJob-OracleJob) | optional | The OracleJob to execute to yield the value to store in cache. |






<a name="OracleJob-ComparisonTask"></a>

### ComparisonTask



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| op | [ComparisonTask.Operation](#OracleJob-ComparisonTask-Operation) | optional |  |
| lhs | [OracleJob](#OracleJob-OracleJob) | optional |  |
| lhs_value | [string](#string) | optional |  |
| rhs | [OracleJob](#OracleJob-OracleJob) | optional |  |
| rhs_value | [string](#string) | optional |  |
| on_true | [OracleJob](#OracleJob-OracleJob) | optional |  |
| on_true_value | [string](#string) | optional |  |
| on_false | [OracleJob](#OracleJob-OracleJob) | optional |  |
| on_false_value | [string](#string) | optional |  |
| on_failure | [OracleJob](#OracleJob-OracleJob) | optional |  |
| on_failure_value | [string](#string) | optional |  |






<a name="OracleJob-ConditionalTask"></a>

### ConditionalTask
This task will run the `attempt` subtasks in an effort to produce a valid numerical result. If
`attempt` fails to produce an acceptable result, `on_failure` subtasks will be run instead.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| attempt | [Task](#OracleJob-Task) | repeated | A list of subtasks to process in an attempt to produce a valid numerical result. |
| on_failure | [Task](#OracleJob-Task) | repeated | A list of subtasks that will be run if `attempt` subtasks are unable to produce an acceptable result. |






<a name="OracleJob-CronParseTask"></a>

### CronParseTask
return a timestamp from a crontab instruction


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| cron_pattern | [string](#string) | optional | the cron pattern to parse |
| clock_offset | [int32](#int32) | optional | the timestamp offset to calculate the next run |
| clock | [CronParseTask.ClockType](#OracleJob-CronParseTask-ClockType) | optional |  |






<a name="OracleJob-DefiKingdomsTask"></a>

### DefiKingdomsTask
Fetch the swap price from DefiKingdoms.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| provider | [string](#string) | optional | The RPC provider to use for the swap. |
| in_token | [DefiKingdomsTask.Token](#OracleJob-DefiKingdomsTask-Token) | optional | The input token of the swap. |
| out_token | [DefiKingdomsTask.Token](#OracleJob-DefiKingdomsTask-Token) | optional | The output token of the swap. |






<a name="OracleJob-DefiKingdomsTask-Token"></a>

### DefiKingdomsTask.Token



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) | optional | The address of the token. |
| decimals | [int32](#int32) | optional | The number of decimal places for a token. |






<a name="OracleJob-DivideTask"></a>

### DivideTask
This task will divide a numerical input by a scalar value or by another
aggregate.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| scalar | [double](#double) | optional | Specifies a basic scalar denominator to divide by. |
| aggregator_pubkey | [string](#string) | optional | Specifies another aggregator resut to divide by. |
| job | [OracleJob](#OracleJob-OracleJob) | optional | A job whose result is computed before dividing our numerical input by that result. |
| big | [string](#string) | optional | A stringified big.js. `Accepts variable expansion syntax.` |






<a name="OracleJob-HistoryFunctionTask"></a>

### HistoryFunctionTask



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| method | [HistoryFunctionTask.Method](#OracleJob-HistoryFunctionTask-Method) | optional |  |
| aggregator_address | [string](#string) | optional |  |
| period | [uint32](#uint32) | optional |  |






<a name="OracleJob-LendingRateTask"></a>

### LendingRateTask
Fetch the lending rates for various Solana protocols


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| protocol | [string](#string) | optional | 01, apricot, francium, jet, larix, mango, port, solend, tulip |
| asset_mint | [string](#string) | optional | A token mint address supported by the chosen protocol |
| field | [LendingRateTask.Field](#OracleJob-LendingRateTask-Field) | optional |  |






<a name="OracleJob-LpExchangeRateTask"></a>

### LpExchangeRateTask
Fetch the current swap price for a given liquidity pool


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| in_token_address | [string](#string) | optional | Used alongside mercurial_pool_address to specify the input token for a swap. |
| out_token_address | [string](#string) | optional | Used alongside mercurial_pool_address to specify the output token for a swap. |
| mercurial_pool_address | [string](#string) | optional | Mercurial finance pool address. A full list can be found here: https://github.com/mercurial-finance/stable-swap-n-pool-js |
| saber_pool_address | [string](#string) | optional | Saber pool address. A full list can be found here: https://github.com/saber-hq/saber-registry-dist |
| orca_pool_token_mint_address | [string](#string) | optional | **Deprecated.** Orca pool address. |
| raydium_pool_address | [string](#string) | optional | The Raydium liquidity pool ammId. A full list can be found here: https://sdk.raydium.io/liquidity/mainnet.json |
| orca_pool_address | [string](#string) | optional | Pool address for an Orca LP pool or whirlpool. A full list of Orca LP pools can be found here: https://www.orca.so/pools |
| port_reserve_address | [string](#string) | optional | The Port reserve pubkey. A full list can be found here: https://api-v1.port.finance/reserves |






<a name="OracleJob-LpTokenPriceTask"></a>

### LpTokenPriceTask
Fetch LP token price info from a number of supported exchanges.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mercurial_pool_address | [string](#string) | optional | Mercurial finance pool address. A full list can be found here: https://github.com/mercurial-finance/stable-swap-n-pool-js |
| saber_pool_address | [string](#string) | optional | Saber pool address. A full list can be found here: https://github.com/saber-hq/saber-registry-dist |
| orca_pool_address | [string](#string) | optional | Orca pool address. A full list can be found here: https://www.orca.so/pools |
| raydium_pool_address | [string](#string) | optional | The Raydium liquidity pool ammId. A full list can be found here: https://sdk.raydium.io/liquidity/mainnet.json |
| price_feed_addresses | [string](#string) | repeated | A list of Switchboard aggregator accounts used to calculate the fair LP price. This ensures the price is based on the previous round to mitigate flash loan price manipulation. |
| price_feed_jobs | [OracleJob](#OracleJob-OracleJob) | repeated |  |
| use_fair_price | [bool](#bool) | optional | If enabled and price_feed_addresses provided, the oracle will calculate the fair LP price based on the liquidity pool reserves. See our blog post for more information: https://switchboardxyz.medium.com/fair-lp-token-oracles-94a457c50239 |






<a name="OracleJob-MangoPerpMarketTask"></a>

### MangoPerpMarketTask
Fetch the current price for a Mango perpetual market


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| perp_market_address | [string](#string) | optional | Mainnet address for a mango perpetual market. A full list can be found here: https://github.com/blockworks-foundation/mango-client-v3/blob/main/src/ids.json |






<a name="OracleJob-MarinadeStateTask"></a>

### MarinadeStateTask







<a name="OracleJob-MaxTask"></a>

### MaxTask
Returns the maximum value of all the results returned by the provided subtasks and subjobs.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tasks | [Task](#OracleJob-Task) | repeated | A list of subtasks to process and produce a list of result values. |
| jobs | [OracleJob](#OracleJob-OracleJob) | repeated | A list of subjobs to process and produce a list of result values. |






<a name="OracleJob-MeanTask"></a>

### MeanTask
Returns the mean of all the results returned by the provided subtasks and subjobs.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tasks | [Task](#OracleJob-Task) | repeated | A list of subtasks to process and produce a list of result values. |
| jobs | [OracleJob](#OracleJob-OracleJob) | repeated | A list of subjobs to process and produce a list of result values. |






<a name="OracleJob-MedianTask"></a>

### MedianTask
Returns the median of all the results returned by the provided subtasks and subjobs. Nested tasks must return a Number.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tasks | [Task](#OracleJob-Task) | repeated | A list of subtasks to process and produce a list of result values. |
| jobs | [OracleJob](#OracleJob-OracleJob) | repeated | A list of subjobs to process and produce a list of result values. |
| min_successful_required | [int32](#int32) | optional |  |






<a name="OracleJob-MinTask"></a>

### MinTask
Returns the minimum value of all the results returned by the provided subtasks and subjobs.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tasks | [Task](#OracleJob-Task) | repeated | A list of subtasks to process and produce a list of result values. |
| jobs | [OracleJob](#OracleJob-OracleJob) | repeated | A list of subjobs to process and produce a list of result values. |






<a name="OracleJob-MultiplyTask"></a>

### MultiplyTask
This task will multiply a numerical input by a scalar value or by another aggregator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| scalar | [double](#double) | optional | Specifies a scalar to multiply by. |
| aggregator_pubkey | [string](#string) | optional | Specifies an aggregator to multiply by. |
| job | [OracleJob](#OracleJob-OracleJob) | optional | A job whose result is computed before multiplying our numerical input by that result. |
| big | [string](#string) | optional | A stringified big.js. `Accepts variable expansion syntax.` |






<a name="OracleJob-OracleJob"></a>

### OracleJob
Represnts a list of tasks to be performed by a switchboard oracle.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tasks | [Task](#OracleJob-Task) | repeated | The chain of tasks to perform for this OracleJob. |






<a name="OracleJob-OracleTask"></a>

### OracleTask
Fetch the current price of a Solana oracle protocol.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| switchboard_address | [string](#string) | optional | Mainnet address of a Switchboard V2 feed. Switchboard is decentralized and allows anyone to build their own feed. A small subset of feeds is available here: https://switchboard.xyz/explorer |
| pyth_address | [string](#string) | optional | Mainnet address for a Pyth feed. A full list can be found here: https://pyth.network/price-feeds/ |
| chainlink_address | [string](#string) | optional | Mainnet address for a Chainlink feed. A full list can be found here: https://docs.chain.link/docs/solana/data-feeds-solana |
| pyth_allowed_confidence_interval | [double](#double) | optional | Value (as a percentage) that the lower bound confidence interval is of the actual value. Confidence intervals that are larger that this treshold are rejected. |






<a name="OracleJob-PancakeswapExchangeRateTask"></a>

### PancakeswapExchangeRateTask
Fetch the swap price from PancakeSwap.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| in_token_address | [string](#string) | optional | The input token address. |
| out_token_address | [string](#string) | optional | The output token address. |
| in_token_amount | [double](#double) | optional | The amount of tokens to swap. |
| slippage | [double](#double) | optional | The allowable slippage in percent for the swap. |
| provider | [string](#string) | optional | The RPC provider to use for the swap. |






<a name="OracleJob-PerpMarketTask"></a>

### PerpMarketTask
Fetch the current price of a perpetual market.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mango_market_address | [string](#string) | optional | Market address for a mango perpetual market. A full list can be found here: https://github.com/blockworks-foundation/mango-client-v3/blob/main/src/ids.json |
| drift_market_address | [string](#string) | optional | Market address for a drift perpetual market. A full list can be found here: https://github.com/drift-labs/protocol-v1/blob/master/sdk/src/constants/markets.ts |
| zeta_market_address | [string](#string) | optional | Market address for a zeta perpetual market. |
| zo_market_address | [string](#string) | optional | Market address for a 01 protocol perpetual market. |






<a name="OracleJob-PowTask"></a>

### PowTask
Take the power of the working value.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| scalar | [double](#double) | optional | Take the working value to the exponent of value. |
| aggregator_pubkey | [string](#string) | optional | Take the working value to the exponent of the aggregators value. |
| big | [string](#string) | optional | A stringified big.js. `Accepts variable expansion syntax.` |






<a name="OracleJob-SerumSwapTask"></a>

### SerumSwapTask
Fetch the latest swap price on Serum&#39;s orderbook


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| serum_pool_address | [string](#string) | optional | The serum pool to fetch swap price for |






<a name="OracleJob-SolanaAccountDataFetchTask"></a>

### SolanaAccountDataFetchTask
Fetch the account data in a stringified buffer format.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pubkey | [string](#string) | optional | The on-chain account to fetch the account data from. |






<a name="OracleJob-SplStakePoolTask"></a>

### SplStakePoolTask
Fetch the JSON representation of an SPL Stake Pool account.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pubkey | [string](#string) | optional | The pubkey of the SPL Stake Pool. |






<a name="OracleJob-SplTokenParseTask"></a>

### SplTokenParseTask
Fetch the JSON representation of an SPL token mint.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token_account_address | [string](#string) | optional | The publicKey of a token account to fetch the mintInfo for. |
| mint_address | [string](#string) | optional | The publicKey of the token mint address. |






<a name="OracleJob-SubtractTask"></a>

### SubtractTask
This task will subtract a numerical input by a scalar value or by another
aggregate.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| scalar | [double](#double) | optional | Specifies a scalar to subtract by. |
| aggregator_pubkey | [string](#string) | optional | Specifies an aggregator to subtract by. |
| job | [OracleJob](#OracleJob-OracleJob) | optional | A job whose result is computed before subtracting our numerical input by that result. |
| big | [string](#string) | optional | A stringified big.js. `Accepts variable expansion syntax.` |






<a name="OracleJob-SushiswapExchangeRateTask"></a>

### SushiswapExchangeRateTask
Fetch the swap price from SushiSwap.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| in_token_address | [string](#string) | optional | The input token address. |
| out_token_address | [string](#string) | optional | The output token address. |
| in_token_amount | [double](#double) | optional | The amount of tokens to swap. |
| slippage | [double](#double) | optional | The allowable slippage in percent for the swap. |
| provider | [string](#string) | optional | The RPC provider to use for the swap. |






<a name="OracleJob-Task"></a>

### Task



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| http_task | [http_task.HttpTask](#http_task-HttpTask) | optional |  |
| json_parse_task | [json_parse_task.JsonParseTask](#json_parse_task-JsonParseTask) | optional |  |
| median_task | [MedianTask](#OracleJob-MedianTask) | optional |  |
| mean_task | [MeanTask](#OracleJob-MeanTask) | optional |  |
| websocket_task | [WebsocketTask.WebsocketTask](#WebsocketTask-WebsocketTask) | optional |  |
| divide_task | [DivideTask](#OracleJob-DivideTask) | optional |  |
| multiply_task | [MultiplyTask](#OracleJob-MultiplyTask) | optional |  |
| lp_token_price_task | [LpTokenPriceTask](#OracleJob-LpTokenPriceTask) | optional |  |
| lp_exchange_rate_task | [LpExchangeRateTask](#OracleJob-LpExchangeRateTask) | optional |  |
| conditional_task | [ConditionalTask](#OracleJob-ConditionalTask) | optional |  |
| value_task | [value_task.ValueTask](#value_task-ValueTask) | optional |  |
| max_task | [MaxTask](#OracleJob-MaxTask) | optional |  |
| regex_extract_task | [regex_extract_task.RegexExtractTask](#regex_extract_task-RegexExtractTask) | optional |  |
| xstep_price_task | [XStepPriceTask](#OracleJob-XStepPriceTask) | optional |  |
| add_task | [AddTask](#OracleJob-AddTask) | optional |  |
| subtract_task | [SubtractTask](#OracleJob-SubtractTask) | optional |  |
| twap_task | [twap_task.TwapTask](#twap_task-TwapTask) | optional |  |
| serum_swap_task | [SerumSwapTask](#OracleJob-SerumSwapTask) | optional |  |
| pow_task | [PowTask](#OracleJob-PowTask) | optional |  |
| lending_rate_task | [LendingRateTask](#OracleJob-LendingRateTask) | optional |  |
| mango_perp_market_task | [MangoPerpMarketTask](#OracleJob-MangoPerpMarketTask) | optional |  |
| jupiter_swap_task | [jupiter_swap_task.JupiterSwapTask](#jupiter_swap_task-JupiterSwapTask) | optional |  |
| perp_market_task | [PerpMarketTask](#OracleJob-PerpMarketTask) | optional |  |
| oracle_task | [OracleTask](#OracleJob-OracleTask) | optional |  |
| anchor_fetch_task | [AnchorFetchTask](#OracleJob-AnchorFetchTask) | optional |  |
| defi_kingdoms_task | [DefiKingdomsTask](#OracleJob-DefiKingdomsTask) | optional |  |
| tps_task | [TpsTask](#OracleJob-TpsTask) | optional |  |
| spl_stake_pool_task | [SplStakePoolTask](#OracleJob-SplStakePoolTask) | optional |  |
| spl_token_parse_task | [SplTokenParseTask](#OracleJob-SplTokenParseTask) | optional |  |
| uniswap_exchange_rate_task | [UniswapExchangeRateTask](#OracleJob-UniswapExchangeRateTask) | optional |  |
| sushiswap_exchange_rate_task | [SushiswapExchangeRateTask](#OracleJob-SushiswapExchangeRateTask) | optional |  |
| pancakeswap_exchange_rate_task | [PancakeswapExchangeRateTask](#OracleJob-PancakeswapExchangeRateTask) | optional |  |
| cache_task | [CacheTask](#OracleJob-CacheTask) | optional |  |
| sysclock_offset_task | [sysclock_offset_task.SysclockOffsetTask](#sysclock_offset_task-SysclockOffsetTask) | optional |  |
| marinade_state_task | [MarinadeStateTask](#OracleJob-MarinadeStateTask) | optional |  |
| solana_account_data_fetch_task | [SolanaAccountDataFetchTask](#OracleJob-SolanaAccountDataFetchTask) | optional |  |
| buffer_layout_parse_task | [buffer_layout_parse_task.BufferLayoutParseTask](#buffer_layout_parse_task-BufferLayoutParseTask) | optional |  |
| cron_parse_task | [cron_parse_task.CronParseTask](#cron_parse_task-CronParseTask) | optional |  |
| min_task | [MinTask](#OracleJob-MinTask) | optional |  |
| history_function_task | [HistoryFunctionTask](#OracleJob-HistoryFunctionTask) | optional |  |
| vwap_task | [VwapTask](#OracleJob-VwapTask) | optional |  |
| ewma_task | [ewma_task.EwmaTask](#ewma_task-EwmaTask) | optional |  |
| comparison_task | [ComparisonTask](#OracleJob-ComparisonTask) | optional |  |
| round_task | [round_task.RoundTask](#round_task-RoundTask) | optional |  |
| bound_task | [BoundTask](#OracleJob-BoundTask) | optional |  |






<a name="OracleJob-TpsTask"></a>

### TpsTask
Fetch the current transactions per second.






<a name="OracleJob-UniswapExchangeRateTask"></a>

### UniswapExchangeRateTask
Fetch the swap price from UniSwap.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| in_token_address | [string](#string) | optional | The input token address. |
| out_token_address | [string](#string) | optional | The output token address. |
| in_token_amount | [double](#double) | optional | The amount of tokens to swap. |
| slippage | [double](#double) | optional | The allowable slippage in percent for the swap. |
| provider | [string](#string) | optional | The RPC provider to use for the swap. |






<a name="OracleJob-VwapTask"></a>

### VwapTask



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| price_aggregator_address | [string](#string) | optional |  |
| volume_aggregator_address | [string](#string) | optional |  |
| period | [uint32](#uint32) | optional |  |






<a name="OracleJob-XStepPriceTask"></a>

### XStepPriceTask



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| step_job | [MedianTask](#OracleJob-MedianTask) | optional | median task containing the job definitions to fetch the STEP/USD price |
| step_aggregator_pubkey | [string](#string) | optional | existing aggregator pubkey for STEP/USD |





 


<a name="OracleJob-ComparisonTask-Operation"></a>

### ComparisonTask.Operation


| Name | Number | Description |
| ---- | ------ | ----------- |
| OPERATION_EQ | 0 |  |
| OPERATION_GT | 1 |  |
| OPERATION_LT | 2 |  |



<a name="OracleJob-CronParseTask-ClockType"></a>

### CronParseTask.ClockType
which type of clock to use

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORACLE | 0 |  |
| SYSCLOCK | 1 |  |



<a name="OracleJob-HistoryFunctionTask-Method"></a>

### HistoryFunctionTask.Method


| Name | Number | Description |
| ---- | ------ | ----------- |
| METHOD_MIN | 0 |  |
| METHOD_MAX | 1 |  |



<a name="OracleJob-LendingRateTask-Field"></a>

### LendingRateTask.Field


| Name | Number | Description |
| ---- | ------ | ----------- |
| FIELD_DEPOSIT_RATE | 0 | deposit lending rate |
| FIELD_BORROW_RATE | 1 | borrow lending rate |


 

 

 



<a name="WebsocketTask-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## WebsocketTask.proto



<a name="WebsocketTask-WebsocketTask"></a>

### WebsocketTask
Opens and maintains a websocket for light speed data retrieval.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| url | [string](#string) | optional | The websocket url. |
| subscription | [string](#string) | optional | The websocket message to notify of a new subscription. |
| max_data_age_seconds | [int32](#int32) | optional | Minimum amount of time required between when the horses are taking out. |
| filter | [string](#string) | optional | Incoming message JSONPath filter. Example: &#34;$[?(@.channel == &#39;ticker&#39; &amp;&amp; @.market == &#39;BTC/USD&#39;)]&#34; |





 

 

 

 



<a name="buffer_layout_parse_task-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## buffer_layout_parse_task.proto



<a name="buffer_layout_parse_task-BufferLayoutParseTask"></a>

### BufferLayoutParseTask
Return the deserialized value from a stringified buffer.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| offset | [uint32](#uint32) | optional | The buffer offset to start deserializing from. |
| endian | [BufferLayoutParseTask.Endian](#buffer_layout_parse_task-BufferLayoutParseTask-Endian) | optional | The endianness of the stored value. |
| type | [BufferLayoutParseTask.BufferParseType](#buffer_layout_parse_task-BufferLayoutParseTask-BufferParseType) | optional | The type of value to deserialize. |





 


<a name="buffer_layout_parse_task-BufferLayoutParseTask-BufferParseType"></a>

### BufferLayoutParseTask.BufferParseType


| Name | Number | Description |
| ---- | ------ | ----------- |
| pubkey | 1 | A public key. |
| bool | 2 | A boolean. |
| u8 | 3 | An 8-bit unsigned value. |
| i8 | 4 | An 8-bit signed value. |
| u16 | 5 | A 16-bit unsigned value. |
| i16 | 6 | A 16-bit signed value. |
| u32 | 7 | A 32-bit unsigned value. |
| i32 | 8 | A 32-bit signed value. |
| f32 | 9 | A 32-bit IEEE floating point value. |
| u64 | 10 | A 64-bit unsigned value. |
| i64 | 11 | A 64-bit signed value. |
| f64 | 12 | A 64-bit IEEE floating point value. |
| u128 | 13 | A 128-bit unsigned value. |
| i128 | 14 | A 128-bit signed value. |



<a name="buffer_layout_parse_task-BufferLayoutParseTask-Endian"></a>

### BufferLayoutParseTask.Endian


| Name | Number | Description |
| ---- | ------ | ----------- |
| LITTLE_ENDIAN | 0 |  |
| BIG_ENDIAN | 1 |  |


 

 

 



<a name="cron_parse_task-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cron_parse_task.proto



<a name="cron_parse_task-CronParseTask"></a>

### CronParseTask
return a timestamp from a crontab instruction


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| cron_pattern | [string](#string) | optional | the cron pattern to parse |
| clock_offset | [int32](#int32) | optional | the timestamp offset to calculate the next run |
| clock | [CronParseTask.ClockType](#cron_parse_task-CronParseTask-ClockType) | optional |  |





 


<a name="cron_parse_task-CronParseTask-ClockType"></a>

### CronParseTask.ClockType
which type of clock to use

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORACLE | 0 |  |
| SYSCLOCK | 1 |  |


 

 

 



<a name="ewma_task-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ewma_task.proto



<a name="ewma_task-EwmaTask"></a>

### EwmaTask



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| aggregator_address | [string](#string) | optional |  |
| period | [int32](#int32) | optional |  |
| lambda | [double](#double) | optional |  |





 

 

 

 



<a name="http_task-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## http_task.proto



<a name="http_task-HttpTask"></a>

### HttpTask
The adapter will report the text body of a successful HTTP request to the specified url, 
or return an error if the response status code is greater than or equal to 400.
@return string representation of it&#39;s output.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| url | [string](#string) | optional | A string containing the URL to direct this HTTP request to. |
| method | [HttpTask.Method](#http_task-HttpTask-Method) | optional | The type of HTTP request to make. |
| headers | [HttpTask.Header](#http_task-HttpTask-Header) | repeated | A list of headers to add to this HttpTask. |
| body | [string](#string) | optional | A stringified body (if any) to add to this HttpTask. |






<a name="http_task-HttpTask-Header"></a>

### HttpTask.Header
An object that represents a header to add to an HTTP request.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | optional |  |
| value | [string](#string) | optional |  |





 


<a name="http_task-HttpTask-Method"></a>

### HttpTask.Method
An enumeration representing the types of HTTP requests available to make.

| Name | Number | Description |
| ---- | ------ | ----------- |
| METHOD_UNKOWN | 0 | Unset HTTP method will default to METHOD_GET |
| METHOD_GET | 1 | Perform an HTTP &#39;GET&#39; request. |
| METHOD_POST | 2 | Perform an HTTP &#39;POST&#39; request. |


 

 

 



<a name="json_parse_task-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## json_parse_task.proto



<a name="json_parse_task-JsonParseTask"></a>

### JsonParseTask
The adapter walks the path specified and returns the value found at that result. If returning
JSON data from the HttpGet or HttpPost adapters, you must use this adapter to parse the 
response.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [string](#string) | optional | JSONPath formatted path to the element. https://t.ly/uLtw https://www.npmjs.com/package/jsonpath-plus |
| aggregation_method | [JsonParseTask.AggregationMethod](#json_parse_task-JsonParseTask-AggregationMethod) | optional | The technique that will be used to aggregate the results if walking the specified path returns multiple numerical results. |





 


<a name="json_parse_task-JsonParseTask-AggregationMethod"></a>

### JsonParseTask.AggregationMethod
The methods of combining a list of numerical results.

| Name | Number | Description |
| ---- | ------ | ----------- |
| NONE | 0 |  |
| MIN | 1 | Grab the minimum value of the results. |
| MAX | 2 | Grab the maximum value of the results. |
| SUM | 3 | Sum up all of the results. |
| MEAN | 4 | Average all of the results. |
| MEDIAN | 5 | Grab the median of the results. |


 

 

 



<a name="jupiter_swap_task-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## jupiter_swap_task.proto



<a name="jupiter_swap_task-JupiterSwapTask"></a>

### JupiterSwapTask
Fetch the simulated price for a swap on JupiterSwap.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| in_token_address | [string](#string) | optional | The input token address. |
| out_token_address | [string](#string) | optional | The output token address. |
| base_amount | [double](#double) | optional | The amount of tokens to swap. |
| allow_list | [JupiterSwapTask.FilterList](#jupiter_swap_task-JupiterSwapTask-FilterList) | optional |  |
| deny_list | [JupiterSwapTask.FilterList](#jupiter_swap_task-JupiterSwapTask-FilterList) | optional |  |






<a name="jupiter_swap_task-JupiterSwapTask-FilterList"></a>

### JupiterSwapTask.FilterList
A list of Jupiter AMM labels to allow or deny (e.g. &#39;Raydium&#39;, &#39;Orca&#39;)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| labels | [string](#string) | repeated |  |





 

 

 

 



<a name="regex_extract_task-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## regex_extract_task.proto



<a name="regex_extract_task-RegexExtractTask"></a>

### RegexExtractTask
Find a pattern within a string of a previous task and extract a group number.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pattern | [string](#string) | optional | Regex pattern to find. |
| group_number | [int32](#int32) | optional | Group number to extract. |





 

 

 

 



<a name="round_task-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## round_task.proto



<a name="round_task-RoundTask"></a>

### RoundTask



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| method | [RoundTask.Method](#round_task-RoundTask-Method) | optional |  |
| decimals | [int32](#int32) | optional |  |





 


<a name="round_task-RoundTask-Method"></a>

### RoundTask.Method


| Name | Number | Description |
| ---- | ------ | ----------- |
| METHOD_ROUND_UP | 0 |  |
| METHOD_ROUND_DOWN | 1 |  |


 

 

 



<a name="sysclock_offset_task-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## sysclock_offset_task.proto



<a name="sysclock_offset_task-SysclockOffsetTask"></a>

### SysclockOffsetTask
Return the difference between an oracle&#39;s clock and the current timestamp at `SYSVAR_CLOCK_PUBKEY`.





 

 

 

 



<a name="template-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## template.proto


 

 

 

 



<a name="twap_task-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## twap_task.proto



<a name="twap_task-TwapTask"></a>

### TwapTask
Takes a twap over a set period for a certain aggregator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| aggregator_pubkey | [string](#string) | optional | The target aggregator for the TWAP. |
| period | [int32](#int32) | optional | Period, in seconds, the twap should account for |
| weight_by_propagation_time | [bool](#bool) | optional | Weight samples by their propagation time |
| min_samples | [uint32](#uint32) | optional | Minimum number of samples in the history to calculate a valid result |
| ending_unix_timestamp | [int32](#int32) | optional | Ending unix timestamp to collect values up to |
| ending_unix_timestamp_task | [cron_parse_task.CronParseTask](#cron_parse_task-CronParseTask) | optional | Execute the task to get the ending unix timestamp |





 

 

 

 



<a name="value_task-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## value_task.proto



<a name="value_task-ValueTask"></a>

### ValueTask
Returns a specified value.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) | optional | The value that will be returned from this task. |
| aggregator_pubkey | [string](#string) | optional | Specifies an aggregatorr to pull the value of. |
| big | [string](#string) | optional | A stringified big.js. `Accepts variable expansion syntax.` |





 

 

 

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

