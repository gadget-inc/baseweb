function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { FormControl } from '../form-control/index.js';
import { LocaleContext } from '../locale/index.js';
import { Select } from '../select/index.js';
import CalendarHeader from './calendar-header.js';
import Month from './month.js';
import TimePicker from '../timepicker/timepicker.js';
import { StyledCalendarContainer, StyledMonthContainer, StyledRoot, StyledSelectorContainer } from './styled-components.js';
import dateFnsAdapter from './utils/date-fns-adapter.js';
import DateHelpers from './utils/date-helpers.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
import { ORIENTATION } from './constants.js';
export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "dateHelpers", void 0);

    _defineProperty(this, "calendar", void 0);

    _defineProperty(this, "getDateInView", () => {
      const {
        highlightedDate,
        value
      } = this.props;
      const minDate = this.dateHelpers.getEffectiveMinDate(this.props);
      const maxDate = this.dateHelpers.getEffectiveMaxDate(this.props);
      const current = this.dateHelpers.date();
      const initialDate = this.getSingleDate(value) || highlightedDate;

      if (initialDate) {
        return initialDate;
      } else {
        if (minDate && this.dateHelpers.isBefore(current, minDate)) {
          return minDate;
        } else if (maxDate && this.dateHelpers.isAfter(current, maxDate)) {
          return maxDate;
        }
      }

      return current;
    });

    _defineProperty(this, "handleMonthChange", date => {
      this.setHighlightedDate(this.dateHelpers.getStartOfMonth(date));

      if (this.props.onMonthChange) {
        this.props.onMonthChange({
          date
        });
      }
    });

    _defineProperty(this, "handleYearChange", date => {
      this.setHighlightedDate(date);

      if (this.props.onYearChange) {
        this.props.onYearChange({
          date
        });
      }
    });

    _defineProperty(this, "changeMonth", ({
      date
    }) => {
      this.setState({
        date: date
      }, () => this.handleMonthChange(this.state.date));
    });

    _defineProperty(this, "changeYear", ({
      date
    }) => {
      this.setState({
        date: date
      }, () => this.handleYearChange(this.state.date));
    });

    _defineProperty(this, "renderCalendarHeader", (date = this.state.date, order) => {
      return React.createElement(CalendarHeader, _extends({}, this.props, {
        key: `month-header-${order}`,
        date: date,
        order: order,
        onMonthChange: this.changeMonth,
        onYearChange: this.changeYear
      }));
    });

    _defineProperty(this, "onKeyDown", event => {
      switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'Home':
        case 'End':
        case 'PageUp':
        case 'PageDown':
          this.handleArrowKey(event.key);
          event.preventDefault();
          event.stopPropagation();
          break;
      }
    });

    _defineProperty(this, "handleArrowKey", key => {
      const {
        highlightedDate: oldDate
      } = this.state;
      let highlightedDate = oldDate;
      const currentDate = this.dateHelpers.date();

      switch (key) {
        case 'ArrowLeft':
          // adding `new Date()` as the last option to satisfy Flow
          highlightedDate = this.dateHelpers.subDays(highlightedDate ? highlightedDate : currentDate, 1);
          break;

        case 'ArrowRight':
          highlightedDate = this.dateHelpers.addDays( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : currentDate, 1);
          break;

        case 'ArrowUp':
          highlightedDate = this.dateHelpers.subWeeks( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : currentDate, 1);
          break;

        case 'ArrowDown':
          highlightedDate = this.dateHelpers.addWeeks( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : currentDate, 1);
          break;

        case 'Home':
          highlightedDate = this.dateHelpers.getStartOfWeek( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : currentDate);
          break;

        case 'End':
          highlightedDate = this.dateHelpers.getEndOfWeek( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : currentDate);
          break;

        case 'PageUp':
          highlightedDate = this.dateHelpers.subMonths( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : currentDate, 1);
          break;

        case 'PageDown':
          highlightedDate = this.dateHelpers.addMonths( // adding `new Date()` as the last option to satisfy Flow
          highlightedDate ? highlightedDate : currentDate, 1);
          break;
      }

      this.setState({
        highlightedDate,
        date: highlightedDate
      });
    });

    _defineProperty(this, "focusCalendar", () => {
      if (!this.state.focused) {
        this.setState({
          focused: true
        });
      }
    });

    _defineProperty(this, "blurCalendar", () => {
      if (typeof document !== 'undefined') {
        const activeElm = document.activeElement;

        if (this.calendar && !this.calendar.contains(activeElm)) {
          this.setState({
            focused: false
          });
        }
      }
    });

    _defineProperty(this, "handleTabbing", event => {
      if (typeof document !== 'undefined') {
        if (event.keyCode === 9) {
          const activeElm = document.activeElement; // need to look for any tabindex >= 0 and ideally for not disabled
          // focusable by default elements like input, button, etc.

          const focusable = this.state.rootElement ? this.state.rootElement.querySelectorAll('[tabindex="0"]') : null;
          const length = focusable ? focusable.length : 0;

          if (event.shiftKey) {
            if (focusable && activeElm === focusable[0]) {
              event.preventDefault();
              focusable[length - 1].focus();
            }
          } else {
            if (focusable && activeElm === focusable[length - 1]) {
              event.preventDefault();
              focusable[0].focus();
            }
          }
        }
      }
    });

    _defineProperty(this, "onDayFocus", data => {
      const {
        date
      } = data;
      this.setState({
        highlightedDate: date
      });
      this.focusCalendar();
      this.props.onDayFocus && this.props.onDayFocus(data);
    });

    _defineProperty(this, "onDayMouseOver", data => {
      const {
        date
      } = data;
      this.setState({
        highlightedDate: date
      });
      this.props.onDayMouseOver && this.props.onDayMouseOver(data);
    });

    _defineProperty(this, "onDayMouseLeave", data => {
      const {
        date
      } = data;
      this.setHighlightedDate(date);
      this.props.onDayMouseLeave && this.props.onDayMouseLeave(data);
    });

    _defineProperty(this, "handleDateChange", data => {
      const {
        onChange = params => {}
      } = this.props;
      let updatedDate = data.date; // We'll need to update the date in time values of internal state

      const newTimeState = [...this.state.time]; // Apply the currently selected time values (saved in state) to the updated date

      if (Array.isArray(data.date)) {
        updatedDate = data.date.map((date, index) => {
          newTimeState[index] = this.dateHelpers.applyDateToTime(newTimeState[index], date);
          return newTimeState[index];
        });
      } else if (!Array.isArray(this.props.value) && data.date) {
        newTimeState[0] = this.dateHelpers.applyDateToTime(newTimeState[0], data.date);
        updatedDate = newTimeState[0];
      } // Update the date in time values of internal state


      this.setState({
        time: newTimeState
      });
      onChange({
        date: updatedDate
      });
    });

    _defineProperty(this, "handleTimeChange", (time, index) => {
      const {
        onChange = params => {}
      } = this.props; // Save/update the time value in internal state

      const newTimeState = [...this.state.time];
      newTimeState[index] = this.dateHelpers.applyTimeToDate(newTimeState[index], time);
      this.setState({
        time: newTimeState
      }); // Time change calls calendar's onChange handler
      // with the date value set to the date with updated time

      if (Array.isArray(this.props.value)) {
        const dates = this.props.value.map((date, i) => {
          if (index === i) {
            return this.dateHelpers.applyTimeToDate(date, time);
          }

          return date;
        });
        onChange({
          date: dates
        });
      } else {
        const date = this.dateHelpers.applyTimeToDate(this.props.value, time);
        onChange({
          date
        });
      }
    });

    _defineProperty(this, "renderMonths", translations => {
      const {
        overrides = {}
      } = this.props;
      const monthList = [];
      const [CalendarContainer, calendarContainerProps] = getOverrides(overrides.CalendarContainer, StyledCalendarContainer);
      const [MonthContainer, monthContainerProps] = getOverrides(overrides.MonthContainer, StyledMonthContainer);

      for (let i = 0; i < (this.props.monthsShown || 1); ++i) {
        const monthSubComponents = [];
        const monthDate = this.dateHelpers.addMonths(this.state.date, i);
        const monthKey = `month-${i}`;
        monthSubComponents.push(this.renderCalendarHeader(monthDate, i));
        monthSubComponents.push(React.createElement(CalendarContainer, _extends({
          key: monthKey,
          ref: calendar => {
            this.calendar = calendar;
          },
          role: "grid",
          "aria-roledescription": translations.ariaRoleDescCalMonth,
          "aria-multiselectable": this.props.range || null,
          onKeyDown: this.onKeyDown
        }, calendarContainerProps), React.createElement(Month, {
          adapter: this.props.adapter,
          date: monthDate,
          excludeDates: this.props.excludeDates,
          filterDate: this.props.filterDate,
          highlightedDate: this.state.highlightedDate,
          includeDates: this.props.includeDates,
          focusedCalendar: this.state.focused,
          range: this.props.range,
          locale: this.props.locale,
          maxDate: this.props.maxDate,
          minDate: this.props.minDate,
          month: this.dateHelpers.getMonth(this.state.date),
          onDayBlur: this.blurCalendar,
          onDayFocus: this.onDayFocus,
          onDayClick: this.props.onDayClick,
          onDayMouseOver: this.onDayMouseOver,
          onDayMouseLeave: this.onDayMouseLeave,
          onChange: this.handleDateChange,
          overrides: overrides,
          value: this.props.value,
          peekNextMonth: this.props.peekNextMonth
        })));
        monthList.push(React.createElement("div", {
          key: `month-component-${i}`
        }, monthSubComponents));
      }

      return React.createElement(MonthContainer, monthContainerProps, monthList);
    });

    _defineProperty(this, "renderTimeSelect", (value, onChange, label) => {
      const {
        overrides = {}
      } = this.props;
      const [TimeSelectContainer, timeSelectContainerProps] = getOverrides(overrides.TimeSelectContainer, StyledSelectorContainer);
      const [TimeSelectFormControl, timeSelectFormControlProps] = getOverrides(overrides.TimeSelectFormControl, FormControl);
      const [TimeSelect, timeSelectProps] = getOverrides(overrides.TimeSelect, TimePicker);
      return React.createElement(TimeSelectContainer, timeSelectContainerProps, React.createElement(TimeSelectFormControl, _extends({
        label: label
      }, timeSelectFormControlProps), React.createElement(TimeSelect, _extends({
        value: value ? this.dateHelpers.date(value) : value,
        onChange: onChange,
        nullable: true
      }, timeSelectProps))));
    });

    _defineProperty(this, "renderQuickSelect", () => {
      const {
        overrides = {}
      } = this.props;
      const [QuickSelectContainer, quickSelectContainerProps] = getOverrides(overrides.QuickSelectContainer, StyledSelectorContainer);
      const [QuickSelectFormControl, quickSelectFormControlProps] = getOverrides(overrides.QuickSelectFormControl, FormControl);
      const [QuickSelect, // $FlowFixMe
      {
        overrides: quickSelectOverrides,
        ...restQuickSelectProps
      }] = getOverrides( //
      overrides.QuickSelect, Select);

      if (!this.props.quickSelect) {
        return null;
      }

      const NOW = this.dateHelpers.set(this.dateHelpers.date(), {
        hours: 12,
        minutes: 0,
        seconds: 0
      });
      return React.createElement(LocaleContext.Consumer, null, locale => React.createElement(QuickSelectContainer, quickSelectContainerProps, React.createElement(QuickSelectFormControl, _extends({
        label: locale.datepicker.quickSelectLabel
      }, quickSelectFormControlProps), React.createElement(QuickSelect, _extends({
        "aria-label": locale.datepicker.quickSelectAriaLabel,
        labelKey: "id",
        onChange: params => {
          if (!params.option) {
            this.setState({
              quickSelectId: null
            });
            this.props.onChange && this.props.onChange({
              date: []
            });
          } else {
            this.setState({
              quickSelectId: params.option.id
            });

            if (this.props.onChange) {
              if (this.props.range) {
                this.props.onChange({
                  date: [params.option.beginDate, params.option.endDate || NOW]
                });
              } else {
                this.props.onChange({
                  date: params.option.beginDate
                });
              }
            }
          }
        },
        options: this.props.quickSelectOptions || [{
          id: locale.datepicker.pastWeek,
          beginDate: this.dateHelpers.subWeeks(NOW, 1)
        }, {
          id: locale.datepicker.pastMonth,
          beginDate: this.dateHelpers.subMonths(NOW, 1)
        }, {
          id: locale.datepicker.pastThreeMonths,
          beginDate: this.dateHelpers.subMonths(NOW, 3)
        }, {
          id: locale.datepicker.pastSixMonths,
          beginDate: this.dateHelpers.subMonths(NOW, 6)
        }, {
          id: locale.datepicker.pastYear,
          beginDate: this.dateHelpers.subYears(NOW, 1)
        }, {
          id: locale.datepicker.pastTwoYears,
          beginDate: this.dateHelpers.subYears(NOW, 2)
        }],
        placeholder: locale.datepicker.quickSelectPlaceholder,
        value: this.state.quickSelectId && [{
          id: this.state.quickSelectId
        }],
        overrides: mergeOverrides({
          Dropdown: {
            style: {
              textAlign: 'start'
            }
          }
        }, quickSelectOverrides)
      }, restQuickSelectProps)))));
    });

    const {
      highlightedDate: _highlightedDate,
      value: _value,
      adapter
    } = this.props;
    this.dateHelpers = new DateHelpers(adapter);
    const dateInView = this.getDateInView();
    let _time = [];

    if (Array.isArray(_value)) {
      _time = [..._value];
    } else if (_value) {
      _time = [_value];
    }

    this.state = {
      highlightedDate: this.getSingleDate(_value) || (_highlightedDate && this.dateHelpers.isSameMonth(dateInView, _highlightedDate) ? _highlightedDate : this.dateHelpers.date()),
      focused: false,
      date: dateInView,
      quickSelectId: null,
      rootElement: null,
      time: _time
    };
  }

  componentDidMount() {
    if (this.props.autoFocusCalendar) {
      this.focusCalendar();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.highlightedDate && !this.dateHelpers.isSameDay(this.props.highlightedDate, prevProps.highlightedDate)) {
      this.setState({
        date: this.props.highlightedDate
      });
    }

    if (this.props.autoFocusCalendar && this.props.autoFocusCalendar !== prevProps.autoFocusCalendar) {
      this.focusCalendar();
    }

    if (prevProps.value !== this.props.value) {
      const nextDate = this.getDateInView();

      if (!this.isInView(nextDate)) {
        this.setState({
          date: nextDate
        });
      }
    }
  }

  isInView(date) {
    // we calculate the month delta between the date arg and the date in the state.
    const currentDate = this.state.date; // First we get the year delta

    const yearDelta = this.dateHelpers.getYear(date) - this.dateHelpers.getYear(currentDate); // then we convert it to months. Then we simply add the date-without-year month delta back in.

    const monthDelta = yearDelta * 12 + this.dateHelpers.getMonth(date) - this.dateHelpers.getMonth(currentDate); // we just check that the delta is between the range given by "this month" (i.e. 0) and "the last month" (i.e. monthsShown)

    return monthDelta >= 0 && monthDelta < (this.props.monthsShown || 1);
  }

  getSingleDate(value) {
    // need to check this.props.range but flow would complain
    // at the return value in the else clause
    if (Array.isArray(value)) {
      return value[0] || null;
    }

    return value;
  }

  setHighlightedDate(date) {
    const {
      value
    } = this.props;
    const selected = this.getSingleDate(value);
    let nextState;

    if (selected && this.dateHelpers.isSameMonth(selected, date) && this.dateHelpers.isSameYear(selected, date)) {
      nextState = {
        highlightedDate: selected
      };
    } else {
      nextState = {
        highlightedDate: date
      };
    }

    this.setState(nextState);
  }

  render() {
    const {
      overrides = {}
    } = this.props;
    const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
    const [startDate, endDate] = [].concat(this.props.value);
    return React.createElement(LocaleContext.Consumer, null, locale => React.createElement(Root, _extends({
      "data-baseweb": "calendar",
      ref: root => {
        if (root && root instanceof HTMLElement && !this.state.rootElement) {
          this.setState({
            rootElement: root
          });
        }
      },
      "aria-label": locale.datepicker.ariaLabelCalendar,
      onKeyDown: this.props.trapTabbing ? this.handleTabbing : null
    }, rootProps), this.renderMonths({
      ariaRoleDescCalMonth: locale.datepicker.ariaRoleDescriptionCalendarMonth
    }), this.props.timeSelectStart && this.renderTimeSelect(startDate, time => this.handleTimeChange(time, 0), locale.datepicker.timeSelectStartLabel), this.props.timeSelectEnd && this.props.range && this.renderTimeSelect(endDate, time => this.handleTimeChange(time, 1), locale.datepicker.timeSelectEndLabel), this.renderQuickSelect()));
  }

}

_defineProperty(Calendar, "defaultProps", {
  autoFocusCalendar: false,
  excludeDates: null,
  filterDate: null,
  highlightedDate: null,
  includeDates: null,
  range: false,
  locale: null,
  maxDate: null,
  minDate: null,
  onDayClick: () => {},
  onDayFocus: () => {},
  onDayMouseOver: () => {},
  onDayMouseLeave: () => {},
  onMonthChange: () => {},
  onYearChange: () => {},
  onChange: () => {},
  orientation: ORIENTATION.vertical,
  overrides: {},
  peekNextMonth: false,
  adapter: dateFnsAdapter,
  value: null,
  trapTabbing: false
});