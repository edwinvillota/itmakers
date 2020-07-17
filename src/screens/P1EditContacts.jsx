import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import EditContactCardList from '../containers/EditContactCardList'

export const P1EditContacts = ({ navigation }) => {
  return (
    <View style={P1ECStyles.screen}>
      <EditContactCardList navigation={navigation}/>
    </View>
  )
}

const P1ECStyles = StyleSheet.create({
  screen: {
    display: 'flex',
    flex: 1,
    padding: 20
  }
})
