"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagSV;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagSV(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURRVMsPz8/BdPthhSu/T09BlUvxpWwhtXwzVsMhtXxKK6oePl01eGVPnLNIGif/nad4unq04AAAFCSURBVDjL7ZOxSsRAEECHfMEtbHWHsCQ/IAn2N7CVd8LBkdQ2l9pO8gdLcoVduNJOtLpeCzs/QgvhivsG5cCZTfYSFVcEK/GxMzs7+3a6hfp8T1HUdb8qitXqAnI/p5B2ZNli4XZXzyBLvcy6CUfp3JXzNqyQ+Dn8XgiZKEqSOI6iLlxPQcRYK4z7wQ7RTvgaBSoMVFvvI7DJ9kmgwgYEANDsCjipAKgPPexN47nGryD8DH4oSDGi8AjT9YG4RY+wvTzBq+cPghQoeTgKOTL3d+uHytaCB6EcgESUUmpOODTV7tWUAlFzaIoBUELkk9Ty2JS7F1NqfsGL0hi0RKqa89Asnx5JIPgFvyWhPdLSE8NUdja/IlrBWVsWNrpHXyCmdL/UHoFHbLzC5PpGe4VPjKHu/VT60++qIs/P/n/3X/rdb/P+I/ei3zGpAAAAAElFTkSuQmCC",
    alt: "SV"
  }, props));
}