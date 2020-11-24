"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagCV;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagCV(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURQc9lPfQNvX19PLy8gtIq/39/c0jLglDoQdAmwpFpvT08z5iid29P219caGdXPjuyfbcceR+Md9GZ/kAAAF/SURBVEjH1ZXpsoMgDIWTbkBZ1Pd/2RoETKLVqvfP/aya7WBnHDnwuAb8d71zDzqmn8uUuOatx+qtC1VUlSLnqai3JrhrXNYbZ5wz9chQhaDcrRylnkMwHLbIJvMMmOM4tsQZPQeMvXSANXSnMN81pvXLlJWzsBi34gGt3q7G8iLYa1zXQ1mlnFDWhNqFuazS/JsaIzafuRaTt5BSLL1ZJ+N2QmsRMSAGiDheYx2oWBmLXoGEo97TDT0f/LqS1ufn0v8IcIIYa+SPi0MSqQ9hZ5GnoEfseN4h9s8tpP6GSz3eftfTuOzrBRf6F2dAHF47FYnUv0LQA8OmXOsPA29J16m8VwUF3AX0/t73d8vp/fE8MxZabanvt/IFyn/pq4lzSt+SP+Tfafx6RJZ2/VtaasLofPQuX3xKJ/zTBJzwv/incr0x9Fj1wldXjPSLf/lEW1jyv/jX5CXNKph3cF/SvtJ6IMxnzcEO+cdhO1G7kd3bXdewai//tsnPsYW/4gPuXT4A6dLKQQAAAABJRU5ErkJggg==",
    alt: "CV"
  }, props));
}