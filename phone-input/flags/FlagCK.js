"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagCK;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagCK(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURQMOi36EyYuR0O7j6AcUnPj4+dgcNAUQkAkWowYSll9mve++xL7B4iArpjhBrt07UOqQm+JkdKou0agAAAI8SURBVEjH7VRZsuMgDJQNQoC35P6XHS1sdpIXv5qav2lVJSDUagHC8DgWXLfImDGEgLMM4zaje+IUvwJwCQ90+czPDh/hifkGP6M7Die0Sfmsua24HJx1jTf4URJI8D4V/QlZvO3qKz/uDp/h6XA1vorz9MbmjS/1qqDy+dyClhNv82OUBGFR/hKCHcdN/qRY0T0Kn/9xVme+w8cBWv+AHP0XuofwGXqEfrDTxOwL37fInqFn8t/0Lco3urdJbB7/8/5LvC9MP+M8JNT69aRnp+du58+dZJeSBzEjcc6arPjA0nLL9fuXzvcXbHvVZ+xb8zN/1+7hjrX6pXu59y/0uhlBRtw6PzvuWHku9n5XmT6d20/8HfkwK/iBtVVYpWKOn3x5v1rOYQlS15zaltI29VqgiG8+Fb4dB/s0KEkOS5NsYtNUDA79/Mi48pPfZQ+LDAv9bGNdwOc2S5z3TT95/QItznSu9DT6gF+6OlLiDxG//pwU/AXENZVQvjYN0TD9FY8CpuZLWXqmReW8pQJumxLjy6p6VD91ENtbNLVXD6S/w7/jU+rboctC3S0xn6qRUapZXPVnboY69nzKNOhX/0sBRDWZ9H/NStL/NR66GClhwFCpvL9KJ3l/NRZeKIM1J9G2y4ivTab71mKBuu5FviXsabhtLlFAn7mvTtU/LQH9BnDD8zsADJnA/mHMCj+paGwjlHFfaXadDxwwnoCG8bs5jEvXOZ3GNHjojcFl1NPSWeS9/Cf3f/wWfwBN5UC48jPNTAAAAABJRU5ErkJggg==",
    alt: "CK"
  }, props));
}