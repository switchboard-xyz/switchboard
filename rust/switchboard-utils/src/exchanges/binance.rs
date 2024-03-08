use crate::*;

use futures_util::TryFutureExt;
use rust_decimal::Decimal;
use serde::Deserialize;

pub type GenericError = Box<dyn std::error::Error + Send + Sync>;

#[allow(non_snake_case)]
#[derive(Deserialize, Default, Clone, Debug)]
pub struct BinanceTicker {
    pub symbol: String,
    pub price: Decimal,
}

pub struct BinanceApi {}

impl BinanceApi {
    pub async fn fetch_spot_prices(
        symbol: Option<String>,
    ) -> Result<Vec<BinanceTicker>, GenericError> {
        let mut binance_spot: Vec<BinanceTicker> =
            reqwest::get("https://www.binance.com/api/v3/ticker/price")
                .and_then(|r| r.json())
                .await?;
        if let Some(symbol) = symbol {
            binance_spot = binance_spot
                .into_iter()
                .filter(|x| x.symbol == symbol)
                .collect()
        }
        Ok(binance_spot)
    }
}
