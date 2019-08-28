import React from 'react';
import { Text, View } from 'react-native';

import DrawerItem from './DrawerItem';
import { styles } from '../styles';

const DrawerMenu = (props) => {
    const { navigation } = props;

    const handleRouting = (route) => {
        navigation.navigate(route);
        navigation.closeDrawer();
    }

    return (
        <View style={styles.container}>
            <Text>Menu</Text>
            <DrawerItem text='Contacts' tabName={'Contacts'} goToRoute={handleRouting} />
            <DrawerItem text='Chats' tabName={'Chats'} goToRoute={handleRouting} />
            <DrawerItem text='Open GL' tabName={'OpenGL'} goToRoute={handleRouting} />
        </View>
    )
};

export default DrawerMenu;