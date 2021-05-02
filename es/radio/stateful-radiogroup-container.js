function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { STATE_TYPE } from './constants.js';

const defaultStateReducer = (type, nextState) => nextState;

class StatefulRadioGroupContainer extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onChange", e => {
      this.stateReducer(STATE_TYPE.change, e);
      const {
        onChange
      } = this.props;
      onChange && onChange(e);
    });

    _defineProperty(this, "stateReducer", (type, e) => {
      let nextState = {};
      const {
        stateReducer
      } = this.props;

      if (type === STATE_TYPE.change) {
        nextState = {
          value: e.target.value
        };
      }

      const newState = stateReducer(type, nextState, this.state, e);
      this.setState(newState);
    });

    const {
      initialState
    } = this.props;
    this.state = { ...initialState
    };
  }

  render() {
    const {
      children = childProps => null,
      // eslint-disable-line no-unused-vars
      initialState,
      // eslint-disable-line no-unused-vars
      stateReducer,
      // eslint-disable-line no-unused-vars
      ...restProps
    } = this.props;
    const {
      onChange
    } = this;
    return children({ ...restProps,
      value: this.state.value,
      onChange
    });
  }

}

_defineProperty(StatefulRadioGroupContainer, "defaultProps", {
  initialState: {
    value: ''
  },
  stateReducer: defaultStateReducer,
  onChange: () => {}
});

export default StatefulRadioGroupContainer;