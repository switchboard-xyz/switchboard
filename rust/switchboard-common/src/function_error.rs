// TODO: we may want to reserve [1-99] for errors that are fatal to the function (possibly retryable)
// then reserve [100-199] for user errors that are not fatal to the function but give more status
// on-chain to the function consumer.
#[repr(u8)]
#[derive(Clone, Debug, Default)]
pub enum SbFunctionError {
    #[default]
    None = 0,
    // A custom user error between [1 - 198]
    FunctionError(u8),
    // An unknown panic from the function container
    FatalError = 199,
    // Switchboard reserved errors
    /// Failed to build a transaction with the emitted FunctionResult
    FunctionResultEmitError = 200,
    /// The FunctionResult generated SGX quote failed verification
    QuoteVerificationError = 201,
    // Reserved for Switchboard [202-249]
    SwitchboardError(u8),
    // Errors [250 - 255] reserved for Switchboard
    OutOfFunds = 250,
    Reserved251 = 251,
    ContainerUnavailable = 252,
    /// Failed to find the FunctionResult in the emitted container logs
    FunctionResultNotFound = 253,
    /// Failed to execute the FunctionResult emitted transaction
    CallbackError = 254,
    /// Function failed to complete within the designated timeout
    FunctionTimeout = 255,
}
impl From<u8> for SbFunctionError {
    fn from(value: u8) -> Self {
        match value {
            0 => SbFunctionError::None,
            1..=198 => SbFunctionError::FunctionError(value),
            199 => SbFunctionError::FatalError,
            200 => SbFunctionError::FunctionResultEmitError,
            201 => SbFunctionError::QuoteVerificationError,
            202..=249 => SbFunctionError::SwitchboardError(value),
            250 => SbFunctionError::OutOfFunds,
            251 => SbFunctionError::Reserved251,
            252 => SbFunctionError::ContainerUnavailable,
            253 => SbFunctionError::FunctionResultNotFound,
            254 => SbFunctionError::CallbackError,
            255 => SbFunctionError::FunctionTimeout,
        }
    }
}
impl SbFunctionError {
    pub fn as_u8(&self) -> u8 {
        match self {
            SbFunctionError::None => 0,
            SbFunctionError::FunctionError(value) => *value,
            SbFunctionError::FatalError => 199,
            SbFunctionError::FunctionResultEmitError => 200,
            SbFunctionError::QuoteVerificationError => 201,
            SbFunctionError::SwitchboardError(value) => *value,
            SbFunctionError::OutOfFunds => 250,
            SbFunctionError::Reserved251 => 251,
            SbFunctionError::ContainerUnavailable => 252,
            SbFunctionError::FunctionResultNotFound => 253,
            SbFunctionError::CallbackError => 254,
            SbFunctionError::FunctionTimeout => 255,
        }
    }
}
