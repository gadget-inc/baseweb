"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagNZ;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagNZ(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURQMOi9YaMtohOIGHzAcTmggVn/n5+QQQkAYSlQoXpPLv8YQXV97U4u+9w19nvuBRY+mLl6+z3a4YQDQ+rlkTZqIXRF0+hQMAAAI+SURBVEjH7VTtluMgCEWDX9SYZLrz/q+6oMZoMp3mbP/u1aOAXEBqCque7RYEk9Va2ynLYbO07PJvADvr1VIa+YnsqhebbvCTjXqJQmv852bnhaPGcIPPuSg7P3f+RLTqdqu3/PCMHGAh2jJ/i3wjUVO4yQ8h2pww87lvOpcT7vO526tWs1VK5eSxdt7UUab5yQRTRrRxrXzeacvGFEx1zbv5ejy+jGm2bAfbQfg9ktkRZHko9SisEi/nVwN0r9ipECuh8Fu0AhjIeggh/B57/T1O+dU5/zvcvP8BPPFzpzeiufU/2tL+KVVvlIlZxjECGhBtsnFRuvKVWvnpGkTciTtjl/EYCIj8fvn1LJGET/yA1EpbkMO3MMyX74eTU5xI+JuoC8UnonkxUH4IrPk3yglpMoU/5XK4mufrtPIQqgi0qmWmjb0rHzkQf/4zpVt8/vYpJvTodz76JCXMIgpKtT06C3ClU2lV46MPfCuuypyzFfi2SP3cKS+a50YyctU+K3Go1rdRlrJBaiaf5M1UGU1KgXeGVOuzrZ7tEB063Tse9eRwOcTeuB+Ar6E7N7z499oIGLRXXq8B/jN8zndtlO65Os92fzIWM7ih/Q2HV/GTsxq37QJwA/oUfbhy1m/VCVwNVeI690u8PabvPMG9plzDXQHuM3zMhy4SlB36qHAsf4DnJT80QpXdEQVaNFm/lfquJ1DSZSmvAtfJV92B/BE0ZUTPO/L2OkPyN80N0hF2yD8myvf/Of9//CP+AtfjP4xkWBABAAAAAElFTkSuQmCC",
    alt: "NZ"
  }, props));
}