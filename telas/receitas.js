import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";

import AdicionarReceitas from "../componentes/AdicionarReceitas";

export default function Receitas({ navegar }) {
  const [view, setView] = useState("lista");
  const [receitas, setReceitas] = useState([12]);

  return (
    <View>
      <ScrollView>
        <View>
          <TouchableOpacity onPress={() => navegar("Home")}>
            <Image
              style={styles.imagem}
              source={require("../assets/arrow-bg.png")}
            />
          </TouchableOpacity>
          <Text>Receitas</Text>
        </View>

        {view === "lista" ? (
          <View>
            <TouchableOpacity onPress={() => setView("formulario")}>
                <Text>Adicionar receita</Text>
            </TouchableOpacity>
            
            {receitas.length === 0 ? (
              <Text>Nenhuma receita cadastrada</Text>
            ) : (
              <View>

              </View>
            )}
          </View>
        ) : (
          <View>
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
