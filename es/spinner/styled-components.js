/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { getSvgStyles } from '../icon/styled-components.js';
import { SIZE } from './constants.js';
const spin = {
  from: {
    transform: 'rotate(0deg)'
  },
  to: {
    transform: 'rotate(360deg)'
  }
};
/**
 * Spinner icon overrides
 */

export const Svg = styled('svg', props => {
  const {
    $theme,
    $color
  } = props;
  return { ...getSvgStyles(props),
    fill: $color || $theme.colors.accent,
    cursor: 'wait',
    animationName: spin,
    animationDuration: $theme.animation.timing1000,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  };
});
Svg.displayName = "Svg";
export const StyledTrackPath = styled('path', props => ({
  fill: props.$theme.colors.spinnerTrackFill,
  opacity: 0.16
}));
StyledTrackPath.displayName = "StyledTrackPath";
export const StyledActivePath = styled('path', props => ({
  fill: props.$color || props.$theme.colors.accent
})); // TODO(v11): Replace Spinner with SpinnerNext

StyledActivePath.displayName = "StyledActivePath";
export const StyledSpinnerNext = styled('div', ({
  $theme,
  $size = SIZE.medium
}) => {
  const borderWidth = {
    large: $theme.sizing.scale300,
    medium: $theme.sizing.scale100,
    small: $theme.sizing.scale0
  }[$size];
  return {
    display: 'block',
    animationName: spin,
    animationDuration: $theme.animation.timing1000,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    borderRadius: '50%',
    borderTopColor: $theme.colors.contentAccent,
    borderRightColor: $theme.colors.backgroundTertiary,
    borderBottomColor: $theme.colors.backgroundTertiary,
    borderLeftColor: $theme.colors.backgroundTertiary,
    borderLeftWidth: borderWidth,
    borderRightWidth: borderWidth,
    borderTopWidth: borderWidth,
    borderBottomWidth: borderWidth,
    width: {
      large: $theme.sizing.scale1000,
      medium: $theme.sizing.scale900,
      small: $theme.sizing.scale800
    }[$size],
    height: {
      large: $theme.sizing.scale1000,
      medium: $theme.sizing.scale900,
      small: $theme.sizing.scale800
    }[$size],
    cursor: 'wait'
  };
});
StyledSpinnerNext.displayName = "StyledSpinnerNext";