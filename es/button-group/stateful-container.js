function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { MODE, STATE_CHANGE_TYPE } from './constants.js';

// handles the case where selected = 0
function isSelectedDefined(selected) {
  return Array.isArray(selected) || typeof selected === 'number';
}

function defaultStateReducer(type, nextState, currentState) {
  return nextState;
}

export default class StatefulContainer extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "changeState", nextState => {
      if (this.props.stateReducer) {
        this.setState(this.props.stateReducer(STATE_CHANGE_TYPE.change, nextState, this.state));
      } else {
        this.setState(nextState);
      }
    });

    _defineProperty(this, "onClick", (event, index) => {
      if (this.props.mode === MODE.radio) {
        if (this.state.selected.length === 0 || this.state.selected[0] !== index) {
          this.changeState({
            selected: [index]
          });
        } else {
          this.changeState({
            selected: []
          });
        }
      }

      if (this.props.mode === MODE.checkbox) {
        if (!this.state.selected.includes(index)) {
          this.changeState({
            selected: [...this.state.selected, index]
          });
        } else {
          this.changeState({
            selected: this.state.selected.filter(value => value !== index)
          });
        }
      }

      if (this.props.onClick) {
        this.props.onClick(event, index);
      }
    });

    const {
      initialState = {}
    } = props;
    const {
      selected = []
    } = initialState;
    this.state = {
      selected: isSelectedDefined(selected) ? [].concat(selected) : []
    };
  }

  render() {
    const {
      initialState,
      stateReducer,
      ...props
    } = this.props;
    return this.props.children({ ...props,
      onClick: this.onClick,
      selected: this.state.selected
    });
  }

}

_defineProperty(StatefulContainer, "defaultProps", {
  initialState: {
    selected: []
  },
  stateReducer: defaultStateReducer
});