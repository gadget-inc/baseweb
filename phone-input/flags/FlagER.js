"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagER;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagER(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURe8eSk6U5f/FPCSzOCW7O0qQ4UiN3ewXQyfCPvInUFKZ6fNJRvymP/d4Qp1Yld8rUMg4Yl2SQIxuRLZQSXZ0vNNxGwIAAAI0SURBVEjHpZSJtqsgDEVDK1IErR3+/1tfRkDUrreuB8qQsANELazv4XFBEGP8vIZLPIe4xqPer2t8jM8/hGh51Pq+PwYs1FhvY523deh5TsW9QkMXYFf3vDyQgd1F7ZgnZjjkORVDJ6Ue25gn/HGIA53zks0D5P7fvGYTibZsJj2f5ny75TynGIEqSAgjtz0WgLoQK8IqjcAeTMWdkPITlirEpqRbqxTVTg2HsAgqGrY84znxLThAxanHbDagSllexzRAmhFMuQQAWwHwed87gYiclDhamW+ZLDQ1p+C0CD6vjpctgC+fChd1bt4mgmRztz9eeQbu8OmRSQ12vFY1RLVl3h73z7OMkl6gHGATRrNZDXhc8qfCUz7hVEGyueFBzj/Pc2v5oeeyOX/cnD+WB3CidZmm3f3T9v6BDrqrgWA3TcTTLGCVdAc7f4CS/32E5/KdRFAiluev+8s8aGlqhWV/dYds503MZzlP9ct4/bqpkZrpp+8/jlMCfv9jCNXP8LKBlbdFSb57Sp18f4bR/iGsyzjtxG5T9/2rh1u5tNNS5BTWMLKv/P/ECsPydQpiQ9VZWzfXI8w58/9fNWHGbLWBHIbbnu+Fl3a/BFfgn/yTLq3yx7A/5Qn2tACL15FNvPPF4Q/59Tv6Ktf2FkHG7oDHS/t+ZR+quuAY7uX8iWB7aT+OGGD0JYoOxzIeq51K5RkW62hLR+vb8ehrMR4z1siPvfyZVz+s3ufPAlW/+KCB/6J/aYs+FwAPQc4AAAAASUVORK5CYII=",
    alt: "ER"
  }, props));
}