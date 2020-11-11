function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Button, KIND, SHAPE } from '../button/index.js';
import { getOverrides } from '../helpers/overrides.js';
import { useStyletron } from '../styles/index.js';
import { StyledRoot, StyledContent, StyledStartEnhancerContainer, StyledSpinner, StyledMessage, StyledWrapActionButtonContainer, StyledActionButtonContainer } from './styled-components.js';
const ActionButton = /*#__PURE__*/React.forwardRef(({
  onClick,
  message,
  overrides = {}
}, ref) => {
  const [, theme] = useStyletron();
  const [ActionButtonContainer, actionButtonContainerProps] = getOverrides(overrides.ActionButtonContainer, StyledActionButtonContainer);
  return /*#__PURE__*/React.createElement(ActionButtonContainer, actionButtonContainerProps, /*#__PURE__*/React.createElement(Button, {
    ref: ref,
    overrides: {
      BaseButton: {
        style: {
          color: theme.colors.contentInversePrimary,
          marginRight: theme.direction === 'rtl' ? null : theme.sizing.scale100,
          marginLeft: theme.direction === 'rtl' ? theme.sizing.scale100 : null,
          width: '100%',
          whiteSpace: 'nowrap',
          ':hover': {
            backgroundColor: theme.colors.borderInverseTransparent
          },
          ':active': {
            backgroundColor: theme.colors.backgroundInverseSecondary
          }
        }
      }
    },
    kind: KIND.tertiary,
    onClick: onClick,
    shape: SHAPE.pill
  }, message));
});
export default function SnackbarElement({
  actionMessage,
  actionOnClick,
  focus = true,
  message,
  overrides = {},
  progress,
  startEnhancer: StartEnhancer
}) {
  const [css] = useStyletron();
  const rootRef = React.useRef(null);
  const [rootWidth, setRootWidth] = React.useState(0);
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      const observer = new window.ResizeObserver(([entry]) => setRootWidth(entry.contentRect.width));

      if (rootRef.current) {
        observer.observe(rootRef.current);
      }

      return () => observer.disconnect();
    }
  }, []);
  const actionMeasureRef = React.useRef(null);
  const [actionMeasureWidth, setActionMeasureWidth] = React.useState(0);
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      const observer = new window.ResizeObserver(([entry]) => setActionMeasureWidth(entry.contentRect.width));

      if (actionMeasureRef.current) {
        observer.observe(actionMeasureRef.current);
      }

      return () => observer.disconnect();
    }
  }, [actionMeasureRef.current]);
  const wrapActionButton = actionMeasureWidth > rootWidth / 2;
  const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
  const [Content, contentProps] = getOverrides(overrides.Content, StyledContent);
  const [StartEnhancerContainer, startEnhancerContainerProps] = getOverrides(overrides.StartEnhancerContainer, StyledStartEnhancerContainer);
  const [Spinner, spinnerProps] = getOverrides(overrides.Spinner, StyledSpinner);
  const [Message, messageProps] = getOverrides(overrides.Message, StyledMessage);
  const [WrapActionButtonContainer, wrapActionButtonContainerProps] = getOverrides(overrides.WrapActionButtonContainer, StyledWrapActionButtonContainer);
  const prevFocusRef = React.useRef(null);
  const actionButtonRef = React.useRef(null);
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      if (focus && actionButtonRef.current) {
        prevFocusRef.current = document.activeElement; // $FlowFixMe

        actionButtonRef.current.focus();
      }

      return () => {
        if (prevFocusRef.current) {
          prevFocusRef.current.focus();
        }
      };
    }
  }, [focus]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, actionMessage && /*#__PURE__*/React.createElement("div", {
    className: css({
      position: 'absolute',
      left: '-10000px',
      top: '-10000px'
    })
  }, /*#__PURE__*/React.createElement(ActionButton, {
    ref: actionMeasureRef,
    message: actionMessage,
    onClick: actionOnClick,
    overrides: overrides
  })), /*#__PURE__*/React.createElement(Root, _extends({
    ref: rootRef
  }, rootProps), /*#__PURE__*/React.createElement(Content, contentProps, (Boolean(StartEnhancer) || progress) && /*#__PURE__*/React.createElement(StartEnhancerContainer, startEnhancerContainerProps, StartEnhancer !== null && StartEnhancer !== undefined ? /*#__PURE__*/React.createElement(StartEnhancer, {
    size: 24
  }) : /*#__PURE__*/React.createElement(Spinner, _extends({
    $height: 24,
    $width: 24
  }, spinnerProps))), /*#__PURE__*/React.createElement(Message, _extends({
    $hasSuffix: Boolean(actionMessage)
  }, messageProps), message), actionMessage && !wrapActionButton && /*#__PURE__*/React.createElement(ActionButton, {
    ref: actionButtonRef,
    message: actionMessage,
    onClick: actionOnClick,
    overrides: overrides
  })), actionMessage && wrapActionButton && /*#__PURE__*/React.createElement(WrapActionButtonContainer, wrapActionButtonContainerProps, /*#__PURE__*/React.createElement(ActionButton, {
    ref: actionButtonRef,
    message: actionMessage,
    onClick: actionOnClick,
    overrides: overrides
  }))));
}