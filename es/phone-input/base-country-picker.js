function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React, { useState } from 'react';
import { StyledRoot, StyledFlagContainer, StyledCountrySelectDropdownListItem as DefaultListItem, StyledCountrySelectDropdownFlagColumn as DefaultFlagColumn, StyledCountrySelectDropdownNameColumn as DefaultNameColumn, StyledCountrySelectDropdownDialcodeColumn as DefaultDialcodeColumn } from './styled-components.js';
import { SingleSelect as DefaultSelect } from '../select/index.js';
import { PLACEMENT } from '../popover/index.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
import defaultProps from './default-props.js';
import { iso2FlagEmoji } from './utils.js';
CountryPicker.defaultProps = {
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
const DropdownListItem = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    children,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(DefaultListItem, _extends({
    ref: ref
  }, rest), props.children);
});

function DropdownOptionContent(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, props.children);
}

export default function CountryPicker(props) {
  const {
    country,
    disabled,
    error,
    inputRef,
    maxDropdownHeight,
    maxDropdownWidth,
    mapIsoToLabel,
    onCountryChange,
    overrides,
    positive,
    required,
    size
  } = props;
  const [resetScrollIndex, setResetScrollIndex] = useState(false);
  const sharedProps = {
    $disabled: disabled,
    $error: error,
    $positive: positive,
    $required: required,
    $size: size
  };
  const options = Object.values(props.countries); // $FlowFixMe

  const scrollIndex = options.findIndex(opt => opt.id === country.id);
  const baseSelectOverrides = {
    Root: {
      component: StyledRoot
    },
    Input: {
      style: {
        width: 0
      },
      props: {
        'aria-label': 'Select country'
      }
    },
    IconsContainer: {
      style: {
        paddingRight: '0'
      }
    },
    SingleValue: {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    },
    StatefulMenu: {
      props: {
        stateReducer: (type, nextState) => {
          const next = { ...nextState,
            highlightedIndex: resetScrollIndex ? 0 : nextState.highlightedIndex
          };
          setResetScrollIndex(false);
          return next;
        },
        initialState: {
          isFocused: true,
          highlightedIndex: scrollIndex
        }
      }
    },
    DropdownContainer: {
      style: {
        width: maxDropdownWidth,
        maxWidth: 'calc(100vw - 10px)'
      }
    },
    Dropdown: {
      props: {
        $country: country,
        $maxDropdownHeight: maxDropdownHeight,
        $mapIsoToLabel: mapIsoToLabel,
        $overrides: {
          CountrySelectDropdown: overrides.CountrySelectDropdown,
          CountrySelectDropdownListItem: overrides.CountrySelectDropdownListItem,
          CountrySelectDropdownFlagColumn: overrides.CountrySelectDropdownFlagColumn,
          CountrySelectDropdownNameColumn: overrides.CountrySelectDropdownNameColumn,
          CountrySelectDropdownDialcodeColumn: overrides.CountrySelectDropdownDialcodeColumn,
          FlagContainer: overrides.FlagContainer
        }
      }
    },
    DropdownListItem: {
      component: DropdownListItem
    },
    OptionContent: {
      component: DropdownOptionContent
    },
    Popover: {
      props: {
        focusLock: false,
        placement: PLACEMENT.bottomLeft
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
  const [FlagColumn, flagColumnProps] = getOverrides(overrides.CountrySelectDropdownFlagColumn, DefaultFlagColumn);
  const [FlagContainer, flagContainerProps] = getOverrides(overrides.FlagContainer, StyledFlagContainer);
  const [NameColumn, nameColumnProps] = getOverrides(overrides.CountrySelectDropdownNameColumn, DefaultNameColumn);
  const [Dialcode, dialcodeProps] = getOverrides(overrides.CountrySelectDropdownDialcodeColumn, DefaultDialcodeColumn);
  return /*#__PURE__*/React.createElement(Select, _extends({
    clearable: false,
    disabled: disabled,
    getOptionLabel: ({
      option,
      optionState
    }) => {
      const iso = option.id;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FlagColumn, flagColumnProps, /*#__PURE__*/React.createElement(FlagContainer, _extends({
        $iso: iso,
        "data-iso": iso
      }, flagContainerProps), iso2FlagEmoji(iso))), /*#__PURE__*/React.createElement(NameColumn, nameColumnProps, mapIsoToLabel ? mapIsoToLabel(iso) : option.label), /*#__PURE__*/React.createElement(Dialcode, dialcodeProps, option.dialCode));
    },
    getValueLabel: value => {
      const iso = value.option.id;
      return /*#__PURE__*/React.createElement(FlagContainer, _extends({
        $iso: iso,
        "data-iso": iso
      }, sharedProps, flagContainerProps), iso2FlagEmoji(iso));
    },
    error: error,
    maxDropdownHeight: maxDropdownHeight,
    onChange: event => {
      if (typeof onCountryChange === 'function') {
        onCountryChange(event);
      } else if (process.env.NODE_ENV !== "production") {
        console.warn('CountryPicker component is controlled (or stateless) ' + 'and requires an `onCountryChange` handler to be passed in ' + 'that handles the `country` prop value update.');
      } // After choosing a country, shift focus to the text input


      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    },
    options: options,
    positive: positive,
    required: required,
    size: size,
    value: [country],
    onInputChange: () => {
      setResetScrollIndex(true);
    }
  }, selectProps));
}