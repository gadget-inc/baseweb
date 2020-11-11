"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagBZ;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagBZ(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURQlIk/T19RKBFePq6dEXLdQXLvv7+wdChwhFjc4WLM3e1325fzSSNlaAsFelWbTVtYelyJrInKC30X+cvjdoorJ/VNEAAAHtSURBVEjH7ZbtksIgDEWBVEAopdT3f9dNwmdrdV39sTM7m9KSYk5uCM6ouHxm4jJNl2m/NpW16fDZdBIrps/sjL9OVxx9frTG/PUz+5j/wxY2BxrcFt6iV91t/bm21KPJ8Ia4817ruHj3tATLA+/iVBwWpVTSMz4XKAms6DE2I8MiJ7A4AlVMoIqasqiFKgiDlN2naY+8THuXhFHlETN47kEXyFp2LNzWimzpvMN95ya6qNlbW4Qdaqj52kzyfo67/nsqQXJMZm3dvs1vts+4e6fUjJL9DHEzuJdgS7ioTnsI25yN5HLLZLl07sE2CInGVd3qOO59qiiPxAW5QedQ9GB42MhDE6cLiNdwT5zwGJ9mX7TxknSnJaJzH3ymL5tlWFcHXuIdxrqYmcJq6ROtnvCmeqaOTUrcrq/6bNh/zLiVkIER+d103AQUUhzfLNL5SxmKzsAI09Z6A1lvHng8jwUn0bmun6UNj/yyHguALL82nK+in60s8CzwBOI8g0zRgUsJpKfTA9SqsRxOJmoyU3CaA2lK6VW2spNghtjqiwK2ZXZutekDfzuQXd8MaHnjBOAXbNzsIeOjSFMS3d1ZGL6FlCrssWbCPDBxA1lzwO0uzH7HUxvx9wcc/v7Yx0FP+Jfs1/n//2+/+v/tC849Os7b7ds4AAAAAElFTkSuQmCC",
    alt: "BZ"
  }, props));
}