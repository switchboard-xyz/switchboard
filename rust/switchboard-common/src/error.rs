use reqwest::{Error as ReqwestError, StatusCode};
use serde_json::Error as SerdeJsonError;
use std::error::Error as StdError;
use std::fmt;
use std::fmt::Debug;

#[derive(Debug)]
pub enum Error {
    CustomMessage(String),
    CustomError {
        message: String,
        source: Box<dyn StdError + 'static>,
    },
    HttpError {
        status_code: StatusCode,
        status_text: String,
        source: ReqwestError,
    },
    // Add other error variants as needed
    SgxError,
    SgxWriteError,
    TxFailure,
    NetworkErr,
    InvalidQuoteError,
    TxCompileErr,
    EnvVariableMissing(String),
}

impl StdError for Error {
    fn source(&self) -> Option<&(dyn StdError + 'static)> {
        match self {
            Error::CustomError { source, .. } => Some(source.as_ref()), // Handle other error variants as needed
            _ => None,
        }
    }
}

impl fmt::Display for Error {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Error::CustomMessage(message) => write!(f, "error: {}", message.as_str()),
            Error::CustomError {
                message, source, ..
            } => write!(f, "error: {} - {:?}", message.as_str(), source),
            // Handle other error variants as needed
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
            Error::SgxError => write!(f, "SGX error"),
            Error::SgxWriteError => write!(f, "SGX write error"),
            Error::TxFailure => write!(f, "Tx failure"),
            Error::NetworkErr => write!(f, "Network error"),
            Error::InvalidQuoteError => write!(f, "Invalid Quote"),
            Error::TxCompileErr => write!(f, "Tx compile error"),
            Error::EnvVariableMissing(message) => {
                write!(f, "Env variable missing {}", message.as_str())
            }
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

impl From<ReqwestError> for Error {
    fn from(error: ReqwestError) -> Self {
        if let Some(status) = error.status() {
            Error::HttpError {
                status_code: status,
                status_text: status.canonical_reason().unwrap_or("Unknown").to_string(),
                source: error,
            }
        } else {
            // You can choose to handle non-HTTP errors differently or use the same variant
            Error::HttpError {
                status_code: StatusCode::default(),
                status_text: "Non-HTTP error".to_string(),
                source: error,
            }
        }
    }
}
