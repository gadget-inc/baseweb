function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import ArrowRight from '../icon/arrow-right.js';
import ArrowLeft from '../icon/arrow-left.js';
import TriangleDown from '../icon/triangle-down.js';
import dateFnsAdapter from './utils/date-fns-adapter.js';
import DateHelpers from './utils/date-helpers.js';
import { StatefulMenu } from '../menu/index.js';
import { Popover } from '../popover/index.js';
import { LocaleContext } from '../locale/index.js';
import { ThemeContext } from '../styles/theme-provider.js';
import { StyledCalendarHeader, StyledPrevButton, StyledNextButton, StyledMonthHeader, StyledWeekdayHeader, StyledMonthYearSelectButton, StyledMonthYearSelectIconContainer } from './styled-components.js';
import { ORIENTATION, WEEKDAYS } from './constants.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';

const navBtnStyle = ({
  $theme
}) => ({
  cursor: 'pointer'
});

const MIN_YEAR = 2000;
const MAX_YEAR = 2030;
const MIN_MONTH = 0;
const MAX_MONTH = 11;
const DIRECTION = {
  NEXT: 'next',
  PREVIOUS: 'previous'
};

function yearMonthToId(year, month) {
  return `${year}-${month}`;
}

function idToYearMonth(id) {
  return id.split('-').map(Number);
}

export default class CalendarHeader extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "dateHelpers", void 0);

    _defineProperty(this, "state", {
      isMonthYearDropdownOpen: false,
      isFocusVisible: false
    });

    _defineProperty(this, "getDateProp", () => {
      return this.props.date || this.dateHelpers.date();
    });

    _defineProperty(this, "handleMonthChange", ({
      value
    }) => {
      if (this.props.onMonthChange) {
        // $FlowFixMe
        this.props.onMonthChange({
          date: this.dateHelpers.setMonth(this.getDateProp(), value[0].id)
        });
      }
    });

    _defineProperty(this, "handleYearChange", ({
      value
    }) => {
      if (this.props.onYearChange) {
        // $FlowFixMe
        this.props.onYearChange({
          date: this.dateHelpers.setYear(this.getDateProp(), value[0].id)
        });
      }
    });

    _defineProperty(this, "increaseMonth", () => {
      if (this.props.onMonthChange) {
        // $FlowFixMe
        this.props.onMonthChange({
          date: this.dateHelpers.addMonths(this.getDateProp(), 1)
        });
      }
    });

    _defineProperty(this, "decreaseMonth", () => {
      if (this.props.onMonthChange) {
        // $FlowFixMe
        this.props.onMonthChange({
          date: this.dateHelpers.subMonths(this.getDateProp(), 1)
        });
      }
    });

    _defineProperty(this, "isMultiMonthHorizontal", () => {
      const {
        monthsShown,
        orientation
      } = this.props;

      if (!monthsShown) {
        return false;
      }

      return orientation === ORIENTATION.horizontal && monthsShown > 1;
    });

    _defineProperty(this, "isHiddenPaginationButton", direction => {
      const {
        monthsShown,
        order
      } = this.props;

      if (monthsShown && this.isMultiMonthHorizontal()) {
        if (direction === DIRECTION.NEXT) {
          const isLastMonth = order === monthsShown - 1;
          return !isLastMonth;
        } else {
          const isFirstMonth = order === 0;
          return !isFirstMonth;
        }
      }

      return false;
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

    _defineProperty(this, "renderPreviousMonthButton", ({
      locale,
      theme
    }) => {
      const date = this.getDateProp();
      const {
        overrides = {}
      } = this.props;
      const allPrevDaysDisabled = this.dateHelpers.monthDisabledBefore(date, this.props);
      let isDisabled = false;

      if (allPrevDaysDisabled) {
        isDisabled = true;
      }

      const nextMonth = this.dateHelpers.subMonths(date, 1);
      const minYear = this.props.minDate ? this.dateHelpers.getYear(this.props.minDate) : MIN_YEAR;

      if (this.dateHelpers.getYear(nextMonth) < minYear) {
        isDisabled = true;
      }

      const isHidden = this.isHiddenPaginationButton(DIRECTION.PREVIOUS);

      if (isHidden) {
        isDisabled = true;
      }

      const [PrevButton, prevButtonProps] = getOverrides(overrides.PrevButton, StyledPrevButton);
      const [PrevButtonIcon, prevButtonIconProps] = getOverrides(overrides.PrevButtonIcon, theme.direction === 'rtl' ? ArrowRight : ArrowLeft);
      let clickHandler = this.decreaseMonth;

      if (allPrevDaysDisabled) {
        clickHandler = null;
      }

      return /*#__PURE__*/React.createElement(PrevButton, _extends({
        "aria-label": locale.datepicker.previousMonth,
        tabIndex: 0,
        onClick: clickHandler,
        disabled: isDisabled,
        $isFocusVisible: this.state.isFocusVisible,
        type: "button",
        $disabled: isDisabled
      }, prevButtonProps), isHidden ? null : /*#__PURE__*/React.createElement(PrevButtonIcon, _extends({
        size: '24px',
        overrides: {
          Svg: {
            style: navBtnStyle
          }
        }
      }, prevButtonIconProps)));
    });

    _defineProperty(this, "renderNextMonthButton", ({
      locale,
      theme
    }) => {
      const date = this.getDateProp();
      const {
        overrides = {}
      } = this.props;
      const allNextDaysDisabled = this.dateHelpers.monthDisabledAfter(date, this.props);
      let isDisabled = false;

      if (allNextDaysDisabled) {
        isDisabled = true;
      }

      const nextMonth = this.dateHelpers.addMonths(date, 1);
      const maxYear = this.props.maxDate ? this.dateHelpers.getYear(this.props.maxDate) : MAX_YEAR;

      if (this.dateHelpers.getYear(nextMonth) > maxYear) {
        isDisabled = true;
      }

      const isHidden = this.isHiddenPaginationButton(DIRECTION.NEXT);

      if (isHidden) {
        isDisabled = true;
      }

      const [NextButton, nextButtonProps] = getOverrides(overrides.NextButton, StyledNextButton);
      const [NextButtonIcon, nextButtonIconProps] = getOverrides(overrides.NextButtonIcon, theme.direction === 'rtl' ? ArrowLeft : ArrowRight);
      let clickHandler = this.increaseMonth; // The other option is to always provide a click handler and let customers
      // override its functionality based on the `$allPrevDaysDisabled` prop
      // in a custom NextButton component override
      // Their options would be to render `null` or not apply the components handler
      // on click or do nothing

      if (allNextDaysDisabled) {
        clickHandler = null;
      }

      return /*#__PURE__*/React.createElement(NextButton, _extends({
        "aria-label": locale.datepicker.nextMonth,
        tabIndex: 0,
        onClick: clickHandler,
        disabled: isDisabled,
        type: "button",
        $disabled: isDisabled,
        $isFocusVisible: this.state.isFocusVisible
      }, nextButtonProps), isHidden ? null : /*#__PURE__*/React.createElement(NextButtonIcon, _extends({
        size: '24px',
        overrides: {
          Svg: {
            style: navBtnStyle
          }
        }
      }, nextButtonIconProps)));
    });

    _defineProperty(this, "canArrowsOpenDropdown", event => {
      if (!this.state.isMonthYearDropdownOpen) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
          return true;
        }
      }

      return false;
    });

    _defineProperty(this, "renderMonthYearDropdown", () => {
      const date = this.getDateProp();
      const {
        locale,
        maxDate,
        minDate,
        overrides = {}
      } = this.props;
      const [MonthYearSelectButton, monthYearSelectButtonProps] = getOverrides(overrides.MonthYearSelectButton, StyledMonthYearSelectButton);
      const [MonthYearSelectIconContainer, monthYearSelectIconContainerProps] = getOverrides(overrides.MonthYearSelectIconContainer, StyledMonthYearSelectIconContainer);
      const [OverriddenPopover, popoverProps] = getOverrides(overrides.MonthYearSelectPopover, Popover);
      const [OverriddenStatefulMenu, menuProps] = getOverrides(overrides.MonthYearSelectStatefulMenu, StatefulMenu);
      const menuOverrides = mergeOverrides({
        List: {
          style: {
            height: 'auto',
            maxHeight: '257px'
          }
        }
      }, // $FlowFixMe
      menuProps && menuProps.overrides); // $FlowFixMe

      menuProps.overrides = menuOverrides;
      const defaultMonths = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      const maxYear = maxDate ? this.dateHelpers.getYear(maxDate) : MAX_YEAR;
      const minYear = minDate ? this.dateHelpers.getYear(minDate) : MIN_YEAR;
      const maxDateMonth = maxDate ? this.dateHelpers.getMonth(maxDate) : MAX_MONTH; // Generates array like [0,1,.... maxDateMonth]

      const maxYearMonths = Array.from({
        length: maxDateMonth + 1
      }, (x, i) => i);
      const minDateMonth = minDate ? this.dateHelpers.getMonth(minDate) : MIN_MONTH; // Generates array like [minDateMonth, ...., 10, 11]

      const minYearMonths = Array.from({
        length: 12 - minDateMonth
      }, (x, i) => i + minDateMonth);
      const items = [];

      for (let i = minYear; i <= maxYear; i++) {
        let months;

        if (i === minYear && i === maxYear) {
          months = maxYearMonths.filter(month => minYearMonths.includes(month));
        } else if (i === minYear) {
          months = minYearMonths;
        } else if (i === maxYear) {
          months = maxYearMonths;
        } else {
          months = defaultMonths;
        }

        months.forEach(month => {
          items.push({
            id: yearMonthToId(i, month),
            label: `${this.dateHelpers.getMonthInLocale(month, locale)} ${i}`
          });
        });
      }

      const initialIndex = items.findIndex(item => {
        return item.id === yearMonthToId(this.dateHelpers.getYear(date), this.dateHelpers.getMonth(date));
      });
      const monthYearTitle = `${this.dateHelpers.getMonthInLocale(this.dateHelpers.getMonth(date), locale)} ${this.dateHelpers.getYear(date)}`;
      return this.isMultiMonthHorizontal() ? /*#__PURE__*/React.createElement("div", null, monthYearTitle) : /*#__PURE__*/React.createElement(OverriddenPopover, _extends({
        placement: "bottom" // eslint-disable-next-line jsx-a11y/no-autofocus
        ,
        autoFocus: true,
        focusLock: true,
        isOpen: this.state.isMonthYearDropdownOpen,
        onClick: () => {
          this.setState(prev => ({
            isMonthYearDropdownOpen: !prev.isMonthYearDropdownOpen
          }));
        },
        onClickOutside: () => this.setState({
          isMonthYearDropdownOpen: false
        }),
        onEsc: () => this.setState({
          isMonthYearDropdownOpen: false
        }),
        content: () => /*#__PURE__*/React.createElement(OverriddenStatefulMenu, _extends({
          initialState: {
            highlightedIndex: initialIndex,
            isFocused: true
          },
          items: items,
          onItemSelect: ({
            item,
            event
          }) => {
            event.preventDefault();
            const [year, month] = idToYearMonth(item.id);
            const updatedDate = this.dateHelpers.set(date, {
              year,
              month
            });
            this.props.onMonthChange && this.props.onMonthChange({
              date: updatedDate
            });
            this.props.onYearChange && this.props.onYearChange({
              date: updatedDate
            });
            this.setState({
              isMonthYearDropdownOpen: false
            });
          }
        }, menuProps))
      }, popoverProps), /*#__PURE__*/React.createElement(MonthYearSelectButton, _extends({
        "aria-live": "polite",
        type: "button",
        $isFocusVisible: this.state.isFocusVisible,
        onKeyUp: event => {
          if (this.canArrowsOpenDropdown(event)) {
            this.setState({
              isMonthYearDropdownOpen: true
            });
          }
        },
        onKeyDown: event => {
          if (this.canArrowsOpenDropdown(event)) {
            // disables page scroll
            event.preventDefault();
          }

          if (event.key === 'Tab') {
            this.setState({
              isMonthYearDropdownOpen: false
            });
          }
        }
      }, monthYearSelectButtonProps), monthYearTitle, /*#__PURE__*/React.createElement(MonthYearSelectIconContainer, monthYearSelectIconContainerProps, /*#__PURE__*/React.createElement(TriangleDown, {
        title: "",
        overrides: {
          Svg: {
            props: {
              role: 'presentation'
            }
          }
        }
      }))));
    });

    this.dateHelpers = new DateHelpers(props.adapter);
  }

  render() {
    const {
      overrides = {}
    } = this.props;
    const [CalendarHeader, calendarHeaderProps] = getOverrides(overrides.CalendarHeader, StyledCalendarHeader);
    const [MonthHeader, monthHeaderProps] = getOverrides(overrides.MonthHeader, StyledMonthHeader);
    const [WeekdayHeader, weekdayHeaderProps] = getOverrides(overrides.WeekdayHeader, StyledWeekdayHeader);
    const startOfWeek = this.dateHelpers.getStartOfWeek(this.getDateProp(), this.props.locale);
    return /*#__PURE__*/React.createElement(ThemeContext.Consumer, null, theme => /*#__PURE__*/React.createElement(LocaleContext.Consumer, null, locale => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CalendarHeader, _extends({}, calendarHeaderProps, {
      onFocus: forkFocus(calendarHeaderProps, this.handleFocus),
      onBlur: forkBlur(calendarHeaderProps, this.handleBlur)
    }), this.renderPreviousMonthButton({
      locale,
      theme
    }), this.renderMonthYearDropdown(), this.renderNextMonthButton({
      locale,
      theme
    })), /*#__PURE__*/React.createElement(MonthHeader, _extends({
      role: "presentation"
    }, monthHeaderProps), WEEKDAYS.map(offset => {
      const day = this.dateHelpers.addDays(startOfWeek, offset);
      return /*#__PURE__*/React.createElement(WeekdayHeader, _extends({
        key: offset,
        alt: this.dateHelpers.getWeekdayInLocale(day, this.props.locale)
      }, weekdayHeaderProps), this.dateHelpers.getWeekdayMinInLocale(day, this.props.locale));
    })))));
  }

}

_defineProperty(CalendarHeader, "defaultProps", {
  adapter: dateFnsAdapter,
  locale: null,
  maxDate: null,
  minDate: null,
  onYearChange: () => {},
  overrides: {}
});