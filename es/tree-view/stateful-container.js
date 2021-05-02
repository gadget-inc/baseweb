function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

const findSiblings = (node, children) => {
  if (children.indexOf(node) !== -1) {
    return children;
  }

  for (let child of children) {
    if (child.children) {
      const siblings = findSiblings(node, child.children);

      if (siblings != null) {
        return siblings;
      }
    }
  }

  return null;
};

export default class StatefulContainer extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", void 0);

    _defineProperty(this, "onToggle", node => {
      const {
        onToggle,
        singleExpanded
      } = this.props;
      this.setState(prevState => {
        const shouldExpand = !node.isExpanded;

        if (singleExpanded && shouldExpand) {
          const siblings = findSiblings(node, prevState.data);

          if (siblings != null) {
            siblings.forEach(sibling => {
              if (sibling !== node) {
                sibling.isExpanded = false;
              }
            });
          }
        }

        node.isExpanded = shouldExpand;
        return {
          data: prevState.data
        };
      }, () => {
        onToggle && onToggle(node);
      });
    });

    this.state = {
      data: this.props.data
    };
  }

  render() {
    const {
      children,
      ...restProps
    } = this.props;
    const {
      onToggle
    } = this;
    return children(Object.freeze({ ...restProps,
      ...this.state,
      onToggle
    }));
  }

}