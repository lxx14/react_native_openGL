import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => ({
    //..............
});

export default connect(mapStateToProps)(OpenGL);
