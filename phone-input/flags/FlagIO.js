"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagIO;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagIO(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABOUExURQIpiYGVx2qCu+jr9AQskdgcNPf3+AElgv///wYwmZWmz0Fepxk8kr/I4SRIoKi119fd7Fdxs/Tt7sTO5emLl++6wN07UPLT1+JebrPA4EMU35MAAAJhSURBVEjHpVSJloMgDAxy6FrrgQf2/390QwIK2tp2N/YtOMwEiJmFaZmrR/uDISqtdSV+KOrKrlUSsh6GWp4RqGY9GTnk+kFWk16rh4zUG2e91UcECuOWxVV1om8flVsw64gC0XUiUEOKHAHcy3py30a9MHbS263eBOB2vV31as2D9HVv5sW/Fgdme0rnEfDjaPyGxusN1k37s+NasSnaYvS3Hs8I0NsDE+jZeL3TenGm9mgQBCrHEQFBMRo3sX7GUXYEEqHvA/P5BEwSXp9E8rHvvO39hIB+HUawgKgKny0FIQRd67nIyCN1GNug9XN1rVdM4idKUKy216v7myHQMELb0ZyzMcL1ryXVnevvzJ0/CjY509O25wwbAn5doAfi959993S00YXttlfUU/vp1YXzY/dO9t6w/r1/VSGxY7F7x5r0nSQ39G1yyPOxNwQ6OrGVhRKkF+wGJ2972VQSBwS8V53pcDthUW/xmwn6l2AL9UGAv20/+OmmV7ces86HBG171HoEVmfrRuV61XR2xpK0CpjZxLZFJtAvICMkLjHGWlukJhm9oLlCILeklJdufeJfOhVAk3vzCXI4SOCAH/BCsAnuEVEHBJ5wIC6EAUu6Qzty5qSUi1Av5lkEJ/4NSVs6LHyDwCcmu/Lv32S7f+lIJT75IT9FIB1ikUq+5I6U8IoDeY6SfvwnGZkQF7eBFjGwJWjklQThlxzhvBGBcm/JmDpBwjYpwvtEBHJLlOXRJG8Q+Mqtr/z79bYbAvFK5emSHyFJhWm9KcuvECj/F17PLZWinyNZS4eFb5D/+vcXAqBR2DiL3tQAAAAASUVORK5CYII=",
    alt: "IO"
  }, props));
}