use crate::SbError;
use serde::Deserialize;
use envy::Error as EnvyError;

fn default_cluster() -> String {
    "devnet".to_string()
}

const DEFAULT_PUBKEY: &str = "11111111111111111111111111111111";

/// The expected environment variables when a solana function is being executed
#[derive(Clone, Debug, Default, Deserialize)]
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
    #[serde(default)]
    pub function_data: String,
    /// VERIFIER_ENCLAVE_SIGNER: The keypair the verifying oracle is using to
    /// sign this transaction.
    #[serde(default)]
    pub verifier_enclave_signer: String,
    /// QUEUE_AUTHORITY: The authority of the oracle queue this function is
    /// executing on.
    #[serde(default)]
    pub queue_authority: String,

    // only used for routines
    /// FUNCTION_ROUTINE_KEY: If this function is being called with parameters,
    /// this variable will hold the pubkey of the request account
    #[serde(default)]
    pub function_routine_key: String,

    /// FUNCTION_ROUTINE_DATA: The preloaded data of the `FUNCTION_ROUTINE_KEY`
    /// account
    #[serde(default)]
    pub function_routine_data: String,

    // only used for requests
    /// FUNCTION_REQUEST_KEY: If this function is being called with parameters,
    /// this ariable will hold the pubkey of the request account
    #[serde(default)]
    pub function_request_key: String,
    /// FUNCTION_REQUEST_DATA: The preloaded data of the `FUNCTION_REQUEST_KEY`
    /// account
    #[serde(default)]
    pub function_request_data: String,

    // helpers
    #[serde(default = "default_cluster")]
    pub cluster: String,

    // optional, we can use this to wait for a slot if the public RPCs are behind
    pub minimum_context_slot: Option<u64>,
}
impl SolanaFunctionEnvironment {
    pub fn parse() -> Result<Self, SbError> {
        match envy::from_env::<SolanaFunctionEnvironment>() {
            Ok(env) => Ok(env),
            Err(error) => {
                match &error {
                    EnvyError::MissingValue(msg) =>
                        Err(SbError::EnvVariableMissing(msg.to_string())),
                    EnvyError::Custom(msg) =>
                        Err(
                            SbError::CustomMessage(
                                format!("failed to decode environment variables: {}", msg)
                            )
                        ),
                }
            }
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

        if
            !self.verifier_enclave_signer.is_empty() &&
            &self.verifier_enclave_signer != &DEFAULT_PUBKEY.to_string()
        {
            env.push(format!("VERIFIER_ENCLAVE_SIGNER={}", self.verifier_enclave_signer));
        }

        if !self.queue_authority.is_empty() && &self.queue_authority != &DEFAULT_PUBKEY.to_string() {
            env.push(format!("QUEUE_AUTHORITY={}", self.queue_authority));
        }

        if !self.function_data.is_empty() && !self.function_data.chars().all(|c| c == '0') {
            env.push(format!("FUNCTION_DATA={}", self.function_data));
        }

        if
            !self.function_routine_key.is_empty() &&
            &self.function_routine_key != &DEFAULT_PUBKEY.to_string()
        {
            env.push(format!("FUNCTION_ROUTINE_KEY={}", self.function_routine_key));
        }

        if
            !self.function_routine_data.is_empty() &&
            !self.function_routine_data.chars().all(|c| c == '0')
        {
            env.push(format!("FUNCTION_ROUTINE_DATA={}", self.function_routine_data));
        }

        if
            !self.function_request_key.is_empty() &&
            &self.function_request_key != &DEFAULT_PUBKEY.to_string()
        {
            env.push(format!("FUNCTION_REQUEST_KEY={}", self.function_request_key));
        }

        if
            !self.function_request_data.is_empty() &&
            !self.function_request_data.chars().all(|c| c == '0')
        {
            env.push(format!("FUNCTION_REQUEST_DATA={}", self.function_request_data));
        }

        if let Some(minimum_context_slot) = self.minimum_context_slot {
            env.push(format!("MINIMUM_CONTEXT_SLOT={}", minimum_context_slot));
        }

        env
    }

    /// Helper method to set all environment variables. Useful to help test your function environment.
    pub fn set_env(&self) -> Result<(), SbError> {
        if !self.function_key.is_empty() {
            std::env::set_var("FUNCTION_KEY", self.function_key.clone());
        }
        if !self.payer.is_empty() {
            std::env::set_var("PAYER", self.payer.clone());
        }
        if !self.verifier.is_empty() {
            std::env::set_var("VERIFIER", self.verifier.clone());
        }
        if !self.reward_receiver.is_empty() {
            std::env::set_var("REWARD_RECEIVER", self.reward_receiver.clone());
        }
        if !self.function_data.is_empty() {
            std::env::set_var("FUNCTION_DATA", self.function_data.clone());
        }
        if !self.verifier_enclave_signer.is_empty() {
            std::env::set_var("VERIFIER_ENCLAVE_SIGNER", self.verifier_enclave_signer.clone());
        }
        if !self.queue_authority.is_empty() {
            std::env::set_var("QUEUE_AUTHORITY", self.queue_authority.clone());
        }
        if !self.function_routine_key.is_empty() {
            std::env::set_var("FUNCTION_ROUTINE_KEY", self.function_routine_key.clone());
        }
        if !self.function_routine_data.is_empty() {
            std::env::set_var("FUNCTION_ROUTINE_DATA", self.function_routine_data.clone());
        }
        if !self.function_request_key.is_empty() {
            std::env::set_var("FUNCTION_REQUEST_KEY", self.function_request_key.clone());
        }
        if !self.function_request_data.is_empty() {
            std::env::set_var("FUNCTION_REQUEST_DATA", self.function_request_data.clone());
        }
        if !self.cluster.is_empty() {
            std::env::set_var("CLUSTER", self.cluster.clone());
        } else {
            std::env::set_var("CLUSTER", "devnet");
        }
        if let Some(minimum_context_slot) = self.minimum_context_slot {
            std::env::set_var("MINIMUM_CONTEXT_SLOT", minimum_context_slot.to_string());
        }

        Ok(())
    }
}
