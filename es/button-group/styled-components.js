/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { SHAPE } from '../button/index.js';
export const StyledRoot = styled('div', ({
  $shape,
  $lenght,
  $theme
}) => {
  const margin = $lenght === 1 ? undefined : $shape !== SHAPE.default ? `-${$theme.sizing.scale100}` : '-0.5px';
  return {
    display: 'flex',
    marginLeft: margin,
    marginRight: margin
  };
});
StyledRoot.displayName = "StyledRoot";