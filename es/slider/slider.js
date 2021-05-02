function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Range } from 'react-range';
import { isFocusVisible as focusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';
import { Root as StyledRoot, Track as StyledTrack, InnerTrack as StyledInnerTrack, Tick as StyledTick, TickBar as StyledTickBar, Thumb as StyledThumb, InnerThumb as StyledInnerThumb, ThumbValue as StyledThumbValue, Mark as StyledMark } from './styled-components.js';
import { getOverrides } from '../helpers/overrides.js';
import { ThemeContext } from '../styles/theme-provider.js'; // value.length should not be bigger than two
// because our design doesn't support more than
// two thumbs

const limitValue = value => {
  if (value.length > 2 || value.length === 0) {
    throw new Error('the value prop represents positions of thumbs, so its length can be only one or two');
  }

  return value;
};

function Slider({
  overrides = {},
  disabled = false,
  marks = false,
  onChange = () => {},
  onFinalChange = () => {},
  min = 0,
  max = 100,
  step = 1,
  value: providedValue
}) {
  const theme = React.useContext(ThemeContext);
  const [isHovered0, setIsHovered0] = React.useState(false);
  const [isHovered1, setIsHovered1] = React.useState(false);
  const [isFocusVisible, setIsFocusVisible] = React.useState(false);
  const [focusedThumbIndex, setFocusedThumbIndex] = React.useState(-1);
  const handleFocus = React.useCallback(event => {
    if (focusVisible(event)) {
      setIsFocusVisible(true);
    }

    const index = // eslint-disable-next-line flowtype/no-weak-types
    event.target.parentNode.firstChild === event.target ? 0 : 1;
    setFocusedThumbIndex(index);
  }, []);
  const handleBlur = React.useCallback(event => {
    if (isFocusVisible !== false) {
      setIsFocusVisible(false);
    }

    setFocusedThumbIndex(-1);
  }, []);
  const value = limitValue(providedValue);
  const sharedProps = {
    $disabled: disabled,
    $step: step,
    $min: min,
    $max: max,
    $marks: marks,
    $value: value,
    $isFocusVisible: isFocusVisible
  };
  const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
  const [Track, trackProps] = getOverrides(overrides.Track, StyledTrack);
  const [InnerTrack, innerTrackProps] = getOverrides(overrides.InnerTrack, StyledInnerTrack);
  const [Thumb, thumbProps] = getOverrides(overrides.Thumb, StyledThumb);
  const [InnerThumb, innerThumbProps] = getOverrides(overrides.InnerThumb, StyledInnerThumb);
  const [ThumbValue, thumbValueProps] = getOverrides(overrides.ThumbValue, StyledThumbValue);
  const [Tick, tickProps] = getOverrides(overrides.Tick, StyledTick);
  const [TickBar, tickBarProps] = getOverrides(overrides.TickBar, StyledTickBar);
  const [Mark, markProps] = getOverrides(overrides.Mark, StyledMark);
  return /*#__PURE__*/React.createElement(Root, _extends({
    "data-baseweb": "slider"
  }, sharedProps, rootProps, {
    onFocus: forkFocus(rootProps, handleFocus),
    onBlur: forkBlur(rootProps, handleBlur)
  }), /*#__PURE__*/React.createElement(Range, _extends({
    step: step,
    min: min,
    max: max,
    values: value,
    disabled: disabled,
    onChange: value => onChange({
      value
    }),
    onFinalChange: value => onFinalChange({
      value
    }),
    rtl: theme.direction === 'rtl',
    renderTrack: ({
      props,
      children,
      isDragged
    }) => /*#__PURE__*/React.createElement(Track, _extends({
      onMouseDown: props.onMouseDown,
      onTouchStart: props.onTouchStart,
      $isDragged: isDragged
    }, sharedProps, trackProps), /*#__PURE__*/React.createElement(InnerTrack, _extends({
      $isDragged: isDragged,
      ref: props.ref
    }, sharedProps, innerTrackProps), children)),
    renderThumb: ({
      props,
      index,
      isDragged
    }) => {
      const displayLabel = (index && isHovered1 || !index && isHovered0 || isDragged) && !disabled;
      return /*#__PURE__*/React.createElement(Thumb, _extends({}, props, {
        onMouseEnter: () => {
          if (index === 0) {
            setIsHovered0(true);
          } else {
            setIsHovered1(true);
          }
        },
        onMouseLeave: () => {
          if (index === 0) {
            setIsHovered0(false);
          } else {
            setIsHovered1(false);
          }
        },
        $thumbIndex: index,
        $isDragged: isDragged,
        style: { ...props.style
        }
      }, sharedProps, thumbProps, {
        $isFocusVisible: isFocusVisible && focusedThumbIndex === index
      }), displayLabel && /*#__PURE__*/React.createElement(ThumbValue, _extends({
        $thumbIndex: index,
        $isDragged: isDragged
      }, sharedProps, thumbValueProps), value[index]), displayLabel && /*#__PURE__*/React.createElement(InnerThumb, _extends({
        $thumbIndex: index,
        $isDragged: isDragged
      }, sharedProps, innerThumbProps)));
    }
  }, marks ? {
    // eslint-disable-next-line react/display-name
    renderMark: ({
      props,
      index
    }) => /*#__PURE__*/React.createElement(Mark, _extends({
      $markIndex: index
    }, props, sharedProps, markProps))
  } : {})), /*#__PURE__*/React.createElement(TickBar, _extends({}, sharedProps, tickBarProps), /*#__PURE__*/React.createElement(Tick, _extends({}, sharedProps, tickProps), min), /*#__PURE__*/React.createElement(Tick, _extends({}, sharedProps, tickProps), max)));
}

export default Slider;