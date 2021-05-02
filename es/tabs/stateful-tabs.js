function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import Tabs from './tabs.js';
import { STATE_CHANGE_TYPE } from './constants.js';
export default class StatefulTabs extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      activeKey: this.getInitialKey()
    });

    _defineProperty(this, "onTabChange", newState => {
      this.internalSetState(STATE_CHANGE_TYPE.change, newState);
    });
  }

  internalSetState(type, changes) {
    const {
      stateReducer,
      onChange
    } = this.props;
    const newState = stateReducer(type, changes, this.state);
    this.setState(newState);
    typeof onChange === 'function' && onChange(newState);
  }

  getInitialKey() {
    const {
      initialState,
      children
    } = this.props;

    if (initialState && initialState.activeKey) {
      return initialState.activeKey;
    } else {
      return React.Children.map(children, (child, index) => child.key || String(index))[0];
    }
  }

  render() {
    const {
      initialState,
      stateReducer,
      ...restProps
    } = this.props;
    return /*#__PURE__*/React.createElement(Tabs, _extends({}, restProps, {
      activeKey: this.state.activeKey,
      onChange: this.onTabChange
    }));
  }

}

_defineProperty(StatefulTabs, "defaultProps", {
  disabled: false,
  onChange: () => {},
  overrides: {},
  stateReducer: (type, newState) => newState
});