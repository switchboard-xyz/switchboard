use serde_json::Error as SerdeJsonError;
use std::error::Error as StdError;
use std::fmt;
use std::fmt::Debug;
use std::sync::Arc;

#[derive(Clone, Debug)]
pub enum Error {
    // Generics
    Generic,

    CustomMessage(String),
    CustomError {
        message: String,
        source: Arc<dyn StdError + 'static>,
    },
    Unexpected,
    // Environment Errors
    EnvVariableMissing(String),
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
            Error::EnvVariableMissing(message) => {
                write!(f, "Env variable missing: {}", message.as_str())
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
            source: Arc::new(error),
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
            source: Arc::new(error),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn display_generic() {
        let error = Error::Generic;
        assert_eq!(format!("{}", error), "Generic");
    }

    #[test]
    fn display_custom_message() {
        let error = Error::CustomMessage("my custom message".to_string());
        assert_eq!(format!("{}", error), "error: my custom message");
    }

    #[test]
    fn display_env_variable_missing() {
        let error = Error::EnvVariableMissing("MY_ENV_VAR".to_string());
        assert_eq!(format!("{}", error), "Env variable missing: MY_ENV_VAR");
    }

    #[test]
    fn from_str() {
        let error: Error = "my custom message".into();
        assert_eq!(format!("{}", error), "error: my custom message");
    }

    #[test]
    fn from_hex_error() {
        let hex_error = hex::FromHexError::OddLength;
        let error: Error = hex_error.into();
        assert_eq!(format!("{}", error), "error: hex error - OddLength");
    }

    #[test]
    fn from_serde_json_error() {
        let json = "\"";
        let serde_json_error = serde_json::from_str::<serde_json::Value>(json).unwrap_err();
        let error: Error = serde_json_error.into();
        assert!(format!("{}", error).starts_with("error: serde_json error - "));
    }
}
