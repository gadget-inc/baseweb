"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagPH;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagPH(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURdIYLgtHu/z8/Pj4+NcZMAxJwNsbMs4WLAlDtAg/q/T09P3URPrklvzca/nw091UZOHW4umkrDFiwKK44mSIz0FOm0AAAAHiSURBVEjHpVOLEqMwCKRijcak1mv//1sPAuRhvbm0LpUAYXk4Fl73S4Dh+ecaf8D3Nf4wvC7yaYdbP+61I3za4Zhw7yvG/LAG3uH2C5gf11V2mLslG7k/7zA3CTXB1Nz49Oj+gpfEDrhV581Mcxo+7TB/CXv/+vj313wsbLQdaiwnrCWHIdERpQxbvMNiskhq8TQmUfoBDioo54D+vcwHyawPgcyu8KL0GlLAzOzwAcp9PKg/K5QdyqwnRXIJ7q8DRGJG1HfBO/QBbOYYMMR6hy/4PDZ9xGtg22sB3qGXH2OgP9FKOj7yBF07yPw+rIIg3dMoHvfpv7D9pUBQj8x07j18/4/+2N2/2d97lCJ+mzr4nkAcX71/EsKzh058FInBh+i9uX6fRhLFmO1k5Pg0pv6MmB40d0tpY04vdnta/wfvzcrL7HyfMVV6bG5KfwNPsE+SNh0qtCWnzMe2xDb2Az66P8/o0MlPs8OJnAZJjvyNQqmbUI50qOLpbPnPTe4gKy0BGk9Ru0hnM7tdNyWKNnOssuTTldkPmV0gHv1zZPZfYP13cI5cJ1Gnyn3ku0++zE50FSdMVcUVgSqNHn3vEilxl10ADdihtsQTf68TDmUsu9Rrb1Lz3wHX6A52uEJ3fwHy/z6jO4UtGAAAAABJRU5ErkJggg==",
    alt: "PH"
  }, props));
}