import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import CustomButton from "../CustomButton";

export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [hasPermissionRoll, setHasPermissionRoll] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === "granted");
        const { status } = await MediaLibrary.requestPermissionsAsync();
        setHasPermissionRoll(status === "granted");
    })();
  }, []);
    
     async function display (props)  {
         console.log(hasPermissionRoll);
         MediaLibrary.saveToLibraryAsync(props.uri);
    }

    snap = async () => {
        if (this.camera) {
            const options = {onPictureSaved : display}
            let photo = await this.camera.takePictureAsync(options);
    }
    };
    checkratio{

        ratios = this.camera.getSupportedRatiosAsync
        return 
    }


  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
      return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}  ref={ref => { this.camera = ref; }} ratio={checkratio}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-start",
              alignItems: "center",
            }} 
            onPress={snap }     >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Photo{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
