import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create(
    {
        container: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: 60,
            paddingLeft: 5,
            paddingTop: 15,
        },
        containerChats: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: 80,
            paddingLeft: 5,
            overflow: 'hidden',
            borderBottomColor: '#e6e6e6',
            borderBottomWidth: 1,
        },
        image: {
            width: 40,
            height: 40
        },
        imageChats: {
            width: 60,
            height: 60
        },
        textContainer: {
            flex: 1,
            marginLeft: 10,
            position: 'relative',
        },
        onlineText: {
            fontSize: 11,
            color: 'gray',
        },
        onlineTextActive: {
            fontSize: 11,
            color: '#0099ff',
        },
        text: {
            fontSize: 15,
        },
        textChat: {
            fontSize: 20,
        },
        messagePreview: {
            color: 'gray',
        },
        textDate: {
            position: 'absolute',
            right: 5,
            fontSize: 10,
            color: 'gray',
        }
    }
)