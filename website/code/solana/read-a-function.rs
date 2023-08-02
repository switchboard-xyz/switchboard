use switchboard_solana::FunctionAccountData;

#[derive(Accounts)]
pub struct SaveDataInstruction<'info> {
    // ... your required accounts to modify your program's state

    // We use this to derive and verify the functions enclave state
    #[account(
        constraint =
            function.load()?.validate(
              &enclave_signer.to_account_info()
            )?
    )]
    pub function: AccountLoader<'info, FunctionAccountData>,
    pub enclave_signer: Signer<'info>,
}
