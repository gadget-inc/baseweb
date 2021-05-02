"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagMC;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagMC(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURdIYLtwcM+YgOP39/fj4+PT09PLy8qTTCSQAAAEmSURBVDjL1U1JkgMhDDM/AF4w5AWpSh6QqqbvfcCc59L8/wkjGcgyh66cpiaiLcuyoOV0jC/5iEA6xXRijY8ndUKLXmKMKbE6zwrD8xJohBRiQDPRKQbz8YsAcG90F2QCLww1Wgx3xBk4xDsB54M3SXY4E64HPBCcE6ydc5y84wjXdjIsKIFtmUeBBWksxBmQEFyh2QnXeJHHwGccHe7lF0Z4qqf+Abgc4/wvAssTrpeHHDjL1YZsZzHCzMSScRa8kAlYfT8LlHnxJtzSeEVPoFvgCO8ESllXlpaiOVOXvGZoazdRs5QRhNAxqGlc0XUTa2o7W6jawPe42PCCGnoC3bgMCy9A1Kp7rbuiAWTKqg1qk9baPtFqa3VHwWqcav1m4Ah/EfgBN+bzTroU15EAAAAASUVORK5CYII=",
    alt: "MC"
  }, props));
}