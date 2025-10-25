import { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-web';

export default function AdicionarReceitas() {
    // Estados para armazenar os valores digitados nos campos
    const [nome, setNome] = useState('')
    const [ingredientes, setIngredientes] = useState('')
    const [modoPreparo, setModoPreparo] = useState('')

    // Função chamada ao clicar em "Salvar"
    const salvar = () => {
        // Verifica se todos os campos estão preenchidos
        if(!nome.trim() || !ingredientes.trim() || !modoPreparo.trim()){
            alert('É necessário preencher todos os campos')
            return
        }

        // Cria um objeto com os dados da nova receita
        const novaReceita = {
            nome,
            ingredientes,
            modoPreparo
        }
        
        console.log(novaReceita);
        alert('Receita criada com sucesso!')
    }
    
    return(
        <ScrollView>
            <Text>Adicionar Receita</Text>

            {/* Campo: nome da receita */}
            <TextInput 
                value={nome} 
                onChangeText={setNome}
                placeholder='Digite o nome da receita'
            />
            {/* Campo: ingredientes */}
            <TextInput
                value={ingredientes}
                onChangeText={setIngredientes}
                placeholder='Digite os ingredientes'
            />
            {/* Campo: modo de preparo */}
            <TextInput
                value={modoPreparo}
                onChangeText={setModoPreparo}
                placeholder='Digite o modo de preparo'
            />
            {/* Botão para salvar a receita */}
            <TouchableOpacity onPress={salvar}>
                <Text>Salvar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}