"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagTN;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagTN(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURekiMuIUJeQZKucdLvv7+/Xz8/TV1++Lk+tjbugxQPKssulKV7PZp7sAAAIySURBVDjLzY4xbxNBEIVXOSVAl9sG6Ow5KZBu2REBavZsQYXEjk2SBiU+BKLDMSikQXbSUFlCKFHSIEii0Bql4dcxM3eHjOUaGOlud9775s0a87/U+N8/IUnqi3EzljPOOUycS5KEz6Pz2LkYJ9qzIX/jypZDXHIYpNpjjnFJ6XCqchyCeDUqEJ4hokpOAEy0lYyd0NobnwxC6MtipyqvQF3PdS+0Rg4/ckxbWg1FZ/SOwu+H7w6PdclIApRgQDnuVuNjxGs9BdYR60FTX3nDK8Sl8pnt3+oUsBhG6E9DXjCQJzOAxwz3W4gP+IXv9BGlKgB73ktz2pY1eej3OOSb96KiZ0BtxnqbiGt5yPuHH3bitmg+yzJnsvLisffI+5WQb0z8bQrbIgpUrZA2Psyyu/lr1j/H+FQywWsCH3LLinWANWrtAlzGuAWQySA0DHgtgGIzy1ZizCdwi+KWSgw1OEHL+7MusEU0ef+joK/qsscJuoL7gw7AKuV0RJ0zGvpyTgEpZhdpCNmA6JJTaAFmAJD45wBLRAX7XZgD3Cw2eIfYRE/mAXBAXwCOFRjOAZpwnTpDsD+nN1gFms0m23wMqLP36eQt0RtbqlYSrJUOBLpRPoBesiWqZZUBYW1qLR9X1O8uiAuipOmysTKtDU/dPy9eXNxJFdfk5rJJpRhNQTKkKU+r17RhZIFNK6/SJUw+1jWh9OQlOlmzWg1TzdRVwTYt8bR6w3TZmtKaA/xZfwP4BcWAyrUlahC8AAAAAElFTkSuQmCC",
    alt: "TN"
  }, props));
}