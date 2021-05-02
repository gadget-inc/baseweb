"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagPY;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagPY(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURQ9ItwtDr9YxK9w2MOE8Nvn5+Qg/qf7+/vX19fHx8TmBU9Ph2I62nKrHtOrYfliVbt3EhM8AAAG6SURBVDjL1ZCxbtswEIbPbyAtmgP6BQxJD2CAfoAshFSkQ7RwzmK4HQJ4IUAhDZpRQofOjW1kKpAEWQukfoOizVggk5+h/5FU7aipuxQF+tH38+6/nxpMk/2M6R8E5CTPpWSd4MhO5MR5ckx5JrM8h0o0MveSZTlMiBwRBpn1kd6DjCnbz8gH0m4OzRDHXemIRDoUYphC3a+7sjAcUOoQvb0QvhH4gmMoenTGAYn9/I3AbD8nvcDrhy/9QDGdFQUL36/Wl5f3sLmHAgSwnbpSs+Lt8vruyijlvQKvDkkxU3g4av1RqdtPHGaLCYHA0RLychGe8KNe4HShNt+PVrvWIRljrLXQsrTnH8zm8cXKOtgxZk62LEtlrGHnfGE3j2crl/cpi4CnZOdsifvNIlh4VG4DnvW1rW/vd5051bap69ZRt++XN3dXrmvbBto0c+JN07R8AP7Jz63lGXt2Lqh9wrtvX58a/cAvXNB/wSDyxAPg72gXgoMTYwPhnoUrdkUUMwNeD9iIo1A8wo584PfsBpLnAwmodFIFfnbaT8eknakTrVGJu7dS6Yh0RxUWlYvxhNLH28Dz/DnwA50FkuHuP8kmAAAAAElFTkSuQmCC",
    alt: "PY"
  }, props));
}