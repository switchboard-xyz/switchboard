use crate::cfg_client;

use serde_json::Error as SerdeJsonError;
use std::error::Error as StdError;
use std::fmt;
use std::fmt::Debug;

#[derive(Debug)]
pub enum Error {
    // only import the reqwest library when the client feature is enabled
    #[cfg(feature = "client")]
    #[cfg_attr(doc_cfg, doc(cfg(feature = "client")))]
    HttpError {
        status_code: reqwest::StatusCode,
        status_text: String,
        source: reqwest::Error,
    },
    EnvVariableMissing(String),
    CustomMessage(String),
    CustomError {
        message: String,
        source: Box<dyn StdError + 'static>,
    },
    // Generics
    Generic,
    SgxError,
    SgxWriteError,
    QuoteParseError,
    DockerError,
    BollardError,
    ContainerStartError,
    ContainerCreateError,
    AttachError,
    ContainerResultParseError,
    FunctionResultParseError,
    IllegalFunctionOutput,
    NetworkError,
    TxFailure,
    InvalidQuoteError,
    TxCompileErr,
}

impl fmt::Display for Error {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            #[cfg(feature = "client")]
            #[cfg_attr(doc_cfg, doc(cfg(feature = "client")))]
            Error::HttpError {
                status_code,
                status_text,
                ..
            } => write!(
                f,
                "Reqwest error: {} - {}",
                status_code.as_str(),
                status_text
            ),

            Error::EnvVariableMissing(message) => {
                write!(f, "Env variable missing {}", message.as_str())
            }
            Error::CustomMessage(message) => write!(f, "error: {}", message.as_str()),
            Error::CustomError {
                message, source, ..
            } => write!(f, "error: {} - {:?}", message.as_str(), source),
            // Handle other error variants as needed
            Error::Generic => write!(f, "Generic Error"),
            Error::SgxError => write!(f, "Sgx Error"),
            Error::SgxWriteError => write!(f, "SgxWriteError"),
            Error::QuoteParseError => write!(f, "QuoteParseError"),
            Error::DockerError => write!(f, "DockerError"),
            Error::BollardError => write!(f, "BollardError"),
            Error::ContainerStartError => write!(f, "ContainerStartError"),
            Error::ContainerCreateError => write!(f, "ContainerCreateError"),
            Error::AttachError => write!(f, "AttachError"),
            Error::ContainerResultParseError => write!(f, "ContainerResultParseError"),
            Error::FunctionResultParseError => write!(f, "FunctionResultParseError"),
            Error::IllegalFunctionOutput => write!(f, "IllegalFunctionOutput"),
            Error::NetworkError => write!(f, "NetworkError"),
            Error::TxFailure => write!(f, "TxFailure"),
            Error::InvalidQuoteError => write!(f, "InvalidQuoteError"),
            Error::TxCompileErr => write!(f, "TxCompileErr"),
        }
    }
}

impl From<&str> for Error {
    fn from(error: &str) -> Self {
        Error::CustomMessage(error.to_string())
    }
}

impl From<hex::FromHexError> for Error {
    fn from(error: hex::FromHexError) -> Self {
        Error::CustomError {
            message: "hex error".to_string(),
            source: Box::new(error),
        }
    }
}

impl StdError for Error {
    fn source(&self) -> Option<&(dyn StdError + 'static)> {
        match self {
            Error::CustomError { source, .. } => Some(source.as_ref()), // Handle other error variants as needed
            _ => None,
        }
    }
}

impl From<SerdeJsonError> for Error {
    fn from(error: SerdeJsonError) -> Self {
        Error::CustomError {
            message: "serde_json error".to_string(),
            source: Box::new(error),
        }
    }
}

cfg_client! {
    impl From<reqwest::Error> for Error {
        fn from(error: reqwest::Error) -> Self {
            if let Some(status) = error.status() {
                Error::HttpError {
                    status_code: status,
                    status_text: status.canonical_reason().unwrap_or("Unknown").to_string(),
                    source: error,
                }
            } else {
                // You can choose to handle non-HTTP errors differently or use the same variant
                Error::HttpError {
                    status_code: reqwest::StatusCode::default(),
                    status_text: "Non-HTTP error".to_string(),
                    source: error,
                }
            }
        }
    }
}
