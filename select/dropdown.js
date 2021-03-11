"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = require("./styled-components.js");

var _index = require("../menu/index.js");

var _overrides = require("../helpers/overrides.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function groupOptions(options) {
  return options.reduce(function (groups, option) {
    if (option.__optgroup) {
      if (!groups[option.__optgroup]) {
        groups[option.__optgroup] = [];
      }

      groups[option.__optgroup].push(option);
    } else {
      groups.__ungrouped.push(option);
    }

    return groups;
  }, {
    __ungrouped: []
  });
}

var SelectDropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectDropdown, _React$Component);

  function SelectDropdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectDropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectDropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getItemLabel", function (option) {
      var _this$props = _this.props,
          getOptionLabel = _this$props.getOptionLabel,
          _this$props$overrides = _this$props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides,
          value = _this$props.value,
          valueKey = _this$props.valueKey;

      var _getOverrides = (0, _overrides.getOverrides)(overrides.OptionContent, _styledComponents.StyledOptionContent),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          OptionContent = _getOverrides2[0],
          optionContentProps = _getOverrides2[1];

      var $selected;

      if (Array.isArray(value)) {
        $selected = !!value.find(function (selected) {
          return selected && selected[valueKey] === option[valueKey];
        });
      } else {
        $selected = value[valueKey] === option[valueKey];
      }

      var optionSharedProps = {
        $selected: $selected,
        $disabled: option.disabled,
        $isHighlighted: option.isHighlighted
      };
      return React.createElement(OptionContent, _extends({
        "aria-readonly": option.disabled,
        "aria-selected": $selected,
        key: option[valueKey]
      }, _this.getSharedProps(), optionSharedProps, optionContentProps), getOptionLabel({
        option: option,
        optionState: optionSharedProps
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      e.nativeEvent.stopImmediatePropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "getHighlightedIndex", function () {
      var _this$props2 = _this.props,
          value = _this$props2.value,
          options = _this$props2.options,
          valueKey = _this$props2.valueKey; // Highlight only first value as menu supports only a single highlight index

      var firstValue = {};

      if (Array.isArray(value) && value.length > 0) {
        firstValue = value[0];
      } else if (!(value instanceof Array)) {
        firstValue = value;
      }

      if (Object.keys(firstValue).length > 0) {
        var a = options.findIndex(function (option) {
          return option && option[valueKey] === firstValue[valueKey];
        });
        return a === -1 ? 0 : a;
      }

      return 0;
    });

    return _this;
  }

  _createClass(SelectDropdown, [{
    key: "getSharedProps",
    value: function getSharedProps() {
      var _this$props3 = this.props,
          error = _this$props3.error,
          isLoading = _this$props3.isLoading,
          multi = _this$props3.multi,
          required = _this$props3.required,
          size = _this$props3.size,
          searchable = _this$props3.searchable,
          type = _this$props3.type,
          width = _this$props3.width;
      return {
        $error: error,
        $isLoading: isLoading,
        $multi: multi,
        $required: required,
        $searchable: searchable,
        $size: size,
        $type: type,
        $width: width
      };
    } // eslint-disable-next-line flowtype/no-weak-types

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // TODO(#185) Add no-results and loading states to menu
      var _this$props4 = this.props,
          maxDropdownHeight = _this$props4.maxDropdownHeight,
          multi = _this$props4.multi,
          noResultsMsg = _this$props4.noResultsMsg,
          onItemSelect = _this$props4.onItemSelect,
          _this$props4$options = _this$props4.options,
          options = _this$props4$options === void 0 ? [] : _this$props4$options,
          _this$props4$override = _this$props4.overrides,
          overrides = _this$props4$override === void 0 ? {} : _this$props4$override,
          size = _this$props4.size;

      var _getOverrides3 = (0, _overrides.getOverrides)(overrides.DropdownContainer, _styledComponents.StyledDropdownContainer),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          DropdownContainer = _getOverrides4[0],
          dropdownContainerProps = _getOverrides4[1];

      var _getOverrides5 = (0, _overrides.getOverrides)(overrides.DropdownListItem, _styledComponents.StyledDropdownListItem),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          ListItem = _getOverrides6[0],
          listItemProps = _getOverrides6[1];

      var _getOverrides7 = (0, _overrides.getOverrides)(overrides.StatefulMenu, _index.StatefulMenu),
          _getOverrides8 = _slicedToArray(_getOverrides7, 2),
          OverriddenStatefulMenu = _getOverrides8[0],
          _getOverrides8$ = _getOverrides8[1],
          _getOverrides8$$overr = _getOverrides8$.overrides,
          statefulMenuOverrides = _getOverrides8$$overr === void 0 ? {} : _getOverrides8$$overr,
          restStatefulMenuProps = _objectWithoutProperties(_getOverrides8$, ["overrides"]);

      var highlightedIndex = this.getHighlightedIndex();
      var groupedOptions = groupOptions(options);
      return React.createElement(DropdownContainer, _extends({
        "data-no-focus-lock": true,
        ref: this.props.innerRef,
        role: "listbox"
      }, this.getSharedProps(), dropdownContainerProps), React.createElement(OverriddenStatefulMenu, _extends({
        noResultsMsg: noResultsMsg,
        onActiveDescendantChange: function onActiveDescendantChange(id) {
          if (_this2.props.onActiveDescendantChange) {
            _this2.props.onActiveDescendantChange(id);
          }
        },
        onItemSelect: onItemSelect,
        items: groupedOptions,
        size: size,
        initialState: {
          isFocused: true,
          highlightedIndex: highlightedIndex
        },
        typeAhead: false,
        keyboardControlNode: this.props.keyboardControlNode,
        overrides: (0, _overrides.mergeOverrides)({
          List: {
            component: _styledComponents.StyledDropdown,
            style: function style(p) {
              return {
                maxHeight: p.$maxHeight || null
              };
            },
            props: {
              id: this.props.id ? this.props.id : null,
              $maxHeight: maxDropdownHeight,
              'aria-multiselectable': multi
            }
          },
          Option: {
            props: {
              getItemLabel: this.getItemLabel,
              // figure out why the onClick handler is not
              // triggered without this temporary fix
              onMouseDown: this.onMouseDown,
              overrides: {
                ListItem: {
                  component: ListItem,
                  props: _objectSpread({}, listItemProps, {
                    role: 'option'
                  }),
                  // slightly hacky way to handle the list item style overrides
                  // since the menu component doesn't provide a top level overrides for it
                  // $FlowFixMe
                  style: listItemProps.$style
                }
              },
              renderHrefAsAnchor: false
            }
          }
        }, _objectSpread({
          List: overrides.Dropdown || {},
          Option: overrides.DropdownOption || {}
        }, statefulMenuOverrides))
      }, restStatefulMenuProps)));
    }
  }]);

  return SelectDropdown;
}(React.Component);

exports.default = SelectDropdown;