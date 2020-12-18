"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagSA;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagSA(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURQxzPBGJSQtuOQ56QBCERg9/Q/r6+vP09NLk2oK6nKbOuEKaamCpgj+RuCsAAAHRSURBVDjL3YzBahRBEIaLnoN4c2EeoJknaBhGCV52oGc14mFhppNZzTG0qzm7veNZEkRvYlDxKOSQuz6B4GNZf3XvbjYkgXjw4A9d9ddfXxeNbtY9+j8AC9W2rvOcm3R54nI7Ju6j2rLlhD1weCt8PhrHC0jrdAtsHiEWA7ldMym8GGwuXKM18Hj+xM+5Pn37O/kV0ERN/I9X3+zE7x6eWvEpH1PXNJ1rukf++MjayXz36Ew8p6ymmZJz2LuZ937u9r7P/Mvk8c91U0KDFssvx27v3Wf/Onmoc7iAE80sDO7M9YsF9+jjRwGg/fOhD849DyehSt5tAQ8+DfvBHXwNP0PyG6CF+l8f+qXrwxtU8VXlXMVA1bawJde2LfFYlaSohniUTCrWbWIkLKeEsK2kypoXz97HBJILl1Td95vhKqC8JWBQy3LHb2vgMDNywRiD4XQRXrC4enEmEkR8IssyYx6ehC3F1BBJ5Q6bISC6w/slhyajDIuMDK/4A4FhCMCQYSsfQJA8Y2Jwlw98jBEOy5lIUSJp7Q1dltksr9j+pRRprVFXD6PWMVTYK6WKQmul4uNIXZwKiBmlCwWHUccMPR0rihVXxFGBlG9U3Kx/AfwB+K8L/e66hSkAAAAASUVORK5CYII=",
    alt: "SA"
  }, props));
}