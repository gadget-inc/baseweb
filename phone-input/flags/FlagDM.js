"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagDM;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagDM(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURQx1RxkZGdwpPtQkOg+FUfzRP/j4+AttQg18Sw6ATiIiIvzURiViQINCPrQxPPT09BERETAqKA4ODvLy8ktcQ+Zzae+/xPHQ1KGuUe8AAAHsSURBVEjHxZXtdoMgDIYz0gm2gF0Lp/d/p0tAvlRsdT/2yimIeRKgtS9c+rrdbtfrdRiGnRh4x//8kX9Xf+wr8zsx/86rvgrfj/mIV5/xUDpY8+vIEAjUohSEO56Pk5mfH0MTmaJAQSYgR/JE4VPqNMjpKmqttv5xfXuBAr1/7QXJ5ootjLQRQVYIoxdhKyA3SJ8O0SDhTlIidPlp7BPMt7LQRU5YLTXxmm60pTRZdVh7U6SR8MBzL2kFejuww5tQ14YDMFrzGXT4703xunXESXwOYjtwm/e0bsN4/AzyB/hcNJ6hQGM6C4CvLWGkUdAOuaPNG9yM7PHWcApkHsVx3vJXEOtzGtfnh1bTMFHzln8CJJ06af0iJo5hKkpz0+CZoJ8v0vkjipDGh+fMplgeA4/mqyR6Ie3YYZTAkOZVlSmhHf8wVNJgLXPIf2jXtHCqa9ycSB3zr7h4Pb9MiK59PIbW9685QeA11Xfj5Zj/0BZMWD9/AUaf8i96jSxa+v876V/0etzv9+c0qfGUf83887nnX7DMBh2+crdoUolf+FKZynxtNSo7VsupbEvZqmpeQRMD791rWf+Ef33Ey+5F/OPxYF5CbVi10SVPWvkTDTNf5useKs+CykqypRS+aznQ8Z9NHj73r736jX4B1ktB+u25M/0AAAAASUVORK5CYII=",
    alt: "DM"
  }, props));
}