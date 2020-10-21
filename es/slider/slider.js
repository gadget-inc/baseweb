function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

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

export function useHover() {
  const [value, setValue] = React.useState(false); // eslint-disable-next-line flowtype/no-weak-types

  const ref = React.useRef(null);

  const handleMouseOver = () => setValue(true);

  const handleMouseOut = () => setValue(false);

  React.useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);
      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  });
  return [ref, value];
}

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
  const [hoverRef0, isHovered0] = useHover();
  const [hoverRef1, isHovered1] = useHover();
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
  return React.createElement(Root, _extends({
    "data-baseweb": "slider"
  }, sharedProps, rootProps, {
    onFocus: forkFocus(rootProps, handleFocus),
    onBlur: forkBlur(rootProps, handleBlur)
  }), React.createElement(Range, _extends({
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
    }) => React.createElement(Track, _extends({
      onMouseDown: props.onMouseDown,
      onTouchStart: props.onTouchStart,
      $isDragged: isDragged
    }, sharedProps, trackProps), React.createElement(InnerTrack, _extends({
      $isDragged: isDragged,
      ref: props.ref
    }, sharedProps, innerTrackProps), children)),
    renderThumb: ({
      props,
      index,
      isDragged
    }) => {
      const displayLabel = (index && isHovered1 || !index && isHovered0 || isDragged) && !disabled;
      return React.createElement(Thumb, _extends({}, props, {
        ref: index ? hoverRef1 : hoverRef0,
        $thumbIndex: index,
        $isDragged: isDragged,
        style: { ...props.style
        }
      }, sharedProps, thumbProps, {
        $isFocusVisible: isFocusVisible && focusedThumbIndex === index
      }), displayLabel && React.createElement(ThumbValue, _extends({
        $isDragged: isDragged
      }, sharedProps, thumbValueProps), value[index]), displayLabel && React.createElement(InnerThumb, _extends({
        $thumbIndex: index,
        $isDragged: isDragged
      }, sharedProps, innerThumbProps)));
    }
  }, marks ? {
    // eslint-disable-next-line react/display-name
    renderMark: ({
      props
    }) => React.createElement(Mark, _extends({}, props, sharedProps, markProps))
  } : {})), React.createElement(TickBar, _extends({}, sharedProps, tickBarProps), React.createElement(Tick, _extends({}, sharedProps, tickProps), min), React.createElement(Tick, _extends({}, sharedProps, tickProps), max)));
}

export default Slider;