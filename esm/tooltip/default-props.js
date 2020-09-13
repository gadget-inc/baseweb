/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { ACCESSIBILITY_TYPE, PLACEMENT, TRIGGER_TYPE } from './constants.js';
var baseDefaultProps = {
  accessibilityType: ACCESSIBILITY_TYPE.tooltip,
  focusLock: true,
  autoFocus: true,
  returnFocus: true,
  onMouseEnterDelay: 200,
  onMouseLeaveDelay: 200,
  overrides: {},
  placement: PLACEMENT.auto,
  showArrow: false,
  triggerType: TRIGGER_TYPE.hover,
  renderAll: false
};
export default baseDefaultProps;