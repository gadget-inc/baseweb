/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react'; // eslint-disable-next-line import/no-named-default

import StatefulContainer from './stateful-radiogroup-container.js'; // eslint-disable-next-line import/no-named-default

import RadioGroup from './radiogroup.js';

// Styled elements
const StatefulRadioGroup = function (props) {
  const {
    children,
    ...restProps
  } = props;
  return /*#__PURE__*/React.createElement(StatefulContainer, restProps, childrenProps => /*#__PURE__*/React.createElement(RadioGroup, childrenProps, children));
};

StatefulRadioGroup.displayName = 'StatefulRadioGroup';
export default StatefulRadioGroup;