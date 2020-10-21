"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagKN;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagKN(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB7UExURRgYGP7WSSIiIdUeNNEaMP3UQhy4WxMTEx0dHR2+Xs0XLf3ROv/YURqyV/j4+NkmOBqtVVFMOfTFQBmoUjw2I5J9Me+UO8urPHZlK+NbOeC8QLCVNsDAwIWFhYfEUuHh4Ty6WKmpqbPKUGtra1y8U+PSTc7RUjRkRs7MS293ykYAAAL7SURBVEjHlZSLdqowEEWT8LykSkEQFREftav//4V3XgmB0i57EhNIZ88Mx6L696Ku9zev1nipF/HLRHeV+St//ZzwgzF/5YPifWN+5FOa8wPQx9PTz8ospNIUwlISJ1js333LF7yg6apC3xqH59Ou0t8U+FaLbzmDuST4lV/6lrvKucuSq03600DfNI23U4WEk/E3BnkM3uAHN7xKcaJvmqdusdT5gVRlfAYaShjJkbokF60187prqNHz9lwN40iYVyP8QtdPahxVHyT+tkXd3BPQ51Cv8lgcccjRN64U8488KN5prTbvG5jvwfbx5OIw0TfRsF3wpsUqChDinK537dX6JzVnxrejy1idNPNelOgy0V0ztVoNPgHlbHoJCngs/uVp8A2kaPICGc7DMFTkmw74HU1QUNz7hhkU8Y/t2NAN+iZK1G634wQ78E0nfAy+EcRLnvM2Dnhl2sTj+xJ50vud4AQH+IasUrxKBvXAlXyjKF0fS89f8IBOwTelBHZd8C0W73WSSJf7snT89QsOE/pLfVDSrm9gugffmE0SLO74i7Cw9kZ55Wqupku8mCb+4+lg8I2ecibffitFIHJflp6/T0lbiM3OIya5mUXx6uTDpPWI+Nofi2/wntzG7XlOm36qsmc0whmphJ89Ad9IGb9nwww/+Cp6f0QsErxUcu59kzelWvcNWic2kiRc354oPINZjfya3OiWfbNB68hM4v4t+JYRraqt06D4jH2zOOsj0aWsJJXYriE0w/DMwG8cJ6gyEPhm3djPSotUfUAQRSv0C780g8kpJ/hGla3F1uM13jAajAa+PErYdNYSC4Nbj6NlEmZCwX8QtY6+MW2h9TiKYXKCcMxZeghuqTpZy+Ut+DYR06TPkpccpncw+IZxokgWybXOZ9mhtq56XcY/KlrnyTdWfYx/UbHGq9bT6FsRBE9Xhdu+8eKbFC+KmAbufMGYHwuefZPiElpIEpepmM6LBe98o9aLdcXTxaL/mW/Fawr40LfoRbz4Dym2XlA+bAZVAAAAAElFTkSuQmCC",
    alt: "KN"
  }, props));
}