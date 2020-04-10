import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

const MatrixElement = props => {

    
    // Variable used to update option's state
    let auxOptions = [];
    // State that stores the state of each option
    const [options, setOptions] = useState([]);
    
    // Dummy state used to force render
    const [dummyState, setDummyState] = useState(false);


    // Initially sets all options to false and sends an empty array as answer data
    useEffect(() => {
        for (var i = 0; i < props.rows.length; i++)
            auxOptions[i] = "";;

        // Send data through the onChange prop
        props.onChange(props.pageIndex, props.index, []);
        // Update options state
        setOptions(auxOptions);
    }, []);


    // When radio input is inserted, state is changed and it updates answer data
    const matrixHandler = (index, enteredText )  => {
        // Fetch options from the state
        auxOptions = options;

        // Change text input item 
        auxOptions[index] = enteredText;

        // Saves new state
        setOptions(auxOptions);
        
        // Sends answer data to the form component (parent)
        props.onChange(props.pageIndex, props.index, auxOptions);
        
        // Forces render
        setDummyState(!dummyState);
    };
    const aux = (index,collumn) => {
        console.log(options[index]);
        if(options[index] === collumn) return true
        else return false
    }

    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.container1}>
            {props.columns.map((column, indexc) => {
                return (
                    <Text key={indexc}>{column}</Text>               
                );
            })}
            </View>
            {props.rows.map((row, indexr) => {
            return (
            <View key={indexr} style={{flexDirection:"row"}}>
                <Text> {row}</Text>
                <View key={indexr} style={styles.container2}>
                    {props.columns.map((column, indexc) => {
                        return (
                        <View key={indexc} >
                            <TouchableOpacity onPress={matrixHandler.bind(this, indexr , column)}>
                                <Icon name={options[indexr] === column ? "ios-radio-button-on":"ios-radio-button-off" } size={24} color={Colors.primary} />
                            </TouchableOpacity>
                        </View>                   
                        );
                    })}
                </View>
            </View>
            );
        })}
        </View>
    );
};


// Styles
const styles = StyleSheet.create({
    title: {
      fontSize: 18,
      marginBottom: Dimensions.get("window").height * 0.02,
    },
    container1: {
        flexDirection:"row",
        justifyContent: "space-between",
        marginLeft: Dimensions.get("window").width * 0.17

    },
    container2: {
        flexDirection:"row",
        justifyContent: "space-between",
        marginLeft: Dimensions.get("window").width * 0.10,
        width: Dimensions.get("window").width * 0.65
    },
  });

export default MatrixElement;