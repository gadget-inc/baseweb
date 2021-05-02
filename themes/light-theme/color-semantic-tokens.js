"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colorTokens = _interopRequireDefault(require("./color-tokens.js"));

var _util = require("../../styles/util.js");

var _colors = _interopRequireDefault(require("../../tokens/colors.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default() {
  var foundation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _colorTokens.default;
  var core = {
    // Background
    backgroundPrimary: foundation.primaryB,
    backgroundSecondary: _colors.default.gray50,
    backgroundTertiary: _colors.default.gray100,
    backgroundInversePrimary: foundation.primaryA,
    backgroundInverseSecondary: _colors.default.gray800,
    // Content
    contentPrimary: foundation.primaryA,
    contentSecondary: _colors.default.gray600,
    contentTertiary: _colors.default.gray500,
    contentInversePrimary: foundation.primaryB,
    contentInverseSecondary: _colors.default.gray300,
    contentInverseTertiary: _colors.default.gray400,
    // Border
    borderOpaque: _colors.default.gray200,
    borderTransparent: (0, _util.hexToRgb)(foundation.primaryA, '0.08'),
    borderSelected: foundation.primaryA,
    borderInverseOpaque: _colors.default.gray700,
    borderInverseTransparent: (0, _util.hexToRgb)(foundation.primaryB, '0.2'),
    borderInverseSelected: foundation.primaryB
  };
  var coreExtensions = {
    // Backgrounds
    backgroundStateDisabled: _colors.default.gray50,
    backgroundOverlayDark: (0, _util.hexToRgb)(_colors.default.black, '0.3'),
    backgroundOverlayLight: (0, _util.hexToRgb)(_colors.default.black, '0.08'),
    backgroundAccent: foundation.accent,
    backgroundNegative: foundation.negative,
    backgroundWarning: foundation.warning,
    backgroundPositive: foundation.positive,
    backgroundLightAccent: _colors.default.blue50,
    backgroundLightNegative: _colors.default.red50,
    backgroundLightWarning: _colors.default.yellow50,
    backgroundLightPositive: _colors.default.green50,
    backgroundAlwaysDark: _colors.default.black,
    backgroundAlwaysLight: _colors.default.white,
    // Content
    contentStateDisabled: _colors.default.gray400,
    contentAccent: foundation.accent,
    contentOnColor: _colors.default.white,
    contentOnColorInverse: _colors.default.black,
    contentNegative: foundation.negative,
    contentWarning: _colors.default.yellow500,
    contentPositive: foundation.positive,
    // Border
    borderStateDisabled: _colors.default.gray50,
    borderAccent: _colors.default.blue400,
    borderAccentLight: _colors.default.blue200,
    borderNegative: _colors.default.red200,
    borderWarning: _colors.default.yellow200,
    borderPositive: _colors.default.green200
  };
  return _objectSpread(_objectSpread({}, core), coreExtensions);
};

exports.default = _default;