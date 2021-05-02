function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
const MINUTE = 60;
const HOUR = MINUTE * 60;

class DateHelpers {
  constructor(_adapter) {
    _defineProperty(this, "adapter", void 0);

    _defineProperty(this, "cloneAdapter", (adapter, updateOptionsBase) => {
      const adapterMap = {
        // all utils classes set the arguments passed into their constructor as public members in some way
        // it just varies by class, most just set formats and locale, but this handles the exceptions
        MomentUtils: {
          formats: {
            monthNumber: 'M',
            dayOfMonthNumber: 'D',
            fullOrdinalWeek: 'dddd, MMMM Do YYYY',
            slashDate: 'YYYY/MM/DD',
            weekday: 'dddd',
            // moment does not have a similar 'single character' weekday format like the other libraries
            // the format below will only supply two character abbreviations.
            weekdaymin: 'dd',
            quarter: '[Q]Q'
          }
        },
        DateFnsUtils: {
          formats: {
            monthNumber: 'M',
            dayOfMonthNumber: 'd',
            weekday: 'EEEE',
            weekdaymin: 'EEEEE',
            slashDate: 'yyyy/MM/dd',
            fullOrdinalWeek: 'EEEE, MMMM do yyyy',
            quarter: 'QQQ'
          }
        },
        LuxonUtils: {
          formats: {
            monthNumber: 'M',
            dayOfMonthNumber: 'd',
            weekday: 'EEEE',
            weekdaymin: 'EEEEE',
            slashDate: 'yyyy/MM/dd',
            fullOrdinalWeek: 'EEEE, MMMM dd yyyy',
            quarter: 'Qq'
          }
        }
      };

      const defaultGetOptions = instance => ({
        formats: instance.formats,
        locale: instance.locale
      });

      const updateOptions = updateOptionsBase || defaultGetOptions;
      const UtilsClass = adapter.constructor;
      const className = adapter.constructor.name; // This ensures that if the adapter class isn't
      // supported it just falls back the default formats
      // NOTE: in e2e tests puppeteer seems to add
      // a JSHandle wrapping class to all objects
      // so className always resolves to JSHandle:e
      // and if falls back to the default
      // if we want to test other adapter implementation
      // in e2e tests down the road, we're going to have
      // to figure that out

      const {
        getOptions = defaultGetOptions,
        formats
      } = adapterMap[className] || adapterMap['DateFnsUtils'];
      const options = getOptions(adapter);
      return new UtilsClass(Object.assign({}, updateOptions(Object.assign({}, options, {
        formats: Object.assign({}, options.formats, formats)
      }))));
    });

    _defineProperty(this, "format", (date, format, locale) => {
      const adapter = locale ? this.getAdapterWithNewLocale(locale) : this.adapter;
      return adapter.format(date, format);
    });

    _defineProperty(this, "getAdapterWithNewLocale", locale => {
      return this.cloneAdapter(this.adapter, options => ({ ...options,
        locale
      }));
    });

    _defineProperty(this, "date", date => this.adapter.date(date));

    _defineProperty(this, "dateToSeconds", date => {
      const seconds = this.adapter.getSeconds(date);
      const minutes = this.adapter.getMinutes(date) * MINUTE;
      const hours = this.adapter.getHours(date) * HOUR;
      return seconds + minutes + hours;
    });

    _defineProperty(this, "secondsToHourMinute", seconds => {
      const d = this.adapter.toJsDate(this.adapter.date(seconds * 1000));
      return [d.getUTCHours(), d.getUTCMinutes()];
    });

    _defineProperty(this, "differenceInCalendarMonths", (fromDate, toDate) => {
      var yearDiff = this.adapter.getYear(fromDate) - this.adapter.getYear(toDate);
      var monthDiff = this.adapter.getMonth(fromDate) - this.adapter.getMonth(toDate);
      return yearDiff * 12 + monthDiff;
    });

    _defineProperty(this, "getStartOfWeek", (date, locale) => {
      const adapter = locale ? this.getAdapterWithNewLocale(locale) : this.adapter; // rewrapping this date here ensures that the locale will be taken into account in all adapters

      return adapter.startOfWeek(adapter.date(date));
    });

    _defineProperty(this, "formatDate", (date, formatString, locale) => {
      const adapter = locale ? this.getAdapterWithNewLocale(locale) : this.adapter;
      return adapter.formatByString(date, formatString);
    });

    _defineProperty(this, "getWeekdayMinInLocale", (date, locale) => {
      return this.getAdapterWithNewLocale(locale).format(date, 'weekdaymin');
    });

    _defineProperty(this, "getMonthInLocale", (monthNumber, locale) => {
      const localeAdapter = this.getAdapterWithNewLocale(locale);
      return localeAdapter.format(localeAdapter.setMonth(localeAdapter.date(), monthNumber), 'month');
    });

    _defineProperty(this, "getWeekdayInLocale", (date, locale) => {
      return this.getAdapterWithNewLocale(locale).format(date, 'weekday');
    });

    _defineProperty(this, "getQuarterInLocale", (quarterNumber, locale) => {
      const localeAdapter = this.getAdapterWithNewLocale(locale);
      return localeAdapter.format(localeAdapter.setMonth(localeAdapter.date(), quarterNumber * 3), 'quarter');
    });

    _defineProperty(this, "getEndOfWeek", date => {
      return this.adapter.endOfWeek(date);
    });

    _defineProperty(this, "getDay", date => {
      return Number(this.adapter.formatByString(date, 'e')) - 1;
    });

    _defineProperty(this, "addWeeks", (date, weekNumber) => {
      return this.adapter.addDays(date, weekNumber * 7);
    });

    _defineProperty(this, "subWeeks", (date, weekNumber) => {
      return this.addWeeks(date, weekNumber * -1);
    });

    _defineProperty(this, "addYears", (date, yearNumber) => {
      return this.adapter.addMonths(date, yearNumber * 12);
    });

    _defineProperty(this, "subYears", (date, yearNumber) => {
      return this.addYears(date, yearNumber * -1);
    });

    _defineProperty(this, "isSameYear", (fromDate, toDate) => {
      if (fromDate && toDate) {
        return this.adapter.isSameYear(fromDate, toDate);
      }

      return false;
    });

    _defineProperty(this, "isStartOfMonth", date => {
      return this.adapter.isSameDay(date, this.adapter.startOfMonth(date));
    });

    _defineProperty(this, "isEndOfMonth", date => {
      return this.adapter.isSameDay(date, this.adapter.endOfMonth(date));
    });

    _defineProperty(this, "isDayInRange", (date, startDate, endDate) => {
      return this.adapter.isWithinRange(date, [startDate, endDate]);
    });

    _defineProperty(this, "isSameDay", (fromDate, toDate) => {
      if (fromDate && toDate) {
        return this.adapter.isSameDay(fromDate, toDate);
      }

      return false;
    });

    _defineProperty(this, "isSameMonth", (fromDate, toDate) => {
      if (fromDate && toDate) {
        return this.adapter.isSameMonth(fromDate, toDate);
      }

      return false;
    });

    _defineProperty(this, "subDays", (date, days) => {
      return this.adapter.addDays(date, days * -1);
    });

    _defineProperty(this, "subMonths", (date, months) => {
      return this.adapter.addMonths(date, months * -1);
    });

    _defineProperty(this, "min", dates => {
      return dates.reduce((minDate, date) => {
        return this.adapter.isBefore(date, minDate) ? date : minDate;
      });
    });

    _defineProperty(this, "max", dates => {
      return dates.reduce((maxDate, date) => {
        return this.adapter.isAfter(date, maxDate) ? date : maxDate;
      });
    });

    _defineProperty(this, "getEffectiveMinDate", ({
      minDate,
      includeDates
    }) => {
      if (includeDates && minDate) {
        let minDates = includeDates.filter(includeDate => this.isOnOrAfterDay(includeDate, minDate));
        return this.min(minDates);
      } else if (includeDates && includeDates.length) {
        return this.min(includeDates);
      } else if (!(includeDates && includeDates.length) && minDate) {
        return minDate;
      } // this condition can't ever be reached
      // but flow isn't smart enough to see that all of the conditions are covered


      return this.adapter.date();
    });

    _defineProperty(this, "getEffectiveMaxDate", ({
      maxDate,
      includeDates
    }) => {
      if (includeDates && maxDate) {
        let maxDates = includeDates.filter(includeDate => this.isOnOrBeforeDay(includeDate, maxDate));
        return this.max(maxDates);
      } else if (includeDates) {
        return this.max(includeDates);
      } else if (!includeDates && maxDate) {
        return maxDate;
      } // this condition can't ever be reached
      // but flow isn't smart enough to see that all of the conditions are covered


      return this.adapter.date();
    });

    _defineProperty(this, "monthDisabledBefore", (day, {
      minDate,
      includeDates
    } = {}) => {
      const previousMonth = this.subMonths(day, 1);
      return !!minDate && this.differenceInCalendarMonths(minDate, previousMonth) > 0 || !!includeDates && includeDates.every(includeDate => this.differenceInCalendarMonths(includeDate, previousMonth) > 0) || false;
    });

    _defineProperty(this, "monthDisabledAfter", (day, {
      maxDate,
      includeDates
    } = {}) => {
      const nextMonth = this.adapter.addMonths(day, 1);
      return !!maxDate && this.differenceInCalendarMonths(nextMonth, maxDate) > 0 || !!includeDates && includeDates.every(includeDate => this.differenceInCalendarMonths(nextMonth, includeDate) > 0) || false;
    });

    _defineProperty(this, "setDate", (date, dayNumber) => {
      const startOfMonthNoTime = this.adapter.startOfMonth(date);
      const startOfMonthHoursAndMinutes = this.adapter.mergeDateAndTime(startOfMonthNoTime, date);
      const startOfMonth = this.adapter.setSeconds(startOfMonthHoursAndMinutes, this.adapter.getSeconds(date));
      return this.adapter.addDays(startOfMonth, dayNumber - 1);
    });

    _defineProperty(this, "getDate", date => Number(this.adapter.format(date, 'dayOfMonthNumber')));

    _defineProperty(this, "applyDateToTime", (time, date) => {
      if (!time) return date;
      const yearNumber = this.adapter.getYear(date);
      const monthNumber = this.adapter.getMonth(date);
      const dayNumber = this.getDate(date);
      const yearDate = this.adapter.setYear(time, yearNumber);
      const monthDate = this.adapter.setMonth(yearDate, monthNumber);
      return this.setDate(monthDate, dayNumber);
    });

    _defineProperty(this, "applyTimeToDate", (date, time) => {
      if (!date) return time;
      return this.adapter.setSeconds(this.adapter.mergeDateAndTime(date, time), 0);
    });

    _defineProperty(this, "isDayDisabled", (day, {
      minDate,
      maxDate,
      excludeDates,
      includeDates,
      filterDate
    } = {}) => {
      return this.isOutOfBounds(day, {
        minDate,
        maxDate
      }) || excludeDates && excludeDates.some(excludeDate => this.adapter.isSameDay(day, excludeDate)) || includeDates && !includeDates.some(includeDate => this.adapter.isSameDay(day, includeDate)) || filterDate && !filterDate(day) || false;
    });

    _defineProperty(this, "isOnOrAfterDay", (fromDate, toDate) => {
      if (this.adapter.isSameDay(fromDate, toDate)) {
        return true;
      }

      return this.adapter.isAfter(fromDate, toDate);
    });

    _defineProperty(this, "isOnOrBeforeDay", (fromDate, toDate) => {
      if (this.adapter.isSameDay(fromDate, toDate)) {
        return true;
      }

      return this.adapter.isBefore(fromDate, toDate);
    });

    _defineProperty(this, "isOutOfBounds", (day, {
      minDate,
      maxDate
    } = {}) => {
      return !!minDate && !this.isOnOrAfterDay(day, minDate) || !!maxDate && !this.isOnOrBeforeDay(day, maxDate);
    });

    _defineProperty(this, "parseString", (string, formatString, locale) => {
      const adapter = locale ? this.getAdapterWithNewLocale(locale) : this.adapter;
      return adapter.parse(string, formatString);
    });

    _defineProperty(this, "parse", (string, format, locale) => {
      const adapter = locale ? this.getAdapterWithNewLocale(locale) : this.adapter;
      return adapter.parse(string, adapter.formats[format]);
    });

    _defineProperty(this, "setMilliseconds", (date, milliseconds) => {
      return this.adapter.date(this.adapter.getSeconds(this.adapter.startOfDay(date)) * 1000 + milliseconds);
    });

    _defineProperty(this, "set", (date, values) => {
      let updatedDate = date;

      if (values.year != null) {
        updatedDate = this.setYear(updatedDate, values.year);
      }

      if (values.month != null) {
        updatedDate = this.setMonth(updatedDate, values.month);
      }

      if (values.date != null) {
        updatedDate = this.setDate(updatedDate, Number(values.date));
      }

      if (values.hours != null) {
        updatedDate = this.setHours(updatedDate, Number(values.hours));
      }

      if (values.minutes != null) {
        updatedDate = this.setMinutes(updatedDate, Number(values.minutes));
      }

      if (values.seconds != null) {
        updatedDate = this.setSeconds(updatedDate, Number(values.seconds));
      }

      return updatedDate;
    });

    _defineProperty(this, "getQuarter", date => {
      return Math.floor(this.getMonth(date) / 3) + 1;
    });

    _defineProperty(this, "setSeconds", (date, seconds) => this.adapter.setSeconds(date, seconds));

    _defineProperty(this, "setMinutes", (date, minutes) => this.adapter.setMinutes(date, minutes));

    _defineProperty(this, "setHours", (date, hours) => this.adapter.setHours(date, hours));

    _defineProperty(this, "setMonth", (date, monthNumber) => this.adapter.setMonth(date, monthNumber));

    _defineProperty(this, "setYear", (date, yearNumber) => this.adapter.setYear(date, yearNumber));

    _defineProperty(this, "getMinutes", date => this.adapter.getMinutes(date));

    _defineProperty(this, "getHours", date => this.adapter.getHours(date));

    _defineProperty(this, "getMonth", date => this.adapter.getMonth(date));

    _defineProperty(this, "getYear", date => this.adapter.getYear(date));

    _defineProperty(this, "getStartOfMonth", date => this.adapter.startOfMonth(date));

    _defineProperty(this, "getEndOfMonth", date => this.adapter.endOfMonth(date));

    _defineProperty(this, "addDays", (date, days) => this.adapter.addDays(date, days));

    _defineProperty(this, "addMonths", (date, months) => this.adapter.addMonths(date, months));

    _defineProperty(this, "isBefore", (fromDate, toDate) => this.adapter.isBefore(fromDate, toDate));

    _defineProperty(this, "isAfter", (fromDate, toDate) => this.adapter.isAfter(fromDate, toDate));

    _defineProperty(this, "isEqual", (fromDate, toDate) => this.adapter.isEqual(fromDate, toDate));

    _defineProperty(this, "isValid", possibleDate => {
      return this.adapter.isValid(possibleDate);
    });

    this.adapter = this.cloneAdapter(_adapter);
  }

}

export default DateHelpers;