"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagSZ;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagSZ(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURbYODUNkwsQSEckUE80VFP/bAUFjv0VnxUdqyb0QDz9guz9hvff39xcXF//fHv/eHf/fICcfH+/l5cs9PD5fu40UE+nJyc+nplg3N39/f4yMjNlubWfH0UcAAAGGSURBVEjH7ZbrjoMgEIVH6WpRvICtWvv+77kz3BRF242b9E+/mQoM5wxq0kS4ngMitfyaY87juh7480Ou+QsgPwck54AsSbIk0yR2vh4dyzpBc8j2KbMS83gPSkNRFpjlITENFCG34oa5ne9poG3buq0x27dYa6FumrqpPbjQUK2J7Lm1m0Mze5YsdbF+rg6Xc/ynn10Y5ns+pwVmRlqvSGEcpRz7odvueQ+wHdK71DyEEOp52ZPt+a1bykkI3WHPn8bgo/ZW+BuEYWApBl0C0K83aM7cHNBJQRdl/aLvrIX5MP4Nzl7RRXhUF9OubhwTrLWa1FSN4qFf4aoB936e+jCZotOghKomsbiH3mu0nAA7crtDJdeAzh+C871GyylgYXTc/R1U8+vT9i3AY0XfYPH6+o6/6QfwDUY8FgNz2EqBpNwH6AK56RmM3zw6tujsnteAnc/MVT3qDoM+Xj1tkc9ae2ZYX7bDDlL2qsf/X1ANNYf8Qfoxfs7xcf/3++f7/XPi++cX8w1M+KG/FuEAAAAASUVORK5CYII=",
    alt: "SZ"
  }, props));
}