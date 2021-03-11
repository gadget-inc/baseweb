"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagPA;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagPA(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURfj4+OMjR9kcP9UZPBFkqQtXlt4fQ/Ly8v39/Q5dn9IXOSNur16Tv+qerJW41q/I3uRof+XP2E+y7NAAAAHJSURBVEjH5ZXJdsMgDEXFYMtO8PT/P1tAA+A6xqfdtQ8ihM67DF4QmG5leoI/xp/mZhwNt1HzOjv5t62dq18hyXg48SGceJZpQ1HLo/d4yX9U4Y91XYP3IQ5HxdsOXxYIM8kH0G9pEx9DluQ85hyyjfrmM74Rm2uW/UJYWYvG0cIkLdrXxK8yTyV7IVkpB/YRkm4wBKXjaHsC8mUe4tnjHQCokHQNuTKAuifYAsKEYYOyYvQ4l4w8UihVB2oFwLwlD7S/Sz6SraLTmp51gvooElxPSuopoNo+8a9v3VWxcddfjvJoeb0cN8llmgT3evX0a97fCrpS6/un/LvAnGpveGwyPO//4fwoHeq8rPDo/pnCsj2WUofHys0TLJfBJ+dHOW3si+4r9dl/bLEjlrPHiAZpKmWEb0huMkcxY46LWfRCSEWCUq+XkDxZEMkatY871ksmXhfw/Pzyb6bzCwu7MekRjf95O0Jpcy1/ntTOZaRneJHT0PlvhbWO/H4fhAIPPZ6+HNnzu1luhLr/8Gj/xdnd2qWpQWSHOYerptdMfTcHHvHrNTzB4p9PSbu/Rqh4YZvAyYA9QbYNxJQwc+0Br9yVHvLDv+W/AP+pOCW/sIvcAAAAAElFTkSuQmCC",
    alt: "PA"
  }, props));
}