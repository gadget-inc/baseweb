"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagMQ;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagMQ(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURfj4+ChLmSRGkTNasf39/S5TpjBXq/Ly89vg622GvcTN4ZCjzK672FFusOvNKjkAAAJUSURBVDjLrZPPaxNBFMffYWFDT81AEJFCdqB4ECEQWREV9pBL6SU97ApVIbDZAZHA3qbaHKSEbtPWS0VLSy4i2EBzKUVpAh4UJCG9+AMsrfi/+N5MNtktKAr9Bvb7fnzemyzsQDGpGyVUqlKAiwKGx9/TwJ3OYQpoN96kgbNofgT4Sncbh75v21UCbMyLxe05m1QAmxriZhOfvq82qOhW5hWZXwBhCyH8LxsvBEZqA6ZCPJrq2tSqgErF42cZzHwN0EjxCN6i2QSQai1J5WrJMEq68rO/ShYDfdkkqxolRwNnculHDHiiNpChfC9EUMW+QfVWJPVIBYIg8O6v1Xd2Vz3PqzgGlNDddtTdqWPglcF13UA8jDp7nzEqG4bhUMU7eTpcdgOsAOKo2+39wHODsgMOoLterbf+jkC1QSmgRxkAHDepCTBKDYC/Ag4S54BzcgD+ofRH/Q97ETIhNMcemiRtOoeQOviLCWJDUwd6MtRNMCcrNWPqoTGTTWoaO2G6kgBy2ewlU5qgIl1YUEAuLhAAoUwMTDb0jhdUGkqpgQedg9QRg8ZrtQG/TQ0sRvMpYKZxoI8w4yO258YAQ7/X1P9BxkfMZL6OAMaylmVVNl4yFL2FpIBdnuoqJ0DlexkFqA04YPEj+KgBjJnFcy2qs6sEWIxheNpfoU4eLE6OVw/dUgDnOLQYLn3DQZYHzhi/TldvCwm9gXNOV+85rZ4GzPi1teVfuysY6A1IDKIPp5vUyiuAz0ad/qcxQDqpD58kAH6lvc9SwGxvfSsJjDQBYl0A8BtFdDW3egcYwgAAAABJRU5ErkJggg==",
    alt: "MQ"
  }, props));
}