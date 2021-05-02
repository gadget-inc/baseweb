function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { LocaleContext } from '../locale/index.js'; // Components

import { StyledList, StyledEmptyState, StyledOptgroupHeader } from './styled-components.js';
import OptionList from './option-list.js';
import { getOverrides } from '../helpers/overrides.js'; // Types

import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';
export default function Menu(props) {
  const {
    overrides = {},
    rootRef = /*#__PURE__*/React.createRef(),
    focusMenu = () => {},
    unfocusMenu = () => {},
    handleMouseLeave = () => {},
    handleKeyDown = event => {},
    renderAll = false
  } = props;
  const [focusVisible, setFocusVisible] = React.useState(false);

  const handleFocus = event => {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }
  };

  const handleBlur = event => {
    if (focusVisible !== false) {
      setFocusVisible(false);
    }
  };

  const [List, listProps] = getOverrides(overrides.List, StyledList);
  const [Option, optionProps] = getOverrides(overrides.Option, OptionList);
  const [EmptyState, emptyStateProps] = getOverrides(overrides.EmptyState, StyledEmptyState);
  const [OptgroupHeader, optgroupHeaderProps] = getOverrides(overrides.OptgroupHeader, StyledOptgroupHeader);
  const groupedItems = Array.isArray(props.items) ? {
    __ungrouped: props.items
  } : props.items;
  const optgroups = Object.keys(groupedItems);
  const [elements] = optgroups.reduce(([els, itemIndex], optgroup) => {
    if (optgroup !== '__ungrouped') {
      els.push( /*#__PURE__*/React.createElement(OptgroupHeader, _extends({
        key: optgroup
      }, optgroupHeaderProps), optgroup));
    }

    const groupItems = groupedItems[optgroup].map((item, index) => {
      itemIndex = itemIndex + 1;
      const {
        getRequiredItemProps = (item, index) => ({})
      } = props;
      const {
        disabled,
        isFocused,
        isHighlighted,
        resetMenu = () => {},
        ...restProps
      } = getRequiredItemProps(item, itemIndex);
      return /*#__PURE__*/React.createElement(Option, _extends({
        renderAll: renderAll,
        key: itemIndex,
        item: item,
        overrides: props.overrides,
        resetMenu: resetMenu,
        role: "option",
        $disabled: disabled,
        $isFocused: isFocused,
        $isHighlighted: isHighlighted,
        "aria-disabled": disabled,
        "aria-selected": isHighlighted && isFocused
      }, restProps, optionProps));
    });
    return [els.concat(groupItems), itemIndex];
  }, [[], -1]);
  const isEmpty = optgroups.every(optgroup => !groupedItems[optgroup].length);
  return /*#__PURE__*/React.createElement(LocaleContext.Consumer, null, locale => /*#__PURE__*/React.createElement(List, _extends({
    "aria-activedescendant": props.activedescendantId || null,
    role: "listbox",
    ref: rootRef,
    onMouseEnter: focusMenu,
    onMouseLeave: handleMouseLeave,
    onMouseOver: focusMenu,
    onFocus: forkFocus({
      onFocus: focusMenu
    }, handleFocus),
    onBlur: forkBlur({
      onBlur: unfocusMenu
    }, handleBlur),
    onKeyDown: event => {
      if (props.isFocused) {
        handleKeyDown(event);
      }
    },
    tabIndex: 0,
    "data-baseweb": "menu",
    $isFocusVisible: focusVisible
  }, listProps), isEmpty ? /*#__PURE__*/React.createElement(EmptyState, _extends({
    "aria-live": "polite",
    "aria-atomic": true
  }, emptyStateProps), props.noResultsMsg || locale.menu.noResultsMsg) : elements));
}