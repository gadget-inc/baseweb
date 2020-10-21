"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../styles/index.js");

var _cellShell = _interopRequireDefault(require("./cell-shell.js"));

var _columnCategorical = require("./column-categorical.js");

var _constants = require("./constants.js");

var _index2 = require("../locale/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function mapSelection(selection, transform) {
  var coercedSelection = new Set();
  selection.forEach(function (item) {
    return coercedSelection.add(transform(item));
  });
  return coercedSelection;
}

function BooleanFilter(props) {
  var locale = React.useContext(_index2.LocaleContext);
  var selectionString = new Set();

  if (props.filterParams && props.filterParams.selection) {
    selectionString = mapSelection(props.filterParams.selection, function (i) {
      return i ? locale.datatable.booleanFilterTrue : locale.datatable.booleanFilterFalse;
    });
  }

  return React.createElement(_columnCategorical.CategoricalFilter, {
    close: props.close,
    data: [locale.datatable.booleanFilterTrue, locale.datatable.booleanFilterFalse],
    filterParams: props.filterParams ? {
      selection: selectionString,
      description: props.filterParams.description,
      exclude: props.filterParams.exclude
    } : undefined,
    setFilter: function setFilter(params) {
      props.setFilter({
        selection: mapSelection(params.selection, function (i) {
          return i === locale.datatable.booleanFilterTrue;
        }),
        exclude: params.exclude,
        description: params.description
      });
    }
  });
}

var BooleanCell = React.forwardRef(function (props, ref) {
  var _useStyletron = (0, _index.useStyletron)(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      css = _useStyletron2[0],
      theme = _useStyletron2[1];

  var locale = React.useContext(_index2.LocaleContext);
  return React.createElement(_cellShell.default, {
    ref: ref,
    isMeasured: props.isMeasured,
    isSelected: props.isSelected,
    onSelect: props.onSelect
  }, React.createElement("div", {
    className: css({
      textAlign: props.value ? 'right' : 'left',
      minWidth: theme.sizing.scale1400,
      width: '100%'
    })
  }, props.value ? locale.datatable.booleanColumnTrueShort : locale.datatable.booleanColumnFalseShort));
});
BooleanCell.displayName = 'BooleanCell';

function BooleanColumn(options) {
  return {
    kind: _constants.COLUMNS.BOOLEAN,
    buildFilter: function buildFilter(params) {
      return function (data) {
        var included = params.selection.has(data);
        return params.exclude ? !included : included;
      };
    },
    filterable: options.filterable === undefined ? true : options.filterable,
    mapDataToValue: options.mapDataToValue,
    maxWidth: options.maxWidth,
    minWidth: options.minWidth,
    renderCell: BooleanCell,
    renderFilter: BooleanFilter,
    sortable: options.sortable === undefined ? true : options.sortable,
    sortFn: function sortFn(a, b) {
      if (a === b) return 0;
      return a ? -1 : 1;
    },
    title: options.title
  };
}

var _default = BooleanColumn;
exports.default = _default;