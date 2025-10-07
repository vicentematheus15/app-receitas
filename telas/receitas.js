import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";

// Importando o componente que será usado para adicionar receitas
import AdicionarReceitas from "../componentes/AdicionarReceitas";

// Função que representa a tela Receitas
export default function Receitas({ navegar }) {

  // Controla se está mostrando a lista ou o formulário
  const [view, setView] = useState("lista");

  // Lista de receitas (por enquanto com um número 12 só como exemplo)
  const [receitas, setReceitas] = useState([12]);

  return (
    <View>
      <ScrollView>
        <View>
{/* Botão de voltar para a tela Home */}
          <TouchableOpacity onPress={() => navegar("Home")}>
            <Image
              style={styles.imagem}
              source={require("../assets/arrow-bg.png")}
            />
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
            
            {/* Se não tiver receitas, mostra a mensagem */}
            {receitas.length === 0 ? (
              <Text>Nenhuma receita cadastrada</Text>
            ) : (
              <View>
                {/* Aqui será exibida a lista de receitas futuramente */}
              </View>
            )}
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
