import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, Dimensions, Modal } from 'react-native';

import config from './config';

// Window width and height used for styling purposes
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ResultsFormScreen = props => {

    const [results, setResults] = useState(null);
    const [details, setDetails] = useState(false);
    const [detailsData, setDetailsData] = useState(null);

    useEffect(() => {
        (async () => {
            
            const res = await fetch(`${config.serverURL}/api/results/`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email:  props.navigation.state.params.email
                })
            });
    
            if (res.status === 200) {
                setResults(await res.json());
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
    
    let content = <View><Text>Loading Results...</Text></View>;
    if (results !== null)
        content = (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={item => item._id}
                    data={results}
                    renderItem={itemData => (
                        <Text>You ansered {itemData.item.data.length} question on {itemData.item.date}</Text>
                    )}
                  />
            </View>
        );

    return (
        <View style={styles.container}>
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%'
    },
    textContainer: {
        marginTop: windowHeight * 0.01,
        marginLeft: windowWidth * 0.03,
    },
    title: {
        fontSize: 24
    },
});

export default ResultsFormScreen;