import React, { Component } from 'react';

import { Text, View } from 'react-native';

import { styles } from './styles';

class Chats extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Chats</Text>
            </View>
        )
    }
}

export default Chats;