import React from 'react'
import { StyleSheet, View } from 'react-native'
import Greeter from '../components/Greeter'

export const Problem3Screen = () => (
  <View style={P3Styles.screen}>
    <Greeter />
  </View>
)

const P3Styles = StyleSheet.create({
  screen: {
    display: 'flex',
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10
  }
})