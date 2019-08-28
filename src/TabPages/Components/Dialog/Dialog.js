import React, { Component } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { addMessageActionType } from '../../../redux/actions';
import { styles } from './styles';

class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleText = (text) => {
        this.setState({ text });
    }

    addMessage = () => {
        const { addMessageActionType, navigation: { state: { params: { messages, itemId } } } } = this.props;
        const { text } = this.state;

        const userId = itemId;
        const newId = messages[messages.length - 1].id + 1;

        const newMessage = {
            userId,
            message: {
                id: newId,
                text,
                recieved: true
            }
        }
        addMessageActionType(newMessage);
        this.setState({ text: '' });
        Keyboard.dismiss()
    }

    render() {
        const { navigation: { state: { params: { messages } } } } = this.props;
        const { text } = this.state;

        return (
            <View style={styles.mainContainer}>
                <ScrollView style={styles.textContainer}>
                    {messages.map(item =>
                        <Text key={item.id} style={[styles.textLeft, item.recieved && styles.textRight]}>
                            {item.text}
                        </Text>
                    )}
                </ScrollView>
                <View>
                    <TextInput value={text} onChangeText={this.handleText} style={styles.input} />
                    {text.length > 0 && <TouchableWithoutFeedback onPress={this.addMessage}>
                        <FontAwesomeIcon icon={faPaperPlane} size={25} style={styles.icon} />
                    </TouchableWithoutFeedback>}
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    //.....................
});

const mapDispatchToProps = {
    addMessageActionType
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);