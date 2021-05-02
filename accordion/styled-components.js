"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentAnimationContainer = exports.Content = exports.ToggleIconGroup = exports.ToggleIcon = exports.Header = exports.PanelContainer = exports.Root = void 0;

var _index = require("../styles/index.js");

var _styledComponents = require("../icon/styled-components.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Main component container element
 */
var Root = (0, _index.styled)('ul', {
  listStyleType: 'none',
  marginBottom: 0,
  marginTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  width: '100%'
});
exports.Root = Root;
Root.displayName = "Root";
var PanelContainer = (0, _index.styled)('li', function (props) {
  var $expanded = props.$expanded,
      colors = props.$theme.colors;
  return {
    listStyleType: 'none',
    width: '100%',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: $expanded ? colors.mono500 : colors.mono400
  };
});
exports.PanelContainer = PanelContainer;
PanelContainer.displayName = "PanelContainer";
var Header = (0, _index.styled)('div', function (props) {
  var $disabled = props.$disabled,
      $isFocusVisible = props.$isFocusVisible,
      _props$$theme = props.$theme,
      colors = _props$$theme.colors,
      sizing = _props$$theme.sizing,
      typography = _props$$theme.typography;
  return _objectSpread(_objectSpread({}, typography.font350), {}, {
    color: colors.contentPrimary,
    cursor: $disabled ? 'not-allowed' : 'pointer',
    backgroundColor: colors.listHeaderFill,
    paddingTop: sizing.scale600,
    paddingBottom: sizing.scale600,
    paddingLeft: sizing.scale700,
    paddingRight: sizing.scale700,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    display: 'flex',
    alignItems: 'center',
    outline: $isFocusVisible ? "3px solid ".concat(colors.accent) : 'none',
    outlineOffset: '-3px',
    justifyContent: 'space-between',
    ':hover': {
      color: colors.primary
    }
  });
});
exports.Header = Header;
Header.displayName = "Header";
var ToggleIcon = (0, _index.styled)('svg', function (props) {
  var $theme = props.$theme,
      $disabled = props.$disabled,
      $color = props.$color;
  return _objectSpread(_objectSpread({}, (0, _styledComponents.getSvgStyles)(props)), {}, {
    flexShrink: 0,
    color: $color || $theme.colors.contentPrimary,
    cursor: $disabled ? 'not-allowed' : 'pointer'
  });
});
exports.ToggleIcon = ToggleIcon;
ToggleIcon.displayName = "ToggleIcon";
var ToggleIconGroup = (0, _index.styled)('g', function (props) {
  var $theme = props.$theme,
      $expanded = props.$expanded;
  return {
    transform: $expanded ? 'rotate(0)' : 'rotate(-90deg)',
    transformOrigin: 'center',
    transitionProperty: 'transform',
    transitionDuration: $theme.animation.timing500,
    transitionTimingFunction: $theme.animation.easeOutQuinticCurve
  };
});
exports.ToggleIconGroup = ToggleIconGroup;
ToggleIconGroup.displayName = "ToggleIconGroup";
var Content = (0, _index.styled)('div', function (props) {
  var _props$$theme2 = props.$theme,
      animation = _props$$theme2.animation,
      colors = _props$$theme2.colors,
      sizing = _props$$theme2.sizing,
      typography = _props$$theme2.typography,
      $expanded = props.$expanded;
  return _objectSpread(_objectSpread({}, typography.font200), {}, {
    backgroundColor: colors.listBodyFill,
    color: colors.contentPrimary,
    paddingTop: sizing.scale800,
    paddingBottom: sizing.scale1000,
    paddingLeft: sizing.scale800,
    paddingRight: sizing.scale800,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    boxSizing: 'border-box',
    overflow: 'hidden',
    opacity: $expanded ? 1 : 0,
    visibility: $expanded ? 'visible' : 'hidden',
    transitionProperty: 'opacity,visibility',
    transitionDuration: animation.timing500,
    transitionDelay: animation.timing200,
    transitionTimingFunction: animation.easeOutQuinticCurve
  });
});
exports.Content = Content;
Content.displayName = "Content";
var ContentAnimationContainer = (0, _index.styled)('div', function (props) {
  var $height = props.$height,
      animation = props.$theme.animation;
  return {
    height: "".concat($height),
    overflow: 'hidden',
    transitionProperty: 'height',
    transitionDuration: animation.timing500,
    transitionTimingFunction: animation.easeOutQuinticCurve
  };
});
exports.ContentAnimationContainer = ContentAnimationContainer;
ContentAnimationContainer.displayName = "ContentAnimationContainer";