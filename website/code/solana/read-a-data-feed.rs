use anchor_lang::prelude::*;
use anchor_lang::solana_program::clock;

use std::convert::TryInto;

// Instruction accounts
#[derive(Accounts)]
#[instruction(params: ReadFeedParams)]
pub struct ReadFeed<'info> {
    pub aggregator: AccountLoader<'info, AggregatorAccountData>,
}

// Instruction params
#[derive(Clone, AnchorSerialize, AnchorDeserialize)]
pub struct ReadFeedParams {
    pub max_confidence_interval: Option<f64>,
}

// Instruction logic
pub fn read_result(
    ctx: Context<ReadResult>
) -> anchor_lang::Result<()> {
    let feed = &ctx.accounts.switchboard_aggregator.load()?;

    // get result
    let val: f64 = feed.get_result()?.try_into()?;

    // check whether the feed has been updated in the last 300 seconds
    feed.check_staleness(clock::Clock::get().unwrap().unix_timestamp, 300)
        .map_err(|_| error!(FeedErrorCode::StaleFeed))?;

    msg!("Current feed result is {}!", val);

    // Your custom logic here

    Ok(())
}

#[error_code]
#[derive(Eq, PartialEq)]
pub enum FeedErrorCode {
    #[msg("Switchboard feed has not been updated in 5 minutes")]
    StaleFeed,
}