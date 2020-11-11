/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
export const StyledRoot = styled('div', ({
  $theme
}) => ({
  display: 'flex',
  alignItems: 'center',
  color: $theme.colors.backgroundInversePrimary,
  ...$theme.typography.font350
}));
StyledRoot.displayName = "StyledRoot";
export const StyledMaxLabel = styled('span', ({
  $theme
}) => {
  const marginStartDir = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  const marginEndDir = $theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';
  return {
    [marginStartDir]: $theme.sizing.scale300,
    [marginEndDir]: $theme.sizing.scale600
  };
});
StyledMaxLabel.displayName = "StyledMaxLabel";
export const StyledDropdownContainer = styled('div', ({
  $theme,
  $isFocusVisible
}) => {
  const marginStartDir = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  const marginEndDir = $theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';
  return {
    position: 'relative',
    outline: $isFocusVisible ? `3px solid ${$theme.colors.accent}` : 'none',
    [marginStartDir]: $theme.sizing.scale600,
    [marginEndDir]: $theme.sizing.scale300
  };
});
StyledDropdownContainer.displayName = "StyledDropdownContainer";