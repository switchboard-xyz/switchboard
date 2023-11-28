use crate::SbError;
use serde::Deserialize;

fn default_heartbeat_interval() -> i64 {
    30
}

#[derive(Deserialize, Debug, Default)]
pub struct FunctionManagerEnvironment {
    pub chain: String,
    #[serde(default)]
    pub chain_id: String, // will convert to u64 basedon CHAIN
    pub quote_key: String,
    pub rpc_url: String,
    #[serde(default = "default_heartbeat_interval")]
    pub heartbeat_interval: i64,

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

    // Does this do anything? We never fetch from private repos
    #[serde(default)]
    pub docker_user: String,
    #[serde(default)]
    pub docker_key: String,

    // EVM
    #[serde(default)]
    pub contract_address: String, // evm only
}
impl FunctionManagerEnvironment {
    pub fn parse() -> Result<Self, SbError> {
        match envy::from_env::<FunctionManagerEnvironment>() {
            Ok(env) => Ok(env),
            Err(error) => Err(SbError::CustomMessage(format!(
                "failed to decode environment variables: {}",
                error
            ))),
        }
    }

    /// Gets the payer secret from the provided environment variables
    /// 1. PAYER_SECRET
    /// 2. FS_PAYER_SECRET_PATH
    /// 3. GOOGLE_PAYER_SECRET_PATH
    /// 4. FS Injection '/pod-data/out'
    pub fn get_payer(&self) -> Result<String, SbError> {
        // Check if PAYER_SECRET was provided
        if !self.payer_secret.is_empty() {
            return Ok(self.payer_secret.clone().trim().to_string());
        }

        if !self.fs_payer_secret_path.is_empty() {
            return crate::utils::read_and_trim_file(&self.fs_payer_secret_path);
        }

        // if !self.google_payer_secret_path.is_empty() {
        //     let google_payer_secret_path = self.google_payer_secret_path.clone();
        //     let mut buf = [0; 512];
        //     let mut payer_len: usize = buf.len();

        //     unsafe {
        //         gsm_get_secret(
        //             google_payer_secret_path.as_ptr(),
        //             google_payer_secret_path.len(),
        //             buf.as_mut_ptr(),
        //             &mut payer_len,
        //         )
        //     };
        //     return Ok(ptr_to_string(buf.as_ptr(), payer_len));
        // }

        Ok(std::fs::read_to_string("/pod-data/out")
            .expect("Error reading fs secret")
            .trim()
            .to_string())

        // Err(Error::CustomMessage(
        //     "Failed to yield payer secret from provided ENV variables".to_string(),
        // ))
    }
}
