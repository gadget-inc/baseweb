"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagFK;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagFK(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURQAlgNgcNPDw8xmC0wMrjwYxm/v7+wEnhQIpigUulo7B53uQw/PGzNXg7oGWyt07UCVKold2uLbK5RVqMOmCj6u52uFgcmKp35Srw+ydqT+T02uDvxZ3i0lnsmOZdGAp7BsAAAKaSURBVEjH7ZVte6sgDIYhgwgqrbhZXbvu///MJQEV2nUv51zn23liBQN3AhE39XrscRws6YBaazxY0YJwWvtfSWGvXxCuNR8BX/UJ4w/4C/ZHWsJS8MNIPooa7A94ewU46lcMw8p3iC9629W3vB0AT/oEOAo/BU5OjxfrvU1G8rZoC1PkGEJKKDzVTctyfCYFEGW48isZmKhcuhe+11rKsUIrmUDvb/zqIKKKvWSeWpjEGbcNlIQvVk/5sZCsv1D8dAGVlH4sPPhv9U/5jmeYr3l6YSg/uNs/xETzLz4ojOpYE6z1B25HcXYJTxEwtLsCkieZ4uGFj5zuQXg+PZNNKxfjm8f2aVeLMsxjyhg6fnR66MQKnz+dwZgNpq5hfh5pzjgzzy4ZUubCJ5aOXFiEn/jxhDAI5/NE5ue8+Zn5NbaaUkKqdSd8J8s5AlwzncIQD2tZ9/y0/vVbNSbzRspBvospJLwYbDxL8bcPkbsrb8wVKGqPXc2PAKENAG3FU92WtMudN5Z31aOv+HPgd9CGc8WnUpNcBFZMTxfabajzvz0nvVU853PpinxmqMdmbLwM3MqwMxhm4t+Xd+LnUPCOZFwWd2S+MzdtQGyf6Y86Ls8tryxlcU6l8e05xzJFQNE0tgRz6eg+TltC5SqlCCZ3c8sW4Wlu6ejJHaLb89/nuumLLOwfQAt28yv3Q014pjeI9PbOOLnf854ODsAsd1/wjXPpulezj1CX/s1wcjqAg6t4ntS4zyzHyDYE4cOQwoo1ilG+mianaz5RmuzpC4DRVn61s/Xk0rboXeiqtUr+Itqj7A8GJP+vVYX6A775e16VPblqu3OIpet2whpHifLY1j7ybX5VPataTeFrKl8xd19cntbUQOX8r1of019F0PP5PbkAAAAASUVORK5CYII=",
    alt: "FK"
  }, props));
}