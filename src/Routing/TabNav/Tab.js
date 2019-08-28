import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Contacts from '../../TabPages/Contacts/Contacts';
import Chats from '../../TabPages/Chats/Chats';
import Dialog from '../../TabPages/Components/Dialog/Dialog';
import OpenGL from '../../TabPages/OpenGL/OpenGL';
import TitleComponent from './Title';


const ChatsNavigator = createStackNavigator(
    {
        Chats,
        Dialog
    },
    {
        headerMode: 'none',
    }
)

const TabNavigator = createBottomTabNavigator(
    {
        Contacts,
        ChatsNavigator,
        OpenGL
    },
    {
        tabBarOptions: {
            style: {
                paddingBottom: 15,
            }
        }
    }
);

const WrapperTabNav = createStackNavigator(
    {
        TabNavigator
    },
    {
        defaultNavigationOptions: (props) => {

            return {
                headerTitleStyle: {
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                },
                headerTitle: <TitleComponent {...props} />
            }
        },
    }
)

export default WrapperTabNav;