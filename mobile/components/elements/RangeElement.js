import React, { useState, useEffect } from "react";
import { Slider } from "react-native";

const RangeElement = props => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    props.onChange(props.index, "");
  }, []);

  const pickerHandler = enteredValue => {
    setValue(enteredValue);
    props.onChange(props.index, enteredValue);
  };

  return (
    <Slider
      style={{ width: 200, height: 40 }}
      minimumValue={props.min}
      maximumValue={props.max}
      step={1}
      minimumTrackTintColor="#B4B4B4"
      maximumTrackTintColor="#B4B4B4"
      onValueChange={pickerHandler}
    />
  );
};

export default RangeElement;
