"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagBB;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagBB(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURQQsggUviwYyk//HQP/LSwc1mhkZGI1xMFdIJcmgPN//lgMAAAGsSURBVDjL3Y5NTiMxEIXL4gJ2JweIrfQJygrM2pZgiVrkBD1yZ08UDgBqzZ4IOC6vyvnpaEDsefJf1fvqddP6pId80rl5T78DaA/quimAeq3tBXV4desO1/IMoNSZrlsgIdSynQDVrQnwg+wwBUIQF0e4Jzit7DZMAQxAQBak71bKywQscQCcdAEc9R/wtv8BGJ+/ABofGhzLlNJtGXJMOWinAt5LIR1JWJUScXk00IEsybh3vkFCftrn3Ta/b7NHrcFeEwTGsYzjJu62N+UlyrAMSYLeOJyf592AhNsiCZIhG59w3gnhm3l+6wGkss+Nc9p3Hgny0jWPq79xfIllH2WkEgtyTmhBZrzqeXxOJUatdcs/uINm6W6Ipb/eMLuTLJ3fs/in/CubceD0DZB4V6DH9F0Cp2v4A18mWJEzzlgk8EfZvEYA6BjZhsgIZ4RBQuLSR2Y++rYmmKqZWKVnJNiaax1ZgiMI6iv4/PQop7YMGXL4BFksqa9klnFEpkMoHKq+xbc0gaMmwLB1lhSSiyqgokqIr6ZRfAJUw9KlpglHmSn3FfBjwm8BPgE1AemwZcpZpwAAAABJRU5ErkJggg==",
    alt: "BB"
  }, props));
}