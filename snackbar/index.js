"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DURATION", {
  enumerable: true,
  get: function get() {
    return _constants.DURATION;
  }
});
Object.defineProperty(exports, "PLACEMENT", {
  enumerable: true,
  get: function get() {
    return _constants.PLACEMENT;
  }
});
Object.defineProperty(exports, "SnackbarElement", {
  enumerable: true,
  get: function get() {
    return _snackbarElement.default;
  }
});
Object.defineProperty(exports, "SnackbarProvider", {
  enumerable: true,
  get: function get() {
    return _snackbarContext.default;
  }
});
Object.defineProperty(exports, "useSnackbar", {
  enumerable: true,
  get: function get() {
    return _snackbarContext.useSnackbar;
  }
});
Object.defineProperty(exports, "StyledRoot", {
  enumerable: true,
  get: function get() {
    return _styledComponents.StyledRoot;
  }
});
Object.defineProperty(exports, "StyledContent", {
  enumerable: true,
  get: function get() {
    return _styledComponents.StyledContent;
  }
});
Object.defineProperty(exports, "StyledStartEnhancerContainer", {
  enumerable: true,
  get: function get() {
    return _styledComponents.StyledStartEnhancerContainer;
  }
});
Object.defineProperty(exports, "StyledSpinner", {
  enumerable: true,
  get: function get() {
    return _styledComponents.StyledSpinner;
  }
});
Object.defineProperty(exports, "StyledMessage", {
  enumerable: true,
  get: function get() {
    return _styledComponents.StyledMessage;
  }
});
Object.defineProperty(exports, "StyledWrapActionButtonContainer", {
  enumerable: true,
  get: function get() {
    return _styledComponents.StyledWrapActionButtonContainer;
  }
});
Object.defineProperty(exports, "StyledActionButtonContainer", {
  enumerable: true,
  get: function get() {
    return _styledComponents.StyledActionButtonContainer;
  }
});
Object.defineProperty(exports, "StyledPlacementContainer", {
  enumerable: true,
  get: function get() {
    return _styledComponents.StyledPlacementContainer;
  }
});

var _constants = require("./constants.js");

var _snackbarElement = _interopRequireDefault(require("./snackbar-element.js"));

var _snackbarContext = _interopRequireWildcard(require("./snackbar-context.js"));

var _styledComponents = require("./styled-components.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }