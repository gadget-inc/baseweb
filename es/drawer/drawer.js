function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* global document */

/* eslint-disable cup/no-undef */
import * as React from 'react';
import FocusLock from 'react-focus-lock';
import { LocaleContext } from '../locale/index.js';
import { getOverrides } from '../helpers/overrides.js';
import { Layer } from '../layer/index.js';
import { SIZE, CLOSE_SOURCE, ANCHOR } from './constants.js';
import { StyledRoot, StyledBackdrop, StyledDrawerContainer, StyledDrawerBody, StyledClose, Hidden } from './styled-components.js';
import { CloseIcon } from './close-icon.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';

class Drawer extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "animateOutTimer", void 0);

    _defineProperty(this, "animateStartTimer", void 0);

    _defineProperty(this, "lastFocus", null);

    _defineProperty(this, "lastMountNodeOverflowStyle", null);

    _defineProperty(this, "_refs", {});

    _defineProperty(this, "state", {
      isVisible: false,
      mounted: false,
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

    _defineProperty(this, "onEscape", () => {
      if (!this.props.closeable) {
        return;
      }

      this.triggerClose(CLOSE_SOURCE.escape);
    });

    _defineProperty(this, "onBackdropClick", event => {
      if (this.props.onBackdropClick) {
        this.props.onBackdropClick(event);
      }

      if (!this.props.closeable) {
        return;
      }

      this.triggerClose(CLOSE_SOURCE.backdrop);
    });

    _defineProperty(this, "onCloseClick", () => {
      this.triggerClose(CLOSE_SOURCE.closeButton);
    });

    _defineProperty(this, "animateOutComplete", () => {
      this.setState({
        isVisible: false
      });
    });
  }

  componentDidMount() {
    this.setState({
      mounted: true
    });
  }

  componentWillUnmount() {
    this.resetMountNodeScroll();
    this.clearTimers();
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      isOpen
    } = this.props;

    if ( // If isOpen is changing *or* we just mounted and drawer should be open
    isOpen !== prevProps.isOpen || isOpen && this.state.mounted && !prevState.mounted) {
      if (isOpen) {
        this.didOpen();
      } else {
        this.didClose();
      }
    }
  }

  disableMountNodeScroll() {
    if (this.props.showBackdrop) {
      const mountNode = this.getMountNode();
      this.lastMountNodeOverflowStyle = mountNode.style.overflow || '';
      mountNode.style.overflow = 'hidden';
    }
  }

  resetMountNodeScroll() {
    if (this.props.showBackdrop) {
      const mountNode = this.getMountNode();
      const lastStyle = this.lastMountNodeOverflowStyle;

      if (mountNode && lastStyle !== null) {
        mountNode.style.overflow = lastStyle || '';
        this.lastMountNodeOverflowStyle = null;
      }
    }
  }

  getMountNode() {
    const {
      mountNode
    } = this.props;

    if (mountNode) {
      return mountNode;
    } // Flow thinks body could be null (cast through any)
    // eslint-disable-next-line flowtype/no-weak-types


    return document.body;
  }

  clearTimers() {
    if (this.animateOutTimer) {
      clearTimeout(this.animateOutTimer);
    }

    if (this.animateStartTimer) {
      // eslint-disable-next-line cup/no-undef
      cancelAnimationFrame(this.animateStartTimer);
    }
  }

  didOpen() {
    // Sometimes scroll starts past zero, possibly due to animation
    // Reset scroll to 0 (other libraries do this as well)
    const rootRef = this.getRef('Root').current;

    if (rootRef) {
      rootRef.scrollTop = 0;
    } // Clear any existing timers (like previous animateOutTimer)


    this.clearTimers();
    this.disableMountNodeScroll(); // eslint-disable-next-line cup/no-undef

    this.animateStartTimer = requestAnimationFrame(() => {
      this.setState({
        isVisible: true
      });
    });
  }

  didClose() {
    this.resetMountNodeScroll();
    this.animateOutTimer = setTimeout(this.animateOutComplete, 500);
  }

  triggerClose(source) {
    // If there's no source, it just means the isOpen prop changed. No need to call onClose.
    if (this.props.onClose && source) {
      this.props.onClose({
        closeSource: source
      });
    }
  }

  getSharedProps() {
    const {
      animate,
      isOpen,
      size,
      closeable,
      anchor,
      showBackdrop
    } = this.props;
    return {
      $animating: animate,
      $isVisible: this.state.isVisible,
      $isOpen: !!isOpen,
      $size: size,
      $closeable: !!closeable,
      $anchor: anchor,
      $isFocusVisible: this.state.isFocusVisible,
      $showBackdrop: showBackdrop
    };
  }

  getChildren() {
    const {
      children
    } = this.props;
    return typeof children === 'function' ? children() : children;
  }

  getRef(component) {
    if (!this._refs[component]) {
      this._refs[component] = /*#__PURE__*/React.createRef();
    }

    return this._refs[component];
  }

  renderDrawer(renderedContent) {
    const {
      overrides = {},
      closeable,
      autoFocus
    } = this.props;
    const {
      Root: RootOverride,
      DrawerContainer: DrawerContainerOverride,
      DrawerBody: DrawerBodyOverride,
      Backdrop: BackdropOverride,
      Close: CloseOverride
    } = overrides;
    const [Root, rootProps] = getOverrides(RootOverride, StyledRoot);
    const [Backdrop, backdropProps] = getOverrides(BackdropOverride, StyledBackdrop);
    const [DrawerContainer, drawerContainerProps] = getOverrides(DrawerContainerOverride, StyledDrawerContainer);
    const [DrawerBody, drawerBodyProps] = getOverrides(DrawerBodyOverride, StyledDrawerBody);
    const [Close, closeProps] = getOverrides(CloseOverride, StyledClose);
    const sharedProps = this.getSharedProps();
    return /*#__PURE__*/React.createElement(LocaleContext.Consumer, null, locale => {
      return /*#__PURE__*/React.createElement(FocusLock, {
        returnFocus: true,
        autoFocus: autoFocus
      }, /*#__PURE__*/React.createElement(Root, _extends({
        "data-baseweb": "drawer",
        ref: this.getRef('Root')
      }, sharedProps, rootProps), /*#__PURE__*/React.createElement(Backdrop, _extends({
        onClick: this.onBackdropClick
      }, sharedProps, backdropProps)), /*#__PURE__*/React.createElement(DrawerContainer, _extends({
        "aria-label": "drawer"
      }, sharedProps, drawerContainerProps), /*#__PURE__*/React.createElement(DrawerBody, _extends({}, sharedProps, drawerBodyProps), renderedContent), closeable ? /*#__PURE__*/React.createElement(Close, _extends({
        "aria-label": locale.drawer.close,
        onClick: this.onCloseClick
      }, sharedProps, closeProps, {
        onFocus: forkFocus(closeProps, this.handleFocus),
        onBlur: forkBlur(closeProps, this.handleBlur)
      }), /*#__PURE__*/React.createElement(CloseIcon, null)) : null)));
    });
  }

  render() {
    const mountedAndOpen = this.state.mounted && (this.props.isOpen || this.state.isVisible);
    const renderedContent = mountedAndOpen || this.props.renderAll ? this.getChildren() : null;

    if (renderedContent) {
      if (mountedAndOpen) {
        return /*#__PURE__*/React.createElement(Layer, {
          onEscape: this.onEscape,
          mountNode: this.props.mountNode
        }, this.renderDrawer(renderedContent));
      } else {
        return /*#__PURE__*/React.createElement(Hidden, null, renderedContent);
      }
    }

    return null;
  }

}

_defineProperty(Drawer, "defaultProps", {
  animate: true,
  closeable: true,
  isOpen: false,
  overrides: {},
  size: SIZE.default,
  anchor: ANCHOR.right,
  showBackdrop: true,
  autoFocus: true,
  renderAll: false
});

export default Drawer;