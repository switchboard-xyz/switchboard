const tasks = [
  'Task',
  'HttpTask',
  'JsonParseTask',
  'MedianTask',
  'MeanTask',
  'WebsocketTask',
  'DivideTask',
  'MultiplyTask',
  'LpTokenPriceTask',
  'LpExchangeRateTask',
  'ConditionalTask',
  'ValueTask',
  'MaxTask',
  'RegexExtractTask',
  'XStepPriceTask',
  'AddTask',
  'SubtractTask',
  'TwapTask',
  'SerumSwapTask',
  'PowTask',
  'LendingRateTask',
  'MangoPerpMarketTask',
  'JupiterSwapTask',
  'PerpMarketTask',
  'OracleTask',
  'AnchorFetchTask',
  'DefiKingdomsTask',
  'TpsTask',
  'SplStakePoolTask',
  'SplTokenParseTask',
  'UniswapExchangeRateTask',
  'SushiswapExchangeRateTask',
  'PancakeswapExchangeRateTask',
  'CacheTask',
  'SysclockOffsetTask',
  'MarinadeStateTask',
  'SolanaAccountDataFetchTask',
  'BufferLayoutParseTask',
  'CronParseTask',
  'MinTask',
  'HistoryFunctionTask',
  'VwapTask',
  'EwmaTask',
  'ComparisonTask',
  'RoundTask',
  'BoundTask',
];

async function main() {
  const output = tasks
    .map(
      t =>
        `export import I${t} = OracleJob.I${t};\nexport import ${t} = OracleJob.${t};`
    )
    .join('\n\n');

  console.log(output);
}

main()
  .then()
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
