import React, { useState, useEffect } from "react";
import { Slider, View, Text, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";

// Range inserted by user built with react native Slider component
const RangeElement = props => {
  const [value, setValue] = useState(0);

  // State that stores input text
  useEffect(() => {
    props.onChange(props.pageIndex, props.index, "");
  }, []);

  // On first render send default value in answer data in the form component
  const pickerHandler = enteredValue => {
    setValue(enteredValue);
    props.onChange(props.pageIndex, props.index, enteredValue);
  };

  // If the user inserts a step, otherwise 1 by default
  const step = props.step || 1;

  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.value}>{String(value)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={props.min}
        maximumValue={props.max}
        step={step}
        minimumTrackTintColor= {Colors.secondary}
        maximumTrackTintColor={Colors.secondary}
        onValueChange={pickerHandler}
        thumbTintColor={"white"}
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
  slider: {
    shadowColor: "black",
    width: '100%', 
  },
  value: {
    textAlign:"right",
    fontSize: 15,
    color: Colors.secondary
  }
});

export default RangeElement;
