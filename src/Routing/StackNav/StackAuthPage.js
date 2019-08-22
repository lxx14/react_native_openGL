import { createStackNavigator } from 'react-navigation';

import Auth from '../../Auth';

const AuthStackNav = createStackNavigator(
    {
        Auth
    },
    {
        headerMode: 'none',
    }
);

export default AuthStackNav;