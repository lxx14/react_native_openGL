import { Easing, Animated } from 'react-native';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import DrawerNavigator from './DrawerNav/Drawer';
import InfoPageStackNav from './StackNav/StackInfoPage';
import AuthPageStackNav from './StackNav/StackAuthPage';

const AppWraper = createStackNavigator(

    {
        DrawerNavigator,
        InfoPageStackNav
    },
    {
        headerMode: 'none',
        transitionConfig: () => {
            return {
                transitionSpec: {
                    duration: 500,
                    easing: Easing.out(Easing.poly(4)),
                    timing: Animated.timing,
                    useNativeDriver: true,
                },
                screenInterpolator: sceneProps => {
                    const { layout, position, scene } = sceneProps

                    const thisSceneIndex = scene.index
                    const width = layout.initWidth

                    const translateX = position.interpolate({
                        inputRange: [thisSceneIndex - 1, thisSceneIndex],
                        outputRange: [width, 0],
                    })
                    return { transform: [{ translateX }] }
                },
            }
        }
    }
)

const RootStack = createSwitchNavigator(
    {
        AuthScreen: AuthPageStackNav,
        MainApp: AppWraper
    },
    {
        initialRouteName: 'AuthScreen',
    }
);

export const AppContainer = createAppContainer(RootStack);