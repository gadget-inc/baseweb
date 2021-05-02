"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customOnRamp = customOnRamp;
exports.Root = exports.Text = exports.ActionIcon = exports.Action = void 0;

var _tint = _interopRequireDefault(require("polished/lib/color/tint.js"));

var _shade = _interopRequireDefault(require("polished/lib/color/shade.js"));

var _index = require("../styles/index.js");

var _constants = require("./constants.js");

var _index2 = require("../tokens/index.js");

var _neutralColorStates, _primaryColorStates, _accentColorStates, _positiveColorStates, _warningColorStates, _negativeColorStates, _orangeColorStates, _purpleColorStates, _brownColorStates, _customColorStates, _colorMap;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function customOnRamp(color, unit) {
  switch (unit) {
    case '0':
      return 'white';

    case '50':
      return (0, _tint.default)(0.8, color);

    case '100':
      return (0, _tint.default)(0.6, color);

    case '200':
      return (0, _tint.default)(0.4, color);

    case '300':
      return (0, _tint.default)(0.2, color);

    case '400':
      return color;

    case '500':
      return (0, _shade.default)(0.2, color);

    case '600':
      return (0, _shade.default)(0.4, color);

    case '700':
      return (0, _shade.default)(0.6, color);

    case '800':
      return (0, _shade.default)(0.8, color);

    case '1000':
      return 'black';

    default:
      return color;
  }
}

var COLOR_STATE = {
  disabled: 'disabled',
  solid: 'solid',
  outline: 'outline'
}; // Probably best to bake this into the theme once we hit our next major.

var pick = function pick(theme, light, dark) {
  return theme.name && theme.name.includes('dark') ? dark : light;
};

var neutralColorStates = (_neutralColorStates = {}, _defineProperty(_neutralColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: theme.colors.tagNeutralFontDisabled,
    backgroundColor: null,
    borderColor: theme.colors.tagNeutralOutlinedDisabled
  };
}), _defineProperty(_neutralColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: theme.colors.tagNeutralSolidFont,
    backgroundColor: theme.colors.tagNeutralSolidBackground,
    borderColor: null
  };
}), _defineProperty(_neutralColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: theme.colors.tagNeutralOutlinedFont,
    backgroundColor: null,
    borderColor: theme.colors.tagNeutralOutlinedBackground
  };
}), _neutralColorStates);
var primaryColorStates = (_primaryColorStates = {}, _defineProperty(_primaryColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: theme.colors.tagPrimaryFontDisabled,
    backgroundColor: null,
    borderColor: theme.colors.tagPrimaryOutlinedDisabled
  };
}), _defineProperty(_primaryColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: theme.colors.tagPrimarySolidFont,
    backgroundColor: theme.colors.tagPrimarySolidBackground,
    borderColor: null
  };
}), _defineProperty(_primaryColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: theme.colors.tagPrimaryOutlinedFont,
    backgroundColor: null,
    borderColor: theme.colors.tagPrimaryOutlinedBackground
  };
}), _primaryColorStates);
var accentColorStates = (_accentColorStates = {}, _defineProperty(_accentColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: theme.colors.tagAccentFontDisabled,
    backgroundColor: null,
    borderColor: theme.colors.tagAccentOutlinedDisabled
  };
}), _defineProperty(_accentColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: theme.colors.tagAccentSolidFont,
    backgroundColor: theme.colors.tagAccentSolidBackground,
    borderColor: null
  };
}), _defineProperty(_accentColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: theme.colors.tagAccentOutlinedFont,
    backgroundColor: null,
    borderColor: theme.colors.tagAccentOutlinedBackground
  };
}), _accentColorStates);
var positiveColorStates = (_positiveColorStates = {}, _defineProperty(_positiveColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: theme.colors.tagPositiveFontDisabled,
    backgroundColor: null,
    borderColor: theme.colors.tagPositiveOutlinedDisabled
  };
}), _defineProperty(_positiveColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: theme.colors.tagPositiveSolidFont,
    backgroundColor: theme.colors.tagPositiveSolidBackground,
    borderColor: null
  };
}), _defineProperty(_positiveColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: theme.colors.tagPositiveOutlinedFont,
    backgroundColor: null,
    borderColor: theme.colors.tagPositiveOutlinedBackground
  };
}), _positiveColorStates);
var warningColorStates = (_warningColorStates = {}, _defineProperty(_warningColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: theme.colors.tagWarningFontDisabled,
    backgroundColor: null,
    borderColor: theme.colors.tagWarningOutlinedDisabled
  };
}), _defineProperty(_warningColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: theme.colors.tagWarningSolidFont,
    backgroundColor: theme.colors.tagWarningSolidBackground,
    borderColor: null
  };
}), _defineProperty(_warningColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: theme.colors.tagWarningOutlinedFont,
    backgroundColor: null,
    borderColor: theme.colors.tagWarningOutlinedBackground
  };
}), _warningColorStates);
var negativeColorStates = (_negativeColorStates = {}, _defineProperty(_negativeColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: theme.colors.tagNegativeFontDisabled,
    backgroundColor: null,
    borderColor: theme.colors.tagNegativeOutlinedDisabled
  };
}), _defineProperty(_negativeColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: theme.colors.tagNegativeSolidFont,
    backgroundColor: theme.colors.tagNegativeSolidBackground,
    borderColor: null
  };
}), _defineProperty(_negativeColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: theme.colors.tagNegativeOutlinedFont,
    backgroundColor: null,
    borderColor: theme.colors.tagNegativeOutlinedBackground
  };
}), _negativeColorStates);
var orangeColorStates = (_orangeColorStates = {}, _defineProperty(_orangeColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: pick(theme, _index2.colors.orange200, _index2.colors.orange600),
    backgroundColor: null,
    borderColor: pick(theme, _index2.colors.orange200, _index2.colors.orange700)
  };
}), _defineProperty(_orangeColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: _index2.colors.white,
    backgroundColor: pick(theme, _index2.colors.orange400, _index2.colors.orange500),
    borderColor: null
  };
}), _defineProperty(_orangeColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: pick(theme, _index2.colors.orange400, _index2.colors.orange300),
    backgroundColor: null,
    borderColor: pick(theme, _index2.colors.orange200, _index2.colors.orange500)
  };
}), _orangeColorStates);
var purpleColorStates = (_purpleColorStates = {}, _defineProperty(_purpleColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: pick(theme, _index2.colors.purple200, _index2.colors.purple600),
    backgroundColor: null,
    borderColor: pick(theme, _index2.colors.purple200, _index2.colors.purple700)
  };
}), _defineProperty(_purpleColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: _index2.colors.white,
    backgroundColor: pick(theme, _index2.colors.purple400, _index2.colors.purple500),
    borderColor: null
  };
}), _defineProperty(_purpleColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: pick(theme, _index2.colors.purple400, _index2.colors.purple300),
    backgroundColor: null,
    borderColor: pick(theme, _index2.colors.purple200, _index2.colors.purple500)
  };
}), _purpleColorStates);
var brownColorStates = (_brownColorStates = {}, _defineProperty(_brownColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: pick(theme, _index2.colors.brown200, _index2.colors.brown600),
    backgroundColor: null,
    borderColor: pick(theme, _index2.colors.brown200, _index2.colors.brown700)
  };
}), _defineProperty(_brownColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: _index2.colors.white,
    backgroundColor: pick(theme, _index2.colors.brown400, _index2.colors.brown500),
    borderColor: null
  };
}), _defineProperty(_brownColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: pick(theme, _index2.colors.brown400, _index2.colors.brown300),
    backgroundColor: null,
    borderColor: pick(theme, _index2.colors.brown200, _index2.colors.brown500)
  };
}), _brownColorStates);
var customColorStates = (_customColorStates = {}, _defineProperty(_customColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: customOnRamp(color, theme.colors.tagFontDisabledRampUnit),
    backgroundColor: null,
    borderColor: customOnRamp(color, theme.colors.tagOutlinedDisabledRampUnit)
  };
}), _defineProperty(_customColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: customOnRamp(color, theme.colors.tagSolidFontRampUnit),
    backgroundColor: customOnRamp(color, theme.colors.tagSolidRampUnit),
    borderColor: null
  };
}), _defineProperty(_customColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: customOnRamp(color, theme.colors.tagOutlinedFontRampUnit),
    backgroundColor: null,
    borderColor: customOnRamp(color, theme.colors.tagOutlinedRampUnit)
  };
}), _customColorStates);
var colorMap = (_colorMap = {}, _defineProperty(_colorMap, _constants.KIND.neutral, neutralColorStates), _defineProperty(_colorMap, _constants.KIND.primary, primaryColorStates), _defineProperty(_colorMap, _constants.KIND.accent, accentColorStates), _defineProperty(_colorMap, _constants.KIND.positive, positiveColorStates), _defineProperty(_colorMap, _constants.KIND.warning, warningColorStates), _defineProperty(_colorMap, _constants.KIND.negative, negativeColorStates), _defineProperty(_colorMap, _constants.KIND.black, primaryColorStates), _defineProperty(_colorMap, _constants.KIND.blue, accentColorStates), _defineProperty(_colorMap, _constants.KIND.green, positiveColorStates), _defineProperty(_colorMap, _constants.KIND.red, negativeColorStates), _defineProperty(_colorMap, _constants.KIND.yellow, warningColorStates), _defineProperty(_colorMap, _constants.KIND.orange, orangeColorStates), _defineProperty(_colorMap, _constants.KIND.purple, purpleColorStates), _defineProperty(_colorMap, _constants.KIND.brown, brownColorStates), _defineProperty(_colorMap, _constants.KIND.custom, customColorStates), _colorMap);

var getColorStateFromProps = function getColorStateFromProps(props) {
  if (props.$disabled) return COLOR_STATE.disabled;
  if (props.$variant === _constants.VARIANT.solid) return COLOR_STATE.solid;
  return COLOR_STATE.outline;
}; // $FlowFixMe https://github.com/facebook/flow/issues/7745


var Action = (0, _index.styled)('span', function (props) {
  var _SIZE$small$SIZE$medi, _ref;

  var $theme = props.$theme,
      $disabled = props.$disabled,
      _props$$size = props.$size,
      $size = _props$$size === void 0 ? _constants.SIZE.small : _props$$size;
  var bottomRadiusDir = $theme.direction === 'rtl' ? 'borderBottomLeftRadius' : 'borderBottomRightRadius';
  var topRadiusDir = $theme.direction === 'rtl' ? 'borderTopLeftRadius' : 'borderTopRightRadius';
  var marginDir = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  return _ref = {
    alignItems: 'center'
  }, _defineProperty(_ref, bottomRadiusDir, $theme.borders.useRoundedCorners ? $theme.borders.radius400 : 0), _defineProperty(_ref, topRadiusDir, $theme.borders.useRoundedCorners ? $theme.borders.radius400 : 0), _defineProperty(_ref, "cursor", $disabled ? 'not-allowed' : 'pointer'), _defineProperty(_ref, "display", 'flex'), _defineProperty(_ref, marginDir, (_SIZE$small$SIZE$medi = {}, _defineProperty(_SIZE$small$SIZE$medi, _constants.SIZE.small, '8px'), _defineProperty(_SIZE$small$SIZE$medi, _constants.SIZE.medium, '12px'), _defineProperty(_SIZE$small$SIZE$medi, _constants.SIZE.large, '16px'), _SIZE$small$SIZE$medi)[$size]), _defineProperty(_ref, "outline", 'none'), _defineProperty(_ref, "transitionProperty", 'all'), _defineProperty(_ref, "transitionDuration", 'background-color'), _defineProperty(_ref, "transitionTimingFunction", $theme.animation.easeOutCurve), _ref;
});
exports.Action = Action;
Action.displayName = "Action";
var ActionIcon = (0, _index.styled)('svg', {}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

exports.ActionIcon = ActionIcon;
ActionIcon.displayName = "ActionIcon";
var Text = (0, _index.styled)('span', function (props) {
  var $theme = props.$theme;
  return {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: props.$theme.sizing.scale3200,
    order: $theme.direction === 'rtl' ? 1 : 0
  };
}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

exports.Text = Text;
Text.displayName = "Text";
var Root = (0, _index.styled)('span', function (props) {
  var _SIZE$small$SIZE$medi2, _SIZE$small$SIZE$medi3, _SIZE$small$SIZE$medi4;

  var $theme = props.$theme,
      _props$$kind = props.$kind,
      $kind = _props$$kind === void 0 ? _constants.KIND.primary : _props$$kind,
      $clickable = props.$clickable,
      $variant = props.$variant,
      $disabled = props.$disabled,
      $closeable = props.$closeable,
      $isFocusVisible = props.$isFocusVisible,
      $color = props.$color,
      _props$$size2 = props.$size,
      $size = _props$$size2 === void 0 ? _constants.SIZE.small : _props$$size2;
  var borderRadius = $theme.borders.tagBorderRadius;
  var paddingMagnitude = (_SIZE$small$SIZE$medi2 = {}, _defineProperty(_SIZE$small$SIZE$medi2, _constants.SIZE.small, $theme.sizing.scale300), _defineProperty(_SIZE$small$SIZE$medi2, _constants.SIZE.medium, $theme.sizing.scale500), _defineProperty(_SIZE$small$SIZE$medi2, _constants.SIZE.large, $theme.sizing.scale600), _SIZE$small$SIZE$medi2)[$size];
  var borderWidth = !$disabled && $variant === _constants.VARIANT.solid ? 0 : '2px';

  var _colorMap$$kind$getCo = colorMap[$kind][getColorStateFromProps(props)]($theme, $color),
      color = _colorMap$$kind$getCo.color,
      backgroundColor = _colorMap$$kind$getCo.backgroundColor,
      borderColor = _colorMap$$kind$getCo.borderColor;

  return _objectSpread(_objectSpread({}, (_SIZE$small$SIZE$medi3 = {}, _defineProperty(_SIZE$small$SIZE$medi3, _constants.SIZE.small, $theme.typography.LabelSmall), _defineProperty(_SIZE$small$SIZE$medi3, _constants.SIZE.medium, $theme.typography.LabelMedium), _defineProperty(_SIZE$small$SIZE$medi3, _constants.SIZE.large, $theme.typography.LabelLarge), _SIZE$small$SIZE$medi3)[$size]), {}, {
    alignItems: 'center',
    color: color,
    backgroundColor: backgroundColor,
    borderLeftColor: borderColor,
    borderRightColor: borderColor,
    borderTopColor: borderColor,
    borderBottomColor: borderColor,
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftWidth: borderWidth,
    borderRightWidth: borderWidth,
    borderTopWidth: borderWidth,
    borderBottomWidth: borderWidth,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    boxSizing: 'border-box',
    cursor: $disabled ? 'not-allowed' : $clickable ? 'pointer' : 'default',
    display: 'inline-flex',
    height: (_SIZE$small$SIZE$medi4 = {}, _defineProperty(_SIZE$small$SIZE$medi4, _constants.SIZE.small, '24px'), _defineProperty(_SIZE$small$SIZE$medi4, _constants.SIZE.medium, '32px'), _defineProperty(_SIZE$small$SIZE$medi4, _constants.SIZE.large, '40px'), _SIZE$small$SIZE$medi4)[$size],
    justifyContent: 'space-between',
    marginTop: '5px',
    marginBottom: '5px',
    marginLeft: '5px',
    marginRight: '5px',
    paddingTop: $theme.sizing.scale0,
    paddingBottom: $theme.sizing.scale0,
    paddingLeft: paddingMagnitude,
    paddingRight: paddingMagnitude,
    outline: 'none',
    ':hover': $disabled || !$clickable ? {} : {
      boxShadow: "inset 0px 0px 100px ".concat(pick($theme, "rgba(0, 0, 0, 0.08)", "rgba(255, 255, 255, 0.2)"))
    },
    ':focus': $disabled || !$clickable && !$closeable ? {} : {
      boxShadow: $isFocusVisible ? "0 0 0 3px ".concat($kind === _constants.KIND.accent ? $theme.colors.primaryA : $theme.colors.accent) : 'none'
    }
  });
});
exports.Root = Root;
Root.displayName = "Root";