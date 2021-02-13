"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagNR;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagNR(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURQAxgAZDpQVAnwI4jgE0h/3HQAQ9mfb2911+srrH2yNQmM7X5qi41LX6KH0AAAFjSURBVDjL1Y+xSgNBEIan2MLyvCe422LrwC5BtFnYbUxlYy8R9hWCVgEF0UpQSMAyooWljY+g+FLOv7sXz5hsIyJ+uczO/PPdXULbZSr6e6Ghuk/b1itUFEMpUb92ray5r0hGaplpW7lskTbUWy+ttI40JMtsFlSqDY3LNKSU4lN1hJAGVM7lEYUQOO3gLJ35G1hQWRlzjZlChxZnfEJnr6MTwg+EwzIH/0PQZQZFYdgTzvjT4/jbE152nkuveNCzx5vhYq1gtNN673U2mb8b9A6xc85obZgBOWO8G02YU15w5JzHUjuP0ZLh2ZgLFs69Z9dHBScuZ4kHP7rEE06uPK8wswSFDT8gdLudAFxeJyzFI72iC/tkIf1Iv1EQ+/ibb8bGwXrhccW9JQsW/u7p1t0LIcjCQMqtFcISMks037qmJBOvWMpwSAKbKU1xE5HgipNL7vIcSQ5uS9nnpt8Ws9/gA10eMbTZ29pkAAAAAElFTkSuQmCC",
    alt: "NR"
  }, props));
}