import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { getUser } from '../../utils/getUser';
import { styles } from './styles';

export class Contacts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { users } = this.props;

        return (
            <View style={styles.container}>
                {getUser(users, 'contacts', this.props)}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
});

export default connect(mapStateToProps)(Contacts);