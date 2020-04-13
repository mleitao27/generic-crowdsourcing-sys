// Imports
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

import { WebView } from 'react-native-webview';

import Colors from '../constants/colors';

// Displays expression inside a box in the form screen
const HtmlElement = props => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.htmlContainer}>
            <WebView
                originWhitelist={['*']}
                source={{html:props.html}}
                style={styles.html}
            />
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
        backgroundColor: Colors.secondary,
        paddingHorizontal: Dimensions.get('window').width * 0.02,
        paddingVertical: Dimensions.get('window').height * 0.02
    },
    title: {
        fontSize: 18,
        marginBottom: Dimensions.get('window').height * 0.02
    },
    html: {
        height: Dimensions.get('window').height * 0.3
    },
    htmlContainer: {
        borderWidth: 1,
        borderColor: Colors.secondary
    }
});

export default HtmlElement;