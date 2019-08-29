import React from 'react';
import { View, Text } from 'react-native';

export const getMessages = (data, styles) => {
    let renderedMessages;
    if (Array.isArray(data) && styles instanceof Object) {
        renderedMessages = data.map(item =>
            <View key={item.id} style={styles.wrapperMessage}>
                <Text style={[styles.textLeft, item.recieved && styles.textRight]}>
                    {item.text}
                </Text>
                <View style={[styles.triangleLeft, item.recieved && styles.triangleRight]} />
            </View>
        )
    }
    return renderedMessages || null
}