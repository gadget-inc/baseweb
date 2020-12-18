"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagBA;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagBA(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURQQqlggxpgYun/j4+Ao1rwcvowkzqv/QQQUsm//NOSpLrMfP52pueG2Dw5Gi1HGJzerAQ8irUDxRi5yOZNKmKsAAAAHISURBVEjHpZIJosIgDERDF4Rav13uf9ffCQFC7WYdFBLII6RAzae6x7F0LG3wTX+Xf3fdG+N4k3/W9ZMrGO7xf3X9d17Bef6mmX+qf9FwkbfoLRq6JnrNdMTb2CzZwAUvaZnYr8BmZuEVpvZdnN1L1AjZXU1H+Q94/ooYty7Rn/MWt8jGiHD+xcZuwZtsG2tYeEVs4xkKpzeyJseDj1ycT/lNr1LnbQBYE3mTbBntq+teYUs7F6f3YYj5IDKf4tSiwZcngKtjt3itKUD89wH/ijez95I3FXDEt6ZlLQbbph0lt0+nwFri2w2BNHhF2GDy6QSygw7d5Fm4RTZ6r/W4yuMVBWv0pfb4aju/64YjvuKWO/FbvKLgVP2az6EUTFY8AHwJkXEu+BiLdaouaVjzUdd4N/3GV9V8mXeFh1fEs+Me71ZNO67CLS6jq1QFOoKwFqA0auEVhbl8iTqG3LGQX8xUgV4/4/GKJB0NN/glIIX0l3jSCEnHkzRv8USCkNhqF9kr/qSCGCcQ95BT9toPRrjEdVw8QeHkicXCV8wVrCFX7FTawccthrmR+VX6U+EVBWvK+b9Qzk/9HR71R3u8wRcafuR77fwD4lI20E9y1ucAAAAASUVORK5CYII=",
    alt: "BA"
  }, props));
}