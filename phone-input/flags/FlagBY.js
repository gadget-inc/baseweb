"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagBY;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagBY(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExUReFAUFi2Zlq6aFu9alCpXVSwYvj399g8S9A5R8o1RPDW2NxeauydpOGWney5vuKBiqXUrG2Ph4MAAAGgSURBVEjHxVbZlsMgCNU0RklSO///tQO4gCbNtOZhrksQuKhgz6lZEC+azBiQuZv9Dn/Feb3B33DexvmRP/Hf9r95/z3nfzfeeG++bJ63ftEhfMunqYakXvTN0PziKJG871QnB6zn9wLjK7kMidBC8tcwr6HjYv1Q2jL/a+D74UzFYX67f+D+GciX7o9R6P6BW/507UzBvin1Kf8Hv7zWEZQPS8bn+ouJhZCFvFSC7oofKrwaWlRrQT3/82A6g++FlD86RBiC1G+UH7mWcQmgWuoftLR/wP2BEYDVFTkQqICKDcD3D3R/sQIohxIVDjL7mielniZ4h5bQaU3I9Ycx3Ob/ff5rfnq6a8n/AH9DPtbv8RGmx4Rd1vh+6BlBXNjG9h7kX/Wdj+xvpxHw/YHubyumrl2h5v/nynGyyVq+ig+5/mc0pwR31LZ8p2HTZGVpW1sBnx/o/NnLFpp1JYZVJlZbWUj+3BCofviMsH5uPjHP56xZ8SO/w7iQdmawwL3Vnellf/Gai5emCtys9Cb9dNfE/x5mWVP+h/nl/+8Y/xelDzpxCe9CGwAAAABJRU5ErkJggg==",
    alt: "BY"
  }, props));
}