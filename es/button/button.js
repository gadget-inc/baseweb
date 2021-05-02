function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { BaseButton as StyledBaseButton, LoadingSpinner as StyledLoadingSpinner, LoadingSpinnerContainer as StyledLoadingSpinnerContainer } from './styled-components.js';
import { getSharedProps } from './utils.js';
import ButtonInternals from './button-internals.js';
import { defaultProps } from './default-props.js';
import { getOverrides } from '../helpers/overrides.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';

class Button extends React.Component {
  constructor(..._args) {
    super(..._args);

    _defineProperty(this, "state", {
      isFocusVisible: false
    });

    _defineProperty(this, "internalOnClick", (...args) => {
      const {
        isLoading,
        onClick
      } = this.props;

      if (isLoading) {
        args[0].preventDefault();
        return;
      }

      onClick && onClick(...args);
    });

    _defineProperty(this, "handleFocus", event => {
      if (isFocusVisible(event)) {
        this.setState({
          isFocusVisible: true
        });
      }
    });

    _defineProperty(this, "handleBlur", event => {
      if (this.state.isFocusVisible !== false) {
        this.setState({
          isFocusVisible: false
        });
      }
    });
  }

  render() {
    const {
      overrides = {},
      size,
      kind,
      shape,
      isLoading,
      isSelected,
      // Removing from restProps
      startEnhancer,
      endEnhancer,
      children,
      forwardedRef,
      ...restProps
    } = this.props; // Get overrides

    const [BaseButton, baseButtonProps] = getOverrides( // adding both (1) BaseButton and (2) Root
    // (1) because it's a Button under the hood
    // (2) because we want consistency with the rest of the components
    overrides.BaseButton || overrides.Root, StyledBaseButton);
    const [LoadingSpinner, loadingSpinnerProps] = getOverrides(overrides.LoadingSpinner, StyledLoadingSpinner);
    const [LoadingSpinnerContainer, loadingSpinnerContainerProps] = getOverrides(overrides.LoadingSpinnerContainer, StyledLoadingSpinnerContainer);
    const sharedProps = { ...getSharedProps(this.props),
      $isFocusVisible: this.state.isFocusVisible
    };
    return /*#__PURE__*/React.createElement(BaseButton, _extends({
      ref: forwardedRef,
      "data-baseweb": "button"
    }, isLoading ? {
      // we want the screenreader to say loading and also the content of child
      // this seems like the best option even tho the child might not be a string
      ['aria-label']: `loading ${typeof this.props.children === 'string' ? this.props.children : ''}`,
      ['aria-busy']: 'true'
    } : {}, sharedProps, restProps, baseButtonProps, {
      // Applies last to override passed in onClick
      onClick: this.internalOnClick,
      onFocus: forkFocus({ ...restProps,
        ...baseButtonProps
      }, this.handleFocus),
      onBlur: forkBlur({ ...restProps,
        ...baseButtonProps
      }, this.handleBlur)
    }), isLoading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        opacity: 0,
        display: 'flex',
        height: '0px'
      }
    }, /*#__PURE__*/React.createElement(ButtonInternals, this.props)), /*#__PURE__*/React.createElement(LoadingSpinnerContainer, _extends({}, sharedProps, loadingSpinnerContainerProps), /*#__PURE__*/React.createElement(LoadingSpinner, _extends({}, sharedProps, loadingSpinnerProps)))) : /*#__PURE__*/React.createElement(ButtonInternals, this.props));
  }

}

_defineProperty(Button, "defaultProps", defaultProps);

const ForwardedButton = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(Button, _extends({
  forwardedRef: ref
}, props)));
ForwardedButton.displayName = 'Button';
export default ForwardedButton;