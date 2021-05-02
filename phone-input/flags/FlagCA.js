"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagCA;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagCA(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURf39/f8PD/Py8v8ZGf8FBf8hIf8pKfj4+P8vL/uJif1gYPq8vM2CApsAAAIqSURBVDjL1ZA/b9QwGMa9tAG6nGUvHc+qFLGdsTJ0a6R8gBNRbmE5CSU6OqU+IXN0QQgCYusfqTp1o4iqYmOgEp+O57UTSI4KMbDw2I59z/t7H1vH3ndifd3r3FfsnwALryHQNE0LVFXVeA2AbXQ0DWpztmhVDYGGyrDnlBA0BMhZ+IQ/ANXfAbOymkHlJhDMGYCixAkr6mt7VlVklnNWkgosaqwxI/pulUWB1nI2ZQUJRBFad1DHtkUtIIppuIIg+HUdvYhdVDv3vGjVJpBcXbvIfbtFnRJ+B6LIRQ9uP19/R32QkGP4K9D/8rD5cFgjC0Dix4QlSV4kJAfdB/jM0RvyPEclTybM5InJc2Ny+NExgCdELuERYqaMyjglxu04awE8su7YLZPQSAmd3OrL2cVbY96dXd4gAUqw+oB9muxfmfwmMY8DYDYAd9Udr+8GVpo2jbHfB7QRRuAj3EpwSGAAEFp7e8RworLAFSfYqM4v3FJTEmoTJrjWmJpbu+JBu9YeeVILJGjhxbWL1UkATuP4CC2+MmJcc5qCK2sfrtdyd73GHzYmBzYHwFtExbFT6s1rFeM0pqcQ44EgZRXmp4+WNO7cHhDjjlidnyqKuAuAj4Tzr9aqYUIq6SC5Qj2OcQ9pLKXkKZdyxLB70RWh6B+ZcnRKSkCAlBmm6mtPZplM0yw9YBlECZtAqwPmiyn4X1W8dg+Gbw0JGf0cJqTk4fMTyDaAzv0/gB8wXU1Tj2nJ4wAAAABJRU5ErkJggg==",
    alt: "CA"
  }, props));
}