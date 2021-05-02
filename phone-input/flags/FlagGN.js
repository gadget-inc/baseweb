"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagGN;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagGN(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURdEZL/7VQ9ohN//YTRekUP3SOuMoPhmtVRu1WRy7XNolVbAAAAGOSURBVDjL5Y4xjsMgEEUJkg+ALHqHSPQoF0hhidqFD7BEcu3Ckl2mA7otndvunyHxblZJDrD7xdD8xxvEsOV83HLd8in+AnB5DqxpXa8557S+Mqxr5j6/MKScgaBPrwDKmnKCIdxjD99AZoJuAgZr7WCHcK7r2rnjsXbFwLkISwTeG3twR8enrh8Aa03AZcMHmlt+AoFrE4I5KDwuk2JaSshggsEJZFDOORr0RRAvwiAF2itFBBapFOPMWcbyB0Ah7PG0VhQ3LwstifFmKGEDS9Qc44IBN94AcuypZoVbyD7P2DM+GrjFoFt44i/AFUbNW54YngLNG6ChGCOb5o0BrZEwdFqpbgP87CcAUgq0ErNDr7XqkHlCqJ9oBWpJe/YdiCJBQ7WfAKCTPLLCexL0WsPgPY0fBXZIGil3mktiWu9bRqYT/4FGNFWPjqf3UwtiAnQSqNEStUPTa1xas4EvfFIg1IuK/Bp7ut63CF9kQMepdH8PLSDEE1AEBEDOO7q+3VKAm4HeFssboP+nwBfkj4VyfV1aZwAAAABJRU5ErkJggg==",
    alt: "GN"
  }, props));
}