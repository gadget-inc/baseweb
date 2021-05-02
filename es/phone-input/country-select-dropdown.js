function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { List, AutoSizer } from 'react-virtualized';
import defaultProps from './default-props.js';
import { StyledFlagContainer, StyledCountrySelectDropdownContainer as DefaultContainer, StyledCountrySelectDropdownListItem as DefaultListItem, StyledCountrySelectDropdownFlagColumn as DefaultFlagColumn, StyledCountrySelectDropdownNameColumn as DefaultNameColumn, StyledCountrySelectDropdownDialcodeColumn as DefaultDialcodeColumn } from './styled-components.js';
import { LocaleContext } from '../locale/index.js';
import { StyledEmptyState } from '../menu/styled-components.js';
import { getOverrides } from '../helpers/overrides.js';
import { iso2FlagEmoji } from './utils.js';
CountrySelectDropdown.defaultProps = {
  maxDropdownHeight: defaultProps.maxDropdownHeight,
  overrides: {}
};

function CountrySelectDropdown(props) {
  const {
    $country: country,
    $forwardedRef: forwardedRef,
    $maxDropdownHeight: maxDropdownHeight,
    $mapIsoToLabel: mapIsoToLabel,
    $noResultsMsg: noResultsMsg,
    $overrides: overrides
  } = props;
  const [Container, containerProps] = getOverrides(overrides.CountrySelectDropdown, DefaultContainer);
  const [ListItem, listItemProps] = getOverrides(overrides.CountrySelectDropdownListItem, DefaultListItem);
  const [FlagColumn, flagColumnProps] = getOverrides(overrides.CountrySelectDropdownFlagColumn, DefaultFlagColumn);
  const [FlagContainer, flagContainerProps] = getOverrides(overrides.FlagContainer, StyledFlagContainer);
  const [NameColumn, nameColumnProps] = getOverrides(overrides.CountrySelectDropdownNameColumn, DefaultNameColumn);
  const [Dialcode, dialcodeProps] = getOverrides(overrides.CountrySelectDropdownDialcodeColumn, DefaultDialcodeColumn);
  const [EmptyState, emptyStateProps] = getOverrides(overrides.EmptyState, StyledEmptyState); // Handle no results, likely from filtering

  if (!props.children.length) {
    return /*#__PURE__*/React.createElement(LocaleContext.Consumer, null, locale => /*#__PURE__*/React.createElement(EmptyState, emptyStateProps, noResultsMsg || locale.menu.noResultsMsg));
  }

  const children = React.Children.toArray(props.children);
  const scrollIndex = Math.min(children.findIndex(opt => opt.props.item.id === country.id) + 5, children.length - 1);
  return /*#__PURE__*/React.createElement(Container, _extends({
    ref: forwardedRef,
    $height: maxDropdownHeight
  }, containerProps), /*#__PURE__*/React.createElement(AutoSizer, null, ({
    height,
    width
  }) => {
    return /*#__PURE__*/React.createElement(List, {
      role: "listbox",
      height: height,
      width: width,
      rowCount: children.length,
      rowHeight: 42,
      scrollToIndex: scrollIndex,
      rowRenderer: ({
        index,
        key,
        style
      }) => {
        // resetMenu and getItemLabel should not end up on native html elements
        const {
          item,
          resetMenu,
          getItemLabel,
          ...rest
        } = children[index].props;
        const {
          id: iso,
          label,
          dialCode
        } = item;
        return /*#__PURE__*/React.createElement(ListItem, _extends({
          key: key,
          style: style,
          item: item
        }, rest, listItemProps, {
          "data-iso": iso
        }), /*#__PURE__*/React.createElement(FlagColumn, flagColumnProps, /*#__PURE__*/React.createElement(FlagContainer, _extends({
          $iso: iso,
          "data-iso": iso
        }, flagContainerProps), iso2FlagEmoji(iso))), /*#__PURE__*/React.createElement(NameColumn, nameColumnProps, mapIsoToLabel ? mapIsoToLabel(iso) : label), /*#__PURE__*/React.createElement(Dialcode, dialcodeProps, dialCode));
      }
    });
  }));
}

export default /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(CountrySelectDropdown, _extends({}, props, {
  $forwardedRef: ref
})));