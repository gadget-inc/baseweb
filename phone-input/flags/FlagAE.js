"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagAE;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagAE(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURRB/OPPz8w8PDx8fH/4fLP4TIPf39w53NP39/f8sOBwcHBgYGBUVFRMTEyIiIiYmJiUlJSof20YAAAFFSURBVEjH7ZBbcsMgDEWV8rBTY/D+V1uEEAQsT6JmMtOPXm5AII6EA/eTQKV//q/xywLohwHTCe/RAl/TtU6JxpN+YxH7T3eHcOkFSx2ZvxTMeyV/qne3eTTj0PETruZrU8v0b/oTyOuqEfG2PgBXPT+UUPcvLE2kZ4gfeKb7v+hJK3qVYixB+9XD2BtVrlPWe6a4TN23FNiT/Ni491p9N1eQ+df1Af528zzYOUZ5mjxlSyzy/fJD/LjveeRdcZsoN19nZjoHph0FrvV/TWAbVx+g5J2dhtPyDaxTSulIxxHZuGElNOVxTSl/v5secMRYsKq8KaJqc47e76gzxVGj1r86/4wx0cRsI2rMAVEsjI1GwJhthb41AnfSu/ym0Qf4MGoLW3a4kMDvIexhz6YVFS7OZF4jgf/SSOR3zOx1nTWev9v/ByVGQPgv+kFlAAAAAElFTkSuQmCC",
    alt: "AE"
  }, props));
}