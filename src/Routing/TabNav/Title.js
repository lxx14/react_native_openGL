import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

const TitleComponent = (props) => {
    return (
        <Text>{props.title}</Text>
    )
}

const mapStateToProps = (state) =>({
    title: state.title
})

export default connect(mapStateToProps)(TitleComponent);