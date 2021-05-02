function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { Svg as StyledSvg } from './styled-components.js';
import omitDollarPrefixedKeys from './omit-dollar-prefixed-keys.js';

function Icon(props, ref) {
  const {
    children,
    title,
    size,
    color,
    overrides = {},
    ...restProps
  } = props;
  const [Svg, overrideProps] = getOverrides(overrides.Svg, StyledSvg); // Determine how/which props are passed based on if the component is a Styletron component.
  // $FlowFixMe: __STYLETRON__ not in React.AbstractcomponentStatics

  const passThroughProps = Svg.__STYLETRON__ ? {
    title,
    $color: color,
    $size: size,
    ...restProps,
    ...overrideProps
  } : {
    title,
    color,
    size,
    ...omitDollarPrefixedKeys(restProps),
    ...omitDollarPrefixedKeys(overrideProps)
  };
  return /*#__PURE__*/React.createElement(Svg, _extends({
    "data-baseweb": "icon",
    ref: ref
  }, passThroughProps), title ? /*#__PURE__*/React.createElement("title", null, title) : null, children);
}

export default /*#__PURE__*/React.forwardRef(Icon);