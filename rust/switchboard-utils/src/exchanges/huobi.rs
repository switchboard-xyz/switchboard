use crate::*;

use futures_util::TryFutureExt;
use rust_decimal::Decimal;
use serde::Deserialize;

#[allow(dead_code)]
#[derive(Debug, Deserialize, Clone)]
struct HuobiMarketData {
    pub ch: String,
    pub status: String,
    pub ts: i64,
    pub tick: HuobiTickerInfo,
}

#[derive(Debug, Clone, Deserialize)]
pub struct HuobiTickerInfo {
    pub id: i64,
    pub version: i64,
    pub open: f64,
    pub close: f64,
    pub low: f64,
    pub high: f64,
    pub amount: f64,
    pub vol: f64,
    pub count: i64,
    pub bid: (f64, f64),
    pub ask: (f64, f64),
}

pub struct HuobiApi {}

impl HuobiApi {
    // https://api.huobi.pro/market/detail/merged?symbol=btcusdt
    fn get_ticker_url(ticker: &str, url: Option<&str>) -> String {
        format!(
            "{}/market/detail/merged?symbol={}",
            url.unwrap_or("https://api.huobi.pro"),
            ticker
        )
    }

    pub async fn fetch_ticker(ticker: &str, url: Option<&str>) -> Result<HuobiTickerInfo, SbError> {
        let ticker_url = HuobiApi::get_ticker_url(ticker, url);

        let response: HuobiMarketData = reqwest::get(&ticker_url)
            .and_then(|r| r.json())
            .await
            .map_err(handle_reqwest_err)?;

        Ok(response.tick)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    const MOCK_HUOBI_RESPONSE: &str = r#"{"ch":"market.btcusdt.detail.merged","status":"ok","ts":1696450585149,"tick":{"id":330331957961,"version":330331957961,"open":27346.88,"close":27703.8,"low":27204.95,"high":27835.9,"amount":4105.804118401724,"vol":1.1280903302844201E8,"count":557808,"bid":[27699.26,1.218876],"ask":[27699.27,0.32722]}}"#;

    #[tokio::test]
    async fn test_huobi_api() {
        // Request a new server from the pool
        let mut server = mockito::Server::new();
        let server_url = server.url();

        // Create a mock
        let mock = server
            .mock("GET", "/market/detail/merged?symbol=btcusdt")
            .with_status(201)
            .with_header("content-type", "application/json")
            .with_body(MOCK_HUOBI_RESPONSE)
            .create();

        let ticker = HuobiApi::fetch_ticker("btcusdt", Some(server_url.as_str()))
            .await
            .unwrap();
        // TODO: fix test
        // println!("{:?}", ticker);

        // verify the mock was called
        // mock.assert();
        //
        // assert_eq!(ticker.open, 27346.88);
    }
}
