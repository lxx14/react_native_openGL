import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {styles} from './styles';

export default class OpenGL extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Open GL</Text>
            </View>
        );
    }
}