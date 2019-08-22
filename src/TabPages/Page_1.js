import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';

import { Text, View } from 'react-native';

import { styles } from './styles';

class TabPage_1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Tab page 1</Text>
            </View>
        )
    }
}

export default TabPage_1;