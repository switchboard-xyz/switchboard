pub use anchor_client::anchor_lang::prelude::*;
pub use solana_sdk::instruction::Instruction;
pub use solana_sdk::{pubkey::Pubkey, signature::Keypair};

use anchor_client::anchor_lang::AnchorDeserialize;
use anchor_client::anchor_lang::Event;
use anchor_client::solana_sdk::commitment_config::CommitmentConfig;
use base64;
use base64::{engine::general_purpose, Engine as _};
use num_derive::FromPrimitive;
use oracle::start;
use solana_client::pubsub_client::PubsubClient;
use solana_client::rpc_config::RpcTransactionLogsConfig;
use solana_client::rpc_config::RpcTransactionLogsFilter::Mentions;
use std::future::Future;
use std::sync::Arc;
use tokio::runtime::Runtime;
use tokio::sync::Mutex;

pub async fn subscribe<E, F, T>(
    program_id: Pubkey,
    url: &str,
    client: Arc<Mutex<anchor_client::Client<Arc<Keypair>>>>,
    nodekey: Pubkey,
    keypair: Arc<Keypair>,
    payer: Arc<Keypair>,
    f: F,
) where
    F: Fn(
            Arc<Mutex<anchor_client::Client<Arc<Keypair>>>>,
            Pubkey,
            Arc<Keypair>,
            Arc<Keypair>,
            E,
        ) -> T
        + Send
        + Sync
        + 'static,
    T: Future<Output = ()> + Send + 'static,
    E: Event,
{
    loop {
        let (_handler, r) = PubsubClient::logs_subscribe(
            url,
            Mentions(vec![program_id.to_string()]),
            RpcTransactionLogsConfig {
                commitment: Some(CommitmentConfig::processed()),
            },
        )
        .unwrap();
        loop {
            match r.recv() {
                Ok(y) => {
                    let log: String = y.value.logs.join(" ");
                    for w in log.split(' ') {
                        let decoded = general_purpose::STANDARD.decode(w);
                        if decoded.is_err() {
                            continue;
                        }
                        let decoded = decoded.unwrap();
                        if decoded.len() < 8 {
                            continue;
                        }
                        if decoded[..8] != E::DISCRIMINATOR {
                            continue;
                        }
                        let event = E::try_from_slice(&decoded[8..]);
                        if event.is_ok() {
                            f(
                                client.clone(),
                                nodekey,
                                keypair.clone(),
                                payer.clone(),
                                event.unwrap(),
                            )
                            .await;
                        }
                    }
                }
                Err(_) => {
                    println!("Channel closed. Reopening..");
                    break;
                }
            }
        }
    }
}
