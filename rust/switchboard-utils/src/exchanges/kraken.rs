use crate::*;

use rust_decimal::Decimal;
use serde::Deserialize;
use std::collections::HashMap;

#[derive(Debug, Deserialize)]
pub struct KrakenTickerResponse {
    pub result: HashMap<String, KrakenTickerInfo>,
}

// https://api.kraken.com/0/public/Ticker
// https://docs.kraken.com/rest/#tag/Market-Data/operation/getTickerInformation
#[derive(Debug, Clone, Deserialize)]
pub struct KrakenTickerInfo {
    #[serde(rename = "a")]
    pub ask: Vec<Decimal>,
    #[serde(rename = "b")]
    pub bid: Vec<Decimal>,
    #[serde(rename = "c")]
    pub close: Vec<Decimal>,
    #[serde(rename = "v")]
    pub volume: Vec<Decimal>,
    #[serde(rename = "p")]
    pub vwap: Vec<Decimal>,
    #[serde(rename = "t")]
    pub trade_count: Vec<i64>,
    #[serde(rename = "l")]
    pub low: Vec<Decimal>,
    #[serde(rename = "h")]
    pub high: Vec<Decimal>,
    #[serde(rename = "o")]
    pub open: Decimal,
}

impl KrakenTickerInfo {
    pub fn price(&self) -> Decimal {
        (self.ask[0] + self.bid[0]) / Decimal::from(2)
    }
}

pub struct KrakenApi {}

impl KrakenApi {
    // https://api.kraken.com/0/public/Ticker?pair=BTCUSD
    fn get_ticker_url(ticker: &str, url: Option<&str>) -> String {
        format!(
            "{}/0/public/Ticker?pair={}",
            url.unwrap_or("https://api.kraken.com"),
            ticker
        )
    }

    pub async fn fetch_ticker(
        ticker: &str,
        url: Option<&str>,
    ) -> Result<KrakenTickerInfo, SbError> {
        let ticker_url = KrakenApi::get_ticker_url(ticker, url);

        let response: KrakenTickerResponse = reqwest::get(&ticker_url)
            .await
            .map_err(handle_reqwest_err)?
            .json()
            .await
            .map_err(handle_reqwest_err)?;

        let (_symbol, ticker) = response.result.iter().next().unwrap();

        Ok(ticker.clone())
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    const MOCK_KRAKEN_RESPONSE: &str = r#"{"error":[],"result":{"XXBTZUSD":{"a":["27712.10000","8","8.000"],"b":["27712.00000","2","2.000"],"c":["27712.10000","0.01686188"],"v":["1414.57420708","1686.74719574"],"p":["27497.35370","27478.05822"],"t":[20034,23808],"l":["27229.80000","27229.80000"],"h":["27826.30000","27826.30000"],"o":"27428.20000"}}}"#;

    #[tokio::test]
    async fn test_kraken_api() {
        // Request a new server from the pool
        let mut server = mockito::Server::new();
        let server_url = server.url();

        // Create a mock
        let mock = server
            .mock("GET", "/0/public/Ticker?pair=BTCUSD")
            .with_status(201)
            .with_header("content-type", "application/json")
            .with_body(MOCK_KRAKEN_RESPONSE)
            .create();

        let ticker = KrakenApi::fetch_ticker("BTCUSD", Some(server_url.as_str()))
            .await
            .unwrap();

        // verify the mock was called
        mock.assert();

        assert_eq!(ticker.ask[0], Decimal::from_str("27712.10000").unwrap());
    }
}
