function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import memoize from 'memoize-one'; // Files

import { LocaleContext } from '../locale/index.js';
import { ThemeContext } from '../styles/theme-provider.js';
import { Select as BaseSelect } from '../select/index.js';
import { Button, KIND } from '../button/index.js';
import { StyledRoot, StyledMaxLabel, StyledDropdownContainer } from './styled-components.js';
import ChevronLeft from '../icon/chevron-left.js';
import ChevronRight from '../icon/chevron-right.js';
import { getOverrides } from '../helpers/overrides.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';
export default class Pagination extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isFocusVisible: false
    });

    _defineProperty(this, "handleFocus", event => {
      if (isFocusVisible(event)) {
        this.setState({
          isFocusVisible: true
        });
      }
    });

    _defineProperty(this, "handleBlur", event => {
      if (this.state.isFocusVisible !== false) {
        this.setState({
          isFocusVisible: false
        });
      }
    });

    _defineProperty(this, "getMenuOptions", memoize(numPages => {
      const menuOptions = [];

      for (let i = 1; i <= numPages; i++) {
        menuOptions.push({
          label: i
        });
      }

      return menuOptions;
    }));

    _defineProperty(this, "onMenuItemSelect", data => {
      const item = data.value[0];
      const {
        onPageChange,
        currentPage
      } = this.props;
      const page = item.label;

      if (page !== currentPage) {
        onPageChange && onPageChange({
          nextPage: page,
          prevPage: currentPage
        });
      }
    });

    _defineProperty(this, "onPrevClick", event => {
      const {
        currentPage,
        onPageChange,
        onPrevClick
      } = this.props;

      if (currentPage > 1) {
        onPageChange && onPageChange({
          nextPage: currentPage - 1,
          prevPage: currentPage
        });
        onPrevClick && onPrevClick({
          event
        });
      }
    });

    _defineProperty(this, "onNextClick", event => {
      const {
        currentPage,
        numPages,
        onPageChange,
        onNextClick
      } = this.props;

      if (currentPage < numPages) {
        onPageChange && onPageChange({
          nextPage: currentPage + 1,
          prevPage: currentPage
        });
        onNextClick && onNextClick({
          event
        });
      }
    });

    _defineProperty(this, "constructAriaWayfinderLabel", (locale, prefix) => {
      const {
        currentPage,
        numPages,
        labels
      } = this.props;
      return prefix + ' ' + currentPage + ' ' + `${labels && labels.preposition ? labels.preposition : locale.pagination.preposition}` + ' ' + numPages;
    });
  }

  render() {
    const {
      overrides = {},
      currentPage,
      labels,
      numPages,
      size
    } = this.props;
    const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
    const [MaxLabel, maxLabelProps] = getOverrides(overrides.MaxLabel, StyledMaxLabel);
    const [DropdownContainer, dropdownContainerProps] = getOverrides(overrides.DropdownContainer, StyledDropdownContainer);
    const [Select, selectProps] = getOverrides(overrides.Select, BaseSelect);
    const options = this.getMenuOptions(numPages);
    return /*#__PURE__*/React.createElement(ThemeContext.Consumer, null, theme => /*#__PURE__*/React.createElement(LocaleContext.Consumer, null, locale => /*#__PURE__*/React.createElement(Root, _extends({
      "aria-label": "pagination",
      "data-baseweb": "pagination"
    }, rootProps), /*#__PURE__*/React.createElement(Button, {
      "aria-label": this.constructAriaWayfinderLabel(locale, 'previous page. current page'),
      disabled: currentPage <= 1,
      onClick: this.onPrevClick,
      startEnhancer: () => {
        return theme.direction === 'rtl' ? /*#__PURE__*/React.createElement(ChevronRight, {
          title: '',
          size: 24
        }) : /*#__PURE__*/React.createElement(ChevronLeft, {
          title: '',
          size: 24
        });
      },
      kind: KIND.tertiary,
      overrides: {
        BaseButton: overrides.PrevButton
      },
      size: size
    }, labels && labels.prevButton ? labels.prevButton : locale.pagination.prev), /*#__PURE__*/React.createElement(DropdownContainer, _extends({
      $isFocusVisible: this.state.isFocusVisible
    }, dropdownContainerProps, {
      onFocus: forkFocus(dropdownContainerProps, this.handleFocus),
      onBlur: forkBlur(dropdownContainerProps, this.handleBlur)
    }), /*#__PURE__*/React.createElement(Select, _extends({
      options: options,
      labelKey: "label",
      valueKey: "label",
      onChange: this.onMenuItemSelect,
      searchable: false,
      clearable: false,
      value: [{
        label: currentPage
      }],
      maxDropdownHeight: "200px",
      size: size,
      overrides: {
        ControlContainer: {
          style: ({
            $theme,
            $disabled,
            $isOpen,
            $error
          }) => ({
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent',
            boxShadow: 'none',
            backgroundColor: $disabled ? $theme.colors.buttonDisabledFill : $isOpen ? $theme.colors.buttonTertiaryHover : $error ? $theme.colors.negative50 : $theme.colors.buttonTertiaryFill,
            ':hover': {
              backgroundColor: $theme.colors.buttonTertiaryHover
            }
          })
        },
        InputContainer: {
          style: {
            marginLeft: 0
          }
        },
        ValueContainer: {
          style: ({
            $theme
          }) => ({
            flexBasis: 'auto'
          })
        },
        SingleValue: {
          style: ({
            $theme
          }) => ({
            position: 'relative',
            paddingTop: '0',
            paddingBottom: '0',
            paddingLeft: $theme.sizing.scale200,
            paddingRight: $theme.sizing.scale500,
            color: $theme.colors.buttonTertiaryText,
            ...$theme.typography.font350,
            lineHeight: 'unset'
          })
        },
        SelectArrow: {
          style: ({
            $theme
          }) => ({
            width: '24px',
            height: '24px',
            color: $theme.colors.buttonTertiaryText
          })
        }
      }
    }, selectProps))), /*#__PURE__*/React.createElement(MaxLabel, _extends({
      "aria-label": this.constructAriaWayfinderLabel(locale, 'page')
    }, maxLabelProps), `${labels && labels.preposition ? labels.preposition : locale.pagination.preposition || ''} ${numPages}`), /*#__PURE__*/React.createElement(Button, {
      "aria-label": this.constructAriaWayfinderLabel(locale, 'next page. current page'),
      disabled: currentPage >= numPages,
      onClick: this.onNextClick,
      endEnhancer: () => {
        return theme.direction === 'rtl' ? /*#__PURE__*/React.createElement(ChevronLeft, {
          title: '',
          size: 24
        }) : /*#__PURE__*/React.createElement(ChevronRight, {
          title: '',
          size: 24
        });
      },
      kind: KIND.tertiary,
      overrides: {
        BaseButton: overrides.NextButton
      },
      size: size
    }, labels && labels.nextButton ? labels.nextButton : locale.pagination.next))));
  }

}

_defineProperty(Pagination, "defaultProps", {
  labels: {},
  overrides: {}
});