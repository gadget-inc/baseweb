"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagSM;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagSM(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURWa65m3A6/Pz83PF7/v7+/7+/nnK9Pf390diRtifPlaEf2WjtODg2bKuiOfQquG7emAbwykAAAGzSURBVDjLzYy/SsNQFMZP3iChII4lS0Z7uRAQlw4pWTvEvRDI0CKUUsheQS7tE2QQhYL0Hdy6OXRycnVzdXPzO+embVJt1M0v9/z7zi+HLpvVp78Cvd4h0EugHnIUca53SdKliJVwJMmXLor6Fjiu7s9Ank/5RdM4ntqIOEovGhNMOIDyPOaEBbBcPFRckAOxJfiC9DE/NPGY8q2m5QVpuZd/KsD3AhDkExsBSo6GFewBf+IHNiYofhCg+tKx47cpwBQwgoozvmzLGX6bhGPJzv94l59LhC/4NZ0Vd3XjEHgqinUj8FYUrw3AZs3AZn0UMDMGzKwGZBWZ6/Oi0OamYg1qwGpxVdyOzMNxYJ69PA8bgFOzzNKVOakBYUUXZp4NzSKrWB0KUyiUnOqVSYdmqWFo6+kBpTrEpznCcHSv1WPIVoqPnQ7pnVJdF1O6CnyrCqA4lG5V10q71NpJqVZLSy7loe2Qp/B5khUaxb51hHFJNltX7Vg4ArnkNes3gOO5rufIQ/IkoUd1WYRw7NrhameMyFKJq0PkOrIi1862oBLxcvsEE8sha3CVRiTT3i/zP9AnMT1F6K42jZ4AAAAASUVORK5CYII=",
    alt: "SM"
  }, props));
}