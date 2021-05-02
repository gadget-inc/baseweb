function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverride, getOverrideProps, withOverrides } from '../helpers/overrides.js';
import { Action as StyledAction, Body as StyledBody, Contents as StyledContents, HeaderImage as StyledHeaderImage, Root as StyledRoot, Thumbnail as StyledThumbnail, Title as StyledTitle } from './styled-components.js';
export function hasThumbnail(props) {
  return !!props.thumbnail;
}

function Card(props) {
  const {
    overrides = {},
    action,
    children,
    hasThumbnail,
    headerImage,
    thumbnail: thumbnailSrc,
    title,
    ...restProps
  } = props;
  const {
    Action: ActionOverride,
    Body: BodyOverride,
    Contents: ContentsOverride,
    HeaderImage: HeaderImageOverride,
    Root: RootOverride,
    Thumbnail: ThumbnailOverride,
    Title: TitleOverride
  } = overrides;
  const Action = getOverride(ActionOverride) || StyledAction;
  const Body = getOverride(BodyOverride) || StyledBody;
  const Contents = getOverride(ContentsOverride) || StyledContents;
  const HeaderImage = getOverride(HeaderImageOverride) || StyledHeaderImage;
  const Root = getOverride(RootOverride) || StyledRoot;
  const Thumbnail = getOverride(ThumbnailOverride) || StyledThumbnail;
  const Title = getOverride(TitleOverride) || StyledTitle;
  const headerImageProps = typeof headerImage === 'string' ? {
    src: headerImage
  } : headerImage;
  const $hasThumbnail = hasThumbnail(props);
  return /*#__PURE__*/React.createElement(Root, _extends({
    "data-baseweb": "card"
  }, restProps, getOverrideProps(RootOverride)), headerImage && /*#__PURE__*/React.createElement(HeaderImage, _extends({}, headerImageProps, getOverrideProps(HeaderImageOverride))), /*#__PURE__*/React.createElement(Contents, getOverrideProps(ContentsOverride), thumbnailSrc && /*#__PURE__*/React.createElement(Thumbnail, _extends({
    src: thumbnailSrc
  }, getOverrideProps(ThumbnailOverride))), title && /*#__PURE__*/React.createElement(Title, _extends({
    $hasThumbnail: $hasThumbnail
  }, getOverrideProps(TitleOverride)), title), /*#__PURE__*/React.createElement(Body, getOverrideProps(BodyOverride), children), action && /*#__PURE__*/React.createElement(Action, getOverrideProps(ActionOverride), action)));
}

Card.defaultProps = {
  action: null,
  children: null,
  hasThumbnail,
  overrides: {}
}; //$FlowFixMe

export default withOverrides(Card, 'Card');