"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagSX;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagSX(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURQExiQY9pPT09fv7+wQ5m9wiKe4qMgM1kukoL+MlLPnaO3a+7W225ffn1O6Tl/K0t5epzet1eeZJT/jkgitVpV19uczU5PjroqJyj75IWQ9FqbXa8u+JOu+KOkjDcuQAAAIlSURBVEjHpZKLdoMgDIYxygoUxc5a7Xr2/q+5hHDVnVPb/lBMIF9CqsJ9fSTR9t+f8W17+ZBvqQfFv3oqFczCriM8jz3QOceUM5mFXUcwjz1w2BPtQyLfOvWWEk896M2h3jpabWMy38JFaa384KmSX4/SKXjqgSkM0XFlBTvN+NAVjz3oAqgCYyatq7Q1jz3o15T5xSyhh43kAd4NgzFmGJzvQVbDpyhcWfoifj3q1/zieqEeUqAf0c57hcXfv1rPrFU78vFAUpTkYJlcfkYLDc8P+hylBn4PHJMCs5tScxrkoeT1QBuAPRyTgFQfAk870LqDfKhvLVa1Zxvq4w2wh2P1ibf2jFUxi68P/lM61APdH4i3iOAqB/A83aAdf5pnEhTn5Gjt4/GwdpQusD7H2Pw8GYJCQd8t664BPPxSfRjk6vGVr08Tf3PzXFS/7/Gvuq/jepcXQIcz3K7NMb43ZgJHb+vbwWRMTy3AgbtnnqDe9dFEzU1Hgxa29sOfIU81UdMUnrhzu9J5x0uXrex3nKAjHhaTtdDdM9zEWeZocibPQz8FeqLLz91xMU8plmXxnePd3+GjRtw80eSRDXaSH8aWn2sUVaVJ+z4jLjV/u3qgnPzk7eSkzbr+GDb36v71u5qfT69L1Hd/nx/RxpHmf2O/wTy+9xldkaPK6JIOULRR4e4BDkpGcPYHKS3fPR2cYtCpSpCzVKm5/iw+EN/9fY0f0eIPsVE+Oa7EugkAAAAASUVORK5CYII=",
    alt: "SX"
  }, props));
}