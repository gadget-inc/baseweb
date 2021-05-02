"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagGE;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagGE(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURfz8/P4bKfb29vHx8fT09P4QHf8lMvuJkP0zP/m9wPjl5vtbZGUPYRsAAAG6SURBVDjLxZOxTiMxEIZNJEJ7Lry1Y/EAJ40jWrJeRO1iH8CNlRIJUCQqJEheAeme4qS7vN/9M/ZuskiQq+DXrj3+/HmcFKvUcea7dd6pTzJf53X+VMB+PtHhgys2d7VD3uUJGbJ9HoThikqG7H+/Fyopufj1+PQ2EUZSct4jE2Ek/ymcvOLkjzz8zQY5EMuFVTO8m7sZZ55yypiFWMuV4tVMKvhnWedGKgZymCcocBysBfaTVHIcI6sz62qpzlJKmn3LBAyPc7bYDlk0WifLFQ45fqxqdNKSlPAPeNRNYYmHH0qD8JN0wxBvU3SUOAFBHzgzmcWRoQofJJ0S9LcIUWvzTrhs20t5u65tF9oY3TrHxEmsajssWHB4VzHqKIKrx64V9ruatl1FdOBK1twVwhhQdDCmbELncRA2DzKt0MBMyCBsX2W6MabvJ2QQ9n+rgDsmpAi3/BWEACH2ph9J13kIAbnh76h26A1wV0kIEIj8kpejGTrvpcCOv1Y+BJKGHtWyjxGc6KpcSvRTYRU87f94j2oZcdBzQCgQX0G8QdsXePUuokI8jR2INvdCjwQhoQiHHAk1XyH8A2H86Hdtm8mdAAAAAElFTkSuQmCC",
    alt: "GE"
  }, props));
}