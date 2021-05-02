function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { StyledNavLink, StyledNavItem } from './styled-components.js';

class NavItem extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleClick", event => {
      const {
        item,
        onSelect
      } = this.props;

      if (typeof onSelect === 'function') {
        onSelect({
          item,
          event
        });
      }
    });

    _defineProperty(this, "handleKeyDown", event => {
      const {
        item,
        onSelect
      } = this.props;

      if (event.key === 'Enter') {
        if (typeof onSelect === 'function') {
          onSelect({
            item,
            event
          });
        }
      }
    });
  }

  render() {
    const {
      item,
      overrides,
      itemMemoizationComparator,
      ...sharedProps
    } = this.props;
    const [NavItem, itemProps] = getOverrides(overrides.NavItem, StyledNavItem);
    const [NavLink, linkProps] = getOverrides(overrides.NavLink, StyledNavLink);
    const tabIndex = {
      tabIndex: item.disabled ? -1 : undefined
    };
    return /*#__PURE__*/React.createElement(NavLink, _extends({
      $as: item.disabled ? 'span' : 'a',
      href: item.disabled ? null : item.itemId
    }, tabIndex, sharedProps, linkProps, item.itemId && !item.disabled ? {
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown
    } : {}), /*#__PURE__*/React.createElement(NavItem, _extends({
      item: item
    }, sharedProps, itemProps), item.title));
  }

}

_defineProperty(NavItem, "defaultProps", {
  overrides: {},
  onSelect: () => {}
});

function compare(prevProps, nextProps) {
  if (nextProps.itemMemoizationComparator) {
    return nextProps.itemMemoizationComparator(prevProps, nextProps);
  }

  return false;
}

export default /*#__PURE__*/React.memo(NavItem, compare);