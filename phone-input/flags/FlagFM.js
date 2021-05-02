"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagFM;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagFM(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURYbA6IC744zF7Xq235HK8ZXN9Pb397TX79Hl8xM3XpcAAAIDSURBVDjLzZHBbtswEERXOrRXEjw0R5Zg0xxNqB/gCnLORiEZ/YGyOSatYV8NN5X72Z1Z2nGcGO61I5Oa2X1cGaAMlzWXfwP9MKOGHka3Gd9YA1I/l9msZ7nvuw625+r64qi5dAcNbHWDYqRLdSqzTlOvcdZ93eM9awCnxwlFq+VpfgWMj+eAlupi163/5Lv1snhubTuVGEMbkSOhVYaWbKAGImJCpA+BVNt+GHP+FiIaUXMbvISgI1pCMS5yZg48oQUAmnQCLIAfJMjrZE5o4wEKYfw9bp8CReC5duHjNlwC2hDal0ANhZr/FRuXD3XkplUvHhaP9zcwwnoNH2qPkve1CCIoqevFF54Rz4GLea0govYoGTdMdB7eFxQTEKn1On9f33tliteydlmTBW9hXmvxdu/1CwfVuIXtGX/Um5zP+idh7vTgF8+8GJFKjJHVdrxXV0nxNJUuVFHfybuNdk1ldtVbeINOxREwXNYSLJ6H6DBZbGVpcNbAoshojdU2dmFpL/avLGexUypGtIXEClq3n60iqJWJYk+1ejjNLwC9hYcLwA0u4e79KyDZ5GyCrMEtbJictU5lxKWkTol0lUenxuGFkwSahv1UuOucq1SERpPSRJK+sTk8zWoz/nRI5YejE0E3FQSEe2w+/dLkXDlmpDnI7TfnSi5DJkfgvP4L4C8RNveVWIztaQAAAABJRU5ErkJggg==",
    alt: "FM"
  }, props));
}