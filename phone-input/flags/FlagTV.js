"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagTV;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagTV(props) {
  return React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABvUExURWSguHCtxdgcNHKvyF+bs16ZsW2qwmeju2KdtWqmv/r6+ggTmPPx8v/NL6i2f+DFTM/AW3qmpIWLzXuBw++6waHF1Ke7l907UPLW2oKvrcLN47y6aaqu2uJebigyqN/j7euapOZ6h1RctcG/beiMmEp/HI0AAAKeSURBVEjHpZSBdqowDIZLRaAluDOBA2Mg6u77P+NN0gaCXqd3+7vRNM2XhAqYc9f48VSijt5a649klqfRw+SH3VMZ39iLn69b/jr7s518+wJf+77resIWHov3HWXd7RIcWslqJLxnyitAZ89+OAlfA1ws3RWGcAzF3kr8BsvNMNkJYGR+HHzT0bIuFbe7mRcZOqzBc0HmfT9Zbqcsk8faHT4+DsKX5YjHZRvme2vDcXzLJ29V9cb8kTX4/k/gG5xhZGebZDyS9SqO5KuqvmhtvBL3r9RmLCIoNtDUeZZRfebtY/khEKKQIpAhy3NeKQn/3Hkmaf+D150v+u7+od3ygZTOI1+TRoAmnD/OvR/YWSPueMQpdk4Sn+Pf/wj4vNsGmMenB0Z+KlyMidGO6us1WfT8DoBPz9QD84BP7wUG5l2IieLO1Zoten/wie0aGI7Mj7ScYD4xn21TaE8W6o/U8YVel5r5mtvpevwkuBdk+F0F+gJFPhxH18P1JR7ffeDPz8rj5wezNtA6l1NMvv7nwSPKncFzC588xeMLicfYgBNAyJAOzfzw/n7Iuf95h2uDaoHU5jkF0GIOmJKL1/Bbkm1aDuGNlmRiaNa2iUC3A/VZVZ+0ZdbkJqZxy3IRd7vpY6mfvyKJvs/4Gh+6/ZeMGuFy5zaxvtGV0S3I3Sxa18SIl3LFXdrX4QsWh9pYXXQvRpd5ottIqf9T6Xv5gYrlolxFYWSY4mZwQW1sonDJkryFOFbxDZOfjNtNTnfn2jjpwLWxqXFfTsTdSv2tUbzCL9FLosXQfFoUaZHiH63SxU5jt7ReVaj9EGvihg4KE9XfOiO3SWjSB9pTt+lTPeTTPek5jyH7EItTJNNg61n2xSdxmhelT3zaNvvf6bf8X6T1UfJ+7EmpAAAAAElFTkSuQmCC",
    alt: "TV"
  }, props));
}