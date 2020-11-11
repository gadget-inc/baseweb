function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { useStyletron } from '../styles/index.js';
import CellShell from './cell-shell.js';
import { COLUMNS } from './constants.js';
import { HighlightCellText } from './text-search.js';

function StringFilter(props) {
  return /*#__PURE__*/React.createElement("div", null, "not implemented for string column");
}

var StringCell = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useStyletron = useStyletron(),
      _useStyletron2 = _slicedToArray(_useStyletron, 1),
      css = _useStyletron2[0];

  return /*#__PURE__*/React.createElement(CellShell, {
    ref: ref,
    isMeasured: props.isMeasured,
    isSelected: props.isSelected,
    onSelect: props.onSelect
  }, /*#__PURE__*/React.createElement("div", {
    className: css({
      display: '-webkit-box',
      WebkitLineClamp: props.lineClamp || 1,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    })
  }, props.textQuery ? /*#__PURE__*/React.createElement(HighlightCellText, {
    text: props.value,
    query: props.textQuery
  }) : props.value));
});
StringCell.displayName = 'StringCell';

function StringColumn(options) {
  return {
    kind: COLUMNS.STRING,
    buildFilter: function buildFilter(params) {
      return function (data) {
        return true;
      };
    },
    textQueryFilter: function textQueryFilter(textQuery, data) {
      return data.toLowerCase().includes(textQuery.toLowerCase());
    },
    filterable: false,
    mapDataToValue: options.mapDataToValue,
    maxWidth: options.maxWidth,
    minWidth: options.minWidth,
    renderCell: /*#__PURE__*/React.forwardRef(function (props, ref) {
      return /*#__PURE__*/React.createElement(StringCell, _extends({}, props, {
        ref: ref,
        lineClamp: options.lineClamp
      }));
    }),
    renderFilter: StringFilter,
    sortable: options.sortable === undefined ? true : options.sortable,
    sortFn: function sortFn(a, b) {
      return a.localeCompare(b);
    },
    title: options.title
  };
}

export default StringColumn;