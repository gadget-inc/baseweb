"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagSK;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagSK(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURf7+/gpDr/EqNwtFtNkyLNUvKeM5M/r6+vT09N01L/YzQQhAqgc+phNSovBRWvF8ge+YnvHBwZ602/nj5LrJ4tXd63ubzU14uWtAdT5Ii59KZTrvolwAAAInSURBVEjHxZTbgqsgDEXjFagWvNv+/48OIQRQa/WceZgNU4JmZSPiAPyxBHaBwjHMOeTYXd3FyER0o930KC4BKQLHCiBiInyoe2l0uQ6SdE0ctwevSrqPnef8B5LkEj5vMN6S3sBlcog/EMvLkzdE5dnEx8KP7I8hwGgeW5kRC4hYYl8h5YXQj720gCTlqI1//ziqB3GXF4EfYQy8uOsvoGPIPjSHnbjrLwTz2vL6Jl+wFvYf/bkaPQ9Lca7ID+if2xYO5cNO0H+4y5voL9Afq5l/4S2A0gKPQo7++Vc+KyDzYt5BlneFvH92LsiKDHuWTcjTArQ96BphG1t+yiilCLlFiIM/8hrz+cuywnqa+HP/Hd+FD1qKjvbC8032YYSGNUvvHz82g7yUc3Muy9tCxEudkyyTxnNDGVk6eir1D0xu+XzDf/P3mk75aYu0cWwbaFmDlN0H3u7H0B5FdNtGfpVyZGhaJg5HKdf2XJHHDTDEvJ7P5yvYz803vg4y9Maq1/uJer8qepum/qKEr3ub3BFMeuNh6uu7vCswJPxwideg9gWmgE8BV67XiicbXqFq5a7jgufV0euMj1PTHUWdf6LA32G54z8s6zK4D0CF8iqOddJA7WTG8L91NOpSe76sdO/xXqvygi4tX+5bqbu+7zvt4uTGJocDKI+qSOW5VIig/J2gtD7c941WE6dJEkfgVuoXjAF3foqqSq/GZB9Amvgfgup3+gE2XUlnj6A3YQAAAABJRU5ErkJggg==",
    alt: "SK"
  }, props));
}