use crate::*;
use serde::{Deserialize, Serialize};

#[derive(Clone, PartialEq, Debug, Serialize, Deserialize)]
pub struct EvmTransaction {
    pub expiration_time_seconds: u64,
    pub gas_limit: String,
    pub value: String, // Not sure how to represent this type
    pub to: Vec<u8>,
    pub from: Vec<u8>,
    pub data: Vec<u8>,
}

#[derive(Default, Clone, PartialEq, Debug, Serialize, Deserialize)]
pub struct EVMFunctionResult {
    // NOTE: tx.len() == signatures.len() must be true
    pub txs: Vec<EvmTransaction>,
    pub signatures: Vec<Vec<u8>>,
}

#[derive(Default, Clone, PartialEq, Debug, Serialize, Deserialize)]
pub struct SOLFunctionResult {
    pub serialized_tx: Vec<u8>,
}

#[derive(Default, PartialEq, Clone, Debug, Serialize, Deserialize)]
pub enum ChainResultInfo {
    #[default]
    None,
    Solana(SOLFunctionResult),
    Evm(EVMFunctionResult),
}

#[derive(Clone, PartialEq, Default, Debug, Serialize, Deserialize)]
pub struct FunctionResult {
    pub version: u32,
    pub quote: Vec<u8>,
    pub fn_key: Vec<u8>,
    pub signer: Vec<u8>,
    pub fn_request_key: Vec<u8>,
    pub fn_request_hash: Vec<u8>,
    pub chain_result_info: ChainResultInfo,
}

pub static FUNCTION_RESULT_PREFIX: &str = "FN_OUT: ";

impl FunctionResult {
    pub fn emit(&self) {
        println!(
            "{}{}",
            FUNCTION_RESULT_PREFIX,
            hex::encode(serde_json::to_string(&self).unwrap())
        );
    }

    pub fn decode(s: &str) -> std::result::Result<Self, Error> {
        if s.starts_with(FUNCTION_RESULT_PREFIX) {
            let encoded = &s[FUNCTION_RESULT_PREFIX.len()..];
            let decoded = hex::decode(encoded)?;
            let deserialized: FunctionResult = serde_json::from_slice(&decoded)?;
            Ok(deserialized)
        } else {
            Err("String does not start with 'FN_OUT: '".into())
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_decode() {
        let fr = FunctionResult::default();

        let encoded = format!(
            "FN_OUT: {}",
            hex::encode(serde_json::to_string(&fr).unwrap())
        );

        let decoded = FunctionResult::decode(&encoded).unwrap();

        assert_eq!(fr, FunctionResult::default());
    }
}
