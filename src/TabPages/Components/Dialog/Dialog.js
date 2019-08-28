import React, { Component } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperPlane, faSmile } from '@fortawesome/free-solid-svg-icons';

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
                date: 'now',
                text,
                recieved: true
            }
        }
        addMessageActionType(newMessage);
        this.setState({ text: '' });
        Keyboard.dismiss()
    }

    smileHandler = () => {
        alert('not supported... yet :)')
    }

    render() {
        const { navigation: { state: { params: { messages } } } } = this.props;
        const { text } = this.state;

        return (
            <View style={styles.mainContainer}>
                <ScrollView style={styles.textContainer}>
                    {messages.map(item =>
                        <View key={item.id} style={styles.wrapperMessage}>
                            <Text style={[styles.textLeft, item.recieved && styles.textRight]}>
                                {item.text}
                            </Text>
                            <View style={[styles.triangleLeft, item.recieved && styles.triangleRight]} />
                        </View>
                    )}
                </ScrollView>
                <View>
                    <TextInput value={text} onChangeText={this.handleText} style={styles.input} placeholder='message'/>
                    {text.length > 0 && <TouchableWithoutFeedback onPress={this.addMessage}>
                        <FontAwesomeIcon icon={faPaperPlane} size={25} style={styles.icon} />
                    </TouchableWithoutFeedback>}
                    <TouchableWithoutFeedback onPress={this.smileHandler}>
                        <FontAwesomeIcon icon={faSmile} size={25} style={styles.iconSmile} />
                    </TouchableWithoutFeedback>
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