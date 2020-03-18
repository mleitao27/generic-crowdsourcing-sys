import React from 'react';
import { Button, View, TouchableOpacity, TouchableNativeFeedback, Text } from 'react-native';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';

const OAuthButtons = props => {
    async function logIn() {
        try {
          await Facebook.initializeAsync('534270243959641');
          const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile', 'email'],
          });
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?fields=email,name&access_token=${token}`);
            console.log(await response.json());
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
       }
    };

    async function signIn() {
        try {
          const result = await Google.logInAsync({
            androidClientId: '608098992888-f7pie3rd6osvls6jt04naaqeivd2m68j.apps.googleusercontent.com',
            //IOSClientId: ''
            scopes: ["profile", "email"]
          })
          if (result.type === "success") {
            console.log(result);
          } else {
            console.log("cancelled")
          }
    } catch (e) {
          console.log("error", e)
        }
    };

    return (
        <View>
            <Button
                title='facebook'
                onPress={logIn}
            />
            <Button
                title='google'
                onPress={signIn}
            />
        </View>
    );
};

export default OAuthButtons;