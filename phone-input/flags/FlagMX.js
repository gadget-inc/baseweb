"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagMX;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagMX(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURfT09A53U88YLvr6+tQcMhGGXQ9+WP7+/uAlPNogNgxxTgtrSvDv7saTY42SWN/Vw8PGqZ+jc9a1lK+yi76Bd2UAAAH/SURBVEjH7ZHZcusgEERHoJArQIvt///XzMpiI1VU9zU9iEEun+7Bhq+Rvkf6NxL88We8/x/eq0PTb/Def3vPm3Yy+C0fkG9z6YU8xnwIX7SawiXZEs7xdDzLZ6KvglZh/tKjC5Xl2xSyNN1K3Jhol8yPQDAHa74fQBw40DYzg6C5aiIqdOsisRa/lPl7sYcfSYdeuv7Bh5aH5/qEwnfxerzmn+u6PisvsUtzuMyHvJJyM/+HIEyDUmJnfkcnzR/wUwi82gqUfeTC0/mUn5B4M5nw24/tUXg6Ez8P89lgUh/pOO+2bVnvn/EMHgQwj7nPN1K6B3hs2w78+8O+YT54RKiahgumkTDtQAj4/yerAz+ZGaoO7HLCg6ehXxkxeNFVAIAT526I+SwfdZCB9oM+EFY5MbuYn2+wSfzB7xIv0klmmj82pQ1Y+2unixy7vBpS6Znmj5oZ9aENVF53D/z7DQSSadkk3AX11cLyB3wrGZ/5T415zo46g6nj/O/zm/lH+W6uD21uyF/M75RyUrhu8M4pLl1mgJiirnJK73zm5SxTunOan0pZi/j1nKGW5M+CWOcGQjU0nTVVcu3snMU2HRIpplQ6PcbqJiP0qAoMjpVOKWdjc3VxI0HqBtCX9u5kws8V/6bc/IDF5Q5vJAdnGeAWr4w2Pt3ML/e2lyH/A+tlQNOd3VzqAAAAAElFTkSuQmCC",
    alt: "MX"
  }, props));
}