use crate::SbError;
use serde::Deserialize;

/// EVM specific environment used during a Switchboard function execution
#[derive(Deserialize, Debug, Default)]
pub struct EvmFunctionEnvironment {
    /// `CHAIN_ID`: The chain ID of the chain this evm function is executing on
    #[serde(default)]
    pub chain_id: u64,
    /// `VERIFYING_CONTRACT`: An environmnet variable denoting the signoff
    /// callback program ID. On evm chains this is equivalent to the Switchboard
    /// program address.
    #[serde(default)]
    pub verifying_contract: String,
    /// `FUNCTION_KEY`: environemnt variable passed in that denoted what function
    /// is executing
    #[serde(default)]
    pub function_key: String,
    /// A list of function parameter based calls to attempt to handle this run.
    /// Parsing these is up to the function.
    #[serde(default)]
    pub function_params: String,
    /// `FUNCTION_CALL_IDS`: A list of the UUIDs of all the calls the function
    /// will be attempting to resolve.
    #[serde(default)]
    pub function_call_ids: Vec<String>,
}
impl EvmFunctionEnvironment {
    pub fn parse() -> Result<Self, SbError> {
        match envy::from_env::<EvmFunctionEnvironment>() {
            Ok(env) => Ok(env),
            Err(error) => Err(SbError::CustomMessage(format!(
                "failed to decode environment variables: {}",
                error
            ))),
        }
    }

    /**
     * Returns the vec! of environment variable key-value pairs used by bollard
     */
    pub fn to_env(&self) -> Vec<String> {
        let mut env = vec![];
        env.push(format!("CHAIN_ID={}", self.chain_id));
        env.push(format!("VERIFYING_CONTRACT={}", self.verifying_contract));
        env.push(format!("FUNCTION_KEY={}", self.function_key));
        env.push(format!("FUNCTION_PARAMS={}", self.function_params));
        env.push(format!("function_call_ids={:?}", self.function_call_ids));
        env
    }
}
