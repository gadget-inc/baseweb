function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Tabs } from './tabs.js';
import { STATE_CHANGE_TYPE } from './constants.js';

const getInitialState = (children, initialState) => {
  if (initialState && initialState.activeKey) {
    return initialState;
  } else {
    const firstKey = React.Children.map(children, (child, index) => child.key || String(index))[0];
    return {
      activeKey: firstKey
    };
  }
};

const defaultStateReducer = (state, action) => {
  if (action.type === STATE_CHANGE_TYPE.change) {
    return {
      activeKey: action.payload
    };
  }

  return state;
};

export function StatefulTabs(props) {
  const {
    children,
    initialState,
    stateReducer = defaultStateReducer,
    onChange,
    ...restProps
  } = props;
  const [state, dispatch] = React.useReducer(stateReducer, getInitialState(children, initialState));
  const handleChange = React.useCallback(params => {
    const {
      activeKey
    } = params;
    dispatch({
      type: STATE_CHANGE_TYPE.change,
      payload: activeKey
    });
    if (typeof onChange === 'function') onChange(params);
  }, []);
  return React.createElement(Tabs, _extends({}, restProps, {
    activeKey: state.activeKey,
    onChange: handleChange
  }), children);
}