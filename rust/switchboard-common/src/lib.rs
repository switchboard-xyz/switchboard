#![cfg_attr(doc_cfg, feature(doc_cfg))]
mod macros;

pub mod error;
pub use error::*;

cfg_client! {
    pub mod sgx;
    pub use sgx::*;
}

use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Default, Deserialize, Serialize)]
pub enum Chain {
    #[default]
    Unknown,
    Aptos,
    Arbitrum,
    Bsc,
    Coredao,
    Near,
    Solana,
    Starknet,
    Sui,
}

#[derive(Clone, Debug, Serialize, Deserialize, Default)]
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

impl FunctionResult {
    pub fn emit(&self) {
        println!(
            "FN_OUT: {}",
            hex::encode(serde_json::to_string(&self).unwrap())
        );
    }
}
