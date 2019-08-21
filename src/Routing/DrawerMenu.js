import React from 'react';

import { Text, View, TouchableWithoutFeedback } from 'react-native';

import { styles } from './styles';

const DrawerMenu = (props) => {
    const {navigation} = props;

    const goInfo = () => {
        navigation.navigate('InfoPage');
        navigation.closeDrawer();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello Bro!</Text>
            <TouchableWithoutFeedback onPress={goInfo}>
                <Text style={styles.button}>
                    Go to info
                </Text>
            </TouchableWithoutFeedback>
        </View>
    )
};

export default DrawerMenu;