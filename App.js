import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Home from './telas/Home';

export default function App() {
  const [navegacao, setNavegacao] = useState('')

  const navegar = (tela) => {
    setNavegacao(tela)
  }

  return (
    <View style={styles.container}>

      {(navegacao === 'Home') ? (
        <Home></Home>
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
