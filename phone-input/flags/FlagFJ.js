"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagFJ;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagFJ(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURWzD6vTz9Pz8/AUqiHHH7nTK8dgbNHfO9G7F7GnA6N8WPOocQvCzvKPZ8sjd7oCTxNktRrDVwnyOvemEkfXU2eFgcbO+2jVToJalzN9EWHmLuiqRXGJ6tZ9pjwvDkQ4AAAJgSURBVEjHzZTrlqowDIXTQKE4FFEQ0WHe/zVPLhUCjjP4Y9Y6W1yENN9Oqa1QtzUOGeuIRVHgUeJsRHfBpvxVgHXbobuu+clh114w7uAn7Ntbj6PhrwP2t4Jcyx18dnXuVtTYXB/83bmu4Lcqd/FscCkuDgfhx4beiB+nbCefZQ1KQ+Fp3QqZTrafzwasGWK+bwtdDua9XCz/CEyGLziKaMU65Wu6u1GSUWu9wnKTy2YAjWT+RtH7FZ3CJfYeitdyjV8p+aRYo594bGwnY2PCd/r7jQl/wRkxYxWX+o+15nnAmTU6Xnfh667HQZJng3/Hi0APG+33oleeN4IeSL+Pvza8e2jHCs+7t8Nmy+sPSqQGKZsTP/H2p93bjMIPehr4ROc0zhd/EU+nxHPgc/lQ/0EaOnfPzsLfZTo3NqAKEd08nj4/T3j4OGgw54GODu13fuG78rocbY+T9EiViT9YnvMgfxRTZnk60eRaY0w1bKLTZl4CTdMA0LqN+pe38HIgbzWm7rnwLOFZcx7QUZvAirpn6IHcIxW5Bc8Pay281rNCZIXHq8VY7uGJE5htQnp4UsjbFd4ufMgtxA7ss/JkNfJyhMq9Sb1CgLDoURvy8KQt/xBou7Bh8nTlaTSUekAPekDLuR7CPukLpAO+tN/NB294b3iwXiBiU46tOVRx5iPY+iduNankA2ogfAwLs5DwSsuIF758Of67vtqvd8qfVMEfqpLP+/OpvnERp8VuTpnhNFpJNNebeJVj2drkWoGpt7K5jd+qZguuGr4QbOKfq59qwbrsZasX1e/x1X/H/wMalkWT1PIH3QAAAABJRU5ErkJggg==",
    alt: "FJ"
  }, props));
}