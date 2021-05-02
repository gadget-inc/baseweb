"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagDO;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagDO(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURfj4+Ac6dQU1bNcaMd0cNAMxZNMYL/39/fPz888XLc0WLO/T0kOFRZuykRJuHHSJgzWtGzEAAAHMSURBVDjLxZMxS8NAGIa/LRlUTBbXJhC6FlKKoxAHxxLI5FIIBLPdljVjBgWn4jk5Wv9CcRfU6u5v6OhUEN/vLolJDAEn3+t3V+57cpchD1nNHGXIaTMn9C9AMEX8cu4DpkHA7UDVhGzLsS3LwcA/BficwNeZkOvaDsp1MNxxDfg1gG23Ipw+wG1mnBlGlszqxEkXMDKRJSoxRjKLFxoI6xNEZiTNLMjzvDD0yoyEQVnVSzUQoQ8gCnnMDcMQS45MpVwu0/SaIh1NzIUgkhwQKa81oDMnEkI20wXwDkLe3q50ek8gemjmjv6Yj/X6fai/v10/boeAy+fP3csQcLCLzr96O7le9vQJJnHlpto2OSAQs3yHvCKo/HFb7xSbt80Tnil5Lv1sxdDV5jXv3N62ANflre/8sA2cFThuEDDNwhwGCrPoAMoftgieBbji1wks2lSL5gfHeVF0T4Ac01qTY/QLm2M5DktpK8BvA3CRVcMEKUd9ANvIwvJySHEyg0ZlNFDFRo2ILYuVajDxogW4FfCTHyD8DSwrwGPZXPgWsYzUEE2mNwyEoWoCwzTXoqUQDSUVUMvIPpbAStWqBVQqKdEkZqbue4CWaD3AN/oTbTgdsoaSAAAAAElFTkSuQmCC",
    alt: "DO"
  }, props));
}