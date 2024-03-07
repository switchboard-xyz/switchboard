/// Macro used to wrap client-only modules
#[macro_export]
macro_rules! cfg_client {
    ($($item:item)*) => {
        $(
            #[cfg(feature = "client")]
            #[cfg_attr(doc_cfg, doc(cfg(feature = "client")))]
            $item
        )*
    }
}

/// Macro used to wrap exclusively non-client modules
#[macro_export]
macro_rules! cfg_not_client {
    ($($item:item)*) => {
        $(
            #[cfg(not(feature = "client"))]
            #[cfg_attr(doc_cfg, doc(cfg(not(feature = "client"))))]
            $item
        )*
    }
}

/// Macro used to wrap client-only modules
#[macro_export]
macro_rules! cfg_ipfs{
    ($($item:item)*) => {
        $(
            #[cfg(feature = "ipfs")]
            #[cfg_attr(doc_cfg, doc(cfg(feature = "ipfs")))]
            $item
        )*
    }
}

// /// Macro used to wrap solana exclusive modules
// #[macro_export]
// macro_rules! cfg_solana {
//     ($($item:item)*) => {
//         $(
//             #[cfg(feature = "solana")]
//             #[cfg_attr(doc_cfg, doc(cfg(feature = "solana")))]
//             $item
//         )*
//     }
// }

/// Retry a given expression a specified number of times with a delay between each attempt.
///
/// # Arguments
///
/// * `attempts` - The number of attempts to make.
/// * `delay_ms` - The delay in milliseconds between each attempt.
/// * `expr` - The expression to be retried.
///
/// # Returns
///
/// Returns a `Result` containing the value of the expression if it succeeds within the specified number of attempts,
/// or an error if it fails on all attempts.
///
/// # Examples
/// ```
/// use switchboard_common::retry;
///
/// // Retry a blockhash fetch 3 times with a delay of 500ms in between each failure
/// let blockhash = retry!(3, 500, rpc.get_latest_blockhash().await)
///     .await
///     .map_err(|_| SbError::SolanaBlockhashError)?;
/// ```
#[cfg(not(target_os = "solana"))]
#[cfg_attr(doc_cfg, doc(cfg(not(target_os = "solana"))))]
#[macro_export]
macro_rules! retry {
    ($attempts:expr, $delay_ms:expr, $expr:expr) => {{
        async {
            let mut attempts = $attempts;
            loop {
                match $expr {
                    Ok(val) => break Ok(val),
                    Err(_) if attempts > 1 => {
                        attempts -= 1;
                        tokio::time::sleep(tokio::time::Duration::from_millis($delay_ms)).await;
                    }
                    Err(e) => break Err(e),
                }
            }
        }
    }};
}

/// Retry a given expression a specified number of times with a delay between each attempt.
/// This will block the current thread until a value is resolved or the maximum number of attempts is reached.
///
/// # Arguments
///
/// * `attempts` - The number of attempts to make.
/// * `delay_ms` - The delay in milliseconds between each attempt.
/// * `expr` - The expression to be retried.
///
/// # Returns
///
/// Returns a `Result` containing the value of the expression if it succeeds within the specified number of attempts,
/// or an error if it fails on all attempts.
///
/// # Examples
/// ```
/// use switchboard_common::blocking_retry;
///
/// // Retry a blockhash fetch 3 times with a delay of 500ms in between each failure
/// let blockhash = blocking_retry!(3, 500, rpc.get_latest_blockhash())
///     .map_err(|_| SbError::SolanaBlockhashError)?;
/// ```
#[cfg(not(target_os = "solana"))]
#[cfg_attr(doc_cfg, doc(cfg(not(target_os = "solana"))))]
#[macro_export]
macro_rules! blocking_retry {
    ($attempts:expr, $delay_ms:expr, $expr:expr) => {{
        let mut attempts = $attempts;
        loop {
            match $expr {
                Ok(val) => break Ok(val),
                Err(_) if attempts > 1 => {
                    attempts -= 1;
                    std::thread::sleep(tokio::time::Duration::from_millis($delay_ms));
                }
                Err(e) => break Err(e),
            }
        }
    }};
}
