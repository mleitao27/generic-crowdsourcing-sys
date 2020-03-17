import React, {useState, useReducer} from 'react';
import { View, Text, StyleSheet, Button, TextInput, Dimensions, Alert } from 'react-native';

import CustomButton from '../components/CustomButton';

import config from '../extension/config';
import globalStyles from '../constants/styles';
import Colors from '../constants/colors';

const MainScreen = props => {

    const [isLogged, setIsLogged] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeLoggedState = (state) => {
        setIsLogged(state);
    };

    const emailInputHandler = (enteredEmail) => {
        setEmail(enteredEmail);
    };

    const passwordInputHandler = (enteredPassword) => {
        setPassword(enteredPassword);
    };

    const login = async () => {

        if (email.trim() !== '' && password.trim() !== '') {
            const res = await fetch(`${config.serverURL}/api/users/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    password: password,
                    email: email
                })
            });
            
            if (res.status == 404)
                Alert.alert('ERROR', 'User not registered.');
            else
                changeLoggedState(true);
        } else {
            Alert.alert('ERROR', 'All fields must be filled');
        }

    };

    const logout = async () => {
        const res = await fetch(`${config.serverURL}/api/users/logout`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        });
        
        changeLoggedState(false);
        
    };

    let content = (
        <View style={globalStyles.screen} >
            <Text style={globalStyles.title}>Welcome!</Text>
            <View style={globalStyles.formContainer}>
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
                    title='Login'
                    onPress={login}
                    backgroundColor={Colors.secondary}
                    textColor={Colors.primary}
                    />
                <CustomButton
                    title='Register'
                    onPress={() => props.navigation.navigate({routeName: 'Register'})}
                    backgroundColor={Colors.secondary}
                    textColor={Colors.primary}                
                    />
            </View>
        </View>
    );

    if (isLogged)
        content = (
            <View>
                <CustomButton
                    title='Form'
                    onPress={() => props.navigation.navigate({routeName: 'Form'})}
                    backgroundColor={Colors.primary}
                    textColor={Colors.secondary}
                />
                <CustomButton
                    title='Results'
                    onPress={() => props.navigation.navigate({routeName: 'Results'})}
                    backgroundColor={Colors.primary}
                    textColor={Colors.secondary}
                />
                <CustomButton
                    title='Logout'
                    onPress={logout}
                    backgroundColor={Colors.primary}
                    textColor={Colors.secondary}
                />
            </View>
        );

    return (
        <View style={globalStyles.screen} >
            {content}        
        </View>
    );
};

export default MainScreen;