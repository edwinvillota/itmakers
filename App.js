import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import store from './src/store'
import { Provider } from 'react-redux'

// Screens
import { HomeScreen } from './src/screens/Home'
import { Problem1Screen } from './src/screens/Problem1'
import { P1EditContacts } from './src/screens/P1EditContacts'
import { P1EditContact } from './src/screens/P1EditContact'
import { Problem2Screen } from './src/screens/Problem2'
import { Problem3Screen } from './src/screens/Problem3'
import { Problem4Screen } from './src/screens/Problem4'
import { Problem5Screen } from './src/screens/Problem5'

const Tab = createBottomTabNavigator()
const Tabs = () => (
  <Tab.Navigator initialRouteName='Home'>
    <Tab.Screen name='Home' component={HomeScreen} options={{title: 'Inicio'}}/>
    <Tab.Screen name='Problem1' component={Problem1Screen} options={{title: 'Problema 1'}} />
    <Tab.Screen name='Problem2' component={Problem2Screen} options={{title: 'Problema 2'}} />
    <Tab.Screen name='Problem3' component={Problem3Screen} options={{title: 'Problema 3'}} />
    <Tab.Screen name='Problem4' component={Problem4Screen} options={{title: 'Problema 4'}} />
    <Tab.Screen name='Problem5' component={Problem5Screen} options={{title: 'Problema 5'}} />
  </Tab.Navigator>
) ;

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}> 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Tabs} options={{title: 'IT Makers'}} />
          <Stack.Screen name='P1EditContacts' component={P1EditContacts} options={{title: 'Editar Contactos'}}/>
          <Stack.Screen name='P1EditContact' component={P1EditContact} options={{title: 'Editar Contacto'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


