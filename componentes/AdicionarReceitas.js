import { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-web';

export default function AdicionarReceitas() {
    const [nome, setNome] = useState('')
    const [ingredientes, setIngredientes] = useState('')
    const [modoPreparo, setModoPreparo] = useState('')



        


    
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