"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTableBodyCell = exports.StyledTableBodyRow = exports.StyledTableBody = exports.StyledSortNoneIcon = exports.StyledSortDescIcon = exports.StyledSortAscIcon = exports.StyledTableHeadCellSortable = exports.StyledTableHeadCell = exports.StyledTableHeadRow = exports.StyledTableHead = exports.StyledTable = exports.StyledRoot = void 0;

var _blank = _interopRequireDefault(require("../icon/blank.js"));

var _chevronDown = _interopRequireDefault(require("../icon/chevron-down.js"));

var _chevronUp = _interopRequireDefault(require("../icon/chevron-up.js"));

var _index = require("../styles/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledRoot = (0, _index.styled)('div', function (_ref) {
  var $theme = _ref.$theme;
  return _objectSpread({}, (0, _index.expandBorderStyles)($theme.borders.border300), {
    position: 'relative',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    backgroundColor: $theme.colors.tableBackground,
    borderTopLeftRadius: $theme.borders.radius200,
    borderTopRightRadius: $theme.borders.radius200,
    borderBottomRightRadius: $theme.borders.radius200,
    borderBottomLeftRadius: $theme.borders.radius200
  });
});
exports.StyledRoot = StyledRoot;
StyledRoot.displayName = "StyledRoot";
var StyledTable = (0, _index.styled)('table', function (_ref2) {
  var $theme = _ref2.$theme,
      $width = _ref2.$width;
  return {
    borderCollapse: 'collapse',
    boxSizing: 'border-box',
    minWidth: '100%',
    width: $width || null
  };
});
exports.StyledTable = StyledTable;
StyledTable.displayName = "StyledTable";
var StyledTableHead = (0, _index.styled)('thead', function (_ref3) {
  var $theme = _ref3.$theme;
  return {};
});
exports.StyledTableHead = StyledTableHead;
StyledTableHead.displayName = "StyledTableHead";
var StyledTableHeadRow = (0, _index.styled)('tr', function (_ref4) {
  var $theme = _ref4.$theme;
  return {};
});
exports.StyledTableHeadRow = StyledTableHeadRow;
StyledTableHeadRow.displayName = "StyledTableHeadRow";
var StyledTableHeadCell = (0, _index.styled)('th', function (_ref5) {
  var $theme = _ref5.$theme;
  return _objectSpread({}, $theme.typography.font350, {
    position: 'sticky',
    top: 0,
    paddingTop: $theme.sizing.scale500,
    paddingRight: $theme.sizing.scale600,
    paddingBottom: $theme.sizing.scale500,
    paddingLeft: $theme.sizing.scale600,
    backgroundColor: $theme.colors.tableHeadBackgroundColor,
    color: $theme.colors.contentPrimary,
    textAlign: 'left',
    verticalAlign: 'top',
    whiteSpace: 'nowrap',
    // We have to use pseudo elements to add the border for headers
    // because browsers don't properly handle borders on sticky cells.
    // The cells stay fixed in place, but the borders scroll.
    '::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      right: '100%',
      bottom: '0',
      borderLeftColor: $theme.borders.border300.borderColor,
      borderLeftStyle: $theme.borders.border300.borderStyle,
      borderLeftWidth: $theme.borders.border300.borderWidth
    },
    // We have to use pseudo elements to add the shadow to prevent
    // the shadows from casting on sibling cells.
    '::after': {
      content: '""',
      position: 'absolute',
      top: '100%',
      right: '0',
      left: '0',
      height: $theme.sizing.scale100,
      pointerEvents: 'none',
      backgroundImage: "\n        linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, 0.16),\n          rgba(0, 0, 0, 0)\n        )\n      "
    }
  });
});
exports.StyledTableHeadCell = StyledTableHeadCell;
StyledTableHeadCell.displayName = "StyledTableHeadCell";
var StyledTableHeadCellSortable = (0, _index.withStyle)(StyledTableHeadCell, function (_ref6) {
  var $theme = _ref6.$theme,
      $isFocusVisible = _ref6.$isFocusVisible;
  return {
    cursor: 'pointer',
    paddingRight: $theme.sizing.scale1000,
    outline: 'none',
    ':focus': {
      outline: $isFocusVisible ? "3px solid ".concat($theme.colors.accent) : 'none',
      outlineOffset: '-3px'
    },
    ':hover': {
      backgroundColor: $theme.colors.tableStripedBackground
    }
  };
});
exports.StyledTableHeadCellSortable = StyledTableHeadCellSortable;
StyledTableHeadCellSortable.displayName = "StyledTableHeadCellSortable";
var StyledSortAscIcon = (0, _index.styled)(_chevronDown.default, function (_ref7) {
  var $theme = _ref7.$theme;
  return {
    position: 'absolute',
    top: '50%',
    right: $theme.sizing.scale500,
    transform: 'translateY(-50%)'
  };
});
exports.StyledSortAscIcon = StyledSortAscIcon;
StyledSortAscIcon.displayName = "StyledSortAscIcon";
var StyledSortDescIcon = (0, _index.styled)(_chevronUp.default, function (_ref8) {
  var $theme = _ref8.$theme;
  return {
    position: 'absolute',
    top: '50%',
    right: $theme.sizing.scale500,
    transform: 'translateY(-50%)'
  };
});
exports.StyledSortDescIcon = StyledSortDescIcon;
StyledSortDescIcon.displayName = "StyledSortDescIcon";
var StyledSortNoneIcon = (0, _index.styled)(_blank.default, function (_ref9) {
  var $theme = _ref9.$theme;
  return {
    position: 'absolute',
    top: '50%',
    right: $theme.sizing.scale500,
    transform: 'translateY(-50%)'
  };
});
exports.StyledSortNoneIcon = StyledSortNoneIcon;
StyledSortNoneIcon.displayName = "StyledSortNoneIcon";
var StyledTableBody = (0, _index.styled)('tbody', function (_ref10) {
  var $theme = _ref10.$theme;
  return {};
});
exports.StyledTableBody = StyledTableBody;
StyledTableBody.displayName = "StyledTableBody";
var StyledTableBodyRow = (0, _index.styled)('tr', function (_ref11) {
  var $theme = _ref11.$theme;
  return {
    ':hover': {
      backgroundColor: $theme.colors.tableStripedBackground
    }
  };
});
exports.StyledTableBodyRow = StyledTableBodyRow;
StyledTableBodyRow.displayName = "StyledTableBodyRow";
var StyledTableBodyCell = (0, _index.styled)('td', function (_ref12) {
  var $theme = _ref12.$theme,
      $isNumeric = _ref12.$isNumeric;
  return _objectSpread({}, $theme.typography.font200, {
    paddingTop: $theme.sizing.scale300,
    paddingRight: $theme.sizing.scale600,
    paddingBottom: $theme.sizing.scale300,
    paddingLeft: $theme.sizing.scale600,
    color: $theme.colors.contentPrimary,
    textAlign: $isNumeric ? 'right' : null,
    verticalAlign: 'top'
  });
});
exports.StyledTableBodyCell = StyledTableBodyCell;
StyledTableBodyCell.displayName = "StyledTableBodyCell";