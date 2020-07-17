import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useContacts } from '../../hooks/useContacts'
import { StyleSheet, View, Text, ScrollView, TextInput, Button } from 'react-native'
import {ImportContactCard } from '../../components/ImportContactCard'
import { setImportContacts } from '../../actions/p1actions'

const ContactCardList = ({ setImportContacts, navigation }) => {
  const [granted, list] = useContacts()
  const [keyword, setKeyword] = useState(false)
  const [contacts, setContacts] = useState([])
  const [importList, setImportList] = useState([])

  useEffect(() => {
    if (list) {

      if (keyword) {
        const regExp = new RegExp(`(${keyword})`, 'g')
        setContacts(contacts.filter(c => regExp.test(c.name)))
      } else {
        setContacts(list)
      }
    }
  }, [keyword, list])

  const handleAddImportContact = (contact) => {
    setImportList([
      ...importList,
      contact
    ])
  }

  const handleRemoveImportContact = (contactId) => {
    setImportList(importList.filter(c => c.id !== contactId))
  } 

  const handleImportContacts = () => {
    if (importList) {
      setImportContacts(importList)
      navigation.navigate('P1EditContacts')
    }
  } 

  return (
    <View style={CCLStyles.container}>
      <TextInput 
        placeholder='Buscar'
        style={CCLStyles.searchInput}
        onChangeText={(text) => setKeyword(text)}
      />
      <ScrollView style={CCLStyles.list}>
        {
          (granted && contacts) ?
          contacts.map((c) => 
            <ImportContactCard key={c.id} {...c} handleAddImportContact={handleAddImportContact} handleRemoveImportContact={handleRemoveImportContact}/>
          ) :
          (
            <Text>No tienes contactos</Text>
          )
        }
      </ScrollView>
      <Button 
        title={`Importar ${importList.length}`}
        disabled={!importList.length}
        onPress={handleImportContacts}
      />
    </View>
  )
}

const CCLStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  list: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    overflow: 'scroll',
  },
  searchInput: {
    height: 50,
    marginBottom: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  }
})

const mapStateToProps = (state) => ({
  problem1: state.problem1
})

const mapDispatchToProps = {
  setImportContacts
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactCardList)