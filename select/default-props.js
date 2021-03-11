"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultFilterOptions = _interopRequireDefault(require("./utils/default-filter-options.js"));

var _constants = require("./constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var defaultProps = {
  'aria-label': null,
  'aria-describedby': null,
  'aria-errormessage': null,
  'aria-labelledby': null,
  autoFocus: false,
  backspaceRemoves: true,
  clearable: true,
  closeOnSelect: true,
  creatable: false,
  deleteRemoves: true,
  disabled: false,
  error: false,
  positive: false,
  escapeClearsValue: true,
  filterOptions: _defaultFilterOptions.default,
  filterOutSelected: true,
  getOptionLabel: null,
  getValueLabel: null,
  isLoading: false,
  labelKey: 'label',
  maxDropdownHeight: '900px',
  multi: false,
  onBlur: function onBlur() {},
  onBlurResetsInput: true,
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onInputChange: function onInputChange() {},
  onCloseResetsInput: true,
  onSelectResetsInput: true,
  onOpen: null,
  onClose: null,
  openOnClick: true,
  startOpen: false,
  options: [],
  overrides: {},
  required: false,
  searchable: true,
  size: _constants.SIZE.default,
  type: _constants.TYPE.select,
  value: [],
  valueKey: 'id'
};
var _default = defaultProps;
exports.default = _default;