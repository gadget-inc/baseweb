"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagLA;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagLA(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURdkgNgMsbeAlPAUzegY3hM8XLtMbMfv7+/X19eTn7SRMiFl2pK680cPM2c3W5dnd46eoSFsAAAFySURBVDjLtZS/SsRAEMaHLVJfSCcIyz1BwuYBhFhZiI2pr0leIamuschaWF1xQWwEW4VDQYvrrtBXUiycP5e7TYLRw/Njd3bmmx9bfjAelobdAUX2uo6Vhq6U4kJVa6C9Au0cNrYV+j/0NWF5IpjIgc0EeUcTKh43XHtAl4c0y/IsT/M8y9JUbtOl6J3B+bB+ARwP62jvwHJ+8zQEPBRFMb1rAyZJ4jhOqCYncwSK65gNcUPgzsSsU9oX04RxcUMwsTF8Uc8MFI8y4d/GIODoVYCVY7WBuqrKsrKzbwFb2qqy5UUbCILIrE9tyxKhGfZkkEIIuOG9ebOslRjkBCFEUYDyIzz+iwALMbiOgBa8xvmQ91c8iOeHgPuIEB91UFtb2w8ZRCPwXd1f4ge33CJEX3QAf/n+uWgZXaCnfQB/DxAl78ZwAoRcvc4B3eSAajLDdZUTJOwrx/xZnmRIEyQUGfRAkyjbfPA6AZLvECDZ/wbIF+uWL/NstcjXAAAAAElFTkSuQmCC",
    alt: "LA"
  }, props));
}