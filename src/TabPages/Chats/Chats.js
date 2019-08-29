import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';

import { getUser } from '../../utils/getUser';
import { styles } from './styles';

class Chats extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        const { users } = this.props;

        const UsersList = getUser(users, 'chats', this.props);

        return (
            <ScrollView style={styles.container}>
                {UsersList}
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
});

export default connect(mapStateToProps)(Chats);