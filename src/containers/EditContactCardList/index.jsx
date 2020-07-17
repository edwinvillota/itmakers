import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import { EditContactCard } from '../../components/EditContactCard'

const EditContactCardList = ({ p1, navigation }) => {
  const { importContacts } = p1
  return (
    <View style={EDCCLStyles.container}>
      {
        importContacts ?
        importContacts.map(c => 
          <EditContactCard key={c.id} {...c} navigation={navigation}/> 
        ) :
        <Text>Cargando...</Text>
      }
    </View>
  )
}

const EDCCLStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
})

const mapStateToProps = (state) => ({
  p1: state.problem1  
})

export default connect(mapStateToProps)(EditContactCardList)
