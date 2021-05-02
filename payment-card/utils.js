"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCaretPosition = exports.sanitizeNumber = exports.addGaps = void 0;

var valid = _interopRequireWildcard(require("card-validator"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var addGaps = function addGaps(gaps, value) {
  return gaps.reduce(function (prev, gap, index) {
    return "".concat(prev.slice(0, gap + index), " ").concat(prev.slice(gap + index)).trim();
  }, "".concat(value));
};

exports.addGaps = addGaps;

var sanitizeNumber = function sanitizeNumber(input) {
  var number = input.replace(/[^0-9]/gi, '');
  var validatedValue = valid.number(number);

  if (validatedValue.card && Array.isArray(validatedValue.card.lengths)) {
    return number.slice(0, validatedValue.card.lengths[validatedValue.card.lengths.length - 1]);
  } // CC number NEVER can have more than 19 digits


  return number.slice(0, 19);
};

exports.sanitizeNumber = sanitizeNumber;

var getCaretPosition = function getCaretPosition(value, prevValue, position) {
  var cleanValue = sanitizeNumber(value);
  var validatedValue = valid.number(cleanValue); // skipping over a gap

  if (validatedValue.card && Array.isArray(validatedValue.card.gaps)) {
    var gaps = validatedValue.card.gaps;
    var valueWithGaps = addGaps(gaps, cleanValue);

    if (cleanValue.length > prevValue.length && valueWithGaps[position - 1] === ' ') {
      return [position + 1, cleanValue];
    }
  } // deleting a gap


  var prevValidatedValue = valid.number(prevValue);

  if (prevValidatedValue.card && Array.isArray(prevValidatedValue.card.gaps)) {
    var _gaps = prevValidatedValue.card.gaps;

    var _valueWithGaps = addGaps(_gaps, prevValue);

    if (prevValue === cleanValue && _valueWithGaps.length > value.length) {
      var newValue = _valueWithGaps.slice(0, position - 1) + _valueWithGaps.slice(position);

      return [position - 1, sanitizeNumber(newValue)];
    }
  } // change without crossing a gap


  return [position, cleanValue];
};

exports.getCaretPosition = getCaretPosition;