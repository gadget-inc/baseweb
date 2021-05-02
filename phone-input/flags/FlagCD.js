"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagCD;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagCD(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURQOB/9/INOlwHeJGIdoXJv3SFt8bKROJ/wqE/9MTIvi3GJ+1cvGSG7++UimP5j2Vz36qklyfstBxNha51A4AAAHBSURBVEjHpdWLkoMgDAXQYAXDUkX+/2cXEsCA2IdNpz6mHG6EmQrLrfJOp5oM/KCfxtzxW8k2rQ/f6CdpMwuvvtez8EGHT/WjaOmdXr/W0sefXup9oC35bVWx4o/ptG5S4UjPVVtL+duqSxFH+vCBvkLPkRvGkZPHMkDr/cjEetyVyD7SqYCD8gR7DcfahdSF26wpn4by2jpOFROw/utWzdYJID9iHBanUAumqj2MtEy3U/RpvNfKo1c6yGULo2xZk9ZAHJ1LyYtzOT0eR7qsetHR02D0mXluB7HXpntuO/2lAYrzM1oQR9oMslnvCwjV6alfc9vquNuIUFV+bgxro81Ftt43rP6oVpfORfqjaqqm/8Wv585H2m0lT+b7QeeycaHh7MfZYtlO2dKz1p9k49m3erBnF5q9d2fd7PelTn5z77KfrH2/3nQ/0vasV58sIB8hX8c78Tq4zl59HE+knLkXAJAvk9OONdnSQ74AaPVlNg8+5oB8B5d/LofOkdDA3AK0rc9D3RRCkz+/yA5Fi+S+zFW2CvBJ9fvNf4uNxjf+tX6XL8O/1gC/6eg7vQPc8UUj3PG3NfnyMrmho/9Jwz/7cD3c0bsGNQAAAABJRU5ErkJggg==",
    alt: "CD"
  }, props));
}