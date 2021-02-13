"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagET;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagET(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURfzdOReLNxuZPeYqNuMmMhmSOhyeQPvfSNsbJ98hLegtOBhOsR6iQh6lQx+nRCCpRRxXwRpSuR9axjRipF1uk720XNvERSRevIeUfKCgYr0zUNXHWekuOuvMOxp4cY9RrrkAAAHDSURBVEjHpZCJkqsgEEWvyzgumXkgIK75/898jaABI1OxPFD2Yh8wwb974Pce+LkHHvdAYXkUD9rvuV8f+wYU93B+mtI2FCkVRRjXrDh/h/Qet/2ve5CffjianuXkJx/6yVmOJPlKYjyFbrV4usqf23O8tzZEuyGiM55/vFu3L9gzNobvc5QzpYsqMhfxJ82IlulFtxRYq6dLvmRWk5BsPamVV/zJyAYFZRPWThf83kkagHZ5f8EXjAvVdd2CHgtFJRiTl3zGhALUwAcT1jrib2s9yqWcYLxHJ7jo0JuS6+06T6Fir8zeUrEadICU0ulcAP7MOufhTrKJtMoA+v8xbP5+y65843Xnfgxhr2wWYACW7WN873h9yMSbhjfS/X7JqeATLiDJaIahMVCgQl7R0RlRNOYrbGy6Sz5UE6Jig/M813NNe55tOlvGQB+3vje7gjpCNsrdlmNsqkYWJR+l+eVCjlTUrllndHT9GvrDz3LCPaIzyN8x40bMvBUDB/NjsjO/Ok5V8QPsK1Q+uVnm4XeC+tiDKV87OCl0bCM/tML7r4OqDBZRRlf4cu3AJKV97KH8u6q2J22Ub1TlBVDe467/HypRU5qHA06FAAAAAElFTkSuQmCC",
    alt: "ET"
  }, props));
}