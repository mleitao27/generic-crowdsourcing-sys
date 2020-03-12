import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ResultsScreen = props => {
    return (
        <View>
            <Text>ResultsScreen</Text>
            <Button
                title='Main'
                onPress={() => props.navigation.navigate({routeName: 'Main'})}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ResultsScreen;