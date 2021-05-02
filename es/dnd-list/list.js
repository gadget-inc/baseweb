function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { Root as StyledRoot, List as StyledList, Item as StyledItem, DragHandle as StyledDragHandle, CloseHandle as StyledCloseHandle, Label as StyledLabel } from './styled-components.js';
import { List as MovableList } from 'react-movable';
import Grab from '../icon/grab.js';
import Delete from '../icon/delete.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';
import { Layer } from '../layer/index.js';

const ItemLayer = ({
  children,
  dragged
}) => {
  if (!dragged) {
    return children;
  }

  return /*#__PURE__*/React.createElement(Layer, null, children);
};

class StatelessList extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
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
  }

  render() {
    const {
      overrides = {},
      items,
      onChange,
      removable
    } = this.props;
    const {
      Root: RootOverride,
      List: ListOverride,
      Item: ItemOverride,
      DragHandle: DragHandleOverride,
      CloseHandle: CloseHandleOverride,
      Label: LabelOverride
    } = overrides;
    const [Root, rootProps] = getOverrides(RootOverride, StyledRoot);
    const [List, listProps] = getOverrides(ListOverride, StyledList);
    const [Item, itemProps] = getOverrides(ItemOverride, StyledItem);
    const [DragHandle, dragHandleProps] = getOverrides(DragHandleOverride, StyledDragHandle);
    const [CloseHandle, closeHandleProps] = getOverrides(CloseHandleOverride, StyledCloseHandle);
    const [Label, labelProps] = getOverrides(LabelOverride, StyledLabel);
    const isRemovable = this.props.removable || false;
    const isRemovableByMove = this.props.removableByMove || false;
    return /*#__PURE__*/React.createElement(Root, _extends({
      $isRemovable: isRemovable,
      "data-baseweb": "dnd-list"
    }, rootProps, {
      onFocus: forkFocus(rootProps, this.handleFocus),
      onBlur: forkBlur(rootProps, this.handleBlur)
    }), /*#__PURE__*/React.createElement(MovableList, {
      removableByMove: isRemovableByMove,
      values: items,
      onChange: onChange,
      renderList: ({
        children,
        props,
        isDragged
      }) => /*#__PURE__*/React.createElement(List, _extends({
        $isRemovable: isRemovable,
        $isDragged: isDragged,
        ref: props.ref
      }, listProps), children),
      renderItem: ({
        value,
        props,
        isDragged,
        isSelected,
        isOutOfBounds,
        index
      }) => {
        const sharedProps = {
          $isRemovable: isRemovable,
          $isRemovableByMove: isRemovableByMove,
          $isDragged: isDragged,
          $isSelected: isSelected,
          $isFocusVisible: this.state.isFocusVisible,
          $isOutOfBounds: isOutOfBounds,
          $value: value,
          $index: index
        };
        return /*#__PURE__*/React.createElement(ItemLayer, {
          dragged: isDragged,
          key: props.key
        }, /*#__PURE__*/React.createElement(Item, _extends({}, sharedProps, {
          ref: props.ref,
          tabIndex: props.tabIndex,
          "aria-roledescription": props['aria-roledescription'],
          onKeyDown: props.onKeyDown,
          onWheel: props.onWheel
        }, itemProps, {
          style: { ...props.style,
            display: 'flex'
          }
        }), /*#__PURE__*/React.createElement(DragHandle, _extends({}, sharedProps, dragHandleProps), /*#__PURE__*/React.createElement(Grab, {
          size: 24,
          color: "#CCC"
        })), /*#__PURE__*/React.createElement(Label, _extends({}, sharedProps, labelProps), value), removable && /*#__PURE__*/React.createElement(CloseHandle, _extends({}, sharedProps, {
          onClick: evt => {
            evt.preventDefault();
            onChange && onChange({
              oldIndex: typeof index !== 'undefined' ? index : 0,
              newIndex: -1
            });
          }
        }, closeHandleProps), /*#__PURE__*/React.createElement(Delete, {
          size: 24,
          color: "#CCC"
        }))));
      }
    }));
  }

}

_defineProperty(StatelessList, "defaultProps", {
  items: [],
  onChange: () => {}
});

export default StatelessList;