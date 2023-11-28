use crate::*;

use rust_decimal::Decimal;
use serde::Deserialize;
use std::collections::HashMap;

#[allow(non_snake_case)]
#[derive(Deserialize, Default, Clone, Debug)]
pub struct BinanceTicker {
    pub symbol: String,
    pub priceChange: Decimal,
    pub priceChangePercent: Decimal,
    pub weightedAvgPrice: Decimal,
    pub prevClosePrice: Decimal,
    pub lastPrice: Decimal,
    pub lastQty: Decimal,
    pub bidPrice: Decimal,
    pub bidQty: Decimal,
    pub askPrice: Decimal,
    pub askQty: Decimal,
    pub openPrice: Decimal,
    pub highPrice: Decimal,
    pub lowPrice: Decimal,
    pub volume: Decimal,
    pub quoteVolume: Decimal,
    pub openTime: i64,
    pub closeTime: i64,
}

pub struct BinanceApi {}

impl BinanceApi {

    pub async fn fetch_spot_prices(symbol: Option<String>) -> Result<Vec<BinanceSpot>, Error> {
        let mut binance_spot: Vec<BinanceSpot> = reqwest::get("https://api.binance.com/api/v3/ticker/price")
            .and_then(|r| r.json())
            .await?;
        if let Some(symbol) = symbol {
            binance_spot = binance_spot.into_iter().filter(|&x| x.symbol == symbol).collect()
        }
        Ok(binance_spot)
    }
}

