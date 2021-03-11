"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagJO;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagJO(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURd0eNRWTTyMjIw8PDxOKSvj4+BGCRdQaMP39/fPx8heaUxQUFA98QR8fHxgYGBwcHCclJeRse+2xuackMHcvLt47T1piQTJ5RQXEvP8AAAGzSURBVEjHpZINg8IgCIbZndOxVpdu6/7/Pz0EnO6jruarMWE8CBWM9yoBuPtXhYA0VfIw3q9nxTzNUMfTDD/nlHgYr3U8zXA7oUjOaYaTfJ7hdqEVzdta8TSDhm9qlkp8vu3jsCkwXT4TbDVevj/RjnfuWr6/8F6rjMFebqq5n3jwbfeu4FAz1vEA4XPea/fqxRla3i/ULh3D3M7yT3a8aIaW1OmS3fGxVEoPGDr6CKpthG2yqCtWqw07QPKQHb3f0e+AmSkfq/slm1PRK+y0kG//U7zGOecD8YjB880adFKU81AMFmc22m7MRfROQWkgUMWW60ZS4ByIlieWdB8g+OTExxw4idISzGfM5+imVt0sH/WBe8edlMougLarZZy078IawuNafH+JyXfh5oBvquQXecQa/tG/rx0P429fw09NX8M/mr5Zq29yqF/cFF3z429O3BY51oqfzLM0c3jc8A/T8JKdDD+abSzFoejdmPwmGZPTTfk+lYHc+ynB0rullWTF2MUW4fRKFmjvlpwsI8YstgjrQbZlfrKnFfmHtcPThOF1FKj3YRjs8Ez2dRSmoUp/mr1P9DMpnZIAAAAASUVORK5CYII=",
    alt: "JO"
  }, props));
}