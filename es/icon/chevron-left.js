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

function ChevronLeft(props, ref) {
  const [, theme] = useStyletron();
  const {
    title = 'Left',
    size,
    color,
    overrides = {},
    ...restProps
  } = props;
  const SvgOverride = mergeOverride( // Icons from the theme target the SVG override in the underlying Icon component
  {
    component: theme.icons && theme.icons.ChevronLeft ? theme.icons.ChevronLeft : null
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
  }, restProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7071C13.6834 17.0976 14.3166 17.0976 14.7071 16.7071C15.0976 16.3166 15.0976 15.6834 14.7071 15.2929L11.4142 12L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"
  }));
}

export default /*#__PURE__*/React.forwardRef(ChevronLeft);