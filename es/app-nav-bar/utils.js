/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
export function defaultMapItemToNode(item) {
  if (process.env.NODE_ENV !== "production") {
    if (!item.label) {
      throw Error('There needs to be an unique item.label. You can implement a custom mapping with the mapItemToNode prop.');
    }
  }

  return item.label;
}

function defaultGetUniqueIdentifier(item) {
  if (process.env.NODE_ENV !== "production") {
    if (!item.label) {
      throw Error('There needs to be an unique item.label. You can implement a custom mapping with the getUniqueIdentifier argument to setItemActive.');
    }
  }

  return item.label;
}

export function setItemActive(items, item, getUniqueIdentifier = defaultGetUniqueIdentifier) {
  if (!items) {
    return items;
  }

  const nextItems = items.map(current => {
    if (getUniqueIdentifier(current) === getUniqueIdentifier(item)) {
      current.active = true;
    } else {
      current.active = false;
    }

    if (current.children) {
      current.children = setItemActive(current.children, item);

      if (current.children.some(child => child.active)) {
        current.active = true;
      }
    }

    return current;
  });
  return nextItems;
}