import { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-web';

export default function AdicionarReceitas() {
    const [nome, setNome] = useState('')
    const [ingredientes, setIngredientes] = useState('')
    const [modoPreparo, setModoPreparo] = useState('')

    const salvar = () => {
        if(!nome.trim() || !ingredientes.trim() || !modoPreparo.trim()){
            alert('É necessário preencher todos os campos')
            return
        }

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
            <TextInput 
                value={nome} 
                onChangeText={setNome}
                placeholder='Digite o nome da receita'
            />
            <TextInput
                value={ingredientes}
                onChangeText={setIngredientes}
                placeholder='Digite os ingredientes'
            />
            <TextInput
                value={modoPreparo}
                onChangeText={setModoPreparo}
                placeholder='Digite o modo de preparo'
            />

            <TouchableOpacity onPress={salvar}>
                <Text>Salvar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}