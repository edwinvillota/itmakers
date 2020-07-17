import React from 'react'
import { View } from 'react-native'
import { TodoItem } from '../TodoItem'

export const TodoList = ({items = [], onItemClick = () => {}}) => {
  return (
    <View style={{display: 'flex', flexDirection: 'column'}}>
      {
        items.map(i => 
          <TodoItem key={i.id} {...i} onItemClick={onItemClick}/>
        )
      }
    </View>
  )
}

