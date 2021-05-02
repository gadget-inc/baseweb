/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { useStyletron } from '../styles/index.js';
import { CategoricalFilter } from './column-categorical.js';
import Column from './column.js';
import { COLUMNS } from './constants.js';
import { LocaleContext } from '../locale/index.js';

function mapSelection(selection, transform) {
  const coercedSelection = new Set();
  selection.forEach(item => coercedSelection.add(transform(item)));
  return coercedSelection;
}

function BooleanFilter(props) {
  const locale = React.useContext(LocaleContext);
  let selectionString = new Set();

  if (props.filterParams && props.filterParams.selection) {
    selectionString = mapSelection(props.filterParams.selection, i => i ? locale.datatable.booleanFilterTrue : locale.datatable.booleanFilterFalse);
  }

  return /*#__PURE__*/React.createElement(CategoricalFilter, {
    close: props.close,
    data: [locale.datatable.booleanFilterTrue, locale.datatable.booleanFilterFalse],
    filterParams: props.filterParams ? {
      selection: selectionString,
      description: props.filterParams.description,
      exclude: props.filterParams.exclude
    } : undefined,
    setFilter: params => {
      props.setFilter({
        selection: mapSelection(params.selection, i => i === locale.datatable.booleanFilterTrue),
        exclude: params.exclude,
        description: params.description
      });
    }
  });
}

function BooleanCell(props) {
  const [css, theme] = useStyletron();
  const locale = React.useContext(LocaleContext);
  return /*#__PURE__*/React.createElement("div", {
    className: css({
      textAlign: props.value ? 'right' : 'left',
      minWidth: theme.sizing.scale1400,
      width: '100%'
    })
  }, props.value ? locale.datatable.booleanColumnTrueShort : locale.datatable.booleanColumnFalseShort);
}

function BooleanColumn(options) {
  return Column({
    kind: COLUMNS.BOOLEAN,
    buildFilter: function (params) {
      return function (data) {
        const included = params.selection.has(data);
        return params.exclude ? !included : included;
      };
    },
    cellBlockAlign: options.cellBlockAlign,
    fillWidth: options.fillWidth,
    filterable: options.filterable === undefined ? true : options.filterable,
    mapDataToValue: options.mapDataToValue,
    maxWidth: options.maxWidth,
    minWidth: options.minWidth,
    renderCell: BooleanCell,
    renderFilter: BooleanFilter,
    sortable: options.sortable === undefined ? true : options.sortable,
    sortFn: function (a, b) {
      if (a === b) return 0;
      return a ? -1 : 1;
    },
    title: options.title
  });
}

export default BooleanColumn;