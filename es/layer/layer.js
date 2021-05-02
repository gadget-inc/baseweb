function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* global document */
import * as React from 'react';
import ReactDOM from 'react-dom';
import { styled } from '../styles/index.js';
import { LayersContext, Consumer } from './layers-manager.js';
const Container = styled('div', ({
  $zIndex
}) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: $zIndex || null
}));
Container.displayName = "Container";

class LayerComponent extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      container: null
    });

    _defineProperty(this, "onEscape", () => {
      if (this.props.onEscape) {
        this.props.onEscape();
      }
    });

    _defineProperty(this, "onDocumentClick", event => {
      if (this.props.onDocumentClick) {
        this.props.onDocumentClick(event);
      }
    });
  }

  componentDidMount() {
    this.context.addEscapeHandler(this.onEscape);
    this.context.addDocClickHandler(this.onDocumentClick);
    const {
      onMount,
      mountNode,
      host: layersManagerHost
    } = this.props;

    if (mountNode) {
      onMount && onMount();
      return;
    } // There was no LayersManager added if this.props.host === undefined.
    // Use document.body is the case no LayersManager is used.


    const hasLayersManager = layersManagerHost !== undefined;

    if (process.env.NODE_ENV !== "production") {
      if (!hasLayersManager) {
        console.warn('`LayersManager` was not found. This occurs if you are attempting to use a component requiring `Layer` without using the `BaseProvider` at the root of your app. Please visit https://baseweb.design/components/base-provider/ for more information');
      }
    }

    const host = hasLayersManager ? layersManagerHost : document.body;

    if (host) {
      this.addContainer(host);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      host,
      mountNode
    } = this.props;

    if (mountNode) {
      return;
    }

    if (host && host !== prevProps.host && prevProps.host === null) {
      this.addContainer(host);
    }
  }

  componentWillUnmount() {
    this.context.removeEscapeHandler(this.onEscape);
    this.context.removeDocClickHandler(this.onDocumentClick);

    if (this.props.onUnmount) {
      this.props.onUnmount();
    }

    const host = this.props.host;
    const container = this.state.container;

    if (host && container) {
      if (host.contains(container)) {
        host.removeChild(container);
      }
    }
  }

  addContainer(host) {
    const {
      index,
      mountNode,
      onMount
    } = this.props; // Do nothing if mountNode is provided

    if (mountNode) {
      return;
    }

    if (host) {
      const container = host.ownerDocument.createElement('div'); // `host` is an DOM node, but not a React component

      const sibling = typeof index === 'number' ? host.children[index] : null;
      sibling ? host.insertBefore(container, sibling) : host.appendChild(container);
      this.setState({
        container
      }, () => {
        onMount && onMount();
      });
    }
  }

  render() {
    const {
      container
    } = this.state;
    const {
      children,
      mountNode,
      zIndex
    } = this.props; // Only adding an additional wrapper when a layer has z-index to be set

    const childrenToRender = zIndex ? /*#__PURE__*/React.createElement(Container, {
      $zIndex: zIndex
    }, children) : children;

    if (typeof document !== 'undefined') {
      if (mountNode || container) {
        // $FlowFixMe
        return /*#__PURE__*/ReactDOM.createPortal(childrenToRender, mountNode || container);
      }

      return null;
    }

    return null;
  }

}

_defineProperty(LayerComponent, "contextType", LayersContext);

export default function Layer(props) {
  return /*#__PURE__*/React.createElement(Consumer, null, ({
    host,
    zIndex
  }) => /*#__PURE__*/React.createElement(LayerComponent, _extends({}, props, {
    host: host,
    zIndex: zIndex
  })));
}