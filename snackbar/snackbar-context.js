"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSnackbar = useSnackbar;
exports.default = SnackbarProvider;
exports.SnackbarContext = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../layer/index.js");

var _overrides = require("../helpers/overrides.js");

var _index2 = require("../styles/index.js");

var _constants = require("./constants.js");

var _snackbarElement = _interopRequireDefault(require("./snackbar-element.js"));

var _styledComponents = require("./styled-components.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function fallbackHandler() {
  if (process.env.NODE_ENV !== "production") {
    console.warn('Snackbar context not found.');
  }
}

var SnackbarContext = React.createContext({
  enqueue: fallbackHandler,
  dequeue: fallbackHandler
});
exports.SnackbarContext = SnackbarContext;

function useSnackbar() {
  var context = React.useContext(SnackbarContext);
  return {
    enqueue: context.enqueue,
    dequeue: context.dequeue
  };
}

function SnackbarProvider(_ref) {
  var children = _ref.children,
      _ref$overrides = _ref.overrides,
      overrides = _ref$overrides === void 0 ? {} : _ref$overrides,
      placement = _ref.placement;

  var _useStyletron = (0, _index2.useStyletron)(),
      _useStyletron2 = _slicedToArray(_useStyletron, 1),
      css = _useStyletron2[0];

  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      snackbars = _React$useState2[0],
      setSnackbars = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      animating = _React$useState4[0],
      setAnimating = _React$useState4[1];

  var timeoutRef = React.useRef(null);

  var _React$useState5 = React.useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      containerHeight = _React$useState6[0],
      setContainerHeight = _React$useState6[1];

  var containerRef = React.useRef(null);

  function enqueue(elementProps) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.DURATION.short;
    setSnackbars(function (prev) {
      if (prev.length === 0) {
        enter(duration);
      }

      return [].concat(_toConsumableArray(prev), [{
        elementProps: elementProps,
        duration: duration
      }]);
    });
  }

  function dequeue() {
    setContainerHeight(0);
    setSnackbars(function (prev) {
      var next = prev.slice(1);

      if (next.length > 0) {
        enter(next[0].duration);
      }

      return next;
    });
  }

  function enter(duration) {
    setAnimating(true);
    setTimeout(function () {
      setAnimating(false);
      display(duration);
    }, 1000);
  }

  function exit() {
    setAnimating(true);
    setTimeout(function () {
      setAnimating(false);
      dequeue();
    }, 1000);
  }

  function display(duration) {
    if (duration === _constants.DURATION.infinite) {
      return;
    }

    timeoutRef.current = setTimeout(function () {
      exit();
    }, duration);
  }

  function handleMouseEnter() {
    clearTimeout(timeoutRef.current);
  }

  function handleMouseLeave(duration) {
    display(duration);
  }

  function handleActionClick() {
    clearTimeout(timeoutRef.current);
    exit();
  }

  React.useEffect(function () {
    if (typeof document !== 'undefined') {
      var observer = new window.ResizeObserver(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 1),
            entry = _ref3[0];

        return setContainerHeight(entry.contentRect.height);
      });

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return function () {
        return observer.disconnect();
      };
    }
  }, [snackbars.length, animating]);
  var translateHeight = React.useMemo(function () {
    var value = containerHeight * 2 + 24;

    if (!placement || placement === _constants.PLACEMENT.top || placement === _constants.PLACEMENT.topLeft || placement === _constants.PLACEMENT.topRight) {
      return -1 * value;
    }

    return value;
  }, [placement, containerHeight]);

  var PlacementContainerOverrides = overrides.PlacementContainer,
      snackbarOverrides = _objectWithoutProperties(overrides, ["PlacementContainer"]);

  var _getOverrides = (0, _overrides.getOverrides)(PlacementContainerOverrides, _styledComponents.StyledPlacementContainer),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      PlacementContainer = _getOverrides2[0],
      placementContainerProps = _getOverrides2[1];

  return React.createElement(SnackbarContext.Provider, {
    value: {
      enqueue: enqueue,
      dequeue: exit
    }
  }, React.createElement("div", {
    className: css({
      boxSizing: 'border-box',
      position: 'absolute',
      top: '-10000px',
      left: '-10000px'
    }),
    ref: containerRef
  }, snackbars[0] && React.createElement(_snackbarElement.default, _extends({}, snackbars[0].elementProps, {
    overrides: _objectSpread({}, snackbarOverrides, {}, snackbars[0].elementProps.overrides),
    focus: false
  }))), snackbars.length > 0 && containerHeight !== 0 && React.createElement(_index.Layer, null, React.createElement(PlacementContainer, _extends({
    $animating: animating,
    $placement: placement,
    $translateHeight: translateHeight
  }, placementContainerProps), React.createElement("div", {
    role: "alert",
    onMouseEnter: handleMouseEnter,
    onMouseLeave: function onMouseLeave() {
      return handleMouseLeave(snackbars[0].duration);
    },
    className: css({
      display: 'inline',
      pointerEvents: 'all'
    })
  }, React.createElement(_snackbarElement.default, _extends({}, snackbars[0].elementProps, {
    actionOnClick: function actionOnClick(event) {
      if (snackbars[0].elementProps.actionOnClick) {
        snackbars[0].elementProps.actionOnClick(event);
      }

      handleActionClick();
    },
    overrides: _objectSpread({}, snackbarOverrides, {}, snackbars[0].elementProps.overrides)
  }))))), children);
}