import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';

import { Text, View } from 'react-native';

import { styles } from './styles';

class TabPage_2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    timer = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    handleFocus = () => {
        this.runner = setInterval(
            () => this.timer(),
            1000
        )
    }

    handleBlur = () => {
        clearInterval(this.runner);
        // this.setState({counter: 0});
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationEvents
                    onDidFocus={this.handleFocus}
                    onDidBlur={this.handleBlur}
                />
                <Text>Idle counter:</Text>
                <Text style={styles.counter}>{this.state.counter}</Text>
            </View>
        )
    }
}

export default TabPage_2;