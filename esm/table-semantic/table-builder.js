function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { StyledRoot, StyledTable, StyledTableHead, StyledTableHeadRow, StyledTableHeadCell, StyledTableHeadCellSortable, StyledTableBody, StyledTableBodyRow, StyledTableBodyCell, StyledSortAscIcon, StyledSortDescIcon, StyledSortNoneIcon } from './styled-components.js';
import { getOverrides } from '../helpers/overrides.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';

var TableBuilder =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableBuilder, _React$Component);

  function TableBuilder() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TableBuilder);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TableBuilder)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocusVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      if (isFocusVisible(event)) {
        _this.setState({
          isFocusVisible: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      if (_this.state.isFocusVisible !== false) {
        _this.setState({
          isFocusVisible: false
        });
      }
    });

    return _this;
  }

  _createClass(TableBuilder, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$overrides = _this$props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides,
          children = _this$props.children,
          data = _this$props.data,
          horizontalScrollWidth = _this$props.horizontalScrollWidth,
          sortColumn = _this$props.sortColumn,
          _this$props$sortOrder = _this$props.sortOrder,
          sortOrder = _this$props$sortOrder === void 0 ? 'ASC' : _this$props$sortOrder,
          onSort = _this$props.onSort,
          rest = _objectWithoutProperties(_this$props, ["overrides", "children", "data", "horizontalScrollWidth", "sortColumn", "sortOrder", "onSort"]);

      var _getOverrides = getOverrides(overrides.Root, StyledRoot),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Root = _getOverrides2[0],
          rootProps = _getOverrides2[1];

      var _getOverrides3 = getOverrides(overrides.Table, StyledTable),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          Table = _getOverrides4[0],
          tableProps = _getOverrides4[1];

      var _getOverrides5 = getOverrides(overrides.TableHead, StyledTableHead),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          TableHead = _getOverrides6[0],
          tableHeadProps = _getOverrides6[1];

      var _getOverrides7 = getOverrides(overrides.TableHeadRow, StyledTableHeadRow),
          _getOverrides8 = _slicedToArray(_getOverrides7, 2),
          TableHeadRow = _getOverrides8[0],
          tableHeadRowProps = _getOverrides8[1];

      var _getOverrides9 = getOverrides(overrides.TableHeadCell, StyledTableHeadCell),
          _getOverrides10 = _slicedToArray(_getOverrides9, 2),
          TableHeadCell = _getOverrides10[0],
          tableHeadCellProps = _getOverrides10[1];

      var _getOverrides11 = getOverrides(overrides.TableHeadCellSortable, StyledTableHeadCellSortable),
          _getOverrides12 = _slicedToArray(_getOverrides11, 2),
          TableHeadCellSortable = _getOverrides12[0],
          tableHeadCellSortableProps = _getOverrides12[1];

      var _getOverrides13 = getOverrides(overrides.TableBody, StyledTableBody),
          _getOverrides14 = _slicedToArray(_getOverrides13, 2),
          TableBody = _getOverrides14[0],
          tableBodyProps = _getOverrides14[1];

      var _getOverrides15 = getOverrides(overrides.TableBodyRow, StyledTableBodyRow),
          _getOverrides16 = _slicedToArray(_getOverrides15, 2),
          TableBodyRow = _getOverrides16[0],
          tableBodyRowProps = _getOverrides16[1];

      var _getOverrides17 = getOverrides(overrides.TableBodyCell, StyledTableBodyCell),
          _getOverrides18 = _slicedToArray(_getOverrides17, 2),
          TableBodyCell = _getOverrides18[0],
          tableBodyCellProps = _getOverrides18[1];

      var _getOverrides19 = getOverrides(overrides.SortAscIcon, StyledSortAscIcon),
          _getOverrides20 = _slicedToArray(_getOverrides19, 2),
          SortAscIcon = _getOverrides20[0],
          sortAscIconProps = _getOverrides20[1];

      var _getOverrides21 = getOverrides(overrides.SortDescIcon, StyledSortDescIcon),
          _getOverrides22 = _slicedToArray(_getOverrides21, 2),
          SortDescIcon = _getOverrides22[0],
          sortDescIconProps = _getOverrides22[1];

      var _getOverrides23 = getOverrides(overrides.SortNoneIcon, StyledSortNoneIcon),
          _getOverrides24 = _slicedToArray(_getOverrides23, 2),
          SortNoneIcon = _getOverrides24[0],
          sortNoneIconProps = _getOverrides24[1];

      var columns = React.Children.toArray(children).filter(Boolean).map(function (child) {
        return child.props;
      });

      function renderHeader(col, colIndex, isFocusVisible) {
        var colOverrides = col.overrides || {};

        if (!col.sortable) {
          var _getOverrides25 = getOverrides(colOverrides.TableHeadCell, TableHeadCell),
              _getOverrides26 = _slicedToArray(_getOverrides25, 2),
              ColTableHeadCell = _getOverrides26[0],
              colTableHeadCellProps = _getOverrides26[1];

          return React.createElement(ColTableHeadCell, _extends({
            key: colIndex,
            $col: col,
            $colIndex: colIndex
          }, tableHeadCellProps, colTableHeadCellProps), col.header);
        }

        var _getOverrides27 = getOverrides(colOverrides.TableHeadCellSortable, TableHeadCellSortable),
            _getOverrides28 = _slicedToArray(_getOverrides27, 2),
            ColTableHeadCellSortable = _getOverrides28[0],
            colTableHeadCellSortableProps = _getOverrides28[1];

        var sortIcon = null;
        var sortLabel = 'not sorted';

        switch (col.id === sortColumn && sortOrder) {
          case 'ASC':
            sortIcon = React.createElement(SortAscIcon, _extends({
              "aria-hidden": true,
              role: "presentation"
            }, sortAscIconProps));
            sortLabel = 'ascending sorting';
            break;

          case 'DESC':
            sortIcon = React.createElement(SortDescIcon, _extends({
              "aria-hidden": true,
              role: "presentation"
            }, sortDescIconProps));
            sortLabel = 'descending sorting';
            break;

          default:
            sortIcon = React.createElement(SortNoneIcon, _extends({
              "aria-hidden": true,
              role: "presentation"
            }, sortNoneIconProps));
            break;
        }

        return React.createElement(ColTableHeadCellSortable, _extends({
          key: colIndex,
          $col: col,
          $colIndex: colIndex,
          role: "button",
          tabIndex: "0",
          "aria-label": "".concat(col.header, ", ").concat(sortLabel),
          $isFocusVisible: isFocusVisible,
          onClick: function onClick() {
            return onSort && onSort(col.id);
          },
          onKeyDown: function onKeyDown(e) {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSort && onSort(col.id);
            }
          }
        }, tableHeadCellSortableProps, colTableHeadCellSortableProps), col.header, sortIcon);
      }

      function renderCell(col, colIndex, row, rowIndex) {
        var colOverrides = col.overrides || {};

        var _getOverrides29 = getOverrides(colOverrides.TableBodyCell, TableBodyCell),
            _getOverrides30 = _slicedToArray(_getOverrides29, 2),
            ColTableBodyCell = _getOverrides30[0],
            colTableBodyCellProps = _getOverrides30[1];

        return React.createElement(ColTableBodyCell, _extends({
          key: colIndex,
          $col: col,
          $colIndex: colIndex,
          $row: row,
          $rowIndex: rowIndex,
          $isNumeric: col.numeric
        }, tableBodyCellProps, colTableBodyCellProps), col.children(row, rowIndex));
      }

      return React.createElement(Root, _extends({
        "data-baseweb": "table-builder-semantic"
      }, rootProps, rest), React.createElement(Table, _extends({
        $width: horizontalScrollWidth
      }, tableProps, {
        onBlur: forkBlur(tableProps, this.handleBlur),
        onFocus: forkFocus(tableProps, this.handleFocus)
      }), React.createElement(TableHead, tableHeadProps, React.createElement(TableHeadRow, tableHeadRowProps, columns.map(function (col, colIndex) {
        return renderHeader(col, colIndex, _this2.state.isFocusVisible);
      }))), React.createElement(TableBody, tableBodyProps, data.map(function (row, rowIndex) {
        return React.createElement(TableBodyRow, _extends({
          key: rowIndex,
          $row: row,
          $rowIndex: rowIndex
        }, tableBodyRowProps), columns.map(function (col, colIndex) {
          return renderCell(col, colIndex, row, rowIndex);
        }));
      }))));
    }
  }]);

  return TableBuilder;
}(React.Component);

_defineProperty(TableBuilder, "defaultProps", {
  data: []
});

export { TableBuilder as default };