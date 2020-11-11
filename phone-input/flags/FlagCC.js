"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagCC;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagCC(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURRyBEiCOFCGVFR6HE/7gO7XFLtnSND2XGWOlIH2wJF400boAAAHdSURBVDjL1ZHNbhNBEIRb2hfwzChY3Lwr8Xeb0RzIA/QuyRGx+A7afYAAAuVICArXgKXwuFR1x7EThdxT9vx01ddtey3dw1rJowFeTcPvh4AXo2r/6XYwr7dA23bPFfoYYxdRcMc29i3LdiUxtpv+7OV43HXBLNfYdyAigbab3rTtl8H8SARBnNdtDKgXglP7s7BR1kSCX6JrIaEN+AbfVMmjsEbfuVaChkn1mQ7BZBl2vrkWgnKjutFjDjTbOFwiL/iIEA74M99a8HOav3tiig4s+aBOaHzV4e+vm/jJ+w8OhKfTcMlzqXoZdjrAWAdCSd6iR+FeAHGCwrl9kxTmtXn+EZYknzDqSSkFZ+9eCWkhBePhpoRtGgKLOva0QJbiExiyQ4dkwbwml2raApUI1jTYLATMCpMsbCm11FpLGfUzD9TIlhewS5ZKmZPqub4rRDmiHh6xDRM4zaia8Bwcxz0dXtREoO7p9aR/PL/htkDx2v6LHVLvTqgV/+aPW8ZdAGruA5pcc/bV1OxMtguABiLhvTCbbB4P+MKYjY0IBmQnvckicwG6k/dkFNoaL7AJdy7BfnV6fYc4nKdVthrJ0yAmtglf2WyOcXrsWTWyU967wt9O+K+uTqWRR6N/w+e2d4PBSt0AAAAASUVORK5CYII=",
    alt: "CC"
  }, props));
}