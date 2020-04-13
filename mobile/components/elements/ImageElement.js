import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

const ImageElement = props => {
    
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        Image.getSize(props.url, (width, height) => {setHeight(height); setWidth(width);});
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.imageContainer}>
                <Image source={{ uri: props.url }} style={{width, height}}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: Dimensions.get('window').height * 0.05
    },
    title: {
        fontSize: 18,
        marginBottom: Dimensions.get('window').height * 0.02
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ImageElement;