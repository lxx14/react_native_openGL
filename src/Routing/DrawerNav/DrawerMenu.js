import React from 'react';

import { Text, View, TouchableWithoutFeedback } from 'react-native';

import { styles } from '../styles';

const DrawerMenu = (props) => {
    const { navigation } = props;

    const goToContacts = () => {
        navigation.navigate('Contacts');
        navigation.closeDrawer();
    }
    const goToChats = () => {
        navigation.navigate('Chats');
        navigation.closeDrawer();
    }
    const goToOpenGL = () => {
        navigation.navigate('OpenGL');
        navigation.closeDrawer();
    }

    return (
        <View style={styles.container}>
            <Text>Menu</Text>
            <TouchableWithoutFeedback onPress={goToContacts}>
                <Text>
                    Contacts
                </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={goToChats}>
                <Text>
                    Chats
                </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={goToOpenGL}>
                <Text>
                    Open GL
                </Text>
            </TouchableWithoutFeedback>
        </View>
    )
};

export default DrawerMenu;