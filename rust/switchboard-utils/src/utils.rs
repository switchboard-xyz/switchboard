use rust_decimal::Decimal;
use std::cmp::Ordering;
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

pub fn median(mut values: Vec<Decimal>) -> Option<Decimal> {
    if values.is_empty() {
        return None;
    }
    values.sort_by(|a, b| a.partial_cmp(b).unwrap_or(Ordering::Equal));
    let mid = values.len() / 2;
    if values.len() % 2 == 0 {
        Some((values[mid - 1] + values[mid]) / Decimal::TWO)
    } else {
        Some(values[mid])
    }
}
