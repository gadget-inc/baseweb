"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagPW;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagPW(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURVGx2P/fO1e33ly85GLD62DB6GTG7rXPhenbU5DGq7abpDgAAAG4SURBVDjL3ZOxbtswEIavfAOlg52NIIc2myuCSLJ5oDwbkIikmwcic+KgD9ApGdsCRvO4uf9IS1RrJHt+m+Tx/u/uLAGmu7e1o3eBlNLdJqXNJE7nPXB2RxylFDaBtRGQbwEr39eEKCTcBJKbIMKEHYVKKfynNYW3taYhhK4bhnLvylEyXbelgcVBjNN53LG2FLOGgbe/z8unQ76WdBwB6KGBfsRaNfAifrM8zIEeij7GGzZ/8qdZxCgZyW7Jg/MM5QEyxHtkJLsi73rnet9/H/3mvPfsYTm/IudZDN3KBNmWqJHlHTpIUCYI0jy6HtUo3JIraip9dqNWR+C6Bs5PAJc1sDgBXNXAsgZs66y17RxoR62IfcfBtxpokHMoZcBweWvtvx2MQd+21SSxab/OADEt561GB/btl9lTGNPCNehgjehi9h7YR18WdyiqgbNi2xp4qIC9GTUBnyrAnAIu6p9QA9ooLWuasVeQziL28nd80IWWUl5KOgBGB/pdgD8oRA94mhBIqCgPuSdYKNF8EunjLI7xz/olviJUSZ4QkmRJBFbJTkosoZVYVJCyZ3/MqBJMTenj6BUs6ecUo7+BqgAAAABJRU5ErkJggg==",
    alt: "PW"
  }, props));
}