/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Avatar } from '../avatar/index.js';
import { getOverrides } from '../helpers/overrides.js';
import { LabelMedium, ParagraphSmall } from '../typography/index.js';
import { StyledUserProfileTileContainer, StyledUserProfilePictureContainer, StyledUserProfileInfoContainer } from './styled-components.js';
export default function UserProfileTile(props) {
  const {
    overrides = {},
    username,
    usernameSubtitle,
    userImgUrl
  } = props;
  const [UserProfileTileContainer, userProfileTileContainerProps] = getOverrides(overrides.UserProfileTileContainer, StyledUserProfileTileContainer);
  const [UserProfilePictureContainer, userProfilePictureContainerProps] = getOverrides(overrides.UserProfilePictureContainer, StyledUserProfilePictureContainer);
  const [UserProfileInfoContainer, userProfileInfoContainerProps] = getOverrides(overrides.UserProfileInfoContainer, StyledUserProfileInfoContainer);
  return (
    /*#__PURE__*/
    // Replace with a  profile tile renderer: renderUserProfileTile()
    React.createElement(UserProfileTileContainer, userProfileTileContainerProps, /*#__PURE__*/React.createElement(UserProfilePictureContainer, userProfilePictureContainerProps, /*#__PURE__*/React.createElement(Avatar, {
      name: username || '',
      src: userImgUrl,
      size: '48px'
    })), /*#__PURE__*/React.createElement(UserProfileInfoContainer, userProfileInfoContainerProps, /*#__PURE__*/React.createElement(LabelMedium, null, username), usernameSubtitle ? /*#__PURE__*/React.createElement(ParagraphSmall, {
      marginTop: "0",
      marginBottom: "0"
    }, usernameSubtitle) : null))
  );
}