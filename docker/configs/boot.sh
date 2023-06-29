#!/bin/bash

set -euo pipefail

if [ ! -e "/sgx/app" ]; then
    echo "ERROR: function binary not found at /sgx/app"
    exit 1
fi

# Start SGX-enabled application
echo "Starting enclave.."
gramine-sgx /sgx/app