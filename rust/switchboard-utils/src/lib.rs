#[allow(unused_imports)]
mod protobufs;

mod task;

mod utils;
use utils::*;

pub mod protos {
    pub use crate::protobufs::{oracle_job, OracleJob};
    pub use prost::Message;

    pub use crate::task::*;

    pub use crate::runner::*;
}

pub use rust_decimal::prelude::*;

pub use switchboard_common as common;
pub use switchboard_common::SbError;

// pub mod task;
// pub use task::*;

// pub use ethers;
pub use jsonpath_rust as jsonpath;
pub use reqwest;

pub mod runner;
pub use runner::*;

// pub mod amm;

pub mod exchanges;

#[cfg(test)]
mod tests {
    use crate::task::*;

    use serde_json::Value;
    use std::str::FromStr;

    #[tokio::test]
    async fn test_http_chain() {
        let json_string = r#"{"symbol":"SOLUSDT","price":"25.36000000"}"#;
        let json = Value::from_str(json_string).unwrap();

        let mut server = mockito::Server::new();
        let url = &format!("{}/test", server.url());

        // Create a mock
        let mock = server
            .mock("GET", "/test")
            .with_status(201)
            .with_header("content-type", "application/json")
            .with_body(json_string)
            .create();

        let http_result = http_task(url, None).await.unwrap();
        assert_eq!(http_result, json);
        mock.assert();

        let path = "$.price";

        let value = json_parse_task(http_result, path).unwrap();
        let result = f64::from_str(value.as_str().unwrap()).unwrap();
        assert_eq!(result, 25.36);
        assert_eq!(value.as_str().unwrap(), "25.36000000");
    }

    #[tokio::test]
    async fn test_simple_http_chain() {
        let json_string = r#"{"symbol":"SOLUSDT","price":"25.36000000"}"#;
        // let json = Value::from_str(json_string).unwrap();

        let mut server = mockito::Server::new();
        let url = &format!("{}/test", server.url());

        // Create a mock
        let mock = server
            .mock("GET", "/test")
            .with_status(201)
            .with_header("content-type", "application/json")
            .with_body(json_string)
            .create();

        let value = http_task(url, Some("$.price")).await.unwrap();
        mock.assert();

        let result = f64::from_str(value.as_str().unwrap()).unwrap();
        assert_eq!(result, 25.36);
        assert_eq!(value.as_str().unwrap(), "25.36000000");
    }
}
