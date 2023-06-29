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

    // Environment Errors
    InvalidKeypairFile,
    KeyParseError,

    // SGX Errors
    SgxError,
    SgxWriteError,

    // Network Errors
    NetworkError,

    // Quote Errors
    QuoteParseError,
    InvalidQuoteError,

    // Docker/Container Errors
    DockerError,
    ContainerStartError,
    ContainerCreateError,
    ContainerResultParseError,
    AttachError,

    // Function Errors
    FunctionResultParseError,
    IllegalFunctionOutput,
    FunctionVerifyFailure,
    FunctionResultIllegalAccount,
    FunctionResultAccountsMismatch,
    FunctionResultInvalidData,
    FunctionResultInvalidPid,
    FunctionResultEmptyInstructions,

    // Transaction Errors
    TxFailure,
    TxCompileErr,
    TxDeserializationError,
    QvnTxSendFailure,
    InvalidInstructionError,

    // Chain specific Errors
    AnchorParse,
    AnchorParseError,
    EvmError,

    // Misc
    IpfsParseError,
    IpfsNetworkError,
    HeartbeatRoutineFailure,
    EventListenerRoutineFailure,
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
            _ => write!(f, "{:#?}", self),
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
