"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagAD;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagAD(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURf/MMQoptf/POw0tvtkgR98mTtIaQf/ON+ctVAYkqhAxxRI0yxQ20NY4KeZyL/CWO//tsYLvnwcAAAG5SURBVEjH7ZDbkptADERlGDwLBLz//7WRujU3VrHXqVTykpasGao43cLyI9IU6SOS/HN+D+oNfm8ylHqLB1ZZ3H8vv+kP8XnK2i/4LahLMn1iftt3NAva9txU8rPmL2gO3BfjN2s3gPYtI5NVhffb4CHbRfDIedzARibQ8cyPlCM5vPTn8m1+ygQw/Nfy57Hj/Ap+NBfR11mv92f+KPAw6PXL/M6DG8g806DsjnrCX/MvyX3+eVDnU37mBl/56Tgej/NUl5d8nH+cn5+TreF8QlkvPNNzPtw/FTThQebbXLtecxat8zhN5EXzU6PdIgmwUmXo20r44sbbc6OTWxk/oCht5j+Oh2I27SkDMy3lplPwPluHWwgM5Djw9wv3T74/6YUe4jQ0l4O8fYFaiEndUqeWX8DZLzgBZHFl2qVIcovk++dawv2/zw8w1n8vv20vxeFC3hu/1mFzxfdftxe5J5QfiYfo62Da0CYz5Nv+wFJnoPlfcKsG8kMwo/i7VAbF4yaRxv39kAJV2C7d1h1Ppe4wHqQbULf1+um43ZnK5OIghV67+DXefwj2KS200zN+lKyR/vN/i/8JEKI8RweOQZgAAAAASUVORK5CYII=",
    alt: "AD"
  }, props));
}