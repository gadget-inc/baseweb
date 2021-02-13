"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("date-fns/format/index.js"));

var _index2 = _interopRequireDefault(require("date-fns/getYear/index.js"));

var _index3 = _interopRequireDefault(require("date-fns/getMonth/index.js"));

var _index4 = _interopRequireDefault(require("date-fns/getQuarter/index.js"));

var _index5 = _interopRequireDefault(require("date-fns/getDay/index.js"));

var _index6 = _interopRequireDefault(require("date-fns/isAfter/index.js"));

var _index7 = _interopRequireDefault(require("date-fns/isBefore/index.js"));

var _index8 = _interopRequireDefault(require("date-fns/isEqual/index.js"));

var _index9 = _interopRequireDefault(require("date-fns/set/index.js"));

var _index10 = require("../button/index.js");

var _index11 = require("../button-group/index.js");

var _index12 = require("../checkbox/index.js");

var _index13 = require("../datepicker/utils/index.js");

var _index14 = require("../datepicker/index.js");

var _index15 = require("../timepicker/index.js");

var _index16 = require("../styles/index.js");

var _index17 = require("../select/index.js");

var _column = _interopRequireDefault(require("./column.js"));

var _constants = require("./constants.js");

var _filterShell = _interopRequireDefault(require("./filter-shell.js"));

var _index18 = require("../locale/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var DATE_FORMAT = 'MM-dd-yyyy';
var TIME_FORMAT = 'HH:mm ss:SS';
var FORMAT_STRING = "".concat(DATE_FORMAT, " ").concat(TIME_FORMAT);

function sortDates(a, b) {
  return a - b;
}

var RANGE_OPERATIONS = [{
  localeLabelKey: 'datetimeFilterRangeDatetime',
  id: _constants.DATETIME_OPERATIONS.RANGE_DATETIME
}, {
  localeLabelKey: 'datetimeFilterRangeDate',
  id: _constants.DATETIME_OPERATIONS.RANGE_DATE
}, {
  localeLabelKey: 'datetimeFilterRangeTime',
  id: _constants.DATETIME_OPERATIONS.RANGE_TIME
}];
var CATEGORICAL_OPERATIONS = [{
  localeLabelKey: 'datetimeFilterCategoricalWeekday',
  id: _constants.DATETIME_OPERATIONS.WEEKDAY
}, {
  localeLabelKey: 'datetimeFilterCategoricalMonth',
  id: _constants.DATETIME_OPERATIONS.MONTH
}, {
  localeLabelKey: 'datetimeFilterCategoricalQuarter',
  id: _constants.DATETIME_OPERATIONS.QUARTER
}, {
  localeLabelKey: 'datetimeFilterCategoricalHalf',
  id: _constants.DATETIME_OPERATIONS.HALF
}, {
  localeLabelKey: 'datetimeFilterCategoricalYear',
  id: _constants.DATETIME_OPERATIONS.YEAR
}];
var WEEKDAYS = [0, 1, 2, 3, 4, 5, 6];
var MONTHS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var QUARTERS = [0, 1, 2, 3];

function Checks(props) {
  var _useStyletron = (0, _index16.useStyletron)(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      css = _useStyletron2[0],
      theme = _useStyletron2[1];

  return /*#__PURE__*/React.createElement("div", {
    className: css({
      maxHeight: '256px',
      overflowY: 'auto'
    })
  }, props.options.map(function (item) {
    var checked = props.value.includes(item.id);
    return /*#__PURE__*/React.createElement("div", {
      key: item.id,
      className: css({
        marginBottom: theme.sizing.scale200
      })
    }, /*#__PURE__*/React.createElement(_index12.Checkbox, {
      checked: checked,
      onChange: function onChange() {
        if (checked) {
          props.setValue(function (prev) {
            return prev.filter(function (i) {
              return i !== item.id;
            });
          });
        } else {
          props.setValue(function (prev) {
            return [].concat(_toConsumableArray(prev), [item.id]);
          });
        }
      }
    }, item.label));
  }));
}

function filterParamsToInitialState(input) {
  var output = {
    exclude: false,
    comparatorIndex: 0,
    rangeOperator: RANGE_OPERATIONS[0],
    categoricalOperator: CATEGORICAL_OPERATIONS[0],
    rangeDates: [],
    years: [],
    halves: [],
    quarters: [],
    months: [],
    weekdays: []
  };

  if (input) {
    var op = input.operation;

    if (input.range && input.range.length) {
      if (op === _constants.DATETIME_OPERATIONS.RANGE_DATETIME) {
        output.rangeDates = input.range;
        output.rangeOperator = RANGE_OPERATIONS[0];
      } else if (op === _constants.DATETIME_OPERATIONS.RANGE_DATE) {
        output.rangeDates = input.range;
        output.rangeOperator = RANGE_OPERATIONS[1];
      } else if (op === _constants.DATETIME_OPERATIONS.RANGE_TIME) {
        output.rangeDates = input.range;
        output.rangeOperator = RANGE_OPERATIONS[2];
      }
    } else if (input.selection && input.selection.length) {
      output.comparatorIndex = 1;

      if (op === _constants.DATETIME_OPERATIONS.YEAR) {
        output.years = input.selection;
        output.categoricalOperator = CATEGORICAL_OPERATIONS[4];
      } else if (op === _constants.DATETIME_OPERATIONS.HALF) {
        output.halves = input.selection;
        output.categoricalOperator = CATEGORICAL_OPERATIONS[3];
      } else if (op === _constants.DATETIME_OPERATIONS.QUARTER) {
        output.quarters = input.selection;
        output.categoricalOperator = CATEGORICAL_OPERATIONS[2];
      } else if (op === _constants.DATETIME_OPERATIONS.MONTH) {
        output.months = input.selection;
        output.categoricalOperator = CATEGORICAL_OPERATIONS[1];
      } else if (op === _constants.DATETIME_OPERATIONS.WEEKDAY) {
        output.weekdays = input.selection;
        output.categoricalOperator = CATEGORICAL_OPERATIONS[0];
      }
    }

    if (input.exclude) {
      output.exclude = input.exclude;
    }
  }

  return output;
}

function DatetimeFilter(props) {
  var _useStyletron3 = (0, _index16.useStyletron)(),
      _useStyletron4 = _slicedToArray(_useStyletron3, 2),
      css = _useStyletron4[0],
      theme = _useStyletron4[1];

  var locale = React.useContext(_index18.LocaleContext);
  var mountNode = React.useRef();
  var initialState = filterParamsToInitialState(props.filterParams);
  var datesSorted = React.useMemo(function () {
    return props.data.sort(sortDates);
  }, [props.data]);
  var presentYears = React.useMemo(function () {
    var dict = {};
    props.data.forEach(function (date) {
      dict[(0, _index2.default)(date)] = true;
    });
    return Object.keys(dict).map(function (n) {
      return parseInt(n);
    });
  }, [props.data]);
  var startOfWeek = React.useMemo(function () {
    return (0, _index13.getStartOfWeek)(new Date(), props.locale);
  }, [props.locale]);
  var localizedWeekdays = React.useMemo(function () {
    return [].concat(_toConsumableArray(WEEKDAYS.slice((0, _index5.default)(startOfWeek), 7)), _toConsumableArray(WEEKDAYS.slice(0, (0, _index5.default)(startOfWeek))));
  }, [props.locale]);

  var _React$useState = React.useState(initialState.exclude),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      exclude = _React$useState2[0],
      setExclude = _React$useState2[1];

  var _React$useState3 = React.useState(initialState.comparatorIndex),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      comparatorIndex = _React$useState4[0],
      setComparatorIndex = _React$useState4[1];

  var _React$useState5 = React.useState([initialState.rangeOperator]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      rangeOperator = _React$useState6[0],
      setRangeOperator = _React$useState6[1];

  var _React$useState7 = React.useState([initialState.categoricalOperator]),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      categoricalOperator = _React$useState8[0],
      setCategoricalOperator = _React$useState8[1]; // eslint-disable-next-line flowtype/no-weak-types


  var _React$useState9 = React.useState(initialState.rangeDates.length ? initialState.rangeDates : [new Date(datesSorted[0]), new Date(datesSorted[datesSorted.length - 1])]),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      rangeDates = _React$useState10[0],
      setRangeDates = _React$useState10[1];

  var _React$useState11 = React.useState(initialState.years),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      years = _React$useState12[0],
      setYears = _React$useState12[1];

  var _React$useState13 = React.useState(initialState.halves),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      halves = _React$useState14[0],
      setHalves = _React$useState14[1];

  var _React$useState15 = React.useState(initialState.quarters),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      quarters = _React$useState16[0],
      setQuarters = _React$useState16[1];

  var _React$useState17 = React.useState(initialState.months),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      months = _React$useState18[0],
      setMonths = _React$useState18[1];

  var _React$useState19 = React.useState(initialState.weekdays),
      _React$useState20 = _slicedToArray(_React$useState19, 2),
      weekdays = _React$useState20[0],
      setWeekdays = _React$useState20[1];

  var isRange = comparatorIndex === 0;
  var isCategorical = comparatorIndex === 1;
  return /*#__PURE__*/React.createElement(_filterShell.default, {
    exclude: exclude,
    onExcludeChange: function onExcludeChange() {
      return setExclude(!exclude);
    },
    onApply: function onApply() {
      if (isRange) {
        // eslint-disable-next-line flowtype/no-weak-types
        var op = rangeOperator[0].id;
        var description = '';

        if (op === _constants.DATETIME_OPERATIONS.RANGE_DATETIME) {
          var left = (0, _index.default)(rangeDates[0], FORMAT_STRING);
          var right = (0, _index.default)(rangeDates[1], FORMAT_STRING);
          description = "".concat(left, " - ").concat(right);
        } else if (op === _constants.DATETIME_OPERATIONS.RANGE_DATE) {
          var _left = (0, _index.default)(rangeDates[0], DATE_FORMAT);

          var _right = (0, _index.default)(rangeDates[1], DATE_FORMAT);

          description = "".concat(_left, " - ").concat(_right);
        } else if (op === _constants.DATETIME_OPERATIONS.RANGE_TIME) {
          var _left2 = (0, _index.default)(rangeDates[0], TIME_FORMAT);

          var _right2 = (0, _index.default)(rangeDates[1], TIME_FORMAT);

          description = "".concat(_left2, " - ").concat(_right2);
        }

        props.setFilter({
          operation: op,
          range: rangeDates,
          selection: [],
          description: description,
          exclude: exclude
        });
      }

      if (isCategorical) {
        // eslint-disable-next-line flowtype/no-weak-types
        var _op = categoricalOperator[0].id;
        var selection = [];
        var operatorLocaleLabelKey = '';
        var _description = '';

        if (_op === _constants.DATETIME_OPERATIONS.WEEKDAY) {
          selection = weekdays;
          operatorLocaleLabelKey = CATEGORICAL_OPERATIONS[0].localeLabelKey;
          _description = weekdays.map(function (w) {
            var day = (0, _index13.addDays)(startOfWeek, localizedWeekdays.indexOf(w));
            return (0, _index13.getWeekdayInLocale)(day, props.locale);
          }).join(', ');
        } else if (_op === _constants.DATETIME_OPERATIONS.MONTH) {
          selection = months;
          operatorLocaleLabelKey = CATEGORICAL_OPERATIONS[1].localeLabelKey;
          _description = months.map(function (m) {
            return (0, _index13.getMonthInLocale)(m, props.locale);
          }).join(', ');
        } else if (_op === _constants.DATETIME_OPERATIONS.QUARTER) {
          selection = quarters;
          operatorLocaleLabelKey = CATEGORICAL_OPERATIONS[2].localeLabelKey;
          _description = quarters.map(function (q) {
            return (0, _index13.getQuarterInLocale)(q, props.locale);
          }).join(', ');
        } else if (_op === _constants.DATETIME_OPERATIONS.HALF) {
          selection = halves;
          operatorLocaleLabelKey = CATEGORICAL_OPERATIONS[3].localeLabelKey;
          _description = halves.map(function (h) {
            return h === 0 ? locale.datatable.datetimeFilterCategoricalFirstHalf : locale.datatable.datetimeFilterCategoricalSecondHalf;
          }).join(', ');
        } else if (_op === _constants.DATETIME_OPERATIONS.YEAR) {
          selection = years;
          operatorLocaleLabelKey = CATEGORICAL_OPERATIONS[4].localeLabelKey;
          _description = years.join(', ');
        }

        if (operatorLocaleLabelKey) {
          _description = "".concat(locale.datatable[operatorLocaleLabelKey], " - ").concat(_description);
        }

        props.setFilter({
          operation: _op,
          range: [],
          selection: selection,
          description: _description,
          exclude: exclude
        });
      }

      props.close();
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: mountNode
  }, /*#__PURE__*/React.createElement(_index11.ButtonGroup, {
    size: _index10.SIZE.compact,
    mode: _index11.MODE.radio,
    selected: comparatorIndex,
    onClick: function onClick(_, index) {
      return setComparatorIndex(index);
    },
    overrides: {
      Root: {
        style: function style(_ref) {
          var $theme = _ref.$theme;
          return {
            marginBottom: $theme.sizing.scale300
          };
        }
      }
    }
  }, /*#__PURE__*/React.createElement(_index10.Button, {
    type: "button",
    overrides: {
      BaseButton: {
        style: {
          width: '100%'
        }
      }
    }
  }, locale.datatable.datetimeFilterRange), /*#__PURE__*/React.createElement(_index10.Button, {
    type: "button",
    overrides: {
      BaseButton: {
        style: {
          width: '100%'
        }
      }
    }
  }, locale.datatable.datetimeFilterCategorical)), isRange && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_index17.Select, {
    value: rangeOperator,
    onChange: function onChange(params) {
      return setRangeOperator(params.value);
    } // eslint-disable-next-line flowtype/no-weak-types
    ,
    mountNode: mountNode.current,
    options: RANGE_OPERATIONS.map(function (op) {
      return {
        label: locale.datatable[op.localeLabelKey],
        id: op.id
      };
    }),
    size: "compact",
    clearable: false
  }), /*#__PURE__*/React.createElement("div", {
    className: css({
      paddingTop: theme.sizing.scale600
    })
  }, (rangeOperator[0].id === _constants.DATETIME_OPERATIONS.RANGE_DATETIME || rangeOperator[0].id === _constants.DATETIME_OPERATIONS.RANGE_DATE) && /*#__PURE__*/React.createElement(_index14.Datepicker // eslint-disable-next-line flowtype/no-weak-types
  , {
    mountNode: mountNode.current,
    value: rangeDates,
    onChange: function onChange(_ref2) {
      var date = _ref2.date;

      if (Array.isArray(date)) {
        if (!date.length) return;
        var nextDates = date.map(function (d, i) {
          return (0, _index13.applyDateToTime)(rangeDates[i], d);
        });
        setRangeDates(nextDates);
      }
    },
    formatString: DATE_FORMAT,
    placeholder: "MM-DD-YYYY - MM-DD-YYYY",
    minDate: datesSorted[0],
    maxDate: datesSorted[datesSorted.length - 1],
    timeSelectStart: rangeOperator[0].id === _constants.DATETIME_OPERATIONS.RANGE_DATETIME,
    timeSelectEnd: rangeOperator[0].id === _constants.DATETIME_OPERATIONS.RANGE_DATETIME,
    overrides: {
      TimeSelect: {
        props: {
          size: 'compact'
        }
      }
    },
    range: true,
    size: "compact",
    locale: props.locale
  })), (rangeOperator[0].id === _constants.DATETIME_OPERATIONS.RANGE_DATETIME || rangeOperator[0].id === _constants.DATETIME_OPERATIONS.RANGE_TIME) && /*#__PURE__*/React.createElement("div", {
    className: css({
      display: 'flex',
      paddingTop: theme.sizing.scale100
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: css({
      width: '100%',
      marginRight: theme.sizing.scale300
    })
  }, /*#__PURE__*/React.createElement(_index15.TimePicker, {
    format: "24",
    value: rangeDates[0],
    onChange: function onChange(time) {
      return time && setRangeDates([(0, _index13.applyTimeToDate)(rangeDates[0], time), rangeDates[1]]);
    },
    creatable: true,
    size: "compact"
  })), /*#__PURE__*/React.createElement("div", {
    className: css({
      width: '100%'
    })
  }, /*#__PURE__*/React.createElement(_index15.TimePicker, {
    format: "24",
    value: rangeDates[1],
    onChange: function onChange(time) {
      return time && setRangeDates([rangeDates[0], (0, _index13.applyTimeToDate)(rangeDates[1], time)]);
    },
    creatable: true,
    size: "compact"
  })))), isCategorical && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_index17.Select, {
    value: categoricalOperator,
    onChange: function onChange(params) {
      return setCategoricalOperator(params.value);
    },
    options: CATEGORICAL_OPERATIONS.map(function (op) {
      return {
        label: locale.datatable[op.localeLabelKey],
        id: op.id
      };
    }) // eslint-disable-next-line flowtype/no-weak-types
    ,
    mountNode: mountNode.current,
    size: "compact",
    clearable: false
  }), /*#__PURE__*/React.createElement("div", {
    className: css({
      paddingLeft: theme.sizing.scale300,
      paddingTop: theme.sizing.scale500
    })
  }, categoricalOperator[0].id === _constants.DATETIME_OPERATIONS.WEEKDAY && /*#__PURE__*/React.createElement(Checks, {
    value: weekdays,
    setValue: setWeekdays,
    options: localizedWeekdays.map(function (w, offset) {
      var day = (0, _index13.addDays)(startOfWeek, offset);
      return {
        label: (0, _index13.getWeekdayInLocale)(day, props.locale),
        id: w
      };
    })
  }), categoricalOperator[0].id === _constants.DATETIME_OPERATIONS.MONTH && /*#__PURE__*/React.createElement(Checks, {
    value: months,
    setValue: setMonths,
    options: MONTHS.map(function (m) {
      return {
        label: (0, _index13.getMonthInLocale)(m, props.locale),
        id: m
      };
    })
  }), categoricalOperator[0].id === _constants.DATETIME_OPERATIONS.QUARTER && /*#__PURE__*/React.createElement(Checks, {
    value: quarters,
    setValue: setQuarters,
    options: QUARTERS.map(function (q) {
      return {
        label: (0, _index13.getQuarterInLocale)(q, props.locale),
        id: q
      };
    })
  }), categoricalOperator[0].id === _constants.DATETIME_OPERATIONS.HALF && /*#__PURE__*/React.createElement(Checks, {
    value: halves,
    setValue: setHalves,
    options: [{
      label: locale.datatable.datetimeFilterCategoricalFirstHalf,
      id: 0
    }, {
      label: locale.datatable.datetimeFilterCategoricalSecondHalf,
      id: 1
    }]
  }), categoricalOperator[0].id === _constants.DATETIME_OPERATIONS.YEAR && /*#__PURE__*/React.createElement(Checks, {
    value: years,
    setValue: setYears,
    options: presentYears.map(function (year) {
      return {
        label: year,
        id: year
      };
    })
  })))));
}

function DatetimeCell(props) {
  var _useStyletron5 = (0, _index16.useStyletron)(),
      _useStyletron6 = _slicedToArray(_useStyletron5, 2),
      css = _useStyletron6[0],
      theme = _useStyletron6[1];

  return /*#__PURE__*/React.createElement("div", {
    className: css(_objectSpread(_objectSpread({}, theme.typography.MonoParagraphXSmall), {}, {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      whiteSpace: 'nowrap'
    }))
  }, (0, _index.default)(props.value, props.formatString));
}

var defaultOptions = {
  title: '',
  sortable: true,
  filterable: true,
  formatString: FORMAT_STRING
};

function DatetimeColumn(options) {
  var normalizedOptions = _objectSpread(_objectSpread({}, defaultOptions), options);

  return (0, _column.default)({
    kind: _constants.COLUMNS.DATETIME,
    buildFilter: function buildFilter(params) {
      return function (data) {
        var included = true;

        if (params.operation === _constants.DATETIME_OPERATIONS.YEAR) {
          included = params.selection.includes((0, _index2.default)(data));
        } else if (params.operation === _constants.DATETIME_OPERATIONS.HALF) {
          var month = (0, _index3.default)(data);
          var half = month < 6 ? 0 : 1;
          included = params.selection.includes(half);
        } else if (params.operation === _constants.DATETIME_OPERATIONS.QUARTER) {
          // date-fns quarters are 1 indexed
          var quarter = (0, _index4.default)(data) - 1;
          included = params.selection.includes(quarter);
        } else if (params.operation === _constants.DATETIME_OPERATIONS.MONTH) {
          included = params.selection.includes((0, _index3.default)(data));
        } else if (params.operation === _constants.DATETIME_OPERATIONS.WEEKDAY) {
          included = params.selection.includes((0, _index5.default)(data));
        }

        if (params.operation === _constants.DATETIME_OPERATIONS.RANGE_DATE || params.operation === _constants.DATETIME_OPERATIONS.RANGE_TIME || params.operation === _constants.DATETIME_OPERATIONS.RANGE_DATETIME) {
          var _params$range = _slicedToArray(params.range, 2),
              left = _params$range[0],
              right = _params$range[1];

          if (params.operation === _constants.DATETIME_OPERATIONS.RANGE_DATE) {
            left = (0, _index9.default)(left, {
              hours: 0,
              minutes: 0,
              seconds: 0
            });
            right = (0, _index9.default)(right, {
              hours: 0,
              minutes: 0,
              seconds: 0
            });
            data = (0, _index9.default)(data, {
              hours: 0,
              minutes: 0,
              seconds: 0
            });
          }

          if (params.operation === _constants.DATETIME_OPERATIONS.RANGE_TIME) {
            left = (0, _index9.default)(left, {
              year: 2000,
              month: 1,
              date: 1
            });
            right = (0, _index9.default)(right, {
              year: 2000,
              month: 1,
              date: 1
            });
            data = (0, _index9.default)(data, {
              year: 2000,
              month: 1,
              date: 1
            });
          }

          var after = (0, _index6.default)(data, left) || (0, _index8.default)(data, left);
          var before = (0, _index7.default)(data, right) || (0, _index8.default)(data, right);
          included = after && before;
        }

        return params.exclude ? !included : included;
      };
    },
    cellBlockAlign: options.cellBlockAlign,
    fillWidth: options.fillWidth,
    filterable: normalizedOptions.filterable,
    mapDataToValue: options.mapDataToValue,
    maxWidth: options.maxWidth,
    minWidth: options.minWidth,
    renderCell: function RenderDatetimeCell(props) {
      return /*#__PURE__*/React.createElement(DatetimeCell, {
        value: props.value,
        formatString: normalizedOptions.formatString
      });
    },
    renderFilter: function RenderDatetimeFilter(props) {
      return /*#__PURE__*/React.createElement(DatetimeFilter, _extends({}, props, {
        locale: options.locale
      }));
    },
    sortable: normalizedOptions.sortable,
    sortFn: sortDates,
    title: options.title
  });
}

var _default = DatetimeColumn;
exports.default = _default;