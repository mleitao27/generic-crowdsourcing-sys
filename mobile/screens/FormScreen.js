import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const FormScreen = props => {
    return (
        <View>
            <Text>FormScreen</Text>
            <Button
                title='Results'
                onPress={() => props.navigation.navigate({routeName: 'Results'})}
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

export default FormScreen;