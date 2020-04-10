import React, {useState, useEffect} from 'react';
import { TextInput, View, Text, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";

// Text inserted by user built with react native TextInput component
const MultipleTextElement = props => {

    // Variable used to update option's state
    let auxOptions = [];
    // State that stores the state of each option
    const [options, setOptions] = useState([]);


    // Initially sets all options to false and sends an empty array as answer data
    useEffect(() => {
        for (var i = 0; i < props.items.length; i++)
            auxOptions[i] = {name: "", value: ""};;

        // Send data through the onChange prop
        props.onChange(props.pageIndex, props.index, []);
        // Update options state
        setOptions(auxOptions);
    }, []);

    // Called everytime user inserts text
    const onChange = (index, itemname, enteredText ) => {

        // Fetch options from the state
        auxOptions = options;

        // Change text input item 
        auxOptions[index] = {name: itemname, value: enteredText};

        // Saves new state
        setOptions(auxOptions);

        // Sends answer data to the form component (parent)
        props.onChange(props.pageIndex, props.index, auxOptions);

    };
 
     return (
       <View>
         <Text style={styles.title}>{props.title}</Text>
        {props.items.map((item, index) => {
            return (
            <View key={index} style={styles.radioContainer} >
                <Text> {item.name}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={"Type anything..."}
                    multiline={true}      // Allows to wrap content in multiple lines
                    numberOfLines={4}     // Max Number of Lines Displayed, depending on the style given  
                    onChangeText={onChange.bind(this, index, item.name)}
                    value={options[index]}
                    maxLength={260}       // Limit of characters, better solution then JS logic
                />
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
    input: {
      height: 40,
      borderColor: Colors.secondary,
      borderWidth: 1,
      marginVertical: Dimensions.get("window").height * 0.01
      
    },
  });
  

export default MultipleTextElement;