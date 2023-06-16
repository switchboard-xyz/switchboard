#!/bin/bash

set -euo pipefail

# if [ ! -e "/opt/intel/sgx-dcap-pccs/pccs_server.js" ]; then
#     echo "ERROR: pccs_server.js file not found"
#     exit 1
# fi

if [ ! -e "/sgx-detect/sgx-detect" ]; then
    echo "ERROR: sgx-detect not found"
    exit 1
fi

if [ ! -e "/sgx/app" ]; then
    echo "ERROR: function binary not found at /sgx/app"
    exit 1
fi

# Start the Intel SGX AESM service in a subshell
# (
#   AESM_PATH=/opt/intel/sgx-aesm-service/aesm LD_LIBRARY_PATH=/opt/intel/sgx-aesm-service/aesm exec /opt/intel/sgx-aesm-service/aesm/aesm_service --no-syslog
# )

# Start SGX Data Center Attestation Primitives Provisioning Certification Server (PCCS)
# /usr/bin/node /opt/intel/sgx-dcap-pccs/pccs_server.js &

# Detect SGX drivers
# cd /sgx-detect
# ./sgx-detect

# Start SGX-enabled application
echo "Starting enclave.."
gramine-sgx /sgx/app