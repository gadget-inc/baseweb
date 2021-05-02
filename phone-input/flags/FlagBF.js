"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagBF;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagBF(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURQCiSgCoTfc9P/lFR/Q2OACuUPIvMfzNF/d0JpfDLUe3P9sLPeAAAAFtSURBVDjLzY0xbsJAEEXHN7CL7RHrA0TOBaKV5aRki1UEVQprxQGIDKkjOAGKlC5FxDUz83eNMTZWuuQj/fnz53mh+2nd0X8AdEwFXF84WgbmQUXRWnRIz0h2kZ5rrXEt2krEQIfL+WxR8sKkfgHk4zJlmDOSZAw7Wzhgy2P7QGVemrJkz9k5Ggk5Ik/DwKhMGwbA09U+AB4HQO2rGsL0h/dKxFslVcWATP5hVtVhDzLevX8h73HnLKqbTZgefV0DuNC62faLHrBugra3AH8IwP4mUOO+6f+Fu9SS77tes+gDjoHXKWDFwNsUsGx2g7+w1jrloj8336fGIToFpaSsVco6uD0drfv4UplC67hNCYcsVp9WZaujvMZPol1QxpMDmyT+WFZUStqUwspXFZPCJ60EGFEH3QDGXkjbkFwBaVR2DkknXgkfpGlCsiaJvCATWe6UEJt4qInXhDLZCb1IvseK3MXYtntf4+0f6QcWFxb5eqBfewAAAABJRU5ErkJggg==",
    alt: "BF"
  }, props));
}