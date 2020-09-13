"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagJE;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagJE(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURf7+/ulAVOxudfCGk/T09Pr6+vHw8OolPOEfN/f39/O9xPbP1PCqs/rcQPrkYvzskfrhT2CvZ2YAAAJNSURBVEjHnZNZYsMgDEQxiwyYpL3/aYs2EDj+SIVDQNboDaR153ke1f0n6tG17sTw8Wt19KRk/fcWCD71Hy3Az/v39fv+gdub4lU29B8svF8c7yc46q+5DuWZn+SDJw+TefVsWC0kfZy+CCOT+jDwQOm0WOAUPdMk7lm9wBPlkytr0vEw+tFzQ2HTtJsqSQJ/lRfetCYsp3KKGvfYfYm+3z7qucrCo0jd6LFZ6MlD+P4T3CmfV32KfrNQZUdWDdzH6d2lEQ4t5BMfuYVA62Dg+cx68sE3AV6qxELo9UHhmfIe0rM+pUYWmFtw2wROrja40RcabCHLKbqFIvDMeISXm76YHDKHV7SAcG6XyYvCROPKSFHgjixwi2Nc6YCzQOtdGd516tFYnvXOcdWw+8LBx5U9qI/cQs6izh5UyQVa7Tbh2DW9xgG/Y1b9FnXw81kfqx71nS9qnNuX+stPLZ//+kYvcOlAYSzEPqY+jqEBXlT493qMRv0nYLV+oabro6z1uzERVSHGGHTXLUQD4z4OUxzcE+Hi+bio8DpGh25hZUVHShoUAscI0rqIhSwW4kSSfm4YnidcS8VCJguUUqCb4ljaLAtgX0SYFo5m3lj9Ct9jtfBBXx/go725hXrTW3iNVg/04KduFoD0tLrD5wxzFyyEsl3fY4MDa8CwOQurBdTffKkMxDoAfUA6WFTPOlhMSZ3MUVU6cFqOCm6BqxpAqZ/CWnBjnasV2i5xb2iYzsJHdTQPbN1WC6pvT2YfTqH/Z87Avws/9Q3+Ew2lf1Z/QM4lG5B8AAAAAElFTkSuQmCC",
    alt: "JE"
  }, props));
}