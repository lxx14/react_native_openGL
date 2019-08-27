import React from 'react';
import {
    View,
    Image
} from 'react-native';

import { styles } from './styles';

const SplashScreen = (props) => {

    React.useEffect(() => {
        setTimeout(
            goMainPage, 3000);
    }, []);

    goMainPage = () => {
        const { navigate } = props.navigation;
        navigate('MainApp');
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/splash_logo.png')} />
        </View>
    )
}

export default SplashScreen;