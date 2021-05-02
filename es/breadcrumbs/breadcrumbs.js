function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React, { Children } from 'react';
import { LocaleContext } from '../locale/index.js';
import { ThemeContext } from '../styles/theme-provider.js';
import ChevronRight from '../icon/chevron-right.js';
import ChevronLeft from '../icon/chevron-left.js';
import { StyledRoot, StyledSeparator, StyledList, StyledListItem } from './styled-components.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
export function Breadcrumbs(props) {
  const {
    overrides = {},
    showTrailingSeparator = false
  } = props;
  const childrenArray = Children.toArray(props.children);
  const childrenWithSeparators = [];
  const [Root, baseRootProps] = getOverrides(overrides.Root, StyledRoot);
  const [Right, baseIconProps] = getOverrides(overrides.Icon, ChevronRight);
  const [Left] = getOverrides(overrides.Icon, ChevronLeft);
  const [List, baseListProps] = getOverrides(overrides.List, StyledList);
  const [ListItem, baseListItemProps] = getOverrides(overrides.ListItem, StyledListItem);
  const [Separator, baseSeparatorProps] = getOverrides(overrides.Separator, StyledSeparator);
  const iconOverrides = mergeOverrides({
    Svg: {
      style: {
        verticalAlign: 'text-bottom'
      }
    }
  }, // $FlowFixMe
  baseIconProps && baseIconProps.overrides); // $FlowFixMe

  baseIconProps.overrides = iconOverrides;
  childrenArray.forEach((child, index) => {
    childrenWithSeparators.push( /*#__PURE__*/React.createElement(ListItem, _extends({
      key: `breadcrumb-item-${index}`,
      $itemIndex: index
    }, baseListItemProps), child, (showTrailingSeparator || index !== childrenArray.length - 1) && /*#__PURE__*/React.createElement(Separator, _extends({}, baseSeparatorProps, {
      key: `separator-${index}`
    }), /*#__PURE__*/React.createElement(ThemeContext.Consumer, null, theme => theme.direction === 'rtl' ? /*#__PURE__*/React.createElement(Left, baseIconProps) : /*#__PURE__*/React.createElement(Right, baseIconProps)))));
  });
  return /*#__PURE__*/React.createElement(LocaleContext.Consumer, null, locale => /*#__PURE__*/React.createElement(Root, _extends({
    "aria-label": props.ariaLabel || locale.breadcrumbs.ariaLabel,
    "data-baseweb": "breadcrumbs"
  }, baseRootProps), /*#__PURE__*/React.createElement(List, baseListProps, childrenWithSeparators)));
}
Breadcrumbs.defaultProps = {
  overrides: {},
  showTrailingSeparator: false
};
export default Breadcrumbs;