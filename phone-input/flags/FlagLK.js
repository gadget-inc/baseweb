"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagLK;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagLK(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURf+6Bf++Ff9iCwJeSKIlL50jLpIgKpYhK48fKdB0HLdPI+idEvm0Dwp3QEQAAAHZSURBVDjLvdK/T9tAFAfwdwIpBBjuVDwAGWj/hf4DRbKHlNVPFj9mu+3E0PNTBQNDZWWMJdKoFUOQCAiRAQ8ICRiSgYH/qu8Cqu1zkqpSxddSLN373NcnO6BmR8J/AOvvOe84b5Vr58qANzPAx78B1wabq8VpulIFjSIYVUHzqQhOjt1/PYPHyYee61caeM0gz+cg/9oAfXT7Zjg26CEyEAXge/7pI+LOL2TC2vPsBsTMwWam+jsdnnOkBJkDwSvKSfkTPe52cJxqw8gZMFjZW/3Zn9yQOX7GYFuptZcGWW5InbShxA36Vw0DBJQbAtx0BlIqc4Ksr7U2j5jLGwLUe2t+KsQxYnNklILCe9gA09A46wkh+L8mO9wAnLxB8EobpAlvFLdaB3wGMZc3EOmhAGlOxqYbBCTtBrrml88XR15oCkDaDVvPc965HJAuN2xICoguH8x2RnXimKZSA+ebGbVhOP8CwAYENaJ96NWmga9wS/RhaX8q+AJdinv1QwaxDWKTA7iI6XqxV4vjKLJAZBoO7sIwvD8fdKOo0hD+SRQm4/tEEOUunNowDXx+Kk5PftggOVpucZLn538aLiQWaB3VW4W0F1o2MNuLJJkASvluwNIMsAWvkd8LFTn6/z85eAAAAABJRU5ErkJggg==",
    alt: "LK"
  }, props));
}