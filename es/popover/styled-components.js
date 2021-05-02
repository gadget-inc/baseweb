/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { ARROW_SIZE, ARROW_WIDTH } from './constants.js';
import { getPopoverMarginStyles, getArrowPositionStyles, getStartPosition, getEndPosition } from './utils.js';

/**
 * Main popover container element that gets positioned next to the anchor
 */
export function getBodyStyles(props) {
  const {
    $isOpen,
    $isAnimating,
    $placement,
    $popoverOffset,
    $showArrow,
    $theme,
    $popoverMargin
  } = props;
  return {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: $theme.colors.backgroundTertiary,
    borderTopLeftRadius: $theme.borders.popoverBorderRadius,
    borderTopRightRadius: $theme.borders.popoverBorderRadius,
    borderBottomRightRadius: $theme.borders.popoverBorderRadius,
    borderBottomLeftRadius: $theme.borders.popoverBorderRadius,
    boxShadow: $theme.lighting.shadow600,
    transitionProperty: 'opacity,transform',
    transitionDuration: $isAnimating ? '0.1s' : '0s',
    transitionTimingFunction: $isOpen ? $theme.animation.easeOutCurve : $theme.animation.easeInCurve,
    opacity: $isAnimating && $isOpen ? 1 : 0,
    transform: $isAnimating && $isOpen ? getEndPosition($popoverOffset) : getStartPosition($popoverOffset, $placement, $showArrow ? ARROW_SIZE : 0, $popoverMargin),
    ...getPopoverMarginStyles($showArrow ? ARROW_SIZE : 0, $placement, $popoverMargin)
  };
}
export const Body = styled('div', getBodyStyles);
/**
 * Arrow shown between the popover and the anchor element
 */

Body.displayName = "Body";
export function getArrowStyles(props) {
  const {
    $arrowOffset,
    $placement,
    $theme
  } = props;
  return {
    backgroundColor: $theme.colors.backgroundTertiary,
    boxShadow: $theme.lighting.shadow600,
    width: `${ARROW_WIDTH}px`,
    height: `${ARROW_WIDTH}px`,
    transform: 'rotate(45deg)',
    position: 'absolute',
    ...getArrowPositionStyles($arrowOffset, $placement)
  };
}
export const Arrow = styled('div', getArrowStyles);
/**
 * Extra div that holds the popover content. This extra element
 * is needed for the arrow–the arrow is just a 45deg rotated div,
 * and rendering this extra element on top with a solid background
 * clips the part of the arrow that extends into the popover.
 */

Arrow.displayName = "Arrow";
export function getInnerStyles({
  $theme
}) {
  return {
    backgroundColor: $theme.colors.backgroundTertiary,
    borderTopLeftRadius: $theme.borders.popoverBorderRadius,
    borderTopRightRadius: $theme.borders.popoverBorderRadius,
    borderBottomRightRadius: $theme.borders.popoverBorderRadius,
    borderBottomLeftRadius: $theme.borders.popoverBorderRadius,
    color: $theme.colors.contentPrimary,
    position: 'relative'
  };
}
export const Inner = styled('div', getInnerStyles);
/**
 * A drop-in component that provides the recommended padding
 * for popovers. Mostly a convenience for users so they don't
 * have to define this themselves.
 */

Inner.displayName = "Inner";
export const Padding = styled('div', {
  paddingLeft: '12px',
  paddingTop: '12px',
  paddingRight: '12px',
  paddingBottom: '12px'
});
Padding.displayName = "Padding";
export const Hidden = styled('div', {
  display: 'none'
});
Hidden.displayName = "Hidden";