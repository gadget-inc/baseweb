function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable react/no-find-dom-node */

/* eslint-disable cup/no-undef */
import * as React from 'react';
import FocusLock from 'react-focus-lock';
import { getOverride, getOverrideProps } from '../helpers/overrides.js';
import getBuiId from '../utils/get-bui-id.js';
import { ACCESSIBILITY_TYPE, PLACEMENT, TRIGGER_TYPE, ANIMATE_OUT_TIME, ANIMATE_IN_TIME, POPOVER_MARGIN } from './constants.js';
import { Layer, TetherBehavior } from '../layer/index.js';
import { Arrow as StyledArrow, Body as StyledBody, Inner as StyledInner, Hidden } from './styled-components.js';
import { fromPopperPlacement } from './utils.js';
import defaultProps from './default-props.js';

class Popover extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "animateInTimer", void 0);

    _defineProperty(this, "animateOutTimer", void 0);

    _defineProperty(this, "animateOutCompleteTimer", void 0);

    _defineProperty(this, "onMouseEnterTimer", void 0);

    _defineProperty(this, "onMouseLeaveTimer", void 0);

    _defineProperty(this, "generatedId", '');

    _defineProperty(this, "anchorRef", /*#__PURE__*/React.createRef());

    _defineProperty(this, "popperRef", /*#__PURE__*/React.createRef());

    _defineProperty(this, "arrowRef", /*#__PURE__*/React.createRef());

    _defineProperty(this, "state", this.getDefaultState(this.props));

    _defineProperty(this, "animateIn", () => {
      if (this.props.isOpen) {
        this.setState({
          isAnimating: true
        });
      }
    });

    _defineProperty(this, "animateOut", () => {
      if (!this.props.isOpen) {
        this.setState({
          isAnimating: true
        }); // Remove the popover from the DOM after animation finishes

        this.animateOutCompleteTimer = setTimeout(() => {
          this.setState({
            isAnimating: false,
            // Reset to ideal placement specified in props
            placement: this.props.placement
          });
        }, this.props.animateOutTime || ANIMATE_OUT_TIME);
      }
    });

    _defineProperty(this, "onAnchorClick", e => {
      if (this.props.onClick) {
        this.props.onClick(e);
      }
    });

    _defineProperty(this, "onAnchorMouseEnter", e => {
      // First clear any existing close timers, this ensures that the user can
      // move their mouse from the popover back to anchor without it hiding
      if (this.onMouseLeaveTimer) {
        clearTimeout(this.onMouseLeaveTimer);
      }

      this.triggerOnMouseEnterWithDelay(e);
    });

    _defineProperty(this, "onAnchorMouseLeave", e => {
      // Clear any existing open timer, otherwise popover could be stuck open
      if (this.onMouseEnterTimer) {
        clearTimeout(this.onMouseEnterTimer);
      }

      this.triggerOnMouseLeaveWithDelay(e);
    });

    _defineProperty(this, "onPopoverMouseEnter", () => {
      if (this.onMouseLeaveTimer) {
        clearTimeout(this.onMouseLeaveTimer);
      }
    });

    _defineProperty(this, "onPopoverMouseLeave", e => {
      this.triggerOnMouseLeaveWithDelay(e);
    });

    _defineProperty(this, "onPopperUpdate", (normalizedOffsets, data) => {
      const placement = fromPopperPlacement(data.placement) || PLACEMENT.top;
      this.setState({
        arrowOffset: normalizedOffsets.arrow,
        popoverOffset: normalizedOffsets.popper,
        placement
      }); // Now that element has been positioned, we can animate it in

      this.animateInTimer = setTimeout(this.animateIn, ANIMATE_IN_TIME);
      return data;
    });

    _defineProperty(this, "triggerOnMouseLeave", e => {
      if (this.props.onMouseLeave) {
        this.props.onMouseLeave(e);
      }
    });

    _defineProperty(this, "triggerOnMouseEnter", e => {
      if (this.props.onMouseEnter) {
        this.props.onMouseEnter(e);
      }
    });

    _defineProperty(this, "onDocumentClick", evt => {
      const target = evt.target;
      const popper = this.popperRef.current;
      const anchor = this.anchorRef.current; // Ignore document click if it came from popover or anchor

      if (!popper || popper === target || popper.contains(target)) {
        return;
      }

      if (!anchor || anchor === target || anchor.contains(target)) {
        return;
      }

      if (this.props.onClickOutside) {
        this.props.onClickOutside(evt);
      }
    });
  }

  componentDidMount() {
    this.generatedId = getBuiId();
    this.setState({
      isMounted: true
    });
  }

  componentDidUpdate(prevProps, prevState) {
    this.init(prevProps, prevState);

    if (this.props.autoFocus && this.props.focusLock && !this.state.autoFocusAfterPositioning && this.popperRef.current !== null && this.popperRef.current.getBoundingClientRect().top > 0) {
      this.setState({
        autoFocusAfterPositioning: true
      });
    }

    if (process.env.NODE_ENV !== "production") {
      if (!this.anchorRef.current) {
        // eslint-disable-next-line no-console
        console.warn(`[baseui][Popover] ref has not been passed to the Popper's anchor element.
              See how to pass the ref to an anchor element in the Popover example
              http://baseui.design/components/popover#anchor-ref-handling-example`);
      }
    }
  }

  init(prevProps, prevState) {
    if (this.props.isOpen !== prevProps.isOpen || this.state.isMounted !== prevState.isMounted || this.state.isLayerMounted !== prevState.isLayerMounted) {
      // Transition from closed to open.
      if (this.props.isOpen && this.state.isLayerMounted) {
        // Clear any existing timers (like previous animateOutCompleteTimer)
        this.clearTimers();
        return;
      } // Transition from open to closed.


      if (!this.props.isOpen && prevProps.isOpen) {
        this.animateOutTimer = setTimeout(this.animateOut, 20);
        return;
      }
    }
  }

  componentWillUnmount() {
    this.clearTimers();
  }

  getDefaultState(props) {
    return {
      isAnimating: false,
      arrowOffset: {
        left: 0,
        top: 0
      },
      popoverOffset: {
        left: 0,
        top: 0
      },
      placement: props.placement,
      isMounted: false,
      isLayerMounted: false,
      autoFocusAfterPositioning: false
    };
  }

  clearTimers() {
    [this.animateInTimer, this.animateOutTimer, this.animateOutCompleteTimer, this.onMouseEnterTimer, this.onMouseLeaveTimer].forEach(timerId => {
      if (timerId) {
        clearTimeout(timerId);
      }
    });
  }

  triggerOnMouseLeaveWithDelay(e) {
    const {
      onMouseLeaveDelay
    } = this.props;

    if (onMouseLeaveDelay) {
      this.onMouseLeaveTimer = setTimeout(() => this.triggerOnMouseLeave(e), onMouseLeaveDelay);
      return;
    }

    this.triggerOnMouseLeave(e);
  }

  triggerOnMouseEnterWithDelay(e) {
    const {
      onMouseEnterDelay
    } = this.props;

    if (onMouseEnterDelay) {
      this.onMouseEnterTimer = setTimeout(() => this.triggerOnMouseEnter(e), onMouseEnterDelay);
      return;
    }

    this.triggerOnMouseEnter(e);
  }

  isClickTrigger() {
    return this.props.triggerType === TRIGGER_TYPE.click;
  }

  isHoverTrigger() {
    return this.props.triggerType === TRIGGER_TYPE.hover;
  }

  isAccessibilityTypeMenu() {
    return this.props.accessibilityType === ACCESSIBILITY_TYPE.menu;
  }

  isAccessibilityTypeTooltip() {
    return this.props.accessibilityType === ACCESSIBILITY_TYPE.tooltip;
  }

  getAnchorIdAttr() {
    const popoverId = this.getPopoverIdAttr();
    return popoverId ? `${popoverId}__anchor` : null;
  }

  getPopoverIdAttr() {
    return this.props.id || this.generatedId || null;
  }

  getAnchorProps() {
    const {
      isOpen
    } = this.props;
    const anchorProps = {
      'aria-haspopup': 'true',
      'aria-expanded': isOpen ? 'true' : 'false',
      key: 'popover-anchor',
      ref: this.anchorRef
    };
    const popoverId = this.getPopoverIdAttr();

    if (this.isAccessibilityTypeMenu()) {
      const relationAttr = this.isClickTrigger() ? 'aria-controls' : 'aria-owns';
      anchorProps[relationAttr] = isOpen ? popoverId : null;
    } else if (this.isAccessibilityTypeTooltip()) {
      anchorProps.id = this.getAnchorIdAttr();
      anchorProps['aria-describedby'] = isOpen ? popoverId : null;
    }

    if (this.isHoverTrigger()) {
      anchorProps.onMouseEnter = this.onAnchorMouseEnter;
      anchorProps.onMouseLeave = this.onAnchorMouseLeave; // Make it focusable too

      anchorProps.onBlur = this.props.onBlur;
      anchorProps.onFocus = this.props.onFocus;
    } else {
      anchorProps.onClick = this.onAnchorClick;
    }

    return anchorProps;
  }

  getPopoverBodyProps() {
    const bodyProps = {};
    const popoverId = this.getPopoverIdAttr();

    if (this.isAccessibilityTypeMenu()) {
      bodyProps.id = popoverId;
    } else if (this.isAccessibilityTypeTooltip()) {
      bodyProps.id = popoverId;
      bodyProps.role = 'tooltip';
    }

    if (this.isHoverTrigger()) {
      bodyProps.onMouseEnter = this.onPopoverMouseEnter;
      bodyProps.onMouseLeave = this.onPopoverMouseLeave;
    }

    return bodyProps;
  }

  getSharedProps() {
    const {
      isOpen,
      showArrow,
      popoverMargin = POPOVER_MARGIN
    } = this.props;
    const {
      isAnimating,
      arrowOffset,
      popoverOffset,
      placement
    } = this.state;
    return {
      $showArrow: !!showArrow,
      $arrowOffset: arrowOffset,
      $popoverOffset: popoverOffset,
      $placement: placement,
      $isAnimating: isAnimating,
      $isOpen: isOpen,
      $popoverMargin: popoverMargin
    };
  }

  getAnchorFromChildren() {
    const {
      children
    } = this.props;
    const childArray = React.Children.toArray(children);

    if (childArray.length !== 1) {
      // eslint-disable-next-line no-console
      console.error(`[baseui] Exactly 1 child must be passed to Popover/Tooltip, found ${childArray.length} children`);
    }

    return childArray[0];
  }

  renderAnchor() {
    const anchor = this.getAnchorFromChildren();

    if (!anchor) {
      return null;
    }

    const isValidElement = /*#__PURE__*/React.isValidElement(anchor);
    const anchorProps = this.getAnchorProps();

    if (typeof anchor === 'object' && isValidElement) {
      return /*#__PURE__*/React.cloneElement(anchor, anchorProps);
    }

    return /*#__PURE__*/React.createElement("span", anchorProps, anchor);
  }

  renderPopover(renderedContent) {
    const {
      showArrow,
      overrides = {}
    } = this.props;
    const {
      Arrow: ArrowOverride,
      Body: BodyOverride,
      Inner: InnerOverride
    } = overrides;
    const Arrow = getOverride(ArrowOverride) || StyledArrow;
    const Body = getOverride(BodyOverride) || StyledBody;
    const Inner = getOverride(InnerOverride) || StyledInner;
    const sharedProps = this.getSharedProps();
    const bodyProps = this.getPopoverBodyProps();
    return /*#__PURE__*/React.createElement(Body, _extends({
      key: "popover-body",
      ref: this.popperRef,
      "data-baseweb": this.props['data-baseweb'] || 'popover'
    }, bodyProps, sharedProps, getOverrideProps(BodyOverride)), showArrow ? /*#__PURE__*/React.createElement(Arrow, _extends({
      key: "popover-arrow",
      ref: this.arrowRef
    }, sharedProps, getOverrideProps(ArrowOverride))) : null, /*#__PURE__*/React.createElement(Inner, _extends({}, sharedProps, getOverrideProps(InnerOverride)), renderedContent));
  }

  renderContent() {
    const {
      content
    } = this.props;
    return typeof content === 'function' ? content() : content;
  }

  render() {
    const mountedAndOpen = this.state.isMounted && this.props.isOpen;
    const rendered = [this.renderAnchor()];
    const renderedContent = mountedAndOpen || this.props.renderAll ? this.renderContent() : null;
    const defaultPopperOptions = {
      modifiers: {
        preventOverflow: {
          enabled: !this.props.ignoreBoundary
        }
      }
    }; // Only render popover on the browser (portals aren't supported server-side)

    if (renderedContent) {
      if (mountedAndOpen) {
        rendered.push( /*#__PURE__*/React.createElement(Layer, {
          key: "new-layer",
          mountNode: this.props.mountNode,
          onEscape: this.props.onEsc,
          onDocumentClick: this.onDocumentClick,
          onMount: () => this.setState({
            isLayerMounted: true
          }),
          onUnmount: () => this.setState({
            isLayerMounted: false
          })
        }, /*#__PURE__*/React.createElement(TetherBehavior, {
          anchorRef: this.anchorRef.current,
          arrowRef: this.arrowRef.current,
          popperRef: this.popperRef.current // Remove the `ignoreBoundary` prop in the next major version
          // and have it replaced with the TetherBehavior props overrides
          ,
          popperOptions: { ...defaultPopperOptions,
            ...this.props.popperOptions
          },
          onPopperUpdate: this.onPopperUpdate,
          placement: this.state.placement
        }, /*#__PURE__*/React.createElement(FocusLock, {
          disabled: !this.props.focusLock,
          noFocusGuards: false // see popover-focus-loop.scenario.js for why hover cannot return focus
          ,
          returnFocus: this.props.returnFocus && !this.isHoverTrigger(),
          autoFocus: this.state.autoFocusAfterPositioning
        }, this.renderPopover(renderedContent)))));
      } else {
        rendered.push( /*#__PURE__*/React.createElement(Hidden, {
          key: "hidden-layer"
        }, renderedContent));
      }
    }

    return rendered;
  }

}

_defineProperty(Popover, "defaultProps", defaultProps);

export default Popover;
/* eslint-enable react/no-find-dom-node */