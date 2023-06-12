// src/error.rs
use reqwest::{Error as ReqwestError, StatusCode};
use serde_json::Error as SerdeJsonError;
use std::error::Error as StdError;
use std::fmt;

#[derive(Debug)]
pub enum Error {
    HttpError {
        status_code: StatusCode,
        status_text: String,
        source: ReqwestError,
    },
    CustomMessage(String),
    CustomError {
        message: String,
        source: Box<dyn StdError + 'static>,
    },
    // Add other error variants as needed
}

impl StdError for Error {
    fn source(&self) -> Option<&(dyn StdError + 'static)> {
        match self {
            Error::HttpError { source, .. } => Some(source),
            Error::CustomError { source, .. } => Some(source.as_ref()), // Handle other error variants as needed
            _ => None,
        }
    }
}

impl fmt::Display for Error {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
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
            Error::CustomMessage(message) => write!(f, "error: {}", message.as_str()),
            Error::CustomError {
                message, source, ..
            } => write!(f, "error: {} - {:?}", message.as_str(), source),
            // Handle other error variants as needed
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

impl From<SerdeJsonError> for Error {
    fn from(error: SerdeJsonError) -> Self {
        Error::CustomError {
            message: "serde_json error".to_string(),
            source: Box::new(error),
        }
    }
}
