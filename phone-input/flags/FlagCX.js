"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagCX;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagCX(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURQAtrAIwtS+QSf7HUDadUjOWTQMzugEusTiiVTqlVwQ1v//KV6S15XiqUcC4VFSjUq286OnBV////xFDo6CzUtbe8xheiyuHTiV6bdS+VS9UvmB8zllkkrKZbv6WDRcAAAKVSURBVEjHpZKJlqMgEEVBIdoS5RiJ0Sz//5tTGwh2MtM9PpT9VhUFav46JNV1y0G+mw/y3WSO8XiG9gu+tsU2aj9m+R7nUbgmfDfLTKn9mOaGge3SKPIQQvtvEePd6tPMxksIPzAyuNG/4SGNPzPQOxfe8fEMBr9Y8nFcHd0YV0q+m43h7VFihukwhN5Df3DOy9yO76aFd0e1WdP60Tk3eBOc62Uu8acihBS/Mck/VG2o0QLwQSbVCVEs3fV8vuJgssbs/Sd5iN252o0yVqek8+VyPpGtxfxFfU3qEy/+hQfRGWjrAJke+pJvwQAEUA993xf+MX6k8dcQgl8da4Wcm+xQQy0aCr6TnzVTslkjGkALlkoQfC3Pv9Oa8OBW4mIMa/JuC17n+DM57w1cN/BiwrJ7eAaWeS2FLUQjL6EDbIIr58ittR5PDzmVCaUz9xHHHpweEgxOLOZxtATDjTAsxqxVJy2cJvEtQIteaIen28JeGOo1eJo0XKH/SGo+Bb4CHIzwRDxupmyBf9uHnn3mUloMRCuRf/EVWcPZ2gjzjdcYs0SQ+k++JO/5tdoPUrnPQvzKguEwfs9PY3ym9TjNvLui73P8pYH4zocJBjcgK7GwFasa3dDuZisgqGDq+Rrr8fVsaHURvqoyI5XixYYhre+POxmjn8zwPFTzTeCtscA3ESY9Lo/mk6YlklxVxOvEosD/do50FFlUc8VcxTDF/xup6VaVes9/tKrU8onXj/v9gaSSEvubPWrmW8lTwep6uVwT0WQGds2Uh6B4FhfwFcZ+0Ual8ZzzsqQU+pdtSr6IxSijII14ihvFzwuNwvOrYl9TDpNlRWm8Zf4zYtfZ9ZMwjRCF+m9xGtUBzYf8cxrVMS1/AGzQRYS+/XInAAAAAElFTkSuQmCC",
    alt: "CX"
  }, props));
}