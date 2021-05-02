"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagVI;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagVI(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURfLy8ReExeS7VBkucPf39/39/ffLW/////T09Pr6+uG3SfLFUurBVrAQPO7s4uTBZ+3jybweQufIeDWTyunRlevbr9nn71el00iWS3q32sre3pPE4arP5a3MsWl+o4m7jctxTlNbe3Kvd5qVbt+1iLmtW/vLgqQAAANVSURBVEjH7ZR/d6owDIbbLmgo2PJbwE2d277/V7xvWkBk29nOuef+d4O2aZMnSVNR7ff7ZJ/gs/+VbH3VZi12Edn7ja6SZTnvzc9KnXOEzf3KkqgNtAqTPIT9SoWukk/ymd0n34pK/k4CTy79xup98Q2YOlr4xpiqdbQNwpXJc/NFheTaypgm8qCc+Bnj24JjjDR84JTvzGMBKRetN/DPjYNPqgRIG7ODhBhNgTrSVHhKWrPLmxBP9lIqGrAmz+BsGnESXuYqBJAYCFIV0R9xcwRlkLIsKsk7+Zkq7CUqTKnys2G3y3LjVWBwLvDRRfk7DNxzus4v5myxAqIzsNa8vb5JsO5M5g4LPuVNQiIRxiUsLplxT0/n8+uTyKvM7h4eJ2xoxhY+JdXOATJT0dOjoEPZjLd3aMVDihhA7qHa8JUxs7FYIwtPeCQAuodvnm/4PM+iRfDg+0X+lFoz59nwc12mpTlf5DGf9AlLjOSIHUe+LEuYMSIZxsjDOpVK6aAHIhJea91Rh3HsR1iEz3bloYST8BgPpWzlBiwfR2Bwg38qPNFRI9Sg9ZH7C5ZN6HR5OEA/TGMZbqWBftJjyC98yE/ps9Y111o/06VnbIX344EvS/yurVfUKX2kJX/kicCihppo7F+wZLwm/vqQ/+rlxULyAUeNsuJRu9ahHf1tstI7SBaemQ+H97hZ10g/nLZ8F3gJfOld9GxsGckwllaOTiPK7E4454aXDsZzudBBosLmZsWb3BaxzmEUR17xjAcdjFE5FsB4G81VsQKvlLpi5ZmUrvVY1yrgdx4B0P1aZvx8+hsSOptZ4yoV+coZm1uH7unhGI4prrU0nFTAqTt1gSd+wRVwYa11zlYOvKtEtTgArmlAmZFgIJjBy3IZmW79iHy2QIwsux6uWRYXZpRbHiZ6FrVeBNV9WOsLbgUHGsdWFd7aDxye5/w08xtppHZmL+DEZ9bDE/pbt/X+zKPU/qaQf823zM9na1/4Z56de+kvrPyqfq/kiuTwP/Eq7Fz6kdHEicdVMnfyfqpPrmrzxIFGKOHWrY044yfafZEdT5AJjemnATcv4oMX/l1W2e7MxG1jxBmX5otgO+mjmoVXzC+F1bP6L/9YOnzdSl+UTvYX5cHvDx4pS7GBNvJ5AAAAAElFTkSuQmCC",
    alt: "VI"
  }, props));
}