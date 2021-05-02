"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagEU;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagEU(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURQA0nQI5pwE2ogM7rP/QFUljeyFKkW96ZsuvJ5KPUsu0PO3EG8HuLb4AAAGxSURBVDjL1ZC9TlwxEIVHljYk3druqGw/AZYVRdAhGRToFnHTJ+KnTSgQoqLIAyQSBaIND5pzxr57L5BAm5xd3Z0z883Z2ZXysrbk3wPer4ZXgLr3FPBdJZfLc5/rbvlw9q3knIvnc52ARnk41ISd+itrJ7eEnK1FABq3Bxk35O3606PrNWFJgAj1cGgJbiIBnaKrW6IjQt7jBg+DG5hp+fBLAj3AloKefl1bIrPsCTZf33NP39aq0c0OQCf1s+3j3I21M8BPvUdmSuipT80EWBvnZZwA11pjx+EVxzLGIJg7iEgTCedajwmOu84Ni9UYTw2nK+dYBInOpRTjcV1Ftujgj+tRWwzCaUzppH7BQFl6WCXTUjjFRFdionPNJr2DCYxMw+mRfvKNr2kW6sCfFF8DnieY+cA8A67uLqbxZNZA0N9pZsaMQEjGmPGPoEuBQCtCEJ2iYKqhQjAGxgTALSG0ZmKr1yZJUBYJIloJqstzMfAbZ1/ZlK5eYUG+fzSk39YbpEhoakiDbg9k8WmQd/WHrPfXwgYSZFH3BAmM7M25cMObut9u+JuY8KJ4w3+o34LNsOjPOHSZAAAAAElFTkSuQmCC",
    alt: "EU"
  }, props));
}