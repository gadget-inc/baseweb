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
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var DinersClub = function DinersClub(_ref) {
  var size = _ref.size;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23 4H1V20H23V4Z",
    fill: "#00AEEF"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 6C12.66 6 11.34 6 11 6C7.69 6 5 8.69 5 12C5 15.31 7.69 18 11 18C11.34 18 12.66 18 13 18C16.31 18 19 15.31 19 12C19 8.69 16.31 6 13 6Z",
    fill: "#0269A8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 7C8.24 7 6 9.24 6 12C6 14.76 8.24 17 11 17C13.76 17 16 14.76 16 12C16 9.24 13.76 7 11 7ZM7.5 12C7.5 10.33 8.68 8.93 10.25 8.59V15.42C8.68 15.07 7.5 13.67 7.5 12ZM11.75 15.41V8.57999C13.32 8.91999 14.5 10.32 14.5 11.99C14.5 13.66 13.32 15.07 11.75 15.41Z",
    fill: "#fff"
  }));
};

var _default = DinersClub;
exports.default = _default;