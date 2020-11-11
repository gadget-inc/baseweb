"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagIT;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagIT(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURfz8/PT09BekUxSXTBmxWtk2RNUzQd44R9ExP84vPeM7SuE6SeQ9TNiQMCYAAAG8SURBVDjLrY4xTsMwFIbtG8Q3aBpfgOQCKOoBujheWRxl7BJlyMIUuRtjujG3C1uldGEGDsX/7DgUaKhAfMp7y//l92OriVs28TbxzC4LLy97z+NlIcSzwv6a8DoMPwvD4XACw3CYEU4TT38Vjse2PdHeXBZc2DRtOyc0BLU0GyalzFeYPP8qONBAMdZKfhNaJ0jpfs+lXISYj0I9ChTSXkQRZ/Qxpuu60TDqesPyfJmHhjGPIoRwaq3RgFguJe0FDwZT2nXUtVqzMcXGE4jxPxq0Ugqj9ZohIWDEVCAgcUaRVr4BGSrIijmL/J2cCpRbJAQWkeAELDVxLsSCC0GOEDMCDhDUEs0J3L8ARRlVKGMw3xo4LVEUZUGGMXdeSP0NiPyhBg0FGgoICYABYk6GoygBrQICfkeaLJPY3xjB8mlpTIkn0oRiahAB7gsM9h3LkjRxpDcudK+UjsoJFDmSm+kEMaaVb4CRfTQ4uqrqbGWx71mSUZ5hzgTbdVXZlV0HweUpOecN1lNZCIFPDagAtrO4gQoQZ9knIXDW8Htha20/J+z6frt183BZ6HeBGYGivu9325+Eqw3/JrwDCOxr6+4xpG4AAAAASUVORK5CYII=",
    alt: "IT"
  }, props));
}