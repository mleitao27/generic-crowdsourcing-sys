import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';

import {Form} from 'react-native-json-forms';

import data from '../../data/form.json';
import config from '../../extension/config';
import FormExtension from '../../extension/FormExtension';


const FormScreen = props => {

    const [loaded, setLoaded] = useState(null);
    const [form, setForm] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${config.serverURL}/api/surveys/`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                /*body: JSON.stringify({
                    name: name,
                    password: password,
                    email: email,
                    type: 'normal'
                })*/
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
        return <View><Text>Loading survey...</Text></View>
    else if (loaded === false)
        return <View><Text>Unable to load survey.</Text></View>
    else
        return (
            <ScrollView style={{ width: '100%' }}>
                <Form json={form} extension={FormExtension} onSubmit={onSubmit} />
            </ScrollView>
        );
};

export default FormScreen;