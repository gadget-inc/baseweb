"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagGY;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagGY(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACTUExURQfCXQChSt0ZLQKrUP7UIdkXK//WKAa9WgGmTQCjS9MVKAW4V/z8/BUUFCEgH+EbL/j4+PT09OUdMvzgaQCgSdPx4Sq1ai7GdM7m2fv68vjqrHrNoDggHfzvtfTz7EtDILIZKH7Vp6WLINKwIlkZH+3GInVkHXQYIYHcqoLgrVRXVpsYJZiYlokcJ+MdMce/n3C3kMFv7ukAAAJmSURBVEjHpZOJetowEITlE/AFOCShiWsIhNACEX3/p6t2VytLsqEFZoUlH//M+kMWh/dX8Yiq5vz8+wGLqqoObXG/RaMMmlNR3Gsh9xW0sCzutKjrNbRQQQv3WNRK32CwOv8wFqPRSOgfHARPqkR3B+8CLzNsYfP0ky1+vfZoS8K4Ea8cqIVt2llgFwZwhm1Va4PsExy+0jR1u/iHiJe1lKaFQYu8j+IlIWWNJU0Lu9S3yEdDhQcxlXKqCjU9di34XejnczPwPNc8Dem2wBazYjaDLljkQCsxdSTlETf0Jk0tixk4aIuR6+DxysFvgS1Azx9dF8N8qH5H2k1p6lkUAxYCmTCccsHI8Jta7dKeRa8LEYaaIg8YSmvdQgxgDCMesIiAJyAkkl3CZF+V9FcCGsfs4FuI8JLWTaksNh3JPo7FZR5bKMvVNmaOZ7sLn09gQIGOqoOy2tIboHhWqzfNJ4kmElDYVbYvdT4FI6xXT2+cT4GGxTWe8/vbwngFtwQvP15EkjDsrKxw10HB8/lMlYKjKDK8q2OjaC/cwIomOL/AZ58YvhuAQQQDDXxmCgaGV73wHkzKu3zEVWUU/rUbhN8tONL5hPHcC78CA4+ReACHtRd+HUZe04h/A91s/hdmngQ7pgu34XEUjang4KwtHndMs+3B8CjLWpIM34W7MGORhinXnAovfAC+KmGH3wozT9/KuYMnk/FkrAbNIF77s+LxWylPbTtvNXyDBG3Xw5KTg+A2vsTwedsqOJggHIBJ4M4g+xo/Jygc4MViEVyU7WNLlNUJYcA9qYuD1+374vDnZfGA/gLixnaEmcOAlgAAAABJRU5ErkJggg==",
    alt: "GY"
  }, props));
}