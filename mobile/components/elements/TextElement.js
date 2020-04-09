import React, {useState, useEffect} from 'react';
import { TextInput, View, Text, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";

// Text inserted by user built with react native TextInput component
const TextElement = props => {

     // State that stores input text
    const [value, setValue] = useState('');
    
    // On first render send default value in answer data in the form component
    useEffect(() => {
        // Send data through the onChange prop
        props.onChange(props.pageIndex, props.index, '');
    }, []);

    // When text is inserted, state is changed and it updates answer data
    const inputHandler = enteredValue => {
        setValue(enteredValue);
        props.onChange(props.pageIndex, props.index, enteredValue);
    };

    return (
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <TextInput
          style={styles.input}
          placeholder={"Type anything..."}
          multiline={true}      // Allows to wrap content in multiple lines
          numberOfLines={4}     // Max Number of Lines Displayed, depending on the style given  
          onChangeText={inputHandler}
          value={value}
          maxLength={260}       // Limit of characters, better solution then JS logic
        />
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
  },
});

export default TextElement;