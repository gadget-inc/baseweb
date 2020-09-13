"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagGU;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagGU(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB7UExURQAvfAIyg8QnPgU7lAM0h90wSQQ4jgQ5kQM2iwEwgHK37NYvRtAsQ8kqQcMnPS4yeBmI5PvrQB2L6GQvZn07bYNTFzuTlC6WdOOXQZyIsksxbnmk1Visxo8sVLxAWyiH1UB7uvz9/6tuk6/MeLVfgXeWkVVyTcDe9y6T6PjyB5MAAAI5SURBVEjHxZFtm6ogEIbB1XyBkQq1sjR3a9vz/3/hmQEsKbo6uR/OnQLC3PNYseR3sP/vi159zEH1Ln+ejg2MLxL3mH6kBlx40P79ngVdyk/nQvlCiGvsuz66TCRidj66t/wgqlev8oVY+KSLFC+z1Mk50ZPnu5qwf6NKdsUuqZ6ev/BJL4qdqGb5qRakUwP9ws+yRbbA6zYjrfgqLF+ipX1irJn4UmQPUB305B5o6CHOQqBL+b7p6MSe1A0Ne9GFfZMvAycLZd/+sDnYb6BCvkRfChE6qgTKzYZosIWogr6UTJr8OIvxcts4x/JMuc2m3jS0OENsSrJJbYz5xo8N5sAdxkqa/+5wqe0X2ElljkyhLUVcvt2ckrXS/HrNxeXvZRs/MvHv0NL88813vTd+IfVbvsn/KQr0i3/L596JksN6/Vmsm/q4XiKDVL7KfZ+bmxvogUOF/uefoW7WRAW0zZ3JXb3xQfIr9oSuCo7o/ywv9YDxR6i4hy1Dl4GU/JFcQUXvvTzWdfN92oIau0+rKB8AeIgOBtNgqOvVCrpgjQTA/LDPy/5I+StElHmwBMjH/DznWJD7s4LtYbk8oU5v7xqMNZ6f3xh9QsP2ZHWdh+D51edWHU2HjrakR9qm+jE0PeZ7MGpA+jNe+UyXomxzNssni7Wdeq5bPwIMyv0PDcwN4/P4mVSRH+H9HmN/htkRi/CeSxSB6THfN/lqpq6sX3bzGqiO/BKHkgacaGGXL9c0E6z8Hb/1/wJFDVHMo6vEyAAAAABJRU5ErkJggg==",
    alt: "GU"
  }, props));
}