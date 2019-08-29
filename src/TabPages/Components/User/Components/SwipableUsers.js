import React, { Component } from 'react';
import { FlatList, RectButton } from 'react-native-gesture-handler';

import User from '../User';
import AnimationForUsers from './AnimationForUsers';

const Row = (props) => {
    const { item } = props;
    return (
        <AnimationForUsers {...props}>
            <RectButton>
                <User
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    user={item}
                    {...props}
                    chats={true}
                    messages={item.messages}
                />
            </RectButton>
        </AnimationForUsers>
    );
};

export default class SwipableUsers extends Component {

    render() {
        const { users } = this.props;

        return (
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <Row item={item} {...this.props} />
                )}
                keyExtractor={(item, index) => `user_${index}`}
            />
        );
    }
};