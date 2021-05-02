"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOverride = getOverride;
exports.getOverrideProps = getOverrideProps;
exports.toObjectOverride = toObjectOverride;
exports.getOverrides = getOverrides;
exports.mergeOverrides = mergeOverrides;
exports.mergeOverride = mergeOverride;
exports.mergeConfigurationOverrides = mergeConfigurationOverrides;
exports.useOverrides = useOverrides;
exports.withOverrides = withOverrides;

var React = _interopRequireWildcard(require("react"));

var _reactIs = require("react-is");

var _themeProvider = require("../styles/theme-provider.js");

var _deepMerge = _interopRequireDefault(require("../utils/deep-merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Given an override argument, returns the component implementation override if it exists
 */
// eslint-disable-next-line flowtype/no-weak-types
function getOverride(override) {
  if ((0, _reactIs.isValidElementType)(override)) {
    return override;
  } // Check if override is OverrideObjectT


  if (override && _typeof(override) === 'object') {
    // Remove this 'any' once this flow issue is fixed:
    // https://github.com/facebook/flow/issues/6666
    // eslint-disable-next-line flowtype/no-weak-types
    return override.component;
  } // null/undefined


  return override;
}
/**
 * Given an override argument, returns the override props that should be passed
 * to the component when rendering it.
 */


function getOverrideProps(override) {
  if (override && _typeof(override) === 'object') {
    if (_typeof(override.props) === 'object') {
      return _objectSpread(_objectSpread({}, override.props), {}, {
        $style: override.style
      });
    } else {
      return {
        $style: override.style
      };
    }
  }

  return {};
}
/**
 * Coerces an override argument into an override object
 * (sometimes it is just an override component)
 */


function toObjectOverride(override) {
  if ((0, _reactIs.isValidElementType)(override)) {
    return {
      // eslint-disable-next-line flowtype/no-weak-types
      component: override
    };
  } // Flow can't figure out that typeof 'function' above will
  // catch React.StatelessFunctionalComponent
  // (probably related to https://github.com/facebook/flow/issues/6666)
  // eslint-disable-next-line flowtype/no-weak-types


  return override || {};
}
/**
 * Get a convenient override array that will always have [component, props]
 */

/* eslint-disable flowtype/no-weak-types */


function getOverrides(override, defaultComponent) {
  var Component = getOverride(override) || defaultComponent;

  if (override && _typeof(override) === 'object' && typeof override.props === 'function') {
    // TODO(v11)
    if (process.env.NODE_ENV !== "production") {
      console.warn('baseui:Overrides Props as a function will be removed in the next major version. Override the whole component instead. ' + 'See https://baseweb.design/guides/understanding-overrides/#override-the-entire-subcomponent');
    }

    var DynamicOverride = /*#__PURE__*/React.forwardRef(function (props, ref) {
      var mappedProps = override.props(props);
      var nextProps = getOverrideProps(_objectSpread(_objectSpread({}, override), {}, {
        props: mappedProps
      }));
      return /*#__PURE__*/React.createElement(Component, _extends({
        ref: ref
      }, nextProps));
    });
    DynamicOverride.displayName = Component.displayName;
    return [DynamicOverride, {}];
  }

  var props = getOverrideProps(override);
  return [Component, props];
}
/* eslint-enable flowtype/no-weak-types */

/**
 * Merges two overrides objects – this is useful if you want to inject your own
 * overrides into a child component, but also accept further overrides from
 * from upstream. See `mergeOverride` below.
 */


function mergeOverrides() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var merged = Object.assign({}, target, source);
  var allIdentifiers = Object.keys(merged); // const allIdentifiers = Object.keys({...target, ...source});

  return allIdentifiers.reduce(function (acc, name) {
    acc[name] = mergeOverride(toObjectOverride(target[name]), toObjectOverride(source[name]));
    return acc;
  }, {});
}
/**
 * Merges two override objects using the following behavior:
 * - Component implementation from the source (parent) replaces target
 * - Props and styles are both deep merged
 */


function mergeOverride(target, source) {
  // Shallow merge should handle `component`
  var merged = _objectSpread(_objectSpread({}, target), source);

  if (target.props && source.props) {
    merged.props = mergeConfigurationOverrides(target.props, source.props);
  }

  if (target.style && source.style) {
    merged.style = mergeConfigurationOverrides(target.style, source.style);
  }

  return merged;
}
/**
 * Since style or props overrides can be an object *or* a function, we need to handle
 * the case that one of them is a function. We do this by returning a new
 * function that deep merges the result of each style override
 */


function mergeConfigurationOverrides(target, source) {
  // Simple case of both objects
  if (_typeof(target) === 'object' && _typeof(source) === 'object') {
    return (0, _deepMerge.default)({}, target, source);
  } // At least one is a function, return a new composite function


  return function () {
    return (0, _deepMerge.default)({}, typeof target === 'function' ? target.apply(void 0, arguments) : target, typeof source === 'function' ? source.apply(void 0, arguments) : source);
  };
} // Lil' hook for memoized unpacking of overrides


function useOverrides(defaults) {
  var overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return React.useMemo(function () {
    return (// eslint-disable-next-line flowtype/no-weak-types
      Object.keys(defaults).reduce(function (obj, key) {
        obj[key] = getOverrides(overrides[key], defaults[key]);
        return obj;
      }, {})
    );
  }, [overrides]);
}

function withOverrides(WrappedComponent, componentName) {
  // eslint-disable-next-line flowtype/no-weak-types
  var WithOverrides = /*#__PURE__*/function (_React$Component) {
    _inherits(WithOverrides, _React$Component);

    var _super = _createSuper(WithOverrides);

    function WithOverrides(props) {
      _classCallCheck(this, WithOverrides);

      return _super.call(this, props);
    }

    _createClass(WithOverrides, [{
      key: "render",
      value: function render() {
        var _this$context$overrid;

        // Grab forwardedRef from props and pass it down
        var forwardedRef = this.props.forwardedRef; // mergeOverrides from themeContext and props

        var overrides = mergeOverrides((_this$context$overrid = this.context.overrides) === null || _this$context$overrid === void 0 ? void 0 : _this$context$overrid[componentName], this.props.overrides);
        return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, this.props, {
          overrides: overrides,
          ref: forwardedRef
        }));
      }
    }]);

    return WithOverrides;
  }(React.Component);

  _defineProperty(WithOverrides, "contextType", _themeProvider.ThemeContext);

  return /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(WithOverrides, _extends({}, props, {
      forwardedRef: ref
    }));
  });
}