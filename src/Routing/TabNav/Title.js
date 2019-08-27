import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { changeIconActionType, changeTitleActionType } from '../../TabPages/actions';

import { styles } from './styles';

const TitleComponent = (props) => {
    const { navigation, arrow, changeIconActionType, changeTitleActionType } = props;
    const { index } = props.navigation.state;
    console.log(index);
    const openDrower = () => {
        navigation.toggleDrawer();
    }
    const goBack = () => {
        changeIconActionType(false);
        navigation.navigate('Chats');

    }

    const changeRoute = () => {
        if (index !== 1) {
            changeIconActionType(false);
            console.log(arrow);
            return <TouchableWithoutFeedback onPress={openDrower}>
                <FontAwesomeIcon icon={faBars} size={30} />
            </TouchableWithoutFeedback>
        };
        if (index === 1 && arrow === false) {
            changeTitleActionType('Chats');
            navigation.navigate('Chats');
            return <TouchableWithoutFeedback onPress={openDrower}>
                <FontAwesomeIcon icon={faBars} size={30} />
            </TouchableWithoutFeedback>
        };
        if (index === 1 && arrow === true) {
            return <TouchableWithoutFeedback onPress={goBack}>
                <FontAwesomeIcon icon={faArrowLeft} size={30} />
            </TouchableWithoutFeedback>
        };
    }

    return (
        <View style={styles.container}>
            {changeRoute()}
            <Text>{props.title}</Text>
        </View>
    )
}

const mapStateToProps = (state) => ({
    title: state.title.name,
    arrow: state.title.showArrow
});

const mapDispatchToProps = {
    changeIconActionType,
    changeTitleActionType
};

export default connect(mapStateToProps, mapDispatchToProps)(TitleComponent);