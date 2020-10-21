"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagSD;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagSD(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURREREdQYOvj4+OEbQP39/dsaPfLy8hCFNRkZGQ9+MiAgIBKMOOcdQiQlJA53L+QdQeofROkeROkeQxNIJHdUO2Sue9Hk16DMrr8vP7UqOswdO5Wl7YMAAAHeSURBVEjHpZKNuoIgDIanBkYolml1zv1f6IGN8aPY0Xq3YI59bPoE03Adr+N4G2/I9Xa1nu98vowdoNvX2I2BbuwQl0tjPlvGoLWeqKwbusF6twuudXo9ieFTUG/fYWgG6w2SxunzMu8gvR2h+QzW23fwGYHe8BqyIj/16aDX6iWQBl3wKjgbk3QJ5aPejZDWl2ORX5rp9VSJo2R6rX5Etc/IM33rfhOeOKiAnzhVZYdVZf+/ZK2mffrNCkOxz4n8UICXU38XmJ+qyG8xC9y3xRlohGo/0LYspZ9jrk97AdbyDTTFY7++DeKA/RjPg/oV+A41+hvqTb3Wj9py8kZ+wjBlU28veC6LiVNiVq/QgqskMcuoSbdCf5ZQzI9z/R+glK8Ne4yxP80gaZFJjAtQsXeGLnhKiQrafIx7TIBKL0jb64ekUqz1sqiUtIHaYJahKlCIN/Q4e04tS5T1OPsuSnozS3lMbzL5vd8PWK1RuHgzfX9IT+2Nn8E2v/SX/YAh/B3mvqroL+ULKQ88NXGk9bK/Ubb5ORr5Os6M9Y77OYNU6zgDTBh+s+YdsNH8qN7KAc3lOF5brnVG8jOAjZ1zEDM+8rkEfMTm/JDsSXTO1miYcx8OvoBm/5z7V2r4A4WSTKr9rmD+AAAAAElFTkSuQmCC",
    alt: "SD"
  }, props));
}