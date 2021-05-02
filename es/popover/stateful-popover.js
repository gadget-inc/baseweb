/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { ACCESSIBILITY_TYPE, PLACEMENT, TRIGGER_TYPE, POPOVER_MARGIN } from './constants.js';
import StatefulContainer from './stateful-container.js';
import Popover from './popover.js';

function StatefulPopover(props) {
  const {
    children,
    ...restProps
  } = props;
  return /*#__PURE__*/React.createElement(StatefulContainer, restProps, popoverProps => /*#__PURE__*/React.createElement(Popover, popoverProps, children));
}

StatefulPopover.defaultProps = {
  accessibilityType: ACCESSIBILITY_TYPE.menu,
  ignoreBoundary: false,
  overrides: {},
  onMouseEnterDelay: 200,
  onMouseLeaveDelay: 200,
  placement: PLACEMENT.auto,
  showArrow: false,
  triggerType: TRIGGER_TYPE.click,
  dismissOnClickOutside: true,
  dismissOnEsc: true,
  stateReducer: (_, nextState) => nextState,
  popoverMargin: POPOVER_MARGIN
};
export default StatefulPopover;