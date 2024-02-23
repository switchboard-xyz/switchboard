use std::str::FromStr;

use crate::utils::handle_reqwest_err;
use reqwest;
use serde::{Deserialize, Serialize};
use serde_json::{Number, Value};
use switchboard_common::error::SbError;

fn deserialize_u64_from_string<'de, D>(deserializer: D) -> Result<u64, D::Error>
where
    D: serde::Deserializer<'de>,
{
    let s = String::deserialize(deserializer)?;
    s.parse::<u64>().map_err(serde::de::Error::custom)
}

#[derive(Serialize, Deserialize, Default, PartialEq, Clone, Debug)]
pub enum SwapMode {
    #[default]
    ExactIn,
    ExactOut,
}
impl FromStr for SwapMode {
    type Err = SbError;

    fn from_str(s: &str) -> Result<Self, SbError> {
        match s {
            "ExactIn" => Ok(Self::ExactIn),
            "ExactOut" => Ok(Self::ExactOut),
            _ => Err(SbError::CustomMessage(format!(
                "Failed to parse SwapMode enum ({})",
                s
            ))),
        }
    }
}
impl std::fmt::Display for SwapMode {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match *self {
            Self::ExactIn => write!(f, "ExactIn"),
            Self::ExactOut => write!(f, "ExactOut"),
        }
    }
}

#[derive(Clone, Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct JupiterSwapQuoteResponse {
    pub input_mint: String,
    #[serde(deserialize_with = "deserialize_u64_from_string")]
    pub in_amount: u64,
    pub output_mint: String,
    #[serde(deserialize_with = "deserialize_u64_from_string")]
    pub out_amount: u64,
    #[serde(deserialize_with = "deserialize_u64_from_string")]
    pub other_amount_threshold: u64,
    pub swap_mode: SwapMode,

    pub slippage_bps: u64,
    pub platform_fee: Option<u64>,

    pub price_impact_pct: Option<String>,
    pub context_slot: Option<u64>,
    pub time_taken: Option<f64>,
    // pub route_plan: Vec<JupiterRoutePlan>,
}

pub struct JupiterSwapClient {
    pub api_key: String,
}

pub struct TokenInput {
    pub address: String,
    pub decimals: u32,
}

impl JupiterSwapClient {
    pub fn new(api_key: Option<String>) -> Self {
        let mut jupiter_api_key = api_key.unwrap_or(String::new());

        if jupiter_api_key.is_empty() {
            let jupiter_api_key_env =
                std::env::var("JUPITER_SWAP_API_KEY").unwrap_or(String::new());
            if !jupiter_api_key_env.is_empty() {
                jupiter_api_key = jupiter_api_key_env;
            }
        }
        Self {
            api_key: jupiter_api_key,
        }
    }

    pub fn get_url(
        &self,
        in_token_address: &str,
        out_token_address: &str,
        amount: &str,
        slippage_bps: Option<f64>,
    ) -> String {
        let mut url = format!(
            "{base_url}/quote?inputMint={}&outputMint={}&amount={}&slippageBps={}&onlyDirectRoutes=false",
            in_token_address,
            out_token_address,
            amount,
            slippage_bps.unwrap_or(100.0),
            base_url = std::env::var("JUPITER_SWAP_URL").unwrap_or("https://public.jupiterapi.com/".to_string())
        );
        let jupiter_api_key = std::env::var("JUPITER_SWAP_API_KEY").unwrap_or(String::new());
        if !jupiter_api_key.is_empty() {
            url = format!("{}&token={}", url, jupiter_api_key);
        }
        url
    }

    pub async fn get_quote(
        &self,
        in_token: &TokenInput,
        out_token: &TokenInput,
        amount: &str,
        slippage_bps: Option<f64>,
    ) -> Result<JupiterSwapQuoteResponse, SbError> {
        let in_token_address = in_token.address.clone();
        let out_token_address = out_token.address.clone();

        let url = self.get_url(&in_token_address, &out_token_address, amount, slippage_bps);

        let response = reqwest::get(url)
            .await
            .map_err(handle_reqwest_err)?
            .error_for_status()
            .map_err(handle_reqwest_err)?;

        if response.status() != 200 {
            return Err(SbError::CustomMessage(format!(
                "Jupiter Swap API returned status code {}",
                response.status()
            )));
        }

        // Get the response text as a string
        let text = response.text().await.map_err(handle_reqwest_err)?;

        let response: JupiterSwapQuoteResponse = serde_json::from_str(&text).unwrap();

        Ok(response)
    }
}

pub async fn jupiter_swap_task(
    in_token_address: &str,
    out_token_address: &str,
    amount: &str,
    slippage_bps: Option<f64>,
) -> Result<Value, SbError> {
    let jupiter = JupiterSwapClient::new(None);

    // TODO: We need a way to fetch the token decimals so we can normalize the amount and out_amount

    let quote = jupiter
        .get_quote(
            &TokenInput {
                address: in_token_address.to_string(),
                decimals: 9,
            },
            &TokenInput {
                address: out_token_address.to_string(),
                decimals: 9,
            },
            amount,
            slippage_bps,
        )
        .await?;

    // TODO: we need to know the decimal places of each mint so we can normalize the amount
    let result: f64 = normalize_and_convert_to_f64(quote.out_amount, 0);
    let serde_number = Number::from_f64(result).unwrap();

    Ok(Value::Number(serde_number))
}

fn normalize_and_convert_to_f64(value: u64, decimal_places: u32) -> f64 {
    let divisor = 10u64.pow(decimal_places) as f64;
    (value as f64) / divisor
}
