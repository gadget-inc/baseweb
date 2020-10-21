function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react'; // Files

import { STATE_CHANGE_TYPE } from './constants.js';
import { clamp } from './utils.js'; // Types

const initialState = {
  currentPage: 1
};
export default class PaginationStatefulContainer extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", this.props.initialState || initialState);

    _defineProperty(this, "onPageChange", ({
      nextPage
    }) => {
      const {
        numPages,
        onPageChange
      } = this.props;
      const {
        currentPage
      } = this.state;
      const clamped = clamp(nextPage, 1, numPages);

      if (clamped !== currentPage) {
        onPageChange && onPageChange({
          nextPage: clamped,
          prevPage: currentPage
        });
        this.internalSetState(STATE_CHANGE_TYPE.changePage, {
          currentPage: clamped
        });
      }
    });
  }

  // Internal set state function that will also invoke stateReducer
  internalSetState(changeType, changes) {
    const {
      stateReducer
    } = this.props;

    if (stateReducer) {
      this.setState(stateReducer(changeType, changes, this.state));
    } else {
      this.setState(changes);
    }
  }

  render() {
    const {
      currentPage
    } = this.state;
    const {
      children
    } = this.props;
    return children({
      currentPage,
      onPageChange: this.onPageChange
    });
  }

}

_defineProperty(PaginationStatefulContainer, "defaultProps", {
  initialState,
  stateReducer: (changeType, changes) => changes
});