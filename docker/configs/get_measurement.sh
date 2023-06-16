#!/bin/bash

set -euo pipefail

gramine-manifest /app.manifest.template > /app.manifest

gramine-sgx-gen-private-key

gramine-sgx-sign --manifest /app.manifest --output /app.manifest.sgx | tee /out.txt

cat /out.txt | tail -1 | sed -e "s/^[[:space:]]*//" | xxd -r -p | base64 | tee /measurement.txt