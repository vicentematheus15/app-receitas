import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Home from './telas/Home';
import Receitas from './telas/receitas';

export default function App() {
  const [navegacao, setNavegacao] = useState('Home')

  const navegar = (tela) => {
    setNavegacao(tela)
  }

  return (
    <View style={styles.container}>

      {(navegacao === 'Home') ? (
        <Home navegar={navegar}></Home>
      ) : navegacao === 'Receitas' ? (
        <Receitas navegar={navegar}></Receitas>
      ) : (
        <Text>
          Página não encontrada 404
        </Text>
      )}
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
