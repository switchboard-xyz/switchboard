use std::convert::TryFrom;

pub fn get_swap_price(
    token_a_amount: u64,
    token_a_decimals: u64,
    token_b_amount: u64,
    token_b_decimals: u64,
    swap_amount: u64,
) -> Result<u64, &'static str> {
    if token_a_decimals < token_b_decimals {
        return Err("Token A has less decimals than token B.");
    }

    let precision_adjustment =
        10u64.pow(u32::try_from(token_a_decimals - token_b_decimals).unwrap());

    if token_a_amount < swap_amount {
        return Err("Insufficient liquidity for this trade.");
    }

    let token_a_amount_after = token_a_amount - swap_amount;
    let k = token_a_amount * (token_b_amount * precision_adjustment); // constant product

    let token_b_balance_after = k / token_a_amount_after; // rearranging formula to solve for y after the swap
    let token_b_amount = (token_b_amount * precision_adjustment) - token_b_balance_after; // amount of token B that got swapped

    Ok(token_b_amount / precision_adjustment)
}

#[cfg(test)]
mod tests {
    use super::*;

    fn test_swap() {}
}
