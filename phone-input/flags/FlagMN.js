"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagMN;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagMN(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURdoyPeE1QAxXndIvOg9fqhJntswtN8grNsQqNPnPN+eMOtlWOSBjiNoAAAHPSURBVDjL3Y8xjpxAEEULMeRMsBdAHACpV0jeEMENIF9Nr5p05IDucLUJ5CONxWzuC/iC/lVA06wsO/cHaqr+f10MdPZ66rx2M6X/A4ii6HyOcKUh4M2UUgxRCkXJDuwmEW4W5mADeTMlwhIWhRt2U3KhU0rarumaBrUhb3qhTRC2HfK2281QSbuKN2z/LdQJu5umZoT+qKSuW+TMHPyYCtQiplMreQ2CzUJMlIIHlPhUI2eiriVfEooXoT1x1NaMyVzIubUpVBw/cyZIHW+SRWptAWxicz1JaJVSXANAIYcHsyAJf4GJww1KySlwxAteHjwcNiyIkg0CqB3IGVAH4NssQL4IyFdg21DJBSQEtNbz4zHftH7LvUqvglDmz8/5VpZ4RVVhAYpkSuN+JQ3g9nO+a3OpKhzOkFcwNT8GgDGGX3EvNYCFyHMj0qYsAZRmhu7GXDKEiFEkE2jfAKDyhPE6AEueQV8BfAUDeSbCCmP6fgN6088/8BWDvWRe/TAMfT/Y3r6Shbizw/cdwDzAxH0F0NtFIcAmcmuvZL0OwKa/AeMCOGlGKAAwOescft5pdG6aRkAuBBbTOXelaZp4gj52YDPH6Z0mryOw6t/Ab0LfT9HsJvktAAAAAElFTkSuQmCC",
    alt: "MN"
  }, props));
}