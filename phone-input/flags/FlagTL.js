"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagTL;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagTL(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURf4QHSEgIP/IQ//KSf4fLBQUFBoaGv8vO/8oNP4XJPX19T86Lf5bNW1XK/i8RP6APdCjPf+kQZycnM3NzaCANGZmZtu6baMQphYAAAI1SURBVEjHpZOJssIgDEVDoQili7b2/3/1kY1FnzOODSgp5dyQ6wjLfLsSYJbtGm/SfbvEZ4HHfIU35mkfl3izWLtd4c2y2nW+wGcTrEUbAs76hbM+vO6FypNAbiKUoUnN635ZK48usgLu60egPi/rrePRRZttCPoylKUqdGtfn1y0aEMPf46X+saTCdzEdwFeUZrGsMC6fcsj5oX2xUVu4rv6QntdFysKt+Bo8HzPcQCD3qSEC2mwi2gDlVCosJzxOxDcm4MEzpRFxEX6LZ1rUVelnHN0f73AMZ0+7RNewhsVyDbQScc6NBjl1IGXMPs04aTc+6cKDI9bpUSnbITK+3PCSPq4DHZggWEL9QKqo6vy43kgfhQ5k1Y70LDDOrs+QmlK+Nw4x14E6AYDfrLG1hVtAqT541ABI3hah4/1X3k/jqNH985930epTjTG5j4HZFDGSd2PtOGfzOavh9w5vrGReI8szjSdBOdp7oNE/v2jjJK0GyAFkTs8p2NSHBuPkUsTI2BVAyYokuToHF1/01IYtTA9SA5EqgWUL3r10JTkpJK6B9xyjeycNF6Bhmw3cIWxg0d/l8b1wIdVo+fVue312D/B1+l5cg4b/zo6ftHGf+PJuTkCDX4bJWsTJXlU7+6lcdC37xl+8ZRzrXPSOL+CTgBiO5r96tw6g4Qcx8mP9AS1dvlo/YUar0ehHIlVpd0uQuLc5pojNeme4/sL5u+PAL/GmP/sM/weY5rjBRwWd4WGP2T8P4wFvGbgAAAAAElFTkSuQmCC",
    alt: "TL"
  }, props));
}