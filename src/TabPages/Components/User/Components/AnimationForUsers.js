import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default class AnimationForUsers extends Component {

    renderRightAction = (text, color, x, progress, someFunc) => {

        const animation = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
        });

        const Button = () => {
            const { navigation } = this.props;
            this.close();
            switch (someFunc) {
                case 'Info': {
                    alert(`close swipeable element. But you can connect complex logic in this place, like navigation, redux, else`);
                    return
                };
                case 'Contacts': {
                    navigation.navigate('Contacts');
                    return
                };
                case 'OpenGL': {
                    navigation.navigate('OpenGL');
                    return
                }
                default: {
                    alert(`default`);
                    return
                }
            }
        };

        return (
            <Animated.View style={{ flex: 1, transform: [{ translateX: animation }] }}>
                <RectButton
                    style={[styles.rightAction, { backgroundColor: color }]}
                    onPress={Button}
                >
                    <Text style={styles.actionText} >{text}</Text>
                </RectButton>
            </Animated.View>
        );
    };

    renderRightActions = progress => (
        <View style={styles.wrapperBlocks}>
            {this.renderRightAction('Info', '#0099ff', 225, progress, 'Info')}
            {this.renderRightAction('Contacts', 'lightgray', 150, progress, 'Contacts')}
            {this.renderRightAction('OpenGL', 'black', 75, progress, 'OpenGL')}
        </View>
    );

    updateRef = ref => {
        this._swipeableRow = ref;
    };
    close = () => {
        this._swipeableRow.close();
    };

    render() {
        const { children } = this.props;
        return (
            <Swipeable
                ref={this.updateRef}
                friction={1}
                rightThreshold={50}
                renderRightActions={this.renderRightActions}>
                {children}
            </Swipeable>
        );
    }
}

const styles = StyleSheet.create({
    wrapperBlocks: {
        width: 225,
        flexDirection: 'row'
    },
    actionText: {
        color: 'white',
        fontSize: 12,
    },
    rightAction: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});