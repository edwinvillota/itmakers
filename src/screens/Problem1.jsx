import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import ContactCardList from '../containers/ContactCardList'

export const Problem1Screen = ({ navigation }) => {

  return (
    <View style={P1Styles.screen}>
      <ContactCardList navigation={navigation}/>
    </View>
  )
}

const P1Styles = StyleSheet.create({
  screen: {
    display: 'flex',
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10
  }
})