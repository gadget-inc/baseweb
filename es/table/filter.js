function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import FocusLock from 'react-focus-lock';
import { Button, KIND, SIZE } from '../button/index.js';
import { getOverrides } from '../helpers/overrides.js';
import FilterIcon from '../icon/filter.js';
import { StatefulPopover, PLACEMENT } from '../popover/index.js';
import { StyledFilterButton, StyledFilterContent, StyledFilterHeading, StyledFilterFooter } from './styled-components.js';
export default function Filter(props) {
  const {
    onSelectAll = () => {},
    onReset = () => {},
    overrides = {}
  } = props;
  const [MenuButton, menuButtonProps] = getOverrides(overrides.MenuButton, StyledFilterButton);
  const [Content, contentProps] = getOverrides(overrides.Content, StyledFilterContent);
  const [Heading, headingProps] = getOverrides(overrides.Heading, StyledFilterHeading);
  const [Footer, footerProps] = getOverrides(overrides.Footer, StyledFilterFooter);
  return /*#__PURE__*/React.createElement(StatefulPopover, {
    onClose: props.onClose,
    onOpen: props.onOpen,
    placement: PLACEMENT.bottom,
    stateReducer: (_, nextState) => {
      if (props.disabled) {
        return { ...nextState,
          isOpen: false
        };
      }

      return nextState;
    },
    content: ({
      close
    }) => /*#__PURE__*/React.createElement(FocusLock, {
      autoFocus: false
    }, /*#__PURE__*/React.createElement(Heading, headingProps, "Filter Column"), /*#__PURE__*/React.createElement(Content, contentProps, props.children), /*#__PURE__*/React.createElement(Footer, footerProps, /*#__PURE__*/React.createElement(Button, {
      kind: KIND.minimal,
      size: SIZE.compact,
      onClick: () => {
        onSelectAll();
      }
    }, "Select All"), /*#__PURE__*/React.createElement(Button, {
      kind: KIND.minimal,
      size: SIZE.compact,
      onClick: () => {
        onReset();
      }
    }, "Reset"), props.hasCloseButton && /*#__PURE__*/React.createElement(Button, {
      kind: KIND.minimal,
      size: SIZE.compact,
      onClick: close
    }, "Close"))),
    returnFocus: props.returnFocus
  }, /*#__PURE__*/React.createElement(MenuButton, _extends({
    $active: props.active,
    $disabled: props.disabled
  }, menuButtonProps), /*#__PURE__*/React.createElement(FilterIcon, {
    size: 18
  })));
}