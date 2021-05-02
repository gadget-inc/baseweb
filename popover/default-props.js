"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("./constants.js");

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var baseDefaultProps = {
  accessibilityType: _constants.ACCESSIBILITY_TYPE.menu,
  focusLock: false,
  autoFocus: true,
  returnFocus: true,
  // Remove the `ignoreBoundary` prop in the next major version
  // and have it replaced with the TetherBehavior props overrides
  ignoreBoundary: false,
  overrides: {},
  onMouseEnterDelay: 200,
  onMouseLeaveDelay: 200,
  placement: _constants.PLACEMENT.auto,
  showArrow: false,
  triggerType: _constants.TRIGGER_TYPE.click,
  renderAll: false
};
var _default = baseDefaultProps;
exports.default = _default;