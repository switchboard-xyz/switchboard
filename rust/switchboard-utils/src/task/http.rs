use crate::task::json::json_parse_task;
use crate::utils::handle_reqwest_err;
use reqwest;
use serde_json::Value;
use switchboard_common::error::SbError;

pub async fn http_task(url: &str, path: Option<&str>) -> Result<Value, SbError> {
    let response = reqwest::get(url)
        .await
        .map_err(handle_reqwest_err)?
        .error_for_status()
        .map_err(handle_reqwest_err)?;

    // Get the response text as a string
    let text = response.text().await.map_err(handle_reqwest_err)?;

    // Parse the string into a serde_json Value
    let value = serde_json::from_str::<Value>(&text).unwrap_or(Value::String(text.to_string()));

    if let Some(p) = path {
        return json_parse_task(value, p);
    }

    Ok(value)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn test_http_task() {
        // Request a new server from the pool
        let mut server = mockito::Server::new();
        let url = &format!("{}/test", server.url());

        // Create a mock
        let mock = server
            .mock("GET", "/test")
            .with_status(201)
            .with_header("content-type", "text/plain")
            .with_body("Hello, world!")
            .create();

        let response_text = http_task(url, None).await.unwrap();

        assert_eq!(response_text, Value::String("Hello, world!".to_string()));

        // You can use `Mock::assert` to verify that your mock was called
        mock.assert();
    }

    #[tokio::test]
    async fn test_http_task_failure() {
        // Request a new server from the pool
        let mut server = mockito::Server::new();
        let url = &format!("{}/error", server.url());

        // Create a mock
        let mock = server
            .mock("GET", "/error")
            .with_status(404)
            .with_header("content-type", "text/plain")
            .with_body("Not Found")
            .create();

        let result = http_task(url, None).await;

        assert!(result.is_err());

        // You can use `Mock::assert` to verify that your mock was called
        mock.assert();
    }
}
