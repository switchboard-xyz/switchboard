use anchor_lang::prelude::*;
use std::convert::TryInto;
pub use switchboard_v2::{
    AggregatorAccountData, AggregatorHistoryBuffer, SwitchboardDecimal, SWITCHBOARD_PROGRAM_ID,
};

declare_id!("FnsPs665aBSwJRu2A8wGv6ZT76ipR41kHm4hoA3B1QGh");

#[derive(Accounts)]
#[instruction(params: ReadHistoryParams)]
pub struct ReadHistory<'info> {
    #[account(
        has_one = history_buffer @ ErrorCode::InvalidHistoryBuffer
    )]
    pub aggregator: AccountLoader<'info, AggregatorAccountData>,
    /// CHECK: verified in the aggregator has_one check
    pub history_buffer: AccountInfo<'info>,
}

#[derive(Clone, AnchorSerialize, AnchorDeserialize)]
pub struct ReadHistoryParams {
    pub timestamp: Option<i64>,
}

#[program]
pub mod anchor_history_parser {
    use super::*;

    pub fn read_history(
        ctx: Context<ReadHistory>,
        params: ReadHistoryParams,
    ) -> anchor_lang::Result<()> {
        let history_buffer = AggregatorHistoryBuffer::new(&ctx.accounts.history_buffer)?;

        let timestamp: i64 = Clock::get()?.unix_timestamp - 3600;

        let value_at_timestamp: f64 = history_buffer
            .lower_bound(timestamp)
            .unwrap()
            .value
            .try_into()?;

        msg!("Result {:?}!", value_at_timestamp);

        Ok(())
    }
}

#[error_code]
#[derive(Eq, PartialEq)]
pub enum ErrorCode {
    #[msg("Not a valid Switchboard account")]
    InvalidSwitchboardAccount,
    #[msg("History buffer mismatch")]
    InvalidHistoryBuffer,
}
