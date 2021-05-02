"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagSB;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagSB(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURQZf0/7SNidoOwJWxCVkOQNZyf/UPyJdNSRgNwRczihtPv///97DRRdo0cjc9EWG2n2q5q+rQZehd1aBmjx0PKXE7l2BOfH2/C9usYGUOmGY4MgZbBcAAAIaSURBVEjHpZWNdoMgDEYBwYoVtXVdZ9//QUcSwo/iaec+WktoLhc3z6kQp7MMbduept29bf/Bozzxsyu+3ZTb2CCPvHvOxdnK8lAe+OkxXp8P77Q4slLA28ZBK0neDt+w5sarzws7wE4lgrxGx8alTH776n2L38D3P7AbpVRC2GpTcnnf93Ti6/gcoX2Cq6Uyx+Id/BRy5AGYrJsRv75cLAOZ2zdy5il03/7vcJSdvORpg2N8L0/87OD68LxL5Vt55P0DAx/jPI2vVL6VI28sPzAWrC6VJo4DOflNeGCgEbq5xOBakssgV5nfGHxgjDUhoSS3MSSXJFe9UkCrMAQo8IEx8bihDLlHeliBRo5xJaBlmoybI8ClhRfKZbjzhME+GBGYxhThciFatlKuKlEb/1F+bkDiDiBX6fBq66+F5DhWdRCxO3KSB7eM8hrfGB58wb2aBW+6kGul/SuxUIukbTyF8biXS9pADjs570N8CuxAR1hayfpVxzCD0/CRnb/hA4AcaL/F8AVUGGkbHVdyf8gy0MEl/M91HrWdqAoPcrJ7eQ0uFsRezvZ1R1Sy4e+SU8o/40HOd651p7sOe3DSlRyvibr8GzvSyCc0C9uIurzLA92d3s8hoiZnyQcRO/ntI67kC/nlr/xpOfG5/JLbfRHrfJ7X/hc5k18+CnDAQ0Qupy+pgwSROIr4q7zOB/lZ/qYu/+HPyn1+AZIAQ3q7UmHOAAAAAElFTkSuQmCC",
    alt: "SB"
  }, props));
}