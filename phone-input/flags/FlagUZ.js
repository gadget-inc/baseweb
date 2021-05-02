"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagUZ;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagUZ(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURf39/R65Ovf3+AKiwASoxQCduSC/PPLy8iHEPiLHP4DO3MLl7CAzPEAAAAFsSURBVDjLvY0xa8MwEIUP/YJ48SxEwZAsoZIWdwlVu3QKCFFol3gRGYsXg7NkMh27dis00CFbf2FPkhWXhCoJhD5OT+/uPstwl9YMLgNsJxv0h7GrA0BxcQMbLoS4JeqaCMEVV2iKo5SYAU4+Jr4vW16OudtzXyjBp4Dc9xXvpfh+8kC9Aw4VX9CSa0zB/S2DzcFI+bXSumxl2aJrLaUxzt2Rcg7amOfm0zw2fUncGifpfQoG2+3q/qk1oZy0kdoj0uAv0roE8P+iBxPGGGWE9E6dExImThRwxIgv5tzfNGSg+AX0Y/yG+kD8Q/EF6oGUTgDqqKKo66Zwd0hFwTBTwIDjpigC4rsecvkFGlw2UTWeocNcI7DbDNQvJgJ/6gTgPa2348BrWuuzgeVeWsOy66xdosdj7dB33QKwDcMunm7orV2DTWtxHMirKsty9Kpynu/6PHc+Ar+KbVxYm1XWofkIspSq7AiQXQL4AcnYirvhzpqxAAAAAElFTkSuQmCC",
    alt: "UZ"
  }, props));
}