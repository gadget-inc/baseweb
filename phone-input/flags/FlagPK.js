"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagPK;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagPK(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURQVFIP39/QdPJfj4+AldLAhWKfLz8gthL7HGuUB5WHWbhdLd1yyYfG0AAAJJSURBVDjL1ZDPaxNBFMcfCwXxNuzJ9rIMjmB7WgZGai9BZlj1FIcdNfVUA4M0FysrUXKRhFbrUY0BPRkJiDc9FPGv8723m1+1Z8Evm+y+9z7zecmCmKd/YZ7CvwSqqupXTfoFXVVRFK0lgJUtmtiKrmIdsNZW+LE4soRwtQZUTBR2EdTYdcMFaUF+Hnj5dh0QecphoHT2bndW4pOzJTdaQDO05Dk2sdv5sRnoofhgS4wjAzsEAqUN7qOYBXdn7F6MnStLWqHTNNd0BYzrHGyFMoRfk9EYK+y0Idc4xGgyhoG4EkJZft3TeD4459rAQwoZyi/iMd0faTMOnDbQLKUdVD44EFO6D7R5Mm4AXKAXhn2Rzogbab13ujQsVzwUgg7e7o1u3pJzIKcpfgUf1H0hnocgJ3JnVwWlFr+B47G8hwYfvAqdG1h571cBqo+EeOe9UjIMpaL4FUBKqY7SdKporp55LynZEqDBNSF+4oBnbFAZGN2ly7BhJ013JZ7FbUr2GwMT9Qq5r/VWrUb6uAa6JKBQeR3/7rABtoeNoSaM4S6+ws0GOJnWQDSmG4ng7nt8Z6/56XPPz1dgkIoykZm8hD/GnHp59Vs8TGSSsSFGQ4RkYoT7Yu/NWYyvEiLwb5KgG2PMMpkkyQC3xahj7LUldRoDUghQY2NEMOYY5oZIR0w0CWQJJHD5jI7EQ0AemdrASerA9gkWv9vARQbAQ4KAgg3Y+PR9AuhCI35BjCsGajIEtI1vS4ANdXseRteBDFa4ujhn+Dv/A/AHcC5FNcTKN1YAAAAASUVORK5CYII=",
    alt: "PK"
  }, props));
}