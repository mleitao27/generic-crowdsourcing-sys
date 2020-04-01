import React, { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View, Button } from "react-native";

const DateTimePickerElement = props => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDateTime) => {
    var data = '';
    const currentDate = selectedDateTime || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    if (props.mode === 'date')
      data = `${selectedDateTime.getDate()}-${selectedDateTime.getMonth()}-${selectedDateTime.getFullYear()}`;
    else if (props.mode === 'time')
      data = `${selectedDateTime.getHours()}:${selectedDateTime.getMinutes()}:${selectedDateTime.getSeconds()}`;

    props.onChange(props.index, data);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDateTimepicker = (mode) => {
    showMode(mode);
  };

  return (
    <View>
      <View>
        <Button onPress={showDateTimepicker.bind(this, props.mode)} title={`Show ${props.mode} picker!`} />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateTimePickerElement;