var _DETERMINATE_SPINNER_;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { styled, withWrapper } from '../styles/index.js';
import { getSvgStyles } from '../icon/styled-components.js';
import { SIZE } from './constants.js';
var spin = {
  from: {
    transform: 'rotate(0deg)'
  },
  to: {
    transform: 'rotate(360deg)'
  }
};
/**
 * Spinner icon overrides
 */

export var Svg = styled('svg', function (props) {
  var $theme = props.$theme,
      $color = props.$color;
  return _objectSpread(_objectSpread({}, getSvgStyles(props)), {}, {
    fill: $color || $theme.colors.accent,
    cursor: 'wait',
    animationName: spin,
    animationDuration: $theme.animation.timing1000,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  });
});
Svg.displayName = "Svg";
export var StyledTrackPath = styled('path', function (props) {
  return {
    fill: props.$theme.colors.spinnerTrackFill,
    opacity: 0.16
  };
});
StyledTrackPath.displayName = "StyledTrackPath";
export var StyledActivePath = styled('path', function (props) {
  return {
    fill: props.$color || props.$theme.colors.accent
  };
}); // TODO(v11): Replace Spinner with SpinnerNext

StyledActivePath.displayName = "StyledActivePath";
export var StyledSpinnerNext = styled('div', function (_ref) {
  var $theme = _ref.$theme,
      _ref$$size = _ref.$size,
      $size = _ref$$size === void 0 ? SIZE.medium : _ref$$size;
  var borderWidth = {
    large: $theme.sizing.scale300,
    medium: $theme.sizing.scale100,
    small: $theme.sizing.scale0
  }[$size];
  return {
    display: 'block',
    animationName: spin,
    animationDuration: $theme.animation.timing1000,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    borderRadius: '50%',
    borderTopColor: $theme.colors.contentAccent,
    borderRightColor: $theme.colors.backgroundTertiary,
    borderBottomColor: $theme.colors.backgroundTertiary,
    borderLeftColor: $theme.colors.backgroundTertiary,
    borderLeftWidth: borderWidth,
    borderRightWidth: borderWidth,
    borderTopWidth: borderWidth,
    borderBottomWidth: borderWidth,
    width: {
      large: $theme.sizing.scale1000,
      medium: $theme.sizing.scale900,
      small: $theme.sizing.scale800
    }[$size],
    height: {
      large: $theme.sizing.scale1000,
      medium: $theme.sizing.scale900,
      small: $theme.sizing.scale800
    }[$size],
    cursor: 'wait'
  };
});
StyledSpinnerNext.displayName = "StyledSpinnerNext";
var DETERMINATE_SPINNER_SIZES = (_DETERMINATE_SPINNER_ = {}, _defineProperty(_DETERMINATE_SPINNER_, SIZE.large, {
  d: 'M47.5 4H71.5529C82.2933 4 91 12.9543 91 24C91 35.0457 82.2933 44 71.5529 44H23.4471C12.7067 44 4 35.0457 4 24C4 12.9543 12.7067 4 23.4471 4H47.5195',
  width: 95,
  height: 48,
  strokeWidth: 8,
  typography: 'LabelLarge'
}), _defineProperty(_DETERMINATE_SPINNER_, SIZE.medium, {
  d: 'M39 2H60.5833C69.0977 2 76 9.16344 76 18C76 26.8366 69.0977 34 60.5833 34H17.4167C8.90228 34 2 26.8366 2 18C2 9.16344 8.90228 2 17.4167 2H39.0195',
  width: 78,
  height: 36,
  strokeWidth: 4,
  typography: 'LabelMedium'
}), _defineProperty(_DETERMINATE_SPINNER_, SIZE.small, {
  d: 'M32 1H51.6271C57.9082 1 63 6.37258 63 13C63 19.6274 57.9082 25 51.6271 25H12.3729C6.09181 25 1 19.6274 1 13C1 6.37258 6.09181 1 12.3729 1H32.0195',
  width: 64,
  height: 26,
  strokeWidth: 2,
  typography: 'LabelSmall'
}), _DETERMINATE_SPINNER_);
export var StyledSpinnerDeterminateRoot = styled('div', function (_ref2) {
  var $size = _ref2.$size,
      $inline = _ref2.$inline;
  return {
    width: DETERMINATE_SPINNER_SIZES[$size].width + 'px',
    height: DETERMINATE_SPINNER_SIZES[$size].height + 'px',
    position: 'relative',
    display: $inline ? 'inline-flex' : 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
});
StyledSpinnerDeterminateRoot.displayName = "StyledSpinnerDeterminateRoot";

var _StyledSpinnerDeterminateSvg = styled('svg', function (_ref3) {
  var $size = _ref3.$size;
  return {
    width: DETERMINATE_SPINNER_SIZES[$size].width + 'px',
    height: DETERMINATE_SPINNER_SIZES[$size].height + 'px',
    position: 'absolute',
    fill: 'none'
  };
});

_StyledSpinnerDeterminateSvg.displayName = "_StyledSpinnerDeterminateSvg";
export var StyledSpinnerDeterminateSvg = withWrapper(_StyledSpinnerDeterminateSvg, function (Styled) {
  return function StyledSpinnerDeterminateSvg(props) {
    return /*#__PURE__*/React.createElement(Styled, _extends({
      viewBox: "0 0 ".concat(DETERMINATE_SPINNER_SIZES[props.$size].width, " ").concat(DETERMINATE_SPINNER_SIZES[props.$size].height),
      xmlns: "http://www.w3.org/2000/svg"
    }, props));
  };
});

var _StyledSpinnerDeterminateTrackBackground = styled('path', function (_ref4) {
  var $theme = _ref4.$theme,
      $size = _ref4.$size;
  return {
    stroke: $theme.colors.backgroundTertiary,
    strokeWidth: DETERMINATE_SPINNER_SIZES[$size].strokeWidth + 'px'
  };
});

_StyledSpinnerDeterminateTrackBackground.displayName = "_StyledSpinnerDeterminateTrackBackground";
export var StyledSpinnerDeterminateTrackBackground = withWrapper(_StyledSpinnerDeterminateTrackBackground, function (Styled) {
  return function StyledSpinnerDeterminateSvg(props) {
    return /*#__PURE__*/React.createElement(Styled, _extends({
      d: DETERMINATE_SPINNER_SIZES[props.$size].d
    }, props));
  };
});

var _StyledSpinnerDeterminateTrackForeground = styled('path', function (_ref5) {
  var $theme = _ref5.$theme,
      $size = _ref5.$size,
      $visible = _ref5.$visible,
      $pathLength = _ref5.$pathLength,
      $pathProgress = _ref5.$pathProgress;
  return {
    visibility: $visible ? 'visible' : 'hidden',
    stroke: $theme.colors.borderAccent,
    strokeWidth: DETERMINATE_SPINNER_SIZES[$size].strokeWidth + 'px',
    strokeDasharray: $pathLength,
    strokeDashoffset: $pathLength * (1 - $pathProgress) + ''
  };
});

_StyledSpinnerDeterminateTrackForeground.displayName = "_StyledSpinnerDeterminateTrackForeground";
export var StyledSpinnerDeterminateTrackForeground = withWrapper(_StyledSpinnerDeterminateTrackForeground, function (Styled) {
  return function StyledSpinnerDeterminateSvg(props) {
    return /*#__PURE__*/React.createElement(Styled, _extends({
      d: DETERMINATE_SPINNER_SIZES[props.$size].d
    }, props));
  };
});
export var StyledSpinnerDeterminateText = styled('div', function (_ref6) {
  var $theme = _ref6.$theme,
      $size = _ref6.$size;
  return _objectSpread({
    color: $theme.colors.contentPrimary
  }, $theme.typography[DETERMINATE_SPINNER_SIZES[$size].typography]);
});
StyledSpinnerDeterminateText.displayName = "StyledSpinnerDeterminateText";