"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagFI;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagFI(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURfz8/ARAl/X19fLy8gI5ixvTF2YAAAD9SURBVDjL7Y7RbcMwDEQJTRAVHICIFjCkBaxG+8/UO1KuG7dQ+1kUPRgMxXs8RuRQhm6y0D/wW4A0AXuaWoIDidlMMLSUcAbX/KNvFoDF6GDCBZtmQpoJsBPBCPFrnvDy/h/o8HgsLnT7IaALQKmce+94dr2KCZ1zpKCovzJZFnQzQXMfz+t8c28XZCsPODWl52NnwtCYsXrXz7rLGPBHVB38pnw4drkfgt9f71fZCTBiDUDfAF8lbFILtEyo/K0lgAqVUHVtEg0GBB6ltYoN2lGNJ5orToBs5LnV0G8CKyI9oTGBhStEHTgTHnA4rsQ8GUD5CNR20aeEPwq8AZIVm7KOWg19AAAAAElFTkSuQmCC",
    alt: "FI"
  }, props));
}