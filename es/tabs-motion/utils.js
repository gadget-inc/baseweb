/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { ORIENTATION, FILL } from './constants.js';
export const getTabId = (uid, key) => `tabs-${uid}-tab-${key}`;
export const getTabPanelId = (uid, key) => `tabs-${uid}-tabpanel-${key}`;
export const isHorizontal = orientation => orientation === ORIENTATION.horizontal;
export const isVertical = orientation => orientation === ORIENTATION.vertical;
export const isRTL = direction => direction === 'rtl';
export const isIntrinsic = fill => fill === FILL.intrinsic;
export const isFixed = fill => fill === FILL.fixed;