/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { isFragment } from 'react-is';
export const flattenFragments = (children, ChildWrapper, depth = 0) => React.Children.toArray(children).reduce((acc, child, i) => {
  if (isFragment(child)) {
    acc.push( // $FlowFixMe
    ...flattenFragments(child.props.children, ChildWrapper, depth + 1));
  } else if ( /*#__PURE__*/React.isValidElement(child)) {
    if (ChildWrapper) {
      acc.push( /*#__PURE__*/React.createElement(ChildWrapper, {
        key: `${depth}.${i}`
      }, child));
    } else {
      acc.push(child);
    }
  }

  return acc;
}, []);