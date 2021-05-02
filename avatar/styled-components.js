"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Root = exports.Initials = exports.Avatar = void 0;

var _index = require("../styles/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getSize(props) {
  var $size = props.$size,
      $theme = props.$theme;
  var defaultSize = $theme.sizing.scale1000;
  var size = $size || defaultSize;
  return $theme.sizing[size] || size;
}

var Avatar = (0, _index.styled)('img', function (props) {
  var themedSize = getSize(props);
  return {
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
    boxSizing: 'border-box',
    display: 'block',
    height: themedSize,
    width: themedSize,
    objectFit: 'cover'
  };
});
exports.Avatar = Avatar;
Avatar.displayName = "Avatar";
var Initials = (0, _index.styled)('div', function (props) {
  return _objectSpread(_objectSpread({}, props.$theme.typography.font300), {}, {
    color: props.$theme.colors.mono100,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '100%'
  });
});
exports.Initials = Initials;
Initials.displayName = "Initials";
var Root = (0, _index.styled)('div', function (props) {
  var $didImageFailToLoad = props.$didImageFailToLoad;
  var themedSize = getSize(props);
  return {
    backgroundColor: $didImageFailToLoad ? props.$theme.colors.primary : null,
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
    boxSizing: 'border-box',
    display: 'inline-block',
    // image previously set the root height/width
    // since image is not rendered, set the height/width
    height: $didImageFailToLoad ? themedSize : null,
    width: $didImageFailToLoad ? themedSize : null
  };
});
exports.Root = Root;
Root.displayName = "Root";