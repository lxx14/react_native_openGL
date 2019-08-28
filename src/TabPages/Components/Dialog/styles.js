import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create(
    {
        mainContainer: {
            flex: 1,
        },
        textContainer: {
            flex: 1,
            backgroundColor: '#cce6ff',
        },
        inputContainer: {
            position: "relative",
            height: 50,
        },
        input: {
            width: '100%',
            height: 50,
            paddingLeft: 50,
            paddingRight: 50
        },
        icon: {
            position: 'absolute',
            right: 10,
            top: 12,
        },
        iconSmile: {
            position: 'absolute',
            left: 10,
            top: 12,
            color: 'gray',
        },
        textLeft: {
            margin: 10,
            textAlign: 'left',
            maxWidth: 200,
            padding: 7,
            alignSelf: 'flex-start',
            marginBottom: 20,
            backgroundColor: 'white',
            borderRadius: 5,
        },
        textRight: {
            textAlign: 'right',
            alignSelf: 'flex-end',
            backgroundColor: '#b3e6b3',
        },
        wrapperMessage: {
            position: 'relative',
        },
        triangleLeft: {
            position: 'absolute',
            bottom: 20,
            overflow: 'hidden',
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            borderLeftWidth: 15,
            borderTopWidth: 15,
            borderLeftColor: 'transparent',
            borderTopColor: 'white',
            rotation: 90,
            zIndex: 22,
        },
        triangleRight: {
            borderTopColor: '#b3e6b3',
            right: 0,
            rotation: 180,
            zIndex: 22,
        }
    }
)