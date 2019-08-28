import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import { changeTitleActionType, changeIconActionType } from '../../actions';
import { styles } from './styles';

class User extends Component {
    constructor(props) {
        super(props)
    }

    goToChat = () => {
        const { user: { id, messages, name }, navigation, changeTitleActionType, changeIconActionType } = this.props;
        changeTitleActionType(`${name}`);
        changeIconActionType(true);
        navigation.navigate("Dialog",
            {
                itemId: id,
                messages: messages
            }
        )
    }

    render() {
        const { name } = this.props;
        return (
            <TouchableWithoutFeedback onPress={this.goToChat}>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/images/user_logo.png')}
                    />
                    <Text>{name}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
const mapStateToProps = (state) => ({
    arrow: state.title.showArrow
})
const mapDispatchToProps = {
    changeTitleActionType,
    changeIconActionType
}

export default connect(mapStateToProps, mapDispatchToProps)(User);