"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagGI;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagGI(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURf7+/tgQG+jLPt+/Md8UH+MWIecYI/Pz8/r6+tsSHScXGH8WG8MUHeWBh/CAh+7mv+JtLCJVvScAAAHkSURBVEjH3VTZcsMgDBQx4nCa4/+/thI6AF+daWb60IUYIe1qnaYjgH+Pcl0oRQI+JN5s2Oe6xu4tM9TGU+JxTxq5CyxRlDCRpiVttaOzTAWaKb3x/Omtxya970Aqk5vb7WkDueGZBM9yDrioJcNf6LM/n/bOdNzXu+g1mZnRdnZ91ps9EyI2TcK0rismbDFnJ68mgN4vawEbJCB/jzkYvRofcpdrgF/r+sVUNFDBk/72csKolCyZkiuZRNOXnC1JpFz6av6a01qObBUzBQaqebJMK4OqBS2MSMZNR4Ec/OCccTsfPGP23XaPrlY++28Ra6Rdq50GuqjQUcb3t0flr1pFSb8f62i1ZNcZDvwr/6nVk/5/gkQtuScf6cWfEe7WKUz+V/pHUNSA7+W2vDE4Hj/rH539vgneFw3gXB4W1S/hvMHB93fcDBecK/2Lvenz+qWeGvwkz0BjhSYE7XQEkqfGsPqWC8MFdWPnL8uyKXsboYEoDNzdPHjR75/wyNs0YLreYwT54xnSoD/DlV7825DAKEPDl6VcH08WRJ8wdvjMWRqi13CgGuBi2kz6E4z6as866rfZCRXqNKCiTpsx6/d4EEOd2d5ql4iHRaifASoPmr7Gg7cMouoHPfxs+vAZPtV/A4A+PJep5YPXAAAAAElFTkSuQmCC",
    alt: "GI"
  }, props));
}