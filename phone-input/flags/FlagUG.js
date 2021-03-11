"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagUG;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagUG(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURf7fQRcXF/3cNSQkJOIPGxEREf3dOP7ePOoUINsLFyAgIPT09Pr6+vzcMxwcHBsbG/3cM/79/YuLi+vl4/3kZTs7O8HBwVRUVO1DTfjvwPW8v/vrnP753+6IjqdtjSwAAAGjSURBVEjH1ZXbuoIgEIXHQNMGLQHP9f6vuZkxUvuwE1f7l5SBtSC9WICIA05xwLmqztX5gSs20Jwfe+4TkMQBacLXTPJ4LGNekCzzKy2kccB/5xhHtD+L45XfTtdrfb1O9pX/4CndtSKDofYMcNgDyrK8lBfXyg0Xq8ipG00PZZ/nPZCH6XljLUQ3/4V+R7fj77F2+xtxEm2tlOvjzgIg6S65LchRMfrUkZsYvUrmazFIIue20JOjJr9Wnv6uyuVaDDLE7b59VTXG+29B5d1fbEdHb69OQiP1UY0yJIWCkcUG4/RY6zmiGqqUMkVICkUIpA1R6TmjGkMFBpVhv0F24LxA6hZANGF/MNVbMi8LJFS3n+e/+2ZMq7VLSZF2VOgv8r9hu+aE1Khbqpov8j8lh9KpNl1q+F2w3cv/0AEwfzF0t46Xct1mM//o7+V/h/4VBHe6b/Pf4gpjv89lOzzsg/0p1+00GDTDZCH7Kf8zTnf4Nf8zbvz7Nf+PUfmfZYf3/lX8r/K/nOuSD4Wnk+Gz/F+Nhebf5f+nRPtlHNH+Io5Y/x9NrEybUYtNpQAAAABJRU5ErkJggg==",
    alt: "UG"
  }, props));
}