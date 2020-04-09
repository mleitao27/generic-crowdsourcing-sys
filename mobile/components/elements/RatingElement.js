import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native";

import Icon from "react-native-vector-icons/AntDesign";

// Rating inserted by user built with react native Icon and TouchableOpacity component
const RatingElement = props => {

     // State that stores rating input 
     const [value, setValue] = useState('');
    
     // On first render send default value in answer data in the form component
     useEffect(() => {
         // Send data through the onChange prop
         props.onChange(props.pageIndex, props.index, '');
     }, []);
 
    // When rating is inserted, state is changed and it updates answer data
    const RatingHandler = enteredValue => {
        setValue(enteredValue);
        props.onChange(props.pageIndex, props.index, enteredValue);
    };

    return (
    <View>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.ratingContainer}>
        <TouchableOpacity onPress={() => RatingHandler(1)}>
            <Icon name={value < 1 ? 'staro' : 'star'} size={24} color={Colors.primary}/></TouchableOpacity>
        <TouchableOpacity onPress={() => RatingHandler(2)}>
            <Icon name={value < 2  ? "staro" : "star"} size={24} color={Colors.primary}/></TouchableOpacity>
        <TouchableOpacity onPress={() => RatingHandler(3)}>
            <Icon name={value < 3 ? "staro" : "star"} size={24} color={Colors.primary}/></TouchableOpacity>
        <TouchableOpacity onPress={() => RatingHandler(4)}>
            <Icon name={value < 4 ? "staro" : "star"} size={24} color={Colors.primary}/></TouchableOpacity>
        <TouchableOpacity  onPress={() => RatingHandler(5)}>
            <Icon name={value < 5 ? "staro" : "star"} size={24} color={Colors.primary}/></TouchableOpacity>  
      </View>
    </View>
    );
};

// Styles
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: Dimensions.get("window").height * 0.02,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
});

export default RatingElement;