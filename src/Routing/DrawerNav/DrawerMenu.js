import React from 'react';
import { Text, View, Image } from 'react-native';


import DrawerItem from './DrawerItem';
import { styles } from './styles';

const DrawerMenu = (props) => {
    const { navigation } = props;

    const handleRouting = (route) => {
        navigation.navigate(route);
        navigation.closeDrawer();
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require('../../assets/images/owner.png')} style={styles.image} />
                <Text style={styles.headerText}>Dart Veider</Text>
                <Text style={styles.headerNumber}>+7 ( 777 ) 777-77-77</Text>
            </View>
            <View style={styles.menuItemsContainer}>
                <DrawerItem text='Contacts' tabName={'Contacts'} goToRoute={handleRouting} icon={'Contacts'} />
                <DrawerItem text='Chats' tabName={'Chats'} goToRoute={handleRouting} icon={'Chats'} />
                <DrawerItem text='Open GL' tabName={'OpenGL'} goToRoute={handleRouting} icon={'OpenGL'} />
            </View>
        </View>
    )
};

export default DrawerMenu;