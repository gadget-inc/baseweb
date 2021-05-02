function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import Day from './day.js';
import { StyledWeek } from './styled-components.js';
import { WEEKDAYS } from './constants.js';
import dateFnsAdapter from './utils/date-fns-adapter.js';
import DateHelpers from './utils/date-helpers.js';
import { getOverrides } from '../helpers/overrides.js';
export default class Week extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "dateHelpers", void 0);

    _defineProperty(this, "renderDays", () => {
      const startOfWeek = this.dateHelpers.getStartOfWeek(this.props.date || this.dateHelpers.date(), this.props.locale);
      const days = []; // $FlowFixMe

      return days.concat(WEEKDAYS.map(offset => {
        const day = this.dateHelpers.addDays(startOfWeek, offset);
        return (
          /*#__PURE__*/
          // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
          React.createElement(Day, {
            adapter: this.props.adapter,
            date: day,
            disabled: this.dateHelpers.isDayDisabled(day, this.props),
            excludeDates: this.props.excludeDates,
            filterDate: this.props.filterDate,
            highlightedDate: this.props.highlightedDate,
            highlighted: this.dateHelpers.isSameDay(day, this.props.highlightedDate),
            includeDates: this.props.includeDates,
            focusedCalendar: this.props.focusedCalendar,
            range: this.props.range,
            key: offset,
            locale: this.props.locale,
            minDate: this.props.minDate,
            maxDate: this.props.maxDate,
            month: this.props.month,
            onSelect: this.props.onChange,
            onBlur: this.props.onDayBlur,
            onFocus: this.props.onDayFocus,
            onClick: this.props.onDayClick,
            onMouseOver: this.props.onDayMouseOver,
            onMouseLeave: this.props.onDayMouseLeave,
            overrides: this.props.overrides,
            peekNextMonth: this.props.peekNextMonth,
            value: this.props.value
          })
        );
      }));
    });

    this.dateHelpers = new DateHelpers(props.adapter);
  }

  render() {
    const {
      overrides = {}
    } = this.props;
    const [Week, weekProps] = getOverrides(overrides.Week, StyledWeek);
    return /*#__PURE__*/React.createElement(Week, _extends({
      role: "row"
    }, weekProps), this.renderDays());
  }

}

_defineProperty(Week, "defaultProps", {
  adapter: dateFnsAdapter,
  highlightedDate: null,
  onDayClick: () => {},
  onDayFocus: () => {},
  onDayBlur: () => {},
  onDayMouseOver: () => {},
  onDayMouseLeave: () => {},
  onChange: () => {},
  overrides: {},
  peekNextMonth: false
});