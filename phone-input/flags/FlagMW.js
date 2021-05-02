"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagMW;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagMW(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURd8dNdcaMUGtQ0W0R88XLT2mPxgYGCUjIx4eHhAQEDqgPJUaKUGW3OwAAAFvSURBVDjL3Y+xasMwEIbPU1YbvHUpMtqL+wIR6AGCwUsnT4q9tUvrMZOdMZOK6ZIli6cMhdC3693JduzSmEAhQz+i0393nwWBt3me4e/Ctq635XagrstynDfgMg7LQaRP+qYXLrIBk+dVVeWIqfL151KfDKWKMMZkQBVHpqL9EZATNQw6GZgRL8C8jkYTYe32sJgItiksnqaxtnsAn7DDdAcc8FcUzbEXvlDHibW2yKAZeO/3sDgPdyPhAwKPAP/ugtCtA28i/AM8gOAM/kG+PYrdyAeXcce3x5LHiaM/fuE3fgpKUQ1dprIEHTJaK0xKYeIaKl5oH0Lc4NYtcKpp1elaKXoB93QmuAF+isI8VwiP8zzcQhAiEnHcHyFEHNEVxzQQ4h4EDQXXWHSOq5GIogiFeQYhmdyy6yQKaZKkMqUfJ8k1SVPupVwBZykThDXqKUlnrSCd5wqhJQ6H9omOy31HZw8U2jPjTOyhnWf/DSLPjisLzjA5AAAAAElFTkSuQmCC",
    alt: "MW"
  }, props));
}