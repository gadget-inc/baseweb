"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagTR;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagTR(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExUReQZKuceLukiM+IUJfj39/TU1/CXnuxrdepLWCaybrQAAAHYSURBVDjL3VPLbtRAEOyJg8hxeiQeR9sCxHHE/AEah1wTORuurAK5JlHYc7IS8NtUddurVWLlyIGWZ9xTVV3d9nqlfz5a+T8EKaWun67UIXoivvdd1wp251PqAQDHbhc1fRSotXN12ozD6pYu9ACL3QRMkqZ0WRlrZSWLtNMURT2guKseN8nPZhw5JEO71ySvtv3vlbKJ2tJ2dlBlgzVHfPtglr7mFknfgD9Jlvc8+9oJNL2rdej0SewE7HAy59sFQeL4c75xbk8QIkYYeI8a4PagvSmCilgS9UOtxxMfwuXF92/R8ygxIGJ8wRGgBKwfR3czQrCQ6KtaPzMD8gvjnDGHdxQRA+UQAgk8yQEe6DQ6J2gRiQY6IMcJrcf6ZSoM5sCdM/BOizj+GFtzsGpDBT/VMQEco5zHo2vaUzMVyUu8h/ksZ/I0AkZnlVDVLggEo+8K45LgPXosVs6BIerX5wTCT3LN5Og+z5gnTdNg4UHHYbjaHvy5kAYMUeNzxq3BVX76Rz3cs5IoVb43peRcPtn/YlgTIJENl0x/HnLJm/Nhde1yYuyepTCAFbEKJ6mxvNiIsG+cnAODcQE3B+fYpCmm3pOKuNejoNaF0wyP+b1mi4LybwV/AX77rEuj+DyJAAAAAElFTkSuQmCC",
    alt: "TR"
  }, props));
}