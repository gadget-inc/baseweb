"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagMT;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagMT(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURdEbM9ceN/j4+P7+/vT09NwhOvHw8MzMzaagm9HOzLu3s6Kcmn91b3txaj9e4iwAAAHVSURBVDjLvZDBbtNAFEXf/MHMYj7AbwxStxMViV0ysrzGC+8RWJFYI+Eg2MewLFLb9Jf6C3wM972xMandSN1wY08s3zPnTUKbJ7luz/KO/g/w5nS6vQhcDcOPi8DbYz8CMS6BwJ8ejv3P08dNQDZhxXAYjv0wfA6qWBo43vffHvvDrxgDxxBenfUeBgDff/eHmxDiRkZ43zStb1ssTdvMhhsYkHjt0OQbwYgY7/UMABDmovU+S3B5Z6dfcfcBAoai0J1N4518dARf4X9gDswwxKJ1SCMTxGUJVvknGYmyFA6vAXinkRHx9enrFzkgDDEUuWlg8GpgTclTCq0b5yaDzB4jI2LhzjIZZuQywC8F7DOAsePlHFHJiTnJWupXYa11uXTGGDWkhKrEylh3RgoQGSSqqmoqqyqltHOknc2MlRESwcRT7oxGKQWqnJRXGAh79c4QpSwoFcGUrcVcFJDgLESjoZQOp0hpK51sJ0tCkm6rRgPurZEGFOlRJsOcLd4ZuaQkswKYiSCrzJqB8gFypqJD/gHmdLV23RPDnLrbV109Uvu6e79iwGv1CFYvR2AbIqtKFoZ9Dpj8sASwF7cw8rQEpMN7LeVx3VDnKWJ67gx/82LgD+bcFYIH5S+4AAAAAElFTkSuQmCC",
    alt: "MT"
  }, props));
}