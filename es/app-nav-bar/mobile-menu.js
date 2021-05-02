function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Button } from '../button/index.js';
import { Drawer, ANCHOR } from '../drawer/index.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
import ArrowLeft from '../icon/arrow-left.js';
import MenuIcon from '../icon/menu.js';
import { MenuAdapter, ListItemLabel, ARTWORK_SIZES } from '../list/index.js';
import { StatefulMenu } from '../menu/index.js';
import { StyledSideMenuButton, StyledUserMenuProfileListItem } from './styled-components.js';
import UserProfileTile from './user-profile-tile.js';
import { defaultMapItemToNode } from './utils.js';
const USER_TITLE_ITEM = 'USER_TITLE_ITEM';
const USER_MENU_ITEM = 'USER_MENU_ITEM';
const PARENT_MENU_ITEM = 'PARENT_MENU_ITEM';
const MobileNavMenuItem = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    item,
    mapItemToNode = defaultMapItemToNode,
    overrides = {},
    ...restProps
  } = props;
  const [UserMenuProfileListItem, userMenuProfileListItemProps] = getOverrides(overrides.UserMenuProfileListItem, StyledUserMenuProfileListItem);

  if (item.PARENT_MENU_ITEM) {
    return /*#__PURE__*/React.createElement(MenuAdapter, _extends({}, restProps, {
      ref: ref,
      artwork: item.navExitIcon || ArrowLeft,
      artworkSize: ARTWORK_SIZES.LARGE
    }), /*#__PURE__*/React.createElement(ListItemLabel, null, item.label));
  }

  if (item.USER_TITLE_ITEM) {
    // Replace with a user menu item renderer
    return /*#__PURE__*/React.createElement(UserMenuProfileListItem, _extends({}, restProps, userMenuProfileListItemProps, {
      ref: ref
    }), /*#__PURE__*/React.createElement(UserProfileTile, item.item));
  }

  return (
    /*#__PURE__*/
    // Replace with a main menu item renderer
    React.createElement(MenuAdapter, _extends({}, restProps, {
      ref: ref,
      artwork: item.icon || null,
      artworkSize: ARTWORK_SIZES.LARGE
    }), /*#__PURE__*/React.createElement(ListItemLabel, null, mapItemToNode(item)))
  );
});
export default function MobileMenu(props) {
  const {
    mainItems = [],
    userItems = [],
    mapItemToNode,
    overrides = {},
    ...rest
  } = props;
  const items = [...(userItems.length ? [{
    item: { ...rest
    },
    label: props.username,
    [USER_TITLE_ITEM]: true,
    children: userItems.map(item => {
      return { ...item,
        [USER_MENU_ITEM]: true
      };
    })
  }] : []), ...mainItems];
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentNavItems, setCurrentNavItems] = React.useState(items);
  const [ancestorNavItems, setAncestorNavItems] = React.useState([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [SideMenuButton, sideMenuButtonProps] = getOverrides(overrides.SideMenuButton, Button); // $FlowFixMe

  sideMenuButtonProps.overrides = mergeOverrides({
    BaseButton: {
      component: StyledSideMenuButton
    }
  }, // $FlowFixMe
  sideMenuButtonProps.overrides);
  const [MobileDrawer, drawerProps] = getOverrides(overrides.MobileDrawer, Drawer); // $FlowFixMe

  drawerProps.overrides = mergeOverrides({
    DrawerBody: {
      style: ({
        $theme
      }) => {
        return {
          marginTop: '0px',
          marginBottom: '0px',
          marginLeft: '0px',
          marginRight: '0px'
        };
      }
    },
    // Removes the close icon from the drawer
    Close: () => null
  }, // $FlowFixMe
  drawerProps.overrides);
  const [MobileMenu, menuProps] = getOverrides(overrides.MobileMenu, StatefulMenu); // $FlowFixMe

  menuProps.overrides = mergeOverrides({
    List: {
      style: {
        paddingTop: '0',
        paddingBottom: '0',
        minHeight: '100vh',
        boxShadow: 'none'
      }
    },

    ListItem(listItemProps) {
      return /*#__PURE__*/React.createElement(MobileNavMenuItem, _extends({}, listItemProps, {
        mapItemToNode: mapItemToNode,
        overrides: overrides
      }));
    }

  }, // $FlowFixMe
  menuProps.overrides);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SideMenuButton, _extends({
    onClick: toggleMenu
  }, sideMenuButtonProps), /*#__PURE__*/React.createElement(MenuIcon, {
    size: '24px'
  })), /*#__PURE__*/React.createElement(MobileDrawer, _extends({
    anchor: ANCHOR.left,
    isOpen: isOpen,
    onClose: toggleMenu,
    size: '75%'
  }, drawerProps), /*#__PURE__*/React.createElement(MobileMenu, _extends({
    items: currentNavItems,
    onItemSelect: ({
      item
    }) => {
      if (item.PARENT_MENU_ITEM) {
        // Remove current parent item selected to return to
        // from the ancestors list (`ancestorNavItems[ancestorArrLength - 1]`)
        const updatedAncestorNavItems = ancestorNavItems.slice(0, ancestorNavItems.length - 1);
        const isTopLevel = !updatedAncestorNavItems.length;

        if (isTopLevel) {
          // Set to the initial `navItems` value
          setCurrentNavItems(items);
        } else {
          const newParentItem = { ...updatedAncestorNavItems[updatedAncestorNavItems.length - 1],
            [PARENT_MENU_ITEM]: true
          };
          setCurrentNavItems([newParentItem, ...newParentItem.children]);
        }

        setAncestorNavItems(updatedAncestorNavItems);
        return;
      }

      if (item.USER_MENU_ITEM && props.onUserItemSelect) {
        props.onUserItemSelect(item);
      } else if (!item.USER_TITLE_ITEM && props.onMainItemSelect) {
        props.onMainItemSelect(item);
      }

      if (item.children && item.children.length) {
        const parentItem = { ...item,
          [PARENT_MENU_ITEM]: true
        };
        setAncestorNavItems([...ancestorNavItems, item]);
        setCurrentNavItems([parentItem, ...item.children]);
        return;
      }

      toggleMenu();
    }
  }, menuProps))));
}