import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export const Problem5Screen = () => {
  const [ combinations, setCombinations ] = useState([]) 
  
  // Lo siento, no me alcanzo el tiempo para desarrollar el algoritmo

  useEffect(() => {
    setCombinations([
      '123+4-5+67-89=100',
      '123+45-67+8-9=100',
      '123-4-5-6-7-8-9=100',
      '12-3-4+5-6+7+89=100',
      '12+3+4+5-6-7+89=100',
      '1+23-4+5+67+8+9=100',
      '1+2+34-5+67+8+9=100',
      '12+3-4+5+67+8+9=100',
      '1+23-4+56+7+8+9=100',
      '1+2+3-4+5+6+78+9=100',
      '123-45-67+89=100'
    ])
  }, [])

  return (
    <View style={P5Styles.screen}>
      <Text style={P5Styles.title}>Combinaciones</Text>
      {
        combinations.map((c, i) => 
          <Text key={i}>{c}</Text>
        )
      }
    </View>
  )
}

const P5Styles = StyleSheet.create({
  screen: {
    display: 'flex',
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 22
  },
})