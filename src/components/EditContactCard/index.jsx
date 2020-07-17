import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export const EditContactCard = ({ id, name, navigation }) => {

  const handleEditContact = () => {
    navigation.navigate('P1EditContact', {
      contactId: id
    })
  }

  return (
    <View style={ECCStyles.container}>
      <View style={ECCStyles.info}>
        <Text>{name}</Text>
        <Button 
          title='Editar'
          style={ECCStyles.editBtn}
          onPress={handleEditContact}
        />
      </View>
    </View>
  )
}

const ECCStyles = StyleSheet.create({
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
    paddingHorizontal: 10
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row'
  },
  editBtn: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent'
  }
})