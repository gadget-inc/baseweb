"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagUY;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagUY(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURf7+/vj4+AlDsvLy8gc+qQxJv/vRP/vqrvzgfPvz19exLAdv8j0AAAGnSURBVDjL1U8xbuMwEFyW1y3BwnEnEFJvgkVSGoIfYAjwF2g7nRHA0pVBAMvXxY0TfyDFvfJmSSnJ2YJTpMqQXA1nx7Mm0c8DX0qKGNvQM0e2OMO8c7zSHyVswCD6+PlYr38dSCl1aWDFPF41dbs7MA8aoKrVqT7tQFgPjNB61G52YTVqNsMjmE24CyE8BafgPgMjQfHL8T68rX+DMWsIn0AEYdRukbBsNuDMnYm1LMWElGa5fQv3y20L/h7dURhA+hGpoyVAKFLEAOxvwt/wuNd66E+i3IQHPPM2PIJXVVEsFn21NosJuh3XhyYyW4mcalUtink0mFCf6uCEFgD0QixSU8Loabtf3m1SgpUA9AuphRgM1tGvtRMa09G0sW/tnIzRzplb/YA2qD0DEoxO2zkn5OKZ3hjvnNcOFnA53vfMmAnF4IQ4TPuYJyr6Lib0iC6fVq9NSCZ8mLxMkGEgcgwSrmNC9joyym2JHU9CLrDdN88o9m06aQuPtxIJU8r7X3xKwG0W5XKWUZlILt8yFfnYzpvR7Azl/9fp18/8EYbZdUy/b/gH7UDwJTR80qYAAAAASUVORK5CYII=",
    alt: "UY"
  }, props));
}