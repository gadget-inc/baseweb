"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagCF;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagCF(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURf/QOtMYOwY4jNgbPgU1hDGgNPT09P/OM/z8/DWpN90eQS+ZMQc7k+AgROMiRXZ8ZOQjRjVVe7aiTuQjR7q5eQYAAAGZSURBVEjH1ZXZmoMgDIXD4thWEXXe/12HbOCWmc/2ak4iBHL+0LvCaOh7nqd5KjmTLBtYjcKibvDrrjHtZfJ+HDkXWEYsvMflyMut9kcvAZ605LzCmvPisY2aUpoSs6VIdEsdbmshvM89KvuqxBwK53hDytOADe6TioeYfPQlSgofveeLtJe4OMnDB4iR9rjmmNcoKhcHXm45qyl60NMin+qCvxJYjY/51yu9UkneTf5hiEgSDkmWzeQZq7/hPr+XyX89ODjbfuKbTS0YzGOStHx8HfhtUwpK2IKbKSdee1rIpvxJhQn8UVo2m2dSJ9zmQwgvDlyCyT8NCaczLJvJM1tn3OYRI/H2Bh/47b/e77onBi1SY+jzotaoPqoADyy6rWo/nfmuU7BasYTOUNjLsn3ODyVQgwZfnHk1NGcJGNDP6rjkYwhuG8PeVwWDoQJxclg2myfWyQxn8pacE5wXuCsGnZP1Pt/ed2+9X/Xm+8Ft9cH7v/E9lL/9snLRyxF14PutD1oqqLAOPPHN2CbUxy508f6V/jv/A0LPRYGXYhPaAAAAAElFTkSuQmCC",
    alt: "CF"
  }, props));
}