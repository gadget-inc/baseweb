"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagJP;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagJP(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURf39/fn5+fX19fLx8tARPcQMNt52jtU5XfPo6+Ontu6uvbcO/ckAAAGqSURBVDjL7Y49SwQxEIaTxsIqE8F6MwERq3UjcpZKcoj1RrFUFNFOObG/Q8FW8AcI/lBnkuxeOBQEW99Nssm8z3wI8a/fSY0HnTs3s6e7Jl0lB6VUQoFUSpKEkvueNW2TRW9yCBgEsO6zTgBgDC8BJa8K4C9ESgCgOgJGrQ2+n/IzEVC3+BwB/wEydaH5lhU2lr4/pnxZKpQLwGYFTEtMQTXDXgX43SFatfisgY8VwADoq8oPF9nWYwWjYdb3fWDT972/TyEilDBaG2Q2hEBIDD0ThxQlR0Mj+AKIxoSsPhIUCGDEGCV0EjDQZ5OpI8xx3QiThBofYyhfjOGBPESilCArffqanViYS3YNHY3AQuB75AYx641Hp8EMDYlJGp9jpTmyXSoUbVX+aUrhXQHbYQkcj9EK4CEGvY3BVmBnraWbrXqc2mJ3VMHSyTat6wG4RErqSNhxhVSCAwfFP082plgjOv455zpn8SU3mFOM8jjRtcI6O8i515t4drtwnFKatMINyoXyjezyqIDvlQGbVtq17I8VutUKP8r+doa/AxO3yIsfi0m1XPsFexHR8wi/OxIAAAAASUVORK5CYII=",
    alt: "JP"
  }, props));
}