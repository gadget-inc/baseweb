function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

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
      activeItemId: '',
      ...this.props.initialState
    });

    _defineProperty(this, "onChange", params => {
      const {
        onChange
      } = this.props;
      this.internalSetState(STATE_CHANGE_TYPE.change, params.item);

      if (typeof onChange === 'function') {
        onChange(params);
      }
    });

    _defineProperty(this, "internalSetState", (type, item) => {
      let nextState = {};

      if (type === STATE_CHANGE_TYPE.change) {
        nextState = {
          activeItemId: item.itemId
        };
      }

      const newState = this.props.stateReducer ? this.props.stateReducer(type, nextState, this.state) : nextState;
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
    } = this; // $FlowFixMe

    return children({ ...restProps,
      ...this.state,
      onChange
    });
  }

}

_defineProperty(StatefulContainer, "defaultProps", {
  initialState: {},
  stateReducer: defaultStateReducer,
  onChange: () => {}
});

export default StatefulContainer;