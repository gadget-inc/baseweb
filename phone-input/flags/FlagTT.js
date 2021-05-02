"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagTT;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagTT(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURRUVFdobM+sjOx8fH9UZMOAeNc8XLfj39xsbG+YgOO3i5Dg4OMnJye2ZpPHCx942Suhwf+RPYVFRUaenp4aGhmpqaiiwku0AAAJLSURBVEjHjZWJmoMgDITjgYK92+37v+qSTMIhtHawgG5mQP9Pl9Z1fU6NnvHyehmPRVx4agPefP3+g3+LdVsn4O+3ALpx3bn1Ty/+w+PQPz647tX6T2fe2bF/vHPAXyeAb+166A/jZf0GIYRYEnCMMjXxOfHk2oXg/VsD1F34ggWRnF6/QkjWMYSxyglYf7xtAsHH1oMQWlkK4UwhxICUIfNJINzCR5GOgODF7kWyGw8I3/xOGgLe6rKNxBgLcEEryybr8+CU4smbJtuDQXCI0EPTHCE3KgCCLxJkE14hOA1wLnXiFy83g7AXAYIzBf3JQGkeAwRC4/cKoXJiCy6QywoPg7APwDN0HVF1phAaAcKx3zGE7dluAK9S1z9I08PtIZjwPXNFLZqun0JCAYHkwAYKCFrr1B97PaQTiq/sJI2RgO2GUudspKFyxysGgbTZDkDRam0gm6eEoYAQ/TkGEAovT2hohe8Z9k1kIxEgDFVCzz8AAtnaaQ+AUJV2/ULxPJHfN3mVHrV/7jSFoKtTDlAIuZLmgUee2sgDIFB1CzxJELJ/hmlOE+kAoXj+mqAQZhPN6h1sAi2AQKXkXk4CIS1F8yclCGq0JwEIWjR89C+zQsgJKkDI+/8kfM/8/gZI3wTzL93GHb5n1MgLhEHqKNeXXswUQiN8z6SOULsUfptbwLMNEIoXrqFFNGs321zHS4ZQSV6l+yL7T+YmKXYlBGogpPULb60WApUQan9PeJVaP+GfyqF/ya/SDgIHXI/9EcL2GcIP/q8Q/gEtdToE3M+NrgAAAABJRU5ErkJggg==",
    alt: "TT"
  }, props));
}