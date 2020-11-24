"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagGA;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagGA(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURQKjY/7WJT15yUWA0kyI2v/ZMP7TGwWqaAevbAiybqCqtp0AAAEYSURBVDjLvYq9coMwEISvUxsVqPaYF/AgPYBn4AFC4T5qqNXh0p1DlxLeNns6fkw8Vig8fNKtdk9LQ5of+rfQ9WDoB7xdNwxr7fsbfafZULje7217hU7TjogPBLss25gE8Tdq0wQpqLVgjxNjIAoYpQJg5ZEsO3gkRYyiIKMmB6Lw3ypOBEW7cEnzuUchA/WFb1azxDAuEFDQdcajawxW+mGB1Qex1ZpHdHERFNJsKPgRbbT3BjJfDzUoGKHhb+8b46NrxPsvakbM/PgpslkKL3hHoUpz3qNQVg5HtHJzGm95JmdL6yxraW0pr4uGrzuRtchCaZ+JhRQbCgXIX3OgPD8WAox4/oCP+UTHFfljKDCHP4Un3lD4BXZsfUbChS9yAAAAAElFTkSuQmCC",
    alt: "GA"
  }, props));
}