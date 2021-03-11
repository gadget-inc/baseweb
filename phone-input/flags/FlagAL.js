"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagAL;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagAL(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURewxOOcqMeQkLBcXFyMfH4AjJq4nLVUfIYUI8a8AAAGkSURBVDjL7Y/NbhpBEIRnItm5do8EvjIjIA+w6zyAt/Few4/gGmKSe3DeX6nq8RKQwFJuOaRAsztdX1f3hvBff6/4A8f9/jZwsC8hbOzrLf/ObMGjl4tY/EKt3JvZdgNKIipehsGLREhERka5H2uZ4PCKjvBgHEDfA1gOTvN1vMf1l9nPKPpdxKvC2eK2JLOlRGywjB829lRtJAWNTseP3BCUPY1B9ep7wcMg0QhqzP06a1trzdpnUdZFMcEjwMy6luoILTKK6lZQZQAvnyrRNl0PX2sRQIxa40b08O+6hdL3XOxAlEqvnfsNdCRB1REkRKdNNRnRZppeDzpovIOPCKjfnqpnAIasPaFZndUugdcKHG8Bh+o37f4CyJozd9JRM+gxaT4BWROeOaW07rdzuJ/nu27pXVACUFLCCzZAbcoBbrxtBQB1WqBKKv4ZK+9FXyk5TwKfNQScf8YxuUqpCbQ5EDReZ80jzsK07M9J8LjiiWxbr2o+EVwxgiYrbMT58q0MEYQSgOxhuDo1K0N/FRNq6zXlP8BVpXIO5OvQuwn/DPAbwbWDHQWowjQAAAAASUVORK5CYII=",
    alt: "AL"
  }, props));
}