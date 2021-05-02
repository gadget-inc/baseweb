function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable cup/no-undef */
import * as React from 'react';
import { getOverrides, withOverrides } from '../helpers/overrides.js';
import DeleteAlt from '../icon/delete-alt.js';
import TriangleDownIcon from '../icon/triangle-down.js';
import SearchIconComponent from '../icon/search.js';
import { LocaleContext } from '../locale/index.js';
import { Popover, PLACEMENT } from '../popover/index.js';
import { Spinner } from '../spinner/index.js';
import getBuiId from '../utils/get-bui-id.js';
import AutosizeInput from './autosize-input.js';
import { TYPE, STATE_CHANGE_TYPE } from './constants.js';
import defaultProps from './default-props.js';
import SelectDropdown from './dropdown.js';
import { StyledRoot, StyledControlContainer, StyledPlaceholder, StyledValueContainer, StyledInputContainer, StyledIconsContainer, StyledSelectArrow, StyledClearIcon, getLoadingIconStyles, StyledSearchIconContainer } from './styled-components.js';
import { expandValue, normalizeOptions } from './utils/index.js';

function Noop() {
  return null;
}

const isClick = event => event.type === 'click';

const isLeftClick = event => event.button !== null && event.button !== undefined && event.button === 0;

const containsNode = (parent, child) => {
  if (typeof document !== 'undefined') {
    // eslint-disable-next-line flowtype/no-weak-types
    return child && parent && parent.contains(child);
  }
};

export function isInteractive(rootTarget, rootElement) {
  if (rootTarget instanceof Element) {
    let target = rootTarget;

    while (target && target !== rootElement) {
      const role = target.getAttribute('role');

      if (role === 'button' || role === 'link') {
        return true;
      }

      if (target.tagName) target = target.parentElement;
    }
  }

  return false;
} // eslint-disable-next-line flowtype/no-weak-types

class Select extends React.Component {
  // anchor is a ref that refers to the outermost element rendered when the dropdown menu is not
  // open. This is required so that we can check if clicks are on/off the anchor element.
  // dropdown is a ref that refers to the popover element. This is required so that we can check if
  // clicks are on/off the dropdown element.
  // dragging is a flag to track whether a mobile device is currently scrolling versus clicking.
  // focusAfterClear is a flag to indicate that the dropdowm menu should open after a selected
  // option has been cleared.
  // openAfterFocus is a flag to indicate that the dropdown menu should open when the component is
  // focused. Developers have the option to disable initial clicks opening the dropdown menu. If not
  // disabled, clicks will set this flag to true. Upon focusing, look to this to see if the menu should
  // be opened, or only focus.
  // When an item is selected, it also triggers handleClickOutside and since the selected item is
  // already out of the menu (DOM), it will not recognize it as a subnode and triggers handleBlur
  // that sets isOpen to false. That's a faulty logic causing visible problems when
  // closeOnSelect is false. This flag helps to detect that selection was just made.
  // the select components can accept an array of options or an object where properties are optgroups
  // and values are arrays of options. this class property is constructed and updated in a normalized
  // shape where optgroup titles are stored on the option in the __optgroup field.
  // id generated for the listbox. used by screenreaders to associate the input with the menu it controls
  constructor(props) {
    super(props);

    _defineProperty(this, "anchor", /*#__PURE__*/React.createRef());

    _defineProperty(this, "dropdown", /*#__PURE__*/React.createRef());

    _defineProperty(this, "input", void 0);

    _defineProperty(this, "dragging", void 0);

    _defineProperty(this, "focusAfterClear", void 0);

    _defineProperty(this, "openAfterFocus", void 0);

    _defineProperty(this, "justSelected", void 0);

    _defineProperty(this, "options", []);

    _defineProperty(this, "listboxId", getBuiId());

    _defineProperty(this, "state", {
      activeDescendant: null,
      inputValue: '',
      isFocused: false,
      isOpen: this.props.startOpen,
      isPseudoFocused: false
    });

    _defineProperty(this, "isMounted", false);

    _defineProperty(this, "handleTouchOutside", event => {
      if (containsNode(this.dropdown.current, event.target)) return;

      if (!containsNode(this.anchor.current, event.target)) {
        this.closeMenu();
      }
    });

    _defineProperty(this, "handleTouchMove", () => this.dragging = true);

    _defineProperty(this, "handleTouchStart", () => this.dragging = false);

    _defineProperty(this, "handleTouchEnd", event => {
      if (this.dragging) return;
      this.handleClick(event);
    });

    _defineProperty(this, "handleTouchEndClearValue", event => {
      if (this.dragging) return;
      this.clearValue(event);
    });

    _defineProperty(this, "handleClick", event => {
      if (this.props.disabled || !isClick(event) && !isLeftClick(event)) {
        return;
      } // Case comes up when text has been typed into the input field. If no text provided,
      // the 'input' element will have essentially 0 width therefore will not be clickable.
      // When click outside does not reset input, text provided will stay rendered after clicks away
      // from the select component. Upon subsequent clicks on the provided text, open the dropdown
      // menu, in addition to text edit operations.


      if (event.target === this.input) {
        // CHASE: not sure why this condition is here. I cannot replicate a situation where clicks
        // on provided text break into here.
        if (!this.state.isFocused) {
          this.openAfterFocus = this.props.openOnClick;
          this.focus();
          return;
        }

        if (!this.state.isOpen) {
          this.setState({
            isOpen: true,
            isPseudoFocused: false
          });
          return;
        }
      } // Ensures that interactive elements within the Select component do not trigger the outer click
      // handler. For example, after an option is selected clicks on the 'clear' icon call here. We
      // should ignore those events. This comes after case where click is on input element, so that
      // those are handled on their own.


      if (this.input && isInteractive(event.target, this.input)) {
        return;
      } // For the simple case where clicking on the Select does not allow for providing
      // text input to filter the dropdown options.


      if (!this.props.searchable) {
        this.focus();
        this.setState(prev => ({
          isOpen: !prev.isOpen
        }));
        return;
      } // Cases below only apply to searchable Select component.


      if (this.state.isFocused) {
        // iOS ignores programmatic calls to input.focus() that were not triggered by a click event.
        // This component can get into a state where isFocused is true, but the DOM node is not
        // focused. Call focus here again to ensure.
        this.focus(); // Case comes up when click outside does not reset input - once text has been provided to
        // the input, and the user closes the dropdown menu the provided text is maintained. After
        // this, if the user focuses back into the select component then clicks on the component,
        // the provided text highlights rather than position's the cursor at the end of the input.

        if (this.input) this.input.value = '';
        this.setState(prev => ({
          isOpen: !this.focusAfterClear && !prev.isOpen,
          isPseudoFocused: false
        }));
        this.focusAfterClear = false;
      } else {
        this.openAfterFocus = this.props.openOnClick;
        this.focus();
      }
    });

    _defineProperty(this, "handleInputFocus", event => {
      if (this.props.disabled) return;
      if (this.props.onFocus) this.props.onFocus(event);
      let toOpen = this.state.isOpen || this.openAfterFocus; // if focus happens after clear values, don't open dropdown yet.

      toOpen = !this.focusAfterClear && toOpen;
      this.setState({
        isFocused: true,
        isOpen: !!toOpen
      });
      this.focusAfterClear = false;
      this.openAfterFocus = false;
    });

    _defineProperty(this, "handleBlur", event => {
      if (event.relatedTarget) {
        if (containsNode(this.anchor.current, event.relatedTarget) || containsNode(this.dropdown.current, event.relatedTarget)) {
          return;
        }
      } else if (containsNode(this.anchor.current, event.target)) {
        return;
      }

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }

      if (this.isMounted) {
        this.setState({
          isFocused: false,
          isOpen: false,
          isPseudoFocused: false,
          inputValue: this.props.onBlurResetsInput ? '' : this.state.inputValue
        });
      }
    });

    _defineProperty(this, "handleClickOutside", event => {
      if (this.justSelected) {
        this.justSelected = false;
        return;
      }

      if (containsNode(this.dropdown.current, event.target)) return;
      const isFocused = this.state.isFocused || this.state.isPseudoFocused;

      if (isFocused && !containsNode(this.anchor.current, event.target)) {
        this.handleBlur(event);
      }
    });

    _defineProperty(this, "handleInputChange", event => {
      let newInputValue = event.target.value;
      this.setState({
        inputValue: newInputValue,
        isOpen: true,
        isPseudoFocused: false
      });

      if (this.props.onInputChange) {
        this.props.onInputChange(event);
      }
    });

    _defineProperty(this, "handleKeyDown", event => {
      if (this.props.disabled) return;

      switch (event.keyCode) {
        case 8:
          // backspace
          if (!this.state.inputValue && this.props.backspaceRemoves) {
            event.preventDefault();
            this.backspaceValue();
          }

          break;

        case 9:
          // tab
          this.setState(prevState => ({
            isPseudoFocused: false,
            isFocused: false,
            isOpen: false,
            inputValue: !this.props.onCloseResetsInput || !this.props.onBlurResetsInput ? prevState.inputValue : ''
          }));
          break;

        case 27:
          // escape
          if (!this.state.isOpen && this.props.clearable && this.props.escapeClearsValue) {
            this.clearValue(event);
            this.setState({
              isFocused: false,
              isPseudoFocused: false
            });
          }

          break;

        case 32:
          // space
          if (this.props.searchable) {
            break;
          }

          event.preventDefault();

          if (!this.state.isOpen) {
            this.setState({
              isOpen: true
            });
          }

          break;

        case 38:
          // up
          event.preventDefault();

          if (!this.state.isOpen) {
            this.setState({
              isOpen: true
            });
          }

          break;

        case 40:
          // down
          event.preventDefault();

          if (!this.state.isOpen) {
            this.setState({
              isOpen: true
            });
          }

          break;

        case 33:
          // page up
          event.preventDefault();

          if (!this.state.isOpen) {
            this.setState({
              isOpen: true
            });
          }

          break;

        case 34:
          // page down
          event.preventDefault();

          if (!this.state.isOpen) {
            this.setState({
              isOpen: true
            });
          }

          break;

        case 35:
          // end key
          if (event.shiftKey) {
            break;
          }

          event.preventDefault();

          if (!this.state.isOpen) {
            this.setState({
              isOpen: true
            });
          }

          break;

        case 36:
          // home key
          if (event.shiftKey) {
            break;
          }

          event.preventDefault();

          if (!this.state.isOpen) {
            this.setState({
              isOpen: true
            });
          }

          break;

        case 46:
          // delete
          if (!this.state.inputValue && this.props.deleteRemoves) {
            event.preventDefault();
            this.popValue();
          }

          break;
      }
    });

    _defineProperty(this, "getOptionLabel", (locale, {
      option
    }) => option.isCreatable ? `${locale.select.create} “${option[this.props.labelKey]}”` : option[this.props.labelKey]);

    _defineProperty(this, "getValueLabel", ({
      option
    }) => {
      return option[this.props.labelKey];
    });

    _defineProperty(this, "handleActiveDescendantChange", id => {
      if (id) {
        this.setState({
          activeDescendant: id
        });
      } else {
        this.setState({
          activeDescendant: null
        });
      }
    });

    _defineProperty(this, "handleInputRef", input => {
      this.input = input;

      if (this.props.controlRef) {
        if (typeof this.props.controlRef === 'function') {
          this.props.controlRef(input);
        } else {
          this.props.controlRef.current = input;
        }
      }
    });

    _defineProperty(this, "selectValue", ({
      item
    }) => {
      if (item.disabled) {
        return;
      }

      this.justSelected = true; // NOTE: we add/set the value in a callback to make sure the
      // input value is empty to avoid styling issues in Chrome

      const updatedValue = this.props.onSelectResetsInput ? '' : this.state.inputValue;

      if (this.props.multi) {
        this.setState({
          inputValue: updatedValue,
          isOpen: !this.props.closeOnSelect
        }, () => {
          const valueArray = this.props.value;

          if (valueArray.some(i => i[this.props.valueKey] === item[this.props.valueKey])) {
            this.removeValue(item);
          } else {
            this.addValue(item);
          }
        });
      } else {
        this.focus();
        this.setState({
          inputValue: updatedValue,
          isOpen: !this.props.closeOnSelect,
          isFocused: true,
          isPseudoFocused: false
        }, () => {
          this.setValue([item], item, STATE_CHANGE_TYPE.select);
        });
      }
    });

    _defineProperty(this, "addValue", item => {
      const valueArray = [...this.props.value];
      this.setValue(valueArray.concat(item), item, STATE_CHANGE_TYPE.select);
    });

    _defineProperty(this, "backspaceValue", () => {
      const item = this.popValue();

      if (!item) {
        return;
      }

      const valueLength = this.props.value.length;
      const renderLabel = this.props.getValueLabel || this.getValueLabel;
      const labelForInput = renderLabel({
        option: item,
        index: valueLength - 1
      }); // label might not be a string, it might be a Node of another kind.

      if (!this.props.backspaceClearsInputValue && typeof labelForInput === 'string') {
        const remainingInput = labelForInput.slice(0, -1);
        this.setState({
          inputValue: remainingInput,
          isOpen: true
        });
      }
    });

    _defineProperty(this, "popValue", () => {
      const valueArray = [...this.props.value];
      const valueLength = valueArray.length;
      if (!valueLength) return;
      if (valueArray[valueLength - 1].clearableValue === false) return;
      const item = valueArray.pop();
      this.setValue(valueArray, item, STATE_CHANGE_TYPE.remove);
      return item;
    });

    _defineProperty(this, "removeValue", item => {
      const valueArray = [...this.props.value];
      this.setValue(valueArray.filter(i => i[this.props.valueKey] !== item[this.props.valueKey]), item, STATE_CHANGE_TYPE.remove);
      this.focus();
    });

    _defineProperty(this, "clearValue", event => {
      if (isClick(event) && !isLeftClick(event)) return;

      if (this.props.value) {
        const resetValue = this.props.value.filter(item => item.clearableValue === false);
        this.setValue(resetValue, null, STATE_CHANGE_TYPE.clear);
      }

      this.setState({
        inputValue: '',
        isOpen: false
      });
      this.focus();
      this.focusAfterClear = true;
    });

    _defineProperty(this, "shouldShowPlaceholder", () => {
      return !(this.state.inputValue || this.props.value && this.props.value.length);
    });

    _defineProperty(this, "shouldShowValue", () => {
      return !this.state.inputValue;
    });

    this.options = normalizeOptions(props.options);
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.focus();
    }

    this.isMounted = true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (typeof document !== 'undefined') {
      if (prevState.isOpen !== this.state.isOpen) {
        if (this.state.isOpen) {
          this.props.onOpen && this.props.onOpen();
          document.addEventListener('touchstart', this.handleTouchOutside);
        } else {
          this.props.onClose && this.props.onClose();
          document.removeEventListener('touchstart', this.handleTouchOutside);
        }
      }

      if (!prevState.isFocused && this.state.isFocused) {
        document.addEventListener('click', this.handleClickOutside);
      }
    }
  }

  componentWillUnmount() {
    if (typeof document !== 'undefined') {
      document.removeEventListener('touchstart', this.handleTouchOutside);
      document.removeEventListener('click', this.handleClickOutside);
    }

    this.isMounted = false;
  }

  focus() {
    if (!this.input) return;
    this.input.focus();
  } // Handle touch outside on mobile to dismiss menu, ensures that the
  // touch target is not within the anchor DOM node.


  closeMenu() {
    if (this.props.onCloseResetsInput) {
      this.setState({
        inputValue: '',
        isOpen: false,
        isPseudoFocused: this.state.isFocused && !this.props.multi
      });
    } else {
      this.setState({
        isOpen: false,
        isPseudoFocused: this.state.isFocused && !this.props.multi
      });
    }
  }

  /**
   * Extends the value into an array from the given options
   */
  getValueArray(value) {
    if (!Array.isArray(value)) {
      if (value === null || value === undefined) return [];
      value = [value];
    }

    return value.map(value => expandValue(value, this.props));
  }

  setValue(value, option, type) {
    if (this.props.onChange) {
      this.props.onChange({
        value,
        option,
        type
      });
    }
  }

  renderLoading() {
    if (!this.props.isLoading) return;
    const sharedProps = this.getSharedProps();
    const {
      overrides = {}
    } = this.props;
    const [LoadingIndicator, loadingIndicatorProps] = getOverrides(overrides.LoadingIndicator, Spinner);
    return /*#__PURE__*/React.createElement(LoadingIndicator, _extends({
      size: 16,
      overrides: {
        Svg: {
          style: getLoadingIconStyles
        }
      },
      $silenceV11DeprecationWarning: true
    }, sharedProps, loadingIndicatorProps));
  }

  renderValue(valueArray, isOpen, locale) {
    const {
      overrides = {}
    } = this.props;
    const sharedProps = this.getSharedProps();
    const renderLabel = this.props.getValueLabel || this.getValueLabel;
    const Value = this.props.valueComponent || Noop;

    if (!valueArray.length) {
      return null;
    }

    if (this.props.multi) {
      return valueArray.map((value, i) => {
        const disabled = sharedProps.$disabled || value.clearableValue === false;
        return /*#__PURE__*/React.createElement(Value, _extends({
          value: value,
          key: `value-${i}-${value[this.props.valueKey]}`,
          removeValue: () => this.removeValue(value),
          disabled: disabled,
          overrides: {
            Tag: overrides.Tag,
            MultiValue: overrides.MultiValue
          }
        }, sharedProps, {
          $disabled: disabled
        }), renderLabel({
          option: value,
          index: i
        }));
      });
    } else if (this.shouldShowValue()) {
      return /*#__PURE__*/React.createElement(Value, _extends({
        value: valueArray[0][this.props.valueKey],
        disabled: this.props.disabled,
        overrides: {
          SingleValue: overrides.SingleValue
        }
      }, sharedProps), renderLabel({
        option: valueArray[0]
      }));
    }
  }

  renderInput() {
    const {
      overrides = {}
    } = this.props;
    const [InputContainer, inputContainerProps] = getOverrides(overrides.InputContainer, StyledInputContainer);
    const sharedProps = this.getSharedProps();
    const isOpen = this.state.isOpen;
    const selected = this.getValueArray(this.props.value).map(v => v[this.props.labelKey]).join(', ');
    const selectedLabel = selected.length ? `Selected ${selected}. ` : '';
    const label = `${selectedLabel}${this.props['aria-label'] || ''}`;

    if (!this.props.searchable) {
      return /*#__PURE__*/React.createElement(InputContainer, _extends({
        "aria-activedescendant": this.state.activeDescendant,
        "aria-expanded": isOpen,
        "aria-disabled": this.props.disabled,
        "aria-label": label,
        "aria-labelledby": this.props['aria-labelledby'],
        "aria-owns": this.state.isOpen ? this.listboxId : null,
        "aria-required": this.props.required || null,
        onFocus: this.handleInputFocus,
        ref: this.handleInputRef,
        tabIndex: 0
      }, sharedProps, inputContainerProps));
    }

    return /*#__PURE__*/React.createElement(InputContainer, _extends({}, sharedProps, inputContainerProps), /*#__PURE__*/React.createElement(AutosizeInput, _extends({
      "aria-activedescendant": this.state.activeDescendant,
      "aria-autocomplete": "list",
      "aria-controls": this.state.isOpen ? this.listboxId : null,
      "aria-describedby": this.props['aria-describedby'],
      "aria-errormessage": this.props['aria-errormessage'],
      "aria-disabled": this.props.disabled || null,
      "aria-expanded": isOpen,
      "aria-haspopup": "listbox",
      "aria-label": label,
      "aria-labelledby": this.props['aria-labelledby'],
      "aria-required": this.props.required || null,
      disabled: this.props.disabled || null,
      id: this.props.id || null,
      inputRef: this.handleInputRef,
      onChange: this.handleInputChange,
      onFocus: this.handleInputFocus,
      overrides: {
        Input: overrides.Input
      },
      required: this.props.required && !this.props.value.length || null,
      role: "combobox",
      value: this.state.inputValue,
      tabIndex: 0
    }, sharedProps)));
  }

  renderClear() {
    const isValueEntered = Boolean(this.props.value && this.props.value.length || this.state.inputValue);

    if (!this.props.clearable || this.props.disabled || this.props.isLoading || !isValueEntered) {
      return;
    }

    const sharedProps = this.getSharedProps();
    const {
      overrides = {}
    } = this.props;
    const [ClearIcon, clearIconProps] = getOverrides(overrides.ClearIcon, DeleteAlt);
    const ariaLabel = this.props.multi ? 'Clear all' : 'Clear value';
    return /*#__PURE__*/React.createElement(ClearIcon, _extends({
      size: 16,
      title: ariaLabel,
      "aria-label": ariaLabel,
      onClick: this.clearValue,
      onTouchEnd: this.handleTouchEndClearValue,
      onTouchMove: this.handleTouchMove,
      onTouchStart: this.handleTouchStart,
      role: "button",
      overrides: {
        Svg: {
          component: StyledClearIcon,
          props: overrides.ClearIcon && overrides.ClearIcon.props ? overrides.ClearIcon.props : {},
          style: overrides.ClearIcon && overrides.ClearIcon.style ? overrides.ClearIcon.style : {}
        }
      }
    }, sharedProps, clearIconProps));
  }

  renderArrow() {
    if (this.props.type !== TYPE.select) {
      return null;
    }

    const {
      overrides = {}
    } = this.props;
    const [SelectArrow, selectArrowProps] = getOverrides(overrides.SelectArrow, TriangleDownIcon);
    const sharedProps = this.getSharedProps();
    return /*#__PURE__*/React.createElement(SelectArrow, _extends({
      size: 16,
      title: 'open',
      overrides: {
        Svg: {
          component: StyledSelectArrow,
          props: overrides.SelectArrow && overrides.SelectArrow.props ? overrides.SelectArrow.props : {},
          style: overrides.SelectArrow && overrides.SelectArrow.style ? overrides.SelectArrow.style : {}
        }
      }
    }, sharedProps, selectArrowProps));
  }

  renderSearch() {
    if (this.props.type !== TYPE.search) {
      return null;
    }

    const {
      overrides = {}
    } = this.props;
    const [SearchIconContainer, searchIconContainerProps] = getOverrides(overrides.SearchIconContainer, StyledSearchIconContainer);
    const [SearchIcon, searchIconProps] = getOverrides(overrides.SearchIcon, SearchIconComponent);
    const sharedProps = this.getSharedProps();
    return (
      /*#__PURE__*/
      // TODO(v11): remove searchIconProps from SearchIconContainer
      React.createElement(SearchIconContainer, _extends({}, sharedProps, searchIconProps, searchIconContainerProps), /*#__PURE__*/React.createElement(SearchIcon, _extends({
        size: 16,
        title: 'search'
      }, searchIconProps)))
    );
  }

  filterOptions(excludeOptions) {
    const filterValue = this.state.inputValue; // apply filter function

    if (this.props.filterOptions) {
      this.options = this.props.filterOptions(this.options, filterValue, excludeOptions, {
        valueKey: this.props.valueKey,
        labelKey: this.props.labelKey
      });
    } // can user create a new option + there's no exact match already


    if (filterValue && this.props.creatable && this.options.concat(this.props.value).every(opt => opt[this.props.labelKey].toLowerCase() !== filterValue.toLowerCase().trim())) {
      // $FlowFixMe - this.options is typed as a read-only array
      this.options.push({
        id: filterValue,
        [this.props.labelKey]: filterValue,
        [this.props.valueKey]: filterValue,
        isCreatable: true
      });
    }

    return this.options;
  }

  getSharedProps() {
    const {
      clearable,
      creatable,
      disabled,
      error,
      positive,
      isLoading,
      multi,
      required,
      size,
      searchable,
      type,
      value
    } = this.props;
    const {
      isOpen,
      isFocused,
      isPseudoFocused
    } = this.state;
    return {
      $clearable: clearable,
      $creatable: creatable,
      $disabled: disabled,
      $error: error,
      $positive: positive,
      $isFocused: isFocused,
      $isLoading: isLoading,
      $isOpen: isOpen,
      $isPseudoFocused: isPseudoFocused,
      $multi: multi,
      $required: required,
      $searchable: searchable,
      $size: size,
      $type: type,
      $isEmpty: !this.getValueArray(value).length
    };
  }

  render() {
    this.options = normalizeOptions(this.props.options);
    const {
      overrides = {},
      type,
      multi,
      noResultsMsg,
      value,
      filterOutSelected
    } = this.props;

    if (process.env.NODE_ENV !== "production") {
      // value may be nullish, only warn if value is defined
      if (value && !Array.isArray(value)) {
        console.warn('The Select component expects an array as the value prop. For more information, please visit the docs at https://baseweb.design/components/select/');
      }
    }

    const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
    const [ControlContainer, controlContainerProps] = getOverrides(overrides.ControlContainer, StyledControlContainer);
    const [ValueContainer, valueContainerProps] = getOverrides(overrides.ValueContainer, StyledValueContainer);
    const [IconsContainer, iconsContainerProps] = getOverrides(overrides.IconsContainer, StyledIconsContainer);
    const [PopoverOverride, popoverProps] = getOverrides(overrides.Popover, Popover);
    const [Placeholder, placeholderProps] = getOverrides(overrides.Placeholder, StyledPlaceholder);
    const sharedProps = this.getSharedProps();
    const valueArray = this.getValueArray(value);
    const options = this.filterOptions(multi && filterOutSelected ? valueArray : null);
    const isOpen = this.state.isOpen;
    sharedProps.$isOpen = isOpen;

    if (process.env.NODE_ENV !== "production") {
      if (this.props.error && this.props.positive) {
        // eslint-disable-next-line no-console
        console.warn(`[Select] \`error\` and \`positive\` are both set to \`true\`. \`error\` will take precedence but this may not be what you want.`);
      }
    }

    return /*#__PURE__*/React.createElement(LocaleContext.Consumer, null, locale => /*#__PURE__*/React.createElement(PopoverOverride // Popover does not provide ability to forward refs through, and if we were to simply
    // apply the ref to the Root component below it would be overwritten before the popover
    // renders it. Using this strategy, we will get a ref to the popover, then reuse its
    // anchorRef so we can check if clicks are on the select component or not.
    // eslint-disable-next-line flowtype/no-weak-types
    , _extends({
      ref: ref => {
        if (!ref) return;
        this.anchor = ref.anchorRef;
      },
      focusLock: false,
      mountNode: this.props.mountNode,
      onEsc: () => this.closeMenu(),
      isOpen: isOpen,
      popoverMargin: 0,
      content: () => {
        const dropdownProps = {
          error: this.props.error,
          positive: this.props.positive,
          getOptionLabel: this.props.getOptionLabel || this.getOptionLabel.bind(this, locale),
          id: this.listboxId,
          isLoading: this.props.isLoading,
          labelKey: this.props.labelKey,
          maxDropdownHeight: this.props.maxDropdownHeight,
          multi,
          noResultsMsg,
          onActiveDescendantChange: this.handleActiveDescendantChange,
          onItemSelect: this.selectValue,
          options,
          overrides,
          required: this.props.required,
          searchable: this.props.searchable,
          size: this.props.size,
          type,
          value: valueArray,
          valueKey: this.props.valueKey,
          width: this.anchor.current ? this.anchor.current.clientWidth : null,
          keyboardControlNode: this.anchor
        };
        return /*#__PURE__*/React.createElement(SelectDropdown, _extends({
          innerRef: this.dropdown
        }, dropdownProps));
      },
      placement: PLACEMENT.bottom
    }, popoverProps), /*#__PURE__*/React.createElement(Root, _extends({
      onBlur: this.handleBlur,
      "data-baseweb": "select"
    }, sharedProps, rootProps), /*#__PURE__*/React.createElement(ControlContainer, _extends({
      onKeyDown: this.handleKeyDown,
      onClick: this.handleClick,
      onTouchEnd: this.handleTouchEnd,
      onTouchMove: this.handleTouchMove,
      onTouchStart: this.handleTouchStart
    }, sharedProps, controlContainerProps), type === TYPE.search ? this.renderSearch() : null, /*#__PURE__*/React.createElement(ValueContainer, _extends({}, sharedProps, valueContainerProps), this.renderValue(valueArray, isOpen, locale), this.renderInput(), this.shouldShowPlaceholder() ? /*#__PURE__*/React.createElement(Placeholder, _extends({}, sharedProps, placeholderProps), typeof this.props.placeholder !== 'undefined' ? this.props.placeholder : locale.select.placeholder) : null), /*#__PURE__*/React.createElement(IconsContainer, _extends({}, sharedProps, iconsContainerProps), this.renderLoading(), this.renderClear(), type === TYPE.select ? this.renderArrow() : null)))));
  }

} //$FlowFixMe


_defineProperty(Select, "defaultProps", defaultProps);

export default withOverrides(Select, 'Select');