import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create(
    {
        mainContainer: {
            flex: 1,
        },
        textContainer: {
            flex: 1,
            padding: 10,
        },
        inputContainer: {
            position: "relative",
            height: 50,
        },
        input: {
            borderWidth: 2,
            borderColor: 'gray',
            width: '100%',
            height: 50,
            paddingLeft: 10,
            paddingRight: 50
        },
        icon: {
            position: 'absolute',
            right: 10,
            top: 12,
        },
        textLeft: {
            textAlign: 'left',
            width: 200,
            alignSelf: 'flex-start',
            marginBottom: 20,
        },
        textRight: {
            width: 200,
            textAlign: 'right',
            alignSelf: 'flex-end',
            marginBottom: 20,
        }
    }
)