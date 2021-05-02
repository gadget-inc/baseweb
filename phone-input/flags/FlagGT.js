"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagGT;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagGT(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURWCs4Vqm3VSh2E+d1UuZ0fb29v7+/vv7+/Ly8mOLQd7FdOLk0IWka6/Cnm/b5O0AAAIaSURBVDjLzY4/i9tAEMVXTa7VCoJbaYVJSiMp4PJAW9wXGLyQpD1/AktVSnEiVwcicumDUpv8gSsNMalTHPkyeTOrk2XfQZoUedKOV/N+88ZKjXpyOUo9qv8DqNZ/S6jW6/VlVVXTdiglQDmrvYD4rncDlgpDHZz56QpMMEqAUBTcJwDBF7f5KH/XOLOqvleoEak1z6lAa/j8zEa/Bi8uLMV3uGhMAU7gUa2UJGm+HyVo7vNhYNAIrOpD8xjY1CtWvToBkgGAv6n5OUlIBmK2gl9LyBRI4Eeip5h1/SdCUDIqVhF8nSQC3H552/dXt1vS3ErYQIIxPJ4YPaf97nvfb/e7TWQM5yYmipUxBiyqmVP3HsDX7h1x00Q4vALyIc9o/wErrrsd8QifyCcYgZFwd/Oy//yq++UTpA2ANzGUzOlb94M2+25L0pG9Q4Lx/+FNd0Ovu49Eg/sAoLuOeAMdmifA9U9yv+kEyFKT4ZaauaOWHLkGAJqplFjhN0vTNM/S5wQLalqHRpqJYpX5O8oSVts6ZrJ88PNY5Tm+cq5L57DAMQY/F6ULJTf5ftE0TYsXiAykPLlQuA30EguIIU7IBwEYBQCma51rD80joPE+Cn8WA1BAeYlXVoialnsgyrI8V+VAFOWFuI4Lm5b9YqFQS1vaIrcX7ShbeFl7rqy1BQi8U8DLr4AHApoA0jokCGyLhwl2Ahwn/FPgD48bToTHkLUoAAAAAElFTkSuQmCC",
    alt: "GT"
  }, props));
}