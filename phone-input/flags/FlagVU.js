"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagVU;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagVU(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURSShTdcdPSGWSOMhQxsbGyaoUd0fQP7QPxUWFSKbStAbOuYjROkkRuslRyQkIEI2Iem/OtGrNrSWPZ2CL2RVJZ1vd2iHchtfMnpnKZ6enqQgNnAgLpuciT3PbjEAAAIHSURBVEjHpVQJcoMwDDQgsMHUHElImvz/n5XkM0BbTNYZrMMr78JMxO359QnEzbx03/dfvc0x2IB6e3UC8s3Q9b3uNaPX732qr2u+ThCzQTz1WQh5oQGvqtK60hVDr2IC5WndQ0g5DYY8VKeAfCmv7MGXmtVu42a3XomZBlgPDYK6+AjweVpPY3EbRhk8pLx0yn69Yr4xJGG0HppcEN88nAcwr6LJW+IGYMB5oKgrEE1h4fdt4oF8vDZ6APP84/RqXEN8A7ycBwB4sYSu+B8d349sGuA9AHnoqPn/Kjri8wTwHih/dkfB/t0ESD1EFL9QC8ePSD0clCC+iTjM4zgTLfFwDMQ3g2Q8oocsPoyWL/klRA9H+Xj9OJjJCbAejoL4VylnFn4BxRPmPD7ePym48P0KVPb9gNKvZHtQSI/+MWGQqnXsd/GN8WBf4ERl9/6VCufVNo415GMZvz/9DSrlvr87G+9UiQCOwD3F4gZNdL3Tjqkp60MI/HE0ifZ7XWfy8R/Ua1dwmB75J7S/8RPtguq1yOFD0I50Ag04hCVqN6ydqbUb8deyjyVoj5fnYNlqz+NH7VBi3tKvdU1OREhcL/YxmKN2rIcmRW0876sh5jadiNo5bRO8JTvgcUF7ewrCaS/bcwPEbOklDUhXDH32tvuYvj+UTN9Fu+2keYv8e/kBxPIRvfwBwYZLuu6mcVQAAAAASUVORK5CYII=",
    alt: "VU"
  }, props));
}