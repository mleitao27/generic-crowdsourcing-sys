import React, { useState, useEffect } from "react";
import { Slider, View, Text } from "react-native";

const RangeElement = props => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    props.onChange(props.pageIndex, props.index, "");
  }, []);

  const pickerHandler = enteredValue => {
    setValue(enteredValue);
    props.onChange(props.pageIndex, props.index, enteredValue);
  };

  return (
    <View>
      <Text>{props.title}</Text>
      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={props.min}
        maximumValue={props.max}
        step={1}
        minimumTrackTintColor="#333"
        maximumTrackTintColor="#333"
        onValueChange={pickerHandler}
        thumbTintColor={'#333'}
      />
    </View>
  );
};

export default RangeElement;
