function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { STATE_TYPE } from './constants.js';

const defaultStateReducer = (type, nextState) => nextState;

class StatefulCheckboxContainer extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onChange", e => {
      this.stateReducer(STATE_TYPE.change, e);
      const {
        onChange
      } = this.props;
      onChange && onChange(e);
    });

    _defineProperty(this, "onMouseEnter", e => {
      const {
        onMouseEnter
      } = this.props;
      onMouseEnter && onMouseEnter(e);
    });

    _defineProperty(this, "onMouseLeave", e => {
      const {
        onMouseLeave
      } = this.props;
      onMouseLeave && onMouseLeave(e);
    });

    _defineProperty(this, "onFocus", e => {
      const {
        onFocus
      } = this.props;
      onFocus && onFocus(e);
    });

    _defineProperty(this, "onBlur", e => {
      const {
        onBlur
      } = this.props;
      onBlur && onBlur(e);
    });

    _defineProperty(this, "stateReducer", (type, e) => {
      let nextState = {};
      const {
        stateReducer
      } = this.props;

      switch (type) {
        case STATE_TYPE.change:
          nextState = {
            checked: e.target.checked
          };
          break;
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
      onChange,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur
    } = this;
    return children({ ...restProps,
      checked: this.state.checked,
      isIndeterminate: this.state.isIndeterminate,
      onChange,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur
    });
  }

}

_defineProperty(StatefulCheckboxContainer, "defaultProps", {
  initialState: {
    checked: false,
    isIndeterminate: false
  },
  stateReducer: defaultStateReducer,
  onChange: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onFocus: () => {},
  onBlur: () => {}
});

export default StatefulCheckboxContainer;