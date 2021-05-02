"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagIE;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagIE(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURf99Bf+CEAOiSwStUQa3VvPz8/j4+Pv7+/X19f7+/vHx8Vso+vkAAAF3SURBVDjL1Y9BasMwEEWlG9hXkDCULiU3yV6G0AMIQg9g5wQxOoCDb2ByAG98yv4Z2cKBqN22Lxkt8p/+KKJJfD4SZaIQf00I028NYZqmRwjhtXDuI1AyQrwd4PzcAGUvuKapMTjOod/YC7Vzrqkt5ty/FFzNQMsIFAHr6mNGSBz7rrthwF6wtbXO1njFsev7rr3RPDWwgRUWDW2L722/QqwNVHJARvdBAUqJr8SKxKHjkLRSltEoWHDUAgFRNFq6y8pzQ5ugpChRUWQEBKRQzWtBxBgjWDBWk3BPSApJgYDQkKH11nAfr/gdSIEnCM0GGsxpJK6kiCIiaMVqaH26EmxJLhd8mMTacMdBCwqK5SZolLyNCWznV9Cp1vtaVWt68UNK6ZGKPsjNByLvh5FXUEf8LxQZNio/EKStGxhllOICXQ0o8BfSxA7EWjEV0gtyWM+CUUnY2Avxus4LKlEty/LlZ0xGePd+nqOSEZYZFcSSExL/TfgGw6xR+sUX6KMAAAAASUVORK5CYII=",
    alt: "IE"
  }, props));
}