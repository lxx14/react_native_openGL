import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 30
    },
    container: {
        flex: 1,
        paddingLeft: 10,
    },
    button: {
        marginTop: '50%',
        alignSelf: "center",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: 'rgb(51, 204, 255)',
        fontSize: 30,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    icon: {
        marginLeft: 10,
    }
})