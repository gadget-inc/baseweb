function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// The `CountrySelect` component is not designed to be used
// as a standalone component and we should deprecate it
// in the next v11 major version in favor of `CountryPicker`.
// The `DialCode` rendering should be a part of the composed
// non-split phone input.
import React from 'react';
import { StyledDialCode, StyledCountrySelectContainer } from './styled-components.js';
import BaseCountryPicker from './base-country-picker.js';
import { SingleSelect as DefaultSelect } from '../select/index.js';
import { getOverrides, mergeOverrides, withOverrides } from '../helpers/overrides.js';
import defaultProps from './default-props.js';
CountrySelect.defaultProps = {
  disabled: defaultProps.disabled,
  inputRef: {
    current: null
  },
  maxDropdownHeight: defaultProps.maxDropdownHeight,
  maxDropdownWidth: defaultProps.maxDropdownWidth,
  overrides: {},
  size: defaultProps.size,
  error: defaultProps.error,
  positive: defaultProps.positive,
  required: defaultProps.required
};

function CountrySelect(props) {
  const {
    country,
    disabled,
    error,
    overrides,
    positive,
    required,
    size
  } = props;
  const sharedProps = {
    $disabled: disabled,
    $error: error,
    $positive: positive,
    $required: required,
    $size: size
  };
  const baseSelectOverrides = {
    ControlContainer: {
      style: props => {
        if (!props.$isFocused && !props.$isPseudoFocused) {
          return {
            backgroundColor: 'transparent',
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent'
          };
        }
      }
    }
  };
  const [Select, selectProps] = getOverrides(overrides.CountrySelect, DefaultSelect); // $FlowFixMe

  const selectOverrides = mergeOverrides(baseSelectOverrides, {
    Dropdown: overrides.CountrySelectDropdown,
    DropdownListItem: overrides.CountrySelectDropdownListItem
  }); // $FlowFixMe

  selectProps.overrides = mergeOverrides(selectOverrides, // $FlowFixMe
  selectProps.overrides);
  const [CountrySelectContainer, countrySelectContainerProps] = getOverrides(overrides.CountrySelectContainer, StyledCountrySelectContainer);
  const [DialCode, dialCodeProps] = getOverrides(overrides.DialCode, StyledDialCode);
  return /*#__PURE__*/React.createElement(CountrySelectContainer, countrySelectContainerProps, /*#__PURE__*/React.createElement(BaseCountryPicker, _extends({}, props, {
    overrides: { ...overrides,
      CountrySelect: {
        component: Select,
        props: selectProps
      }
    }
  })), /*#__PURE__*/React.createElement(DialCode, _extends({}, sharedProps, dialCodeProps), country.dialCode));
} //$FlowFixMe


export default withOverrides(CountrySelect, 'CountrySelect');