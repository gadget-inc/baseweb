"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagCH;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagCH(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURf8GBv8hIf8sLP8TE/r6+vT09P3X1/XLy9GfZVcAAAFXSURBVDjL5Y5BTgMxDEUtRYhtnSDWnYoDTBRxANSECzQj1kjcAHH//m9P6FRCrLqC30kc+z/blcPv2ss/ASI0HXjhttomj3EnUREVCeNjrfV1k+vECTpFXhPiA4C6yaPuhVEnjcr4ZMDIGXaiJquo2oRp5CQAREcs+opLrjomrNoCejMgacZP7VwBGU7mBMQE6Ufd6B0eiJR2kmEbvfXri/XAw4qUjUm191Y7zA4dbQGuWQrZnEtqsHAaqXZMuaCWy8wJ/uytNZzel7a0U7K+ghVwaZe0LAs8zgd2LJRNKIPo7LV2gCfrR53/gQRkVrMhWFFWccKqL9+xmD5/AKhnmleVWwAzVQK+EGYD5ktpLiK4wBUL4TIhrAQmsDX4BAdG7mO4Igg/6s5WeA6KEXIEjxAMWH0arIMT5/G4h/8mYR0p3idkxR8e/fY4iO+iDJT0fFUO8od1BtE8r065EGLKAAAAAElFTkSuQmCC",
    alt: "CH"
  }, props));
}