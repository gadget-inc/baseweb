/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from './stateful-panel-container.js';
import Panel from './panel.js';
export default function StatefulPanel(props) {
  const {
    children,
    ...restProps
  } = props;
  return /*#__PURE__*/React.createElement(StatefulContainer, restProps, componentProps => /*#__PURE__*/React.createElement(Panel, componentProps, children));
}