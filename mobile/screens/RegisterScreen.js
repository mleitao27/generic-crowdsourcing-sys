import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, TextInput } from 'react-native';

import config from '../extension/config';

const RegisterScreen = props => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const nameInputHandler = (enteredName) => {
        setName(enteredName);
    };

    const emailInputHandler = (enteredEmail) => {
        setEmail(enteredEmail);
    };

    const passwordInputHandler = (enteredPassword) => {
        setPassword(enteredPassword);
    };
    
    const register = async () => {
        const res = await fetch(`${config.serverURL}/api/users/register`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                password: password,
                email: email,
                type: 'normal'
            })
        });

        if (res.status == 302)
            Alert.alert('ERROR', 'User already registered with that e-mail.');
        else
            props.navigation.pop();
    };

    return (
        <View>
            <Text>RegisterScreen</Text>
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={nameInputHandler}
            />
            <TextInput
                placeholder="E-mail"
                value={email}
                onChangeText={emailInputHandler}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={passwordInputHandler}
                secureTextEntry={true}
            />
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