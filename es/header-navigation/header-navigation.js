function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { Root as StyledRoot } from './styled-components.js';

class HeaderNavigation extends React.Component {
  render() {
    const {
      overrides,
      ...restProps
    } = this.props;
    const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
    return /*#__PURE__*/React.createElement(Root, _extends({
      "data-baseweb": "header-navigation",
      role: "navigation"
    }, restProps, rootProps));
  }

}

_defineProperty(HeaderNavigation, "defaultProps", {
  overrides: {}
});

export default HeaderNavigation;