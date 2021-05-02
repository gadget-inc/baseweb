"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagEC;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagEC(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURf7UGtUXLAI+nQRCpNETKNobMAA7lv7WJP/YK//aMwZFqd0eMwZHrt4fNIprIebCJ724VvHKI7qWImuCe1u31TRpnGJn7lcAAAHBSURBVEjHvZTZkqwgEETTFdTpAbf//9UpCgVKwRszRtxDSS1kYveLGN6B/+rXsqaApl3zRimW5wrhm3TAAa0TndBfbhMvcqec4ZU6jgLDpc8eQf+G+3VQoVQcEvXY8vtVWOd2DuImJWkBVqShdSzPqbqpzgSlfK1kcZQ6nSaHQQRVZF4WQ8ksy1wWoWj+dhhlOBevgL8CoYUfLc5DXhfuriU5O9RcAMeBj7Dm2c0N/wSSUHtavTrJQLAj3uUxi0k68YqgkzcIHTCnA0H6GjlOOytPZ5HuiIOBnu3Iv4OvGQaFeZvdFwJ/wX2d7GY5l/kqsZLva9/2kfJaVGEswP512zbOJdVY9I/OZ8lvn/2Nz83YUPjsGJvdfWStdfZhP2bpua/R5GCRDZ9q2xTJ+2v37MG/P/jrHI3b+t2w2+x1GdydTexW+v9r6f6sv+cIXc/x9P6+Z5Gn9vo+9v1lcgVC+y/qmxb9O/D5fKbPFKCG+2tOz87agalMN3UU0yPoHuAbnsEh/Cuo3F7JiFSZUsxQEZ1/QkS6TClm6K6zKjPo8mMC1TvQtlVLufWrreLi/ijSs7PmTP6U6njE4Am073jr/wEbTkCR5mIHCwAAAABJRU5ErkJggg==",
    alt: "EC"
  }, props));
}