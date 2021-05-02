"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagMV;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagMV(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURe8hR9MYOtkZPQ+DPxGNROQdQROWSRSdTfj5+Ovw7UmqcYrGo7zdyXVYQ2EQoPcAAAHYSURBVDjL7Y+xTt0wFIa9RJ0qET/BjcFjJ0eqVJXJVmbLwpcHIHIkxJxM3V1gROheGDtARbeiigfoUN6q/7ETSEXabp363zg55/zf+W/C2H/9XQWzrIBeD0v6UBQgGBj7ahEYsG+RYG3xOwBCgPX28Hl493h2M9WWRCn2sBtH/Zd4NkzN4AsCfOGL9dCFEPq+O47xpgs9degR7vEl3vo1uX3outt4ShwqKHiPDEqw69CnneNN/JarJNgeALQeJyfxPMxE1q8A/cMy0GQ9xMs2KaR2BhiMcH7E76GhnwHTzhIO2ta0TWM28d60JtWNacwT4A5Mnsd43+bKwDdeemmZc84DSKKEUUCQIB0A3CcA72BmwmpOeAIe4sUcwKpfMQntGaMx0LcfT6mqc1vDEUiQwu3VJKXfx3Nd1yAULm2EkBIJwskM1PXbzear1vB04hGAl4QvdpWioVKft1cKTr60EE6smEDQrtZa0fDddvsJMCCShEeASwlZJ9vro+xiQ4yAmAHq7vH6aKqR/RKYazFhEajeLPr7cABUnPOqqgQnfnrmmpeC7zCYQKjl6YiyKktelqnmADh1pGo8uNNymvJyxdKE5510qkxhQoMdlh4vxMcwAv6sfwH8BHFdIebA/johAAAAAElFTkSuQmCC",
    alt: "MV"
  }, props));
}