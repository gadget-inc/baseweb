"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagTC;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagTC(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURQIqi/r6+tgbM//JFgEmgwQskQYxmwEnhwAkgAUvl/Px8oKWydogOP/NK/3lktYZMVNusiZIoO+6weLm76u42XOJvuqQm8rR5N08UMFmH/LW2g2pJuJkdP+Wd/nrvP+tQ+ytJavAH/rSTOz8fiAAAAKzSURBVEjHxZQNk6MgDIZBUWvUigJqrdXd/f8/ckPAr9a7urM3cy9WIMmTYEbLmq7muopRGc/znGcxSXMY5vXfxHidN1zJPS8Vb/KByxO84X3X9RbLeBAEdlFptAUNb+MTfCwBOjxCW828AWjy5ane8mmlYAgGAE28bnnd2a2J0zR2w13L7C7P41y1vAmwIPG8HwI6zhpj461W3FtxzcihsV1BTXyfB9SOGXojlpFa3jeOr3EGTUZ5hucb0fk3OpGABX8Wz/4FH9Gw19H6HY8xkYvfKzrx/CCjKJ1Hpha7yhZrxIzttAaoXf9x7nlrbSaTy3ER5+N11sgpAYnhL82g78q8htLyQdCAjq0v9TFWaixWjYrcNgfyVYvvezn0QDzUuIa2mkGfg1+LqZimovi4fRRXvuRlkYF+KLsa2gzKsgRttwOoKtqJX6fp8XgUxe122/EaC9LnEjne0HG6XslzPFBxjeWM4107uh5Xex7x6ZXHbx+wFouYr482iV80ttP4/vrnt+VDy4eetz6GfctSxqgRno9YjE+Fp4rIbgfy4fSYwiLE/iHPrKydYat9FP4RoSQ5mFEArfVHFMqQL8Iw/AytlvroMC6/XUtjjGQeSaWp2FKfwdWCn3dKcIW5PtsoWizOnCQbtyL+fr8Tr3bsLss22UZ63PCjZj9VBsXCF5D9mK+oAY6/QrV3Jv5GV8KendacaDpASOX1sz9JPJjMgDPP6fCWqtHzo6qWYnPNZJ6ftdiFBJdgBLmJZS/hm7F6mU2g4Cv8wpd9DxyvDyTwyxzxdU2S88zT6UxrXg58WGq+C7+kSQi3FztezEPQT8xhgoBk3QufcSVwsCW/8LmFcFkObeLZz8SLlvgj25rB6YD/kX7NX9x8ERe8Xtfb/ZGdXX6nlRfuJtzivcQT/9v6/4f/BkJwUCd2vY6vAAAAAElFTkSuQmCC",
    alt: "TC"
  }, props));
}