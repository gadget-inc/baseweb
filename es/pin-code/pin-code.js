function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import MultiRef from 'react-multi-ref';
import defaultProps from './default-props.js';
import { StyledRoot, StyledInputOverrideRoot, StyledInputOverrideInput } from './styled-components.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
import { Input as DefaultInput } from '../input/index.js';
export default class PinCode extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_inputRefs", new MultiRef());

    _defineProperty(this, "state", {
      hasFocus: false
    });
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      const inputRef = this._inputRefs.map.get(0);

      if (inputRef && inputRef.focus) inputRef.focus();
    }
  }

  getMaskStyle(i) {
    if (this.props.values[i] !== '' && typeof this.props.mask === 'string') {
      return this.props.mask;
    } else {
      return this.props.values[i];
    }
  }

  render() {
    const [Root, rootProps] = getOverrides(this.props.overrides.Root, StyledRoot);
    const [Input, inputProps] = getOverrides(this.props.overrides.Input, DefaultInput);
    const baseOverrides = {
      Root: {
        component: StyledInputOverrideRoot
      },
      Input: {
        component: StyledInputOverrideInput,
        props: {
          type: typeof this.props.mask === 'boolean' && this.props.mask ? 'password' : 'text'
        }
      }
    }; // $FlowFixMe

    inputProps.overrides = mergeOverrides(baseOverrides, inputProps.overrides);
    return /*#__PURE__*/React.createElement(Root, _extends({
      "data-baseweb": "pin-code"
    }, rootProps), this.props.values.map((v, i) => {
      return /*#__PURE__*/React.createElement(Input, _extends({
        "aria-label": this.props['aria-label'],
        "aria-labelledby": this.props['aria-labelledby'],
        "aria-describedby": this.props['aria-describedby'],
        autoComplete: this.props.autoComplete,
        disabled: this.props.disabled,
        error: this.props.error,
        id: this.props.id ? this.props.id + '-' + i : null,
        inputMode: "numeric",
        inputRef: this._inputRefs.ref(i),
        key: i,
        name: this.props.name,
        onBlur: () => this.setState({
          hasFocus: false
        }),
        onFocus: () => this.setState({
          hasFocus: true
        }),
        onChange: event => {
          const eventValue = event.target.value; // in the case of an autocomplete or copy and paste

          if (eventValue.length > 2) {
            // see if we can use the string to fill out our values
            if (eventValue.length === this.props.values.length && eventValue.match(/^[0-9]+$/)) {
              this.props.onChange({
                values: eventValue.split(''),
                event
              });
            }

            return;
          } // digit was deleted


          if (eventValue === '') {
            const newValues = this.props.values.slice();
            newValues[i] = '';
            this.props.onChange({
              values: newValues,
              event
            });
            return;
          } // we want to override the input value with the last digit typed


          const currentValue = this.props.values[i];
          let newValue = eventValue;

          if (currentValue[0] === eventValue[0]) {
            newValue = eventValue[1];
          } else if (currentValue[0] === eventValue[1]) {
            newValue = eventValue[0];
          } // only fire a change event if the new value is a digit


          if (newValue.match(/^[0-9]$/)) {
            const newValues = this.props.values.slice();
            newValues[i] = newValue;
            this.props.onChange({
              values: newValues,
              event
            }); // tab to next pin code input if we aren't at end already

            if (this.props.manageFocus && i < this.props.values.length - 1) {
              const inputRef = this._inputRefs.map.get(i + 1);

              if (inputRef && inputRef.focus) inputRef.focus();
            }
          }
        },
        onKeyDown: event => {
          // if we see a backspace/delete and the input is empty, transfer focus backward
          if (this.props.manageFocus && event.key === 'Backspace' && this.props.values[i] === '' && i > 0) {
            const inputRef = this._inputRefs.map.get(i - 1);

            if (inputRef && inputRef.focus) inputRef.focus();
          }
        },
        pattern: "\\d*",
        placeholder: this.state.hasFocus ? '' : this.props.placeholder,
        positive: this.props.positive,
        required: this.props.required,
        size: this.props.size,
        value: this.getMaskStyle(i)
      }, inputProps));
    }));
  }

}

_defineProperty(PinCode, "defaultProps", defaultProps);