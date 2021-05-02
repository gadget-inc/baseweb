"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagPF;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagPF(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURdkhNPX19cwaLAxJps8cLvLx8d4lN9MeMf39/fn5+f6dM4im0/zPnv62ZNPc6Uh0uOSDjeNwbmNHcjUAAAHASURBVEjHzVbbloMgDAwsEbFo9f9/dsM9ocp21z7sYM0QMlF79Aww3QPc1UPokUYLvD9ASXQ8DYCUTiiRYzrj03nt72H/NgohFpDDGHBS95Zw1NPQydhwjiFSk9b4nCKbthyYBE2D4WV6BdCmjigqs5JIXBvJ42oA6HuA+R7+td6v9KWsfqx3lbt6isB1WegLW5YVx3qXEFmZzg4XAn0gIWAtaOWJAOOuakNco95G/eo4ZtYJXLdUeni6ee/pLfaeHsGzJVHd6Rvo8vaYd9jnw/Y3wHCpp7u2Zqd/aDekXy71yjnllIALOe/9ofV0TFofxGOODuXyetZA1bRfAe6W3nC7oxILLhfGNpCI6BAv8fzieBZF6pNr2PVfsD04Nvl8DZd6JV6zy6qox3Agyrix29/wpCZyQMQy7+JW/oJnkGPRVG3kgGmttmFzfIQOzwcKKMEBB1CqnJXUNQz1b+C2/sJFs50PEWuyKVc7n3pvTqYPcu1j9t1beDoyl6s8zZ1cMFZXHVrKmW93hg6nlj/aDnzC/40R/m4rP43G1H2ASf5vzc+wFzz6f9swdLxsCXIuc5kb+79hrO0ZhP/f3D98A5yyNefYTMn8AAAAAElFTkSuQmCC",
    alt: "PF"
  }, props));
}