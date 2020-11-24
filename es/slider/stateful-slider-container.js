function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { STATE_CHANGE_TYPE } from './constants.js';

const defaultStateReducer = (type, nextState) => nextState;

class StatefulSliderContainer extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onChange", params => {
      this.internalSetState(STATE_CHANGE_TYPE.change, params);
      return this.props.onChange({ ...params
      });
    });

    _defineProperty(this, "onFinalChange", params => {
      this.internalSetState(STATE_CHANGE_TYPE.finalChange, params);
      return this.props.onFinalChange({ ...params
      });
    });

    _defineProperty(this, "internalSetState", (type, {
      value
    }) => {
      const nextState = {
        value
      };
      const {
        stateReducer
      } = this.props;
      const newState = stateReducer(type, nextState, this.state);
      this.setState(newState);
    });

    this.state = {
      value: props.initialState && Array.isArray(props.initialState.value) ? props.initialState.value : [Math.round((props.max - props.min) / 2) + props.min]
    };
  }

  render() {
    const {
      children,
      initialState,
      // eslint-disable-line no-unused-vars
      stateReducer,
      // eslint-disable-line no-unused-vars
      ...restProps
    } = this.props;
    return children({ ...restProps,
      ...this.state,
      onChange: this.onChange,
      onFinalChange: this.onFinalChange
    });
  }

}

_defineProperty(StatefulSliderContainer, "defaultProps", {
  stateReducer: defaultStateReducer,
  min: 0,
  max: 100,
  step: 1,
  marks: false,
  onChange: () => {},
  onFinalChange: () => {}
});

export default StatefulSliderContainer;