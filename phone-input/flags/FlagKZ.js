"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagKZ;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagKZ(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURR6zzCO40Si+1yzC3C7F3/7IOf7LRd7HVYnCkGO/qkW+v6TDfMXGZubaNUkAAAKwSURBVDjLtZGxTxRBFMbfFgaBZmYThAMLdjbCAQ2Z2QASC5O7hKiNkMzuAVaamz3EQo7cxWAFCXBgBQmc0kGiEW1QAuGu00T/Lt+b3YvQQKNfdjbfvPd7375kIX+9HsI/AKbi64HcmMkHuVyAyuXtm5RHb2ujEEzFSgUWSY7Kte55JEdBBfnqskJhXT3GM6lyZBNhAr7Ni9b90akKGikc2IoFkgTSxIK6X1KXhcB4nHrMfxL7g4v0lZYkAmNG+SQ10VQPzOn5KzV5oaSUysc3JsjxWErfxzNs1sZNycRi46Wt4BwlSCGqZeXTRDWubx992aybZboJSbn9IKQ0zwViwj+Pd4dqW6JuvgtfUB/L/eBTgkTMF/s/s8aYt+L3LrYkQUJiwmAsyI/UPnwdriJgVkaO378TNlRgghgw1g0ZU/5krI6qZsHWfOGnCaR9s1tNgDJakQoB2oFsNs4mfbM4WBJXgHDG+tpACpjs2iXAE6JS9lBDzf0wLBZNGJqDhtcS7RAJT7jic2VuIySiWAy39ZsjqrkEePc0kdminlnHXqiRWA11SbguR4gB74445y7HhHWNKuLBhEPu4jz3GLicV5YoI9Pcs10d6oMGp3kXhQku19M2o3ZHJwp7VrHN6eFpAt17or4UKHQX7AQRrR1Qe3qnkgBLaJOaR5/o0tZnsPExARCc5an+JnTi3+y1ESt9+DcvAbQDWcfZ+0FbzPNfO45zBdDTjsMYZ2fRTqa2xev6G+Kc4QjWAS0mMEqoRPWtw+PNul6yA06SwHAHZtWrV9t0QUd8fY4xQqzA6dIANqyn6dzVJ2fPoOOC2XxggGJtESCHlw6Azgja5gGdg0N2jBCovAZmcXZ7FtoLtkjZ0JJ+ylLXfgLQAEh7jo1OElJ1pOeKcIfrdUvfANyY8N/1B+heFBv1AyV9AAAAAElFTkSuQmCC",
    alt: "KZ"
  }, props));
}