#!/bin/bash

git submodule update --remote

git add ./sdks

git commit -m "chore(sdks): uprev"