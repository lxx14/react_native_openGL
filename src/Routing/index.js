import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Auth from '../Auth';
import InfoPage from '../InfoPage';
import Page_1 from '../TabPages/Page_1';
import Page_2 from '../TabPages/Page_2';

import DrawerMenu from './DrawerMenu';

import {styles} from './styles';

const TabNavigator = createBottomTabNavigator(
    {
        Page_1,
        Page_2
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
        defaultNavigationOptions: ({ navigation }) => {
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
                title: 'Main Flow Title'
            }
        },
    }
)

const infoPageNavigator = createStackNavigator(
    {
        InfoPage: {
            screen: InfoPage,
            params: {
                item: 'test'
            },
        },
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            const newTitle = navigation.state.params.item;
            return {
                headerTitleStyle: {
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                },
                title: newTitle ? newTitle : 'Info Title'
            }
        },
    }
)

const DrawerNavigator = createDrawerNavigator(
    {
        WrapperTabNav,
    },
    {
        contentComponent: props => <DrawerMenu {...props} />,
    },
);

const AppWraper = createStackNavigator(

    {
        DrawerNavigator,
        infoPageNavigator
    },
    {
        headerMode: 'none',
    }
)

const AuthStackNav = createStackNavigator(
    {
        Auth
    },
    {
        headerMode: 'none',
    }
);

const RootStack = createSwitchNavigator(
    {
        AuthScreen: AuthStackNav,
        MainApp: AppWraper
    },
    {
        initialRouteName: 'AuthScreen',
    }
);

export const AppContainer = createAppContainer(RootStack);