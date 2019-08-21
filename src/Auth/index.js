import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';

import { styles } from './styles';

const Auth = (props) => {

    const { navigate } = props.navigation;

    goMainPage = () => {
        navigate('MainApp');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                AUTH
            </Text>
            <TouchableWithoutFeedback onPress={goMainPage}>
                <Text style={styles.button}>
                    Main
                </Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Auth;