function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable flowtype/no-weak-types */
import * as React from 'react';
import { getInitialStyle } from 'styletron-standard';
import { LightTheme } from '../../themes/index.js';
import createMockTheme from '../../test/create-mock-theme.js';
const MOCK_THEME = createMockTheme(LightTheme);

const IDENTITY = x => x;

export function useStyletron() {
  function css(styles) {
    return {
      label: 'useStyletron mock describes the applied css properties',
      ...styles
    };
  }

  return [css, MOCK_THEME];
}
export function styled(ElementName, objOrFn = {}) {
  class MockStyledComponent extends React.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {});
    }

    static getDerivedStateFromProps(props) {
      const styleFnArg = { ...props,
        // If we use defaultProps, $theme unnecessarily ends up in snapshots
        $theme: props.$theme || MOCK_THEME
      };
      let styles = typeof objOrFn === 'function' ? objOrFn(styleFnArg) : objOrFn; // Check for runtime overrides

      let {
        $style
      } = props;

      if (typeof $style === 'function') {
        $style = $style(styleFnArg);
      }

      if ($style) {
        styles = { ...styles,
          ...$style
        };
      }

      return {
        styles
      };
    }

    getPassedProps() {
      const {
        forwardedRef,
        ...restProps
      } = this.props;
      return Object.keys(restProps).reduce((acc, key) => {
        if (key[0] !== '$') {
          acc[key] = restProps[key];
        }

        return acc;
      }, {});
    }

    render() {
      return React.createElement(ElementName, _extends({
        ref: this.props.forwardedRef,
        "styled-component": "true",
        "test-style": JSON.stringify(this.state.styles, null, 2)
      }, this.getPassedProps()));
    }

  } // $FlowFixMe


  _defineProperty(MockStyledComponent, "displayName", 'MockStyledComponent');

  MockStyledComponent.__STYLETRON__ = {
    getInitialStyle,
    wrapper: IDENTITY,
    base: ElementName
  };
  return React.forwardRef((props, ref) => React.createElement(MockStyledComponent, _extends({
    forwardedRef: ref
  }, props)));
}
export const withStyle = styled;
export function withWrapper(StyledElement, wrapperFn) {
  return React.forwardRef((props, ref) => wrapperFn(StyledElement)({
    ref: ref,
    ...props,
    $theme: MOCK_THEME
  }));
}