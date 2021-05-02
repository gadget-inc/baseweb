"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _overrides = require("../helpers/overrides.js");

var _index = require("../layout-grid/index.js");

var _index2 = require("../styles/index.js");

var _focusVisible = require("../utils/focusVisible.js");

var _constants = require("./constants.js");

var _mobileMenu = _interopRequireDefault(require("./mobile-menu.js"));

var _userMenu = _interopRequireDefault(require("./user-menu.js"));

var _styledComponents = require("./styled-components.js");

var _utils = require("./utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function MainMenuItem(props) {
  var item = props.item,
      _props$kind = props.kind,
      kind = _props$kind === void 0 ? _constants.KIND.primary : _props$kind,
      mapItemToNode = props.mapItemToNode,
      onSelect = props.onSelect,
      _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      focusVisible = _React$useState2[0],
      setFocusVisible = _React$useState2[1];

  function handleFocus(event) {
    if ((0, _focusVisible.isFocusVisible)(event)) {
      setFocusVisible(true);
    }
  }

  function handleBlur(event) {
    if (focusVisible) {
      setFocusVisible(false);
    }
  }

  function handleClick(event) {
    if (onSelect) {
      onSelect(item);
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' && onSelect) {
      onSelect(item);
    }
  }

  var _getOverrides = (0, _overrides.getOverrides)(overrides.MainMenuItem, _styledComponents.StyledMainMenuItem),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      MainMenuItemElement = _getOverrides2[0],
      mainMenuItemElementProps = _getOverrides2[1];

  return /*#__PURE__*/React.createElement(MainMenuItemElement, _extends({
    $active: item.active,
    $isFocusVisible: focusVisible,
    $kind: kind,
    "aria-selected": item.active,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    tabIndex: 0
  }, mainMenuItemElementProps), mapItemToNode(item));
}

function SecondaryMenu(props) {
  var _props$items = props.items,
      items = _props$items === void 0 ? [] : _props$items,
      mapItemToNode = props.mapItemToNode,
      onSelect = props.onSelect,
      _props$overrides2 = props.overrides,
      overrides = _props$overrides2 === void 0 ? {} : _props$overrides2;

  var _getOverrides3 = (0, _overrides.getOverrides)(overrides.SubnavContainer, _styledComponents.StyledSubnavContainer),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      SubnavContainer = _getOverrides4[0],
      subnavContainerProps = _getOverrides4[1];

  var _getOverrides5 = (0, _overrides.getOverrides)(overrides.SecondaryMenuContainer, _styledComponents.StyledSecondaryMenuContainer),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      SecondaryMenuContainer = _getOverrides6[0],
      secondaryMenuContainerProps = _getOverrides6[1];

  return /*#__PURE__*/React.createElement(SubnavContainer, subnavContainerProps, /*#__PURE__*/React.createElement(_index.Grid, null, /*#__PURE__*/React.createElement(_index.Cell, {
    span: [0, 8, 12]
  }, /*#__PURE__*/React.createElement(SecondaryMenuContainer, _extends({
    role: "navigation",
    "aria-label": "Secondary navigation"
  }, secondaryMenuContainerProps), items.map(function (item, index) {
    return (
      /*#__PURE__*/
      // Replace with a menu item renderer
      React.createElement(MainMenuItem, {
        mapItemToNode: mapItemToNode,
        item: item,
        kind: _constants.KIND.secondary,
        key: index,
        onSelect: onSelect,
        overrides: overrides
      })
    );
  })))));
}

function AppNavBar(props) {
  var _useStyletron = (0, _index2.useStyletron)(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      css = _useStyletron2[0],
      theme = _useStyletron2[1];

  var title = props.title,
      _props$mapItemToNode = props.mapItemToNode,
      mapItemToNode = _props$mapItemToNode === void 0 ? _utils.defaultMapItemToNode : _props$mapItemToNode,
      _props$onMainItemSele = props.onMainItemSelect,
      onMainItemSelect = _props$onMainItemSele === void 0 ? function (item) {} : _props$onMainItemSele,
      _props$onUserItemSele = props.onUserItemSelect,
      onUserItemSelect = _props$onUserItemSele === void 0 ? function (item) {} : _props$onUserItemSele,
      _props$overrides3 = props.overrides,
      overrides = _props$overrides3 === void 0 ? {} : _props$overrides3,
      _props$userItems = props.userItems,
      userItems = _props$userItems === void 0 ? [] : _props$userItems,
      username = props.username,
      usernameSubtitle = props.usernameSubtitle,
      userImgUrl = props.userImgUrl;
  var mainItems = React.useMemo(function () {
    if (props.isMainItemActive) {
      return (0, _utils.mapItemsActive)(props.mainItems || [], props.isMainItemActive);
    }

    return props.mainItems || [];
  }, [props.mainItems, props.isMainItemActive]);

  var _getOverrides7 = (0, _overrides.getOverrides)(overrides.Root, _styledComponents.StyledRoot),
      _getOverrides8 = _slicedToArray(_getOverrides7, 2),
      Root = _getOverrides8[0],
      rootProps = _getOverrides8[1];

  var _getOverrides9 = (0, _overrides.getOverrides)(overrides.Spacing, _styledComponents.StyledSpacing),
      _getOverrides10 = _slicedToArray(_getOverrides9, 2),
      Spacing = _getOverrides10[0],
      spacingProps = _getOverrides10[1];

  var _getOverrides11 = (0, _overrides.getOverrides)(overrides.AppName, _styledComponents.StyledAppName),
      _getOverrides12 = _slicedToArray(_getOverrides11, 2),
      AppName = _getOverrides12[0],
      appNameProps = _getOverrides12[1];

  var _getOverrides13 = (0, _overrides.getOverrides)(overrides.PrimaryMenuContainer, _styledComponents.StyledPrimaryMenuContainer),
      _getOverrides14 = _slicedToArray(_getOverrides13, 2),
      PrimaryMenuContainer = _getOverrides14[0],
      primaryMenuContainerProps = _getOverrides14[1];

  var secondaryMenu;
  var desktopSubNavPosition = _constants.POSITION.horizontal;
  var mobileSubNavPosition = _constants.POSITION.vertical;
  return /*#__PURE__*/React.createElement(Root, _extends({}, rootProps, {
    "data-baseweb": "app-nav-bar"
  }), /*#__PURE__*/React.createElement("div", {
    className: css(_defineProperty({}, "@media screen and (min-width: ".concat(theme.breakpoints.large, "px)"), {
      display: 'none'
    }))
  }, /*#__PURE__*/React.createElement(_index.Grid, null, /*#__PURE__*/React.createElement(_index.Cell, {
    span: [4, 8, 0]
  }, /*#__PURE__*/React.createElement(Spacing, spacingProps, mainItems.length || userItems.length ? /*#__PURE__*/React.createElement(_mobileMenu.default, props) : null, /*#__PURE__*/React.createElement(AppName, appNameProps, title)))), secondaryMenu && mobileSubNavPosition === _constants.POSITION.horizontal && /*#__PURE__*/React.createElement(SecondaryMenu, {
    items: secondaryMenu,
    mapItemToNode: mapItemToNode,
    onSelect: onMainItemSelect,
    overrides: overrides
  })), /*#__PURE__*/React.createElement("div", {
    className: css(_defineProperty({}, "@media screen and (max-width: ".concat(theme.breakpoints.large - 1, "px)"), {
      display: 'none'
    }))
  }, /*#__PURE__*/React.createElement(_index.Grid, null, /*#__PURE__*/React.createElement(_index.Cell, {
    span: [0, 3, 3]
  }, /*#__PURE__*/React.createElement(Spacing, spacingProps, /*#__PURE__*/React.createElement(AppName, appNameProps, title))), /*#__PURE__*/React.createElement(_index.Cell, {
    span: userItems.length ? [0, 4, 8] : [0, 5, 9]
  }, /*#__PURE__*/React.createElement(PrimaryMenuContainer, _extends({
    role: "navigation",
    "aria-label": "Main navigation"
  }, primaryMenuContainerProps), mainItems.map(function (item, index) {
    // For an active top level menu get the secondary navigation and its positioning
    if (item.active && item.children && item.children.length) {
      secondaryMenu = item.children;

      if (item.navPosition) {
        desktopSubNavPosition = item.navPosition.desktop || desktopSubNavPosition;
        mobileSubNavPosition = item.navPosition.mobile || mobileSubNavPosition;
      }
    }

    return /*#__PURE__*/React.createElement(MainMenuItem, {
      item: item,
      key: index,
      mapItemToNode: mapItemToNode,
      onSelect: onMainItemSelect,
      overrides: overrides
    });
  }))), userItems.length ? /*#__PURE__*/React.createElement(_index.Cell, {
    span: [0, 1, 1]
  }, /*#__PURE__*/React.createElement(Spacing, spacingProps, /*#__PURE__*/React.createElement(_userMenu.default, {
    mapItemToNode: mapItemToNode,
    onItemSelect: onUserItemSelect,
    overrides: overrides,
    username: username,
    usernameSubtitle: usernameSubtitle,
    userImgUrl: userImgUrl,
    userItems: userItems
  }))) : null), secondaryMenu && desktopSubNavPosition === _constants.POSITION.horizontal && /*#__PURE__*/React.createElement(SecondaryMenu, {
    items: secondaryMenu,
    mapItemToNode: mapItemToNode,
    onSelect: onMainItemSelect,
    overrides: overrides
  })));
} //$FlowFixMe


var _default = (0, _overrides.withOverrides)(AppNavBar, 'AppNavBar');

exports.default = _default;