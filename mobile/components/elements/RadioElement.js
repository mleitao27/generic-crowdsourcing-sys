import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View, Text} from 'react-native';

const RadioElement = props => {

    const [value, setValue] = useState(false);

    useEffect(() => {
        props.onChange(props.index, "");
    }, []);

    const radioHandler = enteredValue => {
        setValue(enteredValue);
        props.onChange(props.index, enteredValue);
    };

    return (
        <View style={styles.container} >
            {props.items.map((item, index) => {
                return (
                    <View key={index}>
                        <Text>{item.name}</Text>
                        <TouchableOpacity
                            style={styles.circle}
                            onPress={() => radioHandler(item.value)}>
                            {value === item.value && (<View style={styles.checkedCircle} />)}
                        </TouchableOpacity>
                    </View>
                );
            })}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#794F9B',
    }
});


export default RadioElement;