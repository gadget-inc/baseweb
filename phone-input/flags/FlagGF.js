"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagGF;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagGF(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURf3eO/3dNiyiRP7gQiqdQiiXPiSPOt0hKGWrPqS8PtjSP/GYNVh5OeVZLZhRMsOTa78AAAH6SURBVDjLhY6xbhQxEIZ9ckOCItkVECkSOi39Sm5yR4NWNjQUV6xdUVyzfgO0QjkQiqJ7gIhQUkQgXUlHkRrRXAFVniDKa/CP7d3sBnT+bY/t+T/PmJ1Pd+opm59mADXLAeoyB6jTHDDLAWqDU0XXYuwW0+pFANS5rqqi0LoKezpT7IA5ZfS00kjp3tUIsYVSx0gjQz5UhFhRTBWoCdnR12GPxx6Yn+n/qgfULAeoS210jWG0wYEWfDMA1FmN5GssgjQxoIbAjDKvKG9rW2Ov69ouBoDaIPnrZx1kTdyHFZT6ZO3tjbEmPqaCZlRBzZ/Z9q0lmTChIVAqfvymXSXH4iNDoIT98OrqS/thu93aOy1YSRZeYz5vo1YjAK85T9hRBJoRwDgvS84pMnZN/o1tIGcbGgv49J6RFKcmK+dsHPDdIjiMB46xCYB3oYC1NB1aIF9yisQcADjZkO1d03jn3JIFDwpdDtqTtmUXzvuGCGjZtShDqUfvxVEr9l+6IA9oefeavvDjO2NYDxpPcq7xqUKnP0T9ZuyCOgToHiAIwNpfe/rGv0BsxMRkz0fRH8TQI9FBfk3EkvhQPHm4CoGbXPv+D9ECIdKSEnHPJUB2itZEdtima9EpQkL0Lz7fqzCSQKlDtwMIepwDqMlu4HCdAeSTHCC/5QD58S9L0xdt2gozdQAAAABJRU5ErkJggg==",
    alt: "GF"
  }, props));
}