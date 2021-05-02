"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagTM;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagTM(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURSq0a885R/qpK+ny7S27cC6/cto/TSiwaDDCdCu3bfv7+4zYr0KdYm7QnMro2OBdWkfDgbVQT2GJXvrk5nCAXO1+OTekZZ5hU/bGqVrHjeF5g/asbfGkEGUAAAIzSURBVEjH1ZaJbtswDIZlW4cp387VtO//nqMkkpKPtUuAAduvNKJJfiQtpIBUy7Ks9hWpf4efbvXH5WN6lTemNcGa6rr+unj/WYbNGWOEQd7wM+L1bfL+EmOcE3ZW6Q9lgq3Ej63xDVCmUNd0IWx+Uy/xSZ/Y+gvxqUhpG99EYzZbTJR5O+Hp4RvYff/Id2ar9sizdpmpxDiYU33PD0ilVxiazdhGC6/pIfM6LnQP3g/Uf0aL3GnT0j884J9dVjy9dbF57MjrmD77MdXk6vRRyYmfh3P1rXbuoaPC2BrnjzGtZ99otnkPUmL3zuHwzvUpgP11oWfBk0ziWTteayhLdMiXHCvzu/nDKzTC6NGP+kyZl/M76R9OsvuJt7bCZSvxAABZM57m8we+Ipz6Q/oKK+IjuQ48UJKtqAKkzFkadngQTauTHyIAVBqUuKpl7V2/LhVQ2jAOz3l+dmPT+HEGgIzziIA8xAjAw92v1+vdPYD1HENjj6troWhfSCsgl+7X+Otfex4ONWDzcezmDaWLVfQv+DPpc7cS6zj/nyjz+fze5FnHDPU9r0Dh58grisQleXmPPpHw2UWkKrLIW/rIWq793d3765JdqQDl5FG2HAv//6N69Z7K/u/o7P3/Ju/ikoeCp4hTm/1gM0oPlU33hyqXdtyHgWS7xBRFw7nL/UF8OZZU+qkah3GT+4PbiRudKUxDIbk/cEHlJCaVckyV8fAt9wf3inL9Kt0fbPUuz/qv+F8mwUIukF2UAAAAAABJRU5ErkJggg==",
    alt: "TM"
  }, props));
}