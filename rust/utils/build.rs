fn main() {
    let protos_dir = "../../protos";
    let proto_file = "../../protos/job_schemas.proto";

    // Tell cargo to invalidate the built crate whenever the wrapper changes
    println!("cargo:rerun-if-changed={}", proto_file);

    // Compile the protobuf
    prost_build::compile_protos(&[proto_file], &[protos_dir]).unwrap();
}
