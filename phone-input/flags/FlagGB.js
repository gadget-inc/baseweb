"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagGB;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagGB(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURdseNQQQkOIkO9cbMQkWpP38/AgUn/X09fr6+gMOitMYLtAVLEVOsNnb6+JVZvPb3d4wRRAbk42SzBUhpuudppyg0/K/xehzgOqKle2psaWq3MSDoXV8xdcCecoAAAJXSURBVEjH1ZbrkoIwDIUjUBoEFCkoOvv+z7m5FGihqPtzAyok5+s5MAwjGGNsU+zLmGwp0iQUP9YMABPS9OX+zLuXuV7gAXC5JiN84BuLE3R3A/cOJpOI8Jb35tYYMPahEdrma75prZhTQdMaijDw8ei+4t3IBJuTJxSu30co93yZMO9dAWVJHfPssgE1QslbWWDIIzLPfTfiak7nwHJKRLeDIiC2TclVlCFPK5daZP4gc2rg6FgHKm9alAhosHfSQgx4xFLMezafLMnER/x1AcolEebRnl/NqUbnA3l+jtANPO2LgIfZfzGfLzLiKd1rjsAC4kE22pkXcxmu5jHPAXHIJKDt2d/jzKs5LpeX5DUCq7i8P4g/4kPNXy4iAA8LYF4B34hSTasjtpb9r/zqzxX424TouDK9gk+Vfd0MZtlGMp9nCTZb78TnNP+zctp0z5fj5SQPD3OIvujDxad+GosXSEe7qV8qD3+9KhRt+/IrxvawvIA+xxq74zHgvUce99/zW//8g/8prNvIvWc3pfnpcrXjLSIint5R1so7zP5s+J75O72ibdsc8LO5aoQ/y8Z8uHYYAVLmPQmIJ1Zw4U8niTDQKzqMAJH5sAb0+XmNs/Jbh5DfjCrmz75yz1eVj5B1zyUCcPvWh+YV4wGv/tw7VbsIsGuqcMfLslV120SAxVzui3izbstLT2axG0SnlS8Sb3nuaemtpv8QHAF8HDFXUoXE1+daSvmgZs/HlZ//+aGIJMTXnq7rlT9tI0BonuTrkI8j3C/09zFl/plfI6TMv+B9hF+1DkKtqh2ivgAAAABJRU5ErkJggg==",
    alt: "GB"
  }, props));
}