function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

const defaultStateReducer = (type, nextState) => nextState;

class StatefulSelectContainer extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", { ...this.props.initialState
    });

    _defineProperty(this, "onChange", params => {
      this.internalSetState(params);
      this.props.onChange(params);
    });

    _defineProperty(this, "internalSetState", params => {
      const {
        stateReducer
      } = this.props;
      const nextState = {
        value: params.value
      };
      this.setState(stateReducer(params.type, nextState, this.state));
    });
  }

  render() {
    const {
      children,
      initialState,
      // eslint-disable-line no-unused-vars
      stateReducer,
      // eslint-disable-line no-unused-vars
      ...restProps
    } = this.props; // $FlowFixMe

    return children({ ...restProps,
      ...this.state,
      onChange: this.onChange
    });
  }

}

_defineProperty(StatefulSelectContainer, "defaultProps", {
  initialState: {
    value: []
  },
  onChange: () => {},
  overrides: {},
  stateReducer: defaultStateReducer
});

export default StatefulSelectContainer;