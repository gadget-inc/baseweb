"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagTZ;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagTZ(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABgUExURRcXFx+n3v7WRy/ARxyl3THISv3TPyAgHxsbGxISEiSq4DDESSGo3yes4jLLTCy7RDnMTvDNQ9jPUDo0IJqCMMKjN925PnZlKlhMJnLHRlu1uafDf6TMR367nCys2jytzMWhDFEAAAJcSURBVEjHnZKJdqMwDEXFEpsQSCGQbZK2//+X1WIJm2XKzLOPLUBXUl8KXdeduzPuboeefU4aB6+C82513YXp28P7Vf5wPuBOoemxezPd330sOAhD7Jr02/kpza+DX/CWOh1hFlNonow+57d1Vt+838WfwpZ1WPPN+JMAuDg3jsOx6tvEW26sg73b8C3m/6JN3/bx275NfFGcihPu9EYV6puMXuGinWgAJkinmKcKiW+VFYjXvQcli5ki3zBTAY35Hq55DsWqzLeK5SupUGkpOkaXb/Himxt1UKlQRVH1uHEH4z+i5jq65irrA+2rYeSUyx9AUJYF79yxbxEd1yHd5Xd9fbXwMRP65pbNE5Fvjpq3LfJFvEJz9A22aPEt7z/blvmkeU84+bYp9M3lzr2+2wVPvuE3HL3C9gDLGWAYncMUHn3Ovx0JfVM2riHxvXc0IPq24J8Xxq8DBGy6SRQPV8rIp+YR/+a5bg9LZrCSJ15+ZDr4lvLPnpuPHhSAiRY9btwBfavnfBGPbhMnkubkm9B2wuTbKii6y3yvr5oYPPRuQX3zmzCIb9i8Xgr4U/BtVZWM3n/W1HWVH7cnF9/o/w2TmxncME++wZF3uKdlvind1E3DkZw1oG9KH63K0rcmZqMY/PFoOFhzfqe+fTeTiCFWFRhTmAO3+UZQkzUZ7mYhUEobh+ej+bZkqBaJ6nGrWPLCfNPcWDoHfYOUCzLfst8EgY1lvmVluYtP/wD1Lct+pcslb77RV+xfyk3SOCulMsUz3nwrZ1qrQ0p5863cK1jzrSz/h1ffyn/RDxS7VzVmK2o+AAAAAElFTkSuQmCC",
    alt: "TZ"
  }, props));
}