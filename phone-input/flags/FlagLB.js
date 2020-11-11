"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagLB;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagLB(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURfz8/OwkMfT09O4rN/AxPRyyXb7mz4nVqkzDgJVKsfsAAAFqSURBVDjLvZSxTgMxEEQtF9Dm5B+wXByUsewPiGT/giFlOqiRQqiR4LuZGUNIDnKKRMTcne3dHa/d3DN1Xivzd0MqUE56c9HXRyRqKUuTE1SSHH2VUtancWnSvM4wDDHF6FyMmPujyCkf48I4N+CNw4B5oHoEB+LoFmbo6sU4TLU3nNIZhv/X6Ofr1+1+tm7fWnudMzy21tabySZrjcer4WHb2m7jjUXe8DZaqAQfpisc8a4tXhnv2SFYH5i0fkQdDuSVodBZawwh2JsX3mEXmAlMsQVXCui6pSH4HqIpmhut5Qhh5AntDiuF3GhMONBWhvbEpr1t8AcGPz7jjHXA1OsajzoEGY40NWx5wIxh/LrjyQ4/dAlDreXX/76cDxBYc6k5cyARaub2nKtIsTKoiCGkhkwZiOgoyQJI6bxI5IfokWjco+QSAHEuAQNU+nwiCUGgIAeAgAmMOh00iS8EBqYpQL4hEi8HkA+eLMb39A8uFgAAAABJRU5ErkJggg==",
    alt: "LB"
  }, props));
}