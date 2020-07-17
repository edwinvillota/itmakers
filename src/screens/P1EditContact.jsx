import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import * as Contacts from 'expo-contacts'

export const P1EditContact = ({ route, navigation }) => {
  const { contactId } = route.params
  const [ contact, setContact] = useState(null)

  useEffect(() => {
    updateInfo()
  }, [])

  const updateInfo = async () => {
    try {
      const response = await Contacts.getContactByIdAsync(contactId, [ Contacts.Fields.PhoneNumbers, Contacts.Fields.Image])
      setContact(response)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateContact = async () => {
    await Contacts.presentFormAsync(contactId, contact)
    updateInfo()
  }

  return (
    <View style={P1ECStyles.screen}>
      <Text style={P1ECStyles.title}>Información</Text>
      {
        contact ? 
        (
          <>
            <Text>{`Nombre: ${contact.name}`}</Text>
            <Text>{contact.imageAvailable ? `Imagen Disponible` : 'Imagen No Disponible'}</Text>
          </>
        ) :
        (
          <Text>Cargando...</Text>
        )
      }
      <Text style={P1ECStyles.title}>Editar</Text>

      <Button 
        title='Editar'
        onPress={handleUpdateContact}
      />
    </View>
  )
}

const P1ECStyles = StyleSheet.create({
  screen: {
    display: 'flex',
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10
  },
})