function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides, mergeOverrides, withOverrides } from '../helpers/overrides.js';
import { Root as StyledRoot, TabBar as StyledTabBar, TabContent as StyledTabContent } from './styled-components.js';
import { ORIENTATION } from './constants.js';

class Tabs extends React.Component {
  onChange({
    activeKey
  }) {
    const {
      onChange
    } = this.props;
    typeof onChange === 'function' && onChange({
      activeKey
    });
  }

  getTabs() {
    const {
      activeKey,
      disabled,
      orientation,
      children,
      overrides = {}
    } = this.props; // eslint-disable-next-line flowtype/no-weak-types

    const tabs = React.Children.map(children, (child, index) => {
      if (!child) return;
      const key = child.key || String(index);
      return /*#__PURE__*/React.cloneElement(child, {
        key,
        id: key,
        // for aria-labelledby
        active: key === activeKey,
        disabled: disabled || child.props.disabled,
        $orientation: orientation,
        onSelect: () => this.onChange({
          activeKey: key
        }),
        children: child.props.title,
        overrides: mergeOverrides(overrides, child.props.overrides || {})
      });
    });
    return tabs;
  }

  getPanels() {
    const {
      activeKey,
      disabled,
      orientation,
      children,
      overrides = {},
      renderAll
    } = this.props;
    const {
      TabContent: TabContentOverride
    } = overrides;
    const [TabContent, tabContentProps] = getOverrides(TabContentOverride, StyledTabContent); // eslint-disable-next-line flowtype/no-weak-types

    const tabs = React.Children.map(children, (child, index) => {
      if (!child) return;
      const key = child.key || String(index);
      const isActive = key === activeKey;
      const props = {
        key,
        'aria-labelledby': key
      };
      const sharedProps = {
        $active: isActive,
        $disabled: disabled,
        $orientation: orientation
      };
      return /*#__PURE__*/React.createElement(TabContent, _extends({
        role: "tabpanel"
      }, sharedProps, tabContentProps, props), renderAll ? child.props.children : null, isActive && !renderAll ? child.props.children : null);
    });
    return tabs;
  }

  getSharedProps() {
    const {
      disabled,
      orientation
    } = this.props;
    return {
      $disabled: disabled,
      $orientation: orientation
    };
  }

  render() {
    const sharedProps = this.getSharedProps();
    const {
      overrides = {}
    } = this.props;
    const {
      Root: RootOverride,
      TabBar: TabBarOverride
    } = overrides;
    const [Root, rootProps] = getOverrides(RootOverride, StyledRoot);
    const [TabBar, tabBarProps] = getOverrides(TabBarOverride, StyledTabBar);
    return /*#__PURE__*/React.createElement(Root, _extends({
      "data-baseweb": "tabs"
    }, sharedProps, rootProps), /*#__PURE__*/React.createElement(TabBar, _extends({
      role: "tablist"
    }, sharedProps, tabBarProps), this.getTabs()), this.getPanels());
  }

} //$FlowFixMe


_defineProperty(Tabs, "defaultProps", {
  disabled: false,
  onChange: () => {},
  overrides: {},
  orientation: ORIENTATION.horizontal,
  renderAll: false
});

export default withOverrides(Tabs, 'Tabs');