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

function TriangleUp(props, ref) {
  const [, theme] = useStyletron();
  const {
    title = 'Triangle Up',
    size,
    color,
    overrides = {},
    ...restProps
  } = props;
  const SvgOverride = mergeOverride( // Icons from the theme target the SVG override in the underlying Icon component
  {
    component: theme.icons && theme.icons.TriangleUp ? theme.icons.TriangleUp : null
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
    d: "M12.7071 8.70711L17.1464 13.1464C17.4614 13.4614 17.2383 14 16.7929 14L7.20711 14C6.76165 14 6.53857 13.4614 6.85355 13.1464L11.2929 8.70711C11.6834 8.31658 12.3166 8.31658 12.7071 8.70711Z"
  }));
}

export default /*#__PURE__*/React.forwardRef(TriangleUp);