#![cfg_attr(doc_cfg, feature(doc_cfg))]
mod macros;

pub mod error;
pub use error::*;

pub mod utils;
pub use utils::*;

pub mod function_result;
pub use function_result::*;

cfg_client! {
    pub mod gramine;
    pub use gramine::*;

    mod function_error;
    pub use function_error::*;

    pub mod env;
    pub use env::*;

    pub use async_trait;
}

cfg_ipfs! {
    pub mod ipfs;
    pub use ipfs::*;
}
