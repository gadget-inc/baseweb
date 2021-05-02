"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagIR;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagIR(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURdoNGfz8/DW1Ui+oSvT09N0WIe6Nkut5gJXQo4TJlJbRo+BCS/HBw/G8v10P3zsAAAEWSURBVDjL1Y2xTsMwEIb/oc6GFEveYKjIC0TxAhuWTBYWLy4zC7xA+g7lUdgYsvXluP/SRKKoVocKwZfz3e+7/xzcllnjXxi6Mi2ahtU3J2jhOy80/gRrzONuNjUUHStbLXyZcwz3H6UQw92uFHzhvRQtbJn69w2DtS/HBmeDs8xy+it7Uy13K6qGC06IzMFdj9thH21QYpRTI8QQHW9OyuOA1ZYyckk+9wBJQaXM49OI1V5uXNC1IAZFeix9harSF7hEZsPMJzB+axwb+rSJRcMPLmHIz2+lSMib11KkM14ocylDytnkg9DMm1GRYJCQDKFIyTBJMVkFYMxhOhWVnGPqYCZNklm3xEWhrWVGwR8tawl/gy9otgdg5P49YQAAAABJRU5ErkJggg==",
    alt: "IR"
  }, props));
}