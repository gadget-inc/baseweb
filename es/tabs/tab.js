function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { Tab as StyledTab } from './styled-components.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';

class TabComponent extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isFocusVisible: false
    });

    _defineProperty(this, "handleFocus", event => {
      if (isFocusVisible(event)) {
        this.setState({
          isFocusVisible: true
        });
      }
    });

    _defineProperty(this, "handleBlur", event => {
      if (this.state.isFocusVisible !== false) {
        this.setState({
          isFocusVisible: false
        });
      }
    });

    _defineProperty(this, "onClick", e => {
      const {
        disabled,
        onSelect,
        onClick
      } = this.props;

      if (disabled) {
        return;
      }

      typeof onClick === 'function' && onClick(e);
      typeof onSelect === 'function' && onSelect();
      return;
    });

    _defineProperty(this, "onKeyDown", e => {
      const {
        disabled,
        onSelect,
        onKeyDown
      } = this.props;

      if (disabled) {
        return;
      }

      typeof onKeyDown === 'function' && onKeyDown(e); // toggle on Enter or Space button pressed

      if (e.key === 'Enter' || e.which === 32) {
        typeof onSelect === 'function' && onSelect();
        e.which === 32 && e.preventDefault(); // prevent jumping scroll when using Space
      }

      return;
    });
  }

  getSharedProps() {
    const {
      disabled,
      active,
      $orientation
    } = this.props;
    return {
      $disabled: disabled,
      $active: active,
      $orientation: $orientation
    };
  }

  render() {
    const {
      active,
      disabled,
      id,
      overrides = {},
      children
    } = this.props;
    const sharedProps = this.getSharedProps();
    const {
      Tab: TabOverride
    } = overrides;
    const [Tab, tabProps] = getOverrides(TabOverride, StyledTab);
    return /*#__PURE__*/React.createElement(Tab, _extends({
      $isFocusVisible: this.state.isFocusVisible,
      tabIndex: disabled ? -1 : 0,
      role: "tab",
      id: id,
      "aria-selected": active,
      "aria-disabled": disabled || null
    }, sharedProps, tabProps, {
      onFocus: forkFocus(tabProps, this.handleFocus),
      onBlur: forkBlur(tabProps, this.handleBlur),
      onClick: this.onClick,
      onKeyDown: this.onKeyDown
    }), children);
  }

}

_defineProperty(TabComponent, "defaultProps", {
  disabled: false,
  expanded: false,
  onSelect: () => {},
  onClick: () => {},
  onKeyDown: () => {},
  title: ''
});

export default TabComponent;