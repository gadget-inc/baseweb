"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagNG;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagNG(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURRKKVRSRWxeYX/39/fj4+PPz8/Hx8QtazJ4AAAFXSURBVDjL7Y7BccMgEEWXg3IGhtyNUoLpAOhAqAOp/xLy/2KhOGPllEtm8i1k2H08rcwjH/eRs3iTf+AayBdAPvJk8D0xRhoSn5znUb0JOrPHL56GdI84zjNaADz63kXnfci5pHtJKZcYPYt48RMEQbmQ0CyJmLZndqyAI4pFwyO9hHgr6ucXPAyFhpKLe3zAOxj6/ehcKMOgdw6D68EMpROwsNAHpeFAAlqHYRQJkO5AOQH3DLjfBOorwDqDJ1QEBF56Zt2JGGv1AMNCAQ1Lv4y+gcHwzxpjwqKhwTKOS0S3hp7Q6tJqBdNQ6GYLg94G7t61VwtWHwqIIEZpmCa2sRAcTXejj41CZmKrqcboEKiJorqxMkGAH8MqxuN1PI+9paE2pXCh3+IQp6GNiE73LTAsAxB1dM4c+FfDy0zbvqO5r1fAW9tWpG37egHszIbsPwGavwZ8Avvmv2+6yjjwAAAAAElFTkSuQmCC",
    alt: "NG"
  }, props));
}