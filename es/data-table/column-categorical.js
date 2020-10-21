function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Button, SIZE, KIND } from '../button/index.js';
import { ButtonGroup } from '../button-group/index.js';
import { Checkbox, StyledLabel } from '../checkbox/index.js';
import Search from '../icon/search.js';
import { Input, SIZE as INPUT_SIZE } from '../input/index.js';
import { useStyletron, withStyle } from '../styles/index.js';
import { Label3 } from '../typography/index.js';
import CellShell from './cell-shell.js';
import { COLUMNS } from './constants.js';
import { LocaleContext } from '../locale/index.js';
import FilterShell from './filter-shell.js';
import { matchesQuery, splitByQuery, HighlightCellText } from './text-search.js';

function InputBefore() {
  const [css, theme] = useStyletron();
  return React.createElement("div", {
    className: css({
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.sizing.scale500
    })
  }, React.createElement(Search, {
    size: "18px"
  }));
}

function FilterQuickControls(props) {
  const locale = React.useContext(LocaleContext);
  return React.createElement(ButtonGroup, {
    size: SIZE.mini,
    kind: KIND.minimal
  }, React.createElement(Button, {
    type: "button",
    onClick: props.onSelectAll
  }, locale.datatable.categoricalFilterSelectAll), React.createElement(Button, {
    type: "button",
    onClick: props.onClearSelection
  }, locale.datatable.categoricalFilterSelectClear));
}

const StyledHighlightLabel = withStyle(StyledLabel, props => {
  const style = {
    whiteSpace: 'pre',
    color: props.$isActive ? props.$theme.colors.contentPrimary : props.$theme.colors.contentSecondary
  };

  if (!props.$isFirst) {
    // $FlowFixMe
    style.paddingLeft = null;
  }

  return style;
});
StyledHighlightLabel.displayName = "StyledHighlightLabel";

function HighlightCheckboxLabel(props) {
  const {
    children,
    ...restProps
  } = props;

  if (!props.query) {
    return React.createElement(StyledLabel, restProps, children);
  }

  return splitByQuery(children, props.query).map((el, i) => {
    if (matchesQuery(el, props.query)) {
      return React.createElement(StyledHighlightLabel, _extends({}, restProps, {
        key: i,
        $isFirst: !i,
        $isActive: true
      }), el);
    }

    return React.createElement(StyledHighlightLabel, _extends({}, restProps, {
      key: i,
      $isFirst: !i
    }), el);
  });
}

export function CategoricalFilter(props) {
  const [css, theme] = useStyletron();
  const locale = React.useContext(LocaleContext);
  const [selection, setSelection] = React.useState(props.filterParams ? props.filterParams.selection : new Set());
  const [exclude, setExclude] = React.useState(props.filterParams ? props.filterParams.exclude : false);
  const [query, setQuery] = React.useState('');
  const categories = React.useMemo(() => {
    return props.data.reduce((set, category) => set.add(category), new Set());
  }, [props.data]);
  const checkboxStyles = css({
    marginBottom: theme.sizing.scale200
  });
  const showQuery = Boolean(categories.size >= 10);
  const filteredCategories = Array.from(categories, c => c).filter(c => matchesQuery(c, query));
  return React.createElement(FilterShell, {
    exclude: exclude,
    onExcludeChange: () => setExclude(!exclude),
    onApply: () => {
      props.setFilter({
        description: Array.from(selection).join(', '),
        exclude,
        selection
      });
      props.close();
    }
  }, showQuery && React.createElement(Input, {
    size: INPUT_SIZE.compact,
    overrides: {
      Before: InputBefore
    },
    value: query,
    onChange: event => setQuery(event.target.value),
    clearable: true
  }), !query && React.createElement("div", {
    style: {
      marginTop: showQuery ? theme.sizing.scale600 : null
    }
  }, React.createElement(FilterQuickControls, {
    onSelectAll: () => {
      categories.forEach(c => selection.add(c));
      setSelection(new Set(selection));
    },
    onClearSelection: () => {
      setSelection(new Set());
    }
  })), React.createElement("div", {
    className: css({
      maxHeight: '256px',
      overflowY: 'auto',
      marginTop: theme.sizing.scale600
    })
  }, !filteredCategories.length && React.createElement(Label3, null, locale.datatable.categoricalFilterEmpty), Boolean(filteredCategories.length) && filteredCategories.map((category, i) => React.createElement("div", {
    className: checkboxStyles,
    key: i
  }, React.createElement(Checkbox, {
    checked: selection.has(category),
    onChange: () => {
      if (selection.has(category)) {
        selection.delete(category);
      } else {
        selection.add(category);
      }

      setSelection(new Set(selection));
    },
    overrides: {
      Label: {
        component: HighlightCheckboxLabel,
        props: {
          query
        }
      }
    }
  }, category)))));
}
const CategoricalCell = React.forwardRef((props, ref) => {
  const [css] = useStyletron();
  return React.createElement(CellShell, {
    ref: ref,
    isMeasured: props.isMeasured,
    isSelected: props.isSelected,
    onSelect: props.onSelect
  }, React.createElement("div", {
    className: css({
      display: '-webkit-box',
      WebkitLineClamp: 1,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    })
  }, props.textQuery ? React.createElement(HighlightCellText, {
    text: props.value,
    query: props.textQuery
  }) : props.value));
});
CategoricalCell.displayName = 'CategoricalCell';

function CategoricalColumn(options) {
  return {
    kind: COLUMNS.CATEGORICAL,
    buildFilter: function (params) {
      return function (data) {
        const included = params.selection.has(data);
        return params.exclude ? !included : included;
      };
    },
    textQueryFilter: function (textQuery, data) {
      return data.toLocaleLowerCase().includes(textQuery.toLowerCase());
    },
    filterable: options.filterable === undefined ? true : options.filterable,
    mapDataToValue: options.mapDataToValue,
    maxWidth: options.maxWidth,
    minWidth: options.minWidth,
    renderCell: CategoricalCell,
    renderFilter: CategoricalFilter,
    sortable: options.sortable === undefined ? true : options.sortable,
    sortFn: function (a, b) {
      return a.localeCompare(b);
    },
    title: options.title
  };
}

export default CategoricalColumn;