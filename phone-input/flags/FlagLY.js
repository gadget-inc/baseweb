"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagLY;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagLY(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURREREewTKDCvUiAgIO8XLRkZGfMcMTK1Vi6pTyyiTOoPJecMIiQkJCYmJvj4+IqKisLCwurq6k9PT/pbQUsAAAFlSURBVEjH3ZDbkoMgDIYjQuWgqH3/h10CBBDE7g4XndkvmMOfBKaF1xjw9X3emsMFnxWx1rwBD3g55VS9crfyBPAxhvcnPuGJXIoefoiHQUhSO+BVXpx6kKf9Fl3FDqAnjcd92XSQohqZpkJMOWiaNv5o8vmOiLnNwbjCGO+xYeI9SaSO1rmKGh4wfo5cg74tswpmDNi2bd3WhCsSqGNNcStmqYZ1DJjHCPurPy37Yc93pxd2Ht8/rN23T++Lnond2gNnMO8NgeiCz7/dLeeOF3R42BentTP6M9731/38vnh4H5o7qHa/f/cFJGt3g7uQavz/5yiIm8EkCEg3ibKxH+fxbgaz/QOWMb6/z2LGSkNXxKXRwhpbgBG+UWUhLk07A2yMsC/vWvKhyvsSYZJgmLNKbCrGqIbYuQ5f6ypnpQxyDFDy9xYC5d6Djyq48gta3FAqq7QQPKgL5eZFluoeUGOM7v8AdIc/KHcXFyUAAAAASUVORK5CYII=",
    alt: "LY"
  }, props));
}