"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagSI;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagSI(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURf39/Qg+p/j4+AlCrtcwKt01L+M5Mw5HtEp0w7PC4uLn7zj5yxEAAAFXSURBVDjL1U6hbsMwELX8BbX8A1bQVNQowIMFCS+wjUtcPCmgxR0aLdpoSNW/3Ls7r+2kxhoo2fP57t2750uU+g9wzmnltEaiVlMU5qQlh3aNxgFcwy16khw8rsjk0OLkhiUUhTFLN2hXnnBVTR1Xw+Vrqho+x+5wqhn2wHHOMOGMwFHoEocJvrm8bvB+9DMbOsHH5b17hJXy3nej91Nz9jdA6UbGW9lwaKaXmQ1SX5dN3bCfpnPVUPnJVmA7+wjtShXSGkqdcPiRidiFMshGthgh5QFHu1CWZINkSKKKjGpZog0MKxYa0ry1IlojBmt+ob3jPxtm8QzDro7t8wwZJ+040QVNxRBjTCnmFHcpZ9AUqcPNkbBVJMXSZ+EUmbWcNyrW8RfDEIeACEwoR5GIh7hWfQhhGDCiIre/shDWauh7BKWhD3wx58yxUWUuuKMF+EQdTzB8A6kdE6Q+QWmBAAAAAElFTkSuQmCC",
    alt: "SI"
  }, props));
}