use crate::*;

use chrono::{DateTime, Utc};
use futures_util::TryFutureExt;
use reqwest::{header, Client};
use rust_decimal::Decimal;
use serde::Deserialize;

#[derive(Debug, Clone, Deserialize)]
pub struct CoinbaseTickerInfo {
    pub ask: Decimal,
    pub bid: Decimal,
    pub volume: Decimal,
    pub trade_id: u64,
    pub price: Decimal,
    pub size: Decimal,
    pub time: DateTime<Utc>,
}

pub struct CoinbaseApi {}

impl CoinbaseApi {
    // https://api.exchange.coinbase.com/products/BTC-USD/ticker
    fn get_ticker_url(ticker: &str, url: Option<&str>) -> String {
        format!(
            "{}/products/{}/ticker",
            url.unwrap_or("https://api.exchange.coinbase.com"),
            ticker
        )
    }

    pub async fn fetch_ticker(
        ticker: &str,
        url: Option<&str>,
    ) -> Result<CoinbaseTickerInfo, SbError> {
        let client = Client::new();
        let ticker_url = CoinbaseApi::get_ticker_url(ticker, url);

        let response: CoinbaseTickerInfo = client
            .get(&ticker_url)
            .header(header::USER_AGENT, "null")
            .send()
            .and_then(|r| r.json())
            .await
            .map_err(handle_reqwest_err)?;

        Ok(response)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    const MOCK_COINBASE_RESPONSE: &str = r#"{"ask":"27582.21","bid":"27581.23","volume":"9812.9333157","trade_id":566366195,"price":"27581.23","size":"0.40855232","time":"2023-10-04T20:04:04.969312Z"}"#;

    #[tokio::test]
    async fn test_coinbase_api() {
        // Request a new server from the pool
        let mut server = mockito::Server::new();
        let server_url = server.url();

        // Create a mock
        let mock = server
            .mock("GET", "/products/BTC-USD/ticker")
            .with_status(201)
            .with_header("content-type", "application/json")
            .with_body(MOCK_COINBASE_RESPONSE)
            .create();

        let ticker = CoinbaseApi::fetch_ticker("BTC-USD", Some(server_url.as_str()))
            .await
            .unwrap();

        // verify the mock was called
        mock.assert();

        assert_eq!(ticker.ask, Decimal::from_str("27582.21").unwrap());
    }
}
