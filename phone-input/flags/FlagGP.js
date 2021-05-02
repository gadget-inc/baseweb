"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagGP;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagGP(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABmUExURfT09Pj4+Pb29vX19fv7+/Hx8f7+/vz9/fPz8/////n5+R2HSCpXjv/fO//gRSOSUNrk6bS7sTC38rDB1ZycnIuLi22Msv7odM3V03Nzc0dunYykwvz32v3xs4vHqFiqeku94njL5JO66MoAAAJnSURBVEjH5ZTrkqMgEIVbBAU0iosaTTKTmfd/ye0GUSTmUrU/90CF7uZ8jYPWgFKqUAVO9ZFSLyQ57ZOo9kkMxbFiX5yn9Wc8qSxKnI9xLMA6ifZSf6j7HA8ut3rYg3LvTfd9jqyxV3Pgg/Kt8GRzvdR1bYvHzfd8oSzB9cWq1zx3I8Sr1JXoq3H03oMD+JqsOy7++eOlJ6RHot3+4ltj2GpuJWFw+/r2DYzGhx8LUybnBC/wA+lz0zSnDvEfevoLmJY/0SFPuG9gJN07v+94zTXOhddbTivp1nj+9PtLx4/qu22pzg+84Ot6qbvxdSKdvzR+NYiXU4u8h7hOBoRGkYg/35SwI97dVRHe6ieCg9oN8cKM9Nprq7r2Bc+PeH1G3H9zpsS/va1enJ/5NdOZk6Y8Z4Lo0XJxr6rqiA/+mCfW1bka6WyVda2jsUfoHZ9DMWSP0iVee22yu0edApcKWJaxjOH0OcWa3rot71Ukxrwn9QL5mc7wx4niUrqPptrx2sHEOC54gYVs2+G2roXZ4e3iCObVC8sDrV1QeHu2iHLya+/YOixdgD1KWat452TYGx3xvFCazX3fz/P0ns9zljOc2+o098MwD1Ook+J45fNNuz5mEgYH/aR8vELcAAVUodowDN3cd0M/D/kTkZd4vy5c0Dwg2vcDXkPw5HDEb8rjXl030QuYcMS+2PNauZQSgKaMqpLSuJDktO/k/4cGnVN2jWXERILTXlI+8s4njwXNDm/kM58UTlJInH4NivP4HBExIHCCcLUlXnuFPNWeCZLb6s9d83SIiEnbS/GR1kYg/k3/O/8X0rJJvp9+En8AAAAASUVORK5CYII=",
    alt: "GP"
  }, props));
}