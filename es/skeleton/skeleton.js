function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { StyledRoot, StyledRow } from './styled-components.js';

class Skeleton extends React.Component {
  render() {
    const {
      overrides = {}
    } = this.props;
    const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
    const [Row, rowProps] = getOverrides(overrides.Row, StyledRow);

    if (typeof this.props.rows === 'number') {
      return /*#__PURE__*/React.createElement(Root, _extends({
        $height: this.props.height,
        $width: this.props.width,
        $animation: this.props.animation,
        $rows: this.props.rows,
        testid: 'loader'
      }, rootProps), Array(this.props.rows).fill().map((item, index) => /*#__PURE__*/React.createElement(Row, _extends({
        $animation: this.props.animation,
        key: index,
        $isLastRow: index === this.props.rows - 1
      }, rowProps))));
    }

    return /*#__PURE__*/React.createElement(Root, _extends({
      $height: this.props.height,
      $width: this.props.width,
      $animation: this.props.animation,
      testid: 'loader'
    }, rootProps));
  }

}

_defineProperty(Skeleton, "defaultProps", {
  rows: 0,
  animation: false
});

export default Skeleton;