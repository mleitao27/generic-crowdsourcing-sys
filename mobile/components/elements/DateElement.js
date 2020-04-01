import React, { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View, Button } from "react-native";

const DateElement = props => {
    const [value, setValue] = useState(new Date(1598051730000));
     const [mode, setMode] = useState("date");
     const [show, setShow] = useState(false);

  useEffect(() => {
    props.onChange(props.index, "");
  }, []);

    const inputHandler = enteredValue => {
        props.onChange(props.index, enteredValue.nativeEvent.timestamp);
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === "ios");
        setDate(currentDate);
    };
    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode("date");
    };

    return (
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={value}
          is24Hour={true}
          display="default"
          onChange={inputHandler}
        />
      </View>
    );
};

export default DateElement;
