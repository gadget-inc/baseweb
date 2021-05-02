"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _responsiveHelpers = require("../../helpers/responsive-helpers.js");

var _breakpoints = _interopRequireDefault(require("./breakpoints.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var mediaQuery = {
  small: (0, _responsiveHelpers.getMediaQuery)(_breakpoints.default.small),
  medium: (0, _responsiveHelpers.getMediaQuery)(_breakpoints.default.medium),
  large: (0, _responsiveHelpers.getMediaQuery)(_breakpoints.default.large)
};
var _default = mediaQuery;
exports.default = _default;