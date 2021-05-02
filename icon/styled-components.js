"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSvgStyles = getSvgStyles;
exports.Svg = void 0;

var _index = require("../styles/index.js");

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
function getSvgStyles(_ref) {
  var $theme = _ref.$theme,
      $size = _ref.$size,
      $color = _ref.$color;
  var size = $theme.sizing.scale600;

  if ($size) {
    if ($theme.sizing[$size]) {
      size = $theme.sizing[$size];
    } else if (typeof $size === 'number') {
      size = "".concat($size, "px");
    } else {
      size = $size;
    }
  }

  var color = 'currentColor';

  if ($color) {
    if ($theme.colors[$color]) {
      color = $theme.colors[$color];
    } else {
      color = $color;
    }
  }

  return {
    display: 'inline-block',
    fill: color,
    color: color,
    height: size,
    width: size
  };
}

var Svg = (0, _index.styled)('svg', getSvgStyles);
exports.Svg = Svg;
Svg.displayName = "Svg";