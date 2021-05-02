"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _overrides = require("../helpers/overrides.js");

var _constants = require("./constants.js");

var _styledComponents = require("./styled-components.js");

var _utils = require("./utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ListItem = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides;
  var Artwork = props.artwork;
  var EndEnhancer = props.endEnhancer;

  var _getOverrides = (0, _overrides.getOverrides)(overrides.Root, _styledComponents.StyledRoot),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      Root = _getOverrides2[0],
      rootProps = _getOverrides2[1];

  var _getOverrides3 = (0, _overrides.getOverrides)(overrides.ArtworkContainer, _styledComponents.StyledArtworkContainer),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      ArtworkContainer = _getOverrides4[0],
      artworkContainerProps = _getOverrides4[1];

  var _getOverrides5 = (0, _overrides.getOverrides)(overrides.Content, _styledComponents.StyledContent),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      Content = _getOverrides6[0],
      contentProps = _getOverrides6[1];

  var _getOverrides7 = (0, _overrides.getOverrides)(overrides.EndEnhancerContainer, _styledComponents.StyledEndEnhancerContainer),
      _getOverrides8 = _slicedToArray(_getOverrides7, 2),
      EndEnhancerContainer = _getOverrides8[0],
      endEnhancerContainerProps = _getOverrides8[1];

  var artworkSize = _react.default.useMemo(function () {
    if (props.sublist) {
      var size = props.artworkSize || _constants.ARTWORK_SIZES.SMALL;

      if (props.artworkSize === _constants.ARTWORK_SIZES.MEDIUM) {
        size = _constants.ARTWORK_SIZES.SMALL;

        if (process.env.NODE_ENV !== "production") {
          console.warn('When ListItem sublist prop is true, artworkSize MEDIUM is aliased to SMALL');
        }
      }

      return size;
    } else {
      return props.artworkSize || _constants.ARTWORK_SIZES.MEDIUM;
    }
  }, [props.artworkSize, props.sublist]);

  return (
    /*#__PURE__*/
    // eslint-disable-next-line flowtype/no-weak-types
    _react.default.createElement(Root, _extends({
      ref: ref
    }, rootProps), Artwork && /*#__PURE__*/_react.default.createElement(ArtworkContainer, _extends({
      $artworkSize: artworkSize,
      $sublist: Boolean(props.sublist)
    }, artworkContainerProps), /*#__PURE__*/_react.default.createElement(Artwork, {
      size: typeof artworkSize === 'number' ? artworkSize : (0, _utils.artworkSizeToValue)(artworkSize, Boolean(props.sublist))
    })), /*#__PURE__*/_react.default.createElement(Content, _extends({
      $mLeft: !Artwork,
      $sublist: !!props.sublist
    }, contentProps), props.children, EndEnhancer && /*#__PURE__*/_react.default.createElement(EndEnhancerContainer, endEnhancerContainerProps, /*#__PURE__*/_react.default.createElement(EndEnhancer, null))))
  );
});

ListItem.displayName = 'ListItem'; //$FlowFixMe

var _default = (0, _overrides.withOverrides)(ListItem, 'ListItem');

exports.default = _default;