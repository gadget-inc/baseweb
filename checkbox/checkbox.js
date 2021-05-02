"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _overrides = require("../helpers/overrides.js");

var _styledComponents = require("./styled-components.js");

var _constants = require("./constants.js");

var _focusVisible = require("../utils/focusVisible.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var stopPropagation = function stopPropagation(e) {
  return e.stopPropagation();
};

var StatelessCheckbox = /*#__PURE__*/function (_React$Component) {
  _inherits(StatelessCheckbox, _React$Component);

  var _super = _createSuper(StatelessCheckbox);

  function StatelessCheckbox() {
    var _this;

    _classCallCheck(this, StatelessCheckbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocused: _this.props.autoFocus || false,
      isFocusVisible: false,
      isHovered: false,
      isActive: false
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function (e) {
      ReactDOM.flushSync(function () {
        _this.setState({
          isHovered: true
        });

        _this.props.onMouseEnter(e);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function (e) {
      ReactDOM.flushSync(function () {
        _this.setState({
          isHovered: false,
          isActive: false
        });

        _this.props.onMouseLeave(e);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      ReactDOM.flushSync(function () {
        _this.setState({
          isActive: true
        });

        _this.props.onMouseDown(e);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function (e) {
      ReactDOM.flushSync(function () {
        _this.setState({
          isActive: false
        });

        _this.props.onMouseUp(e);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (e) {
      ReactDOM.flushSync(function () {
        _this.setState({
          isFocused: true
        });

        _this.props.onFocus(e);

        if ((0, _focusVisible.isFocusVisible)(e)) {
          _this.setState({
            isFocusVisible: true
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (e) {
      ReactDOM.flushSync(function () {
        _this.setState({
          isFocused: false
        });

        _this.props.onBlur(e);

        if (_this.state.isFocusVisible !== false) {
          _this.setState({
            isFocusVisible: false
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      ReactDOM.flushSync(function () {
        _this.props.onChange(e);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isToggle", function () {
      return _this.props.checkmarkType === _constants.STYLE_TYPE.toggle || _this.props.checkmarkType === _constants.STYLE_TYPE.toggle_round;
    });

    return _this;
  }

  _createClass(StatelessCheckbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          autoFocus = _this$props.autoFocus,
          inputRef = _this$props.inputRef;

      if (autoFocus && inputRef.current) {
        inputRef.current.focus();
      } // TODO(v11)


      if (process.env.NODE_ENV !== "production") {
        if (this.props.checkmarkType === _constants.STYLE_TYPE.toggle) {
          console.warn("baseui:Checkbox The STYLE_TYPE.toggle value on the 'checkmarkType' prop does not conform to the current base design specification. " + 'Please update your code to STYLE_TYPE.toggle_round. This will be updated automatically in a future major version.');
        }

        if (this.props.isError) {
          console.warn('baseui:Checkbox Property "isError" will be removed in the next major version. Use "error" property instead.');
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var checkmarkType = this.props.checkmarkType;
      var _this$props2 = this.props,
          _this$props2$override = _this$props2.overrides,
          overrides = _this$props2$override === void 0 ? {} : _this$props2$override,
          _this$props2$labelPla = _this$props2.labelPlacement,
          labelPlacement = _this$props2$labelPla === void 0 ? this.isToggle() ? 'left' : 'right' : _this$props2$labelPla,
          inputRef = _this$props2.inputRef,
          isIndeterminate = _this$props2.isIndeterminate,
          isError = _this$props2.isError,
          error = _this$props2.error,
          disabled = _this$props2.disabled,
          value = _this$props2.value,
          name = _this$props2.name,
          type = _this$props2.type,
          checked = _this$props2.checked,
          children = _this$props2.children,
          required = _this$props2.required,
          title = _this$props2.title,
          ariaLabel = _this$props2.ariaLabel;
      var RootOverride = overrides.Root,
          CheckmarkOverride = overrides.Checkmark,
          LabelOverride = overrides.Label,
          InputOverride = overrides.Input,
          ToggleOverride = overrides.Toggle,
          ToggleInnerOverride = overrides.ToggleInner,
          ToggleTrackOverride = overrides.ToggleTrack;

      var Root = (0, _overrides.getOverride)(RootOverride) || _styledComponents.Root;

      var Checkmark = (0, _overrides.getOverride)(CheckmarkOverride) || _styledComponents.Checkmark;

      var Label = (0, _overrides.getOverride)(LabelOverride) || _styledComponents.Label;

      var Input = (0, _overrides.getOverride)(InputOverride) || _styledComponents.Input;

      var Toggle = (0, _overrides.getOverride)(ToggleOverride) || _styledComponents.Toggle;

      var ToggleInner = (0, _overrides.getOverride)(ToggleInnerOverride) || _styledComponents.ToggleInner;

      var ToggleTrack = (0, _overrides.getOverride)(ToggleTrackOverride) || _styledComponents.ToggleTrack;

      var inputEvents = {
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      };
      var mouseEvents = {
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp
      };
      var sharedProps = {
        $isFocused: this.state.isFocused,
        $isFocusVisible: this.state.isFocusVisible,
        $isHovered: this.state.isHovered,
        $isActive: this.state.isActive,
        $isError: isError,
        $error: error,
        $checked: checked,
        $isIndeterminate: isIndeterminate,
        $required: required,
        $disabled: disabled,
        $value: value,
        $checkmarkType: checkmarkType
      }; // TODO(v11) - add check for children (#2172)

      var labelComp = /*#__PURE__*/React.createElement(Label, _extends({
        $labelPlacement: labelPlacement
      }, sharedProps, (0, _overrides.getOverrideProps)(LabelOverride)), children);
      return /*#__PURE__*/React.createElement(Root, _extends({
        "data-baseweb": "checkbox",
        title: title || null,
        $labelPlacement: labelPlacement
      }, sharedProps, mouseEvents, (0, _overrides.getOverrideProps)(RootOverride)), (labelPlacement === 'top' || labelPlacement === 'left') && labelComp, this.isToggle() ? /*#__PURE__*/React.createElement(ToggleTrack, _extends({
        role: "checkbox",
        "aria-checked": isIndeterminate ? 'mixed' : checked,
        "aria-invalid": error || isError || null
      }, sharedProps, (0, _overrides.getOverrideProps)(ToggleTrackOverride)), /*#__PURE__*/React.createElement(Toggle, _extends({}, sharedProps, (0, _overrides.getOverrideProps)(ToggleOverride)), /*#__PURE__*/React.createElement(ToggleInner, _extends({}, sharedProps, (0, _overrides.getOverrideProps)(ToggleInnerOverride))))) : /*#__PURE__*/React.createElement(Checkmark, _extends({
        role: "checkbox",
        checked: checked,
        "aria-checked": isIndeterminate ? 'mixed' : checked,
        "aria-invalid": error || isError || null
      }, sharedProps, (0, _overrides.getOverrideProps)(CheckmarkOverride))), /*#__PURE__*/React.createElement(Input, _extends({
        value: value,
        name: name,
        checked: checked,
        required: required,
        "aria-label": ariaLabel,
        "aria-checked": isIndeterminate ? 'mixed' : checked,
        "aria-describedby": this.props['aria-describedby'],
        "aria-errormessage": this.props['aria-errormessage'],
        "aria-invalid": error || isError || null,
        "aria-required": required || null,
        disabled: disabled,
        type: type,
        ref: inputRef // Prevent a second click event from firing when label is clicked.
        // See https://github.com/uber/baseweb/issues/3847
        ,
        onClick: stopPropagation
      }, sharedProps, inputEvents, (0, _overrides.getOverrideProps)(InputOverride))), (labelPlacement === 'bottom' || labelPlacement === 'right') && labelComp);
    }
  }]);

  return StatelessCheckbox;
}(React.Component);

_defineProperty(StatelessCheckbox, "defaultProps", {
  overrides: {},
  checked: false,
  disabled: false,
  autoFocus: false,
  isIndeterminate: false,
  inputRef: /*#__PURE__*/React.createRef(),
  isError: false,
  error: false,
  type: 'checkbox',
  checkmarkType: _constants.STYLE_TYPE.default,
  onChange: function onChange() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onMouseDown: function onMouseDown() {},
  onMouseUp: function onMouseUp() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {}
});

var _default = StatelessCheckbox;
exports.default = _default;