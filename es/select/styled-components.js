/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { TYPE } from './constants.js';
import { StyledList, StyledListItem } from '../menu/index.js';
import { SIZE } from './constants.js';
import { ellipsisText } from '../styles/util.js';

function getFont(size = SIZE.default, typography) {
  return {
    [SIZE.mini]: typography.font100,
    [SIZE.compact]: typography.font200,
    [SIZE.default]: typography.font300,
    [SIZE.large]: typography.font400
  }[size];
}

function getControlPadding(props) {
  const {
    $theme,
    $theme: {
      sizing
    },
    $size = SIZE.default,
    $type,
    $multi,
    $isEmpty
  } = props;
  const isSearch = $type === TYPE.search;
  const paddingLeft = isSearch ? `calc(${sizing.scale1000} - ${sizing.scale0})` : sizing.scale400;
  const paddingStartDir = $theme.direction === 'rtl' ? 'paddingRight' : 'paddingLeft';
  const paddingEndDir = $theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight';
  return {
    [SIZE.mini]: {
      // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
      paddingTop: $multi && !$isEmpty ? 0 : sizing.scale100,
      paddingBottom: $multi && !$isEmpty ? 0 : sizing.scale100,
      [paddingStartDir]: $multi && !$isEmpty ? `calc(${paddingLeft} - ${sizing.scale0})` : paddingLeft,
      [paddingEndDir]: '0'
    },
    [SIZE.compact]: {
      // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
      paddingTop: $multi && !$isEmpty ? `calc(${sizing.scale100} - ${sizing.scale0})` : sizing.scale200,
      paddingBottom: $multi && !$isEmpty ? `calc(${sizing.scale100} - ${sizing.scale0})` : sizing.scale200,
      [paddingStartDir]: $multi && !$isEmpty ? `calc(${paddingLeft} - ${sizing.scale0})` : paddingLeft,
      [paddingEndDir]: '0'
    },
    [SIZE.default]: {
      // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
      paddingTop: $multi && !$isEmpty ? `calc(${sizing.scale400} - ${sizing.scale0})` : sizing.scale400,
      paddingBottom: $multi && !$isEmpty ? `calc(${sizing.scale400} - ${sizing.scale0})` : sizing.scale400,
      [paddingStartDir]: $multi && !$isEmpty ? `calc(${paddingLeft} + ${sizing.scale0})` : paddingLeft,
      [paddingEndDir]: 0
    },
    [SIZE.large]: {
      // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
      paddingTop: $multi && !$isEmpty ? `calc(${sizing.scale600} - ${sizing.scale0})` : sizing.scale550,
      paddingBottom: $multi && !$isEmpty ? `calc(${sizing.scale600} - ${sizing.scale0})` : sizing.scale550,
      [paddingStartDir]: $multi && !$isEmpty ? `calc(${paddingLeft} - ${sizing.scale0})` : paddingLeft,
      [paddingEndDir]: 0
    }
  }[$size];
}

export const StyledDropdownContainer = styled('div', props => {
  return {
    width: `${String(props.$width)}px`
  };
});
StyledDropdownContainer.displayName = "StyledDropdownContainer";
export const StyledDropdown = StyledList;
export const StyledDropdownListItem = StyledListItem;
export const StyledOptionContent = styled('div', props => {
  const {
    $isHighlighted,
    $selected,
    $disabled,
    $theme
  } = props;
  return {
    cursor: $disabled ? 'not-allowed' : 'pointer',
    color: $selected && !$isHighlighted ? $theme.colors.menuFontSelected : null,
    fontWeight: $selected ? 'bold' : 'normal'
  };
});
StyledOptionContent.displayName = "StyledOptionContent";
export const StyledRoot = styled('div', props => {
  const {
    $theme: {
      typography
    },
    $size
  } = props;
  return { ...getFont($size, typography),
    boxSizing: 'border-box',
    position: 'relative',
    width: '100%'
  };
});
StyledRoot.displayName = "StyledRoot";

function getControlContainerColors($disabled, $isFocused, $isPseudoFocused, $positive, $error, colors) {
  if ($disabled) {
    return {
      color: colors.inputTextDisabled,
      borderLeftColor: colors.inputFillDisabled,
      borderRightColor: colors.inputFillDisabled,
      borderTopColor: colors.inputFillDisabled,
      borderBottomColor: colors.inputFillDisabled,
      backgroundColor: colors.inputFillDisabled
    };
  }

  if ($isFocused || $isPseudoFocused) {
    return {
      color: colors.contentPrimary,
      borderLeftColor: colors.borderFocus,
      borderRightColor: colors.borderFocus,
      borderTopColor: colors.borderFocus,
      borderBottomColor: colors.borderFocus,
      backgroundColor: colors.inputFillActive
    };
  }

  if ($error) {
    return {
      color: colors.contentPrimary,
      borderLeftColor: colors.inputBorderError,
      borderRightColor: colors.inputBorderError,
      borderTopColor: colors.inputBorderError,
      borderBottomColor: colors.inputBorderError,
      backgroundColor: colors.inputFillError
    };
  }

  if ($positive) {
    return {
      color: colors.contentPrimary,
      borderLeftColor: colors.inputBorderPositive,
      borderRightColor: colors.inputBorderPositive,
      borderTopColor: colors.inputBorderPositive,
      borderBottomColor: colors.inputBorderPositive,
      backgroundColor: colors.inputFillPositive
    };
  }

  return {
    color: colors.contentPrimary,
    borderLeftColor: colors.inputBorder,
    borderRightColor: colors.inputBorder,
    borderTopColor: colors.inputBorder,
    borderBottomColor: colors.inputBorder,
    backgroundColor: colors.inputFill
  };
}

export const StyledControlContainer = styled('div', props => {
  const {
    $disabled,
    $error,
    $positive,
    $isFocused,
    $isPseudoFocused,
    $type,
    $searchable,
    $theme: {
      borders,
      colors,
      animation
    }
  } = props;
  return {
    borderTopLeftRadius: borders.inputBorderRadius,
    borderTopRightRadius: borders.inputBorderRadius,
    borderBottomRightRadius: borders.inputBorderRadius,
    borderBottomLeftRadius: borders.inputBorderRadius,
    boxSizing: 'border-box',
    overflow: 'hidden',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: $disabled ? 'not-allowed' : $searchable || $type === TYPE.search ? 'text' : 'pointer',
    borderLeftWidth: '2px',
    borderRightWidth: '2px',
    borderTopWidth: '2px',
    borderBottomWidth: '2px',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    transitionProperty: 'border, box-shadow, background-color',
    transitionDuration: animation.timing200,
    transitionTimingFunction: animation.easeOutCurve,
    ...getControlContainerColors($disabled, $isFocused, $isPseudoFocused, $positive, $error, colors)
  };
});
StyledControlContainer.displayName = "StyledControlContainer";
export const StyledValueContainer = styled('div', props => {
  const padding = getControlPadding(props);
  return {
    boxSizing: 'border-box',
    position: 'relative',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%',
    display: 'flex',
    alignItems: 'center',
    flexWrap: props.$multi ? 'wrap' : 'nowrap',
    overflow: 'hidden',
    ...padding
  };
});
StyledValueContainer.displayName = "StyledValueContainer";
export const StyledPlaceholder = styled('div', props => {
  const {
    $disabled,
    $theme: {
      colors
    }
  } = props;
  return {
    color: $disabled ? colors.inputPlaceholderDisabled : colors.inputPlaceholder,
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  };
});
StyledPlaceholder.displayName = "StyledPlaceholder";
export const StyledSingleValue = styled('div', props => {
  const {
    $searchable,
    $size,
    $theme,
    $theme: {
      typography
    }
  } = props;
  const font = getFont($size, typography);
  const marginDir = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  return {
    lineHeight: !$searchable ? font.lineHeight : 'inherit',
    boxSizing: 'border-box',
    [marginDir]: $theme.sizing.scale0,
    height: '100%',
    maxWidth: '100%',
    ...ellipsisText
  };
});
StyledSingleValue.displayName = "StyledSingleValue";
export const StyledInputContainer = styled('div', props => {
  const {
    $size,
    $searchable,
    $theme: {
      typography,
      sizing
    },
    $isEmpty
  } = props;
  const font = getFont($size, typography);
  return {
    position: 'relative',
    display: 'inline-block',
    maxWidth: '100%',
    backgroundColor: 'transparent',
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    boxShadow: 'none',
    boxSizing: 'border-box',
    outline: 'none',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: $isEmpty ? 0 : sizing.scale0,
    marginRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    height: String(!$searchable ? font.lineHeight : 'auto'),
    maxHeight: String(font.lineHeight)
  };
});
StyledInputContainer.displayName = "StyledInputContainer";
export const StyledInput = styled('input', props => {
  const {
    $theme: {
      colors,
      typography
    },
    $size,
    $searchable,
    $width
  } = props;
  return { ...getFont($size, typography),
    color: colors.contentPrimary,
    boxSizing: 'content-box',
    width: !$searchable ? '1px' : $width || '100%',
    maxWidth: '100%',
    background: 'transparent',
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    boxShadow: 'none',
    display: 'inline-block',
    outline: 'none',
    marginTop: '0',
    marginBottom: '0',
    marginLeft: '0',
    marginRight: '0',
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    paddingRight: '0'
  };
});
StyledInput.displayName = "StyledInput";
export const StyledInputSizer = styled('div', ({
  $size,
  $theme,
  $theme: {
    typography
  }
}) => {
  const dir = $theme.direction === 'rtl' ? 'right' : 'left';
  return { ...getFont($size, typography),
    position: 'absolute',
    top: 0,
    [dir]: 0,
    visibility: 'hidden',
    height: 0,
    overflow: 'scroll',
    whiteSpace: 'pre'
  };
});
StyledInputSizer.displayName = "StyledInputSizer";
export const StyledIconsContainer = styled('div', ({
  $theme,
  $theme: {
    sizing
  }
}) => {
  const paddingDir = $theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight';
  return {
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    alignSelf: 'stretch',
    [paddingDir]: sizing.scale500
  };
});
StyledIconsContainer.displayName = "StyledIconsContainer";

function getSvgStyles({
  $theme
}) {
  return {
    display: 'inline-block',
    fill: 'currentColor',
    color: 'currentColor',
    height: $theme.sizing.scale600,
    width: $theme.sizing.scale600
  };
}

export const StyledSelectArrow = styled('svg', props => {
  const {
    $theme,
    $disabled
  } = props;
  const {
    colors
  } = $theme;
  return { ...getSvgStyles({
      $theme
    }),
    color: $disabled ? colors.inputTextDisabled : colors.contentPrimary,
    cursor: $disabled ? 'not-allowed' : 'pointer'
  };
});
StyledSelectArrow.displayName = "StyledSelectArrow";
export const StyledClearIcon = styled('svg', props => {
  const {
    $theme
  } = props;
  const {
    colors
  } = $theme;
  return { ...getSvgStyles({
      $theme
    }),
    color: colors.contentPrimary,
    cursor: 'pointer'
  };
});
StyledClearIcon.displayName = "StyledClearIcon";
export const getLoadingIconStyles = props => {
  const {
    $theme
  } = props;
  const {
    colors
  } = $theme;
  return { ...getSvgStyles({
      $theme
    }),
    color: colors.contentPrimary
  };
};
export const StyledSearchIconContainer = styled('div', props => {
  const {
    $disabled,
    $theme
  } = props;
  const {
    colors,
    sizing
  } = $theme;
  const dir = $theme.direction === 'rtl' ? 'right' : 'left';
  return { ...getSvgStyles(props),
    color: $disabled ? colors.inputTextDisabled : colors.contentPrimary,
    cursor: $disabled ? 'not-allowed' : 'pointer',
    position: 'absolute',
    top: 0,
    [dir]: sizing.scale500,
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  };
});
StyledSearchIconContainer.displayName = "StyledSearchIconContainer";