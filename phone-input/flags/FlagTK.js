"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagTK;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagTK(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURf7RNAU2wgQ0vQAtrAMxtwEvsaW250RbmYWEdf///9be9OG/SLakXW+J1aLgNdIAAAGzSURBVDjLvY+xSgNBEIYHRQwkhV6hIAi6DCpWwnFgYRGOXbSwCNwe2moR0EqCghCLNL6CkHRaCHYBsT+CL+AbOTO7ubvEJCKof2Bvdv9v/pnA8mwtwb8Ba83H2cBK9+znwO03I3YWHbDpFAR8qmBzqNX+gO8boJwYUSWtZtBSKlA5UIja6NeBqlwcEHhHTFEboCJFnjCSH9wBwFwOPF9Kudt8GgI75MMgBy4epNzqnnt/u89AqwSgihUSgChVh32IkbUByCPoPaYRseKqLX4VfQI3Se06YjwWHyroE+JYo9Y69kK3AP9LMeqgUQxiqKIjAw9wEyIBTgKhxrb3oSbBmnbgAj2mj4Y+VN2rS8h9k+UAXHOuB/THugPahQ/v8uKBl97YANJiARhz8SCfrAzUZGYdjDHavPT4Ux7AS1gSAdYa2sEYezLqw1uaMmBtalNtKaEzBlSo1TR4hLGpSe0BjOuGIhqQOpnD/hfglRobYNmm4+qLDzVy8oRTmKD7EjBNvwEkrIkbACxESQOiJImizhQgSfYgDMNkf7IP82FII6JwuqJQEoprcQ5VAFOCRhL+CPgELmHpKtRMBycAAAAASUVORK5CYII=",
    alt: "TK"
  }, props));
}