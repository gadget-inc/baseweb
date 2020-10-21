"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagHR;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagHR(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURRogmf4PHR4lqfb29vr6+v8ZJv8dKhwjov7+/v4UIvPz84sWWIpSfIpRe9QaN8QyT1tgvsfI4/9WYP7GypxQYU0AAAGnSURBVEjH1ZPbkoQgDESDigyOc3P//183F4hBydRuzctuY3VC6IMvCvNngj/JxzhH9FJ50pkxH4tmXtzEPSc7XSZWksr/SPNpUvlMT27PeKY1H1HOQ2bRhlwaqbFXa5yDWCDrWE87akkzh/yZfP7ePqHOg+lzgBCCjAJ3UlGP9XG/3tV1bjPYQQjmoFRa67per1f1Mq+hXFYwfKv1djvwXbn8jXl1l7942mY0/MLJNzfl8l+z4eevN/xU+4meqXRbw297pM3ChEV0KWuqI4TVNXPIwkV35kiClr/sB03WvN/cLwV/V/IYe+8vLUyOBLPeFYwTLTKu2iODlUn2MidxbhIQSi2rihmsu8v95hbZA9exeHsR/l/s0ZyPJkUtyMVdVT6PboTf78nyi8svKgqhcSUMG/JFrlj0TDPEcytnjQKRwi/4n+sr2rrA4igwY70rGBy9GvjlxVz+2fDPX/PD86X8y8Xf8KyEqzQOT4lkn6FO0PZ2GLqZBCnVcS1lktrJaSc9pM/0MQ+pv6SU7niy7zwcmsibPW9bpbZLp9mJOl3RH3Zj/1vfLDw2lWfZ7owAAAAASUVORK5CYII=",
    alt: "HR"
  }, props));
}