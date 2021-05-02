"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagMH;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagMH(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURQJBmfv7++SAKSlgqwNFoPb29+yHMAE+kwZMrAVJp9DZ5n2dycuBRUNWf6FvTkR1uLy+x2iQxqrA3eTp77qTd7WmoXRjZnfcihwAAAJUSURBVEjHpZOJtqsgDEVBBsWxWuv/f+pLSMKg3q6+9kCFQnZOpFR1P2lWv9DT6H/hD++/54MZ/S/85D3zIbWuGGkSqpa3utkLH6icLkA3Mpdkgbd5Xehp9MIHEQav4aQu3CgeXOKlOgzeAnumtRC6czOjL/kysbv1qzU1/pbvlmC0Ccv7FHb2/p4Pm1n0Yrb35qO/58F1fQ56eK5/HFrUcaL3HniLZS3bapzW2pl1W+Ka5R0qG7o1p9r3h9aK4mwwvXMamuuNcCkDTeLBNbGjRqCB5yCzDAhDjmExBW2pWTq4hnvDNPlDya4WvAyx2GMCOLgm4UA7zbylAPQnoT95WkqAj4NtCX8JHeunUHz/qN5Yy0ktZ1GzZxaezeupdcFTsMHzR8HLGOYkz4RUROFT0Ym3nbVrP7ihX+NcUNRMhSPsT3TmQXD/HNw/W2saGxLQe6/dn3ww1jj4hAo/qHCsHeirVBX9PJm3cyMSb1eXIDyNm8zp65RouC5wtRiOT5z0g1GWGg2rlS84zplGgDG65hG2jKVmUqbi4IhmkkYXnTlY5RFFvDoyTRKc4MQlqqokHdzrmf8VES/eWbFoKh/UdKE13W10zrLpkZOh5qt3hu05+iw+uL2/gT/QcaU/h/ngSvo/YD64/VHB7XtD3G+pRfP0g5Nzq9J2EalkLitycImOzm2xS2Z50pbu2I9M1zBuonJsrljJOtQ+0g8OMIdn5ehytU2p24mvi8CSQZVBVTLF3lFzpEv4xFy9i7BpfPW188dC/tj772Di98e3MPLT8j0M+gf0jD/eLvp5+QAAAABJRU5ErkJggg==",
    alt: "MH"
  }, props));
}