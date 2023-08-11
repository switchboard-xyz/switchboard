#![cfg_attr(doc_cfg, feature(doc_cfg))]
mod macros;

pub mod error;
pub use error::*;

cfg_client! {
    pub mod sgx;
    pub use sgx::*;
}

cfg_solana! {
    pub mod solana;
    pub use solana::*;
}

pub mod function_result;
pub use function_result::*;
