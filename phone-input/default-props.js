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
var defaultProps = {
  'aria-label': 'Please enter a phone number without the country dial code.',
  'aria-describedby': null,
  'aria-labelledby': null,
  clearable: false,
  focusLock: false,
  country: {
    label: 'United States',
    id: 'US',
    dialCode: '+1'
  },
  disabled: false,
  error: false,
  id: null,
  maxDropdownHeight: _constants.DEFAULT_MAX_DROPDOWN_HEIGHT,
  maxDropdownWidth: _constants.DEFAULT_MAX_DROPDOWN_WIDTH,
  name: null,
  onCountryChange: function onCountryChange() {},
  onTextChange: function onTextChange() {},
  overrides: {},
  positive: false,
  required: false,
  size: _constants.SIZE.default,
  text: ''
};
var _default = defaultProps;
exports.default = _default;