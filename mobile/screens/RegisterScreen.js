import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const RegisterScreen = props => {
    
    const register = () => {
        props.navigation.pop();
    };

    return (
        <View>
            <Text>RegisterScreen</Text>
            <Button
                title='Register'
                onPress={register}
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

export default RegisterScreen;