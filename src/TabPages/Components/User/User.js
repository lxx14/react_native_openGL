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
        const { user, navigation, changeTitleActionType, changeIconActionType } = this.props;
        changeTitleActionType(`${user.name}`);
        changeIconActionType(true);
        navigation.navigate("Dialog",
            {
                itemId: user.id,
                messages: user.messages
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
                        source={require('../../../assets/images/user-logo.png')}
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