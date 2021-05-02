function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* global window */
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { ADJOINED, SIZE, CUSTOM_INPUT_TYPE } from './constants.js';
import { InputContainer as StyledInputContainer, Input as StyledInput, StyledClearIcon, StyledClearIconContainer, StyledMaskToggleButton } from './styled-components.js';
import { getSharedProps } from './utils.js';
import Hide from '../icon/hide.js';
import Show from '../icon/show.js';
import createEvent from '../utils/create-event.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';

const NullComponent = () => null;

class BaseInput extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "inputRef", this.props.inputRef || /*#__PURE__*/React.createRef());

    _defineProperty(this, "state", {
      isFocused: this.props.autoFocus || false,
      isMasked: this.props.type === 'password',
      initialType: this.props.type,
      isFocusVisibleForClear: false,
      isFocusVisibleForMaskToggle: false
    });

    _defineProperty(this, "onInputKeyDown", e => {
      if (this.props.clearOnEscape && e.key === 'Escape' && this.inputRef.current) {
        this.clearValue(); // prevent event from closing modal or doing something unexpected

        e.stopPropagation();
      }
    });

    _defineProperty(this, "onClearIconClick", () => {
      if (this.inputRef.current) this.clearValue(); // return focus to the input after click

      if (this.inputRef.current) this.inputRef.current.focus();
    });

    _defineProperty(this, "onFocus", e => {
      this.setState({
        isFocused: true
      });
      this.props.onFocus(e);
    });

    _defineProperty(this, "onBlur", e => {
      this.setState({
        isFocused: false
      });
      this.props.onBlur(e);
    });

    _defineProperty(this, "handleFocusForMaskToggle", event => {
      if (isFocusVisible(event)) {
        this.setState({
          isFocusVisibleForMaskToggle: true
        });
      }
    });

    _defineProperty(this, "handleBlurForMaskToggle", event => {
      if (this.state.isFocusVisibleForMaskToggle !== false) {
        this.setState({
          isFocusVisibleForMaskToggle: false
        });
      }
    });

    _defineProperty(this, "handleFocusForClear", event => {
      if (isFocusVisible(event)) {
        this.setState({
          isFocusVisibleForClear: true
        });
      }
    });

    _defineProperty(this, "handleBlurForClear", event => {
      if (this.state.isFocusVisibleForClear !== false) {
        this.setState({
          isFocusVisibleForClear: false
        });
      }
    });
  }

  componentDidMount() {
    const {
      autoFocus,
      clearable
    } = this.props;

    if (this.inputRef.current) {
      if (autoFocus) {
        this.inputRef.current.focus();
      }

      if (clearable) {
        this.inputRef.current.addEventListener('keydown', this.onInputKeyDown);
      }
    }
  }

  componentWillUnmount() {
    const {
      clearable
    } = this.props;

    if (clearable && this.inputRef.current) {
      this.inputRef.current.removeEventListener('keydown', this.onInputKeyDown);
    }
  }

  clearValue() {
    // trigger a fake input change event (as if all text was deleted)
    const input = this.inputRef.current;

    if (input) {
      const nativeInputValue = Object.getOwnPropertyDescriptor(this.props.type === CUSTOM_INPUT_TYPE.textarea ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype, 'value');

      if (nativeInputValue) {
        const nativeInputValueSetter = nativeInputValue.set;

        if (nativeInputValueSetter) {
          nativeInputValueSetter.call(input, '');
          const event = createEvent('input');
          input.dispatchEvent(event);
        }
      }
    }
  }

  getInputType() {
    // If the type prop is equal to "password" we allow the user to toggle between
    // masked and non masked text. Internally, we toggle between type "password"
    // and "text".
    if (this.props.type === 'password') {
      return this.state.isMasked ? 'password' : 'text';
    } else {
      return this.props.type;
    }
  }

  renderMaskToggle() {
    if (this.props.type !== 'password') return null;
    const [MaskToggleButton, maskToggleButtonProps] = getOverrides(this.props.overrides.MaskToggleButton, StyledMaskToggleButton);
    const [MaskToggleShowIcon, maskToggleIconShowProps] = getOverrides(this.props.overrides.MaskToggleShowIcon, Show);
    const [MaskToggleHideIcon, maskToggleIconHideProps] = getOverrides(this.props.overrides.MaskToggleHideIcon, Hide);
    const label = this.state.isMasked ? 'Show password text' : 'Hide password text';
    const iconSize = {
      [SIZE.mini]: '12px',
      [SIZE.compact]: '16px',
      [SIZE.default]: '20px',
      [SIZE.large]: '24px'
    }[this.props.size];
    return /*#__PURE__*/React.createElement(MaskToggleButton, _extends({
      $size: this.props.size,
      $isFocusVisible: this.state.isFocusVisibleForMaskToggle,
      "aria-label": label,
      onClick: () => this.setState(state => ({
        isMasked: !state.isMasked
      })),
      title: label,
      type: "button"
    }, maskToggleButtonProps, {
      onFocus: forkFocus(maskToggleButtonProps, this.handleFocusForMaskToggle),
      onBlur: forkBlur(maskToggleButtonProps, this.handleBlurForMaskToggle)
    }), this.state.isMasked ? /*#__PURE__*/React.createElement(MaskToggleShowIcon, _extends({
      size: iconSize,
      title: label
    }, maskToggleIconShowProps)) : /*#__PURE__*/React.createElement(MaskToggleHideIcon, _extends({
      size: iconSize,
      title: label
    }, maskToggleIconHideProps)));
  }

  renderClear() {
    const {
      clearable,
      value,
      disabled,
      overrides = {}
    } = this.props;

    if (disabled || !clearable || value == null || typeof value === 'string' && value.length === 0) {
      return null;
    }

    const [ClearIconContainer, clearIconContainerProps] = getOverrides(overrides.ClearIconContainer, StyledClearIconContainer);
    const [ClearIcon, clearIconProps] = getOverrides(overrides.ClearIcon, StyledClearIcon);
    const ariaLabel = 'Clear value';
    const sharedProps = getSharedProps(this.props, this.state);
    const iconSize = {
      [SIZE.mini]: '14px',
      [SIZE.compact]: '20px',
      [SIZE.default]: '26px',
      [SIZE.large]: '32px'
    }[this.props.size];
    return /*#__PURE__*/React.createElement(ClearIconContainer, _extends({
      $alignTop: this.props.type === CUSTOM_INPUT_TYPE.textarea
    }, sharedProps, clearIconContainerProps), /*#__PURE__*/React.createElement(ClearIcon, _extends({
      size: iconSize,
      tabIndex: 0,
      title: ariaLabel,
      "aria-label": ariaLabel,
      onClick: this.onClearIconClick,
      onKeyDown: event => {
        if (event.key && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault();
          this.onClearIconClick();
        }
      },
      role: "button",
      $isFocusVisible: this.state.isFocusVisibleForClear
    }, sharedProps, clearIconProps, {
      onFocus: forkFocus(clearIconProps, this.handleFocusForClear),
      onBlur: forkBlur(clearIconProps, this.handleBlurForClear)
    })));
  }

  render() {
    const {
      value,
      type,
      overrides: {
        InputContainer: InputContainerOverride,
        Input: InputOverride,
        Before: BeforeOverride,
        After: AfterOverride
      }
    } = this.props; // more here https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#Preventing_autofilling_with_autocompletenew-password

    const autoComplete = this.state.initialType === 'password' && this.props.autoComplete === BaseInput.defaultProps.autoComplete ? 'new-password' : this.props.autoComplete;
    const sharedProps = getSharedProps(this.props, this.state);
    const [InputContainer, inputContainerProps] = getOverrides(InputContainerOverride, StyledInputContainer);
    const [Input, inputProps] = getOverrides(InputOverride, StyledInput);
    const [Before, beforeProps] = getOverrides(BeforeOverride, NullComponent);
    const [After, afterProps] = getOverrides(AfterOverride, NullComponent);
    return /*#__PURE__*/React.createElement(InputContainer, _extends({
      "data-baseweb": this.props['data-baseweb'] || 'base-input'
    }, sharedProps, inputContainerProps), /*#__PURE__*/React.createElement(Before, _extends({}, sharedProps, beforeProps)), /*#__PURE__*/React.createElement(Input, _extends({
      ref: this.inputRef,
      "aria-activedescendant": this.props['aria-activedescendant'],
      "aria-autocomplete": this.props['aria-autocomplete'],
      "aria-controls": this.props['aria-controls'],
      "aria-errormessage": this.props['aria-errormessage'],
      "aria-haspopup": this.props['aria-haspopup'],
      "aria-label": this.props['aria-label'],
      "aria-labelledby": this.props['aria-labelledby'],
      "aria-describedby": this.props['aria-describedby'],
      "aria-invalid": this.props.error,
      "aria-required": this.props.required,
      autoComplete: autoComplete,
      disabled: this.props.disabled,
      id: this.props.id,
      inputMode: this.props.inputMode,
      maxLength: this.props.maxLength,
      name: this.props.name,
      onBlur: this.onBlur,
      onChange: this.props.onChange,
      onFocus: this.onFocus,
      onKeyDown: this.props.onKeyDown,
      onKeyPress: this.props.onKeyPress,
      onKeyUp: this.props.onKeyUp,
      pattern: this.props.pattern,
      placeholder: this.props.placeholder,
      type: this.getInputType(),
      required: this.props.required,
      role: this.props.role,
      value: this.props.value,
      min: this.props.min,
      max: this.props.max,
      step: this.props.step,
      rows: this.props.type === CUSTOM_INPUT_TYPE.textarea ? this.props.rows : null
    }, sharedProps, inputProps), type === CUSTOM_INPUT_TYPE.textarea ? value : null), this.renderClear(), this.renderMaskToggle(), /*#__PURE__*/React.createElement(After, _extends({}, sharedProps, afterProps)));
  }

}

_defineProperty(BaseInput, "defaultProps", {
  'aria-activedescendant': null,
  'aria-autocomplete': null,
  'aria-controls': null,
  'aria-errormessage': null,
  'aria-haspopup': null,
  'aria-label': null,
  'aria-labelledby': null,
  'aria-describedby': null,
  adjoined: ADJOINED.none,
  autoComplete: 'on',
  autoFocus: false,
  disabled: false,
  error: false,
  positive: false,
  name: '',
  inputMode: 'text',
  onBlur: () => {},
  onChange: () => {},
  onKeyDown: () => {},
  onKeyPress: () => {},
  onKeyUp: () => {},
  onFocus: () => {},
  onClear: () => {},
  clearable: false,
  clearOnEscape: true,
  overrides: {},
  pattern: null,
  placeholder: '',
  required: false,
  role: null,
  size: SIZE.default,
  type: 'text'
});

export default BaseInput;