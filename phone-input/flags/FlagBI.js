"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagBI;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagBI(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURc8YLjXITvLY291MXTDDSff39/Tz8+IiOS6+Rvv7++iWoN/x4mjQebPlvOhtfPGutqPgrZIp+9cAAAIlSURBVEjHnZIJYsQgCEVxI8as9z9tQVxjph2L6YiGx/+awrqueC7/iROJhZXj+gd+RVL4eQtRvPKzFq6MFX7GQhZnft/WWQtFfN12UOouS/2NhVOX+lsp4tWUhdCIK+E7C+ZX2lTxI5KgrOotBCqDVA5dOogTC0oaqKO3AAWs6UPc8iB9nul5WGhcpLwVt0KTfxsbxPxhYTFBo0MdzCCeCWvBqtqBLLjVOSpxYTEXL1Z+LrME3uVcxMsDVhrIX7LAZRpTygvUsa9rxCPA+jFU+lU7uljIPy6mLtvgHPeKxjnxNdSRAEaCOU3I7Wgc6lne8Kq1IKHp4rSgNHBPZ33nWwtJUfh0olH8A29tbtD4d0d84z/z9Mp7KdjKCdYyb6XMd7wvoz5bZXMD5n2GfSr3oi+5rz2wYjWkxleWJ5CNYkIKSB+D1oG/RE62hKaiyHjibU5t3Wb/BsBE3ZRsTX+fKQu+jfTe0/27E+CMvCR49CUp4GWPv/+oT9/fjwHj1s6nz8dGLBdB/39f8CLOHbhJbODiNfJitACDOMZSFE50XVls+6+8OkSWhsbciCdduj0swEM8R4DlyjBeC4RsAXsLDW+PbBs13TndOt0c0uXJQufrwNYCvJ08wFuEYq6xUPi7vBXxpUVlYTTmq71tz3cn/xyjBajirop/DLaQ4i78l+KvFmA8+R/RW4Ap8dECzIkPFmBW/GEBpsV7C8JfMB+h8NPijYUfZJQ8p0YByxAAAAAASUVORK5CYII=",
    alt: "BI"
  }, props));
}