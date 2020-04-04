import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/Ionicons";

const DateTimePickerElement = props => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [selectedDateTime, setSelectedDatetime] = useState('');

  useEffect(() => {
    props.onChange(props.pageIndex, props.index, '');
  }, []);

  const onChange = (event, selectedDateTime) => {
    var data = '';
    const currentDate = selectedDateTime || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    if (props.mode === 'date')
      data = `${selectedDateTime.getDate()}-${selectedDateTime.getMonth()}-${selectedDateTime.getFullYear()}`;
    else if (props.mode === 'time')
      data = `${selectedDateTime.getHours()}:${selectedDateTime.getMinutes()}:${selectedDateTime.getSeconds()}`;

    setSelectedDatetime(data);
    props.onChange(props.pageIndex, props.index, data);
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
      <Text>{props.title}</Text>
      <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
        <Text>{selectedDateTime}</Text>
        <TouchableOpacity onPress={showDateTimepicker.bind(this, props.mode)}>
          <Icon name={props.mode === 'date' ? 'ios-calendar' : 'md-time'} size={22}/>
        </TouchableOpacity>
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