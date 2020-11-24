"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagMS;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagMS(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABgUExURQEnhfj3+AgynAOtygUulQUwmdgcNAIpigAlgAMrkAa10n+Ux6U9CR4eHu/k6BMTE+++xORqed07UFdytqi22MnR5eqWoDNUp2uCvC0uZoU4IwZ4twSdwgOMuQJtqlMySGD8Nk8AAAJlSURBVEjH1ZTpuuIgDIZDy1LsiK1d9Wz3f5eTEFY9o85z/sx8pW0IeUOKIKznQcwNqRdaa9F7u5mFG6P9SCAGPQo31fzkxIruSalGPeF34c5nh5hK/DaL4Yz4guOYIOW4tUmgJkygV7Fske+FGLX/KvVcoNTmMH50Yvb8vPjJndhxppf4pll4Qs/jumlfjnpJQA9c7VXrwfOD1rwcL/K91yLcGnh8i9k7JymlkgqbrFT6QBTy9RfaC6K4SifoP0v0Mex2+ux8zj/Wj/lH3z8VgW/tIap9K3i/0rPz687r78TSp/WXlh9vh1I5AdB4T1su//4rbl1pLWGWm5Rtxbc+J42BtdtCuwd3LNcfjo61kSXLMnc8HtmwLIn87pzfvUvY/9Qd3bJ5kG95z4fpJcxU8ejcLsP58+Wcndtsqe/nx/pdOKvWBt765UDfXvEtwSy0M09n301omcjjitA31Anatk082pnHdeulNTbPj2roH2hw9PUm8IeCP7TJD3jSOcrgH5GgUmjE7GgvaPoOXq3X8XRkI/lh5yDqT32/E26oyWlveAoaN4ydTqfAx8rA3IgBatw13H+v+PeY2ICxKcZUmLGph/2Piv9I/nL+lMLWPro/K/4zRUGKtuaRVMXL5Afzoq6/sq7m7/mu4LuCB5+DG78gJM1u77ok/GIqniEw8aqNEIG6JDzHkEx8xEwQ8kHsscyF1uB6gawwnDIEp7lJYWLk1/ULylrvMkHlhJuA15z/vLq7bldd2eR21y9jU5LOK4wW73tflMe7qt/VgnB31TtV0xUF5gIKKz6zs/tmhp/of+d/A/xORnoDPcGQAAAAAElFTkSuQmCC",
    alt: "MS"
  }, props));
}