"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagBR;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagBR(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURQKgO/3SFgIqewUvhAOkPQSrQQGdOQOnPwSqQAGeOv///yKqOG23LNW/IuzPGLrGID+vMylGdGduVZa/JbaiNIicw09sp83V5u7v7LW/yf3aQP7pjYWPkoWqQkAAAAH6SURBVEjHxZWJkoIwDIbTghwWgYJ47vs/5/ZIr1AUx9nZfzpCab4/AUOBw3eCF2vNoVHjDd/YOCcaH3vQcy1AJvbYI8dA853+mB+78Q1f22Pd1GqQRTEwxgbhpjRGz4HMtVxM1zOtvqtT1p1bPpW7XtcmudUg6i3BxvWmY7G65jN+PLFUp/ETfrbMJGUh5WS95mYvb5OfpsLJOmRLgK3k5yLWeauEFT/2GdwZ9GOOL+tSDTMVMz6uggof6Cx8LPKlkb2GHcPYz0USfsIV1U1lxEAZFDrmcVS6LpdMAaabAhPxPjljzyPKeHAzJr/adxk+alfG7vfrzVkc77oMXshofRCUT9tV6oSX5YoOt0U5yLShU16k3Woq5pwHj6XgaYh4mZ9rXDuouhdzK7efV/nJ/UtuZDxU6RddxC1//6A9QB0gev6TT49SDs/V8zcc5P7/UyDRpVgeIbnLqbOW5gePvoSJU4X+8wzWYJ3sjfj+X/Gh/wF5RMukBnDvH8Hd+4dFh6xEamHOGOD7vwERuf0n3DvuP7BTZdj/eNj/YLdaEOv9dw/WqoETsv+DX8jEZn2S70+rpePXXLux1oL//kVAi/GOcRz1MNfw+xvHxzns+QtVlfr+txXlYwGuVio4REYO8YTE6DmQuVab8cydWz6Vu55Tbg2q7/Tf/C9odDwmIfCheQAAAABJRU5ErkJggg==",
    alt: "BR"
  }, props));
}