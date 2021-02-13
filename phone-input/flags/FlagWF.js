"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagWF;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagWF(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURf39/QYmnQosqg4ytvI7SfRCUPn5+fE0Q/X19fAvPfPz8+8rOvHx8X/NEAsAAAG1SURBVDjL7Y6xboMwFEU9scNURV3AUpWxSqXMGYxYM9CdCTFmQEL5AWRl6oYsfqCyOnRF/EHER/U+27gQpe0P9MTvZbjH17AXzzPzvHqO7F+4FfYFoiKg9Zq6PD+ynYv5bs+KMsCURZDneUoICHxneeH7whIEQeqElBrmnD8FHhenIj3MAodQekQuDHl+YJy73DfgSygiqIEnPNklcJI7DUIcGFIyEjQULi7KOc4h0G2kPFk1iEUDQAFqfhEsRqj+EmC0VZllohaYuj4thG3ZyqotaQsyarJWDZJuS9rZzLqhNVSgwfWsru0TURLF5mwrQyulrJusqRtaJ+ZzNEj6SdPQUAP+TiyOfYPJW1rNDDVEsWOLy9Iyx41piOPIWFuXtvK7wQnW2TjhXV+WQogMg/OASOuLe6Izc0ZDFJIDY6MvgBr02dJ0HT4yhAGi8IEKtMYLF2TOwRMwiDDcIAQkIVHnrsO8sXAm2miPUp2yxkIIF0JHuaJZCdM0fegrBg1KWWUpPGp9vVpFeVbCdEUFMdlw6G8Fz0CMfd8Pn/cFNfZW+UkYh6HvxxHnJ4FAPPwqGP4WvgAEZNGJcKJg7QAAAABJRU5ErkJggg==",
    alt: "WF"
  }, props));
}