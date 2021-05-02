function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { STATE_CHANGE_TYPE } from './constants.js';

const defaultStateReducer = (type, nextState) => nextState;

class StatefulPanelContainer extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      expanded: false,
      ...this.props.initialState
    });

    _defineProperty(this, "onChange", () => {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange({
          expanded: !this.state.expanded
        });
      }

      this.internalSetState(STATE_CHANGE_TYPE.expand, {
        expanded: !this.state.expanded
      });
    });
  }

  internalSetState(type, changes) {
    const {
      stateReducer
    } = this.props;
    this.setState(prevState => stateReducer ? stateReducer(type, changes, prevState) : changes);
  }

  render() {
    const {
      children,
      initialState,
      stateReducer,
      ...restProps
    } = this.props;
    return this.props.children({ ...restProps,
      ...this.state,
      onChange: this.onChange
    });
  }

}

_defineProperty(StatefulPanelContainer, "defaultProps", {
  initialState: {
    expanded: false
  },
  stateReducer: defaultStateReducer,
  onChange: () => {}
});

export default StatefulPanelContainer;