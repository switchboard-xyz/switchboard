use crate::*;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Default, PartialEq, Serialize, Deserialize)]
pub enum Chain {
    #[default]
    None = 0,
    Aptos,
    Arbitrum,
    Bsc,
    Coredao,
    Near,
    Solana,
    Starknet,
    Sui,
}

#[derive(Default, Clone, Debug, PartialEq, Serialize, Deserialize)]
pub struct FunctionResult {
    pub version: u32,
    pub chain: Chain,
    pub key: [u8; 32],
    pub signer: [u8; 32],
    pub serialized_tx: Vec<u8>,
    pub quote: Vec<u8>,
    pub program: Vec<u8>,
    pub data: Vec<u8>,
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
        let fr = FunctionResult {
            version: 1,
            chain: Chain::Solana,
            key: [0; 32],
            signer: [0; 32],
            serialized_tx: vec![],
            quote: vec![],
            program: vec![],
            data: vec![],
        };

        let encoded = format!(
            "FN_OUT: {}",
            hex::encode(serde_json::to_string(&fr).unwrap())
        );

        let decoded = FunctionResult::decode(&encoded).unwrap();

        assert_eq!(fr.version, decoded.version);
        assert_eq!(fr.chain, decoded.chain);
        assert_eq!(fr.key, decoded.key);
        assert_eq!(fr.signer, decoded.signer);
        assert_eq!(fr.serialized_tx, decoded.serialized_tx);
        assert_eq!(fr.quote, decoded.quote);
        assert_eq!(fr.program, decoded.program);
        assert_eq!(fr.data, decoded.data);
    }
}
