// Imports
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

import Colors from '../constants/colors';

// Displays expression inside a box in the form screen
const ExpressionElement = props => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.expressionContainer}>
                <Text style={styles.text}>{props.expression}</Text>
            </View>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        paddingVertical: Dimensions.get('window').height * 0.05
    },
    expressionContainer: {
        borderWidth: 1,
        borderColor: Colors.secondary,
        backgroundColor: 'white',
        paddingHorizontal: Dimensions.get('window').width * 0.02,
        paddingVertical: Dimensions.get('window').height * 0.02
    },
    title: {
        fontSize: 18,
        marginBottom: Dimensions.get('window').height * 0.02
    },
    text: {
        fontSize: 16
    }
});

export default ExpressionElement;