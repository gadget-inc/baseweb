"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _borders = _interopRequireDefault(require("../shared/borders.js"));

var _deepMerge = _interopRequireDefault(require("../../utils/deep-merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// Override border colors for the dark theme
var borders = (0, _deepMerge.default)({}, _borders.default, {
  border100: {
    borderColor: 'hsla(0, 0%, 100%, 0.04)'
  },
  border200: {
    borderColor: 'hsla(0, 0%, 100%, 0.08)'
  },
  border300: {
    borderColor: 'hsla(0, 0%, 100%, 0.12)'
  },
  border400: {
    borderColor: 'hsla(0, 0%, 100%, 0.16)'
  },
  border500: {
    borderColor: 'hsla(0, 0%, 100%, 0.2)'
  },
  border600: {
    borderColor: 'hsla(0, 0%, 100%, 0.24)'
  }
});
var _default = borders;
exports.default = _default;