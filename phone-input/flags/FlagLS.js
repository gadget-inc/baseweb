"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagLS;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagLS(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURfT09AkurgsxtRQUFBuuVgcrpwUoofz8/BWaShmlUCIiIre3t5WVlefn525ubkBAQCcnJ9FemQwAAAFFSURBVEjHxU/rmoUgCMQ8leCl8/5Pu15Kwb623fzRQDoMjBpMY4C3/WqaVIm05D3h4L9omYM6MDVSHczJ+w0TqDEM+2cJNauY55rrnEOqWDQbLyvjamb9/f/FA//COczLkpS4nHChz7wPfYtnp3PpoLCMYdi/juHGb50d8Qeib3jut+S8I/vY78hvntydH45cG8l7vJ/S/XxAsBxQpMQq3/ew0RY6DY7RUu/VeoqkeSLyrM/m2I3swIasBa11aH2xrXK+Pp+dY6OdtOXeFeB01RX8VyfEP3iGoAvCQ7+l4rc3z7zIuFjnnPX7kGz98Q3+rvkZw+t+/GDcUGSJj6hk1IRUYvpYlkBRyagJWFEkFEKndM0IwDGM+w2WbHGSpCpmIS47r2KXyPtSQgNZScBjRSNPMKyP7Ms1GMOHrnA5AWYMb/t/AFiwNpAwtdkCAAAAAElFTkSuQmCC",
    alt: "LS"
  }, props));
}