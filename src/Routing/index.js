import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';

import Auth from '../Auth';
import InfoPage from '../InfoPage';
import Page_1 from '../TabPages/Page_1';
import Page_2 from '../TabPages/Page_2';

const TabNavigator = createBottomTabNavigator(
    {
        Page_1,
        Page_2
    },

)

const DrowerNavigator = createDrawerNavigator(
    {
        MainPage: TabNavigator,
        InfoPage: {
            screen: InfoPage,
            params: {
                item: 'test'
            }
        }
    },
);

const WrapperMainApp = createStackNavigator(
    {
        DrowerNavigator
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            const route = navigation.state.routes.find(item => item.routeName === "InfoPage");
            const changedItem = route.params.item;

            return changedItem !== 'test' ?
                { title: 'Title changed!' }:
                { title: 'Test title' }
        },
    }
)

const AuthStackNav = createStackNavigator(
    {
        Auth
    }
);

const RootStack = createSwitchNavigator(
    {
        AuthScreen: AuthStackNav,
        MainApp: WrapperMainApp
    },
    {
        initialRouteName: 'AuthScreen',
    }
);

export const AppContainer = createAppContainer(RootStack);