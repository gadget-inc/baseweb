"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagST;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagST(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURSOzNyKuNijFPifBPSS4OSW9O/7QPv/OM+AbP9gZPCjIPynKQBgYGCnKQaiKLSAfG294N2FSI/HANSrLQapGPehVPNexNjOaGXEAAAGUSURBVEjHpZXbtoMgDERB0aBWFC/9/089BAk3264DjnThxOyBPoWt+zzNk1mz31H7vO/Tfq/nPUweI2oaJ7PGYjEpj6ZpxqZShpdH2zRPeHl0ba0sLw/Ruoiu7Tp8pz2u5e+BlwPvvNpsT97btN45PgkoEfEmQNTI81Lyh7xc2SXBTF2EnWq2P6vH/EAB/5ZI+HCDAsk0gBcq44sDcl6efZFufB6w9T/9nc8ClPplPT+45xagdf/DGj5wuFkXBWzLEt84s8RTyOCMtE1vpZReFm22990G3l8+BJkA6GFdXsvLrGXtc2s8lnoWk1HOaT+rq1/1gO3BIm0TgDlucJtbcgOwAS8jBWiwPba2BIxIeuw6N9sBoBHQ1J5bPJ/OJuHrCSRzWXPpbxaAzg9H4+n+q9Lmf2xafbbEZwo4bMmW28/8CSViz/Abv5bO3wwvnr8pXjyIWYqXz98I521TPn9jvGb+En3wuvnrT++EecrnL50uEK+Ynx6vE7vwa6y64cpK5u+FV0ogf+Hc/Uo1aP5EbH2E8z/aH0AbB8r2/wAAAABJRU5ErkJggg==",
    alt: "ST"
  }, props));
}