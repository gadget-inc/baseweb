"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var Elo = function Elo(_ref) {
  var size = _ref.size;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23 4H1V20H23V4Z",
    fill: "#231F20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.13998 10.17C6.31998 10.11 6.51998 10.07 6.72998 10.07C7.62998 10.07 8.36998 10.71 8.54998 11.55L9.80998 11.3C9.51998 9.86003 8.24998 8.78003 6.72998 8.78003C6.37998 8.78003 6.04998 8.84003 5.72998 8.94003L6.13998 10.17Z",
    fill: "#FFCB05"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.64008 14.2899L5.50008 13.3199C5.11008 12.9799 4.87008 12.4799 4.87008 11.9299C4.87008 11.3799 5.11008 10.8799 5.49008 10.5399L4.64008 9.56995C3.99008 10.1499 3.58008 10.9899 3.58008 11.9299C3.58008 12.8699 3.99008 13.7099 4.64008 14.2899Z",
    fill: "#00A4E0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.53998 12.3C8.36998 13.15 7.61998 13.78 6.72998 13.78C6.51998 13.78 6.32998 13.75 6.13998 13.68L5.72998 14.91C6.03998 15.02 6.37998 15.07 6.72998 15.07C8.24998 15.07 9.51998 13.99 9.81998 12.55L8.53998 12.3Z",
    fill: "#EF4123"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.6 9.62V13.3L16.17 13.53L15.84 14.29L15.21 14.03C15.07 13.97 14.97 13.87 14.9 13.77C14.83 13.66 14.78 13.51 14.78 13.31V9.62H15.6Z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.92 13.36C10.88 13.29 10.82 13.18 10.79 13.1C10.59 12.63 10.58 12.15 10.75 11.69C10.94 11.18 11.29 10.79 11.75 10.59C12.33 10.34 12.97 10.39 13.53 10.72C13.88 10.92 14.13 11.23 14.32 11.68C14.3328 11.7184 14.3498 11.7569 14.3655 11.7927C14.3744 11.8128 14.3828 11.832 14.39 11.85L10.92 13.36ZM12.08 11.34C11.67 11.52 11.46 11.9 11.5 12.36L13.24 11.61C12.94 11.26 12.55 11.14 12.08 11.34Z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.46 12.98L13.42 12.96C13.32 13.13 13.15 13.27 12.95 13.35C12.56 13.52 12.2 13.48 11.94 13.25L11.92 13.29L11.48 13.95C11.59 14.03 11.71 14.09 11.83 14.14C12.32 14.34 12.82 14.33 13.31 14.12C13.67 13.97 13.95 13.73 14.14 13.43L13.46 12.98Z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.44 11.57C17.22 11.77 17.08 12.05 17.08 12.36C17.08 12.67 17.22 12.95 17.44 13.14L16.85 13.8C16.45 13.45 16.2 12.93 16.2 12.36C16.2 11.79 16.45 11.27 16.85 10.92L17.44 11.57Z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.13 13.4099C18.01 13.4099 17.9 13.3899 17.8 13.3599L17.52 14.1899C17.71 14.2499 17.92 14.2899 18.13 14.2899C19.06 14.2899 19.84 13.6299 20.01 12.7499L19.15 12.5699C19.05 13.0499 18.63 13.4099 18.13 13.4099Z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.52 10.5399C17.71 10.4699 17.92 10.4399 18.13 10.4399C19.06 10.4399 19.83 11.0999 20.01 11.9899L19.15 12.1599C19.06 11.6799 18.64 11.3199 18.13 11.3199C18.02 11.3199 17.9 11.3399 17.8 11.3699L17.52 10.5399Z",
    fill: "#fff"
  }));
};

var _default = Elo;
exports.default = _default;