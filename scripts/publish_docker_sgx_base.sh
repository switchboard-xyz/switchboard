#!/bin/bash

source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/utils/docker_utils.sh"

set -eo pipefail

docker_verify_auth
docker_set_builder "sgxbuilder"

# docker buildx build \
#     -t switchboardlabs/sgx-function:beta \
#     --push \
#     -f "$(normalize_project_path docker/Dockerfile.base)" \
#     --cache-to type=registry,ref=switchboardlabs/sgx-function:buildcache \
#     --cache-from type=registry,ref=switchboardlabs/sgx-function:buildcache \
#     "$(normalize_project_path docker)"

docker buildx build \
    -t switchboardlabs/sgx-function \
    --platform "linux/amd64,linux/arm64" \
    --push \
    -f "$(normalize_project_path docker/Dockerfile.sgx-function)" \
    "$(normalize_project_path docker)"