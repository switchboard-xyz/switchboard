use crate::SbError;
use serde::Deserialize;

fn default_heartbeat_interval() -> i64 {
    30
}
fn default_mode() -> String {
    "default".to_string()
}

#[derive(Deserialize, Debug, Default)]
pub struct QvnEnvironment {
    pub chain: String,
    pub chain_id: String, // will convert to u64 basedon CHAIN
    pub quote_key: String,
    pub rpc_url: String,
    #[serde(default = "default_heartbeat_interval")]
    pub heartbeat_interval: i64,

    #[serde(default = "default_mode")]
    pub mode: String,

    // Required to post a quote for verification
    pub ipfs_url: String,
    pub ipfs_key: String,
    pub ipfs_secret: String,

    #[serde(default)]
    pub queue: String, // optional

    // One of the keypair configs required
    #[serde(default)]
    pub payer_secret: String,
    #[serde(default)]
    pub fs_payer_secret_path: String,
    #[serde(default)]
    pub google_payer_secret_path: String,
    #[serde(default)]
    pub google_application_credentials: String,

    // EVM
    #[serde(default)]
    pub contract_address: String, // evm only
    #[serde(default)]
    pub funding_threshold: String, // evm only
    #[serde(default)]
    pub funding_amount: String, // evm only
}
impl QvnEnvironment {
    pub fn parse() -> Result<Self, SbError> {
        match envy::from_env::<QvnEnvironment>() {
            Ok(env) => Ok(env),
            Err(error) => Err(SbError::CustomMessage(format!(
                "failed to decode environment variables: {}",
                error
            ))),
        }
    }

    pub fn get_payer(&self) -> Result<String, SbError> {
        if !self.payer_secret.is_empty() {
            return Ok(self.payer_secret.clone().trim().to_string());
        }

        if !self.fs_payer_secret_path.is_empty() {
            return crate::utils::read_and_trim_file(&self.fs_payer_secret_path);
        }

        Ok(String::new())
    }
}

impl std::fmt::Display for QvnEnvironment {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "=====Node Environment=====\n")?;
        write!(f, "CHAIN:                    {}\n", self.chain)?;
        write!(f, "RPC_URL:                  {}\n", self.rpc_url)?;

        if self.queue.len() != 0 {
            write!(f, "QUEUE:                    {}\n", self.queue)?;
        }
        write!(f, "QUOTE:                    {}\n", self.quote_key)?;
        write!(
            f,
            "GOOGLE_PAYER_SECRET_PATH: {}\n",
            self.google_payer_secret_path
        )?;
        write!(f, "CONTRACT_ADDRESS:         {}\n", self.contract_address)?;
        write!(f, "CHAIN_ID:                 {}\n", self.chain_id)?;
        write!(f, "FUNDING_THRESHOLD:        {}\n", self.funding_threshold)?;
        write!(f, "FUNDING_AMOUNT:           {}\n", self.funding_amount)?;
        write!(f, "=========================\n")?;
        Ok(())
    }
}
