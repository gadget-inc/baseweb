"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagKE;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagKE(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABgUExURQBrAAB6AP7+/sQBAQB0ACMjIx0dHb0AABAQEBcXF9oHB9QFBfLy8s4EBAGAAckDA/Hv79cODjgUFO/V1XgUCZUKBsYnJ+WoqAF9AVcREWt2alN5ScK2ttp3d0FFGjZ2HRRE9YsAAAHXSURBVEjHxZSBcsIgDIYjVjBCq4ewtZ6693/LhVArrYbddHf74SCU/wMbqLB5T/CnvOb6K16X2nD9jUC/J0CtUSPVNMIpXvS3UnhzDJjnC+mHfm6YxYBVXU/XugFwKxbE+Kk+I6ZQ8sB2KbxH0RzV0UTcyoLKXDDGKWdMeI33xhilFLW+witRHxP/IZtk/kygOahD6s4v8KcEpvyRTjK/E2Q3kUA6P2rjxko2kY+a0m8u6kJt0FHkaWWbC2s3jndBDylzx5TFQYfJdS8ssHftitgO2k+814N9FK8BVpBnPr8/xU8cLe/f2jbXXMbYtl7rKf9a+7Ydny+80Aqibzadv0vnT7FkE3lknu+/wWf8PvN7QeX+xEs2kffMHx2/P3qRXwvyyPl3nH/0kk3kByzOH4cKb6ayToMcmYDF/cOwXi88N94Iisj33/H9xyjZRN4wk98/ougCJyl//y5//6JL5A/5/8fl/x9HAdUn/OFRyUdNyhw5UhZ5/FTQiboyn/a/yqYK34Xx94eKB3pRXR85f7GRPT2sRPWrJtD5hWZVUYUnrvs6fa2qgqaqvuvqhh/4HwX3HrjMVy3GsNgsj2FUAxmfRrOguTkKTeP5xLhGMds8QPNn/6pvxaJYKBtnLaMAAAAASUVORK5CYII=",
    alt: "KE"
  }, props));
}