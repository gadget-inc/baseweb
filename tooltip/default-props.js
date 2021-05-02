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
  accessibilityType: _constants.ACCESSIBILITY_TYPE.tooltip,
  focusLock: false,
  autoFocus: false,
  returnFocus: false,
  onMouseEnterDelay: 200,
  onMouseLeaveDelay: 200,
  overrides: {},
  placement: _constants.PLACEMENT.auto,
  popoverMargin: 0,
  showArrow: false,
  triggerType: _constants.TRIGGER_TYPE.hover,
  renderAll: false
};
var _default = baseDefaultProps;
exports.default = _default;