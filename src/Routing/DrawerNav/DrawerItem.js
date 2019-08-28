import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComments, faUser, faAdjust } from '@fortawesome/free-solid-svg-icons';

import { styles } from './styles';

const DrawerItem = (props) => {
    const { text, goToRoute, tabName, icon } = props;

    const onPress = () => {
        goToRoute(tabName);
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.itemContainer}>
                <FontAwesomeIcon
                    icon={icon === 'Contacts' ? faUser : icon === 'Chats' ? faComments : faAdjust}
                    size={20}
                    color={'#d9d9d9'}
                    style={styles.drawerIcon}
                />
                <Text>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default DrawerItem;