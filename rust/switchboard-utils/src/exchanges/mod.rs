// use crate::*;

// use rust_decimal::Decimal;

pub mod bitfinex;
pub use bitfinex::BitfinexApi;

pub mod coinbase;
pub use coinbase::CoinbaseApi;

pub mod huobi;
pub use huobi::HuobiApi;

pub mod kraken;
pub use kraken::KrakenApi;

// Idk if this is worth it, each exchange returns their own struct type
// pub trait ExchangeApi {
//     fn fetch_ticker(ticker: &str) -> Result<Decimal, SbError>;
// }
