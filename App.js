import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Home from './telas/Home';
import Receitas from './telas/Receitas';

export default function App() {
  const [navegacao, setNavegacao] = useState('Home')

  const navegar = (tela) => {
    setNavegacao(tela)
  }

  const renderizacao = () => {
    switch(navegacao) {
      case 'Home':
        return <Home navegar={navegar}></Home>
      case 'Receitas':
        return <Receitas navegar={navegar}></Receitas>
      default:
        <Text>Erro 404</Text>
    }
  }

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
