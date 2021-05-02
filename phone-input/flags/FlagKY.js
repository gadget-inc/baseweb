"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagKY;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagKY(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURQEnhvz8/BBWq3+TxwQtk9gcNPX19QAlgQMqjAYwms8ULO/l6fC/xR1FnRFdt2B5uORqeRFctfrQUc7V5t07UBJeueqWoJ+u1EhiorG+3Ne6W6OWalq9bR0AAAJSSURBVEjH5ZPtlqMgDIahAsIixRnaqp37v89NIELo9/zbc/bFSknyJBFRXE6T3IIDDVJrLQf868Ii/Uz/X0rISc/Grz0fvbzoWcYP+Cin08nLhfFhAxtkTe4D3q3Gn/RFprDzgzGzrk/1lncHD/GzN1vml5SLe/NB84V3IclcMPOwbzq34z7mndtgu/SU+Ulr2I6y84p+vVSblRNDVpL+QvxlMmbJxogBOUrhRRNZygTvr8jAKP0bWRWVYqFUWDmWRQn9XGagslQ//Fy/rz+BcJVdb3mKg2v9LlprB+ptfUU06kr8tdmgvmFChiuqqj+9qr3s/+IN7jvy0wVOUnkpDH/O420wcOQ08XB6zOLUjV7wIRk4PXBiS//l0wk3vOzF+Og9nl6TlsxvuJw9JbDlZp/zG3Y8ez/AU+Q9z+2cvF8zV2739S0NUYpvQVniy3aALVLpfDv3Qlv2Cfj2TYq4Jh7sa4KskMBaW+KsPRadj2e4jsc9rxWwb4PDwMqDPSzQwuSpClq+etkiZYVJK5WJeGR8LJ4IryO18tb0oseH+nuTyOCZ2VcuxmCbDH6gjN8lWIwA2SdKvLpMD/lXOqC+YOB1OPyaDwcu1/GC0oguXbPiUB2vbPOIrhPRrIKWxbyw51+4ox/M0XuCr7gPrLMSt6N3ava1JlifxJbwm9HS7FugyGrr3K5HGVsSfAmhQr8XfBhO/MMa6zTyOf8tozoYRPY8WhS3ZqDaRs7QTBJ0o0Tj7hJjs5GfE+PY1ecZxlszSyXass/GdG/pTQ/8v9L/zv8FGP1GAFF/pfwAAAAASUVORK5CYII=",
    alt: "KY"
  }, props));
}