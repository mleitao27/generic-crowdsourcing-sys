import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image , StyleSheet } from "react-native";

const ImagePickerElement = props => {
    const [value, setValue] = useState(false);

    useEffect(() => {
      props.onChange(props.index, "");
    }, []);

    const imageHandler = enteredValue => {
      setValue(enteredValue);
      props.onChange(props.index, enteredValue);
    };

    return (
    <View style={styles.container} >
        {props.items.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity onPress={() => imageHandler(item.name)}>
                  <Image style={value === item.name ? styles.imageSelect : styles.image  } source={{ uri: item.url }}/>
                </TouchableOpacity>
              </View>
            );
        })}
    </View>
    );
};

const styles = StyleSheet.create({
  image: {
    width: 95,
    height: 95,
    margin: 10,

  },
  imageSelect: {
    width: 95,
    height: 95,
    margin: 10,
    borderColor: '#0FECCF',
    borderWidth: 4,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  }
});


export default ImagePickerElement;
