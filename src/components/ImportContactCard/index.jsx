import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, CheckBox } from 'react-native'

export const ImportContactCard = ({ id, name, handleAddImportContact, handleRemoveImportContact }) => {
  const [checked, setChecked] = useState(false)

  const handleChangueChecked = () => {
    setChecked(!checked)
    if (!checked) {
      handleAddImportContact({id, name})
    } else {
      handleRemoveImportContact(id)
    }
  } 

  return (
    <View style={CCStyles.container}>
      <CheckBox
        value={checked}
        onValueChange={handleChangueChecked}
      />
      <View style={CCStyles.contactInfo}>
        <Text>{name}</Text>
      </View>
    </View>
  )
}

const CCStyles = StyleSheet.create({
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
  contactInfo: {
    display: 'flex',
  }
})