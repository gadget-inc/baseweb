function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getOverride, getOverrideProps } from '../helpers/overrides.js';
import { Checkmark as StyledCheckmark, Input as StyledInput, Label as StyledLabel, Root as StyledRoot, Toggle as StyledToggle, ToggleInner as StyledToggleInner, ToggleTrack as StyledToggleTrack } from './styled-components.js';
import { STYLE_TYPE } from './constants.js';
import { isFocusVisible } from '../utils/focusVisible.js';

const stopPropagation = e => e.stopPropagation();

class StatelessCheckbox extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isFocused: this.props.autoFocus || false,
      isFocusVisible: false,
      isHovered: false,
      isActive: false
    });

    _defineProperty(this, "onMouseEnter", e => {
      ReactDOM.flushSync(() => {
        this.setState({
          isHovered: true
        });
        this.props.onMouseEnter(e);
      });
    });

    _defineProperty(this, "onMouseLeave", e => {
      ReactDOM.flushSync(() => {
        this.setState({
          isHovered: false,
          isActive: false
        });
        this.props.onMouseLeave(e);
      });
    });

    _defineProperty(this, "onMouseDown", e => {
      ReactDOM.flushSync(() => {
        this.setState({
          isActive: true
        });
        this.props.onMouseDown(e);
      });
    });

    _defineProperty(this, "onMouseUp", e => {
      ReactDOM.flushSync(() => {
        this.setState({
          isActive: false
        });
        this.props.onMouseUp(e);
      });
    });

    _defineProperty(this, "onFocus", e => {
      ReactDOM.flushSync(() => {
        this.setState({
          isFocused: true
        });
        this.props.onFocus(e);

        if (isFocusVisible(e)) {
          this.setState({
            isFocusVisible: true
          });
        }
      });
    });

    _defineProperty(this, "onBlur", e => {
      ReactDOM.flushSync(() => {
        this.setState({
          isFocused: false
        });
        this.props.onBlur(e);

        if (this.state.isFocusVisible !== false) {
          this.setState({
            isFocusVisible: false
          });
        }
      });
    });

    _defineProperty(this, "onChange", e => {
      ReactDOM.flushSync(() => {
        this.props.onChange(e);
      });
    });

    _defineProperty(this, "isToggle", () => {
      return this.props.checkmarkType === STYLE_TYPE.toggle || this.props.checkmarkType === STYLE_TYPE.toggle_round;
    });
  }

  componentDidMount() {
    const {
      autoFocus,
      inputRef
    } = this.props;

    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    } // TODO(v11)


    if (process.env.NODE_ENV !== "production") {
      if (this.props.checkmarkType === STYLE_TYPE.toggle) {
        console.warn("baseui:Checkbox The STYLE_TYPE.toggle value on the 'checkmarkType' prop does not conform to the current base design specification. " + 'Please update your code to STYLE_TYPE.toggle_round. This will be updated automatically in a future major version.');
      }

      if (this.props.isError) {
        console.warn('baseui:Checkbox Property "isError" will be removed in the next major version. Use "error" property instead.');
      }
    }
  }

  render() {
    const {
      checkmarkType
    } = this.props;
    const {
      overrides = {},
      labelPlacement = this.isToggle() ? 'left' : 'right',
      inputRef,
      isIndeterminate,
      isError,
      error,
      disabled,
      value,
      name,
      type,
      checked,
      children,
      required,
      title,
      ariaLabel
    } = this.props;
    const {
      Root: RootOverride,
      Checkmark: CheckmarkOverride,
      Label: LabelOverride,
      Input: InputOverride,
      Toggle: ToggleOverride,
      ToggleInner: ToggleInnerOverride,
      ToggleTrack: ToggleTrackOverride
    } = overrides;
    const Root = getOverride(RootOverride) || StyledRoot;
    const Checkmark = getOverride(CheckmarkOverride) || StyledCheckmark;
    const Label = getOverride(LabelOverride) || StyledLabel;
    const Input = getOverride(InputOverride) || StyledInput;
    const Toggle = getOverride(ToggleOverride) || StyledToggle;
    const ToggleInner = getOverride(ToggleInnerOverride) || StyledToggleInner;
    const ToggleTrack = getOverride(ToggleTrackOverride) || StyledToggleTrack;
    const inputEvents = {
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    };
    const mouseEvents = {
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
      onMouseDown: this.onMouseDown,
      onMouseUp: this.onMouseUp
    };
    const sharedProps = {
      $isFocused: this.state.isFocused,
      $isFocusVisible: this.state.isFocusVisible,
      $isHovered: this.state.isHovered,
      $isActive: this.state.isActive,
      $isError: isError,
      $error: error,
      $checked: checked,
      $isIndeterminate: isIndeterminate,
      $required: required,
      $disabled: disabled,
      $value: value,
      $checkmarkType: checkmarkType
    }; // TODO(v11) - add check for children (#2172)

    const labelComp = React.createElement(Label, _extends({
      $labelPlacement: labelPlacement
    }, sharedProps, getOverrideProps(LabelOverride)), children);
    return React.createElement(Root, _extends({
      "data-baseweb": "checkbox",
      title: title || null,
      $labelPlacement: labelPlacement
    }, sharedProps, mouseEvents, getOverrideProps(RootOverride)), (labelPlacement === 'top' || labelPlacement === 'left') && labelComp, this.isToggle() ? React.createElement(ToggleTrack, _extends({
      role: "checkbox",
      "aria-checked": isIndeterminate ? 'mixed' : checked,
      "aria-invalid": error || isError || null
    }, sharedProps, getOverrideProps(ToggleTrackOverride)), React.createElement(Toggle, _extends({}, sharedProps, getOverrideProps(ToggleOverride)), React.createElement(ToggleInner, _extends({}, sharedProps, getOverrideProps(ToggleInnerOverride))))) : React.createElement(Checkmark, _extends({
      role: "checkbox",
      checked: checked,
      "aria-checked": isIndeterminate ? 'mixed' : checked,
      "aria-invalid": error || isError || null
    }, sharedProps, getOverrideProps(CheckmarkOverride))), React.createElement(Input, _extends({
      value: value,
      name: name,
      checked: checked,
      required: required,
      "aria-label": ariaLabel,
      "aria-checked": isIndeterminate ? 'mixed' : checked,
      "aria-describedby": this.props['aria-describedby'],
      "aria-errormessage": this.props['aria-errormessage'],
      "aria-invalid": error || isError || null,
      "aria-required": required || null,
      disabled: disabled,
      type: type,
      ref: inputRef // Prevent a second click event from firing when label is clicked.
      // See https://github.com/uber/baseweb/issues/3847
      ,
      onClick: stopPropagation
    }, sharedProps, inputEvents, getOverrideProps(InputOverride))), (labelPlacement === 'bottom' || labelPlacement === 'right') && labelComp);
  }

}

_defineProperty(StatelessCheckbox, "defaultProps", {
  overrides: {},
  checked: false,
  disabled: false,
  autoFocus: false,
  isIndeterminate: false,
  inputRef: React.createRef(),
  isError: false,
  error: false,
  type: 'checkbox',
  checkmarkType: STYLE_TYPE.default,
  onChange: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onMouseDown: () => {},
  onMouseUp: () => {},
  onFocus: () => {},
  onBlur: () => {}
});

export default StatelessCheckbox;