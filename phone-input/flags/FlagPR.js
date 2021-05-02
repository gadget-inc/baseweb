"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagPR;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagPR(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURfQQERJa9fgcHAxV8/39/fX19fAFBfofH+4CAvn5+Rhe9/Hx8sza+DZy9WWT9qG99zdNz88dNp8sZmI7noeq9NsIFW5IpzeofHoAAAGpSURBVEjHpZQLloMgDEX5iJUg2qrT/S91EgKITucU5UkJAjcEpBHvR5MEPF9tPMDSyMO7kc97UOqhaqh9HvO4B3ynLhXHSkt6qGN/aGE78fBW/ypCydVBmcc9qBvaedpDGw+T7a7qwIMf23iA2X5Td3g78zAZe0V/eNyDDS5MLGytLXqLR4CkR7KJezCFrPkkmwZEwqWciA9OJmdqJWTEARw5YW9+dJUSBAUHUzeljWA91/IMo2Y7yyjqWEWdMuOsA7kL/w80rEJJv1OJvB9J+HGC9dnFUq6jPqyt4vow5vsw+yKGtTZ+vZlwG8yG7WsOmJdTcDDJg+rWDwvynZvxJT96qTp/nj0atznjgrdQNJ+/6FPdp3Yh7NAhfO/w3PHW+eCMqurvr4nYNrRkOHINc23+0GG+Z056TW50fR4SDLBkrDCHdLX5J8KSaY79Sv7RZ3H+2VPPl/xzxs+541v+OdJ4j+pzz1++Pu/k/HGM3bXwSz/0V7Xzz1d/Q5lfhxur7zzGnh0Msf3Jksp5IsVejKc55fxzO1nBsd8W8cvQwj9fQwu//rTgwy+Et0BERu4lDQAAAABJRU5ErkJggg==",
    alt: "PR"
  }, props));
}