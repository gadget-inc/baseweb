"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagGW;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagGW(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURf3TPf/XS+MnPtEZL9kgNhenURahThisVBmxVhm0WBcWFj0bHx8cHb4fMoUeKhcTX9oAAAG2SURBVDjL5Y4xctswFETBG9BX4KDL2A3RZdQAaONxQ6p1Q9RpOGCZjlKXkroC5aRyJU1uoLiRqiSlqkwOkV2A8lgmlRzAOx//g9r3FxLZC12NlYq3CKQj/xxIkjSBRIqKSsQZkAYfSuONiJCZzoajw7bANjpT+C0yLelrLbNMDHYi4juCP9jgaUhKfHIHPj3Bf4IEK6UeJKYUVq8PkpoGrNT25ig5JwH68t0j9rW9lGDtr+/W4jKdQP15CmMa0Lfb7W633R4vPMH9HcSMVdctl91qCXUd76vVZwLXm75fHwiMFQD7/qF/5MRG1y0W3F8O908B+NH3XzgXY0Xg93rz9Z/A5ni7tuYV0AyAMebDN2N+KqtU27ZN04Z+mkgwdqaUyQ8gvPet98/dN95/FDCxqxCkVDCak92yAOQmp0nQj8UERZ9QPgkgIIet2Ora1/Ucip26EyZX4RW2+bwoivpU4dwhARGMgYqCSF3HCgNAziciUowVgSj1P4AJZVE9V4X2CiiroOiTduU5UJWQA1aG41zl7s8AR4FwUVXlKgL72VC5GwvA/rQ/uwDkMYPgJAAvZKDtp4C/GVJphLY9jl4AAAAASUVORK5CYII=",
    alt: "GW"
  }, props));
}