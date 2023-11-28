pub use switchboard_common::error::SbError;

pub fn handle_reqwest_err(e: reqwest::Error) -> SbError {
    let status = e.status().unwrap_or(reqwest::StatusCode::default());
    SbError::CustomError {
        message: format!(
            "reqwest_error: code = {}, message = {}",
            status,
            status.canonical_reason().unwrap_or("Unknown")
        ),
        source: std::sync::Arc::new(e),
    }
}
