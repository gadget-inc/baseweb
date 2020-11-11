"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MeasureColumnWidths;

var React = _interopRequireWildcard(require("react"));

var _index = require("../styles/index.js");

var _headerCell = _interopRequireDefault(require("./header-cell.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// https://github.com/Swizec/useDimensions
function useDimensions() {
  var _React$useState = React.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      dimensions = _React$useState2[0],
      setDimensions = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      node = _React$useState4[0],
      setNode = _React$useState4[1];

  var ref = React.useCallback(function (node) {
    setNode(node);
  }, []);
  React.useLayoutEffect(function () {
    if (typeof document !== 'undefined') {
      if (node) {
        window.requestAnimationFrame(function () {
          setDimensions(node.getBoundingClientRect());
        });
      }
    }
  }, [node]);
  return [ref, dimensions];
}

function ElementMeasurer(props) {
  var onDimensionsChange = props.onDimensionsChange;

  var _useDimensions = useDimensions(),
      _useDimensions2 = _slicedToArray(_useDimensions, 2),
      ref = _useDimensions2[0],
      dimensions = _useDimensions2[1];

  React.useEffect(function () {
    onDimensionsChange(dimensions);
  }, [dimensions, onDimensionsChange]);
  return /*#__PURE__*/React.cloneElement(props.item, {
    ref: ref
  });
}

// sample size could likely be generated based on row count, to have higher confidence
var MAX_SAMPLE_SIZE = 50;

function generateSampleIndices(inputMin, inputMax, maxSamples) {
  var indices = [];
  var queue = [[inputMin, inputMax]];

  while (queue.length > 0) {
    var _queue$shift = queue.shift(),
        _queue$shift2 = _slicedToArray(_queue$shift, 2),
        min = _queue$shift2[0],
        max = _queue$shift2[1];

    if (indices.length < maxSamples) {
      var pivot = Math.floor((min + max) / 2);
      indices.push(pivot);
      var left = pivot - 1;
      var right = pivot + 1;

      if (left >= min) {
        queue.push([min, left]);
      }

      if (right <= max) {
        queue.push([right, max]);
      }
    }
  }

  return indices;
}

function MeasureColumnWidths(props) {
  var _useStyletron = (0, _index.useStyletron)(),
      _useStyletron2 = _slicedToArray(_useStyletron, 1),
      css = _useStyletron2[0];

  var measurementCount = React.useRef(0);
  var sampleSize = React.useMemo(function () {
    if (props.rows.length < MAX_SAMPLE_SIZE) {
      return props.rows.length;
    }

    return MAX_SAMPLE_SIZE;
  }, [props.rows.length]);
  var finishedMeasurementCount = React.useMemo(function () {
    return (sampleSize + 1) * props.columns.length;
  }, [props.columns, sampleSize]);
  var dimensionsCache = React.useRef(props.widths);
  var sampleRowIndicesByColumn = React.useMemo(function () {
    measurementCount.current = 0;
    dimensionsCache.current = props.widths;
    var indices = generateSampleIndices(0, props.rows.length - 1, sampleSize);
    return props.columns.map(function () {
      return indices;
    });
  }, [props.columns, props.rows, props.widths, sampleSize]);

  function handleDimensionsChange(columnIndex, rowIndex, dimensions) {
    if (dimensions.width === undefined) return;
    measurementCount.current += 1;
    var nextWidth = Math.min(Math.max(props.columns[columnIndex].minWidth || 0, dimensionsCache.current[columnIndex], dimensions.width + 1), props.columns[columnIndex].maxWidth || Infinity);

    if (nextWidth !== dimensionsCache.current[columnIndex]) {
      var nextWidths = _toConsumableArray(dimensionsCache.current);

      nextWidths[columnIndex] = nextWidth;
      dimensionsCache.current = nextWidths;
    }

    if (measurementCount.current >= finishedMeasurementCount) {
      props.onWidthsChange(dimensionsCache.current);
    }
  }

  var hiddenStyle = css({
    position: 'absolute',
    overflow: 'hidden',
    height: 0
  });

  var _React$useState5 = React.useState(true),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      shouldMeasure = _React$useState6[0],
      setShouldMeasure = _React$useState6[1];

  React.useEffect(function () {
    if (measurementCount.current >= finishedMeasurementCount) {
      setShouldMeasure(false);
    } else {
      if (!shouldMeasure) {
        setShouldMeasure(true);
      }
    }
  }, [measurementCount.current, finishedMeasurementCount]);

  if (!shouldMeasure) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: hiddenStyle,
    "aria-hidden": true
  }, sampleRowIndicesByColumn.map(function (rowIndices, columnIndex) {
    var Cell = props.columns[columnIndex].renderCell;
    return rowIndices.map(function (rowIndex) {
      return /*#__PURE__*/React.createElement(ElementMeasurer, {
        key: "measure-".concat(columnIndex, "-").concat(rowIndex),
        onDimensionsChange: function onDimensionsChange(dimensions) {
          return handleDimensionsChange(columnIndex, rowIndex, dimensions);
        },
        item: /*#__PURE__*/React.createElement(Cell, {
          value: props.columns[columnIndex].mapDataToValue(props.rows[rowIndex].data),
          isMeasured: true,
          onSelect: props.isSelectable && columnIndex === 0 ? function () {} : undefined
        })
      });
    });
  }), props.columns.map(function (column, columnIndex) {
    return /*#__PURE__*/React.createElement(ElementMeasurer, {
      key: "measure-column-".concat(columnIndex),
      onDimensionsChange: function onDimensionsChange(dimensions) {
        return handleDimensionsChange(columnIndex, -1, dimensions);
      },
      item: /*#__PURE__*/React.createElement(_headerCell.default, {
        index: columnIndex,
        isHovered: true,
        isMeasured: true,
        isSelectable: props.isSelectable && columnIndex === 0,
        isSelectedAll: false,
        isSelectedIndeterminate: false,
        onMouseEnter: function onMouseEnter() {},
        onMouseLeave: function onMouseLeave() {},
        onSelectAll: function onSelectAll() {},
        onSelectNone: function onSelectNone() {},
        onSort: function onSort(i) {},
        sortable: column.sortable,
        sortDirection: null,
        title: column.title
      })
    });
  }));
}