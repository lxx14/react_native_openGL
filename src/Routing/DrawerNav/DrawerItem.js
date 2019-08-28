import React from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';

const DrawerItem = (props) => {
    const { text, goToRoute, tabName } = props;

    const onPress = () => {
        goToRoute(tabName);
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Text>
                {text}
            </Text>
        </TouchableWithoutFeedback>
    )
}

export default DrawerItem;