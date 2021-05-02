"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breadcrumbs = Breadcrumbs;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("../locale/index.js");

var _themeProvider = require("../styles/theme-provider.js");

var _chevronRight = _interopRequireDefault(require("../icon/chevron-right.js"));

var _chevronLeft = _interopRequireDefault(require("../icon/chevron-left.js"));

var _styledComponents = require("./styled-components.js");

var _overrides = require("../helpers/overrides.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Breadcrumbs(props) {
  var _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides,
      _props$showTrailingSe = props.showTrailingSeparator,
      showTrailingSeparator = _props$showTrailingSe === void 0 ? false : _props$showTrailingSe;

  var childrenArray = _react.Children.toArray(props.children);

  var childrenWithSeparators = [];

  var _getOverrides = (0, _overrides.getOverrides)(overrides.Root, _styledComponents.StyledRoot),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      Root = _getOverrides2[0],
      baseRootProps = _getOverrides2[1];

  var _getOverrides3 = (0, _overrides.getOverrides)(overrides.Icon, _chevronRight.default),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      Right = _getOverrides4[0],
      baseIconProps = _getOverrides4[1];

  var _getOverrides5 = (0, _overrides.getOverrides)(overrides.Icon, _chevronLeft.default),
      _getOverrides6 = _slicedToArray(_getOverrides5, 1),
      Left = _getOverrides6[0];

  var _getOverrides7 = (0, _overrides.getOverrides)(overrides.List, _styledComponents.StyledList),
      _getOverrides8 = _slicedToArray(_getOverrides7, 2),
      List = _getOverrides8[0],
      baseListProps = _getOverrides8[1];

  var _getOverrides9 = (0, _overrides.getOverrides)(overrides.ListItem, _styledComponents.StyledListItem),
      _getOverrides10 = _slicedToArray(_getOverrides9, 2),
      ListItem = _getOverrides10[0],
      baseListItemProps = _getOverrides10[1];

  var _getOverrides11 = (0, _overrides.getOverrides)(overrides.Separator, _styledComponents.StyledSeparator),
      _getOverrides12 = _slicedToArray(_getOverrides11, 2),
      Separator = _getOverrides12[0],
      baseSeparatorProps = _getOverrides12[1];

  var iconOverrides = (0, _overrides.mergeOverrides)({
    Svg: {
      style: {
        verticalAlign: 'text-bottom'
      }
    }
  }, // $FlowFixMe
  baseIconProps && baseIconProps.overrides); // $FlowFixMe

  baseIconProps.overrides = iconOverrides;
  childrenArray.forEach(function (child, index) {
    childrenWithSeparators.push( /*#__PURE__*/_react.default.createElement(ListItem, _extends({
      key: "breadcrumb-item-".concat(index),
      $itemIndex: index
    }, baseListItemProps), child, (showTrailingSeparator || index !== childrenArray.length - 1) && /*#__PURE__*/_react.default.createElement(Separator, _extends({}, baseSeparatorProps, {
      key: "separator-".concat(index)
    }), /*#__PURE__*/_react.default.createElement(_themeProvider.ThemeContext.Consumer, null, function (theme) {
      return theme.direction === 'rtl' ? /*#__PURE__*/_react.default.createElement(Left, baseIconProps) : /*#__PURE__*/_react.default.createElement(Right, baseIconProps);
    }))));
  });
  return /*#__PURE__*/_react.default.createElement(_index.LocaleContext.Consumer, null, function (locale) {
    return /*#__PURE__*/_react.default.createElement(Root, _extends({
      "aria-label": props.ariaLabel || locale.breadcrumbs.ariaLabel,
      "data-baseweb": "breadcrumbs"
    }, baseRootProps), /*#__PURE__*/_react.default.createElement(List, baseListProps, childrenWithSeparators));
  });
}

Breadcrumbs.defaultProps = {
  overrides: {},
  showTrailingSeparator: false
};
var _default = Breadcrumbs;
exports.default = _default;