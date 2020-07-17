import React from 'react';
import { StyleSheet, View, Text } from 'react-native'



export const HomeScreen = () => {
  return (
    <View style={Home.screen}>
      <Text style={Home.title}>Bienvenidos</Text>
      <Text style={Home.subtitle}>Prueba técnica para IT Makers</Text>
    </View>
  )
}

const Home = StyleSheet.create({
  screen: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32
  },
  subtitle: {
    fontSize: 16
  }
})