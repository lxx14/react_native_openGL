import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import WraperTabNav from '../TabNav/Tab';
import DrawerMenu from './DrawerMenu';

const DrawerNavigator = createDrawerNavigator(
    {
        WraperTabNav,
    },{
        contentComponent: props => <DrawerMenu {...props} />
    },
);

export default DrawerNavigator;