import React, { Component } from 'react';

import { Text, View } from 'react-native';

import { styles } from './styles';

class OpenGL extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>OpenGL</Text>
            </View>
        )
    }
}

export default OpenGL;