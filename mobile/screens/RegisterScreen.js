import React, { useState } from 'react';
import { View, Alert, TextInput } from 'react-native';

import config from '../extension/config';
import globalStyles from '../constants/globalStyles';
import Colors from '../constants/colors';

import CustomButton from '../components/CustomButton';

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
        if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
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
        } else {
            Alert.alert('ERROR', 'All fields must be filled');
        }
    };

    return (
        <View style={globalStyles.screen}>
            <View style={globalStyles.formContainer}>
                <TextInput
                    style={globalStyles.formElement}
                    placeholder="Name"
                    value={name}
                    onChangeText={nameInputHandler}
                />
                <TextInput
                    style={globalStyles.formElement}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={emailInputHandler}
                />
                <TextInput
                    style={globalStyles.formElement}
                    placeholder="Password"
                    value={password}
                    onChangeText={passwordInputHandler}
                    secureTextEntry={true}
                />
                <CustomButton
                    title='Register'
                    onPress={register}
                    backgroundColor={Colors.secondary}
                    textColor={Colors.primary}    
                />
            </View>
        </View>
    );
};

export default RegisterScreen;