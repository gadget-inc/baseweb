"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagPT;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagPT(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURf4RH/r4Sfn3O/uyOhKBEw96EQ1xD/8lMf8bKAtpDfx2M4W3KbfTNfT09OTh4P39/ePsPfn5+VqfIKa53hlKqvnfP3yhpviOlGhjpgcAAAHoSURBVEjH7ZTZdusgDEWxzCA8Js5w//9PLwhJ4Nhtk6e+9EBAJWwdiXbV2C8U3pP543+XdwI4mp/7Ox5lOpkf+HMGTfMZ75xthgaf1N9IfwgBf6aR/LXrpgBH39ZR5uso9R9lt3EYQgPy1F3iU36bOlI/tGZY2RxjOTzyduxUvXRRc+A+55En82nse0pwQMSZj5X3vGX3Kb1f+jpnGKTQzJGChLSZBJZRNntJuFvWpAVzgiB3q31TBxqv5pQi2V+sW9fbbV0xPKSAVgH3/uQrVaTuN+eut/v9dkUc6AVQ3nvXRzk2pXBtIpVvnRc+dN0DTyVpjBc2T++h69J+Xe73JfHYdYDfygjJNVwArPfz/HzOc3IBePzEe/XOmgA275c5aUn9A/Rv+LNyNAJcnH9m/h/iA2Dge7rw2vi3sqmB0bvnsiS8B4D8OyaEMxheebzyuQCY0hPkvz8geyEaGOvnlc8vkDKMQ6ZT94YBSWBwv7zikSpg9XqtTAm1Bao/el5iCbeJ6VAu12b1EYzWQgwvJU+Mvvz/UVvTIFlNRiOIDElX79E13OUoJ/SJsSFplAO+Ue31QEj2j5UjcTkNJ/66cR6KdqacJi/1hjmG+jBUvyBN6KNpheZL7dAmPr2MZ/y5zJv643+V/w98dD2jyf347QAAAABJRU5ErkJggg==",
    alt: "PT"
  }, props));
}