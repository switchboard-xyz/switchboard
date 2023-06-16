#[macro_export]
macro_rules! cfg_sgx {
    ($($item:item)*) => {
        $(
            #[cfg(feature = "sgx")]
            #[cfg_attr(doc_cfg, doc(cfg(feature = "sgx")))]
            $item
        )*
    }
}
