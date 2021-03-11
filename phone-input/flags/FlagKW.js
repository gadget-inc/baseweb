"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagKW;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagKW(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURfz8/BWVT/T09M0XLRQUFBKJSRsaG9EbMRB/QtQeNNYgNiEiIdciOHcWIhpWNdYiOIL9PW8AAAHcSURBVDjLhY6xatxAEIaXfYK4UC/0BAcqRNp4URMOcoVgS3Ne1CwJARVC3aUQqEwndI3dWhhSGIRh4R7gmhRXuHHjIuCHuCIzs7dnG7TSp9vRr5lPc2IvF5N8YubXnLCbE8y/OcG8zAm7bLXKAncyYLUKbA6+oWAeoZW5EwAoBXRoA3zGqfER7NgNxtSZByfsZHZyaplJvEMDOtIJ5rWu60bWCFXMUjb1xgm6AeqGkOcs5YYNhDE/mlE2TBu4hkHrR4+Qa50PeMyrZwPMiPyKjZIPea5hjdY+gf4DLO8Gh3eDdsbchvyKs5BxaOGdAuP8vbAOOYs4j0IEQxSFTlAkcGjDjwo/pZDBUKk8TVO1dkO8R+DgnpApfD1FZR29YR0MDN9VKW2IRgBBKZEKBdKXcUEJmIIhlEeAMShg+DYIQQrgFwStSJ/7vv97PO73/T2kff/neOz7WwZfaHnox7g9bRBiub3ZTgnp547Ybu/uuu4t/3bCob3pzpN3OOF721Vd21ZV96Geha9JV1VlC5QlhqqyuSx/WuEJMzVgDPPSRlCtcFl6IWGZJNPCU1wUiaUoC8y2FkUcL0C4hpDERWILgAOqRVGCsKQHmNAwoTG+DxWuBUsP8RQLdkimhf8Zm8i+GpVPegAAAABJRU5ErkJggg==",
    alt: "KW"
  }, props));
}