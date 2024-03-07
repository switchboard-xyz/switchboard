use futures::stream::TryStreamExt;
use ipfs_api::TryFromUri;
use ipfs_api::{IpfsApi, IpfsClient};
use serde::{Deserialize, Serialize};
use serde_json;
use std::default::Default;
use std::io::Cursor;
use std::result::Result;
use crate::SbError;
use tokio::runtime::Handle;
use tokio::sync::mpsc;
use tokio;

pub struct IpfsManager {
    client: IpfsClient,
}

impl IpfsManager {

    pub fn from_env() -> Result<Self, SbError> {
        let ipfs_url = std::env::var("IPFS_URL")
            .or(Err(SbError::EnvVariableMissing("IPFS_URL".to_string())))?;
        let ipfs_username = std::env::var("IPFS_USERNAME").or(Err(SbError::EnvVariableMissing(
            "IPFS_USERNAME".to_string(),
        )))?;
        let ipfs_password = std::env::var("IPFS_PASSWORD").or(Err(SbError::EnvVariableMissing(
            "IPFS_PASSWORD".to_string(),
        )))?;
        Ok(Self::new(&ipfs_url, &ipfs_username, &ipfs_password))
    }

    pub fn new(ipfs_url: &str, ipfs_key: &str, ipfs_secret: &str) -> Self {
        Self {
            client: IpfsClient::from_str(ipfs_url)
                .unwrap()
                .with_credentials(ipfs_key, ipfs_secret),
        }
    }

    pub async fn get_bytes(&self, cid: String) -> Result<Vec<u8>, SbError> {
        let handle = Handle::current();

        let client = self.client.clone();
        let res: Vec<u8> = handle
            .spawn_blocking(move || {
                let handle = Handle::current();
                handle.block_on(client.cat(&cid).map_ok(|chunk| chunk.to_vec()).try_concat())
            })
            .await
            .map_err(|join_error| {
                println!("IPFS get_object JoinError: {:?}", join_error);
                SbError::IpfsNetworkError
            })?
            .map_err(|e| {
                println!("IPFS get_object Error: {:?}", e);
                SbError::IpfsNetworkError
            })?;

        Ok(res)
    }

    pub async fn get_object<T>(&self, cid: String) -> Result<T, SbError>
    where
        T: for<'a> Deserialize<'a> + Default,
    {
        let bytes: Vec<u8> = self.get_bytes(cid).await?;

        match serde_json::from_slice(&bytes) {
            Ok(res) => Ok(res),
            Err(e) => {
                println!("IPFS serde_json Error: {:#?}", e);
                Err(SbError::IpfsParseError)
            }
        }
    }

    pub async fn set_object<T>(&self, my_object: T) -> Result<String, SbError>
    where
        T: Serialize + Default,
    {
        let content = serde_json::to_string(&my_object).map_err(|_| SbError::IpfsParseError)?;
        let content = content.as_bytes().to_vec();
        let cursor = Cursor::new(content);

        let client = self.client.clone();
        let handle = Handle::current();
        let (tx, mut rx) = mpsc::channel(1);
        let _res = handle
            .spawn_blocking(move || {
                let handle = Handle::current();
                handle.block_on(async move {
                    let add_result = client.add(cursor).await.unwrap();
                    tx.send(add_result.hash).await.unwrap();
                });
            })
            .await
            .map_err(|e| {
                println!("IPFS set_object Error: {:?}", e);
                SbError::IpfsNetworkError
            })?;

        let cid = rx.recv().await.unwrap();
        Ok(cid)
    }

    pub async fn set_object_async<T>(&self, my_object: T) -> Result<String, SbError>
    where
        T: Serialize + Default,
    {
        let content = serde_json::to_string(&my_object).map_err(|_| SbError::IpfsParseError)?;
        let content = content.as_bytes().to_vec();
        let cursor = Cursor::new(content);

        let client = self.client.clone();
        let handle = Handle::current();
        let (tx, mut rx) = mpsc::channel(1);
        let _res = handle
            .spawn_blocking(move || {
                let handle = Handle::current();
                handle.block_on(async move {
                    let add_result = client.add(cursor).await.unwrap();
                    tx.send(add_result.hash).await.unwrap();
                });
            })
            .await
            .map_err(|e| {
                println!("IPFS set_object Error: {:?}", e);
                SbError::IpfsNetworkError
            })?;

        let cid = rx.recv().await.unwrap();
        Ok(cid)
    }
}
