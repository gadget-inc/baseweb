"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagSize = exports.TagVariant = exports.TagKind = void 0;

var _constants = require("./constants.js");

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var TagKind = Object.freeze(_constants.KIND);
exports.TagKind = TagKind;
var TagVariant = Object.freeze(_constants.VARIANT);
exports.TagVariant = TagVariant;
var TagSize = Object.freeze(_constants.SIZE);
exports.TagSize = TagSize;