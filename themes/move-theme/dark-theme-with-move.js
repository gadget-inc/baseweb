"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DarkThemeMove = void 0;

var _deepMerge = _interopRequireDefault(require("../../utils/deep-merge.js"));

var _darkTheme = require("../dark-theme/dark-theme.js");

var _typography = require("./typography.js");

var _typography2 = _interopRequireDefault(require("../shared/typography.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var DarkThemeMove = (0, _deepMerge.default)({}, _darkTheme.DarkTheme, {
  name: 'dark-theme-with-move',
  // For the move theme we need to override typography values
  // in the default darkTheme with a font values that reference
  // our custom font family. In addition to it we want to replace some
  // of the fonts with an additional secondary font that specified
  // in `moveTypography`. For it we'll get the typography value built
  // with a custom font using `getTypography` helper and extend the result
  // value with the customized set of fonts that reference a secondary font
  typography: (0, _deepMerge.default)((0, _typography2.default)(_typography.fontTokens), _typography.typography)
});
exports.DarkThemeMove = DarkThemeMove;