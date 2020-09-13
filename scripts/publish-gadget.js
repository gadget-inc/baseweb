/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// Sets local package.json to current baseui version.

/* eslint-env node */
// @flow

const publishToNpm = require('./publish-to-npm.js');
const result = require('child_process').execSync('git rev-parse --short HEAD', {encoding: 'utf-8'});

publishToNpm({tag: 'alpha', commit: result.trim()});
