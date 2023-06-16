use crate::task::json::json_parse_task;
use reqwest;
use serde_json::Value;
use switchboard_common::error::Error;

pub async fn http_task(url: &str, path: Option<&str>) -> Result<Value, Error> {
    let response = reqwest::get(url).await?.error_for_status()?;

    // Get the response text as a string
    let text = response.text().await?;

    // Parse the string into a serde_json Value
    let value = serde_json::from_str::<Value>(&text).unwrap_or(Value::String(text));

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
