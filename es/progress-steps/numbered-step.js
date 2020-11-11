function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { StyledNumberStep, StyledNumberIcon, StyledContent, StyledContentTitle, StyledNumberContentTail, StyledContentDescription } from './styled-components.js';
import StyledCheckIcon from '../icon/check.js';

function NumberedStep({
  overrides = {},
  isCompleted,
  isActive,
  isLast,
  title,
  step,
  children
}) {
  const [Root, rootProps] = getOverrides(overrides.Root, StyledNumberStep);
  const [Icon, iconProps] = getOverrides(overrides.Icon, StyledNumberIcon);
  const [Tail, tailProps] = getOverrides(overrides.Tail, StyledNumberContentTail);
  const [Content, contentProps] = getOverrides(overrides.Content, StyledContent);
  const [Title, titleProps] = getOverrides(overrides.Title, StyledContentTitle);
  const [Description, descriptionProps] = getOverrides(overrides.Description, StyledContentDescription);
  const [CheckIcon, checkIconProps] = getOverrides(overrides.Icon, StyledCheckIcon);
  const sharedProps = {
    $isCompleted: isCompleted,
    $isActive: isActive
  };
  return /*#__PURE__*/React.createElement(Root, _extends({}, sharedProps, rootProps), /*#__PURE__*/React.createElement(Icon, _extends({}, sharedProps, iconProps), !isCompleted && /*#__PURE__*/React.createElement("span", null, step), isCompleted && /*#__PURE__*/React.createElement(CheckIcon, _extends({
    size: 28
  }, checkIconProps))), !isLast && /*#__PURE__*/React.createElement(Tail, _extends({}, sharedProps, tailProps)), /*#__PURE__*/React.createElement(Content, _extends({}, sharedProps, contentProps), /*#__PURE__*/React.createElement(Title, _extends({}, sharedProps, titleProps), title), /*#__PURE__*/React.createElement(Description, descriptionProps, isActive && children)));
}

NumberedStep.defaultProps = {
  isCompleted: false,
  isLast: false
};
export default NumberedStep;