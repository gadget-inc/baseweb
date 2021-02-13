"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagBH;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagBH(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURdEYLtodNOMhOfz8/PT09O6vtt4wReRmdfTl5rp8RYgAAAGBSURBVDjLzZBBbsMgEEXHNwCfIOQKdqTsIRLbbryue4K6Z6BSj93/Z3DiKLip1E0ngAn/8efbMqw1HVt1kCswfjwBhtPbH4GnLZ6G/A9vcW616O9C9o8VtkAgEUI48tfXxW1bhNAbErjazsk4DhED8zQHE1m+7uhAfcA8zTin4oPpHjs4kKDNeaGEY17vPVHsDhIp4jsOk/e4QoGPXhHvNUMaU4px4jmclQgm9wAYb6RDXvx9MZA6xIQZ03CZ+5sa6tNJiokNsF5m/1hokRCBNufFNwG48/44Tr4NUEwwSASc950JHTcYItoBRMyLM71jYd8B6tYM/BQISUEpRzf+pL4FqctcL4qZmJGYjJEXvd+pM3dOCQJWk4irlyBKhSykAXqg92R1ELdxyO/4L5h6bE8gNyBdXnlQCSyi8w7AAcZa6G8Zri1M1hDO2rG2b9Gs3wBZO7BFEygkioZsAqUaAHA7LUrm+LGF1stuSBrkvAtkRoBL+dprkUopmCl9NkN+AwaSurNbEq0yAAAAAElFTkSuQmCC",
    alt: "BH"
  }, props));
}