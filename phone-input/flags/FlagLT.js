"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagLT;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagLT(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURf7BRP28N9MyOwxuSMsuNw12TcMrMw99UhCCVVXXS3EAAAEaSURBVDjL5YyxasUwDEWVP4j/oBR/wAPjPQSjOWBM1jcYz1lCMnZLP7uS7Lih7yVdSin0YEv3StcG+A+0oFrVtBXScnYUQO6NUnXZVscFFNMoeiy9OpL8kAJ5WLby8Ej54ZxfCbxf8/Y1sD4Elues67Zxn2DZsuLhssldDn46+2GnBMZxLANWu2E9QRDGUJnDUQ9Au7nMWc05nRvVAcI1A3giBEvaCyStZW/FDiDdeGOMLxhr2XvL3MAwNPHWFHwp0kvgnJ8IvF7z8icCTuu+1zrXXX3qDrTrHd9cXVYktBZDP2T6w61QpgN3TQeRKspxLGtB2WMHiBhjooNy+cSIxcR4B0x1l1KOICnMigKpQoOisKp0DDzl+8AHJgoxopyy+xoAAAAASUVORK5CYII=",
    alt: "LT"
  }, props));
}