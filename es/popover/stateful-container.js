function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { ACCESSIBILITY_TYPE, PLACEMENT, STATE_CHANGE_TYPE, TRIGGER_TYPE, POPOVER_MARGIN } from './constants.js';

const defaultStateReducer = (type, nextState) => nextState;

class StatefulContainer extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isOpen: false,
      ...this.props.initialState
    });

    _defineProperty(this, "onBlur", e => {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }

      this.close();
    });

    _defineProperty(this, "onClick", e => {
      if (this.props.onClick) {
        this.props.onClick(e);
      }

      if (this.state.isOpen) {
        this.close();
      } else {
        this.open();
      }
    });

    _defineProperty(this, "onClickOutside", () => {
      this.close();
    });

    _defineProperty(this, "onEsc", () => {
      this.close();
    });

    _defineProperty(this, "onFocus", e => {
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }

      this.open();
    });

    _defineProperty(this, "onMouseEnter", e => {
      if (this.props.onMouseEnter) {
        this.props.onMouseEnter(e);
      }

      this.open();
    });

    _defineProperty(this, "onMouseLeave", e => {
      if (this.props.onMouseLeave) {
        this.props.onMouseLeave(e);
      }

      this.close();
    });

    _defineProperty(this, "onContentClose", () => {
      this.close();
    });

    _defineProperty(this, "renderContent", () => {
      const {
        content
      } = this.props;

      if (typeof content === 'function') {
        return content({
          close: this.onContentClose
        });
      }

      return content;
    });
  }

  open() {
    this.internalSetState(STATE_CHANGE_TYPE.open, {
      isOpen: true
    });

    if (this.props.onOpen) {
      this.props.onOpen();
    }
  }

  close() {
    this.internalSetState(STATE_CHANGE_TYPE.close, {
      isOpen: false
    });

    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  internalSetState(type, changes) {
    const {
      stateReducer
    } = this.props;

    if (typeof stateReducer !== 'function') {
      this.setState(changes);
      return;
    }

    this.setState(prevState => stateReducer(type, changes, prevState));
  }
  /**
   * If user passed a content render prop, we want to give them a
   * callback to close the Popover. This is useful in any case where
   * a dev wants to manually close the popover based on some action.
   *
   * One simple example is a Popover with a "Dismiss" button in it:
   * <StatefulPopover content={({close}) => <button onClick={close}>Dismiss</button>}>
   *  Click me
   * </StatefulPopover>
   */


  render() {
    const {
      accessibilityType,
      autoFocus,
      dismissOnClickOutside,
      dismissOnEsc,
      focusLock,
      ignoreBoundary,
      mountNode,
      onBlur,
      onClick,
      onFocus,
      onMouseEnter,
      onMouseLeave,
      onMouseEnterDelay,
      onMouseLeaveDelay,
      overrides,
      placement,
      popperOptions,
      renderAll,
      returnFocus,
      showArrow,
      triggerType,
      popoverMargin
    } = this.props;
    const popoverProps = {
      accessibilityType,
      autoFocus,
      content: this.renderContent,
      focusLock,
      ignoreBoundary,
      isOpen: this.state.isOpen,
      mountNode,
      onBlur,
      onClick,
      onFocus,
      onMouseEnter,
      onMouseLeave,
      onMouseEnterDelay,
      onMouseLeaveDelay,
      overrides,
      placement,
      popperOptions,
      renderAll,
      returnFocus,
      showArrow,
      triggerType,
      popoverMargin
    };

    if (dismissOnClickOutside) {
      popoverProps.onClickOutside = this.onClickOutside;
    }

    if (dismissOnEsc) {
      popoverProps.onEsc = this.onEsc;
    }

    if (triggerType === TRIGGER_TYPE.hover) {
      popoverProps.onBlur = this.onBlur;
      popoverProps.onFocus = this.onFocus;
      popoverProps.onMouseEnter = this.onMouseEnter;
      popoverProps.onMouseLeave = this.onMouseLeave;
    } else {
      popoverProps.onClick = this.onClick;
    }

    return this.props.children(popoverProps);
  }

}

_defineProperty(StatefulContainer, "defaultProps", {
  accessibilityType: ACCESSIBILITY_TYPE.menu,
  ignoreBoundary: false,
  overrides: {},
  onMouseEnterDelay: 200,
  onMouseLeaveDelay: 200,
  placement: PLACEMENT.auto,
  popperOptions: {},
  showArrow: false,
  triggerType: TRIGGER_TYPE.click,
  dismissOnClickOutside: true,
  dismissOnEsc: true,
  stateReducer: defaultStateReducer,
  popoverMargin: POPOVER_MARGIN
});

export default StatefulContainer;