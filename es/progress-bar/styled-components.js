function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled, hexToRgb, withWrapper } from '../styles/index.js';
import { SIZE } from './constants.js';
import React from 'react';

function getBarHeight(size) {
  return {
    [SIZE.small]: '2px',
    [SIZE.medium]: '4px',
    [SIZE.large]: '8px'
  }[size];
}

export const StyledRoot = styled('div', props => {
  return {
    width: '100%'
  };
});
StyledRoot.displayName = "StyledRoot";
export const StyledBarContainer = styled('div', props => {
  const {
    $theme
  } = props;
  const {
    sizing
  } = $theme;
  return {
    marginLeft: sizing.scale500,
    marginRight: sizing.scale500,
    marginTop: sizing.scale500,
    marginBottom: sizing.scale500
  };
});
StyledBarContainer.displayName = "StyledBarContainer";
export const StyledBar = styled('div', props => {
  const {
    $theme,
    $size,
    $steps
  } = props;
  const {
    colors,
    sizing,
    borders
  } = $theme;
  const borderRadius = borders.useRoundedCorners ? sizing.scale0 : 0;
  return {
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    backgroundColor: hexToRgb(colors.progressbarTrackFill, '0.16'),
    height: getBarHeight($size),
    position: 'relative',
    overflow: 'hidden',
    ...($steps < 2 ? {} : {
      display: 'inline-block',
      width: `calc((100% - ${sizing.scale300} * ${$steps - 1})/${$steps})`,
      marginLeft: sizing.scale300,
      ':first-child': {
        marginLeft: '0'
      }
    })
  };
});
StyledBar.displayName = "StyledBar";
export const StyledBarProgress = styled('div', props => {
  const {
    $theme,
    $value,
    $successValue,
    $steps,
    $index,
    $infinite
  } = props;
  const {
    colors,
    sizing,
    borders
  } = $theme;
  const width = `${$value / $successValue * 100}%`;
  const stepStates = {
    default: 'default',
    awaits: 'awaits',
    inProgress: 'inProgress',
    completed: 'completed'
  };
  let stepState = stepStates.default;

  if ($steps > 1) {
    const stepValue = $successValue / $steps;
    const currentValue = $value / $successValue * 100;
    const completedSteps = Math.floor(currentValue / stepValue);

    if ($index < completedSteps) {
      stepState = stepStates.completed;
    } else if ($index === completedSteps) {
      stepState = stepStates.inProgress;
    } else {
      stepState = stepStates.awaits;
    }
  }

  const borderRadius = borders.useRoundedCorners ? sizing.scale0 : 0;
  const animationStyles = $infinite ? {
    width: '100%',
    position: 'absolute',
    animationDuration: '2.1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'cubic-bezier(0.65, 0.815, 0.735, 0.395)',
    animationName: {
      '0%': {
        left: '-200%',
        right: '100%'
      },
      '60%': {
        left: '107%',
        right: '-8%'
      },
      '100%': {
        left: '107%',
        right: '-8%'
      }
    }
  } : {
    width: width,
    transition: 'width 0.5s'
  };
  const stepAnimationStyles = stepState === stepStates.inProgress ? {
    position: 'absolute',
    animationDuration: '2.1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: $theme.animation.linearCurve,
    animationName: {
      '0%': {
        width: '0%',
        opacity: 1
      },
      '50%': {
        width: '100%',
        opacity: 1
      },
      '100%': {
        width: '100%',
        opacity: 0
      }
    }
  } : stepState === stepStates.completed ? {
    width: '100%',
    transition: 'width 0.5s'
  } : {
    width: '0%'
  };
  return {
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    backgroundColor: colors.accent,
    height: '100%',
    ...($steps > 1 ? stepAnimationStyles : animationStyles)
  };
});
StyledBarProgress.displayName = "StyledBarProgress";
export const StyledLabel = styled('div', props => {
  return {
    textAlign: 'center',
    ...props.$theme.typography.font150,
    color: props.$theme.colors.contentTertiary
  };
});
StyledLabel.displayName = "StyledLabel";
const PROGRESS_BAR_ROUNDED_SIZES = {
  [SIZE.large]: {
    d: 'M47.5 4H71.5529C82.2933 4 91 12.9543 91 24C91 35.0457 82.2933 44 71.5529 44H23.4471C12.7067 44 4 35.0457 4 24C4 12.9543 12.7067 4 23.4471 4H47.5195',
    width: 95,
    height: 48,
    strokeWidth: 8,
    typography: 'LabelLarge'
  },
  [SIZE.medium]: {
    d: 'M39 2H60.5833C69.0977 2 76 9.16344 76 18C76 26.8366 69.0977 34 60.5833 34H17.4167C8.90228 34 2 26.8366 2 18C2 9.16344 8.90228 2 17.4167 2H39.0195',
    width: 78,
    height: 36,
    strokeWidth: 4,
    typography: 'LabelMedium'
  },
  [SIZE.small]: {
    d: 'M32 1H51.6271C57.9082 1 63 6.37258 63 13C63 19.6274 57.9082 25 51.6271 25H12.3729C6.09181 25 1 19.6274 1 13C1 6.37258 6.09181 1 12.3729 1H32.0195',
    width: 64,
    height: 26,
    strokeWidth: 2,
    typography: 'LabelSmall'
  }
};
export const StyledProgressBarRoundedRoot = styled('div', ({
  $size,
  $inline
}) => {
  return {
    width: PROGRESS_BAR_ROUNDED_SIZES[$size].width + 'px',
    height: PROGRESS_BAR_ROUNDED_SIZES[$size].height + 'px',
    position: 'relative',
    display: $inline ? 'inline-flex' : 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
});
StyledProgressBarRoundedRoot.displayName = "StyledProgressBarRoundedRoot";

const _StyledProgressBarRoundedSvg = styled('svg', ({
  $size
}) => {
  return {
    width: PROGRESS_BAR_ROUNDED_SIZES[$size].width + 'px',
    height: PROGRESS_BAR_ROUNDED_SIZES[$size].height + 'px',
    position: 'absolute',
    fill: 'none'
  };
});

_StyledProgressBarRoundedSvg.displayName = "_StyledProgressBarRoundedSvg";
export const StyledProgressBarRoundedSvg = withWrapper(_StyledProgressBarRoundedSvg, Styled => function StyledProgressBarRoundedSvg(props) {
  return /*#__PURE__*/React.createElement(Styled, _extends({
    viewBox: `0 0 ${PROGRESS_BAR_ROUNDED_SIZES[props.$size].width} ${PROGRESS_BAR_ROUNDED_SIZES[props.$size].height}`,
    xmlns: "http://www.w3.org/2000/svg"
  }, props));
});

const _StyledProgressBarRoundedTrackBackground = styled('path', ({
  $theme,
  $size
}) => {
  return {
    stroke: $theme.colors.backgroundTertiary,
    strokeWidth: PROGRESS_BAR_ROUNDED_SIZES[$size].strokeWidth + 'px'
  };
});

_StyledProgressBarRoundedTrackBackground.displayName = "_StyledProgressBarRoundedTrackBackground";
export const StyledProgressBarRoundedTrackBackground = withWrapper(_StyledProgressBarRoundedTrackBackground, Styled => function StyledProgressBarRoundedSvg(props) {
  return /*#__PURE__*/React.createElement(Styled, _extends({
    d: PROGRESS_BAR_ROUNDED_SIZES[props.$size].d
  }, props));
});

const _StyledProgressBarRoundedTrackForeground = styled('path', ({
  $theme,
  $size,
  $visible,
  $pathLength,
  $pathProgress
}) => {
  return {
    visibility: $visible ? 'visible' : 'hidden',
    stroke: $theme.colors.borderAccent,
    strokeWidth: PROGRESS_BAR_ROUNDED_SIZES[$size].strokeWidth + 'px',
    strokeDasharray: $pathLength,
    strokeDashoffset: $pathLength * (1 - $pathProgress) + ''
  };
});

_StyledProgressBarRoundedTrackForeground.displayName = "_StyledProgressBarRoundedTrackForeground";
export const StyledProgressBarRoundedTrackForeground = withWrapper(_StyledProgressBarRoundedTrackForeground, Styled => function StyledProgressBarRoundedSvg(props) {
  return /*#__PURE__*/React.createElement(Styled, _extends({
    d: PROGRESS_BAR_ROUNDED_SIZES[props.$size].d
  }, props));
});
export const StyledProgressBarRoundedText = styled('div', ({
  $theme,
  $size
}) => {
  return {
    color: $theme.colors.contentPrimary,
    ...$theme.typography[PROGRESS_BAR_ROUNDED_SIZES[$size].typography]
  };
});
StyledProgressBarRoundedText.displayName = "StyledProgressBarRoundedText";