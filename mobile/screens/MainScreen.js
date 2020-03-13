import React, {useState, useReducer} from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

import config from '../extension/config';

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
        <View>
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
                title='Login'
                onPress={login}
            />
            <Button
                title='Register'
                onPress={() => props.navigation.navigate({routeName: 'Register'})}
            />
        </View>
    );

    if (isLogged)
        content = (
            <View>
                <Button
                    title='Form'
                    onPress={() => props.navigation.navigate({routeName: 'Form'})}
                />
                <Button
                    title='Results'
                    onPress={() => props.navigation.navigate({routeName: 'Results'})}
                />
                <Button
                    title='Logout'
                    onPress={logout}
                />
            </View>
        );

    return (
        <View>
            <Text>MainScreen</Text>
            {content}        
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

export default MainScreen;