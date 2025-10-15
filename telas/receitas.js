import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, FlatList } from "react-native";

// Importando o componente que será usado para adicionar receitas
import AdicionarReceitas from "../componentes/AdicionarReceitas";

const DADOS_FAKE = [
  { id: '1',
    nome: 'Bolo de cenoura',
    ingredientes: 'Cenoura',
    modoDePreparo: 'ada'
  },
  { id: '2',
    nome: 'Pão de queijo',
    ingredientes: 'Queijo',
    modoDePreparo: 'sdd'
  }
]

// Função que representa a tela Receitas
export default function Receitas({ navigation }) {
  // Controla se está mostrando a lista ou o formulário
  const [view, setView] = useState("lista");
  // Lista de receitas (por enquanto com um número 12 só como exemplo)
  const [receitas, setReceitas] = useState([DADOS_FAKE]);

  const renderizaItemReceita = ({item}) => {
    console.log(item);
    
    return (
      <View>
        <Text>{item.nome}</Text>
        <Text>{item.ingredientes}</Text>
      </View>
    )
  }

  return (
    <View>
      <ScrollView>
        <View>
{/* Botão de voltar para a tela Home */}
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              style={styles.imagem}
              source={require("../assets/arrow-bg.png")}/>
          </TouchableOpacity>
          <Text>Receitas</Text>
        </View>

{/* Verifica se a view está como "lista" ou "formulario" */}
        {view === "lista" ? (
          <View>
            {/* Botão para trocar para o formulário */}
            <TouchableOpacity onPress={() => setView("formulario")}>
                <Text>Adicionar receita</Text>
            </TouchableOpacity>
            
            <FlatList
              data={receitas}
              keyExtractor={item => item.id}
              renderItem={renderizaItemReceita}
            ></FlatList>
          </View>
        ) : (
          <View>
            {/* Mostra o formulário de adicionar receita */}
            <AdicionarReceitas></AdicionarReceitas>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  imagem: {
    borderWidth: 1,
    borderColor: "#111",
    borderRadius: 10,
  },
});
