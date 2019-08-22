import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Page_1 from '../../TabPages/Page_1';
import Page_2 from '../../TabPages/Page_2';

import { styles } from '../styles';

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

export default WrapperTabNav;