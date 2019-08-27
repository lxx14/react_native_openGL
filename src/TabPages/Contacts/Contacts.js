import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationEvents } from 'react-navigation';
import { Text, View } from 'react-native';
import { changeTitleActionType } from '../actions';

import User from '../Components/User/User';

import { styles } from './styles';

class Contacts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, users, changeTitleActionType } = this.props;
        return (
            <View style={styles.container}>
                <NavigationEvents
                    onDidFocus={() => title !== 'Contacts' && changeTitleActionType('Contacts')}
                />
                {users.map(item =>
                    <User
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        user={item}
                        {... this.props}
                    />)}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    title: state.title.name,
    users: state.users
});

const mapDispatchToProps = {
    changeTitleActionType
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);