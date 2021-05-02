"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagGL;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagGL(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURfv6+tAZOvT09P7+/tccPd4eQOQlR+6oteZrgfPf4j+ETIIAAAHeSURBVDjLzZJBa9tAEIUHidKrBTrkKPYQRzdD/oAXdnv2Qau2V1Mp7q0YGsg1JIFeDW3af9v3Zlaqa0wg0EOfpNHse9+OsFm5flkr+RdAuaL4vl6typJrVIqJiGAJSamBvdXXBAW2FvYlb0r3TByWpLXaMwcyN0eavVJeoUaaAkVkqtll11CFBtqJK7gurJptC+cYsxetCElgg8bN89O4u2sc9yqqQ3ArjKk/R+qbMwRQwQ6kOIeXezua9vAdb24iDQATnbvNwI2z3E3iBGg5jH0/DOM47G0D5zqdZsCPwYi+/+z+VgYeB4rI7izQIkxEUt8fzgHLNODqEae0PwdcpUxA9xhI7zADh9Zdpix8aduSQHxoW7xtwgxA29NP0NwcHeM3KabUpRiN30jE4uMR8B1xRyjG2HXdRhKI90dn52vkFpuAZy0djA881naey8eOjj4BFZ8IXXh3NOETDARwI+taAo0vzaRlDLy0cAQAamvnA7rUNfdbk4GL+Xc/IJsVZyDc5/wqnGgCLuyvbx/+RHUGvA+1D/5GgVtvohVqaiHova/ranf36/kJjW6kY8haKp8JCK6vVDXsqkKwEDS8OFah/BFPC8ECE8ib8iCbwHVVAdB4Ck5UK/Ci/gvgN1Yb4VaJzp97AAAAAElFTkSuQmCC",
    alt: "GL"
  }, props));
}