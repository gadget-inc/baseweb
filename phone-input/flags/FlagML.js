"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagML;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagML(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURf/VRP3SOiW4Q9AYLtccMyi/RirESdwfNizJTOEiOaz00poAAAGQSURBVDjL7Y8xjoMwFETNDcwRguQ+Ej5AJFuiTZCgpsGiTIFk0W0VpdwOcdud+Q4saJVqmy12wD/FvP9M1HPLh9qybPlUfxeY52VaeFbg8RweO2Be0E3TPE93FR7IMAwHwyQlc1cDSzAhdDtDquNqCELtADRxjpwwBPSB2QNS49AQhIDmYIgSGsKa4WBYswPCr4F2D4yxSiHQM6ENndYZW0w0Y4w41UW1bYsytH3fKfSalI4j4nEIcL8B1ncaNfe18tUaMbDt+/aaZSr12o8eqfBzUU2DdRlXrXPUOtOZ9yO2wYx3xQsaGVdsZyS0ZieKZEDJXFlBAshvEeCVGyqdoPcAA8kbIEfFJ/sGrACmbgzmTW7IqfDWSbw/q9qwN3UNA9alzy0Ivs7BUKd9MZDQuRjktQAK7he1KcwJ67wDcc6WzjIXBbmkMSfpqMilk6/ANzDGJMOa0rnSlaUt7VlBX5iiAHFaBTpHY0uPa2BATwO+Ym/gvoxkSDlcgdbywMDwTxwACYhSAPPTsOVl+Ae+AMTzVI2CoGtMAAAAAElFTkSuQmCC",
    alt: "ML"
  }, props));
}