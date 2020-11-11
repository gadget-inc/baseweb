"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagIQ;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagIQ(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURfz8/BEREfT09M8XLdwcNNYaMBkZGSAgICQkJA96QDGMW2ytir/azAM6gfUAAAFRSURBVDjLvY0hb8MwEEZPxgUNCbaMBypZ4wM1r1SHN8ShQengWAerMA+Wbagaq7Qft+9iO6m0LA2o+uyev7t72Wg9zQs9QDBry9dYixbJri2ecKy1G7KFwS2MMUVRICHiCcewUPSYIdo+XQujzBC2zLPmwujQ96wojuMm2P1E6w3pDnRapzhkvV1RGo6y1VH4nxnCg/np6uIcw1/8mevlGENEkBRdhXDk6CEcu54Eb6QUQiipFt/St/TEVcCUUiklYSFIRl1a5dtY4eAjPpKUYBfZx1W8+IxXEAJC+Y8vXoXaCv4H/EuCUh60qbZpeiV8YnVK9TQijHMP4X2at9vCfpqa9q/7w2EYXHec6xt/oaqpqirXJEKsBpqanHONS8CIfZrtyE0zQ8gDyGXAcdfPdpSVJV+Q51melbh8eMqzJeEpwyLjh82wwxSfLCmb5g7CL9d/Zm1yG5PjAAAAAElFTkSuQmCC",
    alt: "IQ"
  }, props));
}