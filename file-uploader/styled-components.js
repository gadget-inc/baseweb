"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledHiddenInput = exports.StyledRoot = exports.StyledErrorMessage = exports.StyledContentSeparator = exports.StyledContentMessage = exports.StyledFileDragAndDrop = void 0;

var _index = require("../styles/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledFileDragAndDrop = (0, _index.styled)('div', function (props) {
  var borderColor = props.$isDragActive ? props.$theme.colors.borderAccent : props.$theme.colors.fileUploaderBorderColorDefault;
  var borderStyle = props.$afterFileDrop ? 'none' : 'dashed';
  return {
    alignItems: 'center',
    backgroundColor: props.$isDragActive ? props.$theme.colors.backgroundLightAccent : props.$theme.colors.fileUploaderBackgroundColor,
    borderLeftColor: borderColor,
    borderRightColor: borderColor,
    borderTopColor: borderColor,
    borderBottomColor: borderColor,
    borderLeftStyle: borderStyle,
    borderRightStyle: borderStyle,
    borderTopStyle: borderStyle,
    borderBottomStyle: borderStyle,
    borderLeftWidth: props.$theme.sizing.scale0,
    borderRightWidth: props.$theme.sizing.scale0,
    borderTopWidth: props.$theme.sizing.scale0,
    borderBottomWidth: props.$theme.sizing.scale0,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    outline: 'none',
    paddingTop: props.$theme.sizing.scale900,
    paddingRight: props.$theme.sizing.scale800,
    paddingBottom: props.$afterFileDrop ? props.$theme.sizing.scale300 : props.$theme.sizing.scale900,
    paddingLeft: props.$theme.sizing.scale800,
    width: '100%'
  };
});
exports.StyledFileDragAndDrop = StyledFileDragAndDrop;
StyledFileDragAndDrop.displayName = "StyledFileDragAndDrop";
var StyledContentMessage = (0, _index.styled)('div', function (_ref) {
  var $theme = _ref.$theme,
      $afterFileDrop = _ref.$afterFileDrop,
      $isDragActive = _ref.$isDragActive;
  return _objectSpread(_objectSpread({}, $afterFileDrop ? $theme.typography.LabelMedium : $theme.typography.LabelSmall), {}, {
    color: $afterFileDrop ? $theme.colors.contentPrimary : $isDragActive ? $theme.colors.contentAccent : null,
    marginTop: $afterFileDrop ? $theme.sizing.scale100 : null,
    marginBottom: $afterFileDrop ? $theme.sizing.scale100 : null
  });
});
exports.StyledContentMessage = StyledContentMessage;
StyledContentMessage.displayName = "StyledContentMessage";
var StyledContentSeparator = StyledContentMessage;
exports.StyledContentSeparator = StyledContentSeparator;
var StyledErrorMessage = (0, _index.styled)('div', function (props) {
  return _objectSpread(_objectSpread({}, props.$theme.typography.LabelMedium), {}, {
    color: props.$theme.colors.negative,
    marginTop: props.$afterFileDrop ? props.$theme.sizing.scale100 : null,
    marginBottom: props.$afterFileDrop ? props.$theme.sizing.scale100 : null
  });
});
exports.StyledErrorMessage = StyledErrorMessage;
StyledErrorMessage.displayName = "StyledErrorMessage";
var StyledRoot = (0, _index.styled)('div', function (props) {
  return _objectSpread(_objectSpread({}, props.$theme.typography.font300), {}, {
    color: props.$theme.colors.fileUploaderMessageColor
  });
});
exports.StyledRoot = StyledRoot;
StyledRoot.displayName = "StyledRoot";
var StyledHiddenInput = (0, _index.styled)('input', {});
exports.StyledHiddenInput = StyledHiddenInput;
StyledHiddenInput.displayName = "StyledHiddenInput";