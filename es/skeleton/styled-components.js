/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';

function getAnimationColor(props) {
  const {
    $theme
  } = props;
  return `linear-gradient(135deg,
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundSecondary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary})`;
}

const animationStyle = {
  animationTimingFunction: 'ease-out',
  animationDuration: '1.5s',
  animationIterationCount: 'infinite',
  backgroundSize: '400% 100%',
  animationName: {
    '0%': {
      backgroundPosition: '100% 50%'
    },
    '100%': {
      backgroundPosition: '0% 50%'
    }
  }
};
export const StyledRoot = styled('div', props => {
  if (typeof props.$rows === 'number' && props.$rows !== 0) {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: props.$height,
      width: props.$width
    };
  }

  return { ...(props.$animation ? { ...animationStyle,
      backgroundImage: getAnimationColor(props)
    } : {
      backgroundColor: props.$theme.colors.backgroundTertiary
    }),
    height: props.$height,
    width: props.$width
  };
});
StyledRoot.displayName = "StyledRoot";
export const StyledRow = styled('div', props => {
  return { ...(props.$animation ? { ...animationStyle,
      backgroundImage: getAnimationColor(props)
    } : {
      backgroundColor: props.$theme.colors.backgroundTertiary
    }),
    width: '100%',
    height: '15px',
    marginBottom: props.$isLastRow ? '0px' : '10px'
  };
});
StyledRow.displayName = "StyledRow";