"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagWS;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagWS(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURdUZL9EXLtkaMs0WLAQwgt4cNAY1jAc5luEdNeMeNvj4+Fl3scrT452uzydPmskCMaIAAAH2SURBVDjLtY7BitRAEIY7eYI0/QJNIHdD3mBo+6LCMBCYB0g6gnqNruPCXgIzN4+ZV8h5GcEFT6IHr6InX2Gewb+qkh3GgbiX/ben6u/+v6qsevuPrvZn+qgeCGyOn+aBD8P3Cej77Xa36/vdbr/v+5sRuB5+j8C77ZluVDNtENNeAC0L/wO1pmkugSbgYJYamJddt153XVlKXSp+bUMI7d3m0IamLku8I0Ypu/VSBQoJCp+HAy51xznFVAGE8PrPN4LeD8TW5ZkYeDP8IoA2zAJ3m9sTkN0Dnj9RBV+5ygcf6hWrzLKM+lJVVYU571E9fFVnZYaYERSrPLKKfj886ynGsnTF89gCwFXOe+fdFzigizRFDqWIU3zCOby7V8cDOrxbcJgSRpINzj0fvqKSX9CzfCVdEeBYL4afYgQ4aQJkwwzw7Hg7D5y0iNPY4lgr/RJIY5ZA1iqrWNbGMTVUO4k4juQiPDGK/iwl0/hJPENLyKpHVzS2KEqg6S2hI8INRSGki44SHWkJkkmaAN6geUtCmHjZS7BKNCZpejyySo9eY0iuYOhEEVvM64RBAmb1IMCwM3Rywy7P0cjnAIzRxuRFnhvKYeFAkAqYRLHBSD7KiGSgME/U+FpAhE7V8BgBBWcFj8FzijoVACPBVHEuI8Cs/g/8BT5cVoTabAGtAAAAAElFTkSuQmCC",
    alt: "WS"
  }, props));
}