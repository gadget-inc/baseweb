#!/usr/bin/env bash
set -ex
WORK_DIR="/Users/airhorns/Code/baseweb-hacks-staging"
SHA=$(git rev-parse --short HEAD)
yarn build
rm -rf $WORK_DIR/*
cp -r dist/ $WORK_DIR
cd $WORK_DIR
git add -f .
git commit -m "Build ${SHA}"
git push gadget-inc
echo "Add this sha to package.json: $(git rev-parse HEAD)"
