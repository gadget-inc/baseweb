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

function Alert(props, ref) {
  const [, theme] = useStyletron();
  const {
    title = 'Alert',
    size,
    color,
    overrides = {},
    ...restProps
  } = props;
  const SvgOverride = mergeOverride( // Icons from the theme target the SVG override in the underlying Icon component
  {
    component: theme.icons && theme.icons.Alert ? theme.icons.Alert : null
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
    d: "M12 21C16.9706 21 21 16.9706 21 12C21 7.02945 16.9706 3 12 3C7.02942 3 3 7.02945 3 12C3 16.9706 7.02942 21 12 21ZM12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"
  }));
}

export default /*#__PURE__*/React.forwardRef(Alert);