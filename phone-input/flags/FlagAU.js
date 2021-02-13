"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagAU;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagAU(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURQMOi9kdNYKIzNcaMgoXpQkVofn5+QYSlgUQkQgUnKmt3Fdfue++xN7f8DI8qfLj5snM5t07UOqQm+JkdG11wVReQoQAAAJlSURBVEjH5VbruqMgDAyoXFW08v7PurmAorZdz9mfO9CahMwkWvArvNbRhJ6gjVLKaLb7YNJW7W8AM6qXmeKZHyfzUpuJD/jZpHVNRNv5czDjiqpL/4DfRxSg5LnytcHi+139lT/Mk9nUlkxgflioOLq5H/oB551DcQKtAX7mRQoyH5+b4nZkvebW/FaTbOCFgAJqZP6oFD+Og1g5Nz1aA81YTHoVPl5N4GAezrlTCNNwAZgG3H+DeM4NKHzjd0p1qmOgwSCfbKOf81VzrRrC9zxolv69RGUBGu4VxMeUIrCzdsnb/RPndP+eMPg3KA14ef4h8XMn/vhKZpEfJUppLz34UrYGBUDLGrdcpwq/w90Thrby2wYOPm+/Dnes9I9SGx4d/wzgc0pbh7t3CcwP5G5pmr+Q6IeofDyrVDxlr5mv5TSkKX7m00aofCkesFzhkzGuGMve8mDY6tidzy6s/Pohp/DRihMeQhagHO7WFgGepX+yAZ+bHjhc+Wj39AYak1C4mj0PmmwAnnSJWHwR4emPbNs8GbOISXxrW/LhWMiiRYg66yir+Im5l3Dpv8HhebBX+C/eHWB/iDnO/8SPJj7hOxw0q7fbt/quDmfbUTT2uPhF9hjgdpQye46QS7wJSLDkQCN2hSTb1nWNLgNODH3KO0y7q7mLWsu3s5ndD9Hw6UWyzP63/Fhfmr/gA11FILPDAWiGJB7X85DQgvTAHjTT7RXyPGdX84841K/J4AD3caD+UnL3GDR9LtHFxYJAciSlRPCPia4rb+DqxdWOLgGqX6JH318E4RyX+79GP+JR0n+PP4FDQYr+OF9+AAAAAElFTkSuQmCC",
    alt: "AU"
  }, props));
}