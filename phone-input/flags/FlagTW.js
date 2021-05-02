"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagTW;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagTW(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURf8CAv8MDP8UFAICngYGr/8qKv8fH/f3+BkZrba24UBAusvL6nUKvQwAAAF9SURBVDjL1Y9NbsIwEEYnN0hyApJFDoAthNg6INRVN2QdRYqvEFGWsCkcoCAugjhdv88O0PATddm+2OPJzPNAJL9juujwLn9HeNvk237hND/3C6vdR7/QNBeh7gilGDA/HppmedznyKeLmhQ8iqLABJNrs2vAaqO1MTNbFGjVlouCYXX8BWHPYWZWW3TQZr+2pWittPaCJqOiNfBAg6CMUf4n1kYpM7JXauxSlFZqfuCfPOzp/hCsF3BLqQk+UxH9TACT5ScEDFOvhNP47DMKletVNrPZVVirbStkoMpcrCo7aIUbo0vPUz4IQ5bppC4+ThimoMKmkaaDpxNgIKD9akKWXhlI2s8vhOSObj+GEMdJu1M8POM4chUyELzF7Y4SNtB1uFocCmpsJFFEDSkXksjVIggtvtwaiTOY3IQHEhd7hOipEEbBvRB2oHFFQizBjSBgjyVGnzLQDQXAEn9FeMtlvM/p4gJeGMRPFVdlPxBP2DmDW4E3+gjlv/AN8O8Fk6YfvggAAAAASUVORK5CYII=",
    alt: "TW"
  }, props));
}