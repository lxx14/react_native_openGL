import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComments, faUser, faAdjust } from '@fortawesome/free-solid-svg-icons';

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
        Chats: ChatsNavigator,
        OpenGL
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;

                switch (routeName) {
                    case 'Contacts':
                        return <FontAwesomeIcon icon={faUser} size={20} color={focused ? '#0099ff' : 'grey'} />;
                    case 'Chats':
                        return <FontAwesomeIcon icon={faComments} size={20} color={focused ? '#0099ff' : 'grey'} />;
                    case 'OpenGL':
                        return <FontAwesomeIcon icon={faAdjust} size={20} color={focused ? '#0099ff' : 'grey'} />
                    default: return 'not found';
                }
            }
        }),
        tabBarOptions: {
            style: {
                paddingBottom: 2,
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
                headerTitle: <TitleComponent {...props} />,
                headerStyle: {
                    backgroundColor: '#e6e6e6',
                },
            }
        },

    }
)

export default WrapperTabNav;