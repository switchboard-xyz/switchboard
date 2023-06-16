#!/bin/bash

source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/utils.sh"

function verify_docker_installed() {
    if ! docker info > /dev/null 2>&1; then
        echo "This script uses docker, and it isn't running - please start docker and try again!"
        exit 1
    fi
}

function docker_verify_auth() {
    verify_docker_installed
    verify_jq_installed

    if ! jq '.auths | length' ~/.docker/config.json > /dev/null 2>&1; then
        read -rp "You are not logged into docker - continue? (Y/n)" answer
        case ${answer:0:1} in
            y|Y )
                echo "Continuing ..."
            ;;
            * )
                echo "User Exited"
                exit 1
            ;;
        esac
    fi
}

# Set the docker buildx builder
function docker_set_builder() {
    docker_builder_name=${1:-sgxbuilder}
    docker buildx create --name "$docker_builder_name" > /dev/null 2>&1 || true;
    docker buildx use "$docker_builder_name"
}

# Read the measurement of an SGX function
function docker_get_img_measurement() {
    docker_img_name=${1:-my_sgx_function}
    DOCKER_BUILDKIT=1 docker build . --tag "$docker_img_name"
    id=$(docker run -it -d --rm "$docker_img_name" bash)
    # docker cp "$id":/app/target target/
    docker cp "$id":/measurement.txt measurement.txt
    docker kill "$id"
    measurement="$(cat measurement.txt)"
    echo "$measurement"
}
