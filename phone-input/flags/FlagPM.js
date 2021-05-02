"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagPM;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagPM(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURSSl2ssQFf39/dQWGxyXyvj4+BuVx/7ONh+bziKg1fX19d4sKm9zQfLy8ieiUCOaSukyMN7t83vC3u40MoWFhfi2M6e8d4W0jWe41OfJRmevpDKhyMjCWSsrKxgYGOFaJOuCKvGcL4WQe0WovCAgIC8vL/gEXo4AAAJ+SURBVEjHxZRrd6IwEIaBBkwoKCCXw0XbHu3//4s7VwwcpHU/7A44ziR53hkiMThnx+MxO5/PURSB5yz4vSnCvMQv8QIhr728wBdFwVgcx/QNA8VrfFEgGEex4i/zKAD1FX+Fj7fsX/HO41O4yMMNEy4gtwjmVAfhfifLTqc0TU+njFN/6dC2g4PEOc182UBx5kWA5njVcABrVazFbOBJnlc8Az5TAeecrHA9EoeORlxHSe9mnHjGgH9XAZ7DD5YHif6Gya3nbBB5R/0LlOf5HLvZuCI+AVgrSccwCcw1iZfswSuCPcuziJjw0Zat+J42jZ7lr3jZwU61XuC7Ne/9GsrX33UUk4/EOwsX7PdtvHk9z73A8ChL8P39vl/g8F7ulyhGDzFJW6w3bdWftAcLfBTXlxpUyEccs/jBt8HaYTFAa+z2+UNla/vDjvV7vCWb9viJ1wSpd3Lh7LJZ0h72+IHXBAzU91o8qWD38Jl2yzuuT3a9Xmcv9cHGpzvQj5YqAJ/naZ7W1xref/ZgVmx80sE06oog3zI7W7fRQt895n/iQWHVw9T5sz/z8BRDO/X4J9JP7TBas+Dftuwxb/Ay5C3dZqn9hDdCisZCTmb4elbfCPhYaa3n5i/iPz6/mga2pmm+Pj9wQBoey7LSohXGhoUgHiVGvlnsb6O8NRX8FTBVlRHHVuLK0L6Y4C1c1w+RR4P6eJjKqir1YGlcjrSAeQDwDjEKKTGiDrX0SCGZygmjntgChmaYnZkNFPD91qdY0cgr6pvOJiZJZOcSTL2Yp4lfP38YJgmvp0VspCUhK9MI8qv9n3klNPYkFOf+F/VD4vftoRSEW5b82v43/wcjV1RSN2Hb6wAAAABJRU5ErkJggg==",
    alt: "PM"
  }, props));
}