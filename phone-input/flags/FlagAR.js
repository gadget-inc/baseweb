"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagAR;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagAR(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURXmv33604oO35Ya65/39/fj4+PLy8vSzLtt6LOq7lu+nLeSSOHWH9j8AAAFOSURBVDjL7VNBTsMwENz8wMkL2vgDKHyAA+acg71SxaUX+8IDIsEdWnqFqn1Bkfgks3ZSkpSmJ8SFkb2zOzu2EktL19O4oosGLVRVGqx7DR3VspxROQGt9bShlBuK+RxczFPdcUqxZpQXRX6CAsdA2IqOmpSJi07J+4YzUKTyPMNGkBhJJIQMulIERWVEGaFWspFnBD3m6EhPRamFasXv+Ou4ncbNyHC3304azG61ej81mGN5vzl8bmzfUJNzzlpjUtwdmubjzZikCGqy1kaPRN40TfP0nFomIt7QwS5eYXhcS9ppA4NbvMDQrPtSTT4yO7Bvb0DhPSRoDEMAvGcXmNtv8MF5Zg81wBC8dBDFGf9iG9KZwIH9kjh2WKTAD/IOksR7RV1SGAAvuR0IY0PYD/unhjGWo+Gt4jo/3dVwgn+YbpCuLkx39T/dfzTdX+4U/fZFQfMoAAAAAElFTkSuQmCC",
    alt: "AR"
  }, props));
}