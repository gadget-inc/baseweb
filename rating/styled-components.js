"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledEmoticon = exports.StyledStar = exports.StyledRoot = void 0;

var _index = require("../styles/index.js");

var _svgIcons = require("./svg-icons.js");

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var StyledRoot = (0, _index.styled)('ul', function (_ref) {
  var $theme = _ref.$theme;
  return {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    display: 'inline-block',
    ':focus': {
      outline: 'none'
    }
  };
});
exports.StyledRoot = StyledRoot;
StyledRoot.displayName = "StyledRoot";
var StyledStar = (0, _index.styled)('li', function (_ref2) {
  var $theme = _ref2.$theme,
      $isActive = _ref2.$isActive,
      $isSelected = _ref2.$isSelected,
      $isFocusVisible = _ref2.$isFocusVisible,
      $size = _ref2.$size;
  var starStroke = $theme.colors.mono500;
  var starFill = $theme.colors.mono300;

  if ($isActive) {
    starStroke = starFill = $theme.colors.rating400;
  }

  var styles = {
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    display: 'inline-block',
    transition: "transform ".concat($theme.animation.timing400),
    cursor: 'pointer',
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    marginRight: $theme.sizing.scale300,
    width: "".concat($size, "px"),
    height: "".concat($size, "px"),
    transform: $isSelected ? 'scale(1.35)' : '',
    outline: $isFocusVisible ? "3px solid ".concat($theme.colors.accent) : 'none',
    outlineOffset: '2px',
    ':after': {
      transition: "all ".concat($theme.animation.timing400),
      content: "url('data:image/svg+xml," + (0, _svgIcons.starSVG)(starFill, starStroke, $size) + "')"
    }
  };
  return styles;
});
exports.StyledStar = StyledStar;
StyledStar.displayName = "StyledStar";
var StyledEmoticon = (0, _index.styled)('li', function (_ref3) {
  var $theme = _ref3.$theme,
      $isActive = _ref3.$isActive,
      $isSelected = _ref3.$isSelected,
      _ref3$$index = _ref3.$index,
      $index = _ref3$$index === void 0 ? 1 : _ref3$$index,
      $isFocusVisible = _ref3.$isFocusVisible,
      $size = _ref3.$size;
  var emoticonFill = $theme.colors.mono500;

  if ($isActive) {
    emoticonFill = $theme.colors.rating400;
  }

  var ratingIcons = [(0, _svgIcons.angryRatingSVG)(emoticonFill, $size), (0, _svgIcons.sadRatingSVG)(emoticonFill, $size), (0, _svgIcons.neutralRatingSVG)(emoticonFill, $size), (0, _svgIcons.happyRatingSVG)(emoticonFill, $size), (0, _svgIcons.veryHappyRatingSVG)(emoticonFill, $size)];
  var styles = {
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    display: 'inline-block',
    transition: "transform ".concat($theme.animation.timing400),
    cursor: 'pointer',
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    marginRight: $theme.sizing.scale300,
    width: "".concat($size, "px"),
    height: "".concat($size, "px"),
    transform: $isSelected ? 'scale(1.1)' : '',
    outline: $isFocusVisible ? "3px solid ".concat($theme.colors.accent) : 'none',
    outlineOffset: '2px',
    ':after': {
      transition: "all ".concat($theme.animation.timing400),
      content: "url('data:image/svg+xml," + ratingIcons[$index - 1] + "')"
    }
  };
  return styles;
});
exports.StyledEmoticon = StyledEmoticon;
StyledEmoticon.displayName = "StyledEmoticon";