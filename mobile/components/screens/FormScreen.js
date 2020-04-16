import React, { useEffect, useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    Alert, 
    StyleSheet,
    Dimensions
} from 'react-native';

import {Form} from 'react-native-json-forms';

import config from '../../extension/config';
import FormExtension from '../../extension/FormExtension';


const FormScreen = props => {

    const [loaded, setLoaded] = useState(null);
    const [form, setForm] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${config.serverURL}/api/surveys/`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (res.status == 200){
                setForm(await res.json());
                setLoaded(true);
            }
            else
                Alert.alert('ERROR', 'User already registered with that e-mail.');
        })();
    }, []);

    const onSubmit = (data) => {
        console.log(data);
    };

    if (loaded === null)
        return <View style={styles.container}><Text style={styles.text}>Loading survey...</Text></View>
    else if (loaded === false)
        return <View style={styles.container}><Text style={styles.text}>Unable to load survey. Please go back.</Text></View>
    else
        return (
            <ScrollView style={styles.formContainer}>
                <Form json={form} extension={FormExtension} onSubmit={onSubmit} />
            </ScrollView>
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: Dimensions.get('window').width*0.05
    },
    formContainer: {
        width: '100%'
    }
});

export default FormScreen;