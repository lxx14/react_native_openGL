import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Dialog extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { messages } = this.props.navigation.state.params;

        return (
            <View>
                {messages.map(item=><Text key={item.id}>{item.text}</Text>)}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Dialog);