import React, { Component } from 'react';

import { Text, View } from 'react-native';

import { styles } from './styles';

class Contacts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Contacts</Text>
            </View>
        )
    }
}

export default Contacts;