"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasThumbnail = hasThumbnail;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _overrides = require("../helpers/overrides.js");

var _styledComponents = require("./styled-components.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function hasThumbnail(props) {
  return !!props.thumbnail;
}

function Card(props) {
  var _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides,
      action = props.action,
      children = props.children,
      hasThumbnail = props.hasThumbnail,
      headerImage = props.headerImage,
      thumbnailSrc = props.thumbnail,
      title = props.title,
      restProps = _objectWithoutProperties(props, ["overrides", "action", "children", "hasThumbnail", "headerImage", "thumbnail", "title"]);

  var ActionOverride = overrides.Action,
      BodyOverride = overrides.Body,
      ContentsOverride = overrides.Contents,
      HeaderImageOverride = overrides.HeaderImage,
      RootOverride = overrides.Root,
      ThumbnailOverride = overrides.Thumbnail,
      TitleOverride = overrides.Title;

  var Action = (0, _overrides.getOverride)(ActionOverride) || _styledComponents.Action;

  var Body = (0, _overrides.getOverride)(BodyOverride) || _styledComponents.Body;

  var Contents = (0, _overrides.getOverride)(ContentsOverride) || _styledComponents.Contents;

  var HeaderImage = (0, _overrides.getOverride)(HeaderImageOverride) || _styledComponents.HeaderImage;

  var Root = (0, _overrides.getOverride)(RootOverride) || _styledComponents.Root;

  var Thumbnail = (0, _overrides.getOverride)(ThumbnailOverride) || _styledComponents.Thumbnail;

  var Title = (0, _overrides.getOverride)(TitleOverride) || _styledComponents.Title;

  var headerImageProps = typeof headerImage === 'string' ? {
    src: headerImage
  } : headerImage;
  var $hasThumbnail = hasThumbnail(props);
  return /*#__PURE__*/React.createElement(Root, _extends({
    "data-baseweb": "card"
  }, restProps, (0, _overrides.getOverrideProps)(RootOverride)), headerImage && /*#__PURE__*/React.createElement(HeaderImage, _extends({}, headerImageProps, (0, _overrides.getOverrideProps)(HeaderImageOverride))), /*#__PURE__*/React.createElement(Contents, (0, _overrides.getOverrideProps)(ContentsOverride), thumbnailSrc && /*#__PURE__*/React.createElement(Thumbnail, _extends({
    src: thumbnailSrc
  }, (0, _overrides.getOverrideProps)(ThumbnailOverride))), title && /*#__PURE__*/React.createElement(Title, _extends({
    $hasThumbnail: $hasThumbnail
  }, (0, _overrides.getOverrideProps)(TitleOverride)), title), /*#__PURE__*/React.createElement(Body, (0, _overrides.getOverrideProps)(BodyOverride), children), action && /*#__PURE__*/React.createElement(Action, (0, _overrides.getOverrideProps)(ActionOverride), action)));
}

Card.defaultProps = {
  action: null,
  children: null,
  hasThumbnail: hasThumbnail,
  overrides: {}
}; //$FlowFixMe

var _default = (0, _overrides.withOverrides)(Card, 'Card');

exports.default = _default;