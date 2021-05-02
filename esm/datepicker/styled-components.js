function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import getDayStateCode from './utils/day-state.js';

/**
 * Main component container element
 */
export var StyledInputWrapper = styled('div', function () {
  return {
    width: '100%'
  };
});
/**
 * Main component container element
 */

StyledInputWrapper.displayName = "StyledInputWrapper";
export var StyledRoot = styled('div', function (props) {
  var _props$$theme = props.$theme,
      typography = _props$$theme.typography,
      colors = _props$$theme.colors,
      borders = _props$$theme.borders;
  return _objectSpread(_objectSpread({}, typography.font200), {}, {
    color: colors.calendarForeground,
    backgroundColor: colors.calendarBackground,
    textAlign: 'center',
    borderTopLeftRadius: borders.surfaceBorderRadius,
    borderTopRightRadius: borders.surfaceBorderRadius,
    borderBottomRightRadius: borders.surfaceBorderRadius,
    borderBottomLeftRadius: borders.surfaceBorderRadius,
    display: 'inline-block'
  });
});
StyledRoot.displayName = "StyledRoot";
export var StyledMonthContainer = styled('div', {
  display: 'flex'
});
StyledMonthContainer.displayName = "StyledMonthContainer";
export var StyledCalendarContainer = styled('div', function (props) {
  var sizing = props.$theme.sizing;
  return {
    paddingTop: sizing.scale400,
    paddingBottom: sizing.scale500,
    paddingLeft: sizing.scale600,
    paddingRight: sizing.scale600
  };
});
StyledCalendarContainer.displayName = "StyledCalendarContainer";
export var StyledSelectorContainer = styled('div', function (_ref) {
  var $theme = _ref.$theme;
  var textAlign = $theme.direction === 'rtl' ? 'right' : 'left';
  return {
    marginBottom: $theme.sizing.scale600,
    paddingLeft: $theme.sizing.scale600,
    paddingRight: $theme.sizing.scale600,
    textAlign: textAlign
  };
});
StyledSelectorContainer.displayName = "StyledSelectorContainer";
export var StyledCalendarHeader = styled('div', function (props) {
  var _props$$theme2 = props.$theme,
      borders = _props$$theme2.borders,
      colors = _props$$theme2.colors,
      sizing = _props$$theme2.sizing;
  return {
    color: colors.calendarHeaderForeground,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: sizing.scale500,
    paddingBottom: sizing.scale500,
    paddingLeft: sizing.scale600,
    paddingRight: sizing.scale600,
    backgroundColor: colors.calendarHeaderBackground,
    borderTopLeftRadius: borders.surfaceBorderRadius,
    borderTopRightRadius: borders.surfaceBorderRadius,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    // account for the left/right arrow heights
    minHeight: "calc(".concat(sizing.scale800, " + ").concat(sizing.scale0, ")")
  };
});
StyledCalendarHeader.displayName = "StyledCalendarHeader";
export var StyledMonthHeader = styled('div', function (props) {
  return {
    color: props.$theme.colors.calendarHeaderForeground,
    backgroundColor: props.$theme.colors.calendarHeaderBackground,
    whiteSpace: 'nowrap'
  };
});
StyledMonthHeader.displayName = "StyledMonthHeader";
export var StyledMonthYearSelectButton = styled('button', function (props) {
  return _objectSpread(_objectSpread({}, props.$theme.typography.font200), {}, {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    color: props.$theme.colors.calendarHeaderForeground,
    cursor: 'pointer',
    display: 'flex',
    outline: 'none',
    ':focus': {
      boxShadow: props.$isFocusVisible ? "0 0 0 3px ".concat(props.$theme.colors.accent) : 'none'
    }
  });
});
StyledMonthYearSelectButton.displayName = "StyledMonthYearSelectButton";
export var StyledMonthYearSelectIconContainer = styled('span', function (props) {
  var marginDirection = props.$theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  return _defineProperty({
    alignItems: 'center',
    display: 'flex'
  }, marginDirection, props.$theme.sizing.scale500);
});
StyledMonthYearSelectIconContainer.displayName = "StyledMonthYearSelectIconContainer";

function getArrowBtnStyle(_ref3) {
  var $theme = _ref3.$theme,
      $disabled = _ref3.$disabled,
      $isFocusVisible = _ref3.$isFocusVisible;
  return {
    boxSizing: 'border-box',
    color: $disabled ? $theme.colors.calendarHeaderForegroundDisabled : $theme.colors.calendarHeaderForeground,
    cursor: $disabled ? 'default' : 'pointer',
    backgroundColor: 'transparent',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    paddingRight: '0',
    marginLeft: '6px',
    marginRight: '6px',
    marginBottom: 0,
    marginTop: 0,
    outline: 'none',
    ':focus': $disabled ? {} : {
      boxShadow: $isFocusVisible ? "0 0 0 3px ".concat($theme.colors.accent) : 'none'
    }
  };
}

export var StyledPrevButton = styled('button', getArrowBtnStyle);
StyledPrevButton.displayName = "StyledPrevButton";
export var StyledNextButton = styled('button', getArrowBtnStyle);
StyledNextButton.displayName = "StyledNextButton";
export var StyledMonth = styled('div', function (props) {
  return {
    display: 'inline-block'
  };
});
StyledMonth.displayName = "StyledMonth";
export var StyledWeek = styled('div', function (props) {
  var sizing = props.$theme.sizing;
  return {
    whiteSpace: 'nowrap',
    display: 'flex',
    marginBottom: sizing.scale100
  };
});
StyledWeek.displayName = "StyledWeek";

function generateDayStyles(defaultCode, defaultStyle) {
  var _ref4;

  var codeForSM = defaultCode.substr(0, 12) + '1' + defaultCode.substr(12 + 1);
  var codeForEM = defaultCode.substr(0, 13) + '1' + defaultCode.substr(13 + 1);
  return _ref4 = {}, _defineProperty(_ref4, defaultCode, defaultStyle), _defineProperty(_ref4, codeForSM, defaultStyle), _defineProperty(_ref4, codeForEM, defaultStyle), _ref4;
} // eslint-disable-next-line flowtype/no-weak-types


function getDayStyles(code, _ref5) {
  var colors = _ref5.colors;
  var undefinedDayStyle = {
    ':before': {
      content: null
    },
    ':after': {
      content: null
    }
  };
  var defaultDayStyle = undefinedDayStyle;
  var disabledDateStyle = {
    color: colors.calendarForegroundDisabled,
    ':before': {
      content: null
    },
    ':after': {
      content: null
    }
  };
  var outsideMonthDateStyle = {
    color: colors.calendarForegroundDisabled,
    ':before': {
      borderTopStyle: 'none',
      borderBottomStyle: 'none',
      borderLeftStyle: 'none',
      borderRightStyle: 'none',
      backgroundColor: 'transparent'
    },
    ':after': {
      borderTopLeftRadius: '0%',
      borderTopRightRadius: '0%',
      borderBottomLeftRadius: '0%',
      borderBottomRightRadius: '0%',
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
      borderRightColor: 'transparent',
      borderLeftColor: 'transparent'
    }
  };
  var highlightedStyle = {
    ':before': {
      content: null
    }
  };
  var CODE_DISABLED_INDEX = 1;

  if (code && code[CODE_DISABLED_INDEX] === '1') {
    defaultDayStyle = disabledDateStyle;
  } // See the ./utils/day-state.js file for the description of all available states
  // rdhsrSsDeDpSrHpHrRrLsMeMoM
  // '000000000000000'


  var dayStateStyle = Object.assign({}, // highlighted date
  generateDayStyles('001000000000000', {
    color: colors.calendarDayForegroundPseudoSelected
  }), // selected date
  generateDayStyles('000100000000000', {
    color: colors.calendarDayForegroundSelected
  }), // selected highlighted date
  generateDayStyles('001100000000000', {
    color: colors.calendarDayForegroundSelectedHighlighted
  }), // disabled date
  {
    '010000000000000': {
      color: colors.calendarForegroundDisabled,
      ':after': {
        content: null
      }
    }
  }, // disabled highlighted date
  {
    '011000000000000': {
      color: colors.calendarForegroundDisabled,
      ':after': {
        content: null
      }
    }
  }, // date outside of the currently displayed month (when peekNextMonth is true)
  generateDayStyles('000000000000001', outsideMonthDateStyle), // Range Datepicker
  // range: highlighted date outside of a selected range
  generateDayStyles('101000000000000', highlightedStyle), generateDayStyles('101010000000000', highlightedStyle), // range: selected date
  {
    '100100000000000': {
      color: colors.calendarDayForegroundSelected,
      ':before': {
        content: null
      }
    }
  }, // range: selected highlighted date
  // when single date selected in a range
  generateDayStyles('101100000000000', {
    color: colors.calendarDayForegroundSelectedHighlighted,
    ':before': {
      content: null
    }
  }), // range: selected start and end dates are the same
  generateDayStyles('100111100000000', {
    color: colors.calendarDayForegroundSelected,
    ':before': {
      content: null
    }
  }), generateDayStyles('101111100000000', {
    color: colors.calendarDayForegroundSelectedHighlighted,
    ':before': {
      content: null
    }
  }), // range: selected start date
  {
    '100111000000000': {
      color: colors.calendarDayForegroundSelected
    }
  }, {
    '100111000000100': {
      color: colors.calendarDayForegroundSelected
    }
  }, {
    '100111000000010': {
      color: colors.calendarDayForegroundSelected,
      ':before': {
        content: null
      }
    }
  }, // range: selected end date
  {
    '100110100000000': {
      color: colors.calendarDayForegroundSelected,
      ':before': {
        left: null,
        right: '50%'
      }
    }
  }, {
    '100110100000100': {
      color: colors.calendarDayForegroundSelected,
      ':before': {
        content: null
      }
    }
  }, {
    '100110100000010': {
      color: colors.calendarDayForegroundSelected,
      ':before': {
        left: null,
        right: '50%'
      }
    }
  }, // range: first selected date while a range is highlighted but no second date selected yet
  // highlighted range on the right from the selected
  generateDayStyles('100100001010000', {
    color: colors.calendarDayForegroundSelected
  }), // highlighted range on the left from the selected
  generateDayStyles('100100001001000', {
    color: colors.calendarDayForegroundSelected,
    ':before': {
      left: null,
      right: '50%'
    }
  }), // range: second date in a range that is highlighted but not selected
  {
    '101000001010000': {
      ':before': {
        left: null,
        right: '50%'
      }
    }
  }, {
    '101000001010100': {
      ':before': {
        content: null
      }
    }
  }, {
    '101000001010010': {
      ':before': {
        left: null,
        right: '50%'
      }
    }
  }, {
    '101000001001000': {}
  }, {
    '101000001001100': {}
  }, {
    '101000001001010': {
      ':before': {
        content: null
      }
    }
  }, // range: pseudo-selected date
  {
    '100010010000000': {
      color: colors.calendarDayForegroundPseudoSelected,
      ':before': {
        left: '0',
        width: '100%'
      },
      ':after': {
        content: null
      }
    }
  }, {
    '100010010000100': {
      color: colors.calendarDayForegroundPseudoSelected,
      ':before': {
        left: '0',
        width: '100%',
        borderLeftWidth: '2px',
        borderLeftColor: colors.mono400,
        borderTopLeftRadius: '100%',
        borderBottomLeftRadius: '100%'
      },
      ':after': {
        content: null
      }
    }
  }, {
    '100010010000010': {
      color: colors.calendarDayForegroundPseudoSelected,
      ':before': {
        left: '0',
        width: '100%',
        borderRightWidth: '2px',
        borderRightColor: colors.mono400,
        borderTopRightRadius: '100%',
        borderBottomRightRadius: '100%'
      },
      ':after': {
        content: null
      }
    }
  }, // range: pseudo-highlighted date (in a range where only one date is
  // selected and second date is highlighted)
  {
    '101000001100000': {
      color: colors.calendarDayForegroundPseudoSelected,
      ':before': {
        left: '0',
        width: '100%'
      },
      ':after': {
        content: null
      }
    }
  }, {
    '100000001100000': {
      color: colors.calendarDayForegroundPseudoSelected,
      ':before': {
        left: '0',
        width: '100%'
      },
      ':after': {
        content: null
      }
    }
  }, {
    '100000001100100': {
      color: colors.calendarDayForegroundPseudoSelected,
      ':before': {
        left: '0',
        width: '100%',
        borderLeftWidth: '2px',
        borderLeftColor: colors.mono400,
        borderTopLeftRadius: '100%',
        borderBottomLeftRadius: '100%'
      },
      ':after': {
        content: null
      }
    }
  }, {
    '100000001100010': {
      color: colors.calendarDayForegroundPseudoSelected,
      ':before': {
        left: '0',
        width: '100%',
        borderRightWidth: '2px',
        borderRightColor: colors.mono400,
        borderTopRightRadius: '100%',
        borderBottomRightRadius: '100%'
      },
      ':after': {
        content: null
      }
    }
  }, // highlighted start date in a range
  {
    '101111000000000': {
      color: colors.calendarDayForegroundSelectedHighlighted
    }
  }, {
    '101111000000100': {
      color: colors.calendarDayForegroundSelectedHighlighted
    }
  }, {
    '101111000000010': {
      color: colors.calendarDayForegroundSelectedHighlighted,
      ':before': {
        content: null
      }
    }
  }, // highlighted end date in a range
  {
    '101110100000000': {
      color: colors.calendarDayForegroundSelectedHighlighted,
      ':before': {
        left: null,
        right: '50%'
      }
    }
  }, {
    '101110100000100': {
      color: colors.calendarDayForegroundSelectedHighlighted,
      ':before': {
        content: null
      }
    }
  }, {
    '101110100000010': {
      color: colors.calendarDayForegroundSelectedHighlighted,
      ':before': {
        left: null,
        right: '50%'
      }
    }
  }, // range: pseudo-selected date
  {
    '101010010000000': {
      color: colors.calendarDayForegroundPseudoSelectedHighlighted,
      ':before': {
        left: '0',
        width: '100%'
      }
    }
  }, {
    '101010010000100': {
      color: colors.calendarDayForegroundPseudoSelectedHighlighted
    }
  }, {
    '101010010000010': {
      color: colors.calendarDayForegroundPseudoSelectedHighlighted,
      ':before': {
        left: null,
        right: '50%'
      }
    }
  }, // Range is true Date outside current month (when peekNextMonth is true)
  generateDayStyles('100000000000001', outsideMonthDateStyle), // peekNextMonth is true, date is outside month, start date is selected and range is highlighted is on right
  generateDayStyles('100000001010001', outsideMonthDateStyle), // peekNextMonth is true, date is outside month, start date is selected and range is highlighted is on left
  generateDayStyles('100000001001001', outsideMonthDateStyle), // peekNextMonth is true, date is outside month, range is selected
  generateDayStyles('100010000000001', outsideMonthDateStyle));
  return dayStateStyle[code] || defaultDayStyle;
}

function getEdgeDayBeforeStyle(code, firstChild, peekNextMonth) {
  var firstChildStyle = firstChild ? {
    content: 'none'
  } : {};
  var lastChildStyle = firstChild ? {} : {
    content: 'none'
  };
  var pseudoSelectedStyle = firstChild ? {
    borderLeftWidth: '2px',
    borderTopLeftRadius: '100%',
    borderBottomLeftRadius: '100%'
  } : {
    borderRightWidth: '2px',
    borderTopRightRadius: '100%',
    borderBottomRightRadius: '100%'
  }; // See the ./utils/day-state.js file for the description of all available states
  // rdhsrSsDeDpSrHpHrRrLsMeMoM
  // '0000000000000000'

  return {
    // selected - hasRangeSelected - startDate
    '100111000000000': lastChildStyle,
    // selected - hasRangeSelected - endDate
    '100110100000000': firstChildStyle,
    // selected and hasRangeHighlighted on the right from a selected date
    '100100001010000': lastChildStyle,
    // selected and hasRangeHighlighted on the left from a selected date
    '100100001001000': firstChildStyle,
    // only one date selected in a range
    // '100100000000000': {content: 'none'},
    // pseudo-selected date
    '100010010000000': pseudoSelectedStyle,
    '100010010000100': pseudoSelectedStyle,
    '100010010000010': pseudoSelectedStyle,
    // pseudo-highlighted date
    '100000001100000': pseudoSelectedStyle,
    '100000001100100': pseudoSelectedStyle,
    '100000001100010': pseudoSelectedStyle,
    // highlighted date and hasRangeHighlighted on the right from a selected date
    '101000001010000': firstChildStyle,
    // highlighted date and hasRangeHighlighted on the left from a selected date
    '101000001001000': lastChildStyle,
    // highlighted pseudo-selected date
    '101010010000000': pseudoSelectedStyle,
    // highlighted pseudo-selected date that is first day of the month
    '101010010000100': !peekNextMonth && !firstChild ? {
      content: 'none'
    } : pseudoSelectedStyle,
    // highlighted pseudo-selected date that is last day of the month
    '101010010000010': !peekNextMonth && firstChild ? {
      content: 'none'
    } : pseudoSelectedStyle
  }[code] || {};
}

export var StyledDay = styled('div', function (props) {
  var $disabled = props.$disabled,
      $isHovered = props.$isHovered,
      $isFocusVisible = props.$isFocusVisible,
      $isHighlighted = props.$isHighlighted,
      $peekNextMonth = props.$peekNextMonth,
      $pseudoHighlighted = props.$pseudoHighlighted,
      $pseudoSelected = props.$pseudoSelected,
      $range = props.$range,
      $selected = props.$selected,
      $outsideMonth = props.$outsideMonth,
      _props$$theme3 = props.$theme,
      colors = _props$$theme3.colors,
      sizing = _props$$theme3.sizing;
  var code = getDayStateCode(props);
  return _objectSpread(_objectSpread(_objectSpread({
    boxSizing: 'border-box',
    position: 'relative',
    cursor: $disabled || !$peekNextMonth && $outsideMonth ? 'default' : 'pointer',
    color: colors.calendarForeground,
    display: 'inline-block',
    width: sizing.scale1000,
    height: sizing.scale1000,
    lineHeight: sizing.scale800,
    textAlign: 'center',
    paddingTop: sizing.scale300,
    paddingBottom: sizing.scale300,
    paddingLeft: sizing.scale200,
    paddingRight: sizing.scale200,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    outline: 'none',
    backgroundColor: 'transparent',
    // `transform` creates a stacking context so
    // a z-index used on its' children doesn't
    // interfere with anything outside the component
    transform: 'scale(1)'
  }, getDayStyles(code, props.$theme)), {}, {
    // :after pseudo element defines the selected
    // or highlighted day's circle styles
    ':after': _objectSpread({
      zIndex: -1,
      content: '""',
      boxSizing: 'border-box',
      display: 'inline-block',
      boxShadow: $isFocusVisible ? "0 0 0 3px ".concat(colors.accent) : 'none',
      backgroundColor: $selected ? $isHighlighted ? colors.calendarDayBackgroundSelectedHighlighted : colors.calendarDayBackgroundSelected : $pseudoSelected ? $isHighlighted ? colors.calendarDayBackgroundPseudoSelectedHighlighted : 'transparent' : $isHovered || $isHighlighted || $pseudoHighlighted ? colors.mono200 : 'transparent',
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      paddingTop: sizing.scale200,
      paddingBottom: sizing.scale200,
      paddingLeft: sizing.scale200,
      paddingRight: sizing.scale200,
      borderLeftWidth: '2px',
      borderRightWidth: '2px',
      borderTopWidth: '2px',
      borderBottomWidth: '2px',
      borderLeftStyle: 'solid',
      borderRightStyle: 'solid',
      borderTopStyle: 'solid',
      borderBottomStyle: 'solid',
      borderTopColor: colors.mono400,
      borderBottomColor: colors.mono400,
      borderRightColor: colors.mono400,
      borderLeftColor: colors.mono400,
      borderTopLeftRadius: '100%',
      borderTopRightRadius: '100%',
      borderBottomLeftRadius: '100%',
      borderBottomRightRadius: '100%'
    }, getDayStyles(code, props.$theme)[':after'] || {})
  }, $range ? {
    // :before pseudo element defines a grey background style that extends
    // the selected/highlighted day's circle and spans through a range
    ':before': _objectSpread({
      zIndex: -1,
      content: '""',
      boxSizing: 'border-box',
      display: 'inline-block',
      backgroundColor: colors.mono200,
      position: 'absolute',
      height: '100%',
      width: '50%',
      top: 0,
      left: '50%',
      borderTopWidth: '2px',
      borderBottomWidth: '2px',
      borderLeftWidth: '0',
      borderRightWidth: '0',
      borderTopStyle: 'solid',
      borderBottomStyle: 'solid',
      borderLeftStyle: 'solid',
      borderRightStyle: 'solid',
      borderTopColor: colors.mono400,
      borderBottomColor: colors.mono400,
      borderLeftColor: colors.mono400,
      borderRightColor: colors.mono400
    }, getDayStyles(code, props.$theme)[':before'] || {})
  } : // a hack to make flow happy, otherwise it complains about complexity
  // eslint-disable-next-line flowtype/no-weak-types
  {}), {}, {
    ':first-child': _objectSpread({}, $range ? {
      ':before': _objectSpread({}, getEdgeDayBeforeStyle(code, true, $peekNextMonth))
    } : {}),
    ':last-child': _objectSpread({}, $range ? {
      ':before': _objectSpread({}, getEdgeDayBeforeStyle(code, false, $peekNextMonth))
    } : {})
  }, !$peekNextMonth && $outsideMonth ? {
    ':before': {
      content: null
    },
    ':after': {
      content: null
    },
    ':first-child': {
      ':before': {
        content: null
      }
    },
    ':last-child': {
      ':before': {
        content: null
      }
    }
  } : {});
});
StyledDay.displayName = "StyledDay";
export var StyledWeekdayHeader = styled('div', function (props) {
  var sizing = props.$theme.sizing;
  return {
    boxSizing: 'border-box',
    position: 'relative',
    cursor: 'default',
    display: 'inline-block',
    width: sizing.scale1000,
    height: sizing.scale1000,
    lineHeight: sizing.scale800,
    textAlign: 'center',
    paddingTop: sizing.scale300,
    paddingBottom: sizing.scale300,
    paddingLeft: sizing.scale200,
    paddingRight: sizing.scale200,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    color: 'inherit',
    backgroundColor: 'transparent'
  };
});
StyledWeekdayHeader.displayName = "StyledWeekdayHeader";