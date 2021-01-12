#!/bin/bash

SAKULI_LICENSE_KEY=$(cat license.key)

docker run \
    --rm \
    -it \
    -e SAKULI_LICENSE_KEY=${SAKULI_LICENSE_KEY} \
    -e SAKULI_TEST_SUITE=/test-project \
    -v $(pwd)/sakuli:/test-project \
    -p 5901:5901 \
    -p 6901:6901 \
    --shm-size=2GB \
    taconsol/sakuli:latest
