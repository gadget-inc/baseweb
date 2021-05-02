"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagGH;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagGH(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURf3SO/3VRxCFUtAXLQ58TAx0R9cZMN4cMwtuQ+MdNeYfNx0cGu3GPxloPquQMWZYJCLqOvEAAAF9SURBVDjLzYyxbsIwEIYve1XgBVBV9QEqRWKuqmTvEEsZkSw5K1Miti6RGNmQM3WFVwgCMTdSX4HODG1nlt75TAK0OB37xWf/d/5iWLh5Aa11USwW87m2FEWTtZ6CdkPCjMmy8Xg2ozokuppCdsA4NtXDbNQIv4NCkqVIlhCcuDiPQKVKJfhhizFNMGFnZpjVEDDzhM7UnImyAU8juEBBqgEia5TplJ0MwR/4Ehdt9ElJm28ncnAPPiP9Y5quFi7xB6Hnpnsu9NuE102LsHtvEfZfLqGqqnJZVZsTwavp9t5KYr3pUWeBQ6CRtyNha4YeSwD4BHRx0VvQx/sVPWr+M1fgAS9s8NiZB8wI8JJPjnzsy/KzGf/kqlyVS3BwvYbOyiV0tgAfLuHK1jG3bm7+gfAAgRsU7vALHvGjnZZpuYzQ9kKIBEGE0B7iMi1XEDyBCAWBGh1RJGgQCS4hUDgiFOK8bYQYKz8VciNMiDyfxHkex5y548kzC5dpF74B5HKFNqWMz2kAAAAASUVORK5CYII=",
    alt: "GH"
  }, props));
}