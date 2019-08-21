import React, { Component } from 'react';

import { Text, TouchableWithoutFeedback, View } from 'react-native';

import { styles } from '../Auth/styles';

class InfoPage extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => navigation.setParams({ item: 'new Title' })}>
                    <Text style={styles.button}>Change Title</Text>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default InfoPage;