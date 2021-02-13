"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagCU;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagCU(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURQYvkAo2nAgzlvj4+NokPdMeNv39/fPz80AufeRwgNxFWfPV2YooXOypsrUkSeeOmZa0VQEAAAGISURBVDjLhZTBSsNAEIZDn8D6BG2eQFhoDuJtFmox7WUHYsEiBDx4Uchh0Yutr9BDKF7r0VOxgqe2z+ADOZvsJtbsbr5DJ2W+zED4mWDf9XISjBctAgzbBDiEFf3wiH4/7JEwfg3dkLCGoV8gdoEHJYzntk4n6BkBht4JazKWdw5uywkw2rYIEA9SzaB6SlM2ODMC5EyTspqU1cJow2zUAsSZjDJCRlJm1fNjLUAuNVEmlVWghXWx5Es20cJPucQpjO7ph4PY2/IgOMDkATj1wZKuk4DD5ertfLWiGQIS64TiC3xzIWjKoZkHznnM2AXtoD5eNQWkxib6VO8L5DvLBCGmUj4jVSGSTjMPNOH6ZfIk6HWcHSerCFQgEON3/EBUC2yJQhqOxfsYWwOjOmSQN93aBdUvWNoThYbYkSjTn7oSZYQ8cyRK929knaLjROkFtjT9FXLpFxLPhVH92aJFOHT9QuK9MLTA3KjTf9UIu7BT/tGlqlpITDJMqWrJbO66PfpGeS8c8QsaHj69S7MUWgAAAABJRU5ErkJggg==",
    alt: "CU"
  }, props));
}