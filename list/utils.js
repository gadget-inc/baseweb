"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.artworkSizeToValue = artworkSizeToValue;

var _constants = require("./constants.js");

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
function artworkSizeToValue(artworkSize, isSublist) {
  if (isSublist) {
    switch (artworkSize) {
      case _constants.ARTWORK_SIZES.LARGE:
        return 24;

      case _constants.ARTWORK_SIZES.SMALL:
      default:
        return 16;
    }
  }

  switch (artworkSize) {
    case _constants.ARTWORK_SIZES.SMALL:
      return 16;

    case _constants.ARTWORK_SIZES.LARGE:
      return 36;

    case _constants.ARTWORK_SIZES.MEDIUM:
    default:
      return 24;
  }
}