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
                <TouchableOpacity onPress={() => imageHandler(item.value)}>
                  <Image style={styles.image} source={{uri : item.name}} />
                </TouchableOpacity>
              </View>
            );
        })}
    </View>
    );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});


export default ImagePickerElement;
