import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';

import { TouchableWithoutFeedback, View, TextInput, Text } from 'react-native';

import { styles } from './style';

class InfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            confirmed: false
        }
    }

    changeValue = (text) => {
        this.setState({
            text
        })
    }

    setParamsNav = () => {
        this.setState({ confirmed: true })
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>Change the title of screen:</Text>
                <TextInput value={this.state.text} onChangeText={this.changeValue} style={styles.input} />
                <TouchableWithoutFeedback onPress={() => {
                    this.state.text.length > 0 && navigation.setParams({ item: this.state.text });
                    this.state.text.length > 0 ? this.setParamsNav() : alert('Put some text at the field')
                }}>
                    <FontAwesomeIcon icon={faHandPeace} size={50} />
                </TouchableWithoutFeedback>
                {this.state.confirmed && this.state.text.length > 0 && <Text>Thanks, bro, its amaizing title ;)</Text>}
            </View>
        )
    }
}

export default InfoPage;