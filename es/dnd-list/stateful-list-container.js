function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { arrayMove, arrayRemove } from 'react-movable';

const defaultStateReducer = (type, nextState) => nextState;

class StatefulListContainer extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      items: [],
      ...this.props.initialState
    });

    _defineProperty(this, "onChange", ({
      oldIndex,
      newIndex,
      targetRect
    }) => {
      const newItemsState = newIndex === -1 ? arrayRemove(this.state.items, oldIndex) : arrayMove(this.state.items, oldIndex, newIndex);
      this.props.onChange({
        newState: newItemsState,
        oldIndex,
        newIndex,
        targetRect
      });
      this.internalSetState('change', {
        items: newItemsState
      });
    });
  }

  internalSetState(type, changes) {
    const {
      stateReducer
    } = this.props;
    this.setState(prevState => stateReducer(type, changes, prevState));
  }

  render() {
    const {
      children,
      initialState,
      stateReducer,
      ...restProps
    } = this.props;
    return this.props.children({ ...restProps,
      items: this.state.items,
      onChange: this.onChange
    });
  }

}

_defineProperty(StatefulListContainer, "defaultProps", {
  initialState: {
    items: []
  },
  stateReducer: defaultStateReducer,
  onChange: () => {}
});

export default StatefulListContainer;