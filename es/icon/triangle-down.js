function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// BASEUI-GENERATED-REACT-ICON
// DO NOT EDIT THIS FILE DIRECTLY, SEE README.md
import * as React from 'react';
import { useStyletron } from '../styles/index.js';
import { mergeOverride, toObjectOverride } from '../helpers/overrides.js';
import Icon from './icon.js';
import omitDollarPrefixedKeys from './omit-dollar-prefixed-keys.js';

function TriangleDown(props, ref) {
  const [, theme] = useStyletron();
  const {
    overrides = {},
    ...restProps
  } = props;
  const SvgOverride = mergeOverride( // Icons from theme really targets the SVG override in the underlying Icon component, but
  // have props typed with IconPropsT. Provided the missing props inline below here.
  {
    component: theme.icons && theme.icons.TriangleDown ? theme.icons.TriangleDown : null,
    props: {
      title: 'Triangle Down',
      viewBox: '0 0 24 24',
      ...omitDollarPrefixedKeys(restProps)
    }
  }, overrides && overrides.Svg ? toObjectOverride(overrides.Svg) : {});
  return React.createElement(Icon, _extends({
    title: "Triangle Down",
    viewBox: "0 0 24 24",
    ref: ref,
    overrides: {
      Svg: SvgOverride
    }
  }, restProps), React.createElement("path", {
    d: "M12.7071 15.2929L17.1464 10.8536C17.4614 10.5386 17.2383 10 16.7929 10L7.20711 10C6.76165 10 6.53857 10.5386 6.85355 10.8536L11.2929 15.2929C11.6834 15.6834 12.3166 15.6834 12.7071 15.2929Z"
  }));
}

export default React.forwardRef(TriangleDown);