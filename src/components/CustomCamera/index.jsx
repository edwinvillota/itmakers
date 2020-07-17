import React, { useState, useEffect } from 'react'
import { Text, Modal, View, Button } from 'react-native'
import { Camera } from 'expo-camera' 
import { useCamera } from 'react-native-camera-hooks'
import * as Permissions from 'expo-permissions'

export const CustomCamera = ({ visible, handleClose, handleSetPhoto }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null)
  const [{ cameraRef, type }, { takePicture } ] = useCamera()

  useEffect(() => {
    const checkPerm = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA)
      setHasCameraPermission(status === 'granted')
    }

    checkPerm()
  }, [hasCameraPermission])

  const handleTakeAPicture = async () => {
    const snap = await takePicture()
    handleSetPhoto(snap)
  }

  if (hasCameraPermission) {
    return (
      <Modal visible={visible}>
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={type} ref={cameraRef}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'stretch'
              }}>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
                height: 40,
                margin: 10,
              }}>
                <Button 
                  title='Capturar'
                  onPress={handleTakeAPicture}
                />
                <Button 
                  color='red'
                  title='Salir'
                  onPress={handleClose}
                />
              </View>
            </View>
          </Camera>
        </View>
      </Modal>
    )
  }

  return (
    <Text>No tiene permisos para usuar la camara.</Text>
  )
}