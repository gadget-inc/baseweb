"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagCM;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagCM(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURdMTKN4XLQB/Yf7XLf7THv/bPAKGZwSObe+LKuFCK1Q0uvwAAAGESURBVDjL7Y+/SwQxEIVnOq9LCkG7Y4vUJ9mApZAUZ3cQrr9Nka1tYnsigqUHCv65vsn+4E48xN63yy7s++abLD3OedBztnM29A/8CSjngX5IKeUIiBGd28Zt3FB57Ie7PzE450A5B0MpMp9L6Y4MbsqKelTl+wpMxwko/ZROobqWnqONY7AiZ0hyLn2nldKXmpm1c1au6OyGct8LAQQG1h8HMVgYah9XgyEL1jEr9fJUDRaIlcAgfkEyVuB4N5oVi74KYMhzOv4MmAnrg7ZzjoGd5md8ck+kfgY6Ulf4dIuTnDEwExR7dRZA8+z9nk9XmJyywSUAU1iHO7zQ+NZ6PGAYCWN2TIvw9n5Pitp2IlaE1tQNaUd8sSd6JazwQISoBpOSkewULYhowQSDxHoPQ+1SSk1aosUB5QE3HC2AO2pSg1uoJUbHhFDbCoi+SZLlUOInyEsffGgBoBVJ05glHRl8lYQWK5rR0FRgWCPj1RAEmHJiGCMG8xMgw16I3wz/wAR8AVlzP262Yua9AAAAAElFTkSuQmCC",
    alt: "CM"
  }, props));
}