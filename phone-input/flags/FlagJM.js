"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagJM;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagJM(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURRwcHBu1S+rIOlG2RBy7ThWeQBekQxYWFv/VP//SNprCQNjHOywqHlNJIWpbJaKILbeZMLtRcK0AAAHsSURBVEjHnZILgoMgDESjFhSU6v1P24TwSRBt7aAYXSZvoAvLsozT6x9NI3phIfk/7D462b8s0z9w4X8YwWdb8T85hQwnf1iXpxEKfFkDwLbLCAOOV76HNF4vUQv4vqEdThFw2ZDs56eCoxnvTUUYBlrNys9SaPiWGmCEUURIBvWMs4CPgY1x3tQprNPQ17RqeOKnJjJC167hIL18DLcRNJxNtQNX7+sIAv6Gvqjr0Y8g4IeO3QojOBHBxovg7h5eUxxlcYpAcMcfjw2+i07BscUjPe3c/QJvIjiMsOLs9M5/jeAymOrf4LOIgCbHG7nb+SyqmadZ/C+4OCJ8VqOY1efcA6/gSNwgQO09Q10j7U3xHl3OTvxmwSxKSO/y2g7yRX68cf8tpokdm+QC4UsKz3aH55//LgT6Pb0gPJvx9y8dMEJdpqlKtPMIdqO31vo2wtxBVmW4I7glxQisEuHSH+EsgtvBpgisUwTowJ2A2y8RlD80cCERIVz4Ye/DTxF26Plv4ChzEaH4b+HcohcBOnBjLI0GT5/OEeAMN9mS2ojrHIGmsMqdm2QyxU51ea8R1sB+CeeFrFJkN3+Z6lZ39Cu4Sai8Nu/BqJ4yAtQTmYyWvahVhOL35ol84z/BvylHgLLzp/LF/xguInwACsA82mixeFoAAAAASUVORK5CYII=",
    alt: "JM"
  }, props));
}