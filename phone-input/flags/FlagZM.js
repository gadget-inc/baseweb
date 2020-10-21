"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagZM;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagZM(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURTShG+UtJRkZGeoxKfCGLBEREd8oITGaGS6TFyuLFe1rJSAgIOM1JSQkJLGOJnWYIiYmJhH5wQMAAAGDSURBVEjH7ZLrkoMgDIXVXiB2RN//aZdcCaCr7r/O7ElAg3w5aDsM/7qkdV3lJjUL1/BnVkprvknYI2F5x/9pIha13noBw6zP3U/g4TWhe8AMF9BAkZw3oeXRWfBEX01wWedrwEF5XOMcQso/wGrP9aHbelLju/OqnCtU7cNZnZ5JFodysVs71U5degxlobj8TV/BP1Tbti3bktP+SEPEDZHSRlsbv4i2wucNgkQFXQvOjnf+DMSoaNTaVaf+sUxWu8r4j8q9f9yD69rxC4f/friDhihoR6sfo8SBP2/Wc5dJa8XHIz5WdrVCxU893wK9RtUHG2B0/ic8248Z5bzLiyZt4Hmo9kLDQs2LHA+4p0RVyMKvPG9RkvygrLH/W2KHh84Q/CFoyiThB3wHF5IuwO45p5dE429JBdQdIiBMLaYXwrW/wjTASKvzDcNZZI6qzw8AxReaOk9v0ig8RiZnygG8E/QV6q16qarz92ysG+3xZD+3/L6u+1/mZ4mv9eefb/4BNfk7R9Og7cYAAAAASUVORK5CYII=",
    alt: "ZM"
  }, props));
}