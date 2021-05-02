"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagPE;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagPE(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURdwaLuQgNf39/fj4+PPz8/Hx8dUMvOUAAAEaSURBVDjL7Y7BbYUwEER3BbnboQPcAXYHmA5w/61kZjfwiRSD/jFSBtkCz9tnJJ75nM+8DoP8A+8Dy5m+IWEt6cGQ5o5hWpac5pywd4CUU7I+9w3fuQIhRI0hRlUYshmWzDO2UWkI7LFN+WIIDPogqooXwciUnYAlqEYehygSorMqE6rDwANMIuItM+UzNmONEHBUhx8AD7nE/sZ8F4MeNQyul9NQuIlPssAdbPk9FAQENhsgpd4Di6LDSgENqzhBBK9uUBlWixv8mAYxA7ehlrWWAqZaz/8TT7B/Ga0rGeuYET1afoyssRD5NSOr6ldcZ18ABHjuDaUadXfFrWF9Ap4Me2so29YDPuq+IXVvWwdozI60O8Dy14AvmtGC/VfCC38AAAAASUVORK5CYII=",
    alt: "PE"
  }, props));
}