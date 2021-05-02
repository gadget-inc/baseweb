function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable cup/no-undef */
import * as React from 'react';
import ReactDOM from 'react-dom';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
import { KIND, PLACEMENT } from './constants.js';
import { Root as StyledRoot, Body as StyledBody, CloseIconSvg as StyledCloseIcon, InnerContainer as StyledInnerContainer } from './styled-components.js';
import Toast from './toast.js';
let toasterRef = null;
export class ToasterContainer extends React.Component {
  constructor(_props) {
    super(_props);

    _defineProperty(this, "state", {
      isMounted: false,
      toasts: []
    });

    _defineProperty(this, "dismissHandlers", {});

    _defineProperty(this, "toastId", 0);

    _defineProperty(this, "getToastProps", props => {
      const {
        autoFocus,
        autoHideDuration,
        closeable
      } = this.props;
      const key = props.key || `toast-${this.toastId++}`;
      return {
        autoFocus,
        autoHideDuration,
        closeable,
        ...props,
        key
      };
    });

    _defineProperty(this, "show", (props = {}) => {
      if (this.state.toasts.map(t => t.key).includes(props.key)) {
        this.update(props.key, props);
        return props.key;
      }

      const toastProps = this.getToastProps(props);
      this.setState(({
        toasts
      }) => {
        return {
          toasts: [...toasts, toastProps]
        };
      });
      return toastProps.key;
    });

    _defineProperty(this, "update", (key, props) => {
      this.setState(({
        toasts
      }) => {
        const updatedToasts = toasts.map(toast => {
          if (toast.key === key) {
            const updatedToastProps = { ...toast,
              ...this.getToastProps({
                autoHideDuration: toast.autoHideDuration,
                ...props
              }),
              key,
              ...(this.props.resetAutoHideTimerOnUpdate ? {
                __updated: (parseInt(toast.__updated) || 0) + 1
              } : {})
            };
            return updatedToastProps;
          }

          return toast;
        });
        return {
          toasts: updatedToasts
        };
      });
    });

    _defineProperty(this, "dismiss", key => {
      if (this.dismissHandlers[key]) {
        this.dismissHandlers[key]();
      }
    });

    _defineProperty(this, "clearAll", () => {
      Object.keys(this.dismissHandlers).forEach(key => {
        this.dismissHandlers[key]();
      });
    });

    _defineProperty(this, "clear", key => {
      key === undefined ? this.clearAll() : this.dismiss(key);
    });

    _defineProperty(this, "internalOnClose", key => {
      delete this.dismissHandlers[key];
      this.setState(({
        toasts
      }) => ({
        toasts: toasts.filter(t => {
          return !(t.key === key);
        })
      }));
    });

    _defineProperty(this, "getOnCloseHandler", (key, onClose) => {
      return () => {
        this.internalOnClose(key);
        typeof onClose === 'function' && onClose();
      };
    });

    _defineProperty(this, "renderToast", toastProps => {
      const {
        onClose,
        children,
        key,
        ...restProps
      } = toastProps;
      const {
        ToastBody: BodyOverride,
        ToastCloseIcon: CloseIconOverride,
        ToastInnerContainer: InnerContainerOverride
      } = this.props.overrides;
      const globalToastOverrides = mergeOverrides({
        Body: StyledBody,
        CloseIcon: StyledCloseIcon,
        InnerContainer: StyledInnerContainer
      }, // $FlowFixMe
      {
        Body: BodyOverride,
        CloseIcon: CloseIconOverride,
        InnerContainer: InnerContainerOverride
      });
      const toastOverrides = mergeOverrides(globalToastOverrides, toastProps.overrides);
      return /*#__PURE__*/React.createElement(Toast, _extends({}, restProps, {
        overrides: toastOverrides,
        key: key,
        onClose: this.getOnCloseHandler(key, onClose)
      }), ({
        dismiss
      }) => {
        this.dismissHandlers[key] = dismiss; // $FlowFixMe

        return children;
      });
    });

    _defineProperty(this, "getSharedProps", () => {
      const {
        placement
      } = this.props;
      return {
        $placement: placement
      };
    });

    toasterRef = this;
  }

  componentDidMount() {
    this.setState({
      isMounted: true
    });
  }

  render() {
    const sharedProps = this.getSharedProps();
    const {
      Root: RootOverride
    } = this.props.overrides;
    const [Root, rootProps] = getOverrides(RootOverride, StyledRoot);
    const toastsLength = this.state.toasts.length;
    const toastsToRender = []; // render the toasts from the newest at the start
    // to the oldest at the end
    // eslint-disable-next-line for-direction

    for (let i = toastsLength - 1; i >= 0; i--) {
      toastsToRender.push(this.renderToast(this.state.toasts[i]));
    }

    const root = /*#__PURE__*/React.createElement(Root, _extends({
      "data-baseweb": "toaster"
    }, sharedProps, rootProps), toastsToRender);

    if (this.state.isMounted) {
      // Only render on the browser (portals aren't supported server-side)
      if (this.props.usePortal) {
        if (typeof document !== 'undefined') {
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/ReactDOM.createPortal(root, // $FlowFixMe
          document.body), this.props.children);
        }
      } else {
        return /*#__PURE__*/React.createElement(React.Fragment, null, root, this.props.children);
      }
    }

    return null;
  }

}

_defineProperty(ToasterContainer, "defaultProps", {
  autoFocus: false,
  autoHideDuration: 0,
  children: null,
  closeable: true,
  overrides: {},
  placement: PLACEMENT.top,
  resetAutoHideTimerOnUpdate: true,
  usePortal: true
});

const toaster = {
  getRef: function () {
    return toasterRef;
  },
  show: function (children, props = {}) {
    // toasts can not be added until Toaster is mounted
    // no SSR for the `toaster.show()`
    const toasterInstance = this.getRef();

    if (toasterInstance) {
      return toasterInstance.show({ ...props,
        children
      });
    } else if (process.env.NODE_ENV !== "production") {
      throw new Error('Please make sure to add the ToasterContainer to your application before adding toasts! You can find more information here: https://baseweb.design/components/toast');
    }
  },
  info: function (children, props = {}) {
    return this.show(children, { ...props,
      kind: KIND.info
    });
  },
  positive: function (children, props = {}) {
    return this.show(children, { ...props,
      kind: KIND.positive
    });
  },
  warning: function (children, props = {}) {
    return this.show(children, { ...props,
      kind: KIND.warning
    });
  },
  negative: function (children, props = {}) {
    return this.show(children, { ...props,
      kind: KIND.negative
    });
  },
  update: function (key, props) {
    const toasterInstance = this.getRef();

    if (toasterInstance) {
      toasterInstance.update(key, props);
    } else if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.error('No ToasterContainer is mounted yet.');
    }
  },
  clear: function (key) {
    const toasterInstance = this.getRef();

    if (toasterInstance) {
      toasterInstance.clear(key);
    } else if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.error('No ToasterContainer is mounted yet.');
    }
  }
};
export default toaster;