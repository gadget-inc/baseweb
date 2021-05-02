"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagAS;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagAS(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURfn5+QIObgUSfM4jMwEMaQYUhP39/fX09AALZQYTgcYfL74bK//EI3JAHAQQd4xLI4wpOvLk4jgUYqkdO48ZQOK1tc43ReSZoNx/h1IWWOrLzB0SbGUXUtZjbaJzVdJNWncYS/vchvjkrv3PVLqZg86tmTHdO8EAAAJaSURBVEjHnZGLmqIwDIVTRMpN+FDRxdlhvL7/K06aNL0AuzNyKlILf5JzhO16ffw9bGAtXAyHDWodX+yPG9JpiS+2BX78fXq2v5ZMf/YAxZsypklfZ51l2Zv8YOHTuctIb/CJM/3nkol+y29D01kW8AnVtquQH36TzE2HfOLFb9MKz5KZaZR+Ce96J3GphE/2x9KZBjf5ZXzN+3tYNvtrFZkGLIFFumfbdniHZd4qMN0BoRnw6G3bjnTyb74JTBsKrLIL9kb1wCWXeWPaLDTtQADdP8fWSst5k4SL4GtVGqFpzSB36tqd0Di+699EQtMEl2yaXuHQYNy1vKhAJ/2boP9wkLk7cJZF7c7IVKAinrdC0zy3Nx3puRNhhbGP+YnpHwrsfIeZaSdtr6UCo8//Y7BzG9MCavcFfL/VN9y9+s7yII8Hnrssz9qSUWtbCOq65qPWtpf3GhX218GSDe25P+6ovX8R+Yl/rbWe1LnVEz1cXUBcNUpJ/iXmL8/Mna56JumBvBGXOFby/xPFg5jPvL99gF/M8sdGUZkotHh3tfT9wfSt0+6U+ys7hVJhFMLxu5Z+3HV4Dtza9idRFBUuE4XTfUbP+ntxFHhhFAGPg8OveKXS4ViRTlLiPm39X56jqIyNKIoFPl0eQKVpilGwoigiPqV3+XWUkkVlTQnrI4gi5kXMxaLf+SyKmFdpQKpgBF+HojDiKIIL4l7LylEuiq9+ef4flOc+is+LHeANnqeYRNG90d+WmEQBuXmUk1Le02+7d/fgOUYhJfoO8lWSKKqVvItiPc9RfAOJjVRqfiRSyQAAAABJRU5ErkJggg==",
    alt: "AS"
  }, props));
}