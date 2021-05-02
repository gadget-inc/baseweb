"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagDZ;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagDZ(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURQR8QuIZP9cSN/Cqt/b29vr6+vLy8gN3PwSBRP7+/mdNP5A4PSFuQOZlffPT2ckeO7ApO+qBld47WtDp91IAAAHtSURBVEjH7ZTZkuMgDEVZ5Y7Z7Pz/xw7aME6cpWZe5qEvhMXmXEmkyubnk25vZX75b/j4L3wUh2nWHj/zsZ+KNMjMKO2+4s9xxUizMcPAUJ+U161Z24oHiR/nPERGQSMm3H5M3uxQqeP8Cb8hr+yBYl8FbWnf93L3VPh8Cbzj+L3JLLRJTK+Z6o+3emQwp0/1TyUYwz/G08L3HzXkhTQwpSBdkl/Jy8S3MiIGueWBY/vES/AjOhefOLrEDwGH9/HFxyyIu6yOdMx7OR9OLmHwYoHjOhXfRedLQTBgGuQwunkSX34ee+TBWhgk+ej6mTebdbYd2+q9363d+1QD41JIOOevap3fjm3Y+753Z/fwrAvePfDBM+45awHjS771wyc+eNflB6N38Kr+frid+NIdXZGo5wQu+OQc/f0Hb++13i2E7+pfMdt1rr9AACj+Bb8YHsaMfMv6KAQJ/CL+Qo2OikNCg6SPEAQZVMeSGTaQtmRHFSz8DmAAvAKQBXYhSeIlN0BX0B9ybNJzCmCUHGXgnipwKeMb5iCMDmqGkpRn4QM2aGt3oIO1sgkcTpr/HP4w4xKc2/r3t/TvryTxEP1FfFRObqhURYJ2SQUuWVZe09badt/rxMC0ChT/kx5yPtHf8HAltfxbHn75/4P/AxCkPDpR/YzeAAAAAElFTkSuQmCC",
    alt: "DZ"
  }, props));
}