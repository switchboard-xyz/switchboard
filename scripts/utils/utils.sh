#!/bin/bash

Color_Off='\033[0m'  
Red='\033[0;31m'
Green='\033[0;32m'
Blue='\033[0;34m'
Purple='\033[0;35m'

function join_path() {
    local dir="${1%/}"
    local path="${2#/}"
    echo "$dir/$path"
}

function get_project_root() {
    local utils_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
    local scripts_dir="$(dirname "$utils_dir")"
    SWITCHBOARD_SGX_SDK_PROJECT_ROOT="$(dirname "$scripts_dir")"
    echo "$SWITCHBOARD_SGX_SDK_PROJECT_ROOT"
}

function normalize_project_path() {
    local project_path="${1%/}"
    local project_root
    project_root="$(get_project_root)"
    echo "$project_root/$project_path"
}

function detect_package_manager() {
    if [ "$(uname)" == "Darwin" ] && [ -x "$(command -v brew)" ]; then
            echo "brew"
    elif [ -x "$(command -v apt)" ]; then
        echo "apt"
    elif [ -x "$(command -v yum)" ]; then
        echo "yum"
    elif [ -x "$(command -v pacman)" ]; then
        echo "pacman"
    elif [ -x "$(command -v dnf)" ]; then
        echo "dnf"
    elif [ -x "$(command -v apk)" ]; then
        echo "apk"
    else
        echo "Unknown package manager"
    fi
}

function install_dependency() {
    local dep_name="$1"
    if [ -z "$dep_name" ]; then
        echo -e "${Red}Dependency name was not provided to the install_dependency function${Color_Off}"
        return 1
    fi

    local bin_name="${2:-$1}"
    if [ -x "$(command -v "$bin_name")" ]; then
        return 0;
    fi

    local package_manager="apt"
    package_manager="$(detect_package_manager)"
    case $package_manager in
        apt)
            sudo apt-get install -y "$1"
            ;;
        brew)
            brew install "$1"
            ;;
        yum)
            sudo yum install -y "$1"
            ;;
        pacman)
            sudo pacman -S --noconfirm "$1"
            ;;
        dnf)
            sudo dnf install -y "$1"
            ;;
        apk)
            sudo apk add "$1"
            ;;
        *)
            echo "Could not determine package manager"
            return 1
            ;;
    esac
}

function verify_jq_installed() {
    install_dependency "jq"
}