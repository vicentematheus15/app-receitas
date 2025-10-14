import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { useState } from 'react';
import Home from './telas/Home';
import Receitas from './telas/Receitas';

export default function App() {
  // Estado que guarda a tela atual (padrão: 'Home')
  const [navegacao, setNavegacao] = useState('Home')

  // Função para trocar de tela
  const navegar = (tela) => {
    setNavegacao(tela) // Altera o estado para a tela recebida como parâmetro
  }

  // Função que escolhe qual componente (tela) será exibido
  const renderizacao = () => {
    switch(navegacao) {
      case 'Home':
        // Renderiza a tela Home e passa a função navegar como prop
        return <Home navegar={navegar}></Home>

      case 'Receitas':
        // Renderiza a tela Receitas e também passa a função navegar
        return <Receitas navegar={navegar}></Receitas>
        
      default:
         // Caso a tela não seja conhecida, exibe uma mensagem de erro
        return <Text>Erro 404</Text>
    }
  }

  // Retorno do componente principal
  return (
    <View style={styles.container}>
    {renderizacao()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
