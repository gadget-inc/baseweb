"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagRS;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagRS(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURff39889RRNIgP7+/t5CS9Y/SMg5QfPy8hFDefv7+xVMhxVOixZPjtGjOnGMrtB4PuWqru/i5M9cYuzLzdeAhVRGbShXjJw9Uai91VbISlgAAAHTSURBVEjHxZSLloIgEIYHENA0xeyy7/+kO8OgAVJR7Tn7MTLM5UcTT9B8B/y7XnuvvbHTaxRm/dB0A5ppvAXf6BDFtdDRpEmIGws0L7KgvwO0WAdN96g8dj0gBKfJNrbmEEWFDEgiPeE0Hf0sqkj1pD0SvEeV3hhhBBr740qWJ09kOQFmrTCRPsmz1OyALN70po5cPwX5VKsfUn46RXQ/Qx0w9J6h9+HFKcZd+g2q9UN5DX3CzSxevphbXwUcYlAv5k51szC3QxWJvr/iCZ1Qf8LTut7T3u7+of4wLvhKZzXjvIxxQT6+v/RFnNHGzuGRKGuMgzHkuEFufetaegMZMwKcDT6/OQOMsoZEf0C9PVmFF3Qf6KXX4+9H/Rv3b7dxped3ytHzX32d8zJcydobtAkzvr+TxeNzc/sC3iDVyxFP7mzPOI9Zr7/ayDPZ/S90e0sPcGmryPQtfr+ox++3rdSrFLdYYnGqjlyvLKNq9fh/gR/chuoA1ZgNg43/U/I1AUHFcbRRtGNhrdYACopysgwAtQNCjtcFD6EjxH6xprkEu3Xs43oe7Uvdy9YnO7yJ3Rle6YhSbFGSJhumYHHae8sVKNRpxeUnwIe1F8CXevsX+l+iMj8P93XJ1wAAAABJRU5ErkJggg==",
    alt: "RS"
  }, props));
}