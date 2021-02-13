function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { ARTWORK_SIZES } from './constants.js';
import { StyledRoot, StyledContent, StyledEndEnhancerContainer, StyledArtworkContainer } from './styled-components.js';
import { artworkSizeToValue } from './utils.js';
const ListItem = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    overrides = {}
  } = props;
  const Artwork = props.artwork;
  const EndEnhancer = props.endEnhancer;
  const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
  const [ArtworkContainer, artworkContainerProps] = getOverrides(overrides.ArtworkContainer, StyledArtworkContainer);
  const [Content, contentProps] = getOverrides(overrides.Content, StyledContent);
  const [EndEnhancerContainer, endEnhancerContainerProps] = getOverrides(overrides.EndEnhancerContainer, StyledEndEnhancerContainer);
  const artworkSize = React.useMemo(() => {
    if (props.sublist) {
      let size = props.artworkSize || ARTWORK_SIZES.SMALL;

      if (props.artworkSize === ARTWORK_SIZES.MEDIUM) {
        size = ARTWORK_SIZES.SMALL;

        if (process.env.NODE_ENV !== "production") {
          console.warn('When ListItem sublist prop is true, artworkSize MEDIUM is aliased to SMALL');
        }
      }

      return size;
    } else {
      return props.artworkSize || ARTWORK_SIZES.MEDIUM;
    }
  }, [props.artworkSize, props.sublist]);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line flowtype/no-weak-types
    React.createElement(Root, _extends({
      ref: ref
    }, rootProps), Artwork && /*#__PURE__*/React.createElement(ArtworkContainer, _extends({
      $artworkSize: artworkSize,
      $sublist: Boolean(props.sublist)
    }, artworkContainerProps), /*#__PURE__*/React.createElement(Artwork, {
      size: typeof artworkSize === 'number' ? artworkSize : artworkSizeToValue(artworkSize, Boolean(props.sublist))
    })), /*#__PURE__*/React.createElement(Content, _extends({
      $mLeft: !Artwork,
      $sublist: !!props.sublist
    }, contentProps), props.children, EndEnhancer && /*#__PURE__*/React.createElement(EndEnhancerContainer, endEnhancerContainerProps, /*#__PURE__*/React.createElement(EndEnhancer, null))))
  );
});
ListItem.displayName = 'ListItem';
export default ListItem;