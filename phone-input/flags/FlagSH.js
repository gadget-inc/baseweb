"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagSH;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagSH(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABvUExURQAkfwYxm9gcNPr7+wMrjgElggUvmAEnhgIpigQtk5vM/vPy8//9Pf/8RoCXzHqPwqdaJVt3ueV1KZ+z1907UMTN4+63vtvm9PTc3x5Dn+7IzOJebjVZquZ6h+yapdJpJeiOmcGpopONbYJRSzg4bEKHO8EAAAJoSURBVEjHzZTbYqMgEEAR8JbZ6hK8a5pb//8bdxgFsSGJu33Zg20GnMMgwbDPqhF1HyGF4JyLwoRRr0U3LvFLmGj4SbRq66tWfPJRqB2+El1VdUZzfl+LocJZ62iHHynoKv4p6sn6JcCJ41Ppfo+fJFMLIx8BavJ1LZrKdMskSmaiJIpMx376oJ/geqkg+bhvnJaT7IJRAY3bxRvyB85pO5KdfkHUorsMs39pBGgaVHt84UHr93g7QZ4w/hxRYMLr9s43SYTJDcUv/dLl5/kaJn7IBDi+Pz+o3DdXkrXLyqIsSw3QXAZAH4ZLB3VJqPw9zPwrAM87n/0GTw/oKN8Jy+VUA56esQPyAU/vCep+t4/vz4inF2pNvjbdEdrJ3JWbZq7cj/GPabPiE74ueUl+2ZvlVB1OgHnEnB6OmXlXB9C9lIsvaTtwTM0pc/btw+dmhyWr+AVak+p8KfGNPvGGwqWQ/Nhi60uG+1YkcuvLHp8KtySXjpBP9aGe5ihTdIhoKZlULf6grLr8tWX1S0y2E5gzY7u5Uv0eP0MhIycjqLr5MLFp8xXw6SazOUtZcp2YufHDFls+Y9kW633ner36vhtnWZCHOY7IX/gPGF+3+FK3/+4P9KvQ7vLTpdneGf2rq69XP6XcNAs3N8v9eDz/Jm76cChsQsrSlSU/RPZldeRw6N0NFk5Pl0Wt3M9rfZW+8UPcz3r58jz9mR8Hxr5mv5j8dbGgHKfzFcd2JhNnU2HszewMxw1e/tpSN+7P7jDDbPG2kBjHjzdiv4KBBe4/Ddy8Kyz+GT/2PexkLN6O2f6zOEC8tP+eP+ZeUCjaytH1AAAAAElFTkSuQmCC",
    alt: "SH"
  }, props));
}