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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Accordion =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Accordion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Accordion)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", _objectSpread({
      expanded: []
    }, _this.props.initialState));

    return _this;
  }

  _createClass(Accordion, [{
    key: "onPanelChange",
    value: function onPanelChange(key, onChange) {
      var activeKeys = this.state.expanded;
      var accordion = this.props.accordion;

      if (accordion) {
        activeKeys = activeKeys[0] === key ? [] : [key];
      } else {
        activeKeys = _toConsumableArray(activeKeys);
        var index = activeKeys.indexOf(key);
        var wasExpanded = index > -1;

        if (wasExpanded) {
          // remove active state
          activeKeys.splice(index, 1);
        } else {
          activeKeys.push(key);
        }
      }

      var newState = {
        expanded: activeKeys
      };
      this.internalSetState(_constants.STATE_CHANGE_TYPE.expand, newState); // Call individual panel's onChange handler

      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      if (typeof onChange === 'function') onChange.apply(void 0, args);
    }
  }, {
    key: "internalSetState",
    value: function internalSetState(type, changes) {
      var _this$props = this.props,
          stateReducer = _this$props.stateReducer,
          onChange = _this$props.onChange;
      var newState = stateReducer(type, changes, this.state);
      this.setState(newState);
      typeof onChange === 'function' && onChange(newState);
    }
  }, {
    key: "getItems",
    value: function getItems() {
      var _this2 = this;

      var expanded = this.state.expanded;
      var _this$props2 = this.props,
          accordion = _this$props2.accordion,
          disabled = _this$props2.disabled,
          children = _this$props2.children,
          renderPanelContent = _this$props2.renderPanelContent,
          renderAll = _this$props2.renderAll,
          overrides = _this$props2.overrides; // eslint-disable-next-line flowtype/no-weak-types

      var newChildren = React.Children.map(children, function (child, index) {
        if (!child) return; // If there is no key provided use the panel order as a default key

        var key = child.key || String(index);
        var isExpanded = false;

        if (accordion) {
          isExpanded = expanded[0] === key;
        } else {
          isExpanded = expanded.includes(key);
        }

        var props = {
          key: key,
          expanded: isExpanded || child.props.expanded,
          accordion: accordion,
          renderPanelContent: renderPanelContent,
          renderAll: renderAll,
          overrides: child.props.overrides || overrides,
          disabled: child.props.disabled || disabled,
          onChange: function onChange() {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            return _this2.onPanelChange.apply(_this2, [key, child.props.onChange].concat(args));
          }
        };
        return React.cloneElement(child, props);
      });
      return newChildren;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // TODO(v11)
      if (process.env.NODE_ENV !== "production" && this.props.renderPanelContent) {
        console.warn('baseui:Accordion The `renderPanelContent` prop is deprecated. Please update your code to use `renderAll`.');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$overrides = this.props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides;
      var RootOverride = overrides.Root;

      var _getOverrides = (0, _overrides.getOverrides)(RootOverride, _styledComponents.Root),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Root = _getOverrides2[0],
          rootProps = _getOverrides2[1];

      return React.createElement(Root, _extends({
        "data-baseweb": "accordion",
        $disabled: this.props.disabled,
        $isFocusVisible: false
      }, rootProps), this.getItems());
    }
  }]);

  return Accordion;
}(React.Component);

exports.default = Accordion;

_defineProperty(Accordion, "defaultProps", {
  accordion: true,
  disabled: false,
  initialState: {
    expanded: []
  },
  onChange: function onChange() {},
  overrides: {},
  renderAll: false,
  renderPanelContent: false,
  stateReducer: function stateReducer(type, newState) {
    return newState;
  }
});