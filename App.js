import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './telas/Home';
import Receitas from './telas/Receitas';

export default function App() {
  return (
    // Container principal da navegação do app
    <NavigationContainer>
       {/* Define as telas e a forma de navegação (em pilha) */}
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{title: 'Início'}}></Stack.Screen>
        <Stack.Screen name="Receitas" component={Receitas} options={{title: 'Receitas'}}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
