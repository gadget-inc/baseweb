function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { StyledTable, StyledHead, StyledHeadCell, StyledBody, StyledRow, StyledCell } from './styled-components.js';
import { ProgressBar } from '../progress-bar/index.js';
export default class Table extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(StyledTable, {
      "data-baseweb": "table",
      "aria-colcount": this.props.columns.length,
      "aria-rowcount": this.props.data.length
    }, this.props.isLoading && /*#__PURE__*/React.createElement(ProgressBar, {
      infinite: true,
      overrides: {
        Bar: {
          style: {
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0
          }
        }
      }
    }), /*#__PURE__*/React.createElement(StyledHead, {
      $width: this.props.horizontalScrollWidth
    }, this.props.columns.map((column, index) => /*#__PURE__*/React.createElement(StyledHeadCell, {
      key: index
    }, column))), /*#__PURE__*/React.createElement(StyledBody, {
      $width: this.props.horizontalScrollWidth
    }, this.props.data.map((row, index) => /*#__PURE__*/React.createElement(StyledRow, {
      key: index
    }, row.map((cell, cellIndex) => /*#__PURE__*/React.createElement(StyledCell, {
      key: cellIndex
    }, cell))))));
  }

}

_defineProperty(Table, "defaultProps", {
  columns: [],
  data: [[]],
  isLoading: false
});