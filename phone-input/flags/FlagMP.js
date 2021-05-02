"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagMP;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagMP(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURR2J1KfN6I6Nj5SSlBR6wvT19fz8/BqEzhF2vRd/yNrj6kCSzKSjpXm03VGh2XOTq87Nz66vswsM1ZUAAAI6SURBVEjH7VLJdsMgDIQYmc1g+/9/tloxcZL20EMvHTAIpJkRL3HuH3+M+CH+7u66jjR5RLmyGGfvrbXer7TUSOjGpZvOcRR1D6sA/Cxh4rYPjgRa0v06w1fLDofZfXA5xq+pMUHaaMbVihinyDaFY3PftUJ68c/Fb4l6pPpSp+teRCC+VLv4ivam2PMT4juJO+pMb7NA/czPNLNVFrnctxPObZd0Gapay/XOYiZT0NmIon3bjvXYUIDS1Fa/SlXKqe3wz2jvM8fbtpW14Cp5TszmNJycddKCfXa+rMhET1xrlsagDKJU5+yYYwLEWgFYKFRqf4WD+FyNf6RqPNNxeUAyXbpEVGof6AFVCjxAz3kyz9x/fkID8Nn5QgAAEgCKvSN+m0uj9n/nY1H0xGS6DB8t9Yx3fK+7CDCa9v8zvys/1yJsekGd33/jhyxT9lwBfyU+7UW8oeySwjMJcZI/XFzOxlSVYi77ofxj51wfyuYW2N8Ount6AB13MLB/oETINnRzQuQpIvgAbBPDk3un5aQj39+8QnAhXAqyeO4zBGy/nMuJCgdlCtkbsgXuCuVWjKiy4F93WZbtgCKqYh8uK/W/ITUWqHAughOJRG+vte/44uXbthi25mHu/gd+SlReBn15lE9046ebQCP+gwYtS6HmU9BpFBpOd93skKo/HgQWeBy+XvRRxf5JoAmLca2PC3uw+5CsSuCm41MipYn/mlat5EYcpCSk4bKbexrpMPKq4tLv8M//Hb4Ag3Y/1cvEDmsAAAAASUVORK5CYII=",
    alt: "MP"
  }, props));
}