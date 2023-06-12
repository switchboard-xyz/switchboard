use std::error::Error as StdError;
use std::fmt;

#[derive(Debug)]
pub enum Error {
    CustomMessage(String),
    CustomError {
        message: String,
        source: Box<dyn StdError + 'static>,
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
