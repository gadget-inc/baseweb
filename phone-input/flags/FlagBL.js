"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagBL;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagBL(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURf39/R1myRhcutwkOPT09PHx8ffhRv////n5+fb29iBqz9AcL+jVRmqOko+mg/npfvr0x0J7vnNmHG6Xz8vX6LKfL15SFvnf4qW83YGl1nNmHeiEjrq+aliJrCdD3fsAAAH9SURBVEjH1ZPretswCIZxI8XIh8RO0jbp2vu/zYGOSMZb2l/bJwchxAvYzxPo+x56oKd/Sm2udmZx7Ckf8jHF0hJu6uGDvbjZQCICVVnNbZJ2WTXt3xc+d415w3TCfQQbEnMY/QpHsyxn0pHFzrIYxJiEJRmTKTHSwtz0OjX2vEDuk3iotzDAwl0vbxeyH95e3j44tHBx0Vdf9BRe2iOKGVOldMjiwM78qGjTnUPhu7U6x+pyUoRtd+QPMH2e5q91HYZhXb/m0+cUX78ltiVYM4O11tkprwqgvRQOmlB//x3+NJ0a+xfe+SeoG7rpOBFDNvsK7TLv0sYLu66jno2NLeSi/s57ORD8TmhITkpzopmDeGafFfxOk8v9XcmFfJRXOu+qzJALDRl00FRxqQ64WtjwvwSvCdToYYzrvX/P/g5vjDOOnrIbQ+mj/xE/jtHPORUfghxPPJkxiebPfkqoekGkaxWo6BCuSjsvqMEYfbxs9Uj3qZ9T+KgbA/McyeDc1Eyd5wHm4zEUCM7DfIe314DRPyc4V/Mcb+OiCXhs+uf6+R8c8td1KvG2WvnO3Hl27k+6F9gaUcgy78UBMqWMDR/xJXy6GA3GCgYi19Tw+2319HqztYxgIIdSpOzG3q/r9W5N845WMCABa8Us9V73t9v+atofZQT/Y/3v/G/iPj129GoVrgAAAABJRU5ErkJggg==",
    alt: "BL"
  }, props));
}