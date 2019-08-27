import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Contacts from '../../TabPages/Contacts/Contacts';
import Chats from '../../TabPages/Chats/Chats';
import OpenGL from '../../TabPages/OpenGL/OpenGL';

import TitleComponent from './Title';

import { styles } from '../styles';

const TabNavigator = createBottomTabNavigator(
    {
        Contacts,
        Chats,
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
            const { navigation } = props;
            const openDrower = () => {
                navigation.toggleDrawer();
            }
            return {
                headerLeft: (
                    <TouchableWithoutFeedback onPress={openDrower}>
                        <FontAwesomeIcon icon={faBars} size={30} style={styles.icon} />
                    </TouchableWithoutFeedback>
                ),
                headerTitleStyle: {
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    paddingRight: 50
                },
                headerTitle: <TitleComponent />
            }
        },
    }
)

export default WrapperTabNav;