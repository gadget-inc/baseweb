"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagAX;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagAX(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURQ9vqRJ3tBN5t//OOf/RQhR7ud8vM+IxNRV8u+o1Ouc0OI+vEcMAAAFUSURBVDjL7Y+/asMwEIdPbyDlCWKB94BNu6aVQppOwWDQ2MlZM0VrF0NeoX2BQp+yd6c/kZO0gUK3fkTW704fpwiOCbt5s0/Hc15hIqxG5yiPcSfBjWOPOBcmUOVcEChvoY+wsOrPOQm93bzfEJ4/vxN0p3Vdk/DY1fXpsMNqCzoQBdy7LnY0pXkStA7COb8Xqmo2ozUHDgphIeYECRwqhISHVBBqpiolQVHgCWvPQh7BbQl5nF1/hAkTJoL/I8FmULhkeVswxtjW0Pfe2xaxFhu0mCX4w2G38/xNaRhS9n4PvmxNZVp7GAJUlntKL9Bk7oYcTU4LaEzLP2NQMJzapo3JmMX1CU0xIUPCQsAFklEiClOkAhCsoMgCSKoFdSmEEbiEiFdILpMRlBDjFXjO89J/ESnKOKFoSxwrU02T4xXhXJbvEMUzT0eXDy6uuM6/8KPwBd1/8zE806dpAAAAAElFTkSuQmCC",
    alt: "AX"
  }, props));
}