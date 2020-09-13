"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _overrides = require("../helpers/overrides.js");

var _styledComponents = require("./styled-components.js");

var _constants = require("./constants.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tabs).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: "onChange",
    value: function onChange(_ref) {
      var activeKey = _ref.activeKey;
      var onChange = this.props.onChange;
      typeof onChange === 'function' && onChange({
        activeKey: activeKey
      });
    }
  }, {
    key: "getTabs",
    value: function getTabs() {
      var _this = this;

      var _this$props = this.props,
          activeKey = _this$props.activeKey,
          disabled = _this$props.disabled,
          orientation = _this$props.orientation,
          children = _this$props.children,
          _this$props$overrides = _this$props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides; // eslint-disable-next-line flowtype/no-weak-types

      var tabs = React.Children.map(children, function (child, index) {
        if (!child) return;
        var key = child.key || String(index);
        return React.cloneElement(child, {
          key: key,
          id: key,
          // for aria-labelledby
          active: key === activeKey,
          disabled: disabled || child.props.disabled,
          $orientation: orientation,
          onSelect: function onSelect() {
            return _this.onChange({
              activeKey: key
            });
          },
          children: child.props.title,
          overrides: (0, _overrides.mergeOverrides)(overrides, child.props.overrides || {})
        });
      });
      return tabs;
    }
  }, {
    key: "getPanels",
    value: function getPanels() {
      var _this$props2 = this.props,
          activeKey = _this$props2.activeKey,
          disabled = _this$props2.disabled,
          orientation = _this$props2.orientation,
          children = _this$props2.children,
          _this$props2$override = _this$props2.overrides,
          overrides = _this$props2$override === void 0 ? {} : _this$props2$override,
          renderAll = _this$props2.renderAll;
      var TabContentOverride = overrides.TabContent;

      var _getOverrides = (0, _overrides.getOverrides)(TabContentOverride, _styledComponents.TabContent),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          TabContent = _getOverrides2[0],
          tabContentProps = _getOverrides2[1]; // eslint-disable-next-line flowtype/no-weak-types


      var tabs = React.Children.map(children, function (child, index) {
        if (!child) return;
        var key = child.key || String(index);
        var isActive = key === activeKey;
        var props = {
          key: key,
          'aria-labelledby': key
        };
        var sharedProps = {
          $active: isActive,
          $disabled: disabled,
          $orientation: orientation
        };
        return React.createElement(TabContent, _extends({
          role: "tabpanel"
        }, sharedProps, tabContentProps, props), renderAll ? child.props.children : null, isActive && !renderAll ? child.props.children : null);
      });
      return tabs;
    }
  }, {
    key: "getSharedProps",
    value: function getSharedProps() {
      var _this$props3 = this.props,
          disabled = _this$props3.disabled,
          orientation = _this$props3.orientation;
      return {
        $disabled: disabled,
        $orientation: orientation
      };
    }
  }, {
    key: "render",
    value: function render() {
      var sharedProps = this.getSharedProps();
      var _this$props$overrides2 = this.props.overrides,
          overrides = _this$props$overrides2 === void 0 ? {} : _this$props$overrides2;
      var RootOverride = overrides.Root,
          TabBarOverride = overrides.TabBar;

      var _getOverrides3 = (0, _overrides.getOverrides)(RootOverride, _styledComponents.Root),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          Root = _getOverrides4[0],
          rootProps = _getOverrides4[1];

      var _getOverrides5 = (0, _overrides.getOverrides)(TabBarOverride, _styledComponents.TabBar),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          TabBar = _getOverrides6[0],
          tabBarProps = _getOverrides6[1];

      return React.createElement(Root, _extends({
        "data-baseweb": "tabs"
      }, sharedProps, rootProps), React.createElement(TabBar, _extends({
        role: "tablist"
      }, sharedProps, tabBarProps), this.getTabs()), this.getPanels());
    }
  }]);

  return Tabs;
}(React.Component);

exports.default = Tabs;

_defineProperty(Tabs, "defaultProps", {
  disabled: false,
  onChange: function onChange() {},
  overrides: {},
  orientation: _constants.ORIENTATION.horizontal,
  renderAll: false
});