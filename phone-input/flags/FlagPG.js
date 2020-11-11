"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagPG;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagPG(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURRAQEOzs7Kmpqa8eL9YcMiAfH/7SQeUmPRcXF98iOX0cKEwbIfakP+52PVhYWOZLO7a2tj6hWWkAAAH6SURBVEjHpZOJloMgDEVjCRRc//9vB7IRrO301IeDCrnJI3VgLs87griEe3yM800+LniPjzHc5OOvbVT+Owvb8Z7/wsKR1g98a2MpdD31as99rCk9i48pxfN6Bgs54UdKq3un3ZGvFgTSGKu2bltKaRtTnuvXBKE4OSPVO/Pj5plvbTQHPnRLqs1vvfJ8hoGtOlLX0Zev+NrGcpK4F61u55I/W9jSqM3zucbndtVpejwmWhjb2PjVW3B8Qwlvf49pekTOVduIeo0dWNeNFlF4KV5HJl5e+AyUgKKP0btsAEcTHTP7lwStjWgmlC+8iL5+zjKzzM6ClqFOK/ce+1IdYHB0Q1PGUEMkEgt/wOhx1Pq+vJyC1mYsNrBaOOyZpuq/ad/jvjMgXbSXJbRYZASP7ocXgAL3aZp2M8C8GoozWjSi3SQj1a8fzjTZAaD5z131a0T1UPy9PYr/oX6GDJB9hnAubBrP/1YzXqko/7+W8IK6+mpbb3xltwnx2gJYOAP93S3w5nLNWxVwPsByuZ7GcF0fqjpxOXgfXs8grBXjNLwK9iQ/KcC5jQiSnAPpy4Fzba1B13xdn6f25UqgKfcj0qRtDMZ3ET/Wc6/qMigcxL+p+YdP4uB59D/meMMMojaGV/9fi9sYfuZB2wi/K9zkqY13+PYPAfc0/wFfBDo776edXwAAAABJRU5ErkJggg==",
    alt: "PG"
  }, props));
}