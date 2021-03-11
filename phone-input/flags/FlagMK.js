"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagMK;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagMK(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExUReAVINgPGtMLFuUZJP/nNv/pTP/oQfzTQOMzJPe1O+dXKfKbM+15L+cqtU0AAAL1SURBVDjLbVTPTxNBGJ1mTQRPu3tBhEN3Lyhy2KQHETnUZLIE8DqLFS4mu9MgHvwBpK2XQiOIJ5UUSbwUBNHogYolMfGEwkH/Kd/3TVuq6Uvbed/73rz5sZuKAwXMVDKMG8QNzaxzoyZGq0Q2jXgTNNc0sL4diMy4OleJz517wWEwWUesjoHdM4aGWZkMzM28UbC77SyaxYaxJRQ/WV+K1FMmp5BKmaYhs9FOribRZmutXKVtYD+f9DQyUc9NZgBDQMMoFilQ44PW72kvVAcZKxMEwrJEEFi3aMuWZa1FUSUIAhxsNmMFBIGBLLjQTbCLOi8wp4orpJmCPoKIhQvNoezVC2jgkrZJFJTAHnxx8MNA9JRfoGyoORY5A8RixzqrhHE1U27Fd8BqqJph++ro/ybjUlGIT0vFmugtie6oCLrSXNkqd23bQvTQQ1GFf/Xij4+BsAH89KokiXBcKu0UJnz5/kjIMJx497uCBFvsJzrSkaqhJ3pe/nkbhjIrQiljKSWChL0VJUmi9aGNqYuSEGYF92PyZFPLmvFYcE/GrQSOgMExfX3flm1kRQd3WgndDNhDKrUVMuqp9h6MAacoO4S9WGPleMexHcfGKdhAU9Gjkzv9vLdJJwUHiXwPTgcuc26hU7LZYPxO2dlAf3LFXqE61WEwuFJ0nM+Lz3ac/tL/CQYNtWPIvqp3M+CNMsQdVDMrnQbX8cAGlap7Lp4hykbLSwYPgCddTWYd1x2Q01CvReqVawCD6/rAQaRew9knJ2hGNcljP9SxhUuCNxCpPNUXpMSv15dEs67v+ZRA072ry4kuoPb3pNxFMNXbPlnSgoezRM+skvWXlCc0rkWJPkHDS3NCP57xAwT5/jcpv5IyDGWBNseGYXoPdkn38TCeMMH/gC61DGcoHrLs4VncZjZCb86JMWw0OWXBMMXMP4Y4v0oGWk4vGHUEhjuGXocaT8HgHcfAm6YKw7Sh/lYca11Pi3WM4bxrxCF6AZuGIY3XM1/+CxIARQ7Zpbz2AAAAAElFTkSuQmCC",
    alt: "MK"
  }, props));
}