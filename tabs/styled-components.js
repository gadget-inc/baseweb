"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabContent = exports.TabBar = exports.Tab = exports.Root = void 0;

var _index = require("../styles/index.js");

var _constants = require("./constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// $FlowFixMe https://github.com/facebook/flow/issues/7745
var Root = (0, _index.styled)('div', function (props) {
  var $orientation = props.$orientation;
  return {
    display: 'flex',
    flexDirection: $orientation === _constants.ORIENTATION.vertical ? 'row' : 'column'
  };
}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

exports.Root = Root;
Root.displayName = "Root";
var Tab = (0, _index.styled)('div', function (props) {
  var $disabled = props.$disabled,
      $active = props.$active,
      $orientation = props.$orientation,
      $isFocusVisible = props.$isFocusVisible,
      _props$$theme = props.$theme,
      colors = _props$$theme.colors,
      sizing = _props$$theme.sizing,
      typography = _props$$theme.typography;

  var style = _objectSpread(_objectSpread({}, typography.font200), {}, {
    boxSizing: 'border-box',
    color: $active ? colors.contentPrimary : colors.tabColor,
    cursor: $disabled ? 'not-allowed' : 'pointer',
    paddingTop: sizing.scale600,
    paddingBottom: sizing.scale600,
    paddingLeft: sizing.scale300,
    paddingRight: sizing.scale300,
    marginLeft: sizing.scale200,
    marginRight: sizing.scale200,
    outline: $isFocusVisible ? "3px solid ".concat(colors.accent) : 'none',
    outlineOffset: '-3px',
    borderBottom: $orientation === _constants.ORIENTATION.horizontal && $active && !$isFocusVisible ? "2px solid ".concat(colors.primary) : '2px solid transparent',
    display: 'inline-block'
  });

  if (!$disabled && !$active) {
    style = _objectSpread(_objectSpread({}, style), {}, {
      ':focus': {
        color: colors.primary
      },
      ':hover': {
        color: colors.primary
      }
    });
  }

  return style;
}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

exports.Tab = Tab;
Tab.displayName = "Tab";
var TabBar = (0, _index.styled)('div', function (props) {
  var $orientation = props.$orientation,
      _props$$theme2 = props.$theme,
      colors = _props$$theme2.colors,
      sizing = _props$$theme2.sizing;
  return {
    display: 'flex',
    flexDirection: $orientation === _constants.ORIENTATION.vertical ? 'column' : 'row',
    paddingLeft: sizing.scale400,
    paddingRight: sizing.scale400,
    backgroundColor: colors.tabBarFill
  };
}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

exports.TabBar = TabBar;
TabBar.displayName = "TabBar";
var TabContent = (0, _index.styled)('div', function (props) {
  var $active = props.$active,
      _props$$theme3 = props.$theme,
      sizing = _props$$theme3.sizing,
      typography = _props$$theme3.typography;
  return _objectSpread(_objectSpread({}, typography.font300), {}, {
    display: $active ? 'block' : 'none',
    paddingLeft: sizing.scale800,
    paddingRight: sizing.scale800,
    paddingTop: sizing.scale500,
    paddingBottom: sizing.scale500
  });
});
exports.TabContent = TabContent;
TabContent.displayName = "TabContent";