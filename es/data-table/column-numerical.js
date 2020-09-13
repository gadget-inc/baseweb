function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Button, SIZE } from '../button/index.js';
import { ButtonGroup, MODE } from '../button-group/index.js';
import { Input, SIZE as INPUT_SIZE } from '../input/index.js';
import { useStyletron } from '../styles/index.js';
import { Paragraph4 } from '../typography/index.js';
import CellShell from './cell-shell.js';
import { COLUMNS, NUMERICAL_FORMATS, NUMERICAL_OPERATIONS } from './constants.js';
import FilterShell from './filter-shell.js';

function roundToFixed(value, precision) {
  const k = Math.pow(10, precision);
  return Math.round(value * k) / k;
}

function format(value, options) {
  if (typeof options.format === 'function') {
    return options.format(value);
  }

  let formatted = value.toString();

  switch (options.format) {
    case NUMERICAL_FORMATS.ACCOUNTING:
      {
        const abs = Math.abs(value);

        if (value < 0) {
          formatted = `($${roundToFixed(abs, options.precision)})`;
          break;
        }

        formatted = `$${roundToFixed(abs, options.precision)}`;
        break;
      }

    case NUMERICAL_FORMATS.PERCENTAGE:
      {
        formatted = `${roundToFixed(value, options.precision)}%`;
        break;
      }

    case NUMERICAL_FORMATS.DEFAULT:
    default:
      formatted = roundToFixed(value, options.precision);
      break;
  }

  return formatted;
}

function validateInput(input) {
  return Boolean(parseFloat(input)) || input === '' || input === '-';
}

function filterParamsToInitialState(filterParams) {
  if (filterParams) {
    if (filterParams.comparisons.length > 1) {
      if (filterParams.comparisons[0].operation === NUMERICAL_OPERATIONS.LT && filterParams.comparisons[1].operation === NUMERICAL_OPERATIONS.GT) {
        return {
          exclude: !filterParams.exclude,
          comparatorIndex: 0,
          operatorIndex: 4,
          right: filterParams.comparisons[1].value.toString(),
          left: filterParams.comparisons[0].value.toString()
        };
      }
    } else {
      const comparison = filterParams.comparisons[0];

      if (comparison.operation === NUMERICAL_OPERATIONS.LT) {
        return {
          exclude: filterParams.exclude,
          comparatorIndex: 0,
          operatorIndex: 0,
          left: '',
          right: comparison.value.toString()
        };
      } else if (comparison.operation === NUMERICAL_OPERATIONS.GT) {
        return {
          exclude: filterParams.exclude,
          comparatorIndex: 0,
          operatorIndex: 1,
          left: comparison.value.toString(),
          right: ''
        };
      } else if (comparison.operation === NUMERICAL_OPERATIONS.LTE) {
        return {
          exclude: filterParams.exclude,
          comparatorIndex: 0,
          operatorIndex: 2,
          left: '',
          right: comparison.value.toString()
        };
      } else if (comparison.operation === NUMERICAL_OPERATIONS.GTE) {
        return {
          exclude: filterParams.exclude,
          comparatorIndex: 0,
          operatorIndex: 3,
          left: comparison.value.toString(),
          right: ''
        };
      } else if (comparison.operation === NUMERICAL_OPERATIONS.EQ) {
        return {
          exclude: filterParams.exclude,
          comparatorIndex: 1,
          operatorIndex: 0,
          left: comparison.value.toString(),
          right: ''
        };
      }
    }
  }

  return {
    exclude: false,
    comparatorIndex: 0,
    operatorIndex: 0,
    left: '',
    right: ''
  };
}

function NumericalFilter(props) {
  const [css, theme] = useStyletron();
  const initialState = filterParamsToInitialState(props.filterParams);
  const [exclude, setExclude] = React.useState(initialState.exclude);
  const [comparatorIndex, setComparatorIndex] = React.useState(initialState.comparatorIndex);
  const [operatorIndex, setOperatorIndex] = React.useState(initialState.operatorIndex);
  const [left, setLeft] = React.useState(initialState.left);
  const [right, setRight] = React.useState(initialState.right);
  const isRange = comparatorIndex === 0;
  const min = React.useMemo(() => Math.min(...props.data), [props.data]);
  const max = React.useMemo(() => Math.max(...props.data), [props.data]);
  React.useEffect(() => {
    if (!left) {
      setLeft(min.toString());
    }

    if (!right) {
      setRight(max.toString());
    }
  }, []);
  const [leftDisabled, rightDisabled] = React.useMemo(() => {
    if (!isRange) return [false, false];

    switch (operatorIndex) {
      case 4:
        return [false, false];

      case 0:
      case 2:
        return [true, false];

      case 1:
      case 3:
        return [false, true];

      default:
        return [true, true];
    }
  }, [operatorIndex, isRange]);
  const leftInputRef = React.useRef(null);
  const rightInputRef = React.useRef(null);
  React.useEffect(() => {
    if (!leftDisabled && leftInputRef.current) {
      leftInputRef.current.focus({
        preventScroll: true
      });
    } else if (!rightDisabled && rightInputRef.current) {
      rightInputRef.current.focus({
        preventScroll: true
      });
    }
  }, [leftDisabled, rightDisabled, comparatorIndex]);
  React.useEffect(() => {
    switch (operatorIndex) {
      case 4:
      default:
        break;

      case 1:
      case 3:
        setRight(max.toString());
        break;

      case 0:
      case 2:
        setLeft(min.toString());
        break;
    }
  }, [operatorIndex]);
  return React.createElement(FilterShell, {
    exclude: exclude,
    onExcludeChange: () => setExclude(!exclude),
    onApply: () => {
      if (isRange) {
        switch (operatorIndex) {
          case 0:
            {
              const value = parseFloat(right);
              const operation = NUMERICAL_OPERATIONS.LT;
              props.setFilter({
                comparisons: [{
                  value,
                  operation
                }],
                description: `${operation} ${value}`,
                exclude
              });
              break;
            }

          case 1:
            {
              const value = parseFloat(left);
              const operation = NUMERICAL_OPERATIONS.GT;
              props.setFilter({
                comparisons: [{
                  value,
                  operation
                }],
                description: `${operation} ${value}`,
                exclude
              });
              break;
            }

          case 2:
            {
              const value = parseFloat(right);
              const operation = NUMERICAL_OPERATIONS.LTE;
              props.setFilter({
                comparisons: [{
                  value,
                  operation
                }],
                description: `${operation} ${value}`,
                exclude
              });
              break;
            }

          case 3:
            {
              const value = parseFloat(left);
              const operation = NUMERICAL_OPERATIONS.GTE;
              props.setFilter({
                comparisons: [{
                  value,
                  operation
                }],
                description: `${operation} ${value}`,
                exclude
              });
              break;
            }

          case 4:
            {
              // 'between' case is interesting since if we want less than 10 plus greater than 5
              // comparators, the filter will include _all_ numbers.
              const leftValue = parseFloat(left);
              const rightValue = parseFloat(right);
              props.setFilter({
                comparisons: [{
                  value: leftValue,
                  operation: NUMERICAL_OPERATIONS.LT
                }, {
                  value: rightValue,
                  operation: NUMERICAL_OPERATIONS.GT
                }],
                description: `${NUMERICAL_OPERATIONS.GTE} ${leftValue} & ${NUMERICAL_OPERATIONS.LTE} ${rightValue}`,
                exclude: !exclude
              });
              break;
            }

          default:
            break;
        }
      } else {
        const value = parseFloat(left);
        const operation = NUMERICAL_OPERATIONS.EQ;
        props.setFilter({
          comparisons: [{
            value,
            operation
          }],
          description: `${operation} ${value}`,
          exclude
        });
      }

      props.close();
    }
  }, React.createElement(ButtonGroup, {
    size: SIZE.compact,
    mode: MODE.radio,
    selected: comparatorIndex,
    onClick: (_, index) => setComparatorIndex(index),
    overrides: {
      Root: {
        style: ({
          $theme
        }) => ({
          marginBottom: $theme.sizing.scale300
        })
      }
    }
  }, React.createElement(Button, {
    type: "button",
    overrides: {
      BaseButton: {
        style: {
          width: '100%'
        }
      }
    }
  }, "Range"), React.createElement(Button, {
    type: "button",
    overrides: {
      BaseButton: {
        style: {
          width: '100%'
        }
      }
    }
  }, "Single Value")), isRange && React.createElement(ButtonGroup, {
    size: SIZE.compact,
    mode: MODE.radio,
    selected: operatorIndex,
    onClick: (_, index) => setOperatorIndex(index),
    overrides: {
      Root: {
        style: ({
          $theme
        }) => ({
          marginBottom: $theme.sizing.scale500
        })
      }
    }
  }, React.createElement(Button, {
    type: "button",
    overrides: {
      BaseButton: {
        style: {
          width: '100%'
        }
      }
    }
  }, "<"), React.createElement(Button, {
    type: "button",
    overrides: {
      BaseButton: {
        style: {
          width: '100%'
        }
      }
    }
  }, ">"), React.createElement(Button, {
    type: "button",
    overrides: {
      BaseButton: {
        style: {
          width: '100%'
        }
      }
    }
  }, "\u2264"), React.createElement(Button, {
    type: "button",
    overrides: {
      BaseButton: {
        style: {
          width: '100%'
        }
      }
    }
  }, "\u2265"), React.createElement(Button, {
    type: "button",
    overrides: {
      BaseButton: {
        style: {
          width: '100%'
        }
      }
    }
  }, "=")), React.createElement("div", {
    className: css({
      display: 'flex',
      justifyContent: 'space-between',
      marginLeft: theme.sizing.scale300,
      marginRight: theme.sizing.scale300
    })
  }, React.createElement(Paragraph4, null, format(min, props.options)), ' ', React.createElement(Paragraph4, null, format(max, props.options))), React.createElement("div", {
    className: css({
      display: 'flex',
      justifyContent: 'space-between'
    })
  }, React.createElement(Input, {
    size: INPUT_SIZE.compact,
    overrides: {
      Root: {
        style: {
          width: isRange ? '152px' : '100%'
        }
      }
    },
    disabled: leftDisabled,
    inputRef: leftInputRef,
    value: left,
    onChange: event => {
      if (validateInput(event.target.value)) {
        setLeft(event.target.value);
      }
    }
  }), isRange && React.createElement(Input, {
    size: INPUT_SIZE.compact,
    overrides: {
      Root: {
        style: {
          width: '152px'
        }
      }
    },
    disabled: rightDisabled,
    inputRef: rightInputRef,
    value: right,
    onChange: event => {
      if (validateInput(event.target.value)) {
        setRight(event.target.value);
      }
    }
  })));
}

const NumericalCell = React.forwardRef((props, ref) => {
  const [css, theme] = useStyletron();
  return React.createElement(CellShell, {
    ref: ref,
    isMeasured: props.isMeasured,
    isSelected: props.isSelected,
    onSelect: props.onSelect
  }, React.createElement("div", {
    className: css({ ...theme.typography.MonoParagraphXSmall,
      display: 'flex',
      justifyContent: theme.direction !== 'rtl' ? 'flex-end' : 'flex-start',
      color: props.highlight(props.value) ? theme.colors.contentNegative : null,
      width: '100%'
    })
  }, format(props.value, {
    format: props.format,
    precision: props.precision
  })));
});
NumericalCell.displayName = 'NumericalCell';
const defaultOptions = {
  title: '',
  sortable: true,
  filterable: true,
  format: NUMERICAL_FORMATS.DEFAULT,
  highlight: n => false,
  precision: 0
};

function NumericalColumn(options) {
  const normalizedOptions = { ...defaultOptions,
    ...options
  };

  if (normalizedOptions.format !== NUMERICAL_FORMATS.DEFAULT && (options.precision === null || options.precision === undefined)) {
    normalizedOptions.precision = 2;
  }

  if (normalizedOptions.format === NUMERICAL_FORMATS.ACCOUNTING && (options.highlight === null || options.highlight === undefined)) {
    normalizedOptions.highlight = n => n < 0;
  }

  return {
    kind: COLUMNS.NUMERICAL,
    buildFilter: function (params) {
      return function (data) {
        const included = params.comparisons.some(c => {
          const left = roundToFixed(data, normalizedOptions.precision);
          const right = roundToFixed(c.value, normalizedOptions.precision);

          switch (c.operation) {
            case NUMERICAL_OPERATIONS.EQ:
              return left === right;

            case NUMERICAL_OPERATIONS.GT:
              return left > right;

            case NUMERICAL_OPERATIONS.GTE:
              return left >= right;

            case NUMERICAL_OPERATIONS.LT:
              return left < right;

            case NUMERICAL_OPERATIONS.LTE:
              return left <= right;

            default:
              return true;
          }
        });
        return params.exclude ? !included : included;
      };
    },
    filterable: normalizedOptions.filterable,
    mapDataToValue: options.mapDataToValue,
    maxWidth: options.maxWidth,
    minWidth: options.minWidth,
    renderCell: React.forwardRef((props, ref) => {
      return React.createElement(NumericalCell, {
        ref: ref,
        isMeasured: props.isMeasured,
        isSelected: props.isSelected,
        onSelect: props.onSelect,
        value: props.value,
        format: normalizedOptions.format,
        highlight: normalizedOptions.highlight,
        precision: normalizedOptions.precision
      });
    }),
    renderFilter: function RenderNumericalFilter(props) {
      return React.createElement(NumericalFilter, _extends({}, props, {
        options: normalizedOptions
      }));
    },
    sortable: normalizedOptions.sortable,
    sortFn: function (a, b) {
      return a - b;
    },
    title: normalizedOptions.title
  };
}

export default NumericalColumn;