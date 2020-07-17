import React, {useState} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TodoList } from '../components/TodoList'

const mockTasks = [
  {id: 1, text: 'Programar Frontend', done: false},
  {id: 2, text: 'Programar Backend', done: true},
  {id: 3, text: 'Programar Mobile', done: false},
]



export const Problem2Screen = () => {
  const [tasks, setTasks] = useState(mockTasks)

  const onItemClick = (item, e) => {
    if (item.done) {
      e.preventDefault()
    } else {
      setTasks(tasks.filter(t => {
        if (t.id === item.id) {
          t.done = true
          return t
        } 
        return t
      }))
    }
  }

  return (
  <View style={P2Styles.screen}> 
    <Text style={P2Styles.title}>Lista de Tareas</Text>
    <TodoList items={tasks} onItemClick={onItemClick}/>
  </View>
  )
}

const P2Styles = StyleSheet.create({
  screen: {
    display: 'flex',
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 22
  }
})