function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { StyledRoot, StyledStar } from './styled-components.js';
import { getOverrides, withOverrides } from '../helpers/overrides.js';
import { ARROW_UP, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT } from './utils.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';

class StarRating extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isFocusVisible: false,
      previewIndex: undefined
    });

    _defineProperty(this, "selectItem", value => {
      const {
        onChange
      } = this.props;
      onChange && onChange({
        value
      });
      this.setState({
        previewIndex: undefined
      });
    });

    _defineProperty(this, "updatePreview", previewIndex => {
      this.setState({
        previewIndex
      });
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

    _defineProperty(this, "renderRatingContents", () => {
      const {
        overrides = {},
        value = -1,
        numItems,
        size = 22,
        readOnly = false
      } = this.props;
      const {
        previewIndex
      } = this.state;
      const [Star, starProps] = getOverrides(overrides.Item, StyledStar);
      const ratings = [];
      const refs = [{
        current: null
      }];

      for (let x = 1; x <= numItems; x++) {
        const isFocusable = x === value || value < 1 && x === 1;
        const starRef = /*#__PURE__*/React.createRef();
        refs.push(starRef);
        ratings.push( /*#__PURE__*/React.createElement(Star, _extends({
          key: x,
          role: "radio" // eslint-disable-next-line flowtype/no-weak-types
          ,
          ref: starRef,
          tabIndex: isFocusable ? '0' : '-1',
          "aria-setsize": numItems,
          "aria-checked": x <= value,
          "aria-posinset": x,
          "aria-disabled": readOnly,
          $size: size,
          $index: x,
          $isActive: previewIndex !== undefined ? x <= previewIndex : x <= value,
          $isPartialActive: previewIndex !== undefined ? false : x <= value + 0.5,
          $isSelected: x === previewIndex,
          $isFocusVisible: this.state.isFocusVisible && isFocusable,
          $isReadOnly: readOnly,
          onClick: () => {
            if (readOnly) {
              return;
            }

            this.selectItem(x);
          },
          onKeyDown: e => {
            if (readOnly) {
              return;
            }

            if (e.keyCode === ARROW_UP || e.keyCode === ARROW_LEFT) {
              e.preventDefault && e.preventDefault();
              const prevIndex = value - 1 < 1 ? numItems : value - 1;
              this.selectItem(prevIndex);
              refs[prevIndex].current && refs[prevIndex].current.focus();
            }

            if (e.keyCode === ARROW_DOWN || e.keyCode === ARROW_RIGHT) {
              e.preventDefault && e.preventDefault();
              const nextIndex = value + 1 > numItems ? 1 : value + 1;
              this.selectItem(nextIndex);
              refs[nextIndex].current && refs[nextIndex].current.focus();
            }
          },
          onMouseOver: () => {
            if (readOnly) {
              return;
            }

            this.updatePreview(x);
          }
        }, starProps, {
          onFocus: forkFocus(starProps, this.handleFocus),
          onBlur: forkBlur(starProps, this.handleBlur)
        })));
      }

      return ratings;
    });
  }

  render() {
    const {
      overrides = {}
    } = this.props;
    const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
    return /*#__PURE__*/React.createElement(Root, _extends({
      "data-baseweb": "star-rating",
      role: "radiogroup",
      onBlur: () => this.updatePreview(undefined),
      onMouseLeave: () => this.updatePreview(undefined)
    }, rootProps), this.renderRatingContents());
  }

} //$FlowFixMe


_defineProperty(StarRating, "defaultProps", {
  overrides: {},
  numItems: 5,
  readOnly: false
});

export default withOverrides(StarRating, 'StarRating');