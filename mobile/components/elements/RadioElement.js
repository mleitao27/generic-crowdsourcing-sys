import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View, Text} from 'react-native';

const RadioElement = props => {

    const [value, setValue] = useState(false);

    useEffect(() => {
        props.onChange(props.pageIndex, props.index, "");
    }, []);

    const radioHandler = enteredValue => {
        setValue(enteredValue);
        props.onChange(props.pageIndex, props.index, enteredValue);
    };

    return (
        <View>
            <Text>{props.title}</Text>
            {props.items.map((item, index) => {
                return (
                    <View key={index} style={{flexDirection: 'row', alignItems:'center'}} >
                        <TouchableOpacity
                            style={styles.circle}
                            onPress={() => radioHandler(item)}>
                            {value === item && (<View style={styles.checkedCircle} />)}
                        </TouchableOpacity>
                        <Text> {item}</Text>
                    </View>
                );
            })}
        </View>
    )
};

const styles = StyleSheet.create({
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
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#333',
    }
});


export default RadioElement;