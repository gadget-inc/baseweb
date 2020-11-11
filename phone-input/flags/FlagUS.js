"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagUS;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagUS(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURfT09L4pPLUmOPv7+8stQj4+cUREe+rq7Z2dtaCguqSkvqamwKOjvTQr3qUAAAEoSURBVDjLvY9BbsIwEEUtWSpKu4mjHKDhBJF6gVrKAVqVcckOqbWllg0bpHIAxJYNZdtVz9EV5+qMEzBYI1gQ5eeP/e28OGPhjvVexXoUHQDTu+C3h1ilcJMymAU+b4NZwLmfX/eH3vE9GOfkTWsWsNatv916h6O17AkfiTuY68FMBDyRDY4vDGDrxIwTUy+gXhgOMADbJaw2sN0Y4HoAa2dzaAyj3O/qKqciIwCwWra2oyr3qipfSCAw/grmeoDXQTALXDzhWM8qVhoBOldaK0UjldYpd0J+coIsS4nVjFLiX2k6ZCH8CyFkC4aEkTISGJrlaaJIszqvtAOgB13soWiUqSJKmRfeIstoURT7b4Y+73d6ucXwvO47AK7XQMyoIrcTPj3c4h9AjuvkAwAS6wAAAABJRU5ErkJggg==",
    alt: "US"
  }, props));
}