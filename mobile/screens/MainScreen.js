import React, {useState, useReducer} from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const MainScreen = props => {

    const [isLogged, setIsLogged] = useState(false);

    const changeLoggedState = (state) => {
        setIsLogged(state);
    };

    let content = (
        <View>
            <Button
                title='Login'
                onPress={() => changeLoggedState(true)}
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
                    onPress={() => changeLoggedState(false)}
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