/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

/**
 * Wrap an element in FocusOnce that would normally not receive tab focus.
 * This is useful for placing initial focus in a Modal or FocusLock.
 * */
export default function FocusOnce(props) {
  const [tabIndex, setTabIndex] = React.useState('0');
  const child = React.Children.only(props.children);
  return /*#__PURE__*/React.cloneElement(child, {
    tabIndex,
    onBlur: () => setTabIndex(null)
  });
}