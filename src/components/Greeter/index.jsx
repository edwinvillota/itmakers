import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { setUser } from '../../actions/p3actions'

const Gretter = ({p3, setUser}) => {
  const {user} = p3

  return (
    <View style={GStyles.container}>
      <Text style={GStyles.text}>{`Hello ${user}`}</Text>
      <TextInput 
        style={GStyles.input}
        onChangeText={(text) => setUser(text)}
        placeholder='Ingrese su nombre'
      />
    </View>
  )
} 

const GStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40
  },
  input: {
    width: 300,
    height: 50,
    marginTop: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  }
})

const mapStateToProps = (state) => ({
  p3: state.problem3
})

const mapDispatchToProps = {
  setUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Gretter)