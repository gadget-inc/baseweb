"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagBM;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagBM(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURdEVLXqPvuNwf+mQmvz8/AUqiPT09NQYMNseNdgbM/PT1u+6wNs3TGi30+3l6b3P4eFYaq240zlXoTCOIpGhydoEBZNGKl1tJphldQR2Nw0AAAJJSURBVEjH7ZTbkqQgDIYRMCGIqD32zLz/k24Conjoand2925/rUISvoRwUJnQ2akVNdY5Z5v03c42amvcWynbOQ3xkZCVf0RmRzve4BvrQ/B2rvI/JutHjurdDb59QAzO2OFR+AZAO6kq3OJ5sjC6McKU+HmwXZBu07p7fNsONiVMvI1ctUynbR1dInTi24mXizpLRJaLzsvBvCNy9VNgSo5kU03SYL3JfGc6gCkZtYwuLxVsiySPspWET4LcaBK5ii1TWeMpei0wdW+bQ+osusHv8tWwu8O7S9caSUElYWrp4/g6XN6DvP5zBFl34TvjYciboum90v7P4AO5hScykC8k3eMfA/DpGf0y/y6QhuHIH7a54psYRwodDHPiJ+mOUW70Sx6TCeVVU0oYo9w74Zs0neA5gPgxDzvlL3YVNQWfCm4AEfnapeVgW7OkxsLz1fCZLzTn57uffz8bzzc6al5OveSXRzjzfJrC55d5Xrc5//I2ni8kV9VFR2sJdX42rIUpnuvS13JkouYg7NERwC85xCLw1PcTh4C8ftmjdImEqI0xI2aR0zrQ8o1ylp/P777/5hIAcbMrwlWKVQquxqTWez6qfd8o8h6rMQrxiBRwF8MA9EkAprarPXKOs0wtAAyCD/y33jnwpnQKMPClxB/x6vMj6RN/xiN+XuC/wyv19XUafuZfR1QS4+BXa5tdx/bKt7dd+99x9ZlLlspfCRdvbd+PyOzZsJg3X23GasRu3Cn2it4RXn1j3eyqwJfwX9Y/DP1ff6ZfJHg/p43jjMwAAAAASUVORK5CYII=",
    alt: "BM"
  }, props));
}