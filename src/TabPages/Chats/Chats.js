import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';

import SwipebleUsers from '../Components/User/Components/SwipableUsers';
import { styles } from './styles';

class Chats extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { users } = this.props;

        return (
            <ScrollView style={styles.container}>
                <SwipebleUsers users={users} {...this.props} />
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
});

export default connect(mapStateToProps)(Chats);