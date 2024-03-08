use serde_json::Error as SerdeJsonError;
use std::error::Error as StdError;
use std::fmt;
use std::fmt::Debug;
use std::sync::Arc;

type ParentError = Arc<dyn StdError + Send + Sync + 'static>;

/// Switchboard Functions error suite
#[derive(Clone, Debug)]
pub enum SbError {
    // Generics
    Generic,
    Message(&'static str),
    CustomMessage(String),
    CustomError {
        message: String,
        source: ParentError,
    },
    Unexpected,
    // Environment Errors
    EnvVariableMissing(String),
    InvalidKeypairFile,
    KeyParseError,
    CheckSizeError,

    IoError(ParentError),

    // SGX Errors
    SgxError,
    SgxWriteError,

    // Network Errors
    NetworkError,

    // Quote Errors
    QuoteParseError,
    InvalidQuoteError,

    // QvnErrors
    QvnError(Arc<String>),

    // Docker/Container Errors
    DockerError,
    DockerFetchError,
    FunctionImageTooBigError,
    ContainerErrorMessage(String),
    ContainerError(ParentError),
    ContainerStartError(ParentError),
    ContainerCreateError(ParentError),
    ContainerNeedsUpdate,
    // ContainerCreateError,
    ContainerResultParseError,
    AttachError,
    ContainerTimeout,
    ContainerActive,
    ContainerBackoff(u64),
    FunctionErrorCountExceeded(u32),

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
    InvalidChain,
    AnchorParse,
    AnchorParseError,
    EvmError,

    // Misc
    IpfsParseError,
    IpfsNetworkError,
    HeartbeatRoutineFailure,
    EventListenerRoutineFailure,
    DecryptError,
    ParseError,
    MrEnclaveMismatch,
    FunctionResultIxIncorrectTargetChain,
    InvalidSignature,

    // Solana
    /// Failed to fetch a network resource
    SolanaFetchError(String),
    /// Failed to fetch a blockhash from the cluster
    SolanaBlockhashError,
    /// Failed to fetch a blockhash from the cluster
    SolanaBlockhashFetchError(ParentError),
    /// THe provided payer does not match the payer of the transaction
    /// Expected vs actual
    SolanaPayerMismatch(String, String),
    SolanaPayerSignerMissing(String),
    /// A required Solana signer is missing
    SolanaMissingSigner(String),
    SolanaSignError(ParentError, String),
    SolanaInstructionsEmpty,
    SolanaInstructionOverflow,
    FunctionResultIxMissingDiscriminator,
    FunctionResultError(&'static str),
    FunctionResultIxError(&'static str),
    // An error which should fail to send the user generated transaction and should emit an error code
    FunctionResultFailoverError(u8, ParentError),
    // An error which should not be retried and should be dropped by the QVN.
    FunctionResultNonRetryableError(ParentError),

    AccountNotFound,
}

impl fmt::Display for SbError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            SbError::EnvVariableMissing(message) => {
                write!(f, "Env variable missing: {}", message.as_str())
            }
            SbError::Message(message) => write!(f, "error: {}", message),
            SbError::CustomMessage(message) => write!(f, "error: {}", message.as_str()),
            SbError::CustomError {
                message, source, ..
            } => write!(f, "error: {} - {:?}", message.as_str(), source),
            SbError::FunctionResultError(message) => {
                write!(f, "error: FunctionResultError - {}", message)
            }
            SbError::FunctionResultIxError(message) => {
                write!(f, "error: FunctionResultIxError - {}", message)
            }
            SbError::FunctionResultFailoverError(code, source) => {
                write!(
                    f,
                    "error: FunctionResultFailoverError ({}) - {:?}",
                    code, source
                )
            }
            SbError::FunctionResultNonRetryableError(source) => {
                write!(f, "error: FunctionResultNonRetryableError - {:?}", source)
            }
            SbError::SolanaPayerMismatch(expected, actual) => {
                write!(
                    f,
                    "error: SolanaPayerMismatch - expected: {}, actual: {}",
                    expected, actual
                )
            }
            SbError::SolanaMissingSigner(missing_signer) => {
                write!(f, "error: Missing required signer: {}", missing_signer)
            }
            SbError::SolanaInstructionsEmpty => write!(
                f,
                "error: The attempted action requires at least one instruction but none were provided"
            ),
            SbError::SolanaInstructionOverflow => write!(
                f,
                "error: The transaction exceeded the maximum number of instructions (10)"
            ),
            SbError::SolanaPayerSignerMissing(payer) => write!(
                f,
                "error: The payer keypair is missing from the provided signers: {}",
                payer
            ),
            SbError::SolanaBlockhashFetchError(source) => write!(
                f,
                "error: Failed to fetch blockhash from the cluster. Please try again. - {:?}", source
            ),
            // Handle other error variants as needed
            _ => write!(f, "{:#?}", self),
        }
    }
}

impl<T> From<SbError> for Result<T, Box<SbError>> {
    fn from(err: SbError) -> Result<T, Box<SbError>> {
        Err(Box::new(err))
    }
}

impl From<&str> for SbError {
    fn from(error: &str) -> Self {
        SbError::CustomMessage(error.to_string())
    }
}
impl From<String> for SbError {
    fn from(error: String) -> Self {
        SbError::CustomMessage(error)
    }
}

impl From<hex::FromHexError> for SbError {
    fn from(error: hex::FromHexError) -> Self {
        SbError::CustomError {
            message: "hex error".to_string(),
            source: Arc::new(error),
        }
    }
}

impl StdError for SbError {
    fn source(&self) -> Option<&(dyn StdError + 'static)> {
        match self {
            SbError::CustomError { source, .. } => Some(source.as_ref()), // Handle other error variants as needed
            SbError::ContainerError(source) => Some(source.as_ref()),
            SbError::ContainerStartError(source) => Some(source.as_ref()),
            SbError::SolanaSignError(source, ..) => Some(source.as_ref()),
            SbError::FunctionResultFailoverError(_code, source, ..) => Some(source.as_ref()),
            SbError::FunctionResultNonRetryableError(source, ..) => Some(source.as_ref()),
            _ => None,
        }
    }
}

impl From<SerdeJsonError> for SbError {
    fn from(error: SerdeJsonError) -> Self {
        SbError::CustomError {
            message: "serde_json error".to_string(),
            source: Arc::new(error),
        }
    }
}

impl From<std::io::Error> for SbError {
    fn from(val: std::io::Error) -> Self {
        SbError::IoError(std::sync::Arc::new(val))
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn display_generic() {
        let error = SbError::Generic;
        assert_eq!(format!("{}", error), "Generic");
    }

    #[test]
    fn display_custom_message() {
        let error = SbError::CustomMessage("my custom message".to_string());
        assert_eq!(format!("{}", error), "error: my custom message");
    }

    #[test]
    fn display_env_variable_missing() {
        let error = SbError::EnvVariableMissing("MY_ENV_VAR".to_string());
        assert_eq!(format!("{}", error), "Env variable missing: MY_ENV_VAR");
    }

    #[test]
    fn from_str() {
        let error: SbError = "my custom message".into();
        assert_eq!(format!("{}", error), "error: my custom message");
    }

    #[test]
    fn from_hex_error() {
        let hex_error = hex::FromHexError::OddLength;
        let error: SbError = hex_error.into();
        assert_eq!(format!("{}", error), "error: hex error - OddLength");
    }

    #[test]
    fn from_serde_json_error() {
        let json = "\"";
        let serde_json_error = serde_json::from_str::<serde_json::Value>(json).unwrap_err();
        let error: SbError = serde_json_error.into();
        assert!(format!("{}", error).starts_with("error: serde_json error - "));
    }
}

impl From<SbError> for Box<dyn StdError + Send> {
    fn from(err: SbError) -> Self {
        Box::new(err) // Assuming SbError implements StdError and Send
    }
}
