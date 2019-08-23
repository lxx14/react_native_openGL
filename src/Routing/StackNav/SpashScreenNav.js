import { createStackNavigator } from 'react-navigation';

import SplashScreen from '../../SplashScreen';

const SplashScreenNav = createStackNavigator(
    {
        SplashScreen
    },
    {
        headerMode: 'none',
    }
);

export default SplashScreenNav;