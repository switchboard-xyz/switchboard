use futures_util::{SinkExt, StreamExt};
use serde_json::Value;
use std::collections::HashMap;
use std::sync::Arc;
use std::time::Duration;
use tokio::sync::Mutex;
use tokio::sync::RwLock;
use tokio_tungstenite::tungstenite::Message;
use tokio_tungstenite::WebSocketStream;
use url::Url;

use crate::json_parse_task;

pub type Filter = String;

#[derive(Clone, Debug)]
pub struct ISubscriptionDefinition {
    pub subscription: String,
    pub filter: String,
    pub max_age_seconds: u64,
}

#[derive(Clone, Debug)]
pub struct SubscriptionDefinition {
    pub id: String,
    pub definition: ISubscriptionDefinition,
}

#[derive(Clone, Debug)]
pub struct CachedWebsocketMessage {
    pub timestamp: i64,
    pub data: Value,
}

pub struct WebSocket {
    pub url: Url,
    pub subscriptions: HashMap<String, ISubscriptionDefinition>,
    pub cache: Arc<Mutex<HashMap<String, CachedWebsocketMessage>>>,
    pub auto_reconnect: bool,
    pub ws_stream: Arc<
        RwLock<Option<WebSocketStream<tokio_tungstenite::MaybeTlsStream<tokio::net::TcpStream>>>>,
    >,
}

impl WebSocket {
    pub fn new(
        url: &str,
        subscriptions: HashMap<String, ISubscriptionDefinition>,
        auto_reconnect: bool,
    ) -> Self {
        WebSocket {
            subscriptions,
            auto_reconnect,
            url: Url::parse(url).unwrap(),
            cache: Arc::new(Mutex::new(HashMap::new())),
            ws_stream: Arc::new(RwLock::new(None)),
        }
    }

    pub async fn start(&mut self) -> Result<(), Box<dyn std::error::Error>> {
        loop {
            let (ws_stream, _) = match tokio_tungstenite::connect_async(&self.url).await {
                Ok(stream) => stream,
                Err(e) => {
                    if self.auto_reconnect {
                        tokio::time::sleep(Duration::from_secs(5)).await;
                        continue;
                    } else {
                        return Err(Box::new(e));
                    }
                }
            };

            // Store the WebSocketStream in the ws_stream field
            {
                let mut stream_write = self.ws_stream.write().await;
                *stream_write = Some(ws_stream);
            }

            // Handle the connection
            self.handle_connection().await;

            // If auto_reconnect is false, break the loop
            if !self.auto_reconnect {
                return Ok(());
            }
        }
    }

    async fn reconnect(&self) {
        for (_, sub_def) in &self.subscriptions {
            let message = Message::Text(sub_def.subscription.clone());
            if let Some(ws_stream) = self.ws_stream.write().await.as_mut() {
                ws_stream
                    .send(message)
                    .await
                    .expect("Error sending subscription message");
            }
        }
    }

    async fn handle_connection(&self) {
        self.reconnect().await;

        if let Some(read) = self.ws_stream.write().await.as_mut() {
            while let Some(message) = read.next().await {
                let message = match message {
                    Ok(msg) => msg,
                    Err(e) => {
                        eprintln!("WebSocket error: {:?}", e);
                        break;
                    }
                };

                if let Message::Text(text) = message {
                    if let Ok(value) = serde_json::from_str::<Value>(&text) {
                        for (id, definition) in &self.subscriptions {
                            let json_path =
                                json_parse_task(value.clone(), definition.filter.as_str())
                                    .unwrap_or(Value::Null);
                            if json_path.is_null() {
                                return;
                            }

                            if json_path.is_array() && json_path.as_array().unwrap().len() == 0 {
                                return;
                            }

                            let mut cache = self.cache.lock().await;
                            cache.insert(
                                id.clone(),
                                CachedWebsocketMessage {
                                    timestamp: 0,
                                    data: value.clone(),
                                },
                            );
                            return;
                        }
                    }
                }
            }
        }
    }

    pub async fn close(&mut self) {
        self.auto_reconnect = false;

        if let Some(ws_stream) = self.ws_stream.write().await.as_mut() {
            ws_stream.close(None).await.unwrap_or_else(|e| {
                eprintln!("Error sending close message: {:?}", e);
            });
        }
    }

    async fn send_subscription(&self, sub_def: &ISubscriptionDefinition) {
        let message = Message::Text(sub_def.subscription.clone());

        if let Some(ws_stream) = self.ws_stream.write().await.as_mut() {
            ws_stream
                .send(message)
                .await
                .expect("Error sending subscription message");
        }
    }

    pub async fn add_subscription(&mut self, sub_def: ISubscriptionDefinition) {
        self.subscriptions
            .insert(sub_def.subscription.clone(), sub_def.clone());
        self.send_subscription(&sub_def).await;
    }

    pub async fn get_cached_value(&self, id: String) -> Option<Value> {
        let cache = self.cache.lock().await;
        let value = cache.get(&id).cloned();
        if value.is_none() {
            return None;
        }
        Some(value.unwrap().data)
    }
}

// #[cfg(test)]
// mod tests {
//     use super::*;
//     use crate::error::Error;
//     use futures_util::{SinkExt, StreamExt};
//     use serde_json::Value;
//     use std::str::FromStr;
//     use tokio::net::TcpListener;
//     use tokio_tungstenite::accept_async;

//     const WS_SERVER_URL: &str = "ws://localhost:12345";

//     const json_string: &str = r#"{"symbol":"SOLUSDT","price":"25.36000000"}"#;

//     #[tokio::test]
//     async fn test_websocket() {
//         // Start a WebSocket server
//         tokio::spawn(async move {
//             let listener = TcpListener::bind("127.0.0.1:12345").await.unwrap();
//             let (stream, _) = listener.accept().await.unwrap();
//             let mut ws = accept_async(stream).await.unwrap();
//             let mut is_subscribed = false;

//             while let Some(Ok(message)) = ws.next().await {
//                 if message.is_text() {
//                     let text = message.to_text().unwrap();
//                     if let Ok(json_value) = serde_json::from_str::<Value>(&text) {
//                         // Check for the subscription JSON object
//                         if json_value["ticket"].is_string() {
//                             is_subscribed = true;
//                             ws.send(tokio_tungstenite::tungstenite::Message::text("Subscribed"))
//                                 .await
//                                 .unwrap();
//                         }
//                     }
//                 }

//                 if is_subscribed {
//                     // Send the static value 8 to the client every 100 ms
//                     ws.send(tokio_tungstenite::tungstenite::Message::text("8"))
//                         .await
//                         .unwrap();
//                     tokio::time::sleep(Duration::from_millis(100)).await;
//                 }
//             }
//         });

//         // Wait for the server to start
//         tokio::time::sleep(Duration::from_secs(1)).await;

//         let sol_subscription = r#"{"symbol": "SOLUSDT"}"#.to_string();
//         let mut subscriptions = HashMap::new();
//         subscriptions.insert(
//             "SOL".to_string(),
//             ISubscriptionDefinition {
//                 subscription: sol_subscription,
//                 filter: "$.price".to_string(),
//                 max_age_seconds: 30,
//             },
//         );
//         let websocket = WebSocket::new(WS_SERVER_URL, subscriptions, false).unwrap();
//         let start_websocket_result = websocket.run().await;
//         assert!(start_websocket_result.is_ok());

//         let (ws_stream, _) = tokio_tungstenite::connect_async(&websocket.url)
//             .await
//             .unwrap();
//         let (mut write, read) = ws_stream.split();

//         // Wait 1 seconds after sending the subscription
//         tokio::time::sleep(Duration::from_secs(1)).await;

//         // Read the cache and assert it is 8
//         let cached_value = websocket.get_cached_value("SOL".to_string()).await.unwrap();
//         assert_eq!(cached_value, Value::String("8".to_string()));
//     }
// }
