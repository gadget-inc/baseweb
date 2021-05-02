"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagHT;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagHT(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURdgWOwchowkkqeIkSAsnrt8gRNsbP9QRNhAsuQ0ps/39/fj4+NS6dhE2hzltGLDAs3GTXCFqMWZbVYaWyo5bMefZtTBNZFVwqn+aYXmabMKDIT2XhKIAAAHDSURBVEjH3Y6JcusgDEVlAjReBM7e9v8/9CEQGGxlkjSd6cy7shUt98iB/XuC/4/vn2WDsYd+q33/nMgHj+m9UOZiD/17SrwuWfdac5trzTuu2cU96EW9Tv71pOr6dQ26sbysyCu95Jd5RaFS1m3QnFdaF8fiJD5bclqJzaqyNQL1nmT+NA4bne7wXReelFQOAR9G1QkBXce0SneiBkmdJOgqbMX7Q5JveVUjIF4dRorxM+Kfsbn/fUHBHZDLNAd8ni50axhlfidpJP8wTeHAHDJ14yg67/JBU1ZqX+NvvuL97QXeRB7xdGH8ckKMvNl6wZB2ZlFwmcjjjfkbRj5uFusuvpBnu0QmEX88IvpAe6SS+OoD5QoYSZH/PiMe3AHx/N3wjQJvU2VLRbzH65H+AdLXj1f0ha99xMfe8pgrP7sr1rq62dOq9YWANLS8s8nk3Jdv9eWcMdmb7eGFQi8y1rl5pcDb7KvvgJV0dludRafIA5QdFAuI7mDNUQpIdZlyUzz5KM0KAQ3NIwAoS7BV4iVbRNkH+0fb39DHM5YQ9ZN+cw1VVQdPIVkrcPPwvXK1XAfOLKh+YWmXv7KZ19RP9df8P1rDQFd81CETAAAAAElFTkSuQmCC",
    alt: "HT"
  }, props));
}