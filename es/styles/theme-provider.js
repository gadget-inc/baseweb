/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { LightTheme } from '../themes/index.js';
export const ThemeContext = /*#__PURE__*/React.createContext(LightTheme);

const ThemeProvider = props => {
  const {
    theme,
    children
  } = props;
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: theme
  }, children);
};

export default ThemeProvider;