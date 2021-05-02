function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { STATE_CHANGE_TYPE } from './constants.js';

const defaultStateReducer = (type, nextState) => nextState;

class StatefulContainer extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: '',
      ...this.props.initialState
    });

    _defineProperty(this, "onChange", e => {
      const nextState = {
        value: e.target.value
      };
      this.internalSetState(STATE_CHANGE_TYPE.change, nextState);
      this.props.onChange(e);
    });

    _defineProperty(this, "internalSetState", (type, nextState) => {
      const newState = this.props.stateReducer(type, nextState, this.state);
      this.setState(newState);
    });
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const {
      children,
      initialState,
      stateReducer,
      ...restProps
    } = this.props;
    const {
      onChange
    } = this;
    return children({ ...restProps,
      ...this.state,
      onChange
    });
  }

}

_defineProperty(StatefulContainer, "defaultProps", {
  initialState: {},
  stateReducer: defaultStateReducer,
  onChange: () => {},
  onClear: () => {}
});

export default StatefulContainer;