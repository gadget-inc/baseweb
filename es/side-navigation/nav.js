function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import NavItem from './nav-item.js';
import { StyledRoot, StyledNavItemContainer, StyledSubNavContainer } from './styled-components.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';
export default class SideNav extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isFocusVisible: false
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

    _defineProperty(this, "activePredicate", item => item.itemId === this.props.activeItemId);
  }

  render() {
    const {
      activeItemId,
      activePredicate,
      items,
      onChange,
      overrides,
      mapItem
    } = this.props;
    const navLevel = 1;
    const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
    const [NavItemContainer, itemContainerProps] = getOverrides(overrides.NavItemContainer, StyledNavItemContainer);
    const [SubNavContainer, subNavContainerProps] = getOverrides(overrides.SubNavContainer, StyledSubNavContainer);

    const renderNavItem = (item, level, index, mapItem) => {
      if (typeof mapItem === 'function') {
        const recMapItem = item => {
          let subNav = [];

          if (item.subNav) {
            subNav = item.subNav.map(recMapItem);
          }

          return mapItem({ ...item,
            subNav
          });
        };

        item = recMapItem(item);
      }

      const sharedProps = {
        $active: activePredicate ? activePredicate(item, activeItemId) : this.activePredicate(item),
        $level: level,
        $selectable: !!item.itemId,
        $disabled: item.disabled || false
      };
      return /*#__PURE__*/React.createElement(NavItemContainer, _extends({
        key: `${index}-level${level}-${typeof item.title === 'string' ? item.title : item.itemId || ''}`
      }, sharedProps, itemContainerProps, {
        onFocus: forkFocus(itemContainerProps, this.handleFocus),
        onBlur: forkBlur(itemContainerProps, this.handleBlur)
      }), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavItem, _extends({
        $isFocusVisible: this.state.isFocusVisible,
        item: item,
        itemMemoizationComparator: this.props.itemMemoizationComparator,
        onSelect: onChange,
        overrides: overrides
      }, sharedProps)), item.subNav ? /*#__PURE__*/React.createElement(SubNavContainer, _extends({
        role: "list"
      }, sharedProps, subNavContainerProps), item.subNav.map((subitem, idx) => {
        return renderNavItem(subitem, level + 1, index);
      })) : null));
    };

    return /*#__PURE__*/React.createElement(Root, _extends({
      role: "navigation",
      "data-baseweb": "side-navigation"
    }, rootProps), /*#__PURE__*/React.createElement(SubNavContainer, {
      role: "list"
    }, items.map((item, index) => {
      return renderNavItem(item, navLevel, index, mapItem);
    })));
  }

}

_defineProperty(SideNav, "defaultProps", {
  activeItemId: '/',
  activePredicate: null,
  items: [],
  overrides: {},
  mapItem: null
});