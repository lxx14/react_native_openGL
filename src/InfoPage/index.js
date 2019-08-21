import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';

import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';

class InfoPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => navigation.setParams({ item: 'new Title' })}>
                    <FontAwesomeIcon icon={faHandPeace} size={50} />
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default InfoPage;