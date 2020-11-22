/* 
 * SurveyScreenExtension (Component)
 * Description : (To be implemented by the programmer)
 * Props :
 * - navigation : navigation object used to navigate between the app's screens
 */

// Imports
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text, ScrollView, Alert } from 'react-native';

import config from './config';

import { Form } from 'react-native-json-forms';
import FormExtension from './FormExtension';

/************************************************
 * 
 * COMPONENT - Screen
 * 
 ************************************************/
const SurveyScreenExtension = props => {

    const [form, setForm] = useState(null);
    const [feedback, setFeedback] = useState(null);

    useEffect(() => {
        (async () => {
            
            const res = await fetch(`${config.serverURL}/api/surveys/`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email:  props.navigation.state.params.email,
                    language: props.navigation.state.params.language
                })
            });
    
            if (res.status == 200) {
                setForm(await res.json());
            }
            else if (res.status === 403) {
                Alert.alert('ERROR', 'Login Timeout.');
                props.navigation.state.params.logout();
                props.navigation.navigate({routeName: 'Main'});
            }
            else
                Alert.alert('ERROR', 'Unexpected error. Contact system admin.');
            

        })();
    }, []);

    // Submits answer to server
    const onSubmit = async (data) => {

        const res = await fetch(`${config.serverURL}/api/surveys/answer`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:  props.navigation.state.params.email,
                language: props.navigation.state.params.language,
                answer: data
            })
        });
        
        if (res.status == 200) {
            await getFeedback();
        }
        else if (res.status === 403) {
            Alert.alert('ERROR', 'Login Timeout.');
            props.navigation.state.params.logout();
            props.navigation.navigate({routeName: 'Main'});
        }
        else
            Alert.alert('ERROR', 'Unexpected error. Contact system admin.');
    };
    
    // Gets feedback from server if last answer was submitted
    const getFeedback = async () => {
        const res = await fetch(`${config.serverURL}/api/surveys/feedback`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:  props.navigation.state.params.email,
                language: props.navigation.state.params.language
            })
        });

        if (res.status == 200) {
            setFeedback(await res.json());
        }
        else if (res.status === 403) {
            Alert.alert('ERROR', 'Login Timeout.');
            props.navigation.state.params.logout();
            props.navigation.navigate({routeName: 'Main'});
        }
        else
            Alert.alert('ERROR', 'Unexpected error. Contact system admin.');
    };

    let content = <View />;
    if (form === null)
        content = (<Text style={styles.text}>Loading survey...</Text>);
    else
        content = (
            <ScrollView style={styles.formContainer}>
                <Form json={form.form} extension={FormExtension} onSubmit={onSubmit} />
            </ScrollView>
        );
    if (feedback !== null)
        content = (<Text style={styles.text}>{feedback.data}</Text>);
    
    /************************************************
     * RENDER
    ************************************************/
    return (
        <View style={styles.container}>
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        width: '100%'
    },
    text: {
        fontSize: Dimensions.get('window').width*0.05
    },
    fallbackTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

// Export component
export default SurveyScreenExtension;