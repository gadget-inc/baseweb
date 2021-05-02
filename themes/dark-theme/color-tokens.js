"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.darkColorTokens = void 0;

var _index = require("../../tokens/index.js");

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// color constants
var darkColorTokens = {
  // Primary Palette
  primaryA: _index.colors.gray200,
  primaryB: _index.colors.gray900,
  primary: _index.colors.white,
  primary50: _index.colors.gray50,
  primary100: _index.colors.gray100,
  primary200: _index.colors.gray200,
  primary300: _index.colors.gray300,
  primary400: _index.colors.gray400,
  primary500: _index.colors.gray500,
  primary600: _index.colors.gray600,
  primary700: _index.colors.gray700,
  // Accent Palette
  accent: _index.colors.blue400,
  accent50: _index.colors.blue50,
  accent100: _index.colors.blue100,
  accent200: _index.colors.blue200,
  accent300: _index.colors.blue300,
  accent400: _index.colors.blue400,
  accent500: _index.colors.blue500,
  accent600: _index.colors.blue600,
  accent700: _index.colors.blue700,
  // Negative Palette
  negative: _index.colors.red500,
  negative50: _index.colors.red50,
  negative100: _index.colors.red100,
  negative200: _index.colors.red200,
  negative300: _index.colors.red300,
  negative400: _index.colors.red400,
  negative500: _index.colors.red500,
  negative600: _index.colors.red600,
  negative700: _index.colors.red700,
  // Warning Palette
  warning: _index.colors.yellow500,
  warning50: _index.colors.yellow50,
  warning100: _index.colors.yellow100,
  warning200: _index.colors.yellow200,
  warning300: _index.colors.yellow300,
  warning400: _index.colors.yellow400,
  warning500: _index.colors.yellow500,
  warning600: _index.colors.yellow600,
  warning700: _index.colors.yellow700,
  // Positive Palette
  positive: _index.colors.green400,
  positive50: _index.colors.green50,
  positive100: _index.colors.green100,
  positive200: _index.colors.green200,
  positive300: _index.colors.green300,
  positive400: _index.colors.green400,
  positive500: _index.colors.green500,
  positive600: _index.colors.green600,
  positive700: _index.colors.green700,
  // Monochrome Palette
  white: _index.colors.white,
  black: _index.colors.black,
  mono100: _index.colors.gray300,
  mono200: _index.colors.gray400,
  mono300: _index.colors.gray500,
  mono400: _index.colors.gray600,
  mono500: _index.colors.gray700,
  // mono600 and mono900 are not in official brand tokens atm
  mono600: '#292929',
  mono700: '#1F1F1F',
  mono800: '#141414',
  mono900: '#111111',
  mono1000: _index.colors.black,
  // Rating Palette,
  rating200: _index.colors.yellow200,
  rating400: _index.colors.yellow400
};
exports.darkColorTokens = darkColorTokens;
var _default = darkColorTokens;
exports.default = _default;