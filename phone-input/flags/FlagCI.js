"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagCI;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagCI(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURRmzbxzBePiPPRelZveJM/7+/veEK/X19feBJfLy8vz8/Pr6+vj4+AxK0JUAAAGfSURBVDjLzY4xboMwGIWNfAF6hchdmgWJGyCLDOmahRlRcgIUKTNyThBxABa4AWTPkByq7znBdVQRVR2qfsL/wPv+Z4uF43XjeHGE4m+Ftm2ZZnPC26bNujbbwJsRuq5tu7bLsm5WmPilsEQyjD3nnDAMPZRx7H0hUciSRaLUcuyRWXxBKZUghbPsh4H7IJziEA1cpqTXowNJIHCCAIJGaDs8AVH4Yo8QCoa9xDZcrieegNu2QbBBJ1rrJFkzOlEZ2W9jvIEROpTW74ixj3ER9g0Cgw0T75frnRP+O4P9ilfYhrvBakoc+qvh6sB/FojgieD4mZBaYe/whZRonqlhX519IedyjpmuKnLeQ/nekIPVmVRnWCICUkRSQsjz1J7io3JIrtLgFUVaIC3y3BP8BuaMC78h+kIUzPEVfoN0oMHxUR2BFWIpsRzLW4MTbLijFsVRTCl+FJodQN40yKWMqXlCua0QkWMTE2tEopwotogszY7XWym+CXWNr942zUMDKijUZWlolOZwnIy7cGswxpSGlIdmTiC1Mc8F85+FT5Es0Dg9MA8mAAAAAElFTkSuQmCC",
    alt: "CI"
  }, props));
}