"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagAI;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagAI(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURQMOitgcNAoXpvv7+wgUnQURlAgVoQQPjgUQkQYSmAkWpPPy9HuBx/bi24GK0FtlvO+8wv+nIsTG5d07UB8rpD1IsuqXoayw3JnK/tTW6uJebpCVz+Z8ifvQjiC6mI8AAAJxSURBVEjH5ZPrmqMgDIZDAU9RsVbrepj7v81NIijaw0yfnX/7YRFC3g+kAPdbo4fuQqq1UkrX3Lx0s64m334r0I1aNLoj71Df1aRdUVyKb/hSV7dbpedLsfHdQDFybWmcDJ56cJwFhUNKvuuxD3yJuCj5quK12JM9oEj6ESc1IQ7CD6NubtwtwxRvBWTVtVomFJ72TclykqRI1hxqPG0Ln1D/MtB2qUb4RinZjuRRzDEfC2pRq6u75+mNgwTdDj46BV5HkvVHcsm3AvVauv4F3vjCTxL1ffQ7npJMhJ5oQ9+Pm87fj8681EobA2VNZUBslgaJx+ZeYVuK3Bs6CLia+Qgrz9PpwSExPxSYvG+RTs9UofBIp3fBtjvltb0xfbvWR57uz0SnF9tZ+IG7E459nJUbrduW94Rr7m/8wCte6LqYUviy4+XcKuwpK885lbPjfV0d1wJyV3Ho8tzzuWwHxRzTQcxV12vF7yicA919HB2HAp/ndKMX2k5uhomY+7pev4TfoiYH2rd59dt509FX0QqieQ7zRwJse990cogcN610xijPw1If+JKSV1nHZyYMGOe6KA9l8VLjgbd2a1uWzE6PVPlmPu7zjwd+zV3LahIFrA1m835NZm8sBeyukGtze1ba7XwXD4B9Kj/37gQu4C79Af+gDNwfkYPsEz7bDXrGezhMb2O3zGb7k3Ed4TaFrq47SCVufUoG2UnBwO4+XikAPad0eKBfiw2y9/zHOvOp/NKUG+G9jx37wqdHZesvC/weP/oGwZnO0o8E6b/p13hp8D/sy9k5xE5vgG04RIJB1IY9Gw6WLxXyP9Q23/+ivzamSMHqypVHAAAAAElFTkSuQmCC",
    alt: "AI"
  }, props));
}