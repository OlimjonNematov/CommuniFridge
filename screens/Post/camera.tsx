import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';

import { Camera } from 'expo-camera';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%'
    },
    text:{

    },
    camera: {
        flex: 1,width:"100%"
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    
});

export default function CameraView() {
    
    const [hasPermission, setHasPermission] = useState<boolean|null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
    const [cameraReady, setCameraReady]=useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
            <Button icon="camera-flip">
              
            </Button>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=>{}}
            disabled={cameraReady}
            >

        </TouchableOpacity>
        </View>
      </Camera>
  ); 
}

