import { StyleSheet, Dimensions } from 'react-native';

import Colors from './colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        marginVertical: windowHeight * 0.05,
        paddingVertical: windowHeight * 0.1,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: windowWidth * 0.7,
        height: windowHeight * 0.6,
        borderRadius: 20,
        backgroundColor: Colors.primary,
        alignItems: "center",
    },
    formElement: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.secondary,
        width: windowWidth * 0.5,
        padding: 10,
        color: 'white'
    },
    title: {
        color: Colors.primary,
        fontSize: 20
    }
});

export default styles;