"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagSY;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagSY(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURdIZL90eNREREf39/fj4+BkZGfLy8iAgICQkJBCCRKDMtBuGTN/r5FelemiwiYbSv50AAAGMSURBVDjL3YwxS8NAGIa//IP4D0ogu9BMglDIcYNkKIHQtcNxQ0XpUtLRrf6FU+yiCKZ2FWwdSwfFSZeKroL+Ct+7S9IWNDo4iE/bu+d7v7dHG9W49B8KBFyH8HFcF+LqW1/WsCQzu9odu6C8CHNwItev5F7ilMeauMXh0t+iXs3mSoGVFoSfFrLStk7XC0Hd/OMFl9Xth+KpeoMYY2EYBIxF01mgHdzdmAQTaxBmbVE2Vu/ZTOe32WKYXbJAE5oXDG9KqaGxfZh6zeNlYedaHZ9ZHSk1YWVBmJtzfqGOGGeCM9ZRClWIYBwFCQR0oU4keoLzPaUeJRdIJQpS6BilaTZFovu7k9EV11u02mQzLjvP4v5cmnQ8j570u3DZJpkT4Tc3JuZ2MiwLX/CDwmE1B98X0iWDAY6+xozGupT27SKnn67TpbSaLrVaraRXYHUl6HUpSZJeUoBdeVqalFTzg4JvgceWpJhN1CQvjvUX+L7nezG+mE2AyKsRNLYLPZtFbNoaz6+RV80vFD4A7EBUcTVst2cAAAAASUVORK5CYII=",
    alt: "SY"
  }, props));
}