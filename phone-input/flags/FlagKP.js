"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagKP;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagKP(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURQxUpQ9ZrO0kM/ArOfIxP/Q3RRFdsvLx8f7+/hNftRNgtvJye/ba3PWxttSr2pYAAAGISURBVDjL7ZQxS8NAFMdfvkGzZC650SXknTiIULjLZAtFLzjYwS6Bbg6FE1Rwa6C6FuLk2q4iDuqkYkE3kQz1w3gvaau0NThk9JfLu/f+75c1MBoOE8Pl5XBIb5LMJqqj0RVEUdTpJMlgEE3pdL77KDqA7HIcJ1rNAdiO027b5ixDmwrYxVTAsm3Lsq3f9hUwVLKzEgtKIC7mrAQhLKZZgqBm7KfpRKkgUEpKqvQq1QQZSCIIxr29+DmQZkGbwHSU14AiqVS4F1804p7KUpl9FZBUAzllHPe34/hJLjAXzLIrj+L+siCEkFyIxk2oeBg+5JOp0jSScw845yg4r79SuvmWT9xIpkEhPKDLPBu9a0S81WI6I5KKWAPMqes+4r4+xwW8mbCljxE39emywBDNMbsuXnOy0M+TvHjgE8zFl/fWyW766PqMuVnETOqzKmSXCVt3Wh/f77DcIClrq+D6LuGvp1rrD+YyM7A8pOLBfF77PJm4P2BZrYJbTBmCLuawBOH/H/U3vgC4AHq51cc2DAAAAABJRU5ErkJggg==",
    alt: "KP"
  }, props));
}