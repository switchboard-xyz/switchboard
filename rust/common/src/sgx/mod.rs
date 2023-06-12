use crate::Error;
use getrandom::getrandom;
use sha2::{Digest, Sha256};
use std::fs;

pub struct Gramine;

impl Gramine {
    pub fn generate_quote(user_data: &[u8]) -> std::result::Result<Vec<u8>, Error> {
        match fs::metadata("/dev/attestation/quote") {
            Ok(_) => (),
            Err(_) => return Err(Error::SgxError),
        }
        let mut hasher = Sha256::new();
        hasher.update(user_data);
        let hash_result = &hasher.finalize()[..32];

        let mut data = [0u8; 64];
        data[..32].copy_from_slice(hash_result);

        let user_report_data_path = "/dev/attestation/user_report_data";
        if fs::write(user_report_data_path, &data[..]).is_err() {
            return Err(Error::SgxWriteError);
        }

        fs::read("/dev/attestation/quote").map_err(|_| Error::SgxError)
    }

    pub fn read_rand(buf: &mut [u8]) -> std::result::Result<(), Error> {
        // https://gramine.readthedocs.io/en/latest/devel/features.html#randomness
        getrandom(buf).map_err(|_| Error::SgxError)
    }
}

