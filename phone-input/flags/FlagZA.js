"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagZA;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagZA(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACTUExURQKOWwOSXgOVYfFKQu1GPuI8NAUln+hBOf///wcrsAYoqR0dHAQkmgCAUhYWFgUnpAajavRNRAWcZQKIVwQjl/u2Gv68Jtnr6fT19tiuJ6qtNSObaXikQUWcTZNuHTcuG5PQuvvT0bTezy2sfk6yjm6/onmLzh6PVceTHmdQHu5nYEs7GfeqpvSMh0FcviZDs7W/5cBUmdsAAAI+SURBVEjHpZYNn5owDIcjKC9WAeFAUTlPt+H5sju//6dbkhbIbegV908LbcoTaAL+hIT1KwiC34snBJpPfq6C4LpwuwV34bLI92Dc8MmPZRDszdoAtbwOcHbdsTEhnLYeOf7CJ8khCFZnWv1XrhzKCySfvFEWx4MEaxmAynBlv2/6+OvZ72baA0W5EQGoDHvXR+lLfT2Uc+0zC8gXRZWkreks+vKafhk/vGKAbWpkAqzOvq1AnfKiWPPNqeHhQFn0J3dNN2Og1O69wCSknagMV39C8kWfNB6/meMRebWjPVQiAJVh3yGPRLxSJ5kElC6DPa8uJSZhkzpsKJ1Fe14nAfeAPCpNNxjARg2vFBeSWA6RpoeBvLpQIZ1ObwN5vYejM0iS5z3k1X/w/DJunZGDbdTq77kURIaMVNQWsv/S3hDAYMQ0n3f5/QD9PMnEQNzcH3rMECM9NF7DcowoOuV5voUhioQw/3leAUalNpjfved5eQR48v4XfPY1ejJqeLB7/1r8lbeeGYOR5fvf4PTsVcYC7Nbfn9l6ic9+bOAM+Pv/CL+X5rlsWSf6/Vl+hrY8bb0SOP3+3cLQkldcNoFT4uvQlueyETafU8uAEl9Pw6mVgMvGIEbAtuHMTW0FtPU535pF+PITF2JejtvDXb48GpRiUOJv09hesJ4LUeLreIhA4pj4Ve3FaB51c+J+T4LP6P/PhzdMHX/kzHkzNo+6OXEnr164w1Pib/HskbweX8NT4uvZy2yoQCT+5Qn9AUnKcksZpMd/AAAAAElFTkSuQmCC",
    alt: "ZA"
  }, props));
}