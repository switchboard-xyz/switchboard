use crate::*;

use rust_decimal::Decimal;
use serde::Deserialize;

#[derive(Debug, Clone, Deserialize)]
pub struct BitfinexTickerInfo {
    pub bid: Decimal,
    pub bid_size: Decimal,
    pub ask: Decimal,
    pub ask_size: Decimal,
    pub daily_change: Decimal,
    pub daily_change_relative: Decimal,
    pub last_price: Decimal,
    pub volume: Decimal,
    pub high: Decimal,
    pub low: Decimal,
}

pub struct BitfinexApi {}

impl BitfinexApi {
    // https://api-pub.bitfinex.com/v2/ticker/tBTCUSD
    fn get_ticker_url(ticker: &str, url: Option<&str>) -> String {
        format!(
            "{}/v2/ticker/{}",
            url.unwrap_or("https://api-pub.bitfinex.com"),
            ticker
        )
    }

    pub async fn fetch_ticker(
        ticker: &str,
        url: Option<&str>,
    ) -> Result<BitfinexTickerInfo, SbError> {
        let ticker_url = BitfinexApi::get_ticker_url(ticker, url);

        let response: Vec<f64> = reqwest::get(&ticker_url)
            .await
            .map_err(handle_reqwest_err)?
            .json()
            .await
            .map_err(handle_reqwest_err)?;

        if response.len() < 10 {
            return Err(SbError::Message("Bitfinex response too short"));
        }

        Ok(BitfinexTickerInfo {
            bid: Decimal::from_f64(response[0]).unwrap(),
            bid_size: Decimal::from_f64(response[1]).unwrap(),
            ask: Decimal::from_f64(response[2]).unwrap(),
            ask_size: Decimal::from_f64(response[3]).unwrap(),
            daily_change: Decimal::from_f64(response[4]).unwrap(),
            daily_change_relative: Decimal::from_f64(response[5]).unwrap(),
            last_price: Decimal::from_f64(response[6]).unwrap(),
            volume: Decimal::from_f64(response[7]).unwrap(),
            high: Decimal::from_f64(response[8]).unwrap(),
            low: Decimal::from_f64(response[9]).unwrap(),
        })
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    const MOCK_BITFINEX_RESPONSE: &str =
        r#"[27686,18.95873976,27687,13.79181632,310,0.01132503,27683,800.37680489,27846,27211]"#;

    #[tokio::test]
    async fn test_bitfinex_api() {
        // Request a new server from the pool
        let mut server = mockito::Server::new();
        let server_url = server.url();

        // Create a mock
        let mock = server
            .mock("GET", "/v2/ticker/tBTCUSD")
            .with_status(201)
            .with_header("content-type", "application/json")
            .with_body(MOCK_BITFINEX_RESPONSE)
            .create();

        let ticker = BitfinexApi::fetch_ticker("tBTCUSD", Some(server_url.as_str()))
            .await
            .unwrap();

        // verify the mock was called
        mock.assert();

        assert_eq!(ticker.bid, Decimal::from_str("27686").unwrap());
    }
}
