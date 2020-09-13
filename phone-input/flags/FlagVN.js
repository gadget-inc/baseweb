"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagVN;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagVN(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURdsrKuU4N+AyMeg+PP/+Q/a+P+yBOfvoPszxsTgAAAF6SURBVDjL5U/RTgJBDKyb+H67G3y+LRFfXY7IB1jgGcEPgFziO2L8fafdO0Au4QN0CNt2ZjoFam7jmf6JIeYmNzEDMTbZagYR7c25ImU8RIXP+QWKNfbGWJENOftYiLl1PTwSwHoPEo927U67HhkJvlM8vtnn7doSvOWBLYYzorz+Jq4ND7K8bRjJYmgIPqUUAor3M5GcUpmNqKhUfBOa0IrsfNkBB5MaAN0ZvQNHkS+tAbJupJqsmGkrJ2xSWUqakLgbJid9mZRUBQnoOCnBft7pq2ngInPACcjMbI7uyFoHLo6KmE0GApcjS+4AF9fEl7CIt0vmbFA7H9Vw6CN5kHB1Ymi4xz8QWQwMNbsyPYnsW1ldMDDUtU7OMJNPHh9lCqbuQa44lON2gfooe2c7+lGDgcz9vdf242ADK+tIFbBGjdfaurTR11pLoE53dEe2hHso2CQlNYIU5YoKZNEabEJN1uuOTaqf4Pq+iBZI3e+2TboJd1X/NH4AcoGfgwDKe2EAAAAASUVORK5CYII=",
    alt: "VN"
  }, props));
}