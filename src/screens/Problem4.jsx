import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native'

export const Problem4Screen = () => {

  const [userNumber, setUserNumber] = useState(null)
  const [randomNumber, setRandomNumber] = useState(null)

  useEffect(() => {
    genRandom(1, 20)
  }, [])

  const genRandom = (min, max) => {
    const random = Math.floor(Math.random()*((max+1)-min)+min)
    setRandomNumber(random)
  }

  const handleGo = () => {
    if (randomNumber > userNumber) {
      Alert.alert('Muy Bajo', 'El numero es muy bajo')
    } else if (randomNumber < userNumber) {
      Alert.alert('Muy Alto', 'El numero es muy alto')
    } else if ( randomNumber == userNumber) {
      Alert.alert('Felicidades', `El numero es ${userNumber}`)
      genRandom()
    }
  }

  return (
    <View style={P4Styles.screen}>
      <Text style={P4Styles.title}>Adivinanzas</Text>
      <TextInput 
        keyboardType='number-pad'
        placeholder='Ingresa tu número'
        value={userNumber}
        onChangeText={text => setUserNumber(text)}
        style={P4Styles.input}
      />
      <Button 
        title='Adivina'
        onPress={handleGo}
      />
    </View>
  )
}

const P4Styles = StyleSheet.create({
  screen: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 22
  },
  input: {
    marginBottom: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    height: 40
  }
})