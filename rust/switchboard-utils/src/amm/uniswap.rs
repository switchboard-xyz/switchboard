// use crate::*;
// use std::sync::Arc;

// use ethers::{
//     prelude::abigen,
//     providers::{Http, Provider},
//     types::{Address, U256},
// };
// use tokio::sync::RwLock;

// abigen!(
//     IUniswapV2Pair,
//     "[
//         function name() external pure returns (string memory)
//         function symbol() external pure returns (string memory)
//         function decimals() external pure returns (uint8)
//         function totalSupply() external view returns (uint)
//         function balanceOf(address owner) external view returns (uint)
//         function allowance(address owner, address spender) external view returns (uint)

//         function approve(address spender, uint value) external returns (bool)
//         function transfer(address to, uint value) external returns (bool)
//         function transferFrom(address from, address to, uint value) external returns (bool)

//         function DOMAIN_SEPARATOR() external view returns (bytes32)
//         function PERMIT_TYPEHASH() external pure returns (bytes32)
//         function nonces(address owner) external view returns (uint)

//         function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external

//         function MINIMUM_LIQUIDITY() external pure returns (uint)
//         function factory() external view returns (address)
//         function token0() external view returns (address)
//         function token1() external view returns (address)
//         function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)
//         function price0CumulativeLast() external view returns (uint)
//         function price1CumulativeLast() external view returns (uint)
//         function kLast() external view returns (uint)

//         function mint(address to) external returns (uint liquidity)
//         function burn(address to) external returns (uint amount0, uint amount1)
//         function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external
//         function skim(address to) external
//         function sync() external

//         function initialize(address, address) external
//     ]"
// );

// // TODO: ensure V01 and V02 routers have the exact same interfaces we need
// // ETH Mainnet 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D
// abigen!(
//     UniswapV2Router,
//     "[
//         function factory() external pure returns (address)
//         function WETH() external pure returns (address)

//         function quote(uint amountA, uint reserveA, uint reserveB) public pure override returns (uint amountB)

//         function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) public pure override returns (uint amountOut)
//         function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) public pure override returns (uint amountIn)
//         function getAmountsOut(uint amountIn, address[] memory path) public view override returns (uint[] memory amounts)
//         function getAmountsIn(uint amountOut, address[] memory path) public view override returns (uint[] memory amounts)
//     ]"
// );

// // ETH Mainnet 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f
// abigen!(
//     UniswapV2Factory,
//     "[
//         function getPair(address tokenA, address tokenB) external view returns (address pair)
//         function allPairs(uint) external view returns (address pair)
//         function allPairsLength() external view returns (uint)
//         function feeTo() external view returns (address)
//         function feeToSetter() external view returns (address)
//     ]"
// );

// type EvmClient = Arc<Provider<Http>>;

// pub struct UniswapV2Client {
//     pub address: Address,
//     pub provider: EvmClient, // TODO: genericize this so its JsonRpcProvider
// }

// impl UniswapV2Client {
//     pub fn from_provider(provider: Provider<Http>, address: &str) -> Self {
//         Self {
//             address: Address::from_str(address).unwrap(),
//             provider: Arc::new(provider),
//         }
//     }

//     pub fn new(rpc_url: &str, address: &str) -> Self {
//         let provider = Provider::<Http>::try_from(rpc_url.to_string()).unwrap();
//         UniswapV2Client::from_provider(provider, address)
//     }

//     fn get_factory(&self) -> UniswapV2Factory<EvmClient> {
//         UniswapV2Factory::new(self.address, Arc::new(self.provider.clone()))
//     }

//     // pub async fn fetch_pool_fair_price(&self) -> Result<u64, SbError> {
//     //     Err(SbError::Message("Not implemented yet"))
//     // }

//     pub async fn fetch_swap_price(
//         &self,
//         token_in: &str,
//         token_out: &str,
//         amount_in: U256,
//     ) -> Result<u64, SbError> {
//         let uniswap_factory = self.get_factory();

//         Err(SbError::Message("Not implemented yet"))
//     }
// }
