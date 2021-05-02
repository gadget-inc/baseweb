/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable import/prefer-default-export */
import { ARROW_SIZE, PLACEMENT } from './constants.js';
const OPPOSITE_POSITIONS = {
  top: 'bottom',
  bottom: 'top',
  right: 'left',
  left: 'right'
};
/**
 * Returns the opposite of the specified position. Useful for tooltip
 * positioning logic.
 * Examples:
 * top -> bottom
 * left -> right
 */

export function getOppositePosition(position) {
  return OPPOSITE_POSITIONS[position];
}
/**
 * Determines whether or not the specified position is a vertical one (top or bottom)
 */

export function isVerticalPosition(position) {
  return position === 'top' || position === 'bottom';
}
/**
 * Simple utility function for capitalizing the first letter of a string
 */

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * Opposite of function above, converts from Popper.js placement
 * to our placement prop
 */

export function fromPopperPlacement(placement) {
  const popoverPlacement = placement.replace(/(top|bottom)-start$/, '$1Left').replace(/(top|bottom)-end$/, '$1Right').replace(/(left|right)-start$/, '$1Top').replace(/(left|right)-end$/, '$1Bottom');
  return PLACEMENT[popoverPlacement] || null;
}
/**
 * Splits something like 'topLeft' to ['top', 'left'] for easier usage
 */

export function splitPlacement(placement) {
  const matches = placement.match(/^([a-z]+)([A-Z][a-z]+)?/) || [];
  return matches.slice(1, 3).filter(Boolean).map(s => s.toLowerCase());
}
/**
 * Returns margin styles to add spacing between the popover
 * and its anchor.
 */

export function getPopoverMarginStyles(arrowSize, placement, popoverMargin) {
  const [position] = splitPlacement(placement);
  const opposite = getOppositePosition(position);

  if (!opposite) {
    return null;
  }

  const property = `margin${capitalize(opposite)}`;
  return {
    [property]: `${arrowSize + popoverMargin}px`
  };
}
/**
 * Returns CSS rules for the popover animation start keyframe
 */

export function getStartPosition(offset, placement, arrowSize, popoverMargin) {
  offset = { ...offset
  };
  const [position] = splitPlacement(placement);
  const margin = (arrowSize > 0 ? arrowSize : popoverMargin) * 2;

  if (isVerticalPosition(position)) {
    offset.top += position === 'top' ? margin : -margin;
  } else {
    offset.left += position === 'left' ? margin : -margin;
  }

  return `translate3d(${offset.left}px, ${offset.top}px, 0)`;
}
/**
 * Returns CSS rules for the popover animation end keyframe
 */

export function getEndPosition(offset) {
  return `translate3d(${offset.left}px, ${offset.top}px, 0)`;
}
/**
 * Returns top/left styles to position the popover arrow
 */

export function getArrowPositionStyles(offsets, placement) {
  const [position] = splitPlacement(placement);
  const oppositePosition = getOppositePosition(position);

  if (!oppositePosition) {
    return null;
  }

  const alignmentProperty = isVerticalPosition(position) ? 'left' : 'top';
  return {
    [alignmentProperty]: `${offsets[alignmentProperty]}px`,
    [oppositePosition]: `-${ARROW_SIZE - 2}px`
  };
}