"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagKM;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagKM(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURfz8/PT09D55xESAzdAXLf/LRkOTPP/HO0aaP//JQUF8ydUZMNocM0yfQkaD0UeE0qrOplifX0iF1JjElOrv6aW1QYG5fEmF1MrfyHloOa06M9no2EKBtEOGlh9FeiUAAAIXSURBVEjHpZGLooIgDIaxvBMFama393/Ns38M1M7J9PRDMsa+bZA6Z19JGVN9yZvzl7w5VxkNfDJvRXv0ZTNftJkvDRNB2cReVuZ5buF/CvxfCYpPMAWo0uO0FEVRYeADUxa/r/yhj4i+qlBAJce5iIr0fD9z8or6mEhSThKsleLykoTvsJGPuL/G+R+8TMiYVm1ToI3r27Ynw9238R7viUqs4xbstvpggHSOEtnElqZPaJvI9GPch5/4mR/Ic0fxknwl7pBAKsxRavzxZJ7fjHGuz3cInJommmSTFbxBQ7acyfRdskZKyiemfEkgd1jBD9TYwFA+y2AT6kHa6GZ22HbMk4n2Aed8/1wyXQ8fBR6PYQWiXNJITuNzAkVhaMsKZDvLJEZ51Svq5+VA/CAl/eRk+e2g9YFS0IcV7MNkqDzPWzyKEc6jtLnedJSP/Uvo3/AFmGL5q6d6jRTC0UDnGGy7lnPctF7LkyxewMCi/xR5UpJO59I8vKHDqfLtIsHd4S1Q/yq0lhnJdDTEqeTOjv6Ezjrfe7peKr6Z6du+34pHPuqapt/wz6ZpTs3p1DSXS3OB6fdQsLFCFHB54WvEHU9HmuO6pBnv9setmvLP/XG/VkcqhfAJ/xjP5onC/tUPRf5ZL5V7e6hi7zULkfSJ6ztf8Av/qLcpZmH+uat3S9G7X9YuLIrxZdULLuIf74/rj4mU232lH0kfTtGKnsxAAAAAAElFTkSuQmCC",
    alt: "KM"
  }, props));
}