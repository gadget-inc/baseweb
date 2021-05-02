function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Block } from '../block/index.js';
import { mergeOverrides } from '../helpers/overrides.js';
import { getMediaQueries, getMediaQuery } from '../helpers/responsive-helpers.js';
export const flexGridItemMediaQueryStyle = ({
  $theme,
  flexGridColumnCount: colCount,
  flexGridColumnGap,
  flexGridRowGap,
  flexGridItemIndex: itemIndex,
  flexGridItemCount: itemCount
}) => {
  // 0px needed for calc() to behave properly
  const colGap = $theme.sizing[flexGridColumnGap] || flexGridColumnGap || '0px';
  const colGapQuantity = parseFloat(colGap);
  const colGapUnit = colGap.match(/[a-zA-Z]+/)[0];
  const rowGap = $theme.sizing[flexGridRowGap] || flexGridRowGap || '0px';
  const rowGapQuantity = parseFloat(rowGap);
  const widthCalc = `(100% - ${(colCount - 1) * colGapQuantity}${colGapUnit}) / ${colCount}`;
  const marginDirection = $theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';
  return Object.freeze({
    // Subtract .5px to avoid rounding issues on IE/Edge
    // See https://github.com/uber/baseweb/pull/1748
    width: `calc(${widthCalc} - .5px)`,
    // Add colGap except at end of row
    [marginDirection]: colGapQuantity && ((itemIndex + 1) % colCount !== 0 ? colGap : 0),
    // Add rowGap except at end of column
    marginBottom: rowGapQuantity && (~~(itemIndex / colCount) !== ~~((itemCount - 1) / colCount) ? rowGap : 0),
    // Add space to make up for missing columns if last row ends early
    ...(itemIndex === itemCount - 1 && (itemIndex + 1) % colCount !== 0 ? {
      [marginDirection]: `calc(${colCount - itemIndex % colCount - 1} * (${colGap} + ${widthCalc}))`
    } : {})
  });
};
export const getResponsiveValue = (responsive, i) => {
  if (!responsive) {
    return null;
  }

  if (!Array.isArray(responsive)) {
    return responsive;
  }

  return responsive[i] || responsive[responsive.length - 1];
};
export const flexGridItemStyle = ({
  $flexGridColumnCount,
  $flexGridColumnGap,
  $flexGridRowGap,
  $flexGridItemIndex,
  $flexGridItemCount,
  $theme
}) => {
  const baseFlexGridItemStyle = {
    flexGrow: 1
  };
  const mediaQueries = getMediaQueries($theme.breakpoints); // Get the length of the longest responsive array

  const maxResponsiveLength = Math.max(...[$flexGridColumnCount, $flexGridColumnGap, $flexGridRowGap].map(r => Array.isArray(r) ? r.length : 0)); // No media queries for non-responsive FlexGrids

  if (maxResponsiveLength < 2) {
    return { ...baseFlexGridItemStyle,
      ...flexGridItemMediaQueryStyle({
        $theme,
        flexGridColumnCount: getResponsiveValue($flexGridColumnCount, 0) || 1,
        flexGridColumnGap: getResponsiveValue($flexGridColumnGap, 0) || 0,
        flexGridRowGap: getResponsiveValue($flexGridRowGap, 0) || 0,
        flexGridItemIndex: $flexGridItemIndex || 0,
        flexGridItemCount: $flexGridItemCount || 1
      })
    };
  } // Generate style by iterating up to maxResponsiveLength for each responsive
  // breakpoint. Will end up with styles for one of the following media queries
  // depending on maxResponsiveLength:
  // - {mobile, small}
  // - {mobile, small, medium}
  // - {mobile, small, medium, large}


  return [...Array(maxResponsiveLength).keys()].reduce((acc, i) => {
    const [flexGridColumnCountValue, flexGridColumnGapValue, flexGridRowGapValue] = [$flexGridColumnCount, $flexGridColumnGap, $flexGridRowGap].map(r => getResponsiveValue(r, i));
    const mediaQuery = i === 0 ? // Custom media query needed so :nth-child styles don't conflict
    getMediaQuery(0) : mediaQueries[i - 1];

    if (mediaQuery) {
      acc[mediaQuery] = flexGridItemMediaQueryStyle({
        $theme,
        flexGridColumnCount: flexGridColumnCountValue || 1,
        flexGridColumnGap: flexGridColumnGapValue || 0,
        flexGridRowGap: flexGridRowGapValue || 0,
        flexGridItemIndex: $flexGridItemIndex || 0,
        flexGridItemCount: $flexGridItemCount || 1
      });
    }

    return acc;
  }, baseFlexGridItemStyle);
};

const FlexGridItem = ({
  forwardedRef,
  children,
  as,
  overrides,
  flexGridColumnCount,
  flexGridColumnGap,
  flexGridRowGap,
  flexGridItemIndex,
  flexGridItemCount,
  ...restProps
}) => {
  const flexGridItemOverrides = {
    Block: {
      style: flexGridItemStyle
    }
  };
  const blockOverrides = overrides ? mergeOverrides(flexGridItemOverrides, overrides) : flexGridItemOverrides;
  return /*#__PURE__*/React.createElement(Block // coerced to any because because of how react components are typed.
  // cannot guarantee an html element
  // eslint-disable-next-line flowtype/no-weak-types
  , _extends({
    ref: forwardedRef,
    as: as,
    overrides: blockOverrides,
    $flexGridColumnCount: flexGridColumnCount,
    $flexGridColumnGap: flexGridColumnGap,
    $flexGridRowGap: flexGridRowGap,
    $flexGridItemIndex: flexGridItemIndex,
    $flexGridItemCount: flexGridItemCount,
    "data-baseweb": "flex-grid-item"
  }, restProps), children);
};

const FlexGridItemComponent = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(FlexGridItem, _extends({}, props, {
  forwardedRef: ref
})));
FlexGridItemComponent.displayName = 'FlexGridItem';
export default FlexGridItemComponent;