function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { LocaleContext } from '../locale/index.js';
import { getOverrides } from '../helpers/overrides.js';
import { PanelContainer as StyledPanelContainer, Header as StyledHeader, Content as StyledContent, ToggleIcon as StyledToggleIcon, ToggleIconGroup as StyledToggleIconGroup, ContentAnimationContainer as StyledContentAnimationContainer } from './styled-components.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';

const Panel = ({
  'aria-controls': ariaControls,
  children,
  disabled = false,
  expanded = false,
  onChange = () => {},
  onClick = () => {},
  onKeyDown = () => {},
  overrides = {},
  title = '',
  renderPanelContent = () => {},
  renderAll = () => {}
}) => {
  const [localState, setLocalState] = React.useState({
    expanded,
    isFocusVisible: false,
    elementHeight: 0,
    animationInProgress: false
  });
  const handleFocus = React.useCallback(event => {
    if (isFocusVisible(event)) {
      setLocalState({ ...localState,
        isFocusVisible: true
      });
    }
  }, []);
  const handleBlur = React.useCallback(() => {
    if (localState.isFocusVisible !== false) {
      setLocalState({ ...localState,
        isFocusVisible: false
      });
    }
  }, []);
  const handleClick = React.useCallback(e => {
    if (disabled) {
      return;
    }

    typeof onChange === 'function' && onChange({
      expanded: !expanded
    });
    typeof onClick === 'function' && onClick(e);
  }, []);
  const handleKeyDown = React.useCallback(e => {
    if (disabled) {
      return;
    }

    const ENTER = 13;
    const SPACE = 32;

    if (e.keyCode === ENTER || e.keyCode === SPACE) {
      typeof onChange === 'function' && onChange({
        expanded: !expanded
      });

      if (e.keyCode === SPACE) {
        e.preventDefault(); // prevent jumping scroll when using Space
      }
    }

    typeof onKeyDown === 'function' && onKeyDown(e);
  }, []); // eslint-disable-next-line flowtype/no-weak-types

  const _animateRef = React.useRef(null);

  React.useEffect(() => {
    if (_animateRef.current) {
      const height = _animateRef.current.getBoundingClientRect().height; // After the first render, when everything is in the DOM, update the local
      //state to indicate an animation is in progress.


      if (expanded !== localState.expanded) {
        setLocalState({ ...localState,
          expanded,
          animationInProgress: true
        });
      } else if (parseInt(localState.elementHeight) !== height) {
        // After the second render (where child elements were added to the Content)
        //the Content height now reflects the true height. This kicks off the actual
        //animation.
        setLocalState({ ...localState,
          elementHeight: height ? `${height}px` : 0
        });
      }
    }
  }, [_animateRef.current, expanded, localState.elementHeight, localState.expanded, setLocalState]);
  const contentHeight = React.useMemo(() => {
    // When closing, the first render will re-query the content element for the new
    //height and set the height of the animation container from auto to a px value.
    if (!expanded && localState.expanded) {
      const height = _animateRef.current.getBoundingClientRect().height;

      setLocalState({ ...localState,
        elementHeight: height ? `${height}px` : 0
      });
      return localState.elementHeight;
    }

    if (!localState.expanded) {
      return 0;
    } // When no longer animating, set the height to auto to accommodate dynamic nested components.


    return localState.animationInProgress ? localState.elementHeight : 'auto';
  }, [expanded, localState.expanded, localState.animationInProgress, localState.elementHeight]);
  const sharedProps = {
    $disabled: disabled,
    $expanded: expanded,
    $isFocusVisible: localState.isFocusVisible
  };
  const {
    PanelContainer: PanelContainerOverride,
    Header: HeaderOverride,
    Content: ContentOverride,
    ContentAnimationContainer: ContentAnimationContainerOverride,
    ToggleIcon: ToggleIconOverride,
    ToggleIconGroup: ToggleIconGroupOverride
  } = overrides;
  const [PanelContainer, panelContainerProps] = getOverrides(PanelContainerOverride, StyledPanelContainer);
  const [Header, headerProps] = getOverrides(HeaderOverride, StyledHeader);
  const [Content, contentProps] = getOverrides(ContentOverride, StyledContent);
  const [ContentAnimationContainer, contentAnimationProps] = getOverrides(ContentAnimationContainerOverride, StyledContentAnimationContainer);
  const [ToggleIconGroup, toggleIconGroupProps] = getOverrides(ToggleIconGroupOverride, StyledToggleIconGroup);
  const [ToggleIcon, toggleIconProps] = getOverrides(ToggleIconOverride, StyledToggleIcon);
  return /*#__PURE__*/React.createElement(LocaleContext.Consumer, null, locale => /*#__PURE__*/React.createElement(PanelContainer, _extends({}, sharedProps, panelContainerProps), /*#__PURE__*/React.createElement(Header, _extends({
    tabIndex: 0,
    role: "button",
    "aria-expanded": expanded,
    "aria-disabled": disabled || null
  }, sharedProps, headerProps, ariaControls ? {
    'aria-controls': ariaControls
  } : {}, {
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    onFocus: forkFocus(headerProps, handleFocus),
    onBlur: forkBlur(headerProps, handleBlur)
  }), title, /*#__PURE__*/React.createElement(ToggleIcon, _extends({
    viewBox: "0 0 24 24",
    title: localState.expanded ? locale.accordion.collapse : locale.accordion.expand,
    size: 16
  }, toggleIconProps, sharedProps), /*#__PURE__*/React.createElement(ToggleIconGroup, _extends({}, sharedProps, toggleIconGroupProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z"
  })), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z"
  }))), /*#__PURE__*/React.createElement(ContentAnimationContainer, _extends({}, sharedProps, contentAnimationProps, {
    $height: contentHeight,
    onTransitionEnd: () => {
      if (localState.animationInProgress) {
        setLocalState({ ...localState,
          animationInProgress: false
        });
      }
    }
  }), /*#__PURE__*/React.createElement(Content, _extends({
    ref: _animateRef
  }, sharedProps, contentProps, ariaControls ? {
    id: ariaControls
  } : {}), localState.expanded || renderAll || renderPanelContent || localState.animationInProgress ? children : null))));
};

export default Panel;