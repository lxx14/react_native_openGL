import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';



class MainPage extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <View>
                <Text>Main Page</Text>
            </View>
        )
    }
}


export default MainPage;