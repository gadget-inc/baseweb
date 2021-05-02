"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagSS;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagSS(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABsUExURRISEhZXwCWTPOEoMNgeJhoaGtwiKhJQtCIiIhRUut8mLimcQCqgQyeXPiKLOPj4+P39/fPz8ySOOiGINv3fPx9UkiQmKk11m7q4YyCCXF1BhZukchYvV4am2ZE0YLsqQuHOT6aKZNLc7ens8EkxiqIAAAHaSURBVEjHpZQNc+IgEECXlI8Qq716YqJW7bT//z/esrsQktq5YB5MWMi+BcyMEI7tL+3XF/KSAOWO7QpAKfWx0lehNTE2RefBmHFKsZmmGfbxDibSyqNNQ5tCiducZWSNfbyDqUSqJF8F8xTZ9+4IiAFcM5CZz3+sqYz/GBNNbjQp5rOUwlc+QD2qLODaVb7yeIc1Pla4vv2pAXzhUlNfbxVA1JIpta7vywHvRc2jUufuZSlAW3uqIjWwQLgv9hW7amCXiuExbnKE7qXD/jiOMxDNf2KB/tLzQfBx7hYBXg4/HIbh8OkzeIcK3/vLAelTNb6DjRk2NgIDijsrMkbi90PUi+2JM1usWnHHehEYN0eGRwVsmZ/pSj/+dFTgklUXdW3/B1BmTMbb9/EDOGqxws1abamE5uBBDM5LBfyAovJSuGtNuQQrP2P0XezODb0bCzg8O8u2KKInMZ0DSI8t6VzuppcBvHl6eH7Q2Rf6yUn3QM5aV/hz/LXm/2eqYq/8/5nvfv1+r2Hun17rmPqhVp/6YfO6qaT0T5t6oDj79gmyH3jebBvs41iuzePSPzWJ7Wycx1NAzt7sm6cgP+yfJvqn/Y7Y73gNA4rLMb1PaykP8Oy7FUD4u4p/N9tgowyLmScAAAAASUVORK5CYII=",
    alt: "SS"
  }, props));
}