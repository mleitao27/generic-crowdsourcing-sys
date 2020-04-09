import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import Icon from "react-native-vector-icons/Ionicons";

const CameraElement = props => {
    const [cameraPermission, setCameraPermission] = useState(null);
    const [cameraRollPermission, setCameraRollPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [camera, setCamera] = useState(null);

    useEffect(() => {
        (async () => {
            const permissions = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
            setCameraPermission(permissions.permissions.camera.status === 'granted');
            setCameraRollPermission(permissions.permissions.cameraRoll.status === 'granted');
        })();
    }, []);

    const saveInGallery = async (photo) => {
        console.log(photo);
        if (cameraPermission === true)
            await MediaLibrary.saveToLibraryAsync(photo.uri);
    };

    const takePicture = async () => {
        const options = { onPictureSaved: saveInGallery }
        if (camera) {
            let photo = await camera.takePictureAsync(options);
        }
    }

    const getRatios = async () => {
        const ratios = await camera.getSupportedRatiosAsync();
        console.log(ratios);
        return ratios;
    };

    if (cameraPermission === null) {
        return <View />;
    }
    if (cameraPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type} ref={ref => { setCamera(ref); }} ratio={'16:9'}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        paddingHorizontal: Dimensions.get('window').width*0.05
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Icon name='ios-reverse-camera' size={50} color={'white'}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={takePicture}>
                        <Icon name='ios-camera' size={50} color={'white'}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={takePicture}>
                        <Icon name='ios-flash' size={50} color={'white'}/>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
};

export default CameraElement;