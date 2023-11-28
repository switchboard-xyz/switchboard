use crate::*;

use ipfs_api_backend_hyper::TryFromUri;
use ipfs_api_backend_hyper::{ IpfsApi, IpfsClient };
use serde::{ Deserialize, Serialize };
use serde_json;

use futures::TryStreamExt;

use std::default::Default;
use std::io::Cursor;
use std::result::Result;

pub struct IpfsManager {
    client: IpfsClient,
}

impl IpfsManager {
    pub fn new(ipfs_url: &str, ipfs_username: &str, ipfs_password: &str) -> Self {
        Self {
            client: IpfsClient::from_str(ipfs_url)
                .unwrap()
                .with_credentials(ipfs_username, ipfs_password),
        }
    }

    pub async fn get_object<T>(&self, cid: &str) -> Result<T, SbError>
        where T: for<'a> Deserialize<'a> + Default
    {
        match
            self.client
                .get(cid)
                .map_ok(|chunk| chunk.to_vec())
                .try_concat().await
        {
            Ok(res) => serde_json::from_slice(&res).map_err(|_| SbError::IpfsParseError),
            Err(e) =>
                Err(SbError::CustomError {
                    message: "Failed to fetch IPFS object".to_string(),
                    source: std::sync::Arc::new(e),
                }),
        }
    }

    pub async fn set_object<T>(&self, my_object: T) -> Result<String, SbError>
        where T: Serialize + Default
    {
        let content = serde_json::to_string(&my_object).map_err(|_| SbError::IpfsParseError)?;
        let content = content.as_bytes().to_vec();
        let cursor = Cursor::new(content);

        match self.client.add(cursor).await {
            Ok(add_result) => Ok(add_result.hash),
            Err(_) => Err(SbError::IpfsNetworkError),
        }
    }
}
