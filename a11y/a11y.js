"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = A11y;

var React = _interopRequireWildcard(require("react"));

var _axeCore = _interopRequireDefault(require("axe-core"));

var _index = require("../layer/index.js");

var _index2 = require("../typography/index.js");

var _index3 = require("../styles/index.js");

var _themeProvider = require("../styles/theme-provider.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function validateNode(node) {
  return new Promise(function (resolve, reject) {
    _axeCore.default.run(node, {
      reporter: 'v2'
    }, function (error, results) {
      if (error) reject(error);
      resolve(results.violations);
    });
  });
}

function segmentViolationsByNode(violations) {
  var nodes = violations.reduce(function (map, violation) {
    violation.nodes.forEach(function (node) {
      if (!map[node.target]) {
        map[node.target] = [violation];
      } else {
        map[node.target] = map[node.target].push(violation);
      }
    });
    return map;
  }, {});
  return Object.entries(nodes);
}

var ViolationContainer = (0, _index3.styled)('div', function (_ref) {
  var $theme = _ref.$theme,
      $top = _ref.$top,
      $left = _ref.$left;
  return {
    backgroundColor: $theme.colors.mono100,
    boxShadow: $theme.lighting.shadow600,
    position: 'absolute',
    padding: $theme.sizing.scale400,
    top: $top,
    left: $left
  };
});
ViolationContainer.displayName = "ViolationContainer";

function Violation(props) {
  var _React$useState = React.useState({
    top: 0,
    left: 0
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      offset = _React$useState2[0],
      setOffset = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      anchor = _React$useState4[0],
      setAnchor = _React$useState4[1];

  var _React$useState5 = React.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      popper = _React$useState6[0],
      setPopper = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      isHovered = _React$useState8[0],
      setIsHovered = _React$useState8[1];

  var theme = React.useContext(_themeProvider.ThemeContext);

  var handleMouseEnter = function handleMouseEnter() {
    return setIsHovered(true);
  };

  var handleMouseLeave = function handleMouseLeave() {
    return setIsHovered(false);
  };

  React.useEffect(function () {
    var node = document.querySelector(props.target);

    if (node) {
      setAnchor(node);
      node.setAttribute('style', "border: solid 1px ".concat(theme.colors.negative300, ";"));
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);
    }

    return function () {
      if (node) {
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [props.target]);
  if (!isHovered) return null;
  return /*#__PURE__*/React.createElement(_index.Layer, null, /*#__PURE__*/React.createElement(_index.TetherBehavior, {
    anchorRef: anchor,
    popperRef: popper,
    onPopperUpdate: function onPopperUpdate(update) {
      return setOffset(update.popper);
    },
    placement: _index.TETHER_PLACEMENT.bottom
  }, /*#__PURE__*/React.createElement(ViolationContainer, {
    ref: setPopper,
    $top: "".concat(offset.top, "px") || '0px',
    $left: "".concat(offset.left, "px") || '0px'
  }, /*#__PURE__*/React.createElement(_index2.Caption1, null, props.target), props.violations.map(function (violation, index) {
    return /*#__PURE__*/React.createElement(_index2.Paragraph3, {
      key: index
    }, violation.description);
  }))));
}

function A11y(props) {
  var _React$useState9 = React.useState([]),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      violations = _React$useState10[0],
      setViolations = _React$useState10[1];

  var _React$useState11 = React.useState(null),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      idleID = _React$useState12[0],
      setIdleID = _React$useState12[1];

  var child = React.useRef(null);
  React.useEffect(function () {
    if (child.current) {
      if (idleID) {
        cancelIdleCallback(idleID);
        setIdleID(null);
      }

      var id = requestIdleCallback(function () {
        validateNode(child.current).then(setViolations);
      });
      setIdleID(id);
    }
  }, [props.children]);
  var violationsByNode = segmentViolationsByNode(violations);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    ref: child
  }, props.children), /*#__PURE__*/React.createElement("div", null, violationsByNode.map(function (_ref2, index) {
    var _ref3 = _slicedToArray(_ref2, 2),
        node = _ref3[0],
        violations = _ref3[1];

    return (
      /*#__PURE__*/
      // eslint-disable-next-line flowtype/no-weak-types
      React.createElement(Violation, {
        target: node,
        violations: violations,
        key: index
      })
    );
  })));
}