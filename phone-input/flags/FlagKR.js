"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagKR;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagKR(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABjUExURf///9oZPtMXO0pKSv39/fj4+Pv7+/b29vHx8fT09FdWVwtBiQc7gLy+wQ1GlNzd31xcXOzn6M/R046Ojqenp2xsbHh2eZskU9wrTfPFzuNWcUlvoTo9gLwcReqGmnuWush7iVDGKzgAAAK6SURBVEjH1VDbduMgDMRxMBeXAL7HSZP//8uVBNjYpT09fdsBYyRmRgLGGLuyK0z2K3zlHmM8R2DuN3sMYphyaWTbVIOSjB3yR1Fmcz3YlrZfaN9oC6SS21/wk76BgfObMzpmzQGdaMIZ4to00WL/iy7sE4ttESaMGy2db7lcC9OOzjTJHQdrUjWAHB0ci+aErSEFBdwoU2+hfoZB61EY18umBNk7I0anhzyZ6a/WaWfUqLUp6g24K1icLeubXuuJelAhvr/WpVrW1z12D85DM2ndl/Wd1tp6F8rzxq9VwurxnGNtb4HVnfUcJzlTDxzGfal2LHekZAyi4GC0UjyAe0fuENyrI+48dth5ekGgkJAFLcFanm7nl5N+8cjH2kgLWpQyUoYmYJmgB0ys1RkrpqH2FNgJ7BgqY3ih+3gDzo1Rkd1s+j3gXAjavi4BFQ1cqsuLeIIfwXgJa1ISPud5vlzWIpOBoYCyyTjsl8uOz+cN8JwX4py5LMa4R4R9Jp9vEXPiHbhM8MLY638m+e0pkk5kTCZKmI7NEx6x9d0FUda/n3OUtwm3d5F50svB4K9r2yc8uk5aXDo8MIM865USSsCk/1hrCxv+aD9amB9b+fYBHG51PZ70KCQIZS3o6x597I3UMHDCd7NYo69BD7S9JiMlbYda+66u6w5T5mMHmhgsQade18NWlPQRVBsroF6YNncwXxnBY9cLg+4WlkC2j03+sJiQSLDdRjjXV1NdT3ALuEaIuzc+4+PdhRAah86JVNZTbemQFSBlWgAcnJ2nHr7R49UcdNl7JVNKbovyfXDv8yMGP6lokbFDSsQ18cLn89sFCugJwWSoXUcNx7JSZmp6Eh0KbBoWiqfYeJW89n8Ob455tkkpQ88lUy4/i4MeNMuzjCjlrj6b5AitneoXaT9CZfo/43/X/wMWdFJurjOsMQAAAABJRU5ErkJggg==",
    alt: "KR"
  }, props));
}