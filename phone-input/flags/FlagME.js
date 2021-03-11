"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagME;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagME(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURccLGN4XJc8QHdgUIeS9UtSuR9+3TtqyStZALNpqONqTQjdpiZGSZxwIL9MAAAJ+SURBVDjLrY9PTxNBGMYne1JuzZrYcNrMXqC33UmketK4WWpPhGRcqReEzUzBSyXpDqgHLIKFmympHAnIn2/goWfDAT+Uzzu7Ja2ExgNPZt+Zed7f+0yWRZP1nN0DUP9SulMHBNTu7pfKBLyYAJT+B4jHgfI4EFNCENhzQPuPqP7dhcigDQnpO+oJtxTAKePHargSbWu8zNKXAnKFKDcDERxGUc8Nqs1SQGYpSJeZWiVYuO70KxGI8vkl6nTdhYEhoZCwKnL9nBfVI7DVIzEXnYo8N7YJ9lKOI/dr2hPiMN15FNdykxJUkTCXqt5cuiaexvNg5sUtYC9OT4MsPeqrD+JcqZ0RIBQhjn0VN8VjFUfaraZIgxcOE0Lh+34/VnVRVUo1xTPUngjJtoDv4xj2yfVRVnFEgu/DDAuAgyDgNE84t6x1AeiVEOLhHtyTWZQ1TkAntKKEFaDAnyilNw/04Nd6NwMQkulzbRNA8LCitcrU+8FAqUzrdXqB8zBbZmaDQyGfMVpr83YweA1Qb5Lpc65bLLMA9E1nRl//vr4yJjOdwjQtpjdoHpo1IK7NpyskbRUez1rMrPBhhNHmj/6MhJsASjDDJzi/MNkVLXPJxwCPOzh6+PaRYfRWJ3e44xUJDncgz+MVQ2pQxzrcsQBaEHe6+0lyZtoX7a3udmHZhJZX6EKaxqxZqhgpTxwr5lkAu+ehnEm5ONX+yGWSHNsJ5qHL2i00Gfpst93wdqXcruBjDO4wgc6MnK7nyEQusJkOy4cYxmnZLlX2QEr5ht0of2KBjQjA8eg9adEa0UO5xMYGFmiNqrs9dk1uAf+IEhYn9B0CGt7dwBQBk3UPwF/gYkLPPKJ8SwAAAABJRU5ErkJggg==",
    alt: "ME"
  }, props));
}