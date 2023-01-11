let history_buffer = AggregatorHistoryBuffer::new(&ctx.accounts.history_buffer)?;

let timestamp: i64 = Clock::get()?.unix_timestamp - 3600;

let value_at_timestamp: f64 = history_buffer
    .lower_bound(timestamp)
    .unwrap()
    .value
    .try_into()?;

msg!("Result {:?}!", value_at_timestamp);