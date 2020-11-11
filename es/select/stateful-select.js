/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from './stateful-select-container.js';
import Select from './select.js';
import defaultProps from './default-props.js';
export default function StatefulSelect(props) {
  return /*#__PURE__*/React.createElement(StatefulContainer, props, childrenProps => /*#__PURE__*/React.createElement(Select, childrenProps));
}
StatefulSelect.defaultProps = defaultProps;