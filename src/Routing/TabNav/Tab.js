import React from 'react';
import {Text} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Contacts from '../../TabPages/Contacts';
import Chats from '../../TabPages/Chats';
import OpenGL from '../../TabPages/OpenGL';

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

const mapStateToProps = (state) => ({
    title: state.title
});

export default WrapperTabNav;