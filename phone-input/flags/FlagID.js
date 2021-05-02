"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagID;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagID(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURd0dMtMVKv39/fj4+PT09PLy8jL9BNUAAAD9SURBVDjL7U5bjgMhDAs3IDeoygUq4AAjEf73A+5/lcYJU/UhjearWq3WDMZxHBiif5xDCC/Ve5coUuSALxoFRXTNAQaZ6ZtWezFmcUNkDGjeBtiaxriBIz1cxsluB5/AY/gDZrY3PRvjnkBHb2C2JkIPhFXhx/gZ4bnwqdfAJ/5K4HqMy68IpGNoIOeUcvEFYfXu5QvlUryXVgJl2r1yIzVSgV0Wp0VWJQsc4UygtVqxpSkKtHIBK9qNxCxBpK6UiGtF3Ug9qYKWWEec2lqb3iCGlZAKMmVSAyK9y+h9DNE9hhZQ0mXOMTaaOAwqZp9dz65K6674QeAI3wjcAYCrrsJUK2JUAAAAAElFTkSuQmCC",
    alt: "ID"
  }, props));
}