"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagCO;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagCO(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURf7WJf/ZMP7TGtETKNcZLgE7mNwdMgRDpgNAoAZFqgZHrdghMPIAAAEYSURBVDjL1Yw9bsMwDEYZnUC5geETBJAOUECG5iwGNHYQPHdrs2UxqjGb4a1zT1mSsmTFSNTFHfr0w4/Us+FYR8K/EA4rMnNM+QAQi6TnVQUZP8AEgB0ZHICRy1onBMtorsPi8Y9pEq0QoimhgUChnIsS+lY0IFpU2eedQ2qhJQPhPkbKXMmAu8k2t0l4zh7Cd50vmOvc4DLP03RB4oByeqT8Bu9bprv8QCj5RCHU+AjXuhBYcGNwzoUxhqXi5nSFvh8dnrF3FHLFzemMQpU9hKHO6w6CtYP31lrv/WApeSL3L9AhNl9LyLmLQoUomNRi0FtBaa2MpgtvOoqPWoYnMHHII16sqo5EzPiHhIlFqwKjTqDq/C78AGfWTTc2Ct9HAAAAAElFTkSuQmCC",
    alt: "CO"
  }, props));
}