/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { Button, SHAPE as BUTTON_SHAPES, SIZE as BUTTON_SIZES, KIND as BUTTON_KINDS } from '../button/index.js';
import Search from '../icon/search.js';
import { Input, SIZE as INPUT_SIZES } from '../input/index.js';
import { Popover } from '../popover/index.js';
import { useStyletron } from '../styles/index.js';
import { Tag } from '../tag/index.js';
import FilterMenu from './filter-menu.js';
import { DataTable } from './data-table.js';
import { StatefulContainer } from './stateful-container.js';
import { LocaleContext } from '../locale/index.js';

function useResizeObserver(ref, callback) {
  React.useLayoutEffect(() => {
    if (typeof document !== 'undefined') {
      if (ref.current) {
        //$FlowFixMe
        const observer = new ResizeObserver(callback);
        observer.observe(ref.current);
        return () => observer.disconnect();
      }
    }
  }, [ref]);
}

function QueryInput(props) {
  const [css, theme] = useStyletron();
  const locale = React.useContext(LocaleContext);
  const [value, setValue] = React.useState('');
  React.useEffect(() => {
    const timeout = setTimeout(() => props.onChange(value), 250);
    return () => clearTimeout(timeout);
  }, [value]);
  return /*#__PURE__*/React.createElement("div", {
    className: css({
      width: '375px',
      marginBottom: theme.sizing.scale500
    })
  }, /*#__PURE__*/React.createElement(Input, {
    "aria-label": locale.datatable.searchAriaLabel,
    overrides: {
      Before: function Before() {
        return /*#__PURE__*/React.createElement("div", {
          className: css({
            alignItems: 'center',
            display: 'flex',
            paddingLeft: theme.sizing.scale500
          })
        }, /*#__PURE__*/React.createElement(Search, {
          size: "18px"
        }));
      }
    },
    size: INPUT_SIZES.compact,
    onChange: event => setValue(event.target.value),
    value: value,
    clearable: true
  }));
}

function FilterTag(props) {
  const [, theme] = useStyletron();
  const [isOpen, setIsOpen] = React.useState(false);
  const columnIndex = props.columns.findIndex(c => c.title === props.title);
  const column = props.columns[columnIndex];

  if (!column) {
    return null;
  }

  const data = props.rows.map(r => column.mapDataToValue(r.data));
  const Filter = column.renderFilter;
  return /*#__PURE__*/React.createElement(Popover, {
    focusLock: true,
    returnFocus: true,
    key: props.title,
    isOpen: isOpen,
    onClickOutside: () => setIsOpen(false),
    content: () => /*#__PURE__*/React.createElement(Filter, {
      close: () => setIsOpen(false),
      data: data,
      filterParams: props.filter,
      setFilter: filterParams => props.onFilterAdd(props.title, filterParams)
    })
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    onClick: () => setIsOpen(!isOpen),
    onActionClick: () => props.onFilterRemove(props.title),
    overrides: {
      Root: {
        style: {
          borderTopLeftRadius: '36px',
          borderTopRightRadius: '36px',
          borderBottomLeftRadius: '36px',
          borderBottomRightRadius: '36px',
          height: '36px',
          marginTop: null,
          marginBottom: theme.sizing.scale500
        }
      },
      Action: {
        style: {
          borderTopRightRadius: '36px',
          borderBottomRightRadius: '36px',
          height: '22px'
        }
      },
      Text: {
        style: {
          maxWidth: '160px'
        }
      }
    }
  }, props.title, ": ", props.filter.description)));
}

export function StatefulDataTable(props) {
  const [css, theme] = useStyletron();
  const headlineRef = React.useRef(null);
  const [headlineHeight, setHeadlineHeight] = React.useState(64);
  useResizeObserver(headlineRef, entries => {
    setHeadlineHeight(entries[0].contentRect.height);
  });
  const filterable = props.filterable === undefined ? true : props.filterable;
  const searchable = props.searchable === undefined ? true : props.searchable;
  return /*#__PURE__*/React.createElement(StatefulContainer, {
    batchActions: props.batchActions,
    columns: props.columns,
    initialFilters: props.initialFilters,
    initialSelectedRowIds: props.initialSelectedRowIds,
    initialSortIndex: props.initialSortIndex,
    initialSortDirection: props.initialSortDirection,
    onFilterAdd: props.onFilterAdd,
    onFilterRemove: props.onFilterRemove,
    onIncludedRowsChange: props.onIncludedRowsChange,
    onRowHighlightChange: props.onRowHighlightChange,
    onSelectionChange: props.onSelectionChange,
    resizableColumnWidths: props.resizableColumnWidths,
    rows: props.rows,
    rowActions: props.rowActions,
    rowHighlightIndex: props.rowHighlightIndex
  }, ({
    filters,
    onFilterAdd,
    onFilterRemove,
    onIncludedRowsChange,
    onRowHighlightChange,
    onSelectMany,
    onSelectNone,
    onSelectOne,
    onSort,
    onTextQueryChange,
    resizableColumnWidths,
    rowHighlightIndex,
    selectedRowIds,
    sortIndex,
    sortDirection,
    textQuery
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: css({
      height: `${headlineHeight}px`
    })
  }, /*#__PURE__*/React.createElement("div", {
    ref: headlineRef
  }, !selectedRowIds.size && /*#__PURE__*/React.createElement("div", {
    className: css({
      alignItems: 'end',
      display: 'flex',
      flexWrap: 'wrap',
      paddingTop: theme.sizing.scale500
    })
  }, searchable && /*#__PURE__*/React.createElement(QueryInput, {
    onChange: onTextQueryChange
  }), filterable && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FilterMenu, {
    columns: props.columns,
    filters: filters,
    rows: props.rows,
    onSetFilter: onFilterAdd
  }), Array.from(filters).map(([title, filter]) => /*#__PURE__*/React.createElement(FilterTag, {
    key: title,
    columns: props.columns,
    filter: filter,
    onFilterAdd: onFilterAdd,
    onFilterRemove: onFilterRemove,
    rows: props.rows,
    title: title
  })))), Boolean(selectedRowIds.size) && props.batchActions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: theme.sizing.scale400,
      paddingBottom: theme.sizing.scale400
    }
  }, props.batchActions.map(action => {
    function onClick(event) {
      action.onClick({
        clearSelection: onSelectNone,
        event,
        selection: props.rows.filter(r => selectedRowIds.has(r.id))
      });
    }

    if (action.renderIcon) {
      const Icon = action.renderIcon;
      return /*#__PURE__*/React.createElement(Button, {
        key: action.label,
        overrides: {
          BaseButton: {
            props: {
              'aria-label': action.label
            }
          }
        },
        onClick: onClick,
        kind: BUTTON_KINDS.tertiary,
        shape: BUTTON_SHAPES.round
      }, /*#__PURE__*/React.createElement(Icon, {
        size: 16
      }));
    }

    return /*#__PURE__*/React.createElement(Button, {
      key: action.label,
      onClick: onClick,
      kind: BUTTON_KINDS.secondary,
      size: BUTTON_SIZES.compact
    }, action.label);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: `calc(100% - ${headlineHeight}px)`
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    batchActions: props.batchActions,
    columns: props.columns,
    emptyMessage: props.emptyMessage,
    filters: filters,
    loading: props.loading,
    loadingMessage: props.loadingMessage,
    onIncludedRowsChange: onIncludedRowsChange,
    onRowHighlightChange: onRowHighlightChange,
    onSelectionChange: props.onSelectionChange,
    onSelectMany: onSelectMany,
    onSelectNone: onSelectNone,
    onSelectOne: onSelectOne,
    onSort: onSort,
    resizableColumnWidths: resizableColumnWidths,
    rowHighlightIndex: rowHighlightIndex,
    rows: props.rows,
    rowActions: props.rowActions,
    rowHeight: props.rowHeight,
    selectedRowIds: selectedRowIds,
    sortDirection: sortDirection,
    sortIndex: sortIndex,
    textQuery: textQuery
  }))));
}