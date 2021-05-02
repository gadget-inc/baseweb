function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { StyledRoot, StyledTable, StyledTableHead, StyledTableHeadRow, StyledTableHeadCell, StyledTableHeadCellSortable, StyledTableBody, StyledTableBodyRow, StyledTableBodyCell, StyledTableLoadingMessage, StyledTableEmptyMessage, StyledSortAscIcon, StyledSortDescIcon, StyledSortNoneIcon } from './styled-components.js';
import { getOverrides } from '../helpers/overrides.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';
export default class TableBuilder extends React.Component {
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
      children,
      data,
      horizontalScrollWidth,
      sortColumn,
      sortOrder = 'ASC',
      onSort,
      isLoading,
      loadingMessage,
      emptyMessage,
      ...rest
    } = this.props;
    const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
    const [Table, tableProps] = getOverrides(overrides.Table, StyledTable);
    const [TableHead, tableHeadProps] = getOverrides(overrides.TableHead, StyledTableHead);
    const [TableHeadRow, tableHeadRowProps] = getOverrides(overrides.TableHeadRow, StyledTableHeadRow);
    const [TableHeadCell, tableHeadCellProps] = getOverrides(overrides.TableHeadCell, StyledTableHeadCell);
    const [TableHeadCellSortable, tableHeadCellSortableProps] = getOverrides(overrides.TableHeadCellSortable, StyledTableHeadCellSortable);
    const [TableBody, tableBodyProps] = getOverrides(overrides.TableBody, StyledTableBody);
    const [TableBodyRow, tableBodyRowProps] = getOverrides(overrides.TableBodyRow, StyledTableBodyRow);
    const [TableBodyCell, tableBodyCellProps] = getOverrides(overrides.TableBodyCell, StyledTableBodyCell);
    const [TableLoadingMessage, tableLoadingMessageProps] = getOverrides(overrides.TableLoadingMessage, StyledTableLoadingMessage);
    const [TableEmptyMessage, tableEmptyMessageProps] = getOverrides(overrides.TableEmptyMessage, StyledTableEmptyMessage);
    const [SortAscIcon, sortAscIconProps] = getOverrides(overrides.SortAscIcon, StyledSortAscIcon);
    const [SortDescIcon, sortDescIconProps] = getOverrides(overrides.SortDescIcon, StyledSortDescIcon);
    const [SortNoneIcon, sortNoneIconProps] = getOverrides(overrides.SortNoneIcon, StyledSortNoneIcon);
    const columns = React.Children.toArray(children).filter(Boolean).map(child => child.props);

    function renderHeader(col, colIndex, isFocusVisible) {
      const colOverrides = col.overrides || {};

      if (!col.sortable) {
        const [ColTableHeadCell, colTableHeadCellProps] = getOverrides(colOverrides.TableHeadCell, TableHeadCell);
        return /*#__PURE__*/React.createElement(ColTableHeadCell, _extends({
          key: colIndex,
          $col: col,
          $colIndex: colIndex
        }, tableHeadCellProps, colTableHeadCellProps), col.header);
      }

      const [ColTableHeadCellSortable, colTableHeadCellSortableProps] = getOverrides(colOverrides.TableHeadCellSortable, TableHeadCellSortable);
      let sortIcon = null;
      let sortLabel = 'not sorted';

      switch (col.id === sortColumn && sortOrder) {
        case 'ASC':
          sortIcon = /*#__PURE__*/React.createElement(SortAscIcon, _extends({
            "aria-hidden": true,
            role: "presentation"
          }, sortAscIconProps));
          sortLabel = 'ascending sorting';
          break;

        case 'DESC':
          sortIcon = /*#__PURE__*/React.createElement(SortDescIcon, _extends({
            "aria-hidden": true,
            role: "presentation"
          }, sortDescIconProps));
          sortLabel = 'descending sorting';
          break;

        default:
          sortIcon = /*#__PURE__*/React.createElement(SortNoneIcon, _extends({
            "aria-hidden": true,
            role: "presentation"
          }, sortNoneIconProps));
          break;
      }

      return /*#__PURE__*/React.createElement(ColTableHeadCellSortable, _extends({
        key: colIndex,
        $col: col,
        $colIndex: colIndex,
        role: "button",
        tabIndex: "0",
        "aria-label": `${col.tableHeadAriaLabel || col.header}, ${sortLabel}`,
        $isFocusVisible: isFocusVisible,
        onClick: () => onSort && onSort(col.id),
        onKeyDown: e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSort && onSort(col.id);
          }
        }
      }, tableHeadCellSortableProps, colTableHeadCellSortableProps), col.header, sortIcon);
    }

    function renderCell(col, colIndex, row, rowIndex) {
      const colOverrides = col.overrides || {};
      const [ColTableBodyCell, colTableBodyCellProps] = getOverrides(colOverrides.TableBodyCell, TableBodyCell);
      return /*#__PURE__*/React.createElement(ColTableBodyCell, _extends({
        key: colIndex,
        $col: col,
        $colIndex: colIndex,
        $row: row,
        $rowIndex: rowIndex,
        $isNumeric: col.numeric
      }, tableBodyCellProps, colTableBodyCellProps), col.children(row, rowIndex));
    }

    const isEmpty = !isLoading && data.length === 0;
    const isRendered = !isLoading && !isEmpty;
    return /*#__PURE__*/React.createElement(Root, _extends({
      "data-baseweb": "table-builder-semantic"
    }, rootProps, rest), /*#__PURE__*/React.createElement(Table, _extends({
      $width: horizontalScrollWidth
    }, tableProps, {
      onBlur: forkBlur(tableProps, this.handleBlur),
      onFocus: forkFocus(tableProps, this.handleFocus)
    }), /*#__PURE__*/React.createElement(TableHead, tableHeadProps, /*#__PURE__*/React.createElement(TableHeadRow, tableHeadRowProps, columns.map((col, colIndex) => renderHeader(col, colIndex, this.state.isFocusVisible)))), /*#__PURE__*/React.createElement(TableBody, tableBodyProps, isLoading && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: columns.length
    }, /*#__PURE__*/React.createElement(TableLoadingMessage, tableLoadingMessageProps, typeof loadingMessage === 'function' ? loadingMessage() : loadingMessage))), isEmpty && emptyMessage && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: columns.length
    }, /*#__PURE__*/React.createElement(TableEmptyMessage, tableEmptyMessageProps, typeof emptyMessage === 'function' ? emptyMessage() : emptyMessage))), isRendered && data.map((row, rowIndex) => /*#__PURE__*/React.createElement(TableBodyRow, _extends({
      key: rowIndex,
      $row: row,
      $rowIndex: rowIndex
    }, tableBodyRowProps), columns.map((col, colIndex) => renderCell(col, colIndex, row, rowIndex)))))));
  }

}

_defineProperty(TableBuilder, "defaultProps", {
  data: [],
  loadingMessage: 'Loading...'
});