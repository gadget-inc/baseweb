function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { StyledStep, StyledIconContainer, StyledIcon, StyledInnerIcon, StyledContent, StyledContentTitle, StyledContentTail, StyledContentDescription } from './styled-components.js';

function Step({
  overrides = {},
  isCompleted,
  isActive,
  isLast,
  title,
  children
}) {
  const [Root, rootProps] = getOverrides(overrides.Root, StyledStep);
  const [IconContainer, iconContainerProps] = getOverrides(overrides.IconContainer, StyledIconContainer);
  const [Icon, iconProps] = getOverrides(overrides.Icon, StyledIcon);
  const [InnerIcon, innerIconProps] = getOverrides(overrides.InnerIcon, StyledInnerIcon);
  const [Tail, tailProps] = getOverrides(overrides.Tail, StyledContentTail);
  const [Content, contentProps] = getOverrides(overrides.Content, StyledContent);
  const [Title, titleProps] = getOverrides(overrides.Title, StyledContentTitle);
  const [Description, descriptionProps] = getOverrides(overrides.Description, StyledContentDescription);
  const sharedProps = {
    $isCompleted: isCompleted,
    $isActive: isActive
  };
  return /*#__PURE__*/React.createElement(Root, _extends({}, sharedProps, rootProps), /*#__PURE__*/React.createElement(IconContainer, _extends({}, sharedProps, iconContainerProps), /*#__PURE__*/React.createElement(Icon, _extends({}, sharedProps, iconProps), isActive && /*#__PURE__*/React.createElement(InnerIcon, innerIconProps))), !isLast && /*#__PURE__*/React.createElement(Tail, _extends({}, sharedProps, tailProps)), /*#__PURE__*/React.createElement(Content, _extends({}, sharedProps, contentProps), /*#__PURE__*/React.createElement(Title, _extends({}, sharedProps, titleProps), title), /*#__PURE__*/React.createElement(Description, descriptionProps, isActive && children)));
}

Step.defaultProps = {
  isCompleted: false,
  isLast: false
};
export default Step;