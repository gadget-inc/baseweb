"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagKI;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagKI(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURQNDiM8dL//////YUNQgMgVKkwZPnd8nOeQqPdojNlaFt/b3+qvC2y5sreRYPM7c6tw8NyVfnOp5QfrCStvm8HaawYqrz3uizPGRRfWtSP3TQsfW5t9sePC7wPnl4u+2u/7yxf3gi+mgpxOByzUAAAI3SURBVEjH1VOLkqMgEBwFH2hCCOQBVrKb3P9/5M2AIK5Jyuxu1dU1lAM93SMoQPszwL/2Nz40X2ipZZsSUmptrbNyqUO/R9tkQFUjHTPOWo0jwxiOtSLRTEeAiWvHFifSuoE5PQxWKmLa+KY200LzFNKageCk9AUeIvML37JtSBkKGCebWSbqyS+E94nR7qeBw67sYLQMYyHEpBWRgygXeT5MVQiNSpkmqWIE8RzS+mDlC80rv2bklEy/9PPUQqcWVmyZwbFh1mdUVGVawYF7Nj54CNoqHDqGVsuYQ05ZzSeJSHLwz4RxohgumtPB03T4OMegomWmB/4QaDUSz6ziSmlHR9g8Fj7xa/KnGfn1M39RcGrU/cDPFXM8jqk7XH42TzoOFDLgq7XG825pIp3BmydpaBXdYu21vBgDAoo0HCGZ/2RFoRwLcAoVuIWByek9Y4RiASqAQmVYhFGJ/Qpa/+Xzo//4vPCpwJ2Y2z0VcKQpc010weXalwH9mL5cy4ixxP1WLjSjC8oc/fVPKhdL3G7lCw35d+dtvT3vMs16BigExPRbDNQ5tt2x277FzP3vA0LJ8+IlKxmot6eD39LhlDb5BgOH7JNieh8TKxn///vNaTP/7asZwNDVVVXVXUq/w4API7rNrt9tumoFE11Q/Qy/4MddHfpDvsjI1AtmoYHZJ/H15gxUSwamDwnf+23z+3vcV/vj7G6uZgADICqAmPZMRX3GPNJUEBDjHu/mHnJMzHPN/4y/gx5NDTtVOiMAAAAASUVORK5CYII=",
    alt: "KI"
  }, props));
}