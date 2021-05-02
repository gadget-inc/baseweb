"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagGQ;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagGQ(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURes1NP7+/kuqHvb29uUqKRuB2USdGk+wIOcvL0ejHOImJfr6+iCH4Bd70vLy8u/w7xWZQLTbwTJ+sS+P1qLK7Mvg8jmlWK0/VWxekUSjODaYgH3ElJ1mdxUAAAHbSURBVEjHpY6NuoMgCIZZP5uZWaettrPd/30eAUWtzp6tPgkReCF4Xg4JzPMgb+aD/JsBBdk6znkzF5/psk4Rf/0t9or4AwOYdwMaVtEUzhpR8i42co3ncUDKFf6k70WWw8Cbsdkl4fMBZ//F91kKWT7yZjxHNewI9KEUmqQv5c0zrWVdWxmelPI44Ftl/I4BUJv03E5fChIY3bcDFvsN/kF7aslObYgpXMX4gtphNcEUGTNxgdW/eonTPM6hB5gIo3f3JJ1lPw9zL9gpm8CCmmWi9wOQn4dhmMv2jYB+Os7A13Uqy9ZRzv0MPxLLTREf2Z/pyl1OyId4eZO2eNzPbS3tT5E2d1u8meJ4z/+vDX4qbenMOkPekjhHSRvqKKi7mo1PXd+sDYi1r+FlpTckZSLyAQ/fLe/KuxdzSt6fHt7er/h1hpPQdQne3XovrDmXaSsHSDnraM4Dvhat9et34MCLSXtw6EQjHOJHpQCNDhr4WyxeCiB0Rjyk0OhTyR1iSCO0uP1fQe7ymufVTjE/3jGu+KDz8q9KaiGrQo75e4VSVRV6vVRIRpNO9hDxj6WSGCKuq3DrBaC56K+s7Pi71g6hj4wmaO+05pDHSoOUAXFu21b1tqrhoQ/pD1dxTqHYoUniAAAAAElFTkSuQmCC",
    alt: "GQ"
  }, props));
}