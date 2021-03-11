function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { StyledDropdownContainer, StyledDropdown, StyledDropdownListItem, StyledOptionContent } from './styled-components.js';
import { StatefulMenu } from '../menu/index.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';

function groupOptions(options) {
  return options.reduce((groups, option) => {
    if (option.__optgroup) {
      if (!groups[option.__optgroup]) {
        groups[option.__optgroup] = [];
      }

      groups[option.__optgroup].push(option);
    } else {
      groups.__ungrouped.push(option);
    }

    return groups;
  }, {
    __ungrouped: []
  });
}

export default class SelectDropdown extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "getItemLabel", option => {
      const {
        getOptionLabel,
        overrides = {},
        value,
        valueKey
      } = this.props;
      const [OptionContent, optionContentProps] = getOverrides(overrides.OptionContent, StyledOptionContent);
      let $selected;

      if (Array.isArray(value)) {
        $selected = !!value.find(selected => selected && selected[valueKey] === option[valueKey]);
      } else {
        $selected = value[valueKey] === option[valueKey];
      }

      const optionSharedProps = {
        $selected,
        $disabled: option.disabled,
        $isHighlighted: option.isHighlighted
      };
      return React.createElement(OptionContent, _extends({
        "aria-readonly": option.disabled,
        "aria-selected": $selected,
        key: option[valueKey]
      }, this.getSharedProps(), optionSharedProps, optionContentProps), getOptionLabel({
        option,
        optionState: optionSharedProps
      }));
    });

    _defineProperty(this, "onMouseDown", e => {
      e.nativeEvent.stopImmediatePropagation();
    });

    _defineProperty(this, "getHighlightedIndex", () => {
      const {
        value,
        options,
        valueKey
      } = this.props; // Highlight only first value as menu supports only a single highlight index

      let firstValue = {};

      if (Array.isArray(value) && value.length > 0) {
        firstValue = value[0];
      } else if (!(value instanceof Array)) {
        firstValue = value;
      }

      if (Object.keys(firstValue).length > 0) {
        const a = options.findIndex(option => option && option[valueKey] === firstValue[valueKey]);
        return a === -1 ? 0 : a;
      }

      return 0;
    });
  }

  getSharedProps() {
    const {
      error,
      isLoading,
      multi,
      required,
      size,
      searchable,
      type,
      width
    } = this.props;
    return {
      $error: error,
      $isLoading: isLoading,
      $multi: multi,
      $required: required,
      $searchable: searchable,
      $size: size,
      $type: type,
      $width: width
    };
  } // eslint-disable-next-line flowtype/no-weak-types


  render() {
    // TODO(#185) Add no-results and loading states to menu
    const {
      maxDropdownHeight,
      multi,
      noResultsMsg,
      onItemSelect,
      options = [],
      overrides = {},
      size
    } = this.props;
    const [DropdownContainer, dropdownContainerProps] = getOverrides(overrides.DropdownContainer, StyledDropdownContainer);
    const [ListItem, listItemProps] = getOverrides(overrides.DropdownListItem, StyledDropdownListItem);
    const [OverriddenStatefulMenu, // $FlowFixMe
    {
      overrides: statefulMenuOverrides = {},
      ...restStatefulMenuProps
    }] = getOverrides(overrides.StatefulMenu, StatefulMenu);
    const highlightedIndex = this.getHighlightedIndex();
    const groupedOptions = groupOptions(options);
    return React.createElement(DropdownContainer, _extends({
      "data-no-focus-lock": true,
      ref: this.props.innerRef,
      role: "listbox"
    }, this.getSharedProps(), dropdownContainerProps), React.createElement(OverriddenStatefulMenu, _extends({
      noResultsMsg: noResultsMsg,
      onActiveDescendantChange: id => {
        if (this.props.onActiveDescendantChange) {
          this.props.onActiveDescendantChange(id);
        }
      },
      onItemSelect: onItemSelect,
      items: groupedOptions,
      size: size,
      initialState: {
        isFocused: true,
        highlightedIndex: highlightedIndex
      },
      typeAhead: false,
      keyboardControlNode: this.props.keyboardControlNode,
      overrides: mergeOverrides({
        List: {
          component: StyledDropdown,
          style: p => ({
            maxHeight: p.$maxHeight || null
          }),
          props: {
            id: this.props.id ? this.props.id : null,
            $maxHeight: maxDropdownHeight,
            'aria-multiselectable': multi
          }
        },
        Option: {
          props: {
            getItemLabel: this.getItemLabel,
            // figure out why the onClick handler is not
            // triggered without this temporary fix
            onMouseDown: this.onMouseDown,
            overrides: {
              ListItem: {
                component: ListItem,
                props: { ...listItemProps,
                  role: 'option'
                },
                // slightly hacky way to handle the list item style overrides
                // since the menu component doesn't provide a top level overrides for it
                // $FlowFixMe
                style: listItemProps.$style
              }
            },
            renderHrefAsAnchor: false
          }
        }
      }, {
        List: overrides.Dropdown || {},
        Option: overrides.DropdownOption || {},
        ...statefulMenuOverrides
      })
    }, restStatefulMenuProps)));
  }

}