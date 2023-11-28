use crate::SbError;

use std::{fs, sync::Arc};

/// Return the unix timestamp in seconds.
pub fn unix_timestamp() -> i64 {
    std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .unwrap_or_default()
        .as_secs()
        .try_into()
        .unwrap_or(0)
}

/// Read a file to a string and trim any leading or trailing whitespace.
pub fn read_and_trim_file(file_path: &str) -> Result<String, SbError> {
    // Check if the file exists
    if !std::path::Path::new(file_path).exists() {
        return Err(SbError::CustomError {
            message: "File not found".to_string(),
            source: Arc::new(std::io::Error::new(
                std::io::ErrorKind::NotFound,
                format!("File not found: {}", file_path),
            )),
        });
    }

    // Read the file to a String
    let content = fs::read_to_string(file_path).map_err(|e| SbError::CustomError {
        message: "Failed to read file".to_string(),
        source: Arc::new(e),
    })?;

    // Trim the content and return it
    Ok(content.trim().to_string())
}
