import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Text, View } from 'react-native';

import { styles } from './styles';

class Chats extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.title);
        return (
            <View style={styles.container}>
                <Text>Chats</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    title: state.title,
})

export default connect(mapStateToProps)(Chats);