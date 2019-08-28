import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 1,
        padding: 15,
        backgroundColor: '#0099ff',
    },
    menuItemsContainer: {
        flex: 3,
        padding: 15,
    },
    image: {
        width: 70,
        height: 70,
        marginBottom: 15,
    },
    headerText: {
        fontSize: 20,
        color: 'white',
    },
    headerNumber: {
        fontSize: 15,
        color: '#e6e6e6',
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
    },
    drawerIcon: {
        marginRight: 20,
    }
})