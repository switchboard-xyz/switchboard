import protobuf from "protobufjs/minimal.js";
protobuf.util.toJSONOptions = {
  longs: String,
  enums: String,
  bytes: String,
  json: true,
};

// Re-export the most common task types so they are easier to work with
// import { IOracleJob, OracleJob } from "./protos/index.js";
import * as protos from "./protos/index.js";

export import OracleJob = protos.OracleJob;

export import ITask = OracleJob.ITask;
export import Task = OracleJob.Task;

export import IHttpTask = OracleJob.IHttpTask;
export import HttpTask = OracleJob.HttpTask;

export import IJsonParseTask = OracleJob.IJsonParseTask;
export import JsonParseTask = OracleJob.JsonParseTask;

export import IMedianTask = OracleJob.IMedianTask;
export import MedianTask = OracleJob.MedianTask;

export import IMeanTask = OracleJob.IMeanTask;
export import MeanTask = OracleJob.MeanTask;

export import IWebsocketTask = OracleJob.IWebsocketTask;
export import WebsocketTask = OracleJob.WebsocketTask;

export import IDivideTask = OracleJob.IDivideTask;
export import DivideTask = OracleJob.DivideTask;

export import IMultiplyTask = OracleJob.IMultiplyTask;
export import MultiplyTask = OracleJob.MultiplyTask;

export import ILpTokenPriceTask = OracleJob.ILpTokenPriceTask;
export import LpTokenPriceTask = OracleJob.LpTokenPriceTask;

export import ILpExchangeRateTask = OracleJob.ILpExchangeRateTask;
export import LpExchangeRateTask = OracleJob.LpExchangeRateTask;

export import IConditionalTask = OracleJob.IConditionalTask;
export import ConditionalTask = OracleJob.ConditionalTask;

export import IValueTask = OracleJob.IValueTask;
export import ValueTask = OracleJob.ValueTask;

export import IMaxTask = OracleJob.IMaxTask;
export import MaxTask = OracleJob.MaxTask;

export import IRegexExtractTask = OracleJob.IRegexExtractTask;
export import RegexExtractTask = OracleJob.RegexExtractTask;

export import IXStepPriceTask = OracleJob.IXStepPriceTask;
export import XStepPriceTask = OracleJob.XStepPriceTask;

export import IAddTask = OracleJob.IAddTask;
export import AddTask = OracleJob.AddTask;

export import ISubtractTask = OracleJob.ISubtractTask;
export import SubtractTask = OracleJob.SubtractTask;

export import ITwapTask = OracleJob.ITwapTask;
export import TwapTask = OracleJob.TwapTask;

export import ISerumSwapTask = OracleJob.ISerumSwapTask;
export import SerumSwapTask = OracleJob.SerumSwapTask;

export import IPowTask = OracleJob.IPowTask;
export import PowTask = OracleJob.PowTask;

export import ILendingRateTask = OracleJob.ILendingRateTask;
export import LendingRateTask = OracleJob.LendingRateTask;

export import IMangoPerpMarketTask = OracleJob.IMangoPerpMarketTask;
export import MangoPerpMarketTask = OracleJob.MangoPerpMarketTask;

export import IJupiterSwapTask = OracleJob.IJupiterSwapTask;
export import JupiterSwapTask = OracleJob.JupiterSwapTask;

export import IPerpMarketTask = OracleJob.IPerpMarketTask;
export import PerpMarketTask = OracleJob.PerpMarketTask;

export import IOracleTask = OracleJob.IOracleTask;
export import OracleTask = OracleJob.OracleTask;

export import IAnchorFetchTask = OracleJob.IAnchorFetchTask;
export import AnchorFetchTask = OracleJob.AnchorFetchTask;

export import IDefiKingdomsTask = OracleJob.IDefiKingdomsTask;
export import DefiKingdomsTask = OracleJob.DefiKingdomsTask;

export import ITpsTask = OracleJob.ITpsTask;
export import TpsTask = OracleJob.TpsTask;

export import ISplStakePoolTask = OracleJob.ISplStakePoolTask;
export import SplStakePoolTask = OracleJob.SplStakePoolTask;

export import ISplTokenParseTask = OracleJob.ISplTokenParseTask;
export import SplTokenParseTask = OracleJob.SplTokenParseTask;

export import IUniswapExchangeRateTask = OracleJob.IUniswapExchangeRateTask;
export import UniswapExchangeRateTask = OracleJob.UniswapExchangeRateTask;

export import ISushiswapExchangeRateTask = OracleJob.ISushiswapExchangeRateTask;
export import SushiswapExchangeRateTask = OracleJob.SushiswapExchangeRateTask;

export import IPancakeswapExchangeRateTask = OracleJob.IPancakeswapExchangeRateTask;
export import PancakeswapExchangeRateTask = OracleJob.PancakeswapExchangeRateTask;

export import ICacheTask = OracleJob.ICacheTask;
export import CacheTask = OracleJob.CacheTask;

export import ISysclockOffsetTask = OracleJob.ISysclockOffsetTask;
export import SysclockOffsetTask = OracleJob.SysclockOffsetTask;

export import IMarinadeStateTask = OracleJob.IMarinadeStateTask;
export import MarinadeStateTask = OracleJob.MarinadeStateTask;

export import ISolanaAccountDataFetchTask = OracleJob.ISolanaAccountDataFetchTask;
export import SolanaAccountDataFetchTask = OracleJob.SolanaAccountDataFetchTask;

export import IBufferLayoutParseTask = OracleJob.IBufferLayoutParseTask;
export import BufferLayoutParseTask = OracleJob.BufferLayoutParseTask;

export import ICronParseTask = OracleJob.ICronParseTask;
export import CronParseTask = OracleJob.CronParseTask;

export import IMinTask = OracleJob.IMinTask;
export import MinTask = OracleJob.MinTask;

export import IHistoryFunctionTask = OracleJob.IHistoryFunctionTask;
export import HistoryFunctionTask = OracleJob.HistoryFunctionTask;

export import IVwapTask = OracleJob.IVwapTask;
export import VwapTask = OracleJob.VwapTask;

export import IEwmaTask = OracleJob.IEwmaTask;
export import EwmaTask = OracleJob.EwmaTask;

export import IComparisonTask = OracleJob.IComparisonTask;
export import ComparisonTask = OracleJob.ComparisonTask;

export import IRoundTask = OracleJob.IRoundTask;
export import RoundTask = OracleJob.RoundTask;

export import IBoundTask = OracleJob.IBoundTask;
export import BoundTask = OracleJob.BoundTask;

export * from "./OracleJob.js";
export * from "./protos/index.js";
