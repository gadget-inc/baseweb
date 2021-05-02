"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagSC;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagSC(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURf/dZPj4+P7bXgOFRN0sLAdVsPz8/OkyMuYwMOIuLuw0NAZRqAF9P/T19QVMnwKAQQaNSgNGlM9PPeTTXN3r4MnGW8TcyMJwT7uYgS+eY7y9pVmzgH3DmZ/Ss8GuUH2ka7yMRDt8hx5iklyOcqnCZpy2Y+zj/gsAAAJdSURBVEjHndMPe4IgEAZwNBPIyvyDWm1ZuX3/rzjuOBCVltsLGfb4u8Mytg3kwQK57UJhIa8CXO1W+8d6HvRfAc7X++d7zvmOv/TfC14JDgHDPQtrtqJ9VY4O3m3gnG2zbOuPbb/kfBJTiU6YZ2FmWbzkO/4yLBsDFRbt45b/Fmb7bqlI9Sc+6Q9VBhbjGLkQXH/9wgzBhb9ceNfeVInvQghf2Fr2s7kftIxxQgl2d9f78T/T/ggTho4iiIf45stZEQojaoo87L5xEzfxLl3NTG8zMxWzcWgu8SoJUzok7eddnaYMqdnE8UG9MWqE0jA7zAQN3jTHfCE0v59y10sRGEZjfxNd4xmP/ZWBlstxBSeXQ5rOvM437VyXqBJpI6QH4VCOeuKfsUtVuo7zlJcoTYO+n/FQ2qlGXwDWh+otbxs0EcwIj9oXVGFsb3mih0w8HZmAhQO8WHGk4dq3GiUWu9E1EfV1gTXD9kVxHEaeeL1pdnVENHUDT/T+i0n7e0KRNPUBtG04ba/7Q/eiGBy3G4aJL6uDYYXZgJp1t1sof9XYH/Iw/DbFiX7U7IUHPaLDxNaf1zN5teCkD4Y6TetDo+1Jh3ntb3NNMRbeTZqP68nGePznKF+3DbaJLKICdfNxPvlB/5xzrSfBIvXnzDoP7avXGu11aa1/4n/G6m6u8XY3OGAufe/xrg5awrBya1hswFeO+xpud2NzerGC/j3xctRwu5tVYdC+xZ+bdEM2dwfvPeAH4KThdvM83+erwwp1x0cNnozN3yz64d5e4KtCuKfkONeE9f31vP9/fgD6mWA0qzl89AAAAABJRU5ErkJggg==",
    alt: "SC"
  }, props));
}