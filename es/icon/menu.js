function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// BASEUI-GENERATED-REACT-ICON
// DO NOT EDIT THIS FILE DIRECTLY, SEE README.md
import * as React from 'react';
import { useStyletron } from '../styles/index.js';
import { mergeOverride, toObjectOverride } from '../helpers/overrides.js';
import Icon from './icon.js';

function Menu(props, ref) {
  const [, theme] = useStyletron();
  const {
    title = 'Menu',
    size,
    color,
    overrides = {},
    ...restProps
  } = props;
  const SvgOverride = mergeOverride( // Icons from the theme target the SVG override in the underlying Icon component
  {
    component: theme.icons && theme.icons.Menu ? theme.icons.Menu : null
  }, overrides && overrides.Svg ? toObjectOverride(overrides.Svg) : {});
  return /*#__PURE__*/React.createElement(Icon, _extends({
    viewBox: "0 0 24 24",
    ref: ref,
    title: title,
    size: size,
    color: color,
    overrides: {
      Svg: SvgOverride
    }
  }, restProps), /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "11",
    width: "16",
    height: "2",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "5",
    width: "16",
    height: "2",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "17",
    width: "16",
    height: "2",
    rx: "1"
  }));
}

export default /*#__PURE__*/React.forwardRef(Menu);