"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _overrides = require("../helpers/overrides.js");

var _styledComponents = require("./styled-components.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Step(_ref) {
  var _ref$overrides = _ref.overrides,
      overrides = _ref$overrides === void 0 ? {} : _ref$overrides,
      isCompleted = _ref.isCompleted,
      isActive = _ref.isActive,
      isLast = _ref.isLast,
      title = _ref.title,
      children = _ref.children;

  var _getOverrides = (0, _overrides.getOverrides)(overrides.Root, _styledComponents.StyledStep),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      Root = _getOverrides2[0],
      rootProps = _getOverrides2[1];

  var _getOverrides3 = (0, _overrides.getOverrides)(overrides.IconContainer, _styledComponents.StyledIconContainer),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      IconContainer = _getOverrides4[0],
      iconContainerProps = _getOverrides4[1];

  var _getOverrides5 = (0, _overrides.getOverrides)(overrides.Icon, _styledComponents.StyledIcon),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      Icon = _getOverrides6[0],
      iconProps = _getOverrides6[1];

  var _getOverrides7 = (0, _overrides.getOverrides)(overrides.InnerIcon, _styledComponents.StyledInnerIcon),
      _getOverrides8 = _slicedToArray(_getOverrides7, 2),
      InnerIcon = _getOverrides8[0],
      innerIconProps = _getOverrides8[1];

  var _getOverrides9 = (0, _overrides.getOverrides)(overrides.Tail, _styledComponents.StyledContentTail),
      _getOverrides10 = _slicedToArray(_getOverrides9, 2),
      Tail = _getOverrides10[0],
      tailProps = _getOverrides10[1];

  var _getOverrides11 = (0, _overrides.getOverrides)(overrides.Content, _styledComponents.StyledContent),
      _getOverrides12 = _slicedToArray(_getOverrides11, 2),
      Content = _getOverrides12[0],
      contentProps = _getOverrides12[1];

  var _getOverrides13 = (0, _overrides.getOverrides)(overrides.Title, _styledComponents.StyledContentTitle),
      _getOverrides14 = _slicedToArray(_getOverrides13, 2),
      Title = _getOverrides14[0],
      titleProps = _getOverrides14[1];

  var _getOverrides15 = (0, _overrides.getOverrides)(overrides.Description, _styledComponents.StyledContentDescription),
      _getOverrides16 = _slicedToArray(_getOverrides15, 2),
      Description = _getOverrides16[0],
      descriptionProps = _getOverrides16[1];

  var sharedProps = {
    $isCompleted: isCompleted,
    $isActive: isActive
  };
  return /*#__PURE__*/React.createElement(Root, _extends({}, sharedProps, rootProps), /*#__PURE__*/React.createElement(IconContainer, _extends({}, sharedProps, iconContainerProps), /*#__PURE__*/React.createElement(Icon, _extends({}, sharedProps, iconProps), isActive && /*#__PURE__*/React.createElement(InnerIcon, innerIconProps))), !isLast && /*#__PURE__*/React.createElement(Tail, _extends({}, sharedProps, tailProps)), /*#__PURE__*/React.createElement(Content, _extends({}, sharedProps, contentProps), /*#__PURE__*/React.createElement(Title, _extends({}, sharedProps, titleProps), title), /*#__PURE__*/React.createElement(Description, descriptionProps, isActive && children)));
}

Step.defaultProps = {
  isCompleted: false,
  isLast: false
};
var _default = Step;
exports.default = _default;