"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagVC;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagVC(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURf/MNAN5zwmD3AuG4AKsaQCkYwF2zP/QQwXAdgO2bwZ+1gV80wiB2QB0yD68Yb/HR7/MTQ+I1r/DQX7CVblPYh0AAAIDSURBVEjHzZOJjuNACESx074z3Zbz//+6UEAfcaIdb0ajLTqYWDwKOwrdTpreaz6J/iO+57jO9/1NQ5Jcr/HGiWzGRd5Rn/JPfNbtQ77/Mf5RcV7PyywHWvAx/s7R8vu8ZzzXsw7QwKH7HSwnl7bGOWY+14wtcxXsf2/UO7/zdnu297qBMeCJV38SyxmmNOWay2UR/zq/5NXSTasamK9e77/iFD6CiexJuZ7gr8ZZBHjN4i/cl+z5dtjjZaOuwNn2L5zPgb3yskC0TWPLu/96UmEWYaI9sMz6Hs8724qJmWSd6fv+soAoUlXLu1yWgCMpoKZtXbd146MwF/w7U3LLR65lluNBh3Cm7SRiT4qwZzaR1ZU/Rrh/K14FnQmWjGKI2k9kawehNb/yl04ng0+RN0FAgg7Q/Hp/WSAIyC0yRmqZGgwvI4TvnOxQqj89hJOmJLXcITJIP0i0daC6ckUngChdsoDegH8WRgQSULU5P5lbss6D7EbDB+M7GJcxnblPZu8LTO/4QhYeMn6wB3jav/J/wx9hQBzkD3CNpzgwnu2FH56DunHsxgLzl9J+CD4cFW+YHgkSvBU1C9T2Z3/muxyjZqoXaOwJ+4TqDDSeRM0CtT3VtF7+wh+NvfoPlqHCf73i5V/Q+rtsBn2NHn6h9xpOoswhRBf5VjzkI/5T/9/m/wDJikKMowwurAAAAABJRU5ErkJggg==",
    alt: "VC"
  }, props));
}