"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ARROW_WIDTH = exports.ANIMATE_IN_TIME = exports.ANIMATE_OUT_TIME = exports.ARROW_SIZE = exports.POPOVER_MARGIN = exports.ACCESSIBILITY_TYPE = exports.STATE_CHANGE_TYPE = exports.TRIGGER_TYPE = exports.PLACEMENT = void 0;

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var PLACEMENT = {
  auto: 'auto',
  topLeft: 'topLeft',
  top: 'top',
  topRight: 'topRight',
  rightTop: 'rightTop',
  right: 'right',
  rightBottom: 'rightBottom',
  bottomRight: 'bottomRight',
  bottom: 'bottom',
  bottomLeft: 'bottomLeft',
  leftBottom: 'leftBottom',
  left: 'left',
  leftTop: 'leftTop'
};
exports.PLACEMENT = PLACEMENT;
var TRIGGER_TYPE = {
  click: 'click',
  hover: 'hover'
};
exports.TRIGGER_TYPE = TRIGGER_TYPE;
var STATE_CHANGE_TYPE = {
  open: 'open',
  close: 'close'
};
exports.STATE_CHANGE_TYPE = STATE_CHANGE_TYPE;
var ACCESSIBILITY_TYPE = {
  none: 'none',
  menu: 'menu',
  tooltip: 'tooltip'
};
exports.ACCESSIBILITY_TYPE = ACCESSIBILITY_TYPE;
var POPOVER_MARGIN = 8;
exports.POPOVER_MARGIN = POPOVER_MARGIN;
var ARROW_SIZE = 6;
exports.ARROW_SIZE = ARROW_SIZE;
var ANIMATE_OUT_TIME = 0;
exports.ANIMATE_OUT_TIME = ANIMATE_OUT_TIME;
var ANIMATE_IN_TIME = 20;
/**
 * Since we use a 45-degree rotated div to render the arrow, the
 * width/height of this div is different than the arrow size itself
 *
 * The arrow size is essentially half the diagonal of the rotated div,
 * using pythagorean theorem:
 *   width^2 + height^2 = (arrow_size * 2)^2
 * In this case width = height so:
 *   2 * width^2 = (arrow_size * 2)^2
 * Simplifies to:
 *   width = √((arrow_size * 2)^2 / 2)
 */

exports.ANIMATE_IN_TIME = ANIMATE_IN_TIME;
var ARROW_WIDTH = Math.ceil(Math.sqrt(Math.pow(ARROW_SIZE * 2, 2) / 2));
exports.ARROW_WIDTH = ARROW_WIDTH;