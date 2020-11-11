function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { NestedMenuContext } from './nested-menus.js';
import { Popover } from '../popover/index.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
export default function MaybeChildMenu(props) {
  if (!props.getChildMenu) {
    return props.children;
  }

  const ChildMenu = props.getChildMenu(props.item);

  if (!ChildMenu) {
    return props.children;
  }

  const {
    overrides = {}
  } = props;
  const [PopoverOverride, popoverProps] = getOverrides(overrides.ChildMenuPopover, Popover);
  return /*#__PURE__*/React.createElement(NestedMenuContext.Consumer, null, ctx => {
    return /*#__PURE__*/React.createElement(PopoverOverride, _extends({
      focusLock: false,
      isOpen: props.isOpen,
      renderAll: props.renderAll,
      content: ChildMenu,
      ignoreBoundary: true,
      mountNode: ctx.mountRef.current ? ctx.mountRef.current : undefined,
      onMouseEnterDelay: 30,
      onMouseLeaveDelay: 30,
      onEsc: props.resetParentMenu,
      placement: "rightTop"
    }, popoverProps, {
      overrides: mergeOverrides({
        Body: {
          props: {
            // Adds mouseleave to popover body so that child menu closes when user mouses out.
            onMouseLeave: props.resetParentMenu,
            // Trap tabbing when focused on a child menu. Popover mounts the element at the end of
            // the html body by default. If a user was to tab to the next element it would navigate
            // to elements not within the immediate area surrounding the menu.
            onKeyDown: e => {
              if (e.keyCode === 9) {
                e.preventDefault();
              }
            }
          }
        }
      }, // $FlowFixMe - getOverrides' return type for props is {}
      popoverProps.overrides)
    }), props.children);
  });
}