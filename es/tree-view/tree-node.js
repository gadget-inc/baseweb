function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { StyledTreeItemList, StyledTreeItem } from './styled-components.js';
import StyledTreeLabel from './tree-label.js';
import { getOverride, getOverrideProps } from '../helpers/overrides.js';
export default class TreeNode extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "treeItemRef", React.createRef());

    _defineProperty(this, "onToggle", () => {
      const {
        onToggle,
        node
      } = this.props;

      if (onToggle) {
        onToggle(node);
      }
    });

    _defineProperty(this, "onFocus", e => {
      if (e && e.target !== this.treeItemRef.current) return;
      const {
        onFocus
      } = this.props;

      if (onFocus) {
        onFocus(e);
      }
    });
  }

  componentDidMount() {
    this.props.addRef(this.props.getId(this.props.node), this.treeItemRef);
  }

  componentWillUnmount() {
    this.props.removeRef(this.props.getId(this.props.node));
  }

  render() {
    const {
      indentGuides,
      node,
      getId,
      onToggle,
      overrides = {},
      renderAll,
      selectedNodeId,
      onKeyDown,
      onFocus,
      onBlur,
      addRef,
      removeRef,
      isFocusVisible
    } = this.props;
    const {
      children,
      isExpanded,
      label
    } = node;
    const hasChildren = children && children.length !== 0;
    const {
      TreeItemList: TreeItemListOverride,
      TreeItem: TreeItemOverride,
      TreeLabel: TreeLabelOverride
    } = overrides;
    const TreeItemList = getOverride(TreeItemListOverride) || StyledTreeItemList;
    const TreeItem = getOverride(TreeItemOverride) || StyledTreeItem;
    const TreeLabel = getOverride(TreeLabelOverride) || StyledTreeLabel;
    return React.createElement(TreeItem, _extends({
      role: "treeitem",
      ref: this.treeItemRef,
      "data-nodeid": getId(node),
      tabIndex: selectedNodeId === getId(node) ? 0 : -1,
      onKeyDown: e => onKeyDown && onKeyDown(e, node),
      onBlur: onBlur,
      onFocus: this.onFocus,
      "aria-expanded": isExpanded ? true : false,
      $isLeafNode: !hasChildren
    }, getOverrideProps(TreeItemOverride)), React.createElement(TreeLabel, _extends({
      onClick: this.onToggle,
      node: node,
      hasChildren: hasChildren,
      isExpanded: isExpanded,
      isSelected: selectedNodeId === getId(node),
      isFocusVisible: isFocusVisible,
      label: label,
      overrides: overrides
    }, getOverrideProps(TreeLabelOverride))), children && (isExpanded || renderAll) && React.createElement(TreeItemList, _extends({
      role: "group",
      $indentGuides: !!indentGuides,
      $isChildNode: true,
      $expanded: !!isExpanded
    }, getOverrideProps(TreeItemListOverride)), children.map((node, index) => React.createElement(TreeNode, {
      indentGuides: !!indentGuides,
      renderAll: renderAll,
      key: index,
      node: node,
      getId: getId,
      onToggle: onToggle,
      overrides: overrides,
      selectedNodeId: selectedNodeId,
      onKeyDown: onKeyDown,
      onFocus: onFocus,
      onBlur: onBlur,
      addRef: addRef,
      removeRef: removeRef,
      isFocusVisible: isFocusVisible
    }))));
  }

}