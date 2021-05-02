"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagCL;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagCL(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURdgtIN8yJfj4+P39/eQ2KfLy8uc4KwpGvgM7qwZAtek6LOo7Llh/zOk7LZeu3Nbf7/1miD4AAAHjSURBVDjLzUw9i9tAEB39gxXoBxwr1CaHVKQLJzCujWFJE4ILocJlrhD6AYZVk8IQtAvGpLpCIEh95voUJuktXKe/LnBFZkZf59hJF7gnzZs3b94OZANuowu4hpcQyLM8y35mWZnfhlEURj5X1MooxECe2eyNLcvyoy+lL0PfD7Gwy1D6/jVYa/Pt27K0+VrKkG3JO+JQXkFZbvY/Xu/31q7xAsFvyWdxhRc2j/juqbRreQEUMFspX+X27wFrH+e/LAXm6ATMsmMKFLZU6p0xdj0PEJKZOmMGxpjNh+17a8zngK1+1aoZFMZ8+qa/66JY8UulVKDmXMQz0FpbbQpt9ErxNsBDqLApxRdwhTC6WKk/gQ/4gi6I9HlA9QH9fwO7+/u6Ph6b5uGB6ng8HOq6achtmt3uK1RVVdeHQzXgdPoCy7u7FLHEvlxW1Smn6QLSf2MByXSapgnzKVpvAdMkmUymzGMf9Q1MBiSjnA7D88BFdIF44g0dVRyTiMm4AS+OXddD34091FQ4svLQExC7MWFkjyUyDwJcki5Xzx14wMAZPPyG0KXACSggzt1BOQKEcIVwHAeekes43SAEOIK7QyR63SpuAGOUn0EXJ00f/ZhCCG7CYQaAbs9Tm+iW7Pa7l4HfWIJuB/ZNbWsAAAAASUVORK5CYII=",
    alt: "CL"
  }, props));
}