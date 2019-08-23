import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationEvents } from 'react-navigation';

import { Text, View } from 'react-native';
import { changeTitleActionType } from './actions';

import { styles } from './styles';

class Chats extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationEvents
                    onDidFocus={() => this.props.title !== 'Chats' && this.props.changeTitleActionType('Chats')}
                />
                <Text>Chats</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    title: state.title,
});

const mapDispatchToProps = {
    changeTitleActionType
}

export default connect(mapStateToProps, mapDispatchToProps)(Chats);