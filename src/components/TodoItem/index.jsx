import React from 'react'
import { StyleSheet, View, Text, CheckBox, TouchableOpacity } from 'react-native'

export const TodoItem = ({id, text, done, onItemClick}) => {

  return (
  <TouchableOpacity style={TIStyles.container} onPress={(e) => {
    onItemClick({id, text, done }, e)
  }}>
    <CheckBox value={done}/>
    <Text>{text}</Text>
  </TouchableOpacity>
  )
}

const TIStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 50,
    backgroundColor: 'white',
    shadowOffset: { width: 5, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 10,
    paddingHorizontal: 1
  }
})