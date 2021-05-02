"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OPTION_LIST_SIZE = exports.KEY_STRINGS = exports.STATE_CHANGE_TYPES = void 0;

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var STATE_CHANGE_TYPES = {
  click: 'click',
  moveUp: 'moveUp',
  moveDown: 'moveDown',
  mouseEnter: 'mouseEnter',
  mouseLeave: 'mouseLeave',
  focus: 'focus',
  reset: 'reset',
  character: 'character',
  enter: 'enter'
};
exports.STATE_CHANGE_TYPES = STATE_CHANGE_TYPES;
var KEY_STRINGS = {
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight',
  Enter: 'Enter',
  Space: ' ',
  Escape: 'Escape',
  Backspace: 'Backspace',
  Home: 'Home',
  End: 'End'
};
exports.KEY_STRINGS = KEY_STRINGS;
var OPTION_LIST_SIZE = {
  default: 'default',
  compact: 'compact'
};
exports.OPTION_LIST_SIZE = OPTION_LIST_SIZE;