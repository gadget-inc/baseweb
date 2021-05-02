"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagAG;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagAG(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURdIZMM0WLB4eHhN5yiIiIheA1NoeNSUlJNYcMs8XLfv7+94hOP/ONv/OOD8mJHJgKbaVMLgkPOeZo/PZ3PTFN960NG8iK9pSYpI9aU1EJY8gLVlamCtwu//POv/POwHQWlsAAAJSSURBVEjHpZENo6ogDIYRDfGQAn6Vpff//8yz8a1mnm4vBGPbM0aSsfxGI2HNF3jDiNBf8FoQIf7/BaNAXjSFPRZlATP0lva5wnxewyyv4ex9uFtJGc5SFqmcH7q3vHhEyoZxmfrJOYxVhoDXQ3geXrBX828wuWU5LC/iZSMiT8oXBfpFmV0t/YtomSU8vGAnOiyLpAWVSz3AqaAwk/BDpLwYaRTmwaLqGgrIeqlV8IX4KNY8aYyfhiSKfN3Lvl56lZY2CQ0PPMPBhHZxSqVSciphr70kpeWE7lBFAwRighgcLBZfIPtrfR2UusKG+KLUAHYvQ8Zo7kQRZI3NmxCe+tqgVydj91OINxwBwxFbBivoIhYYrpG1GiJONQsi0WSPmNHEAg6P3dGHu3DLsySnVCtclUntFFnx+vIX6UNe3P+A39ma52GAnqf4kyUEZ4Sbs8Fxn0/wmXB3lc2HY2BR99PueSpG0gNMeEF+yfN0Mbsd+dNe5wa391vUa87XLE7zg2XmW5Gtg+l8p4tf9DkPf0F+pDt/wxM3CXke4E8T3vJ+2Ajuen6Jz9rnkZhLEhfebRz3g+5dfwmB6Z6zrLHbn71azx0qBLnodnjHYtrW2Ou242/kI7W77j8TX7+g46dEtRrZbdN95ZL2HKb76XGw2lX3lb3ArDhR7kzScxXqVfEF3T5O1qUSI4i5Al0nqkORo0CGHxEqwLxVH/KZC9m/oD2+BJIyTM+M0DCnytoZfEQYPIn7mLsmy1LeK+bhR7ytfFubZG/V/rTvE074rK3ex38BTuVGLdRGxH0AAAAASUVORK5CYII=",
    alt: "AG"
  }, props));
}