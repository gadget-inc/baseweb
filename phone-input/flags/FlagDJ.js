"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagDJ;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagDJ(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABOUExURRW0Lvn5+fz8/HO67hm/MxvFNn7C9BOvLBe6MXe98PX19XvA8m+364LF9fHy82y06d0aH83n5uNBReh5fKPgraXT9PPW12nPeTvDUPG1toeH8mIAAAIpSURBVEjHpZAJgoMgDEWDtoqoVKt2uf9FJxuLdrPTl5SEkA+xMPY/AYVf+qonZ6q+YqQW87jXGHMoimKpVuhpzNdnG0hfjA/l3bC+8H3VVuhtSzGw2bd5naCK6PEb2mdU7Uv0KOiL8U3vG6Iev6FtWnL8NY3kj5HQnPdJj9/QvKSNMd4i5PpibJtvWenxG0K9DJ5vJStlKXkBE7SG3Cyl0JQrmqzSlCLlO4BVbOLjRvkBkGdVT5nv3yu6VQaGKYxJydKV0cRjLLM9Ll0H+ipyj9eMfMQErS5dF/eSQ3jYuMHFGXzf7STp78PdpMsWOT6hbTitikk/DZPJGLsTd24gaV6FNP4w+JDTz1enHZD+ciZQz/ESLnHLHr2jp0gsnC/O0fvs8/EjYLh/UvnkXIHbcMfnC4A6nSkmlRsjBV72vK/tQR/Br7oe9+gFEuOPhTy+G2/HfXrsdXf64y7n4c47Yj4eyGQRdB8j/fT9afK4+il8gL8m2eGoJopDiHyJ6i9uFcfbIWt8B7gnzJ9UD3qfqXF2i4ZYNXUpJqgKXsTeaYKzW1ZZG+Q23mKtlrVqLbgolDnm0KbNaw7rMr7vvD7N5q/2O2R+r3Ka/Uu9ask9zm7hqb0oo3mB5Ffckmtgt/km3cVtjEiR8SaFtQKy1pjEPgvhfT/bh4689yUqv8I/CbPXG0tBIsgCkiXj2aHOkIMUJNY1ZB0ppdnrOhO8IZ3HdsDZ6x+Auf6JPz4mUOsOk376AAAAAElFTkSuQmCC",
    alt: "DJ"
  }, props));
}