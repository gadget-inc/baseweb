function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { ThemeContext } from '../styles/theme-provider.js';
import { StyledIconContainer, StyledItemContent } from './styled-components.js';
import ChevronRight from '../icon/chevron-right.js';
import ChevronDown from '../icon/chevron-down.js';
import ChevronLeft from '../icon/chevron-left.js';
import BlankIcon from '../icon/blank.js';
import { getOverride, getOverrideProps, getOverrides } from '../helpers/overrides.js';

const TreeLabel = ({
  hasChildren,
  isExpanded,
  label,
  overrides = {},
  node,
  isSelected,
  isFocusVisible,
  ...props
}) => {
  const sharedProps = {
    $isExpanded: !!isExpanded,
    $isSelected: !!isSelected,
    $isFocusVisible: !!isFocusVisible,
    $hasChildren: !!hasChildren
  };
  const {
    IconContainer: IconContainerOverride,
    ExpandIcon: ExpandIconOverride,
    CollapseIcon: CollapseIconOverride,
    LeafIconContainer: LeafIconContainerOverride,
    LeafIcon: LeafIconOverride,
    TreeItemContent: TreeItemContentOverride
  } = overrides;
  const IconContainer = getOverride(IconContainerOverride) || StyledIconContainer;
  const [Left, LeftProps] = getOverrides(ExpandIconOverride, ChevronLeft);
  const [Right, RightProps] = getOverrides(ExpandIconOverride, ChevronRight);
  const CollapseIcon = getOverride(CollapseIconOverride) || ChevronDown;
  const LeafIconContainer = getOverride(LeafIconContainerOverride) || StyledIconContainer;
  const LeafIcon = getOverride(LeafIconOverride) || BlankIcon;
  const TreeItemContent = getOverride(TreeItemContentOverride) || StyledItemContent;
  return /*#__PURE__*/React.createElement(TreeItemContent, _extends({}, sharedProps, props), hasChildren && /*#__PURE__*/React.createElement(IconContainer, _extends({}, sharedProps, getOverrideProps(IconContainerOverride)), !isExpanded ? /*#__PURE__*/React.createElement(ThemeContext.Consumer, null, theme => theme.direction === 'rtl' ? /*#__PURE__*/React.createElement(Left, _extends({}, sharedProps, LeftProps)) : /*#__PURE__*/React.createElement(Right, _extends({}, sharedProps, RightProps))) : /*#__PURE__*/React.createElement(CollapseIcon, _extends({}, sharedProps, getOverrideProps(CollapseIconOverride)))), !hasChildren && LeafIcon && /*#__PURE__*/React.createElement(LeafIconContainer, _extends({}, sharedProps, getOverrideProps(LeafIconContainerOverride)), /*#__PURE__*/React.createElement(LeafIcon, _extends({}, sharedProps, getOverrideProps(LeafIconOverride)))), typeof label === 'function' ? label(node) : label);
};

export default TreeLabel;