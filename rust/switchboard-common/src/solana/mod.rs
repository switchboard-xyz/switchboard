use serde::Deserialize;

use crate::Error;

fn default_cluster() -> String {
    "devnet".to_string()
}

const DEFAULT_PUBKEY: &str = "11111111111111111111111111111111";

/// The expected environment variables when a solana function is being executed
#[derive(Deserialize, Debug, Default)]
#[serde(default)]
pub struct SolanaFunctionEnvironment {
    /// FUNCTION_KEY: the pubkey of the function being executed
    pub function_key: String,
    /// PAYER: The gas payer for this transaction
    pub payer: String,
    /// VERIFIER: the pubey of the oracle veriying this call
    pub verifier: String,
    /// REWARD_RECEIVER: The escrow to send the reward the oracle will receive
    /// for executing this function
    pub reward_receiver: String,

    // can be manually populated from client if missing
    /// FUNCTION_DATA: The preloaded data of the `FUNCTION_KEY` account
    pub function_data: Option<String>,
    /// VERIFIER_ENCLAVE_SIGNER: The keypair the verifying oracle is using to
    /// sign this transaction.
    pub verifier_enclave_signer: Option<String>,
    /// QUEUE_AUTHORITY: The authority of the oracle queue this function is
    /// executing on.
    pub queue_authority: Option<String>,

    // only used for requests
    /// FUNCTION_REQUEST_KEY: If this function is being called with parameters,
    /// this ariable will hold the pubkey of the request account
    pub function_request_key: Option<String>,
    /// FUNCTION_REQUEST_DATA: The preloaded data of the `FUNCTION_REQUEST_KEY`
    /// account
    pub function_request_data: Option<String>,

    // helpers
    #[serde(default = "default_cluster")]
    pub cluster: String,
}
impl SolanaFunctionEnvironment {
    pub fn parse() -> Result<Self, Error> {
        match envy::from_env::<SolanaFunctionEnvironment>() {
            Ok(env) => Ok(env),
            Err(error) => Err(Error::CustomMessage(format!(
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
        env.push(format!("CLUSTER={}", self.cluster));
        env.push(format!("FUNCTION_KEY={}", self.function_key));
        env.push(format!("PAYER={}", self.payer));
        env.push(format!("VERIFIER={}", self.verifier));
        env.push(format!("REWARD_RECEIVER={}", self.reward_receiver));

        if let Some(fn_request_key) = self.function_request_key.as_ref() {
            if fn_request_key.len() > 0 && fn_request_key != &DEFAULT_PUBKEY.to_string() {
                env.push(format!("FUNCTION_REQUEST_KEY={}", fn_request_key));
            }
        }

        if let Some(verifier_enclave_signer) = self.verifier_enclave_signer.as_ref() {
            if verifier_enclave_signer.len() > 0
                && verifier_enclave_signer != &DEFAULT_PUBKEY.to_string()
            {
                env.push(format!(
                    "VERIFIER_ENCLAVE_SIGNER={}",
                    verifier_enclave_signer
                ));
            }
        }

        if let Some(queue_authority) = self.queue_authority.as_ref() {
            if queue_authority.len() > 0 && queue_authority != &DEFAULT_PUBKEY.to_string() {
                env.push(format!("QUEUE_AUTHORITY={}", queue_authority));
            }
        }

        if let Some(function_data) = self.function_data.as_ref() {
            if function_data.len() > 0 && !function_data.chars().all(|c| c == '0') {
                env.push(format!("FUNCTION_DATA={}", function_data));
            }
        }

        if let Some(fn_request_data) = self.function_request_data.as_ref() {
            if fn_request_data.len() > 0 && !fn_request_data.chars().all(|c| c == '0') {
                env.push(format!("FUNCTION_REQUEST_DATA={}", fn_request_data));
            }
        }

        env
    }
}
